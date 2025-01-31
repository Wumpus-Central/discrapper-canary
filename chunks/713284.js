n.d(t, {
    D: () => o,
    Z: () => m
}),
    n(653041);
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
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
var o = (function (e) {
    return (e[(e.DC_SHOWN = 0)] = 'DC_SHOWN'), (e[(e.DC_SHOW_REQUEST = 1)] = 'DC_SHOW_REQUEST'), (e[(e.DC_DISMISSED = 2)] = 'DC_DISMISSED'), e;
})({});
let l = !0,
    u = [],
    c = () => {
        u = [];
    },
    d = (e) => {
        let { eventType: t, dismissibleContent: n } = e;
        !l &&
            u.push({
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
class h extends (i = r.ZP.Store) {
    getDCFEvents() {
        return u;
    }
}
s(h, 'displayName', 'DCFEventStore');
let m = new h(a.Z, {
    LOGOUT: c,
    DCF_EVENT_LOGGED: f,
    DCF_HANDLE_DC_DISMISSED: _,
    DCF_HANDLE_DC_SHOWN: p
});
