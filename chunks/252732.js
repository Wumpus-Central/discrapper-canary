n.d(t, { XD: () => R, sv: () => m, eh: () => T, sN: () => I, rM: () => _, d3: () => M });
var r = n(477900);
n(582128);
var a = n(317097),
    l = n(192308);
n(494921);
var i = n(268429),
    u = n(61310),
    o = n(101058),
    s = n(486020),
    A = n(453771),
    d = n(427262),
    c = n(469054),
    v = n(601298),
    E = n(228366),
    g = n(478644),
    f = n(339984),
    p = n(375708);
function R(e) {
    let {
            uploadType: t,
            guildId: a,
            analyticsSource: s,
            filters: A,
            isTryItOut: d = !1,
            stackingBehavior: R,
            returnRef: m,
        } = e,
        T = (0, u.Y)(t, a),
        _ = null;
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("357625"),
                n.e("67702"),
                n.e("1214"),
                n.e("475006"),
                n.e("863232"),
                n.e("901555"),
                n.e("844695"),
                n.e("50015"),
                n.e("199999"),
                n.e("631644"),
                n.e("790244"),
                n.e("133902"),
                n.e("229666"),
                n.e("480436"),
                n.e("93513"),
                n.e("647011"),
                n.e("779149"),
                n.e("90017"),
                n.e("199150"),
                n.e("760987"),
            ]).then(n.bind(n, 902550));
            return (n) =>
                (0, r.jsx)(e, {
                    filters: A,
                    maxFileSizeBytes: g.j,
                    imageSpecifications: t === f.HL.BANNER ? p.intl.string(p.t.IhzZlo) : void 0,
                    onFileSelected: (e) => {
                        _ = null != T ? i.A.fromBlob(T, e) : null;
                    },
                    onComplete: async (e) => {
                        var n;
                        let { assetOrigin: r, imageUri: l, staticImageUri: u, file: A, originalAsset: g } = e;
                        null == _ && null != T && (_ = i.A.fromBlob(T, A));
                        let R = (await _?.getOriginalMd5()) ?? null,
                            m = A.name.replace(/\.[^/.]+$/, ""),
                            I = { imageUri: l, staticImageUri: u, originalMd5: R };
                        (n = {
                            ...(t === f.HL.AVATAR
                                ? {
                                      uploadType: t,
                                      pendingImage: (0, v.X)({
                                          ...I,
                                          assetOrigin: r,
                                          description: (0, o.Rh)({ filename: m, assetOrigin: r }),
                                          originalAsset: g,
                                      }),
                                  }
                                : {
                                      uploadType: t,
                                      pendingImage: (0, v.X)({
                                          ...I,
                                          assetOrigin: c.E.NEW_ASSET,
                                          description: "" !== m ? m : p.intl.string(p.t.yiRnNO),
                                          originalAsset: void 0,
                                      }),
                                  }),
                            file: A,
                            guildId: a,
                            analyticsSource: s,
                            isTryItOut: d,
                        }),
                            E.h.dispatch({ ...n, type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL" });
                    },
                    uploadType: t,
                    showUpsellHeader: !0,
                    returnRef: m,
                    ...n,
                });
        },
        { stackingBehavior: R },
    );
}
function m(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (null != e) return e;
    let { size: a = 80, canAnimate: l = !0 } = r,
        i = null === e;
    return i && null == t
        ? s.Ay.getDefaultAvatarURL(n.id, n.discriminator)
        : i || t?.avatar == null
          ? n.getAvatarURL(void 0, a, l)
          : n.getAvatarURL(t?.guildId, a, l);
}
function T(e) {
    let { pendingNickname: t, pendingGlobalName: n, user: r, guildMember: a } = e,
        l = "" === t ? null : (t ?? a?.nick),
        i = "" === n ? r.username : n;
    return l ?? i ?? d.Ay.getName(r);
}
function _(e, t, n) {
    n(e ?? (null != t ? null : void 0));
}
function I(e) {
    return (null != e ? (0, a.OK)(e) : 1) > 0.25;
}
function M(e) {
    return null == e
        ? e
        : e.replace(/[0-9.,]+ ?kb/gi, (e) => {
              let t = 1024 * parseInt(e, 10);
              return isNaN(t) ? e : (0, A.Hb)(t);
          });
}
