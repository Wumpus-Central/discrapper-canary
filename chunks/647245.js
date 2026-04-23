"use strict";
n.d(t, { Ay: () => _, fR: () => c });
var r = n(698351),
    i = n(86675),
    s = n(97191);
let a = [" ", "Enter"],
    o = ["Escape"];
function l(e) {
    e.preventDefault(), e.stopImmediatePropagation();
}
function u(e, t) {
    return t.includes(e.key);
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (!!t && !1 === e.isTrusted) || (e.key?.toLowerCase() === "d" && (e.metaKey || e.ctrlKey) && !e.altKey);
}
class d {
    static isSetUp;
    manager;
    actions;
    monitor;
    context;
    options;
    sourceNodes;
    sourcePreviewNodes;
    sourcePreviewNodeOptions;
    targetNodes;
    _navigator;
    _previewer;
    _announcer;
    _handlingFirstEvent = !1;
    constructor(e, t, n) {
        (this.manager = e),
            (this.actions = e.getActions()),
            (this.monitor = e.getMonitor()),
            (this.context = t),
            (this.options = n),
            (this.sourceNodes = new Map()),
            (this.sourcePreviewNodes = new Map()),
            (this.sourcePreviewNodeOptions = new Map()),
            (this.targetNodes = new Map()),
            (this._previewer = new i.A(t.document)),
            (this._announcer = new r.A(n?.announcer));
    }
    setup() {
        if (d.isSetUp) throw Error("Cannot have two Keyboard backends at the same time.");
        (d.isSetUp = !0),
            (this._handlingFirstEvent = !0),
            this.context.window?.addEventListener("keydown", this.handleGlobalKeyDown, { capture: !0 });
    }
    teardown() {
        (d.isSetUp = !1),
            this.context.window?.removeEventListener("keydown", this.handleGlobalKeyDown, { capture: !0 }),
            this.endDrag();
    }
    handleGlobalKeyDown = (e) => {
        this.monitor.isDragging() && u(e, o) && (this.endDrag(e), this._announcer.announceCancel());
    };
    setDndMode(e) {
        this.options?.onDndModeChanged(e);
    }
    profile() {
        return {
            sourcePreviewNodes: this.sourcePreviewNodes.size,
            sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
            sourceNodes: this.sourceNodes.size,
        };
    }
    connectDragSource(e, t) {
        let n = this.handleDragStart.bind(this, e);
        return (
            this.sourceNodes.set(e, t),
            t.addEventListener("keydown", n),
            () => {
                this.sourceNodes.delete(e), t.removeEventListener("keydown", n);
            }
        );
    }
    connectDragPreview(e, t, n) {
        return (
            this.sourcePreviewNodeOptions.set(e, n),
            this.sourcePreviewNodes.set(e, t),
            () => {
                this.sourcePreviewNodes.delete(e), this.sourcePreviewNodeOptions.delete(e);
            }
        );
    }
    connectDropTarget(e, t) {
        return (
            this.targetNodes.set(e, t),
            t.addEventListener("keydown", this.handleDrop),
            (t.tabIndex = Math.max(-1, t.tabIndex)),
            () => {
                this.targetNodes.delete(e), t.removeEventListener("keydown", this.handleDrop);
            }
        );
    }
    getSourceClientOffset = (e) =>
        (function (e) {
            if (null == e) return { x: 0, y: 0 };
            let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
            if (null == t) return { x: 0, y: 0 };
            let { top: n, left: r } = t.getBoundingClientRect();
            return { x: r, y: n };
        })(this.sourceNodes.get(e));
    handleDragStart = (e, t) => {
        if (!c(t, this._handlingFirstEvent) || ((this._handlingFirstEvent = !1), !this.monitor.canDragSource(e)))
            return;
        if (this.monitor.isDragging()) return void this.actions.publishDragSource();
        l(t);
        let n = this.sourceNodes.get(e);
        null != n &&
            ((this._navigator = new s.c(n, this.targetNodes, this.manager, this._previewer, this._announcer)),
            this._previewer.createDragPreview(this.sourcePreviewNodes.get(e) ?? n),
            this.actions.beginDrag([e], {
                clientOffset: this.getSourceClientOffset(e),
                getSourceClientOffset: this.getSourceClientOffset,
                publishSource: !1,
            }),
            this._previewer.render(this.monitor),
            this.setDndMode(!0),
            this._announcer.announceDrag(n, e));
    };
    handleDrop = (e) => {
        u(e, a) && (this.actions.drop(), this.endDrag(e), this._announcer.announceDrop());
    };
    endDrag(e) {
        null != e && l(e),
            this._navigator?.disconnect(),
            this._previewer.clear(),
            this.monitor.isDragging() && this.actions.endDrag(),
            this.setDndMode(!1);
    }
}
let _ = (e, t, n) => new d(e, t, n);
