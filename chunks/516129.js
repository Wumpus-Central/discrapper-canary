n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    s = n(692547),
    a = n(481060),
    o = n(410030),
    c = n(208567),
    u = n(156811);
function d(e) {
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
let g = s.Z.unsafe_rawColors.PRIMARY_400.css,
    m = s.Z.unsafe_rawColors.PRIMARY_500.css;
function p(e) {
    var { enabled: t, imageClassName: n, iconWrapperClassName: i } = e,
        s = (function (e, t) {
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
    let p = (0, o.ZP)(),
        f = {
            height: 18,
            width: 18,
            color: (0, a.wjy)(p) ? g : m,
        };
    return (0, r.jsx)(
        c.Z,
        d(
            {
                className: l()({
                    [u.avatarUploader]: t,
                    [u.avatarUploaderDisabled]: !t,
                }),
                imageClassName: l()(n, u.avatarUploaderInnerSquare, { [u.avatarUploaderInnerSquareDisabled]: !t }),
                icon:
                    null != s.image && "" !== s.image
                        ? (0, r.jsx)(a.vdY, d({ size: "custom" }, f))
                        : (0, r.jsx)(a.FmF, d({ size: "custom" }, f)),
                iconClassName: l()(u.avatarUploadIcon, u.hideDefaultIcon),
                iconWrapperClassName: i,
                showIcon: !0,
                showIconDisabled: !0,
                hideSize: !0,
            },
            s,
        ),
    );
}
