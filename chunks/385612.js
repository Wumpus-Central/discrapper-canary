n.d(t, { XD: () => A, eh: () => _, rM: () => v, sN: () => f, sv: () => g });
var a = n(627968);
n(64700);
var r = n(317097),
    l = n(192308);
n(23658);
var i = n(101058),
    o = n(486020);
n(453771);
var s = n(427262),
    c = n(687650),
    u = n(478644),
    d = n(339984),
    p = n(985018);
function A(e) {
    let { uploadType: t, guildId: r, analyticsSource: o, filters: s, isTryItOut: A = !1, stackingBehavior: g } = e;
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("63070"), n.e("79149"), n.e("53653"), n.e("92637")]).then(
                n.bind(n, 551028),
            );
            return (n) =>
                (0, a.jsx)(e, {
                    filters: s,
                    maxFileSizeBytes: u.j,
                    imageSpecifications: t === d.HL.BANNER ? p.intl.string(p.t.IhzZlo) : void 0,
                    onComplete: (e) => {
                        let { assetOrigin: n, imageUri: a, file: l, originalAsset: s } = e,
                            u = l.name.replace(/\.[^/.]+$/, ""),
                            d = (0, i.Rh)({ filename: u, assetOrigin: n }),
                            p = (0, i.XB)({ assetOrigin: n, imageUri: a, description: d, originalAsset: s });
                        (0, c.H)({ image: p, file: l, uploadType: t, guildId: r, analyticsSource: o, isTryItOut: A });
                    },
                    uploadType: t,
                    showUpsellHeader: !0,
                    ...n,
                });
        },
        { stackingBehavior: g },
    );
}
function g(e, t, n) {
    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (null != e) return e;
    let { size: r = 80, canAnimate: l = !0 } = a,
        i = null === e;
    return i && null == t
        ? o.Ay.getDefaultAvatarURL(n.id, n.discriminator)
        : i || t?.avatar == null
          ? n.getAvatarURL(void 0, r, l)
          : n.getAvatarURL(t?.guildId, r, l);
}
function _(e) {
    let { pendingNickname: t, pendingGlobalName: n, user: a, guildMember: r } = e,
        l = "" === t ? null : (t ?? r?.nick),
        i = "" === n ? a.username : n;
    return l ?? i ?? s.Ay.getName(a);
}
function v(e, t, n) {
    n(e ?? (null != t ? null : void 0));
}
function f(e) {
    return (null != e ? (0, r.OK)(e) : 1) > 0.25;
}
