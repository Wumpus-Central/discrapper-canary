n.d(t, { default: () => _ });
var l = n(255367),
    a = n(73800),
    r = n(442837),
    i = n(704215),
    o = n(481060),
    s = n(211266),
    u = n(266454),
    d = n(624659),
    c = n(594174),
    b = n(626135),
    f = n(924400),
    O = n(987562),
    h = n(981631),
    E = n(388032);
function _(e) {
    let { transitionState: t, onClose: _, channel: v } = e,
        m = (0, s.Z)(O.TL),
        p = (0, r.e7)([c.default], () => c.default.getUser(v.getRecipientId()));
    return (
        a.useEffect(() => {
            b.default.track(h.rMx.OPEN_MODAL, { type: 'DM Mute Feedback Modal' });
        }, []),
        (0, l.jsx)(d.Z, {
            hasCloseButton: !0,
            header: E.intl.string(E.t.SxsBFB),
            body: E.intl.formatToPlainString(E.t['7kb7z8'], { username: null == p ? void 0 : p.username }),
            problems: m,
            feedbackProblems: {
                [O.YA.OTHER]: {
                    subheader: E.intl.string(E.t.VQkdtL),
                    hint: E.intl.string(E.t.EG3N9f)
                }
            },
            onSubmit: function (e) {
                let { problem: t, dontShowAgain: a, feedback: r, closeClicked: s } = e;
                a && (0, u.Q3)(i.z.USER_DM_MUTE_FEEDBACK);
                let d = null == t || s;
                ((0, f.Z)(t, r, d, a),
                    d ||
                        (0, o.ZDy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, l.jsx)(
                                    e,
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                l = Object.keys(n);
                                            ('function' == typeof Object.getOwnPropertySymbols &&
                                                (l = l.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                l.forEach(function (t) {
                                                    var l;
                                                    ((l = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: l,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = l));
                                                }));
                                        }
                                        return e;
                                    })({ body: E.intl.string(E.t.sYrCub) }, t)
                                );
                        }));
            },
            onClose: _,
            transitionState: t,
            otherKey: O.YA.OTHER,
            showHelpdeskLink: !1
        })
    );
}
