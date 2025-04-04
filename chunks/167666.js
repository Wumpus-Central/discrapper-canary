var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(481060),
    c = n(972849);
function u(e, t, n) {
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
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let m = {
    SMALL: c.sizeSmall,
    MEDIUM: c.sizeMedium,
    LARGE: c.sizeLarge
};
class g extends (r = o.PureComponent) {
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
        return o.Children.map(this.props.children, (t) =>
            o.isValidElement(t)
                ? t.type === l.hzk || t.type === l.YAO
                    ? o.cloneElement(t, {
                          scrollerRef: this.setRef,
                          onScroll: this.handleScroll,
                          onResize: this.handleScroll
                      })
                    : t.type === l.xBx && e
                      ? o.cloneElement(t, { separator: !1 })
                      : t
                : t
        );
    }
    render() {
        let e = this.props,
            { className: t, children: n, tag: r, size: o, fullscreenOnMobile: a } = e,
            l = p(e, ['className', 'children', 'tag', 'size', 'fullscreenOnMobile']);
        return (0, i.jsx)(r, _(d({ className: s()(c.modal, t, o, { [c.fullscreenOnMobile]: a }) }, l), { children: this.renderChildren() }));
    }
    constructor(e) {
        super(e),
            u(this, '_scroller', null),
            u(this, 'setRef', (e) => {
                (this._scroller = e), null != e && this.calculateScroll();
            }),
            u(this, 'handleScroll', (e) => {
                this.calculateScroll();
                let { onScroll: t } = this.props;
                null == t || t(e);
            }),
            (this.state = { hideSeparator: !1 });
    }
}
u(g, 'Header', l.xBx),
    u(g, 'Footer', l.mzw),
    u(g, 'Content', l.hzk),
    u(g, 'ListContent', l.YAO),
    u(g, 'CloseButton', l.olH),
    u(g, 'Sizes', m),
    u(g, 'defaultProps', {
        fullscreenOnMobile: !0,
        size: m.SMALL,
        tag: 'div'
    });
