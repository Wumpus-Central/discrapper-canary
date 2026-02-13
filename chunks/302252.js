i.d(t, { default: () => g });
var n = i(627968);
i(64700);
var o = i(110259),
    a = i(397927),
    l = i(207753),
    r = i(930932),
    s = i(382935),
    _ = i(131935),
    u = i(430452),
    d = i(954571),
    c = i(652215),
    m = i(670455),
    b = i(985018),
    p = i(716829);
function g(e) {
    let { onClose: t, transitionState: g, analyticsData: v } = e,
        f = b.intl.string(b.t.Ss6tlb),
        O = b.intl.string(b.t.tLi4cR),
        A = {
            impressionName: o.ImpressionNames.VOICE_FEEDBACK_MODAL,
            impressionProperties: { rtc_connection_id: v.rtc_connection_id, media_session_id: v.media_session_id },
        },
        E = {
            value: m.Eq.CONNECTION,
            label: b.intl.string(p.default.FVhMw6),
            problemsHeader: b.intl.string(b.t.FJmoxF),
            problemOptions: (0, r.A_)(),
            freeformConfig: { value: m.bO.FREEFORM, label: b.intl.string(b.t.emlT91) },
        },
        y = {
            value: m.Eq.AUDIO,
            label: b.intl.string(p.default.PL2l6A),
            problemsHeader: b.intl.string(b.t.FJmoxF),
            problemOptions: (0, r.Op)({ isMobile: !1 }),
            freeformConfig: { value: m.X.FREEFORM, label: b.intl.string(b.t.emlT91) },
        },
        F = {
            value: m.Eq.VIDEO,
            label: b.intl.string(p.default["0WFzPh"]),
            problemsHeader: b.intl.string(b.t.FJmoxF),
            problemOptions: (0, r.de)(),
            freeformConfig: { value: m.AO.FREEFORM, label: b.intl.string(b.t.emlT91) },
        },
        C = {
            value: m.Eq.PEOPLE,
            label: b.intl.string(p.default.Moa3W9),
            problemsHeader: b.intl.string(b.t.FJmoxF),
            problemOptions: (0, r.TK)(),
            freeformConfig: { value: m.CW.FREEFORM, label: b.intl.string(b.t.emlT91) },
        };
    return (0, n.jsx)(s.A, {
        onMount: () => {
            d.default.track(c.HAw.OPEN_MODAL, { type: "voice", source: "Feedback Modal" });
        },
        onSubmit: function (e) {
            let { dontShowAgain: t, rating: o, feedback: s, category: d, problem: p } = e;
            if ((t && (0, r.n3)({ feedbackType: m.MW.VOICE, location: "VoiceCallFeedbackModal" }), null != o)) {
                if (
                    ((0, _.A)(c.HAw.CALL_REPORT_PROBLEM, {
                        rating: o,
                        category: d,
                        reasonDescription: p?.value ?? null,
                        variant: p?.variant ?? null,
                        feedback: s,
                        analyticsData: v,
                    }),
                    null != p)
                ) {
                    if (
                        p.value === m.X.NO_AUDIO &&
                        p.variant === m.UV.SELF &&
                        (function (e) {
                            let { duration: t, duration_muted_ms: i } = e;
                            return null != t && null != i && 0 !== t && i / t >= 0.98 && u.Ay.isSelfMute();
                        })(v) &&
                        l.A.getConfig({ location: "VoiceCallFeedbackModal" }).muteTutorialEnabled
                    )
                        return void (0, a.mMO)(async () => {
                            let { default: e } = await i.e("41737").then(i.bind(i, 36304));
                            return (t) => (0, n.jsx)(e, { ...t });
                        });
                    (0, a.mMO)(async () => {
                        let { default: e } = await i.e("37836").then(i.bind(i, 845671));
                        return (t) => (0, n.jsx)(e, { body: b.intl.string(b.t["d9+vQ8"]), ...t });
                    });
                }
            }
        },
        onClose: t,
        ratingHeader: f,
        ratingEmojiKind: "face",
        ratingBody: O,
        categoriesHeader: b.intl.string(p.default.tq8598),
        optionsTree: [E, y, F, C],
        impression: A,
        transitionState: g,
    });
}
