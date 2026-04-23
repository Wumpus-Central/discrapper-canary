"use strict";
n.d(t, { XD: () => E, sv: () => h, eh: () => m, sN: () => g, rM: () => f });
var i = n(627968);
n(64700);
var r = n(317097),
    s = n(192308);
n(23658);
var a = n(101058),
    o = n(486020);
n(453771);
var l = n(427262),
    d = n(228366),
    _ = n(478644),
    u = n(339984),
    c = n(985018);
function E(e) {
    let { uploadType: t, guildId: r, analyticsSource: o, filters: l, isTryItOut: E = !1, stackingBehavior: h } = e;
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("79149"), n.e("60987"), n.e("61788")]).then(n.bind(n, 902550));
            return (n) =>
                (0, i.jsx)(e, {
                    filters: l,
                    maxFileSizeBytes: _.j,
                    imageSpecifications: t === u.HL.BANNER ? c.intl.string(c.t.IhzZlo) : void 0,
                    onComplete: (e) => {
                        let { assetOrigin: n, imageUri: i, file: s, originalAsset: l } = e,
                            _ = s.name.replace(/\.[^/.]+$/, ""),
                            u = (0, a.Rh)({ filename: _, assetOrigin: n });
                        !(function (e) {
                            let {
                                image: t,
                                file: n,
                                uploadType: i,
                                guildId: r,
                                analyticsSource: s,
                                isTryItOut: a = !1,
                            } = e;
                            d.h.dispatch({
                                type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
                                image: t,
                                file: n,
                                uploadType: i,
                                guildId: r,
                                analyticsSource: s,
                                isTryItOut: a,
                            });
                        })({
                            image: (0, a.XB)({ assetOrigin: n, imageUri: i, description: u, originalAsset: l }),
                            file: s,
                            uploadType: t,
                            guildId: r,
                            analyticsSource: o,
                            isTryItOut: E,
                        });
                    },
                    uploadType: t,
                    showUpsellHeader: !0,
                    ...n,
                });
        },
        { stackingBehavior: h },
    );
}
function h(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (null != e) return e;
    let { size: r = 80, canAnimate: s = !0 } = i,
        a = null === e;
    return a && null == t
        ? o.Ay.getDefaultAvatarURL(n.id, n.discriminator)
        : a || t?.avatar == null
          ? n.getAvatarURL(void 0, r, s)
          : n.getAvatarURL(t?.guildId, r, s);
}
function m(e) {
    let { pendingNickname: t, pendingGlobalName: n, user: i, guildMember: r } = e,
        s = "" === t ? null : (t ?? r?.nick),
        a = "" === n ? i.username : n;
    return s ?? a ?? l.Ay.getName(i);
}
function f(e, t, n) {
    n(e ?? (null != t ? null : void 0));
}
function g(e) {
    return (null != e ? (0, r.OK)(e) : 1) > 0.25;
}
