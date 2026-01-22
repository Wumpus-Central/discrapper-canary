n.d(t, {
    A: () => m,
    r: () => o,
}),
    n(321073);
var r,
    i = n(311907),
    a = n(73153);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var o = (function (e) {
    return (
        (e[(e.DC_SHOWN = 0)] = "DC_SHOWN"),
        (e[(e.DC_SHOW_REQUEST = 1)] = "DC_SHOW_REQUEST"),
        (e[(e.DC_DISMISSED = 2)] = "DC_DISMISSED"),
        e
    );
})({});
let l = !0,
    c = [],
    u = () => {
        c = [];
    },
    d = (e) => {
        let { eventType: t, dismissibleContent: n } = e;
        l ||
            c.push({
                eventType: t,
                dismissibleContent: n,
            });
    },
    f = (e) => {
        let { eventType: t, dismissibleContent: n } = e;
        d({
            eventType: t,
            dismissibleContent: n,
        });
    },
    p = (e) => {
        let { dismissibleContent: t } = e;
        d({
            eventType: 2,
            dismissibleContent: t,
        });
    },
    _ = (e) => {
        let { dismissibleContent: t } = e;
        d({
            eventType: 0,
            dismissibleContent: t,
        });
    };
class h extends (r = i.Ay.Store) {
    getDCFEvents() {
        return c;
    }
}
s(h, "displayName", "DCFEventStore");
let m = new h(a.h, {
    LOGOUT: u,
    DCF_EVENT_LOGGED: f,
    DCF_HANDLE_DC_DISMISSED: p,
    DCF_HANDLE_DC_SHOWN: _,
});
