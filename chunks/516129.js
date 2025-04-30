n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    s = n(780384),
    a = n(481060),
    o = n(410030),
    c = n(44315),
    u = n(208567),
    d = n(981631),
    m = n(758253);
function g(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let p = d.Ilk.PRIMARY_400,
    h = d.Ilk.PRIMARY_500;
function f(e) {
    var { enabled: t, imageClassName: n, iconWrapperClassName: i } = e,
        d = (function (e, t) {
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
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['enabled', 'imageClassName', 'iconWrapperClassName']);
    let f = (0, o.ZP)(),
        x = (0, s.wj)(f) ? p : h,
        b = {
            height: 18,
            width: 18,
            color: (0, c.Lq)(x)
        };
    return (0, r.jsx)(
        u.Z,
        g(
            {
                className: l()({
                    [m.avatarUploader]: t,
                    [m.avatarUploaderDisabled]: !t
                }),
                imageClassName: l()(n, m.avatarUploaderInnerSquare, { [m.avatarUploaderInnerSquareDisabled]: !t }),
                icon: null != d.image && '' !== d.image ? (0, r.jsx)(a.vdY, g({ size: 'custom' }, b)) : (0, r.jsx)(a.FmF, g({ size: 'custom' }, b)),
                iconClassName: l()(m.avatarUploadIcon, m.hideDefaultIcon),
                iconWrapperClassName: i,
                showIcon: !0,
                showIconDisabled: !0,
                hideSize: !0
            },
            d
        )
    );
}
