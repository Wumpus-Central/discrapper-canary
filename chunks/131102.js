n.d(t, { default: () => h });
var r = n(200651),
    a = n(192379),
    l = n(704215),
    o = n(481060),
    s = n(211266),
    i = n(605236),
    c = n(624659),
    u = n(626135),
    d = n(263226),
    m = n(225634),
    x = n(981631),
    N = n(388032);
function h(e) {
    let { transitionState: t, onClose: h, guildId: f, guildName: b } = e,
        _ = (0, s.Z)(m.S);
    return (
        a.useEffect(() => {
            u.default.track(x.rMx.OPEN_MODAL, { type: 'Guild Leave Report' });
        }, []),
        (0, r.jsx)(c.Z, {
            header: N.NW.string(N.t.YT6YAA),
            body: N.NW.formatToPlainString(N.t.xpn2vL, { server: b }),
            problems: _,
            onSubmit: function (e) {
                let { problem: t, dontShowAgain: a, feedback: s } = e;
                a && (0, i.EW)(l.z.GUILD_LEAVE_FEEDBACK);
                let c = null == t;
                (0, d.Z)(f, t, s, c),
                    c ||
                        (0, o.ZDy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    (function (e) {
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
                                                    var r;
                                                    (r = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: r,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = r);
                                                });
                                        }
                                        return e;
                                    })({ body: N.NW.string(N.t.Gxbt29) }, t)
                                );
                        });
            },
            onClose: h,
            transitionState: t,
            otherKey: m.G.OTHER,
            hasCloseButton: !0
        })
    );
}
