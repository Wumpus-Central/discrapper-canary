n.d(t, { XD: () => m, sv: () => R, eh: () => I, sN: () => _, rM: () => T, d3: () => b });
var r = n(477900);
n(582128);
var a = n(317097),
    i = n(192308);
n(494921);
var l = n(77257),
    u = n(61310),
    o = n(101058),
    s = n(486020),
    A = n(453771),
    c = n(427262),
    d = n(469054),
    g = n(601298),
    E = n(228366),
    v = n(478644),
    f = n(339984),
    p = n(375708);
function m(e) {
    let {
            uploadType: t,
            guildId: a,
            analyticsSource: s,
            filters: A,
            isTryItOut: c = !1,
            stackingBehavior: m,
            returnRef: R,
        } = e,
        I = (0, u.Y)(t, a),
        T = null;
    (0, i.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("357625"),
                n.e("411430"),
                n.e("1214"),
                n.e("475006"),
                n.e("863232"),
                n.e("50015"),
                n.e("199999"),
                n.e("790244"),
                n.e("844695"),
                n.e("901555"),
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
                    maxFileSizeBytes: v.j,
                    imageSpecifications: t === f.HL.BANNER ? p.intl.string(p.t.IhzZlo) : void 0,
                    onFileSelected: (e) => {
                        T = null != I ? l.A.fromBlob(I, e) : null;
                    },
                    onComplete: async (e) => {
                        var n;
                        let { assetOrigin: r, imageUri: i, staticImageUri: u, file: A, originalAsset: v } = e;
                        null == T && null != I && (T = l.A.fromBlob(I, A));
                        let m = (await T?.getOriginalMd5()) ?? null,
                            R = A.name.replace(/\.[^/.]+$/, ""),
                            _ = { imageUri: i, staticImageUri: u, originalMd5: m };
                        (n = {
                            ...(t === f.HL.AVATAR
                                ? {
                                      uploadType: t,
                                      pendingImage: (0, g.X)({
                                          ..._,
                                          assetOrigin: r,
                                          description: (0, o.Rh)({ filename: R, assetOrigin: r }),
                                          originalAsset: v,
                                      }),
                                  }
                                : {
                                      uploadType: t,
                                      pendingImage: (0, g.X)({
                                          ..._,
                                          assetOrigin: d.E.NEW_ASSET,
                                          description: "" !== R ? R : p.intl.string(p.t.yiRnNO),
                                          originalAsset: void 0,
                                      }),
                                  }),
                            file: A,
                            guildId: a,
                            analyticsSource: s,
                            isTryItOut: c,
                        }),
                            E.h.dispatch({ ...n, type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL" });
                    },
                    uploadType: t,
                    showUpsellHeader: !0,
                    returnRef: R,
                    ...n,
                });
        },
        { stackingBehavior: m },
    );
}
function R(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (null != e) return e;
    let { size: a = 80, canAnimate: i = !0 } = r,
        l = null === e;
    return l && null == t
        ? s.Ay.getDefaultAvatarURL(n.id, n.discriminator)
        : l || t?.avatar == null
          ? n.getAvatarURL(void 0, a, i)
          : n.getAvatarURL(t?.guildId, a, i);
}
function I(e) {
    let { pendingNickname: t, pendingGlobalName: n, user: r, guildMember: a } = e,
        i = "" === t ? null : (t ?? a?.nick),
        l = "" === n ? r.username : n;
    return i ?? l ?? c.Ay.getName(r);
}
function T(e, t, n) {
    n(e ?? (null != t ? null : void 0));
}
function _(e) {
    return (null != e ? (0, a.OK)(e) : 1) > 0.25;
}
function b(e) {
    return null == e
        ? e
        : e.replace(/[0-9.,]+ ?kb/gi, (e) => {
              let t = 1024 * parseInt(e, 10);
              return isNaN(t) ? e : (0, A.Hb)(t);
          });
}
