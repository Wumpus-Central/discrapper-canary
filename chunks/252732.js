a.d(n, { XD: () => _, sv: () => g, eh: () => A, sN: () => f, rM: () => m });
var t = a(627968);
a(64700);
var r = a(317097),
    i = a(192308);
a(23658);
var l = a(101058),
    o = a(486020);
a(453771);
var s = a(427262),
    u = a(228366),
    c = a(478644),
    d = a(339984),
    p = a(985018);
function _(e) {
    let { uploadType: n, guildId: r, analyticsSource: o, filters: s, isTryItOut: _ = !1, stackingBehavior: g } = e;
    (0, i.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([a.e("20861"), a.e("79149"), a.e("60987"), a.e("36013")]).then(
                a.bind(a, 902550),
            );
            return (a) =>
                (0, t.jsx)(e, {
                    filters: s,
                    maxFileSizeBytes: c.j,
                    imageSpecifications: n === d.HL.BANNER ? p.intl.string(p.t.IhzZlo) : void 0,
                    onComplete: (e) => {
                        let { assetOrigin: a, imageUri: t, file: i, originalAsset: s } = e,
                            c = i.name.replace(/\.[^/.]+$/, ""),
                            d = (0, l.Rh)({ filename: c, assetOrigin: a });
                        !(function (e) {
                            let {
                                image: n,
                                file: a,
                                uploadType: t,
                                guildId: r,
                                analyticsSource: i,
                                isTryItOut: l = !1,
                            } = e;
                            u.h.dispatch({
                                type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
                                image: n,
                                file: a,
                                uploadType: t,
                                guildId: r,
                                analyticsSource: i,
                                isTryItOut: l,
                            });
                        })({
                            image: (0, l.XB)({ assetOrigin: a, imageUri: t, description: d, originalAsset: s }),
                            file: i,
                            uploadType: n,
                            guildId: r,
                            analyticsSource: o,
                            isTryItOut: _,
                        });
                    },
                    uploadType: n,
                    showUpsellHeader: !0,
                    ...a,
                });
        },
        { stackingBehavior: g },
    );
}
function g(e, n, a) {
    let t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (null != e) return e;
    let { size: r = 80, canAnimate: i = !0 } = t,
        l = null === e;
    return l && null == n
        ? o.Ay.getDefaultAvatarURL(a.id, a.discriminator)
        : l || n?.avatar == null
          ? a.getAvatarURL(void 0, r, i)
          : a.getAvatarURL(n?.guildId, r, i);
}
function A(e) {
    let { pendingNickname: n, pendingGlobalName: a, user: t, guildMember: r } = e,
        i = "" === n ? null : (n ?? r?.nick),
        l = "" === a ? t.username : a;
    return i ?? l ?? s.Ay.getName(t);
}
function m(e, n, a) {
    a(e ?? (null != n ? null : void 0));
}
function f(e) {
    return (null != e ? (0, r.OK)(e) : 1) > 0.25;
}
