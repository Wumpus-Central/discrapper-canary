"use strict";
n.d(t, { XD: () => f, eh: () => p, sN: () => g, sv: () => h });
var r = n(627968);
n(64700);
var i = n(317097),
    a = n(397927);
n(23658);
var s = n(101058),
    o = n(486020);
n(453771);
var l = n(427262),
    u = n(687650),
    c = n(478644),
    d = n(339984),
    _ = n(985018);
function f(e) {
    let { uploadType: t, guildId: i, analyticsSource: o, filters: l, isTryItOut: f = !1 } = e;
    (0, a.mMO)(async () => {
        let { default: e } = await Promise.all([n.e("59701"), n.e("53653"), n.e("8261")]).then(n.bind(n, 551028));
        return (n) =>
            (0, r.jsx)(e, {
                filters: l,
                maxFileSizeBytes: c.j,
                imageSpecifications: t === d.HL.BANNER ? _.intl.string(_.t.IhzZlo) : void 0,
                onComplete: (e) => {
                    let { assetOrigin: n, imageUri: r, file: a, originalAsset: l } = e,
                        c = a.name.replace(/\.[^/.]+$/, ""),
                        d = (0, s.Rh)({ filename: c, assetOrigin: n }),
                        _ = (0, s.XB)({ assetOrigin: n, imageUri: r, description: d, originalAsset: l });
                    (0, u.H)({ image: _, file: a, uploadType: t, guildId: i, analyticsSource: o, isTryItOut: f });
                },
                uploadType: t,
                showUpsellHeader: !0,
                ...n,
            });
    });
}
function h(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (null != e) return e;
    let { size: i = 80, canAnimate: a = !0 } = r,
        s = null === e;
    return s && null == t
        ? o.Ay.getDefaultAvatarURL(n.id, n.discriminator)
        : s || t?.avatar == null
          ? n.getAvatarURL(void 0, i, a)
          : n.getAvatarURL(t?.guildId, i, a);
}
function p(e) {
    let { pendingNickname: t, pendingGlobalName: n, user: r, guildMember: i } = e,
        a = "" === t ? null : (t ?? i?.nick),
        s = "" === n ? r.username : n;
    return a ?? s ?? l.Ay.getName(r);
}
function g(e) {
    return (null != e ? (0, i.OK)(e) : 1) > 0.25;
}
