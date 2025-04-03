n.d(t, {
    Tm: () => u,
    ZP: () => _
}),
    n(411104),
    n(47120);
var r = n(547545),
    i = n(444591),
    o = n(53566);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = {
    DROP: [' ', 'Enter'],
    CANCEL_DRAG: ['Escape']
};
function l(e) {
    e.preventDefault(), e.stopImmediatePropagation();
}
function c(e, t) {
    return t.includes(e.key);
}
function u(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (!!n && !1 === e.isTrusted) || ((null == (t = e.key) ? void 0 : t.toLowerCase()) === 'd' && (e.metaKey || e.ctrlKey) && !e.altKey);
}
function d(e) {
    if (null == e)
        return {
            x: 0,
            y: 0
        };
    let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
    if (null == t)
        return {
            x: 0,
            y: 0
        };
    let { top: n, left: r } = t.getBoundingClientRect();
    return {
        x: r,
        y: n
    };
}
class f {
    setup() {
        var e;
        if (f.isSetUp) throw Error('Cannot have two Keyboard backends at the same time.');
        (f.isSetUp = !0), (this._handlingFirstEvent = !0), null == (e = this.context.window) || e.addEventListener('keydown', this.handleGlobalKeyDown, { capture: !0 });
    }
    teardown() {
        var e;
        (f.isSetUp = !1), null == (e = this.context.window) || e.removeEventListener('keydown', this.handleGlobalKeyDown, { capture: !0 }), this.endDrag();
    }
    setDndMode(e) {
        var t;
        null == (t = this.options) || t.onDndModeChanged(e);
    }
    profile() {
        return {
            sourcePreviewNodes: this.sourcePreviewNodes.size,
            sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
            sourceNodes: this.sourceNodes.size
        };
    }
    connectDragSource(e, t) {
        let n = this.handleDragStart.bind(this, e);
        return (
            this.sourceNodes.set(e, t),
            t.addEventListener('keydown', n),
            () => {
                this.sourceNodes.delete(e), t.removeEventListener('keydown', n);
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
            t.addEventListener('keydown', this.handleDrop),
            (t.tabIndex = Math.max(-1, t.tabIndex)),
            () => {
                this.targetNodes.delete(e), t.removeEventListener('keydown', this.handleDrop);
            }
        );
    }
    endDrag(e) {
        var t;
        null != e && l(e), null == (t = this._navigator) || t.disconnect(), this._previewer.clear(), this.monitor.isDragging() && this.actions.endDrag(), this.setDndMode(!1);
    }
    constructor(e, t, n) {
        a(this, 'manager', void 0),
            a(this, 'actions', void 0),
            a(this, 'monitor', void 0),
            a(this, 'context', void 0),
            a(this, 'options', void 0),
            a(this, 'sourceNodes', void 0),
            a(this, 'sourcePreviewNodes', void 0),
            a(this, 'sourcePreviewNodeOptions', void 0),
            a(this, 'targetNodes', void 0),
            a(this, '_navigator', void 0),
            a(this, '_previewer', void 0),
            a(this, '_announcer', void 0),
            a(this, '_handlingFirstEvent', !1),
            a(this, 'handleGlobalKeyDown', (e) => {
                this.monitor.isDragging() && c(e, s.CANCEL_DRAG) && (this.endDrag(e), this._announcer.announceCancel());
            }),
            a(this, 'getSourceClientOffset', (e) => d(this.sourceNodes.get(e))),
            a(this, 'handleDragStart', (e, t) => {
                var n;
                if (!u(t, this._handlingFirstEvent) || ((this._handlingFirstEvent = !1), !this.monitor.canDragSource(e))) return;
                if (this.monitor.isDragging()) return void this.actions.publishDragSource();
                l(t);
                let r = this.sourceNodes.get(e);
                null != r &&
                    ((this._navigator = new o.n(r, this.targetNodes, this.manager, this._previewer, this._announcer)),
                    this._previewer.createDragPreview(null != (n = this.sourcePreviewNodes.get(e)) ? n : r),
                    this.actions.beginDrag([e], {
                        clientOffset: this.getSourceClientOffset(e),
                        getSourceClientOffset: this.getSourceClientOffset,
                        publishSource: !1
                    }),
                    this._previewer.render(this.monitor),
                    this.setDndMode(!0),
                    this._announcer.announceDrag(r, e));
            }),
            a(this, 'handleDrop', (e) => {
                c(e, s.DROP) && (this.actions.drop(), this.endDrag(e), this._announcer.announceDrop());
            }),
            (this.manager = e),
            (this.actions = e.getActions()),
            (this.monitor = e.getMonitor()),
            (this.context = t),
            (this.options = n),
            (this.sourceNodes = new Map()),
            (this.sourcePreviewNodes = new Map()),
            (this.sourcePreviewNodeOptions = new Map()),
            (this.targetNodes = new Map()),
            (this._previewer = new i.Z(t.document)),
            (this._announcer = new r.Z(null == n ? void 0 : n.announcer));
    }
}
a(f, 'isSetUp', void 0);
let _ = (e, t, n) => new f(e, t, n);
