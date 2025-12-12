n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(692547),
    s = n(481060),
    o = n(410030),
    c = n(208567),
    d = n(37679);
function u(e) {
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
let g = a.Z.unsafe_rawColors.PRIMARY_400.css,
    f = a.Z.unsafe_rawColors.PRIMARY_500.css;
function m(e) {
    var { enabled: t, imageClassName: n, iconWrapperClassName: i } = e,
        a = (function (e, t) {
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
    let m = (0, o.ZP)(),
        b = {
            height: 18,
            width: 18,
            color: (0, s.wjy)(m) ? g : f,
        };
    return (0, r.jsx)(
        c.Z,
        u(
            {
                className: l()({
                    [d.avatarUploader]: t,
                    [d.avatarUploaderDisabled]: !t,
                }),
                imageClassName: l()(n, d.avatarUploaderInnerSquare, { [d.avatarUploaderInnerSquareDisabled]: !t }),
                icon:
                    null != a.image && "" !== a.image
                        ? (0, r.jsx)(s.vdY, u({ size: "custom" }, b))
                        : (0, r.jsx)(s.FmF, u({ size: "custom" }, b)),
                iconClassName: l()(d.avatarUploadIcon, d.hideDefaultIcon),
                iconWrapperClassName: i,
                showIcon: !0,
                showIconDisabled: !0,
                hideSize: !0,
            },
            a,
        ),
    );
}
