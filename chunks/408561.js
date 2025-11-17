n.d(t, { default: () => _ });
var l = n(54381),
    a = n(473749),
    i = n(442837),
    r = n(704215),
    d = n(481060),
    o = n(211266),
    u = n(266454),
    s = n(624659),
    b = n(594174),
    c = n(626135),
    E = n(924400),
    O = n(987562),
    f = n(981631),
    v = n(388032);
function _(e) {
    let { transitionState: t, onClose: _, channel: h } = e,
        g = (0, o.Z)(O.TL),
        S = (0, i.e7)([b.default], () => b.default.getUser(h.getRecipientId()));
    return (
        a.useEffect(() => {
            c.default.track(f.rMx.OPEN_MODAL, { type: "DM Mute Feedback Modal" });
        }, []),
        (0, l.jsx)(s.Z, {
            hasCloseButton: !0,
            header: v.intl.string(v.t.SxsBFD),
            body: v.intl.formatToPlainString(v.t["7kb7z4"], { username: null == S ? void 0 : S.username }),
            problems: g,
            feedbackProblems: {
                [O.YA.OTHER]: {
                    subheader: v.intl.string(v.t.VQkdtK),
                    hint: v.intl.string(v.t.EG3N9c),
                },
            },
            onSubmit: function (e) {
                let { problem: t, dontShowAgain: a, feedback: i, closeClicked: o } = e;
                a && (0, u.Q3)(r.z.USER_DM_MUTE_FEEDBACK);
                let s = null == t || o;
                (0, E.Z)(t, i, s, a),
                    s ||
                        (0, d.ZDy)(async () => {
                            let { default: e } = await n.e("14466").then(n.bind(n, 729328));
                            return (t) =>
                                (0, l.jsx)(
                                    e,
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                l = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (l = l.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    }),
                                                )),
                                                l.forEach(function (t) {
                                                    var l;
                                                    (l = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: l,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0,
                                                              })
                                                            : (e[t] = l);
                                                });
                                        }
                                        return e;
                                    })({ body: v.intl.string(v.t.sYrCuZ) }, t),
                                );
                        });
            },
            onClose: _,
            transitionState: t,
            otherKey: O.YA.OTHER,
            showHelpdeskLink: !1,
        })
    );
}
