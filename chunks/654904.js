n.d(t, {
    $r: () => h,
    DP: () => E,
    Ly: () => g,
    SG: () => m
}),
    n(757143),
    n(301563);
var r = n(200651);
n(192379);
var i = n(866442),
    o = n(481060);
n(531643);
var a = n(643879),
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
function h(e, t, i, s) {
    (0, o.ZDy)(async () => {
        let { default: o } = await Promise.all([n.e('91689'), n.e('89289'), n.e('36016')]).then(n.bind(n, 28130));
        return (n) =>
            (0, r.jsx)(
                o,
                p(
                    {
                        filters: s,
                        maxFileSizeBytes: u.B,
                        imageSpecifications: e === d.pC.BANNER ? f.NW.string(f.t.IhzZlp) : void 0,
                        onComplete: (n) => {
                            let { assetOrigin: r, imageUri: o, file: s, originalAsset: l } = n,
                                u = s.name.replace(/\.[^/.]+$/, ''),
                                d = (0, a.Z1)({
                                    filename: u,
                                    assetOrigin: r
                                }),
                                f = (0, a.cN)({
                                    assetOrigin: r,
                                    imageUri: o,
                                    description: d,
                                    originalAsset: l
                                });
                            (0, c.j)({
                                image: f,
                                file: s,
                                uploadType: e,
                                guildId: t,
                                isTryItOutFlow: i
                            });
                        },
                        uploadType: e,
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
    let { size: i = 80, canAnimate: o = !0 } = r,
        a = null === e;
    return a && null == t ? s.ZP.getDefaultAvatarURL(n.id, n.discriminator) : a || (null == t ? void 0 : t.avatar) == null ? n.getAvatarURL(void 0, i, o) : n.getAvatarURL(null == t ? void 0 : t.guildId, i, o);
}
function g(e) {
    var t;
    let { pendingNickname: n, pendingGlobalName: r, user: i, guildMember: o } = e,
        a = '' === n ? null : null != n ? n : null == o ? void 0 : o.nick,
        s = '' === r ? i.username : r;
    return null != (t = null != a ? a : s) ? t : l.ZP.getName(i);
}
function E(e) {
    return (null != e ? (0, i.Bd)(e) : 1) > 0.25;
}
