n.d(t, { default: () => _ });
var l = n(255367),
    a = n(73800),
    i = n(442837),
    r = n(704215),
    o = n(481060),
    u = n(211266),
    d = n(266454),
    s = n(624659),
    c = n(594174),
    b = n(626135),
    E = n(924400),
    O = n(987562),
    f = n(981631),
    v = n(388032);
function _(e) {
    let { transitionState: t, onClose: _, channel: h } = e,
        g = (0, u.Z)(O.TL),
        S = (0, i.e7)([c.default], () => c.default.getUser(h.getRecipientId()));
    return (
        a.useEffect(() => {
            b.default.track(f.rMx.OPEN_MODAL, { type: 'DM Mute Feedback Modal' });
        }, []),
        (0, l.jsx)(s.Z, {
            hasCloseButton: !0,
            header: v.intl.string(v.t.SxsBFB),
            body: v.intl.formatToPlainString(v.t['7kb7z8'], { username: null == S ? void 0 : S.username }),
            problems: g,
            feedbackProblems: {
                [O.YA.OTHER]: {
                    subheader: v.intl.string(v.t.VQkdtL),
                    hint: v.intl.string(v.t.EG3N9f)
                }
            },
            onSubmit: function (e) {
                let { problem: t, dontShowAgain: a, feedback: i, closeClicked: u } = e;
                a && (0, d.Q3)(r.z.USER_DM_MUTE_FEEDBACK);
                let s = null == t || u;
                ((0, E.Z)(t, i, s, a),
                    s ||
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
                                    })({ body: v.intl.string(v.t.sYrCub) }, t)
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
