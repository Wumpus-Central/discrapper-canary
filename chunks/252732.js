t.d(a, { XD: () => R, sv: () => d, eh: () => g, sN: () => m, rM: () => f });
var n = t(627968);
t(64700);
var r = t(317097),
    l = t(192308);
t(23658);
var i = t(870218),
    o = t(61310),
    s = t(101058),
    _ = t(486020);
t(453771);
var u = t(427262),
    A = t(228366),
    c = t(478644),
    E = t(339984),
    p = t(985018);
function R(e) {
    let { uploadType: a, guildId: r, analyticsSource: _, filters: u, isTryItOut: R = !1, stackingBehavior: d } = e,
        g = (0, o.Y)(a, r),
        f = null;
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                t.e("87904"),
                t.e("90261"),
                t.e("16933"),
                t.e("63232"),
                t.e("50015"),
                t.e("47017"),
                t.e("1555"),
                t.e("44695"),
                t.e("33902"),
                t.e("31644"),
                t.e("993"),
                t.e("76170"),
                t.e("99999"),
                t.e("11527"),
                t.e("6223"),
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
                (0, n.jsx)(e, {
                    filters: u,
                    maxFileSizeBytes: c.j,
                    imageSpecifications: a === E.HL.BANNER ? p.intl.string(p.t.IhzZlo) : void 0,
                    onFileSelected: (e) => {
                        f = null != g ? i.A.fromBlob(g, e) : null;
                    },
                    onComplete: async (e) => {
                        let { assetOrigin: t, imageUri: n, file: l, originalAsset: o } = e;
                        null == f && null != g && (f = i.A.fromBlob(g, l));
                        let u = (await f?.getOriginalMd5()) ?? null,
                            c = l.name.replace(/\.[^/.]+$/, ""),
                            E = (0, s.Rh)({ filename: c, assetOrigin: t });
                        !(function (e) {
                            let {
                                image: a,
                                file: t,
                                uploadType: n,
                                guildId: r,
                                analyticsSource: l,
                                isTryItOut: i = !1,
                            } = e;
                            A.h.dispatch({
                                type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
                                image: a,
                                file: t,
                                uploadType: n,
                                guildId: r,
                                analyticsSource: l,
                                isTryItOut: i,
                            });
                        })({
                            image: (0, s.XB)({
                                assetOrigin: t,
                                imageUri: n,
                                description: E,
                                originalAsset: o,
                                originalMd5: u,
                            }),
                            file: l,
                            uploadType: a,
                            guildId: r,
                            analyticsSource: _,
                            isTryItOut: R,
                        });
                    },
                    uploadType: a,
                    showUpsellHeader: !0,
                    ...t,
                });
        },
        { stackingBehavior: d },
    );
}
function d(e, a, t) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (null != e) return e;
    let { size: r = 80, canAnimate: l = !0 } = n,
        i = null === e;
    return i && null == a
        ? _.Ay.getDefaultAvatarURL(t.id, t.discriminator)
        : i || a?.avatar == null
          ? t.getAvatarURL(void 0, r, l)
          : t.getAvatarURL(a?.guildId, r, l);
}
function g(e) {
    let { pendingNickname: a, pendingGlobalName: t, user: n, guildMember: r } = e,
        l = "" === a ? null : (a ?? r?.nick),
        i = "" === t ? n.username : t;
    return l ?? i ?? u.Ay.getName(n);
}
function f(e, a, t) {
    t(e ?? (null != a ? null : void 0));
}
function m(e) {
    return (null != e ? (0, r.OK)(e) : 1) > 0.25;
}
