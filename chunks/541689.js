"use strict";
n.d(t, { Ab: () => a, IR: () => d, SE: () => o, U$: () => l, Xw: () => s, rF: () => r });
var i = n(228366);
let r = (e, t) => {
        i.h.dispatch({ type: "DCF_HANDLE_DC_SHOWN", dismissibleContent: e, guildId: t });
    },
    s = (e, t) => {
        i.h.dispatch({ type: "DCF_HANDLE_DC_DISMISSED", dismissibleContent: e, guildId: t });
    },
    a = () => {
        i.h.dispatch({ type: "DCF_RESET" });
    },
    o = (e) => {
        i.h.dispatch({ type: "DCF_DAILY_CAP_OVERRIDE", value: e });
    },
    l = (e) => {
        i.h.dispatch({ type: "DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE", value: e });
    },
    d = (e, t) => {
        i.h.dispatch({ type: "DCF_OVERRIDE_LAST_DC_DISMISSED", dismissibleContent: e, guildId: t });
    };
