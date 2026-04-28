t.d(a, { XD: () => d, sv: () => g, eh: () => A, sN: () => E, rM: () => f });
var n = t(627968);
t(64700);
var r = t(317097),
    l = t(192308);
t(23658);
var i = t(101058),
    o = t(486020);
t(453771);
var s = t(427262),
    u = t(228366),
    _ = t(478644),
    c = t(339984),
    p = t(985018);
function d(e) {
    let { uploadType: a, guildId: r, analyticsSource: o, filters: s, isTryItOut: d = !1, stackingBehavior: g } = e;
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                t.e("94232"),
                t.e("93816"),
                t.e("25385"),
                t.e("48486"),
                t.e("43662"),
                t.e("50985"),
                t.e("40851"),
                t.e("31644"),
                t.e("50015"),
                t.e("44695"),
                t.e("33902"),
                t.e("76170"),
                t.e("99999"),
                t.e("47017"),
                t.e("1555"),
                t.e("993"),
                t.e("11527"),
                t.e("6223"),
                t.e("80436"),
                t.e("29666"),
                t.e("93513"),
                t.e("47011"),
                t.e("79149"),
                t.e("90017"),
                t.e("99150"),
                t.e("60987"),
            ]).then(t.bind(t, 902550));
            return (t) =>
                (0, n.jsx)(e, {
                    filters: s,
                    maxFileSizeBytes: _.j,
                    imageSpecifications: a === c.HL.BANNER ? p.intl.string(p.t.IhzZlo) : void 0,
                    onComplete: (e) => {
                        let { assetOrigin: t, imageUri: n, file: l, originalAsset: s } = e,
                            _ = l.name.replace(/\.[^/.]+$/, ""),
                            c = (0, i.Rh)({ filename: _, assetOrigin: t });
                        !(function (e) {
                            let {
                                image: a,
                                file: t,
                                uploadType: n,
                                guildId: r,
                                analyticsSource: l,
                                isTryItOut: i = !1,
                            } = e;
                            u.h.dispatch({
                                type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
                                image: a,
                                file: t,
                                uploadType: n,
                                guildId: r,
                                analyticsSource: l,
                                isTryItOut: i,
                            });
                        })({
                            image: (0, i.XB)({ assetOrigin: t, imageUri: n, description: c, originalAsset: s }),
                            file: l,
                            uploadType: a,
                            guildId: r,
                            analyticsSource: o,
                            isTryItOut: d,
                        });
                    },
                    uploadType: a,
                    showUpsellHeader: !0,
                    ...t,
                });
        },
        { stackingBehavior: g },
    );
}
function g(e, a, t) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (null != e) return e;
    let { size: r = 80, canAnimate: l = !0 } = n,
        i = null === e;
    return i && null == a
        ? o.Ay.getDefaultAvatarURL(t.id, t.discriminator)
        : i || a?.avatar == null
          ? t.getAvatarURL(void 0, r, l)
          : t.getAvatarURL(a?.guildId, r, l);
}
function A(e) {
    let { pendingNickname: a, pendingGlobalName: t, user: n, guildMember: r } = e,
        l = "" === a ? null : (a ?? r?.nick),
        i = "" === t ? n.username : t;
    return l ?? i ?? s.Ay.getName(n);
}
function f(e, a, t) {
    t(e ?? (null != a ? null : void 0));
}
function E(e) {
    return (null != e ? (0, r.OK)(e) : 1) > 0.25;
}
