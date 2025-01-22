var i,
    a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(481060),
    c = r(370624);
function d(e, n, r) {
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
let f = {
    SMALL: c.sizeSmall,
    MEDIUM: c.sizeMedium,
    LARGE: c.sizeLarge
};
class p extends (i = o.PureComponent) {
    calculateScroll() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._scroller;
        if (null == e) return;
        let { scrollTop: n } = e.getScrollerState(),
            { hideSeparator: r } = this.state;
        0 !== n || r ? n > 0 && r && this.setState({ hideSeparator: !1 }) : this.setState({ hideSeparator: !0 });
    }
    getScroller() {
        return this._scroller;
    }
    renderChildren() {
        let { hideSeparator: e } = this.state;
        return o.Children.map(this.props.children, (n) =>
            o.isValidElement(n)
                ? n.type === u.ModalContent || n.type === u.ModalListContent
                    ? o.cloneElement(n, {
                          scrollerRef: this.setRef,
                          onScroll: this.handleScroll,
                          onResize: this.handleScroll
                      })
                    : n.type === u.ModalHeader && e
                      ? o.cloneElement(n, { separator: !1 })
                      : n
                : n
        );
    }
    render() {
        let { className: e, children: n, tag: r, size: i, fullscreenOnMobile: o, ...s } = this.props;
        return (0, a.jsx)(r, {
            className: l()(c.modal, e, i, { [c.fullscreenOnMobile]: o }),
            ...s,
            children: this.renderChildren()
        });
    }
    constructor(e) {
        super(e),
            d(this, '_scroller', null),
            d(this, 'setRef', (e) => {
                (this._scroller = e), null != e && this.calculateScroll();
            }),
            d(this, 'handleScroll', (e) => {
                this.calculateScroll();
                let { onScroll: n } = this.props;
                null == n || n(e);
            }),
            (this.state = { hideSeparator: !1 });
    }
}
d(p, 'Header', u.ModalHeader),
    d(p, 'Footer', u.ModalFooter),
    d(p, 'Content', u.ModalContent),
    d(p, 'ListContent', u.ModalListContent),
    d(p, 'CloseButton', u.ModalCloseButton),
    d(p, 'Sizes', f),
    d(p, 'defaultProps', {
        fullscreenOnMobile: !0,
        size: f.SMALL,
        tag: 'div'
    });
