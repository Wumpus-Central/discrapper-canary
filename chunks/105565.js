"use strict";
n.d(t, { A: () => d, r: () => a }), n(321073);
var r,
    i = n(311907),
    s = n(73153),
    a =
        (((r = {})[(r.DC_SHOWN = 0)] = "DC_SHOWN"),
        (r[(r.DC_SHOW_REQUEST = 1)] = "DC_SHOW_REQUEST"),
        (r[(r.DC_DISMISSED = 2)] = "DC_DISMISSED"),
        r);
let o = [],
    l = (e) => {
        let { eventType: t, dismissibleContent: n } = e;
    };
class u extends i.Ay.Store {
    static displayName = "DCFEventStore";
    getDCFEvents() {
        return o;
    }
}
let d = new u(s.h, {
    LOGOUT: () => {
        o = [];
    },
    DCF_EVENT_LOGGED: (e) => {
        let { eventType: t, dismissibleContent: n } = e;
        l({ eventType: t, dismissibleContent: n });
    },
    DCF_HANDLE_DC_DISMISSED: (e) => {
        let { dismissibleContent: t } = e;
        l({ eventType: 2, dismissibleContent: t });
    },
    DCF_HANDLE_DC_SHOWN: (e) => {
        let { dismissibleContent: t } = e;
        l({ eventType: 0, dismissibleContent: t });
    },
});
