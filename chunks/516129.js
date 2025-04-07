n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(780384),
    l = n(481060),
    o = n(410030),
    c = n(44315),
    d = n(208567),
    u = n(981631),
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
let p = u.Ilk.PRIMARY_400,
    h = u.Ilk.PRIMARY_500;
function f(e) {
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
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['enabled', 'imageClassName', 'iconWrapperClassName']);
    let f = (0, o.ZP)(),
        b = (0, a.wj)(f) ? p : h,
        x = {
            height: 18,
            width: 18,
            color: (0, c.Lq)(b)
        };
    return (0, r.jsx)(
        d.Z,
        g(
            {
                className: s()({
                    [m.avatarUploader]: t,
                    [m.avatarUploaderDisabled]: !t
                }),
                imageClassName: s()(n, m.avatarUploaderInnerSquare, { [m.avatarUploaderInnerSquareDisabled]: !t }),
                icon: null != u.image && '' !== u.image ? (0, r.jsx)(l.vdY, g({ size: 'custom' }, x)) : (0, r.jsx)(l.FmF, g({ size: 'custom' }, x)),
                iconClassName: s()(m.avatarUploadIcon, m.hideDefaultIcon),
                iconWrapperClassName: i,
                showIcon: !0,
                showIconDisabled: !0,
                hideSize: !0
            },
            u
        )
    );
}
