n.d(t, { sv: () => I, eh: () => _, XD: () => T, sN: () => O, d3: () => b, rM: () => S });
var r = n(477900);
n(582128);
var a = n(317097),
    i = n(192308),
    l = n(23658),
    u = n(724165),
    o = n(61310),
    s = n(101058),
    A = n(486020),
    d = n(453771),
    c = n(515718),
    v = n(427262),
    E = n(469054),
    f = n(601298),
    g = n(73153),
    p = n(478644),
    R = n(339984),
    m = n(792996);
function T(e) {
    let {
            uploadType: t,
            guildId: a,
            analyticsSource: A,
            filters: v,
            isTryItOut: T = !1,
            stackingBehavior: I,
            returnRef: _,
        } = e,
        S = (0, o.Y)(t, a),
        O = null;
    (0, i.mM)(
        async () => {
            let { default: e } = await Promise.all([
                n.e(191601),
                n.e(67702),
                n.e(1214),
                n.e(475006),
                n.e(863232),
                n.e(901555),
                n.e(199999),
                n.e(844695),
                n.e(133902),
                n.e(50015),
                n.e(631644),
                n.e(790244),
                n.e(229666),
                n.e(480436),
                n.e(660953),
                n.e(647011),
                n.e(779149),
                n.e(90017),
                n.e(199150),
                n.e(774836),
            ]).then(n.bind(n, 685663));
            return (n) =>
                (0, r.jsx)(e, {
                    filters: v,
                    maxFileSizeBytes: p.j,
                    compressGIFsToFit: !0,
                    imageSpecifications: t === R.HL.BANNER ? m.intl.string(m.t.IhzZlo) : void 0,
                    onFileSelected: (e) => {
                        O = null != S ? u.A.fromBlob(S, e) : null;
                    },
                    onComplete: async (e) => {
                        var n, r;
                        let { assetOrigin: i, imageUri: o, staticImageUri: v, file: I, originalAsset: _ } = e;
                        if (i !== E.E.ARCHIVED_ASSET) {
                            let e = (0, c.EW)(o);
                            if (e > p.j) {
                                return void ((r = e),
                                (0, l.openUploadError)({
                                    title: m.intl.string(m.t["/tGlcj"]),
                                    help: m.intl.formatToPlainString(m.t.q0rsrZ, {
                                        fileSize: (0, d.Hb)(r),
                                        maxSize: (0, d.Hb)(p.j),
                                    }),
                                }));
                            }
                        }
                        null == O && null != S && (O = u.A.fromBlob(S, I));
                        let b = (await O?.getOriginalMd5()) ?? null,
                            D = I.name.replace(/\.[^/.]+$/, ""),
                            M = { imageUri: o, staticImageUri: v, originalMd5: b };
                        ((n = {
                            ...(t === R.HL.AVATAR
                                ? {
                                      uploadType: t,
                                      pendingImage: (0, f.X)({
                                          ...M,
                                          assetOrigin: i,
                                          description: (0, s.Rh)({ filename: D, assetOrigin: i }),
                                          originalAsset: _,
                                      }),
                                  }
                                : {
                                      uploadType: t,
                                      pendingImage: (0, f.X)({
                                          ...M,
                                          assetOrigin: E.E.NEW_ASSET,
                                          description: "" !== D ? D : m.intl.string(m.t.yiRnNO),
                                          originalAsset: void 0,
                                      }),
                                  }),
                            file: I,
                            guildId: a,
                            analyticsSource: A,
                            isTryItOut: T,
                        }),
                            g.h.dispatch({ ...n, type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL" }));
                    },
                    uploadType: t,
                    showUpsellHeader: !0,
                    returnRef: _,
                    ...n,
                });
        },
        { stackingBehavior: I },
    );
}
function I(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (null != e) return e;
    let { size: a = 80, canAnimate: i = !0 } = r,
        l = null === e;
    return l && null == t
        ? A.Ay.getDefaultAvatarURL(n.id, n.discriminator)
        : l || t?.avatar == null
          ? n.getAvatarURL(void 0, a, i)
          : n.getAvatarURL(t?.guildId, a, i);
}
function _(e) {
    let { pendingNickname: t, pendingGlobalName: n, user: r, guildMember: a } = e,
        i = "" === t ? null : (t ?? a?.nick),
        l = "" === n ? r.username : n;
    return i ?? l ?? v.Ay.getName(r);
}
function S(e, t, n) {
    n(e ?? (null != t ? null : void 0));
}
function O(e) {
    return (null != e ? (0, a.OK)(e) : 1) > 0.25;
}
function b(e) {
    return null == e
        ? e
        : e.replace(/[0-9.,]+ ?kb/gi, (e) => {
              let t = 1024 * parseInt(e, 10);
              return isNaN(t) ? e : (0, d.Hb)(t);
          });
}
