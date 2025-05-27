n.d(t, { default: () => v });
var l = n(255367),
    a = n(73800),
    r = n(442837),
    i = n(704215),
    o = n(481060),
    s = n(211266),
    u = n(605236),
    c = n(624659),
    d = n(594174),
    _ = n(626135),
    b = n(924400),
    f = n(987562),
    O = n(981631),
    E = n(388032);
function v(e) {
    let { transitionState: t, onClose: v, channel: g } = e,
        m = (0, s.Z)(f.TL),
        h = (0, r.e7)([d.default], () => d.default.getUser(g.getRecipientId()));
    return (
        a.useEffect(() => {
            _.default.track(O.rMx.OPEN_MODAL, { type: 'DM Mute Feedback Modal' });
        }, []),
        (0, l.jsx)(c.Z, {
            hasCloseButton: !0,
            header: E.intl.string(E.t.SxsBFB),
            body: E.intl.formatToPlainString(E.t['7kb7z8'], { username: null == h ? void 0 : h.username }),
            problems: m,
            feedbackProblems: {
                [f.YA.OTHER]: {
                    subheader: E.intl.string(E.t.VQkdtL),
                    hint: E.intl.string(E.t.EG3N9f)
                }
            },
            onSubmit: function (e) {
                let { problem: t, dontShowAgain: a, feedback: r, closeClicked: s } = e;
                a && (0, u.EW)(i.z.USER_DM_MUTE_FEEDBACK);
                let c = null == t || s;
                (0, b.Z)(t, r, c, a),
                    c ||
                        (0, o.ZDy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, l.jsx)(
                                    e,
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                l = Object.keys(n);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (l = l.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                l.forEach(function (t) {
                                                    var l;
                                                    (l = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: l,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = l);
                                                });
                                        }
                                        return e;
                                    })({ body: E.intl.string(E.t.sYrCub) }, t)
                                );
                        });
            },
            onClose: v,
            transitionState: t,
            otherKey: f.YA.OTHER,
            showHelpdeskLink: !1
        })
    );
}
