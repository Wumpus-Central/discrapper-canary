r.d(n, {
    Z: function () {
        return f;
    },
    s: function () {
        return d;
    }
});
var i,
    a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(598288);
function c(e, n, r) {
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
let d = {
    PRIMARY: u.cardPrimary,
    DANGER: u.cardDanger,
    WARNING: u.cardWarning,
    SUCCESS: u.cardSuccess,
    BRAND: u.cardBrand,
    CUSTOM: u.card
};
class f extends (i = s.PureComponent) {
    render() {
        let e;
        let { children: n, editable: r, type: i, className: s, outline: o, ...c } = this.props;
        return (
            o ? (e = u.outline) : i === d.PRIMARY && r && (e = u.editable),
            (0, a.jsx)('div', {
                className: l()(s, i, e),
                ...c,
                children: n
            })
        );
    }
}
c(f, 'Types', d),
    c(f, 'defaultProps', {
        type: d.PRIMARY,
        outline: !1,
        editable: !1
    });
