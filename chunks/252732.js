t.d(r, { XD: () => v, sv: () => A, eh: () => _, sN: () => h, rM: () => g });
var a = t(627968);
t(64700);
var n = t(317097),
    l = t(192308);
t(494921);
var i = t(77257),
    o = t(61310),
    s = t(101058),
    u = t(486020);
t(453771);
var c = t(427262),
    p = t(228366),
    d = t(478644),
    f = t(339984),
    m = t(375708);
function v(e) {
    let { uploadType: r, guildId: n, analyticsSource: u, filters: c, isTryItOut: v = !1, stackingBehavior: A } = e,
        _ = (0, o.Y)(r, n),
        g = null;
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                t.e("90163"),
                t.e("42515"),
                t.e("63232"),
                t.e("50015"),
                t.e("44695"),
                t.e("31644"),
                t.e("90244"),
                t.e("33902"),
                t.e("1555"),
                t.e("99999"),
                t.e("29666"),
                t.e("80436"),
                t.e("93513"),
                t.e("47011"),
                t.e("79149"),
                t.e("90017"),
                t.e("99150"),
                t.e("60987"),
            ]).then(t.bind(t, 902550));
            return (t) =>
                (0, a.jsx)(e, {
                    filters: c,
                    maxFileSizeBytes: d.j,
                    imageSpecifications: r === f.HL.BANNER ? m.intl.string(m.t.IhzZlo) : void 0,
                    onFileSelected: (e) => {
                        g = null != _ ? i.A.fromBlob(_, e) : null;
                    },
                    onComplete: async (e) => {
                        let { assetOrigin: t, imageUri: a, file: l, originalAsset: o } = e;
                        null == g && null != _ && (g = i.A.fromBlob(_, l));
                        let c = (await g?.getOriginalMd5()) ?? null,
                            d = l.name.replace(/\.[^/.]+$/, ""),
                            f = (0, s.Rh)({ filename: d, assetOrigin: t });
                        !(function (e) {
                            let {
                                image: r,
                                file: t,
                                uploadType: a,
                                guildId: n,
                                analyticsSource: l,
                                isTryItOut: i = !1,
                            } = e;
                            p.h.dispatch({
                                type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
                                image: r,
                                file: t,
                                uploadType: a,
                                guildId: n,
                                analyticsSource: l,
                                isTryItOut: i,
                            });
                        })({
                            image: (0, s.XB)({
                                assetOrigin: t,
                                imageUri: a,
                                description: f,
                                originalAsset: o,
                                originalMd5: c,
                            }),
                            file: l,
                            uploadType: r,
                            guildId: n,
                            analyticsSource: u,
                            isTryItOut: v,
                        });
                    },
                    uploadType: r,
                    showUpsellHeader: !0,
                    ...t,
                });
        },
        { stackingBehavior: A },
    );
}
function A(e, r, t) {
    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (null != e) return e;
    let { size: n = 80, canAnimate: l = !0 } = a,
        i = null === e;
    return i && null == r
        ? u.Ay.getDefaultAvatarURL(t.id, t.discriminator)
        : i || r?.avatar == null
          ? t.getAvatarURL(void 0, n, l)
          : t.getAvatarURL(r?.guildId, n, l);
}
function _(e) {
    let { pendingNickname: r, pendingGlobalName: t, user: a, guildMember: n } = e,
        l = "" === r ? null : (r ?? n?.nick),
        i = "" === t ? a.username : t;
    return l ?? i ?? c.Ay.getName(a);
}
function g(e, r, t) {
    t(e ?? (null != r ? null : void 0));
}
function h(e) {
    return (null != e ? (0, n.OK)(e) : 1) > 0.25;
}
