n.d(t, {
    Z: () => d,
    s: () => c
});
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(598288);
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
let c = {
    PRIMARY: l.cardPrimary,
    DANGER: l.cardDanger,
    WARNING: l.cardWarning,
    SUCCESS: l.cardSuccess,
    BRAND: l.cardBrand,
    CUSTOM: l.card
};
class d extends (i = a.PureComponent) {
    render() {
        let e;
        let { children: t, editable: n, type: i, className: a, outline: s, ...u } = this.props;
        return (
            s ? (e = l.outline) : i === c.PRIMARY && n && (e = l.editable),
            (0, r.jsx)('div', {
                className: o()(a, i, e),
                ...u,
                children: t
            })
        );
    }
}
u(d, 'Types', c),
    u(d, 'defaultProps', {
        type: c.PRIMARY,
        outline: !1,
        editable: !1
    });
