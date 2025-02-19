n.d(t, {
    $r: () => _,
    DP: () => g,
    Ly: () => m,
    SG: () => h
});
var r = n(200651);
n(192379);
var i = n(866442),
    o = n(481060);
n(531643);
var a = n(768581);
n(403182);
var s = n(51144),
    l = n(661543),
    c = n(200299),
    u = n(486324),
    d = n(388032);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t, i, a) {
    (0, o.ZDy)(async () => {
        let { default: o } = await Promise.all([n.e('91689'), n.e('55849'), n.e('6812')]).then(n.bind(n, 192277));
        return (n) =>
            (0, r.jsx)(
                o,
                p(
                    {
                        filters: a,
                        maxFileSizeBytes: c.B,
                        imageSpecifications: e === u.pC.BANNER ? d.NW.string(d.t.IhzZlp) : void 0,
                        onComplete: (n, r) =>
                            (0, l.j)({
                                imageSrc: n,
                                file: r,
                                uploadType: e,
                                guildId: t,
                                isTryItOutFlow: i
                            }),
                        uploadType: e,
                        showUpsellHeader: !0
                    },
                    n
                )
            );
    });
}
function h(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (null != e) return e;
    let { size: i = 80, canAnimate: o = !0 } = r,
        s = null === e;
    return s && null == t ? a.ZP.getDefaultAvatarURL(n.id, n.discriminator) : s || (null == t ? void 0 : t.avatar) == null ? n.getAvatarURL(void 0, i, o) : n.getAvatarURL(null == t ? void 0 : t.guildId, i, o);
}
function m(e) {
    var t;
    let { pendingNickname: n, pendingGlobalName: r, user: i, guildMember: o } = e,
        a = '' === n ? null : null != n ? n : null == o ? void 0 : o.nick,
        l = '' === r ? i.username : r;
    return null !== (t = null != a ? a : l) && void 0 !== t ? t : s.ZP.getName(i);
}
function g(e) {
    return (null != e ? (0, i.Bd)(e) : 1) > 0.25;
}
