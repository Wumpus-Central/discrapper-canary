n.d(t, {
    D: () => s,
    Z: () => h,
}),
    n(539854);
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
var s = (function (e) {
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
class m extends (r = i.ZP.Store) {
    getDCFEvents() {
        return c;
    }
}
o(m, "displayName", "DCFEventStore");
let h = new m(a.Z, {
    LOGOUT: u,
    DCF_EVENT_LOGGED: f,
    DCF_HANDLE_DC_DISMISSED: p,
    DCF_HANDLE_DC_SHOWN: _,
});
