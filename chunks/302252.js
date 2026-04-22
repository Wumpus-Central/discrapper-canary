i.d(t, { default: () => f });
var o = i(627968);
i(64700);
var a = i(110259),
    n = i(192308),
    l = i(207753),
    r = i(930932),
    _ = i(878234),
    s = i(382935),
    d = i(131935),
    c = i(430452),
    u = i(954571),
    m = i(652215),
    b = i(670455),
    p = i(985018),
    g = i(564082);
function f(e) {
    let { onClose: t, transitionState: f, analyticsData: v } = e,
        y = p.intl.string(p.t.Ss6tlb),
        A = p.intl.string(p.t.tLi4cR),
        O = {
            impressionName: a.ImpressionNames.VOICE_FEEDBACK_MODAL,
            impressionProperties: { rtc_connection_id: v.rtc_connection_id, media_session_id: v.media_session_id },
        },
        E = {
            value: b.Eq.CONNECTION,
            label: p.intl.string(g.default.FVhMw6),
            problemsHeader: p.intl.string(p.t.FJmoxF),
            problemOptions: (0, r.A_)(),
            freeformConfig: { value: b.bO.FREEFORM, label: p.intl.string(p.t.emlT91) },
        },
        F = {
            value: b.Eq.AUDIO,
            label: p.intl.string(g.default.PL2l6A),
            problemsHeader: p.intl.string(p.t.FJmoxF),
            problemOptions: (0, r.Op)({ isMobile: !1 }),
            freeformConfig: { value: b.X.FREEFORM, label: p.intl.string(p.t.emlT91) },
        },
        C = {
            value: b.Eq.VIDEO,
            label: p.intl.string(g.default["0WFzPh"]),
            problemsHeader: p.intl.string(p.t.FJmoxF),
            problemOptions: (0, r.de)(),
            freeformConfig: { value: b.AO.FREEFORM, label: p.intl.string(p.t.emlT91) },
        },
        h = {
            value: b.Eq.PEOPLE,
            label: p.intl.string(g.default.Moa3W9),
            problemsHeader: p.intl.string(p.t.FJmoxF),
            problemOptions: (0, r.TK)(),
            freeformConfig: { value: b.CW.FREEFORM, label: p.intl.string(p.t.emlT91) },
        };
    return (0, o.jsx)(s.A, {
        onMount: () => {
            u.default.track(m.HAw.OPEN_MODAL, { type: "voice", source: "Feedback Modal" });
        },
        onSubmit: function (e) {
            let { dontShowAgain: t, rating: a, feedback: s, category: u, problem: g } = e;
            if ((t && (0, r.n3)({ feedbackType: b.MW.VOICE, location: "VoiceCallFeedbackModal" }), null != a)) {
                if (
                    ((0, d.A)(m.HAw.CALL_REPORT_PROBLEM, {
                        rating: a,
                        category: u,
                        reasonDescription: g?.value ?? null,
                        variant: g?.variant ?? null,
                        feedback: s,
                        analyticsData: v,
                    }),
                    null != g)
                ) {
                    if (
                        g.value === b.X.NO_AUDIO &&
                        g.variant === b.UV.SELF &&
                        (function (e) {
                            let { duration: t, duration_muted_ms: i } = e;
                            return null != t && null != i && 0 !== t && i / t >= 0.98 && c.Ay.isSelfMute();
                        })(v) &&
                        l.A.getConfig({ location: "VoiceCallFeedbackModal" }).muteTutorialEnabled
                    )
                        return void (0, n.openModalLazy)(async () => {
                            let { default: e } = await i.e("41737").then(i.bind(i, 36304));
                            return (t) => (0, o.jsx)(e, { ...t });
                        });
                    (0, _.r)(a, u, g)
                        ? (0, n.openModalLazy)(async () => {
                              let { default: e } = await i.e("69791").then(i.bind(i, 72514));
                              return (t) =>
                                  (0, o.jsx)(e, {
                                      ...t,
                                      mediaSessionId: v.media_session_id,
                                      rtcConnectionId: v.rtc_connection_id,
                                  });
                          })
                        : (0, n.openModalLazy)(async () => {
                              let { default: e } = await i.e("37836").then(i.bind(i, 845671));
                              return (t) => (0, o.jsx)(e, { body: p.intl.string(p.t["d9+vQ8"]), ...t });
                          });
                }
            }
        },
        onClose: t,
        ratingHeader: y,
        ratingEmojiKind: "face",
        ratingBody: A,
        categoriesHeader: p.intl.string(g.default.tq8598),
        optionsTree: [E, F, C, h],
        impression: O,
        transitionState: f,
    });
}
