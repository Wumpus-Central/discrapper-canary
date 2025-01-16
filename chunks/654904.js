r.d(n, {
    $r: function () {
        return _;
    },
    DP: function () {
        return m;
    },
    Ly: function () {
        return p;
    },
    SG: function () {
        return h;
    }
});
var i = r(200651);
r(192379);
var a = r(866442),
    s = r(481060);
r(531643);
var o = r(768581);
r(403182);
var l = r(51144),
    u = r(661543),
    c = r(200299),
    d = r(486324),
    f = r(388032);
function _(e, n, a, o) {
    (0, s.openModalLazy)(async () => {
        let { default: s } = await Promise.all([r.e('70687'), r.e('83332')]).then(r.bind(r, 28130));
        return (r) =>
            (0, i.jsx)(s, {
                filters: o,
                maxFileSizeBytes: c.B,
                imageSpecifications: e === d.pC.BANNER ? f.intl.string(f.t.IhzZlp) : void 0,
                onComplete: (r, i) =>
                    (0, u.j)({
                        imageSrc: r,
                        file: i,
                        uploadType: e,
                        guildId: n,
                        isTryItOutFlow: a
                    }),
                uploadType: e,
                showUpsellHeader: !0,
                ...r
            });
    });
}
function h(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (null != e) return e;
    let { size: a = 80, canAnimate: s = !0 } = i,
        l = null === e;
    return l && null == n ? o.ZP.getDefaultAvatarURL(r.id, r.discriminator) : l || (null == n ? void 0 : n.avatar) == null ? r.getAvatarURL(void 0, a, s) : r.getAvatarURL(null == n ? void 0 : n.guildId, a, s);
}
function p(e) {
    var n;
    let { pendingNickname: r, pendingGlobalName: i, user: a, guildMember: s } = e,
        o = '' === r ? null : null != r ? r : null == s ? void 0 : s.nick,
        u = '' === i ? a.username : i;
    return null !== (n = null != o ? o : u) && void 0 !== n ? n : l.ZP.getName(a);
}
function m(e) {
    return (null != e ? (0, a.Bd)(e) : 1) > 0.25;
}
