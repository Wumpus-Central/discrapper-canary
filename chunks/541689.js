var i = n(73153),
    r = n(517057);
n.d(
    t,
    {},
    {
        Ab: function () {
            i.h.dispatch({ type: "DCF_RESET" });
        },
        F_: function (e) {
            i.h.dispatch({ type: "DCF_HANDLE_DC_ACTIONED", dismissibleContent: e });
        },
        IR: function (e, t) {
            i.h.dispatch({ type: "DCF_OVERRIDE_LAST_DC_DISMISSED", dismissibleContent: e, guildId: t });
        },
        M1: function (e) {
            (i.h.dispatch({ type: "DCF_UPSELL_BACKOFF_OVERRIDE", value: e }), e && (0, r._0)());
        },
        SE: function (e) {
            i.h.dispatch({ type: "DCF_DAILY_CAP_OVERRIDE", value: e });
        },
        U$: function (e) {
            i.h.dispatch({ type: "DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE", value: e });
        },
        Xw: function (e, t) {
            i.h.dispatch({ type: "DCF_HANDLE_DC_DISMISSED", dismissibleContent: e, guildId: t });
        },
        rF: function (e, t) {
            i.h.dispatch({ type: "DCF_HANDLE_DC_SHOWN", dismissibleContent: e, guildId: t });
        },
    },
);
