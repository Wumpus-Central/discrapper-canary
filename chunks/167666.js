var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(481060),
    u = n(327125);
function c(e, t, n) {
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
let d = {
    SMALL: u.sizeSmall,
    MEDIUM: u.sizeMedium,
    LARGE: u.sizeLarge
};
class f extends (i = a.PureComponent) {
    calculateScroll() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._scroller;
        if (null == e) return;
        let { scrollTop: t } = e.getScrollerState(),
            { hideSeparator: n } = this.state;
        0 !== t || n ? t > 0 && n && this.setState({ hideSeparator: !1 }) : this.setState({ hideSeparator: !0 });
    }
    getScroller() {
        return this._scroller;
    }
    renderChildren() {
        let { hideSeparator: e } = this.state;
        return a.Children.map(this.props.children, (t) =>
            a.isValidElement(t)
                ? t.type === l.hzk || t.type === l.YAO
                    ? a.cloneElement(t, {
                          scrollerRef: this.setRef,
                          onScroll: this.handleScroll,
                          onResize: this.handleScroll
                      })
                    : t.type === l.xBx && e
                      ? a.cloneElement(t, { separator: !1 })
                      : t
                : t
        );
    }
    render() {
        let { className: e, children: t, tag: n, size: i, fullscreenOnMobile: a, ...s } = this.props;
        return (0, r.jsx)(n, {
            className: o()(u.modal, e, i, { [u.fullscreenOnMobile]: a }),
            ...s,
            children: this.renderChildren()
        });
    }
    constructor(e) {
        super(e),
            c(this, '_scroller', null),
            c(this, 'setRef', (e) => {
                (this._scroller = e), null != e && this.calculateScroll();
            }),
            c(this, 'handleScroll', (e) => {
                this.calculateScroll();
                let { onScroll: t } = this.props;
                null == t || t(e);
            }),
            (this.state = { hideSeparator: !1 });
    }
}
c(f, 'Header', l.xBx),
    c(f, 'Footer', l.mzw),
    c(f, 'Content', l.hzk),
    c(f, 'ListContent', l.YAO),
    c(f, 'CloseButton', l.olH),
    c(f, 'Sizes', d),
    c(f, 'defaultProps', {
        fullscreenOnMobile: !0,
        size: d.SMALL,
        tag: 'div'
    });
