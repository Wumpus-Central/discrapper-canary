n.d(t, { default: () => p });
var r = n(255367),
    o = n(73800),
    l = n(442837),
    a = n(704215),
    i = n(481060),
    s = n(211266),
    c = n(605236),
    u = n(624659),
    d = n(594174),
    _ = n(626135),
    f = n(924400),
    m = n(987562),
    b = n(981631),
    h = n(388032);
function p(e) {
    let { transitionState: t, onClose: p, channel: g } = e,
        O = (0, s.Z)(m.TL),
        x = (0, l.e7)([d.default], () => d.default.getUser(g.getRecipientId()));
    return (
        o.useEffect(() => {
            _.default.track(b.rMx.OPEN_MODAL, { type: 'DM Mute Feedback Modal' });
        }, []),
        (0, r.jsx)(u.Z, {
            hasCloseButton: !0,
            header: h.intl.string(h.t.SxsBFB),
            body: h.intl.formatToPlainString(h.t['7kb7z8'], { username: null == x ? void 0 : x.username }),
            problems: O,
            feedbackProblems: {
                [m.YA.OTHER]: {
                    subheader: h.intl.string(h.t.VQkdtL),
                    hint: h.intl.string(h.t.EG3N9f)
                }
            },
            onSubmit: function (e) {
                let { problem: t, dontShowAgain: o, feedback: l, closeClicked: s } = e;
                o && (0, c.EW)(a.z.USER_DM_MUTE_FEEDBACK);
                let u = null == t || s;
                (0, f.Z)(t, l, u, o),
                    u ||
                        (0, i.ZDy)(async () => {
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
                                    })({ body: h.intl.string(h.t.sYrCub) }, t)
                                );
                        });
            },
            onClose: p,
            transitionState: t,
            otherKey: m.YA.OTHER,
            showHelpdeskLink: !1
        })
    );
}
