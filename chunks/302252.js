i.d(t, { default: () => v });
var n = i(627968);
i(64700);
var o = i(110259),
    a = i(397927),
    l = i(207753),
    r = i(930932),
    s = i(878234),
    _ = i(382935),
    d = i(131935),
    u = i(430452),
    c = i(954571),
    m = i(652215),
    b = i(670455),
    p = i(985018),
    g = i(716829);
function v(e) {
    let { onClose: t, transitionState: v, analyticsData: f } = e,
        O = p.intl.string(p.t.Ss6tlb),
        y = p.intl.string(p.t.tLi4cR),
        A = {
            impressionName: o.ImpressionNames.VOICE_FEEDBACK_MODAL,
            impressionProperties: { rtc_connection_id: f.rtc_connection_id, media_session_id: f.media_session_id },
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
        M = {
            value: b.Eq.PEOPLE,
            label: p.intl.string(g.default.Moa3W9),
            problemsHeader: p.intl.string(p.t.FJmoxF),
            problemOptions: (0, r.TK)(),
            freeformConfig: { value: b.CW.FREEFORM, label: p.intl.string(p.t.emlT91) },
        };
    return (0, n.jsx)(_.A, {
        onMount: () => {
            c.default.track(m.HAw.OPEN_MODAL, { type: "voice", source: "Feedback Modal" });
        },
        onSubmit: function (e) {
            let { dontShowAgain: t, rating: o, feedback: _, category: c, problem: g } = e;
            if ((t && (0, r.n3)({ feedbackType: b.MW.VOICE, location: "VoiceCallFeedbackModal" }), null != o)) {
                if (
                    ((0, d.A)(m.HAw.CALL_REPORT_PROBLEM, {
                        rating: o,
                        category: c,
                        reasonDescription: g?.value ?? null,
                        variant: g?.variant ?? null,
                        feedback: _,
                        analyticsData: f,
                    }),
                    null != g)
                ) {
                    if (
                        g.value === b.X.NO_AUDIO &&
                        g.variant === b.UV.SELF &&
                        (function (e) {
                            let { duration: t, duration_muted_ms: i } = e;
                            return null != t && null != i && 0 !== t && i / t >= 0.98 && u.Ay.isSelfMute();
                        })(f) &&
                        l.A.getConfig({ location: "VoiceCallFeedbackModal" }).muteTutorialEnabled
                    )
                        return void (0, a.mMO)(async () => {
                            let { default: e } = await i.e("41737").then(i.bind(i, 36304));
                            return (t) => (0, n.jsx)(e, { ...t });
                        });
                    (0, s.r)(o, c, g)
                        ? (0, a.mMO)(async () => {
                              let { default: e } = await i.e("69791").then(i.bind(i, 72514));
                              return (t) =>
                                  (0, n.jsx)(e, {
                                      ...t,
                                      mediaSessionId: f.media_session_id,
                                      rtcConnectionId: f.rtc_connection_id,
                                  });
                          })
                        : (0, a.mMO)(async () => {
                              let { default: e } = await i.e("37836").then(i.bind(i, 845671));
                              return (t) => (0, n.jsx)(e, { body: p.intl.string(p.t["d9+vQ8"]), ...t });
                          });
                }
            }
        },
        onClose: t,
        ratingHeader: O,
        ratingEmojiKind: "face",
        ratingBody: y,
        categoriesHeader: p.intl.string(g.default.tq8598),
        optionsTree: [E, F, C, M],
        impression: A,
        transitionState: v,
    });
}
