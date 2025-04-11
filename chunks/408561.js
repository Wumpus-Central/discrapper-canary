n.d(t, { default: () => b });
var a = n(200651),
    o = n(192379),
    r = n(442837),
    l = n(704215),
    s = n(481060),
    i = n(211266),
    c = n(605236),
    u = n(624659),
    d = n(594174),
    _ = n(626135),
    m = n(924400),
    h = n(987562),
    f = n(981631),
    N = n(388032);
function b(e) {
    let { transitionState: t, onClose: b, channel: x } = e,
        g = (0, i.Z)(h.TL),
        p = (0, r.e7)([d.default], () => d.default.getUser(x.getRecipientId()));
    return (
        o.useEffect(() => {
            _.default.track(f.rMx.OPEN_MODAL, { type: 'DM Mute Feedback Modal' });
        }, []),
        (0, a.jsx)(u.Z, {
            hasCloseButton: !0,
            header: N.NW.string(N.t.SxsBFB),
            body: N.NW.formatToPlainString(N.t['7kb7z8'], { username: null == p ? void 0 : p.username }),
            problems: g,
            feedbackProblems: {
                [h.YA.OTHER]: {
                    subheader: N.NW.string(N.t.VQkdtL),
                    hint: N.NW.string(N.t.EG3N9f)
                }
            },
            onSubmit: function (e) {
                let { problem: t, dontShowAgain: o, feedback: r, closeClicked: i } = e;
                o && (0, c.EW)(l.z.USER_DM_MUTE_FEEDBACK);
                let u = null == t || i;
                (0, m.Z)(t, r, u, o),
                    u ||
                        (0, s.ZDy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, a.jsx)(
                                    e,
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                a = Object.keys(n);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (a = a.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                a.forEach(function (t) {
                                                    var a;
                                                    (a = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: a,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = a);
                                                });
                                        }
                                        return e;
                                    })({ body: N.NW.string(N.t.sYrCub) }, t)
                                );
                        });
            },
            onClose: b,
            transitionState: t,
            otherKey: h.YA.OTHER,
            showHelpdeskLink: !1
        })
    );
}
