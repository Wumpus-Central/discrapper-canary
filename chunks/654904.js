r.d(n, {
    $r: function () {
        return p;
    },
    DP: function () {
        return m;
    },
    Ly: function () {
        return _;
    },
    SG: function () {
        return h;
    }
});
var i = r(200651);
r(192379);
var a = r(866442),
    o = r(481060);
r(531643);
var s = r(768581);
r(403182);
var l = r(51144),
    u = r(661543),
    c = r(200299),
    d = r(486324),
    f = r(388032);
function p(e, n, a, s) {
    (0, o.openModalLazy)(async () => {
        let { default: o } = await Promise.all([r.e('70687'), r.e('84419')]).then(r.bind(r, 28130));
        return (r) =>
            (0, i.jsx)(o, {
                filters: s,
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
    let { size: a = 80, canAnimate: o = !0 } = i,
        l = null === e;
    return l && null == n ? s.ZP.getDefaultAvatarURL(r.id, r.discriminator) : l || (null == n ? void 0 : n.avatar) == null ? r.getAvatarURL(void 0, a, o) : r.getAvatarURL(null == n ? void 0 : n.guildId, a, o);
}
function _(e) {
    var n;
    let { pendingNickname: r, pendingGlobalName: i, user: a, guildMember: o } = e,
        s = '' === r ? null : null != r ? r : null == o ? void 0 : o.nick,
        u = '' === i ? a.username : i;
    return null !== (n = null != s ? s : u) && void 0 !== n ? n : l.ZP.getName(a);
}
function m(e) {
    return (null != e ? (0, a.Bd)(e) : 1) > 0.25;
}
