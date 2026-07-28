"use strict";
n.d(t, { XD: () => I, sv: () => f, eh: () => p, sN: () => m, rM: () => T, d3: () => g });
var i = n(477900);
n(582128);
var r = n(317097),
    a = n(192308);
n(494921);
var s = n(77257),
    l = n(61310),
    o = n(101058),
    d = n(486020),
    c = n(453771),
    u = n(427262),
    _ = n(228366),
    E = n(478644),
    A = n(339984),
    h = n(375708);
function I(e) {
    let {
            uploadType: t,
            guildId: r,
            analyticsSource: d,
            filters: c,
            isTryItOut: u = !1,
            stackingBehavior: I,
            returnRef: f,
        } = e,
        p = (0, l.Y)(t, r),
        T = null;
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("73193"),
                n.e("97250"),
                n.e("22089"),
                n.e("40851"),
                n.e("29666"),
                n.e("80436"),
                n.e("93513"),
                n.e("47011"),
                n.e("79149"),
                n.e("90017"),
                n.e("99150"),
                n.e("60987"),
            ]).then(n.bind(n, 902550));
            return (n) =>
                (0, i.jsx)(e, {
                    filters: c,
                    maxFileSizeBytes: E.j,
                    imageSpecifications: t === A.HL.BANNER ? h.intl.string(h.t.IhzZlo) : void 0,
                    onFileSelected: (e) => {
                        T = null != p ? s.A.fromBlob(p, e) : null;
                    },
                    onComplete: async (e) => {
                        let { assetOrigin: n, imageUri: i, file: a, originalAsset: l } = e;
                        null == T && null != p && (T = s.A.fromBlob(p, a));
                        let c = (await T?.getOriginalMd5()) ?? null,
                            E = a.name.replace(/\.[^/.]+$/, ""),
                            A = (0, o.Rh)({ filename: E, assetOrigin: n });
                        !(function (e) {
                            let {
                                image: t,
                                file: n,
                                uploadType: i,
                                guildId: r,
                                analyticsSource: a,
                                isTryItOut: s = !1,
                            } = e;
                            _.h.dispatch({
                                type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
                                image: t,
                                file: n,
                                uploadType: i,
                                guildId: r,
                                analyticsSource: a,
                                isTryItOut: s,
                            });
                        })({
                            image: (0, o.XB)({
                                assetOrigin: n,
                                imageUri: i,
                                description: A,
                                originalAsset: l,
                                originalMd5: c,
                            }),
                            file: a,
                            uploadType: t,
                            guildId: r,
                            analyticsSource: d,
                            isTryItOut: u,
                        });
                    },
                    uploadType: t,
                    showUpsellHeader: !0,
                    returnRef: f,
                    ...n,
                });
        },
        { stackingBehavior: I },
    );
}
function f(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (null != e) return e;
    let { size: r = 80, canAnimate: a = !0 } = i,
        s = null === e;
    return s && null == t
        ? d.Ay.getDefaultAvatarURL(n.id, n.discriminator)
        : s || t?.avatar == null
          ? n.getAvatarURL(void 0, r, a)
          : n.getAvatarURL(t?.guildId, r, a);
}
function p(e) {
    let { pendingNickname: t, pendingGlobalName: n, user: i, guildMember: r } = e,
        a = "" === t ? null : (t ?? r?.nick),
        s = "" === n ? i.username : n;
    return a ?? s ?? u.Ay.getName(i);
}
function T(e, t, n) {
    n(e ?? (null != t ? null : void 0));
}
function m(e) {
    return (null != e ? (0, r.OK)(e) : 1) > 0.25;
}
function g(e) {
    return null == e
        ? e
        : e.replace(/[0-9.,]+ ?kb/gi, (e) => {
              let t = 1024 * parseInt(e, 10);
              return isNaN(t) ? e : (0, c.Hb)(t);
          });
}
