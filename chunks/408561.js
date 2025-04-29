n.d(t, { default: () => x });
var a = n(255367),
    l = n(73800),
    o = n(442837),
    r = n(704215),
    i = n(481060),
    s = n(211266),
    c = n(605236),
    u = n(624659),
    d = n(594174),
    _ = n(626135),
    m = n(924400),
    h = n(987562),
    f = n(981631),
    b = n(388032);
function x(e) {
    let { transitionState: t, onClose: x, channel: g } = e,
        v = (0, s.Z)(h.TL),
        p = (0, o.e7)([d.default], () => d.default.getUser(g.getRecipientId()));
    return (
        l.useEffect(() => {
            _.default.track(f.rMx.OPEN_MODAL, { type: 'DM Mute Feedback Modal' });
        }, []),
        (0, a.jsx)(u.Z, {
            hasCloseButton: !0,
            header: b.intl.string(b.t.SxsBFB),
            body: b.intl.formatToPlainString(b.t['7kb7z8'], { username: null == p ? void 0 : p.username }),
            problems: v,
            feedbackProblems: {
                [h.YA.OTHER]: {
                    subheader: b.intl.string(b.t.VQkdtL),
                    hint: b.intl.string(b.t.EG3N9f)
                }
            },
            onSubmit: function (e) {
                let { problem: t, dontShowAgain: l, feedback: o, closeClicked: s } = e;
                l && (0, c.EW)(r.z.USER_DM_MUTE_FEEDBACK);
                let u = null == t || s;
                (0, m.Z)(t, o, u, l),
                    u ||
                        (0, i.ZDy)(async () => {
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
                                    })({ body: b.intl.string(b.t.sYrCub) }, t)
                                );
                        });
            },
            onClose: x,
            transitionState: t,
            otherKey: h.YA.OTHER,
            showHelpdeskLink: !1
        })
    );
}
