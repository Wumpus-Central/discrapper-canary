i.d(t, { default: () => v });
var n = i(627968);
i(64700);
var o = i(110259),
    a = i(192308),
    l = i(207753),
    r = i(930932),
    _ = i(878234),
    s = i(382935),
    d = i(131935),
    u = i(430452),
    c = i(954571),
    m = i(652215),
    p = i(670455),
    b = i(985018),
    g = i(564082);
function v(e) {
    let { onClose: t, transitionState: v, analyticsData: f } = e,
        y = b.intl.string(b.t.Ss6tlb),
        A = b.intl.string(b.t.tLi4cR),
        O = {
            impressionName: o.ImpressionNames.VOICE_FEEDBACK_MODAL,
            impressionProperties: { rtc_connection_id: f.rtc_connection_id, media_session_id: f.media_session_id },
        },
        E = {
            value: p.Eq.CONNECTION,
            label: b.intl.string(g.default.FVhMw6),
            problemsHeader: b.intl.string(b.t.FJmoxF),
            problemOptions: (0, r.A_)(),
            freeformConfig: { value: p.bO.FREEFORM, label: b.intl.string(b.t.emlT91) },
        },
        F = {
            value: p.Eq.AUDIO,
            label: b.intl.string(g.default.PL2l6A),
            problemsHeader: b.intl.string(b.t.FJmoxF),
            problemOptions: (0, r.Op)({ isMobile: !1 }),
            freeformConfig: { value: p.X.FREEFORM, label: b.intl.string(b.t.emlT91) },
        },
        C = {
            value: p.Eq.VIDEO,
            label: b.intl.string(g.default["0WFzPh"]),
            problemsHeader: b.intl.string(b.t.FJmoxF),
            problemOptions: (0, r.de)(),
            freeformConfig: { value: p.AO.FREEFORM, label: b.intl.string(b.t.emlT91) },
        },
        M = {
            value: p.Eq.PEOPLE,
            label: b.intl.string(g.default.Moa3W9),
            problemsHeader: b.intl.string(b.t.FJmoxF),
            problemOptions: (0, r.TK)(),
            freeformConfig: { value: p.CW.FREEFORM, label: b.intl.string(b.t.emlT91) },
        };
    return (0, n.jsx)(s.A, {
        onMount: () => {
            c.default.track(m.HAw.OPEN_MODAL, { type: "voice", source: "Feedback Modal" });
        },
        onSubmit: function (e) {
            let { dontShowAgain: t, rating: o, feedback: s, category: c, problem: g } = e;
            if ((t && (0, r.n3)({ feedbackType: p.MW.VOICE, location: "VoiceCallFeedbackModal" }), null != o)) {
                if (
                    ((0, d.A)(m.HAw.CALL_REPORT_PROBLEM, {
                        rating: o,
                        category: c,
                        reasonDescription: g?.value ?? null,
                        variant: g?.variant ?? null,
                        feedback: s,
                        analyticsData: f,
                    }),
                    null != g)
                ) {
                    if (
                        g.value === p.X.NO_AUDIO &&
                        g.variant === p.UV.SELF &&
                        (function (e) {
                            let { duration: t, duration_muted_ms: i } = e;
                            return null != t && null != i && 0 !== t && i / t >= 0.98 && u.Ay.isSelfMute();
                        })(f) &&
                        l.A.getConfig({ location: "VoiceCallFeedbackModal" }).muteTutorialEnabled
                    )
                        return void (0, a.openModalLazy)(async () => {
                            let { default: e } = await i.e("41737").then(i.bind(i, 36304));
                            return (t) => (0, n.jsx)(e, { ...t });
                        });
                    (0, _.r)(o, c, g)
                        ? (0, a.openModalLazy)(async () => {
                              let { default: e } = await i.e("69791").then(i.bind(i, 72514));
                              return (t) =>
                                  (0, n.jsx)(e, {
                                      ...t,
                                      mediaSessionId: f.media_session_id,
                                      rtcConnectionId: f.rtc_connection_id,
                                  });
                          })
                        : (0, a.openModalLazy)(async () => {
                              let { default: e } = await i.e("37836").then(i.bind(i, 845671));
                              return (t) => (0, n.jsx)(e, { body: b.intl.string(b.t["d9+vQ8"]), ...t });
                          });
                }
            }
        },
        onClose: t,
        ratingHeader: y,
        ratingEmojiKind: "face",
        ratingBody: A,
        categoriesHeader: b.intl.string(g.default.tq8598),
        optionsTree: [E, F, C, M],
        impression: O,
        transitionState: v,
    });
}
