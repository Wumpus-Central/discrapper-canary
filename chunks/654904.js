n.d(t, {
    $r: () => f,
    DP: () => h,
    Ly: () => p,
    SG: () => _
});
var i = n(200651);
n(192379);
var r = n(866442),
    a = n(481060);
n(531643);
var s = n(768581);
n(403182);
var o = n(51144),
    l = n(661543),
    u = n(200299),
    c = n(486324),
    d = n(388032);
function f(e, t, r, s) {
    (0, a.ZDy)(async () => {
        let { default: a } = await Promise.all([n.e('70687'), n.e('45610')]).then(n.bind(n, 28130));
        return (n) =>
            (0, i.jsx)(a, {
                filters: s,
                maxFileSizeBytes: u.B,
                imageSpecifications: e === c.pC.BANNER ? d.intl.string(d.t.IhzZlp) : void 0,
                onComplete: (n, i) =>
                    (0, l.j)({
                        imageSrc: n,
                        file: i,
                        uploadType: e,
                        guildId: t,
                        isTryItOutFlow: r
                    }),
                uploadType: e,
                showUpsellHeader: !0,
                ...n
            });
    });
}
function _(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (null != e) return e;
    let { size: r = 80, canAnimate: a = !0 } = i,
        o = null === e;
    return o && null == t ? s.ZP.getDefaultAvatarURL(n.id, n.discriminator) : o || (null == t ? void 0 : t.avatar) == null ? n.getAvatarURL(void 0, r, a) : n.getAvatarURL(null == t ? void 0 : t.guildId, r, a);
}
function p(e) {
    var t;
    let { pendingNickname: n, pendingGlobalName: i, user: r, guildMember: a } = e,
        s = '' === n ? null : null != n ? n : null == a ? void 0 : a.nick,
        l = '' === i ? r.username : i;
    return null !== (t = null != s ? s : l) && void 0 !== t ? t : o.ZP.getName(r);
}
function h(e) {
    return (null != e ? (0, r.Bd)(e) : 1) > 0.25;
}
