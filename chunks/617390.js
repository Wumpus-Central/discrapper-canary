var i = a(149468),
    r = a(129230),
    s = a(527926),
    n = a(652215);
a.d(
    t,
    {},
    {
        $D: function () {
            r.default.track(n.HAw.CHECKPOINT_2026_COMPLETED, {
                step_name: s.A.getStepName(),
                ...s.A.getAnalyticsProperties(),
            });
        },
        Jt: function (e, t) {
            r.default.track(n.HAw.CHECKPOINT_2026_CARD_CLICKED, {
                other_user_id: e,
                ...(0, i.dI)(t),
                ...(0, i.H$)(t?.guild_id),
            });
        },
        Pe: function (e) {
            r.default.track(n.HAw.CHECKPOINT_2026_CARD_SHARED, {
                checkpoint_card_type: e,
                step_name: s.A.getStepName(),
                ...s.A.getAnalyticsProperties(),
            });
        },
        S5: function (e) {
            r.default.track(n.HAw.CHECKPOINT_2026_SIDEKICK_MESSAGE_SENT, {
                other_user_id: e,
                ...s.A.getAnalyticsProperties(),
            });
        },
        d3: function (e) {
            r.default.track(n.HAw.CHECKPOINT_2026_MUTE_TOGGLED, {
                step_name: s.A.getStepName(),
                is_muted: e,
                ...s.A.getAnalyticsProperties(),
            });
        },
        dw: function (e, t) {
            r.default.track(n.HAw.CHECKPOINT_2026_CHARACTER_CHOICE_SELECTED, {
                trait_type: e,
                option_id: t,
                step_name: s.A.getStepName(),
                ...s.A.getAnalyticsProperties(),
            });
        },
        i: function (e) {
            r.default.track(n.HAw.CHECKPOINT_2026_CLOSED, { step_name: e, ...s.A.getAnalyticsProperties() });
        },
        if: function (e) {
            r.default.track(n.HAw.CHECKPOINT_2026_STEP_VIEWED, { step_name: e, ...s.A.getAnalyticsProperties() });
        },
        lw: function (e) {
            r.default.track(n.HAw.CHECKPOINT_2026_STARTED, { source: e, ...s.A.getAnalyticsProperties() });
        },
        nr: function (e) {
            r.default.track(n.HAw.CHECKPOINT_2026_GIFT_CTA_CLICKED, {
                other_user_id: e,
                step_name: s.A.getStepName(),
                ...s.A.getAnalyticsProperties(),
            });
        },
    },
);
