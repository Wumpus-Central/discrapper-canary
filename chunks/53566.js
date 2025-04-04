n.d(t, { n: () => a }), n(47120), n(230036), n(653041);
var r = n(372817);
function i(e, t, n) {
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
function o(e) {
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
class a {
    disconnect() {
        window.removeEventListener('keydown', this.handleDraggedElementKeyDown, { capture: !0 });
    }
    hoverNode(e) {
        var t;
        let n =
            null ==
            (t = Array.from(this.targetNodes.entries()).find((t) => {
                let [n, r] = t;
                return e === r;
            }))
                ? void 0
                : t[0];
        null != n && (this.actions.hover([n], { clientOffset: o(e) }), (this.currentHoveredNode = e), this.previewer.render(this.monitor), this.announcer.announceHover(e, n), null == e || e.focus());
    }
    getNextDropTarget() {
        var e;
        return this.focusManager.getNextFocusableElement({
            wrap: !1,
            from: null != (e = this.currentHoveredNode) ? e : void 0
        });
    }
    getPreviousDropTarget() {
        var e;
        return this.focusManager.getPreviousFocusableElement({
            wrap: !1,
            from: null != (e = this.currentHoveredNode) ? e : void 0
        });
    }
    getViableTargets(e) {
        return this.getAllowedTargets(e).sort((e, t) => {
            if (e === t) return 0;
            let n = e.compareDocumentPosition(t);
            return (n & (Node.DOCUMENT_POSITION_FOLLOWING | (n & Node.DOCUMENT_POSITION_CONTAINED_BY))) != 0 ? -1 : +((n & (Node.DOCUMENT_POSITION_PRECEDING | (n & Node.DOCUMENT_POSITION_CONTAINS))) != 0);
        });
    }
    getAllowedTargets(e) {
        return null == this.monitor.getItemType()
            ? Array.from(e.values())
            : Array.from(e).reduce((e, t) => {
                  let [n, r] = t;
                  return this.manager.getMonitor().canDropOnTarget(n) && e.push(r), e;
              }, []);
    }
    constructor(e, t, n, o, a) {
        i(this, 'targetNodes', void 0),
            i(this, 'manager', void 0),
            i(this, 'previewer', void 0),
            i(this, 'announcer', void 0),
            i(this, 'currentHoveredNode', void 0),
            i(this, 'focusManager', void 0),
            i(this, 'actions', void 0),
            i(this, 'monitor', void 0),
            i(this, 'handleDraggedElementKeyDown', void 0),
            (this.targetNodes = t),
            (this.manager = n),
            (this.previewer = o),
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
            (this.focusManager = (0, r.E)({
                getFocusableElements: () => this.getViableTargets(t),
                getActiveElement: () => e.ownerDocument.activeElement
            })),
            (this.actions = n.getActions()),
            (this.monitor = n.getMonitor()),
            window.addEventListener('keydown', this.handleDraggedElementKeyDown, { capture: !0 });
    }
}
