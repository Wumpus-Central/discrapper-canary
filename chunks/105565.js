"use strict";
n.d(t, { A: () => _, r: () => a }), n(321073);
var i,
    r = n(17928),
    s = n(228366),
    a =
        (((i = {})[(i.DC_SHOWN = 0)] = "DC_SHOWN"),
        (i[(i.DC_SHOW_REQUEST = 1)] = "DC_SHOW_REQUEST"),
        (i[(i.DC_DISMISSED = 2)] = "DC_DISMISSED"),
        i);
let o = [],
    l = (e) => {
        let { eventType: t, dismissibleContent: n } = e;
    };
class d extends r.Ay.Store {
    static displayName = "DCFEventStore";
    getDCFEvents() {
        return o;
    }
}
let _ = new d(s.h, {
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
