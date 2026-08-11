"use strict";
n.d(t, { XD: () => p, sv: () => T, eh: () => m, sN: () => S, rM: () => g, d3: () => N });
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
    _ = n(469054),
    E = n(601298),
    A = n(228366),
    h = n(478644),
    I = n(339984),
    f = n(375708);
function p(e) {
    let {
            uploadType: t,
            guildId: r,
            analyticsSource: d,
            filters: c,
            isTryItOut: u = !1,
            stackingBehavior: p,
            returnRef: T,
        } = e,
        m = (0, l.Y)(t, r),
        g = null;
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("73193"),
                n.e("97250"),
                n.e("22089"),
                n.e("63232"),
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
                    maxFileSizeBytes: h.j,
                    imageSpecifications: t === I.HL.BANNER ? f.intl.string(f.t.IhzZlo) : void 0,
                    onFileSelected: (e) => {
                        g = null != m ? s.A.fromBlob(m, e) : null;
                    },
                    onComplete: async (e) => {
                        var n;
                        let { assetOrigin: i, imageUri: a, staticImageUri: l, file: c, originalAsset: h } = e;
                        null == g && null != m && (g = s.A.fromBlob(m, c));
                        let p = (await g?.getOriginalMd5()) ?? null,
                            T = c.name.replace(/\.[^/.]+$/, ""),
                            S = { imageUri: a, staticImageUri: l, originalMd5: p };
                        (n = {
                            ...(t === I.HL.AVATAR
                                ? {
                                      uploadType: t,
                                      pendingImage: (0, E.X)({
                                          ...S,
                                          assetOrigin: i,
                                          description: (0, o.Rh)({ filename: T, assetOrigin: i }),
                                          originalAsset: h,
                                      }),
                                  }
                                : {
                                      uploadType: t,
                                      pendingImage: (0, E.X)({
                                          ...S,
                                          assetOrigin: _.E.NEW_ASSET,
                                          description: "" !== T ? T : f.intl.string(f.t.yiRnNO),
                                          originalAsset: void 0,
                                      }),
                                  }),
                            file: c,
                            guildId: r,
                            analyticsSource: d,
                            isTryItOut: u,
                        }),
                            A.h.dispatch({ ...n, type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL" });
                    },
                    uploadType: t,
                    showUpsellHeader: !0,
                    returnRef: T,
                    ...n,
                });
        },
        { stackingBehavior: p },
    );
}
function T(e, t, n) {
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
function m(e) {
    let { pendingNickname: t, pendingGlobalName: n, user: i, guildMember: r } = e,
        a = "" === t ? null : (t ?? r?.nick),
        s = "" === n ? i.username : n;
    return a ?? s ?? u.Ay.getName(i);
}
function g(e, t, n) {
    n(e ?? (null != t ? null : void 0));
}
function S(e) {
    return (null != e ? (0, r.OK)(e) : 1) > 0.25;
}
function N(e) {
    return null == e
        ? e
        : e.replace(/[0-9.,]+ ?kb/gi, (e) => {
              let t = 1024 * parseInt(e, 10);
              return isNaN(t) ? e : (0, c.Hb)(t);
          });
}
