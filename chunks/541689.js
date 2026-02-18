"use strict";
n.d(t, { Ab: () => a, IR: () => u, SE: () => o, U$: () => l, Xw: () => s, rF: () => i });
var r = n(73153);
let i = (e, t) => {
        r.h.dispatch({ type: "DCF_HANDLE_DC_SHOWN", dismissibleContent: e, guildId: t });
    },
    s = (e, t) => {
        r.h.dispatch({ type: "DCF_HANDLE_DC_DISMISSED", dismissibleContent: e, guildId: t });
    },
    a = () => {
        r.h.dispatch({ type: "DCF_RESET" });
    },
    o = (e) => {
        r.h.dispatch({ type: "DCF_DAILY_CAP_OVERRIDE", value: e });
    },
    l = (e) => {
        r.h.dispatch({ type: "DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE", value: e });
    },
    u = (e, t) => {
        r.h.dispatch({ type: "DCF_OVERRIDE_LAST_DC_DISMISSED", dismissibleContent: e, guildId: t });
    };
