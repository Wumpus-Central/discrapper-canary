n.d(t, { default: () => p });
var a = n(627968);
n(64700);
var i = n(110259),
    o = n(397927),
    l = n(930932),
    r = n(382935),
    d = n(131935),
    s = n(954571),
    c = n(652215),
    u = n(670455),
    b = n(985018),
    f = n(716829);
function p(e) {
    let { onClose: t, transitionState: p, analyticsData: _ } = e,
        m = b.intl.string(b.t.Ss6tlb),
        g = b.intl.string(b.t.tLi4cR),
        v = {
            impressionName: i.ImpressionNames.VOICE_FEEDBACK_MODAL,
            impressionProperties: {
                rtc_connection_id: _.rtc_connection_id,
                media_session_id: _.media_session_id,
            },
        },
        O = {
            value: u.Eq.CONNECTION,
            label: b.intl.string(f.default.FVhMw6),
            problemsHeader: b.intl.string(b.t.FJmoxF),
            problemOptions: (0, l.A_)(),
            freeformConfig: {
                value: u.bO.FREEFORM,
                label: b.intl.string(b.t.emlT91),
            },
        },
        y = {
            value: u.Eq.AUDIO,
            label: b.intl.string(f.default.PL2l6A),
            problemsHeader: b.intl.string(b.t.FJmoxF),
            problemOptions: (0, l.Op)({ isMobile: !1 }),
            freeformConfig: {
                value: u.X.FREEFORM,
                label: b.intl.string(b.t.emlT91),
            },
        },
        E = {
            value: u.Eq.VIDEO,
            label: b.intl.string(f.default["0WFzPh"]),
            problemsHeader: b.intl.string(b.t.FJmoxF),
            problemOptions: (0, l.de)(),
            freeformConfig: {
                value: u.AO.FREEFORM,
                label: b.intl.string(b.t.emlT91),
            },
        },
        A = {
            value: u.Eq.PEOPLE,
            label: b.intl.string(f.default.Moa3W9),
            problemsHeader: b.intl.string(b.t.FJmoxF),
            problemOptions: (0, l.TK)(),
            freeformConfig: {
                value: u.CW.FREEFORM,
                label: b.intl.string(b.t.emlT91),
            },
        };
    return (0, a.jsx)(r.A, {
        onMount: () => {
            s.default.track(c.HAw.OPEN_MODAL, {
                type: "voice",
                source: "Feedback Modal",
            });
        },
        onSubmit: function (e) {
            var t, i;
            let { dontShowAgain: r, rating: s, feedback: f, category: p, problem: m } = e;
            r &&
                (0, l.n3)({
                    feedbackType: u.MW.VOICE,
                    location: "VoiceCallFeedbackModal",
                }),
                null == s ||
                    ((0, d.A)(c.HAw.CALL_REPORT_PROBLEM, {
                        rating: s,
                        category: p,
                        reasonDescription: null != (t = null == m ? void 0 : m.value) ? t : null,
                        variant: null != (i = null == m ? void 0 : m.variant) ? i : null,
                        feedback: f,
                        analyticsData: _,
                    }),
                    null != m &&
                        (0, o.mMO)(async () => {
                            let { default: e } = await n.e("37836").then(n.bind(n, 845671));
                            return (t) =>
                                (0, a.jsx)(
                                    e,
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                a = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (a = a.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    }),
                                                )),
                                                a.forEach(function (t) {
                                                    var a;
                                                    (a = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: a,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0,
                                                              })
                                                            : (e[t] = a);
                                                });
                                        }
                                        return e;
                                    })({ body: b.intl.string(b.t["d9+vQ8"]) }, t),
                                );
                        }));
        },
        onClose: t,
        ratingHeader: m,
        ratingEmojiKind: "face",
        ratingBody: g,
        categoriesHeader: b.intl.string(f.default.tq8598),
        optionsTree: [O, y, E, A],
        impression: v,
        transitionState: p,
    });
}
