a.d(t, { XD: () => v, sv: () => g, eh: () => f, sN: () => E, rM: () => m });
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
    p = a(228366),
    d = a(478644),
    _ = a(339984),
    A = a(375708);
function v(e) {
    let { uploadType: t, guildId: n, analyticsSource: c, filters: u, isTryItOut: v = !1, stackingBehavior: g } = e,
        f = (0, i.Y)(t, n),
        m = null;
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                a.e("25812"),
                a.e("81857"),
                a.e("43662"),
                a.e("50985"),
                a.e("63232"),
                a.e("33902"),
                a.e("99999"),
                a.e("50015"),
                a.e("1555"),
                a.e("44695"),
                a.e("31644"),
                a.e("90244"),
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
                    maxFileSizeBytes: d.j,
                    imageSpecifications: t === _.HL.BANNER ? A.intl.string(A.t.IhzZlo) : void 0,
                    onFileSelected: (e) => {
                        m = null != f ? o.A.fromBlob(f, e) : null;
                    },
                    onComplete: async (e) => {
                        let { assetOrigin: a, imageUri: r, file: l, originalAsset: i } = e;
                        null == m && null != f && (m = o.A.fromBlob(f, l));
                        let u = (await m?.getOriginalMd5()) ?? null,
                            d = l.name.replace(/\.[^/.]+$/, ""),
                            _ = (0, s.Rh)({ filename: d, assetOrigin: a });
                        !(function (e) {
                            let {
                                image: t,
                                file: a,
                                uploadType: r,
                                guildId: n,
                                analyticsSource: l,
                                isTryItOut: o = !1,
                            } = e;
                            p.h.dispatch({
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
                                description: _,
                                originalAsset: i,
                                originalMd5: u,
                            }),
                            file: l,
                            uploadType: t,
                            guildId: n,
                            analyticsSource: c,
                            isTryItOut: v,
                        });
                    },
                    uploadType: t,
                    showUpsellHeader: !0,
                    ...a,
                });
        },
        { stackingBehavior: g },
    );
}
function g(e, t, a) {
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
function f(e) {
    let { pendingNickname: t, pendingGlobalName: a, user: r, guildMember: n } = e,
        l = "" === t ? null : (t ?? n?.nick),
        o = "" === a ? r.username : a;
    return l ?? o ?? u.Ay.getName(r);
}
function m(e, t, a) {
    a(e ?? (null != t ? null : void 0));
}
function E(e) {
    return (null != e ? (0, n.OK)(e) : 1) > 0.25;
}
