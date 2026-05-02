a.d(t, { XD: () => d, sv: () => v, eh: () => R, sN: () => f, rM: () => g });
var r = a(627968);
a(64700);
var n = a(317097),
    l = a(192308);
a(494921);
var o = a(77257),
    i = a(61310),
    s = a(101058),
    c = a(486020);
a(453771);
var u = a(427262),
    _ = a(228366),
    A = a(478644),
    p = a(339984),
    E = a(375708);
function d(e) {
    let { uploadType: t, guildId: n, analyticsSource: c, filters: u, isTryItOut: d = !1, stackingBehavior: v } = e,
        R = (0, i.Y)(t, n),
        g = null;
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                a.e("59007"),
                a.e("90261"),
                a.e("16933"),
                a.e("71018"),
                a.e("63232"),
                a.e("50015"),
                a.e("47017"),
                a.e("1555"),
                a.e("44695"),
                a.e("33902"),
                a.e("11527"),
                a.e("31644"),
                a.e("63070"),
                a.e("76170"),
                a.e("99999"),
                a.e("29666"),
                a.e("80436"),
                a.e("93513"),
                a.e("47011"),
                a.e("79149"),
                a.e("90017"),
                a.e("99150"),
                a.e("60987"),
            ]).then(a.bind(a, 902550));
            return (a) =>
                (0, r.jsx)(e, {
                    filters: u,
                    maxFileSizeBytes: A.j,
                    imageSpecifications: t === p.HL.BANNER ? E.intl.string(E.t.IhzZlo) : void 0,
                    onFileSelected: (e) => {
                        g = null != R ? o.A.fromBlob(R, e) : null;
                    },
                    onComplete: async (e) => {
                        let { assetOrigin: a, imageUri: r, file: l, originalAsset: i } = e;
                        null == g && null != R && (g = o.A.fromBlob(R, l));
                        let u = (await g?.getOriginalMd5()) ?? null,
                            A = l.name.replace(/\.[^/.]+$/, ""),
                            p = (0, s.Rh)({ filename: A, assetOrigin: a });
                        !(function (e) {
                            let {
                                image: t,
                                file: a,
                                uploadType: r,
                                guildId: n,
                                analyticsSource: l,
                                isTryItOut: o = !1,
                            } = e;
                            _.h.dispatch({
                                type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
                                image: t,
                                file: a,
                                uploadType: r,
                                guildId: n,
                                analyticsSource: l,
                                isTryItOut: o,
                            });
                        })({
                            image: (0, s.XB)({
                                assetOrigin: a,
                                imageUri: r,
                                description: p,
                                originalAsset: i,
                                originalMd5: u,
                            }),
                            file: l,
                            uploadType: t,
                            guildId: n,
                            analyticsSource: c,
                            isTryItOut: d,
                        });
                    },
                    uploadType: t,
                    showUpsellHeader: !0,
                    ...a,
                });
        },
        { stackingBehavior: v },
    );
}
function v(e, t, a) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (null != e) return e;
    let { size: n = 80, canAnimate: l = !0 } = r,
        o = null === e;
    return o && null == t
        ? c.Ay.getDefaultAvatarURL(a.id, a.discriminator)
        : o || t?.avatar == null
          ? a.getAvatarURL(void 0, n, l)
          : a.getAvatarURL(t?.guildId, n, l);
}
function R(e) {
    let { pendingNickname: t, pendingGlobalName: a, user: r, guildMember: n } = e,
        l = "" === t ? null : (t ?? n?.nick),
        o = "" === a ? r.username : a;
    return l ?? o ?? u.Ay.getName(r);
}
function g(e, t, a) {
    a(e ?? (null != t ? null : void 0));
}
function f(e) {
    return (null != e ? (0, n.OK)(e) : 1) > 0.25;
}
