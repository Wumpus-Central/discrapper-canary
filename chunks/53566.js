r.d(n, {
    n: function () {
        return d;
    }
});
var i,
    a = r(47120);
var o = r(724458);
var s = r(653041);
var l = r(372817);
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
function c(e) {
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
!(function (e) {
    (e.UP = 'ArrowUp'), (e.DOWN = 'ArrowDown'), (e.DROP = 'Shift'), (e.CANCEL = 'Escape');
})(i || (i = {}));
class d {
    disconnect() {
        window.removeEventListener('keydown', this.handleDraggedElementKeyDown, { capture: !0 });
    }
    hoverNode(e) {
        var n;
        let r =
            null ===
                (n = Array.from(this.targetNodes.entries()).find((n) => {
                    let [r, i] = n;
                    return e === i;
                })) || void 0 === n
                ? void 0
                : n[0];
        null != r && (this.actions.hover([r], { clientOffset: c(e) }), (this.currentHoveredNode = e), this.previewer.render(this.monitor), this.announcer.announceHover(e, r), null == e || e.focus());
    }
    getNextDropTarget() {
        var e;
        return this.focusManager.getNextFocusableElement({
            wrap: !1,
            from: null !== (e = this.currentHoveredNode) && void 0 !== e ? e : void 0
        });
    }
    getPreviousDropTarget() {
        var e;
        return this.focusManager.getPreviousFocusableElement({
            wrap: !1,
            from: null !== (e = this.currentHoveredNode) && void 0 !== e ? e : void 0
        });
    }
    getViableTargets(e) {
        return this.getAllowedTargets(e).sort((e, n) => {
            if (e === n) return 0;
            let r = e.compareDocumentPosition(n);
            return (r & (Node.DOCUMENT_POSITION_FOLLOWING | (r & Node.DOCUMENT_POSITION_CONTAINED_BY))) != 0 ? -1 : (r & (Node.DOCUMENT_POSITION_PRECEDING | (r & Node.DOCUMENT_POSITION_CONTAINS))) != 0 ? 1 : 0;
        });
    }
    getAllowedTargets(e) {
        return null == this.monitor.getItemType()
            ? Array.from(e.values())
            : Array.from(e).reduce((e, n) => {
                  let [r, i] = n;
                  return this.manager.getMonitor().canDropOnTarget(r) && e.push(i), e;
              }, []);
    }
    constructor(e, n, r, i, a) {
        u(this, 'targetNodes', void 0),
            u(this, 'manager', void 0),
            u(this, 'previewer', void 0),
            u(this, 'announcer', void 0),
            u(this, 'currentHoveredNode', void 0),
            u(this, 'focusManager', void 0),
            u(this, 'actions', void 0),
            u(this, 'monitor', void 0),
            u(this, 'handleDraggedElementKeyDown', void 0),
            (this.targetNodes = n),
            (this.manager = r),
            (this.previewer = i),
            (this.announcer = a),
            (this.handleDraggedElementKeyDown = async (e) => {
                switch (e.key) {
                    case 'ArrowUp':
                        e.preventDefault(), e.stopPropagation(), this.hoverNode(await this.getPreviousDropTarget());
                        return;
                    case 'ArrowDown':
                        e.preventDefault(), e.stopPropagation(), this.hoverNode(await this.getNextDropTarget());
                }
            }),
            (this.currentHoveredNode = e),
            (this.focusManager = (0, l.E)({
                getFocusableElements: () => this.getViableTargets(n),
                getActiveElement: () => e.ownerDocument.activeElement
            })),
            (this.actions = r.getActions()),
            (this.monitor = r.getMonitor()),
            window.addEventListener('keydown', this.handleDraggedElementKeyDown, { capture: !0 });
    }
}
