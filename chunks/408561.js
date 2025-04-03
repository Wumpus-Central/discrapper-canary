n.d(t, { default: () => x });
var a = n(200651),
    r = n(192379),
    o = n(442837),
    l = n(704215),
    s = n(481060),
    i = n(211266),
    c = n(605236),
    u = n(624659),
    d = n(594174),
    _ = n(626135),
    h = n(924400),
    m = n(987562),
    f = n(981631),
    b = n(388032);
function x(e) {
    let { transitionState: t, onClose: x, channel: N } = e,
        g = (0, i.Z)(m.TL),
        p = (0, o.e7)([d.default], () => d.default.getUser(N.getRecipientId()));
    return (
        r.useEffect(() => {
            _.default.track(f.rMx.OPEN_MODAL, { type: 'DM Mute Feedback Modal' });
        }, []),
        (0, a.jsx)(u.Z, {
            hasCloseButton: !0,
            header: b.NW.string(b.t.SxsBFB),
            body: b.NW.formatToPlainString(b.t['7kb7z8'], { username: null == p ? void 0 : p.username }),
            problems: g,
            feedbackProblems: {
                [m.YA.OTHER]: {
                    subheader: b.NW.string(b.t.VQkdtL),
                    hint: b.NW.string(b.t.EG3N9f)
                }
            },
            onSubmit: function (e) {
                let { problem: t, dontShowAgain: r, feedback: o, closeClicked: i } = e;
                r && (0, c.EW)(l.z.USER_DM_MUTE_FEEDBACK);
                let u = null == t || i;
                (0, h.Z)(t, o, u, r),
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
                                    })({ body: b.NW.string(b.t.sYrCub) }, t)
                                );
                        });
            },
            onClose: x,
            transitionState: t,
            otherKey: m.YA.OTHER,
            showHelpdeskLink: !1
        })
    );
}
