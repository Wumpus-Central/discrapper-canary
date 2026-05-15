"use strict";
n.d(t, { XD: () => p, sv: () => E, eh: () => m, sN: () => A, rM: () => g });
var i = n(627968);
n(64700);
var r = n(317097),
    s = n(192308);
n(494921);
var a = n(77257),
    o = n(61310),
    l = n(101058),
    u = n(486020);
n(453771);
var c = n(427262),
    d = n(228366),
    _ = n(478644),
    f = n(339984),
    h = n(375708);
function p(e) {
    let { uploadType: t, guildId: r, analyticsSource: u, filters: c, isTryItOut: p = !1, stackingBehavior: E } = e,
        m = (0, o.Y)(t, r),
        g = null;
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("43908"),
                n.e("73953"),
                n.e("43662"),
                n.e("50985"),
                n.e("63232"),
                n.e("33902"),
                n.e("50015"),
                n.e("1555"),
                n.e("44695"),
                n.e("99999"),
                n.e("31644"),
                n.e("90244"),
                n.e("29666"),
                n.e("80436"),
                n.e("93513"),
                n.e("47011"),
                n.e("1530"),
                n.e("90017"),
                n.e("99150"),
                n.e("60987"),
            ]).then(n.bind(n, 902550));
            return (n) =>
                (0, i.jsx)(e, {
                    filters: c,
                    maxFileSizeBytes: _.j,
                    imageSpecifications: t === f.HL.BANNER ? h.intl.string(h.t.IhzZlo) : void 0,
                    onFileSelected: (e) => {
                        g = null != m ? a.A.fromBlob(m, e) : null;
                    },
                    onComplete: async (e) => {
                        let { assetOrigin: n, imageUri: i, file: s, originalAsset: o } = e;
                        null == g && null != m && (g = a.A.fromBlob(m, s));
                        let c = (await g?.getOriginalMd5()) ?? null,
                            _ = s.name.replace(/\.[^/.]+$/, ""),
                            f = (0, l.Rh)({ filename: _, assetOrigin: n });
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
                            isTryItOut: p,
                        });
                    },
                    uploadType: t,
                    showUpsellHeader: !0,
                    ...n,
                });
        },
        { stackingBehavior: E },
    );
}
function E(e, t, n) {
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
function m(e) {
    let { pendingNickname: t, pendingGlobalName: n, user: i, guildMember: r } = e,
        s = "" === t ? null : (t ?? r?.nick),
        a = "" === n ? i.username : n;
    return s ?? a ?? c.Ay.getName(i);
}
function g(e, t, n) {
    n(e ?? (null != t ? null : void 0));
}
function A(e) {
    return (null != e ? (0, r.OK)(e) : 1) > 0.25;
}
