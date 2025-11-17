n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(780384),
    s = n(481060),
    o = n(410030),
    c = n(44315),
    d = n(208567),
    u = n(981631),
    g = n(156811);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let p = u.Ilk.PRIMARY_400,
    f = u.Ilk.PRIMARY_500;
function h(e) {
    var { enabled: t, imageClassName: n, iconWrapperClassName: i } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["enabled", "imageClassName", "iconWrapperClassName"]);
    let h = (0, o.ZP)(),
        b = (0, a.wj)(h) ? p : f,
        x = {
            height: 18,
            width: 18,
            color: (0, c.Lq)(b),
        };
    return (0, r.jsx)(
        d.Z,
        m(
            {
                className: l()({
                    [g.avatarUploader]: t,
                    [g.avatarUploaderDisabled]: !t,
                }),
                imageClassName: l()(n, g.avatarUploaderInnerSquare, { [g.avatarUploaderInnerSquareDisabled]: !t }),
                icon:
                    null != u.image && "" !== u.image
                        ? (0, r.jsx)(s.vdY, m({ size: "custom" }, x))
                        : (0, r.jsx)(s.FmF, m({ size: "custom" }, x)),
                iconClassName: l()(g.avatarUploadIcon, g.hideDefaultIcon),
                iconWrapperClassName: i,
                showIcon: !0,
                showIconDisabled: !0,
                hideSize: !0,
            },
            u,
        ),
    );
}
