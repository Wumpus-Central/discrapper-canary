"use strict";
n.d(t, { A: () => p, r: () => a }), n(321073);
var r = n(311907),
    i = n(73153),
    a = (function (e) {
        return (
            (e[(e.DC_SHOWN = 0)] = "DC_SHOWN"),
            (e[(e.DC_SHOW_REQUEST = 1)] = "DC_SHOW_REQUEST"),
            (e[(e.DC_DISMISSED = 2)] = "DC_DISMISSED"),
            e
        );
    })({});
let s = !0,
    o = [],
    l = () => {
        o = [];
    },
    u = (e) => {
        let { eventType: t, dismissibleContent: n } = e;
        s || o.push({ eventType: t, dismissibleContent: n });
    },
    c = (e) => {
        let { eventType: t, dismissibleContent: n } = e;
        u({ eventType: t, dismissibleContent: n });
    },
    d = (e) => {
        let { dismissibleContent: t } = e;
        u({ eventType: 2, dismissibleContent: t });
    },
    _ = (e) => {
        let { dismissibleContent: t } = e;
        u({ eventType: 0, dismissibleContent: t });
    };
class f extends r.Ay.Store {
    static displayName = "DCFEventStore";
    getDCFEvents() {
        return o;
    }
}
let p = new f(i.h, { LOGOUT: l, DCF_EVENT_LOGGED: c, DCF_HANDLE_DC_DISMISSED: d, DCF_HANDLE_DC_SHOWN: _ });
