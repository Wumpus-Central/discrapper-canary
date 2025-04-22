n.d(t, {
    $r: () => h,
    DP: () => E,
    Ly: () => g,
    SG: () => m
}),
    n(704826),
    n(35282);
var r = n(200651);
n(192379);
var i = n(866442),
    a = n(481060);
n(531643);
var o = n(643879),
    s = n(768581);
n(403182);
var l = n(51144),
    c = n(661543),
    u = n(200299),
    d = n(486324),
    f = n(388032);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e) {
    let { uploadType: t, guildId: i, analyticsSource: s, filters: l, isTryItOutFlow: _ = !1 } = e;
    (0, a.ZDy)(async () => {
        let { default: e } = await Promise.all([n.e('91689'), n.e('89289'), n.e('78701')]).then(n.bind(n, 28130));
        return (n) =>
            (0, r.jsx)(
                e,
                p(
                    {
                        filters: l,
                        maxFileSizeBytes: u.B,
                        imageSpecifications: t === d.pC.BANNER ? f.intl.string(f.t.IhzZlp) : void 0,
                        onComplete: (e) => {
                            let { assetOrigin: n, imageUri: r, file: a, originalAsset: l } = e,
                                u = a.name.replace(/\.[^/.]+$/, ''),
                                d = (0, o.Z1)({
                                    filename: u,
                                    assetOrigin: n
                                }),
                                f = (0, o.cN)({
                                    assetOrigin: n,
                                    imageUri: r,
                                    description: d,
                                    originalAsset: l
                                });
                            (0, c.j)({
                                image: f,
                                file: a,
                                uploadType: t,
                                guildId: i,
                                analyticsSource: s,
                                isTryItOutFlow: _
                            });
                        },
                        uploadType: t,
                        showUpsellHeader: !0
                    },
                    n
                )
            );
    });
}
function m(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (null != e) return e;
    let { size: i = 80, canAnimate: a = !0 } = r,
        o = null === e;
    return o && null == t ? s.ZP.getDefaultAvatarURL(n.id, n.discriminator) : o || (null == t ? void 0 : t.avatar) == null ? n.getAvatarURL(void 0, i, a) : n.getAvatarURL(null == t ? void 0 : t.guildId, i, a);
}
function g(e) {
    var t;
    let { pendingNickname: n, pendingGlobalName: r, user: i, guildMember: a } = e,
        o = '' === n ? null : null != n ? n : null == a ? void 0 : a.nick,
        s = '' === r ? i.username : r;
    return null != (t = null != o ? o : s) ? t : l.ZP.getName(i);
}
function E(e) {
    return (null != e ? (0, i.Bd)(e) : 1) > 0.25;
}
