i.d(t, { default: () => b });
var n = i(627968);
i(64700);
var o = i(110259),
    a = i(397927),
    l = i(930932),
    s = i(382935),
    _ = i(131935),
    r = i(954571),
    c = i(652215),
    d = i(670455),
    u = i(985018),
    m = i(716829);
function b(e) {
    let { onClose: t, transitionState: b, analyticsData: p } = e,
        g = u.intl.string(u.t.Ss6tlb),
        v = u.intl.string(u.t.tLi4cR),
        O = {
            impressionName: o.ImpressionNames.VOICE_FEEDBACK_MODAL,
            impressionProperties: { rtc_connection_id: p.rtc_connection_id, media_session_id: p.media_session_id },
        },
        f = {
            value: d.Eq.CONNECTION,
            label: u.intl.string(m.default.FVhMw6),
            problemsHeader: u.intl.string(u.t.FJmoxF),
            problemOptions: (0, l.A_)(),
            freeformConfig: { value: d.bO.FREEFORM, label: u.intl.string(u.t.emlT91) },
        },
        A = {
            value: d.Eq.AUDIO,
            label: u.intl.string(m.default.PL2l6A),
            problemsHeader: u.intl.string(u.t.FJmoxF),
            problemOptions: (0, l.Op)({ isMobile: !1 }),
            freeformConfig: { value: d.X.FREEFORM, label: u.intl.string(u.t.emlT91) },
        },
        E = {
            value: d.Eq.VIDEO,
            label: u.intl.string(m.default["0WFzPh"]),
            problemsHeader: u.intl.string(u.t.FJmoxF),
            problemOptions: (0, l.de)(),
            freeformConfig: { value: d.AO.FREEFORM, label: u.intl.string(u.t.emlT91) },
        },
        F = {
            value: d.Eq.PEOPLE,
            label: u.intl.string(m.default.Moa3W9),
            problemsHeader: u.intl.string(u.t.FJmoxF),
            problemOptions: (0, l.TK)(),
            freeformConfig: { value: d.CW.FREEFORM, label: u.intl.string(u.t.emlT91) },
        };
    return (0, n.jsx)(s.A, {
        onMount: () => {
            r.default.track(c.HAw.OPEN_MODAL, { type: "voice", source: "Feedback Modal" });
        },
        onSubmit: function (e) {
            let { dontShowAgain: t, rating: o, feedback: s, category: r, problem: m } = e;
            t && (0, l.n3)({ feedbackType: d.MW.VOICE, location: "VoiceCallFeedbackModal" }),
                null == o ||
                    ((0, _.A)(c.HAw.CALL_REPORT_PROBLEM, {
                        rating: o,
                        category: r,
                        reasonDescription: m?.value ?? null,
                        variant: m?.variant ?? null,
                        feedback: s,
                        analyticsData: p,
                    }),
                    null != m &&
                        (0, a.mMO)(async () => {
                            let { default: e } = await i.e("37836").then(i.bind(i, 845671));
                            return (t) => (0, n.jsx)(e, { body: u.intl.string(u.t["d9+vQ8"]), ...t });
                        }));
        },
        onClose: t,
        ratingHeader: g,
        ratingEmojiKind: "face",
        ratingBody: v,
        categoriesHeader: u.intl.string(m.default.tq8598),
        optionsTree: [f, A, E, F],
        impression: O,
        transitionState: b,
    });
}
