var r = a(149468),
    i = a(129230),
    n = a(527926),
    s = a(652215);
a.d(
    t,
    {},
    {
        $D: function () {
            i.default.track(s.HAw.CHECKPOINT_2026_COMPLETED, {
                step_name: n.A.getStepName(),
                ...n.A.getAnalyticsProperties(),
            });
        },
        Jt: function (e, t) {
            i.default.track(s.HAw.CHECKPOINT_2026_CARD_CLICKED, {
                other_user_id: e,
                ...(0, r.dI)(t),
                ...(0, r.H$)(t?.guild_id),
            });
        },
        Pe: function (e) {
            i.default.track(s.HAw.CHECKPOINT_2026_CARD_SHARED, {
                checkpoint_card_type: e,
                step_name: n.A.getStepName(),
                ...n.A.getAnalyticsProperties(),
            });
        },
        S5: function (e) {
            i.default.track(s.HAw.CHECKPOINT_2026_SIDEKICK_MESSAGE_SENT, {
                other_user_id: e,
                ...n.A.getAnalyticsProperties(),
            });
        },
        d3: function (e) {
            i.default.track(s.HAw.CHECKPOINT_2026_MUTE_TOGGLED, {
                step_name: n.A.getStepName(),
                is_muted: e,
                ...n.A.getAnalyticsProperties(),
            });
        },
        dw: function (e, t, a, r) {
            i.default.track(s.HAw.CHECKPOINT_2026_CHARACTER_CHOICE_SELECTED, {
                trait_type: e,
                option_id: t,
                option_lock_status: a,
                option_rarity: r,
                step_name: n.A.getStepName(),
                ...n.A.getAnalyticsProperties(),
            });
        },
        i: function (e) {
            i.default.track(s.HAw.CHECKPOINT_2026_CLOSED, { step_name: e, ...n.A.getAnalyticsProperties() });
        },
        if: function (e) {
            i.default.track(s.HAw.CHECKPOINT_2026_STEP_VIEWED, { step_name: e, ...n.A.getAnalyticsProperties() });
        },
        lw: function (e) {
            i.default.track(s.HAw.CHECKPOINT_2026_STARTED, { source: e, ...n.A.getAnalyticsProperties() });
        },
        nr: function (e) {
            i.default.track(s.HAw.CHECKPOINT_2026_GIFT_CTA_CLICKED, {
                other_user_id: e,
                step_name: n.A.getStepName(),
                ...n.A.getAnalyticsProperties(),
            });
        },
    },
);
