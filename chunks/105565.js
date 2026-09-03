n.d(t, { A: () => c, r: () => s }), n(321073);
var i,
    r = n(17928),
    a = n(228366),
    s =
        (((i = {})[(i.DC_SHOWN = 0)] = "DC_SHOWN"),
        (i[(i.DC_SHOW_REQUEST = 1)] = "DC_SHOW_REQUEST"),
        (i[(i.DC_DISMISSED = 2)] = "DC_DISMISSED"),
        i);
let l = [];
function o(e) {
    let { eventType: t, dismissibleContent: n } = e;
}
class d extends r.Ay.Store {
    static displayName = "DCFEventStore";
    getDCFEvents() {
        return l;
    }
}
let c = new d(a.h, {
    LOGOUT: function () {
        l = [];
    },
    DCF_EVENT_LOGGED: function (e) {
        let { eventType: t, dismissibleContent: n } = e;
        o({ eventType: t, dismissibleContent: n });
    },
    DCF_HANDLE_DC_DISMISSED: function (e) {
        let { dismissibleContent: t } = e;
        o({ eventType: 2, dismissibleContent: t });
    },
    DCF_HANDLE_DC_SHOWN: function (e) {
        let { dismissibleContent: t } = e;
        o({ eventType: 0, dismissibleContent: t });
    },
});
