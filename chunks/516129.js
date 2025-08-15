t.d(n, { Z: () => x });
var r = t(951288);
t(647438);
var l = t(120356),
    a = t.n(l),
    i = t(780384),
    s = t(481060),
    o = t(410030),
    c = t(44315),
    d = t(208567),
    u = t(981631),
    m = t(156811);
function p(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
let h = u.Ilk.PRIMARY_400,
    g = u.Ilk.PRIMARY_500;
function x(e) {
    var { enabled: n, imageClassName: t, iconWrapperClassName: l } = e,
        u = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                l = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        r,
                        l = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (l[t] = e[t]);
                    return l;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    (t = a[r]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t]);
            }
            return l;
        })(e, ["enabled", "imageClassName", "iconWrapperClassName"]);
    let x = (0, o.ZP)(),
        b = (0, i.wj)(x) ? h : g,
        f = {
            height: 18,
            width: 18,
            color: (0, c.Lq)(b),
        };
    return (0, r.jsx)(
        d.Z,
        p(
            {
                className: a()({
                    [m.avatarUploader]: n,
                    [m.avatarUploaderDisabled]: !n,
                }),
                imageClassName: a()(t, m.avatarUploaderInnerSquare, { [m.avatarUploaderInnerSquareDisabled]: !n }),
                icon:
                    null != u.image && "" !== u.image
                        ? (0, r.jsx)(s.vdY, p({ size: "custom" }, f))
                        : (0, r.jsx)(s.FmF, p({ size: "custom" }, f)),
                iconClassName: a()(m.avatarUploadIcon, m.hideDefaultIcon),
                iconWrapperClassName: l,
                showIcon: !0,
                showIconDisabled: !0,
                hideSize: !0,
            },
            u,
        ),
    );
}
