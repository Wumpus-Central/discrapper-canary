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
    o = r(192379),
    s = r(120356),
    l = r.n(s),
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
class f extends (i = o.PureComponent) {
    render() {
        let e;
        let { children: n, editable: r, type: i, className: o, outline: s, ...c } = this.props;
        return (
            s ? (e = u.outline) : i === d.PRIMARY && r && (e = u.editable),
            (0, a.jsx)('div', {
                className: l()(o, i, e),
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
