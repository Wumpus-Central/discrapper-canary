"use strict";
n.d(t, { XD: () => f, eh: () => h, sN: () => m, sv: () => p });
var r = n(627968);
n(64700);
var i = n(317097),
    s = n(397927);
n(23658);
var a = n(101058),
    o = n(486020);
n(453771);
var l = n(427262),
    u = n(687650),
    c = n(478644),
    d = n(339984),
    _ = n(985018);
function f(e) {
    let { uploadType: t, guildId: i, analyticsSource: o, filters: l, isTryItOut: f = !1, stackingBehavior: p } = e;
    (0, s.mMO)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("91757"),
                n.e("49924"),
                n.e("59701"),
                n.e("53653"),
                n.e("77179"),
            ]).then(n.bind(n, 551028));
            return (n) =>
                (0, r.jsx)(e, {
                    filters: l,
                    maxFileSizeBytes: c.j,
                    imageSpecifications: t === d.HL.BANNER ? _.intl.string(_.t.IhzZlo) : void 0,
                    onComplete: (e) => {
                        let { assetOrigin: n, imageUri: r, file: s, originalAsset: l } = e,
                            c = s.name.replace(/\.[^/.]+$/, ""),
                            d = (0, a.Rh)({ filename: c, assetOrigin: n }),
                            _ = (0, a.XB)({ assetOrigin: n, imageUri: r, description: d, originalAsset: l });
                        (0, u.H)({ image: _, file: s, uploadType: t, guildId: i, analyticsSource: o, isTryItOut: f });
                    },
                    uploadType: t,
                    showUpsellHeader: !0,
                    ...n,
                });
        },
        { stackingBehavior: p },
    );
}
function p(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (null != e) return e;
    let { size: i = 80, canAnimate: s = !0 } = r,
        a = null === e;
    return a && null == t
        ? o.Ay.getDefaultAvatarURL(n.id, n.discriminator)
        : a || t?.avatar == null
          ? n.getAvatarURL(void 0, i, s)
          : n.getAvatarURL(t?.guildId, i, s);
}
function h(e) {
    let { pendingNickname: t, pendingGlobalName: n, user: r, guildMember: i } = e,
        s = "" === t ? null : (t ?? i?.nick),
        a = "" === n ? r.username : n;
    return s ?? a ?? l.Ay.getName(r);
}
function m(e) {
    return (null != e ? (0, i.OK)(e) : 1) > 0.25;
}
