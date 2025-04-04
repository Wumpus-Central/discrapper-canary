n.d(t, {
    D: () => s,
    Z: () => m
}),
    n(653041);
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var s = (function (e) {
    return (e[(e.DC_SHOWN = 0)] = 'DC_SHOWN'), (e[(e.DC_SHOW_REQUEST = 1)] = 'DC_SHOW_REQUEST'), (e[(e.DC_DISMISSED = 2)] = 'DC_DISMISSED'), e;
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
                dismissibleContent: n
            });
    },
    f = (e) => {
        let { eventType: t, dismissibleContent: n } = e;
        d({
            eventType: t,
            dismissibleContent: n
        });
    },
    _ = (e) => {
        let { dismissibleContent: t } = e;
        d({
            eventType: 2,
            dismissibleContent: t
        });
    },
    p = (e) => {
        let { dismissibleContent: t } = e;
        d({
            eventType: 0,
            dismissibleContent: t
        });
    };
class h extends (r = i.ZP.Store) {
    getDCFEvents() {
        return c;
    }
}
a(h, 'displayName', 'DCFEventStore');
let m = new h(o.Z, {
    LOGOUT: u,
    DCF_EVENT_LOGGED: f,
    DCF_HANDLE_DC_DISMISSED: _,
    DCF_HANDLE_DC_SHOWN: p
});
