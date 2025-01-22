r.d(n, {
    Tm: function () {
        return p;
    }
});
var i = r(411104);
var a = r(47120);
var o = r(547545),
    s = r(444591),
    l = r(53566);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let c = {
    DROP: [' ', 'Enter'],
    CANCEL_DRAG: ['Escape']
};
function d(e) {
    e.preventDefault(), e.stopImmediatePropagation();
}
function f(e, n) {
    return n.includes(e.key);
}
function p(e) {
    var n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (!!r && !1 === e.isTrusted) || ((null === (n = e.key) || void 0 === n ? void 0 : n.toLowerCase()) === 'd' && (e.metaKey || e.ctrlKey) && !e.altKey);
}
function h(e) {
    if (null == e)
        return {
            x: 0,
            y: 0
        };
    let n = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
    if (null == n)
        return {
            x: 0,
            y: 0
        };
    let { top: r, left: i } = n.getBoundingClientRect();
    return {
        x: i,
        y: r
    };
}
class _ {
    setup() {
        var e;
        if (_.isSetUp) throw Error('Cannot have two Keyboard backends at the same time.');
        (_.isSetUp = !0), (this._handlingFirstEvent = !0), null === (e = this.context.window) || void 0 === e || e.addEventListener('keydown', this.handleGlobalKeyDown, { capture: !0 });
    }
    teardown() {
        var e;
        (_.isSetUp = !1), null === (e = this.context.window) || void 0 === e || e.removeEventListener('keydown', this.handleGlobalKeyDown, { capture: !0 }), this.endDrag();
    }
    setDndMode(e) {
        var n;
        null === (n = this.options) || void 0 === n || n.onDndModeChanged(e);
    }
    profile() {
        return {
            sourcePreviewNodes: this.sourcePreviewNodes.size,
            sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
            sourceNodes: this.sourceNodes.size
        };
    }
    connectDragSource(e, n) {
        let r = this.handleDragStart.bind(this, e);
        return (
            this.sourceNodes.set(e, n),
            n.addEventListener('keydown', r),
            () => {
                this.sourceNodes.delete(e), n.removeEventListener('keydown', r);
            }
        );
    }
    connectDragPreview(e, n, r) {
        return (
            this.sourcePreviewNodeOptions.set(e, r),
            this.sourcePreviewNodes.set(e, n),
            () => {
                this.sourcePreviewNodes.delete(e), this.sourcePreviewNodeOptions.delete(e);
            }
        );
    }
    connectDropTarget(e, n) {
        return (
            this.targetNodes.set(e, n),
            n.addEventListener('keydown', this.handleDrop),
            (n.tabIndex = Math.max(-1, n.tabIndex)),
            () => {
                this.targetNodes.delete(e), n.removeEventListener('keydown', this.handleDrop);
            }
        );
    }
    endDrag(e) {
        var n;
        null != e && d(e), null === (n = this._navigator) || void 0 === n || n.disconnect(), this._previewer.clear(), this.monitor.isDragging() && this.actions.endDrag(), this.setDndMode(!1);
    }
    constructor(e, n, r) {
        u(this, 'manager', void 0),
            u(this, 'actions', void 0),
            u(this, 'monitor', void 0),
            u(this, 'context', void 0),
            u(this, 'options', void 0),
            u(this, 'sourceNodes', void 0),
            u(this, 'sourcePreviewNodes', void 0),
            u(this, 'sourcePreviewNodeOptions', void 0),
            u(this, 'targetNodes', void 0),
            u(this, '_navigator', void 0),
            u(this, '_previewer', void 0),
            u(this, '_announcer', void 0),
            u(this, '_handlingFirstEvent', !1),
            u(this, 'handleGlobalKeyDown', (e) => {
                this.monitor.isDragging() && f(e, c.CANCEL_DRAG) && (this.endDrag(e), this._announcer.announceCancel());
            }),
            u(this, 'getSourceClientOffset', (e) => h(this.sourceNodes.get(e))),
            u(this, 'handleDragStart', (e, n) => {
                var r;
                if (!p(n, this._handlingFirstEvent)) return;
                if (((this._handlingFirstEvent = !1), !this.monitor.canDragSource(e))) return;
                if (this.monitor.isDragging()) {
                    this.actions.publishDragSource();
                    return;
                }
                d(n);
                let i = this.sourceNodes.get(e);
                null != i &&
                    ((this._navigator = new l.n(i, this.targetNodes, this.manager, this._previewer, this._announcer)),
                    this._previewer.createDragPreview(null !== (r = this.sourcePreviewNodes.get(e)) && void 0 !== r ? r : i),
                    this.actions.beginDrag([e], {
                        clientOffset: this.getSourceClientOffset(e),
                        getSourceClientOffset: this.getSourceClientOffset,
                        publishSource: !1
                    }),
                    this._previewer.render(this.monitor),
                    this.setDndMode(!0),
                    this._announcer.announceDrag(i, e));
            }),
            u(this, 'handleDrop', (e) => {
                f(e, c.DROP) && (this.actions.drop(), this.endDrag(e), this._announcer.announceDrop());
            }),
            (this.manager = e),
            (this.actions = e.getActions()),
            (this.monitor = e.getMonitor()),
            (this.context = n),
            (this.options = r),
            (this.sourceNodes = new Map()),
            (this.sourcePreviewNodes = new Map()),
            (this.sourcePreviewNodeOptions = new Map()),
            (this.targetNodes = new Map()),
            (this._previewer = new s.Z(n.document)),
            (this._announcer = new o.Z(null == r ? void 0 : r.announcer));
    }
}
u(_, 'isSetUp', void 0);
let m = (e, n, r) => new _(e, n, r);
n.ZP = m;
