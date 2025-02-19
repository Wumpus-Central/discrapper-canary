n.d(t, { default: () => m });
var r = n(200651),
    a = n(192379),
    l = n(704215),
    o = n(481060),
    s = n(211266),
    i = n(605236),
    c = n(624659),
    u = n(626135),
    d = n(263226),
    x = n(225634),
    N = n(981631),
    h = n(388032);
function m(e) {
    let { transitionState: t, onClose: m, guildId: f, guildName: b } = e,
        E = (0, s.Z)(x.S);
    return (
        a.useEffect(() => {
            u.default.track(N.rMx.OPEN_MODAL, { type: 'Guild Leave Report' });
        }, []),
        (0, r.jsx)(c.Z, {
            header: h.NW.string(h.t.YT6YAA),
            body: h.NW.formatToPlainString(h.t.xpn2vL, { server: b }),
            problems: E,
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
                                    })({ body: h.NW.string(h.t.Gxbt29) }, t)
                                );
                        });
            },
            onClose: m,
            transitionState: t,
            otherKey: x.G.OTHER,
            hasCloseButton: !0
        })
    );
}
