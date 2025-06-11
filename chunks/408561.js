n.d(t, { default: () => E });
var l = n(255367),
    a = n(73800),
    r = n(442837),
    i = n(704215),
    o = n(481060),
    s = n(211266),
    u = n(605236),
    c = n(624659),
    d = n(594174),
    b = n(626135),
    _ = n(924400),
    f = n(987562),
    h = n(981631),
    O = n(388032);
function E(e) {
    let { transitionState: t, onClose: E, channel: v } = e,
        g = (0, s.Z)(f.TL),
        m = (0, r.e7)([d.default], () => d.default.getUser(v.getRecipientId()));
    return (
        a.useEffect(() => {
            b.default.track(h.rMx.OPEN_MODAL, { type: 'DM Mute Feedback Modal' });
        }, []),
        (0, l.jsx)(c.Z, {
            hasCloseButton: !0,
            header: O.intl.string(O.t.SxsBFB),
            body: O.intl.formatToPlainString(O.t['7kb7z8'], { username: null == m ? void 0 : m.username }),
            problems: g,
            feedbackProblems: {
                [f.YA.OTHER]: {
                    subheader: O.intl.string(O.t.VQkdtL),
                    hint: O.intl.string(O.t.EG3N9f)
                }
            },
            onSubmit: function (e) {
                let { problem: t, dontShowAgain: a, feedback: r, closeClicked: s } = e;
                a && (0, u.EW)(i.z.USER_DM_MUTE_FEEDBACK);
                let c = null == t || s;
                (0, _.Z)(t, r, c, a),
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
                                    })({ body: O.intl.string(O.t.sYrCub) }, t)
                                );
                        });
            },
            onClose: E,
            transitionState: t,
            otherKey: f.YA.OTHER,
            showHelpdeskLink: !1
        })
    );
}
