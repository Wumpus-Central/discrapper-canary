n.d(t, {
    XD: () => h,
    eh: () => g,
    sN: () => E,
    sv: () => m,
}),
    n(747238),
    n(812715);
var r = n(627968);
n(64700);
var i = n(317097),
    a = n(397927);
n(23658);
var s = n(101058),
    o = n(486020);
n(453771);
var l = n(427262),
    c = n(687650),
    u = n(478644),
    d = n(339984),
    f = n(985018);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e) {
    let { uploadType: t, guildId: i, analyticsSource: o, filters: l, isTryItOut: p = !1 } = e;
    (0, a.mMO)(async () => {
        let { default: e } = await Promise.all([n.e("79149"), n.e("53653"), n.e("92812")]).then(n.bind(n, 551028));
        return (n) =>
            (0, r.jsx)(
                e,
                _(
                    {
                        filters: l,
                        maxFileSizeBytes: u.j,
                        imageSpecifications: t === d.HL.BANNER ? f.intl.string(f.t.IhzZlo) : void 0,
                        onComplete: (e) => {
                            let { assetOrigin: n, imageUri: r, file: a, originalAsset: l } = e,
                                u = a.name.replace(/\.[^/.]+$/, ""),
                                d = (0, s.Rh)({
                                    filename: u,
                                    assetOrigin: n,
                                }),
                                f = (0, s.XB)({
                                    assetOrigin: n,
                                    imageUri: r,
                                    description: d,
                                    originalAsset: l,
                                });
                            (0, c.H)({
                                image: f,
                                file: a,
                                uploadType: t,
                                guildId: i,
                                analyticsSource: o,
                                isTryItOut: p,
                            });
                        },
                        uploadType: t,
                        showUpsellHeader: !0,
                    },
                    n,
                ),
            );
    });
}
function m(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (null != e) return e;
    let { size: i = 80, canAnimate: a = !0 } = r,
        s = null === e;
    return s && null == t
        ? o.Ay.getDefaultAvatarURL(n.id, n.discriminator)
        : s || (null == t ? void 0 : t.avatar) == null
          ? n.getAvatarURL(void 0, i, a)
          : n.getAvatarURL(null == t ? void 0 : t.guildId, i, a);
}
function g(e) {
    var t;
    let { pendingNickname: n, pendingGlobalName: r, user: i, guildMember: a } = e,
        s = "" === n ? null : null != n ? n : null == a ? void 0 : a.nick,
        o = "" === r ? i.username : r;
    return null != (t = null != s ? s : o) ? t : l.Ay.getName(i);
}
function E(e) {
    return (null != e ? (0, i.OK)(e) : 1) > 0.25;
}
