"use strict";
n.d(t, { XD: () => p, sv: () => m, eh: () => g, sN: () => I, rM: () => A, d3: () => T });
var i = n(627968);
n(64700);
var r = n(317097),
    s = n(192308);
n(494921);
var a = n(77257),
    o = n(61310),
    l = n(101058),
    u = n(486020),
    c = n(453771),
    d = n(427262),
    _ = n(228366),
    h = n(478644),
    f = n(339984),
    E = n(375708);
function p(e) {
    let { uploadType: t, guildId: r, analyticsSource: u, filters: c, isTryItOut: d = !1, stackingBehavior: p } = e,
        m = (0, o.Y)(t, r),
        g = null;
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("79465"),
                n.e("21866"),
                n.e("50985"),
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
                    imageSpecifications: t === f.HL.BANNER ? E.intl.string(E.t.IhzZlo) : void 0,
                    onFileSelected: (e) => {
                        g = null != m ? a.A.fromBlob(m, e) : null;
                    },
                    onComplete: async (e) => {
                        let { assetOrigin: n, imageUri: i, file: s, originalAsset: o } = e;
                        null == g && null != m && (g = a.A.fromBlob(m, s));
                        let c = (await g?.getOriginalMd5()) ?? null,
                            h = s.name.replace(/\.[^/.]+$/, ""),
                            f = (0, l.Rh)({ filename: h, assetOrigin: n });
                        !(function (e) {
                            let {
                                image: t,
                                file: n,
                                uploadType: i,
                                guildId: r,
                                analyticsSource: s,
                                isTryItOut: a = !1,
                            } = e;
                            _.h.dispatch({
                                type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
                                image: t,
                                file: n,
                                uploadType: i,
                                guildId: r,
                                analyticsSource: s,
                                isTryItOut: a,
                            });
                        })({
                            image: (0, l.XB)({
                                assetOrigin: n,
                                imageUri: i,
                                description: f,
                                originalAsset: o,
                                originalMd5: c,
                            }),
                            file: s,
                            uploadType: t,
                            guildId: r,
                            analyticsSource: u,
                            isTryItOut: d,
                        });
                    },
                    uploadType: t,
                    showUpsellHeader: !0,
                    ...n,
                });
        },
        { stackingBehavior: p },
    );
}
function m(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (null != e) return e;
    let { size: r = 80, canAnimate: s = !0 } = i,
        a = null === e;
    return a && null == t
        ? u.Ay.getDefaultAvatarURL(n.id, n.discriminator)
        : a || t?.avatar == null
          ? n.getAvatarURL(void 0, r, s)
          : n.getAvatarURL(t?.guildId, r, s);
}
function g(e) {
    let { pendingNickname: t, pendingGlobalName: n, user: i, guildMember: r } = e,
        s = "" === t ? null : (t ?? r?.nick),
        a = "" === n ? i.username : n;
    return s ?? a ?? d.Ay.getName(i);
}
function A(e, t, n) {
    n(e ?? (null != t ? null : void 0));
}
function I(e) {
    return (null != e ? (0, r.OK)(e) : 1) > 0.25;
}
function T(e) {
    return null == e
        ? e
        : e.replace(/[0-9.,]+ ?kb/gi, (e) => {
              let t = 1024 * parseInt(e, 10);
              return isNaN(t) ? e : (0, c.Hb)(t);
          });
}
