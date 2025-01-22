r.d(n, {
    D: function () {
        return i;
    }
});
var i,
    a,
    o = r(653041);
var s = r(442837),
    l = r(570140);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e[(e.DC_SHOWN = 0)] = 'DC_SHOWN'), (e[(e.DC_SHOW_REQUEST = 1)] = 'DC_SHOW_REQUEST'), (e[(e.DC_DISMISSED = 2)] = 'DC_DISMISSED');
})(i || (i = {}));
let c = !0,
    d = [],
    f = () => {
        d = [];
    },
    p = (e) => {
        let { eventType: n, dismissibleContent: r } = e;
        if (!c)
            d.push({
                eventType: n,
                dismissibleContent: r
            });
    },
    h = (e) => {
        let { eventType: n, dismissibleContent: r } = e;
        p({
            eventType: n,
            dismissibleContent: r
        });
    },
    _ = (e) => {
        let { dismissibleContent: n } = e;
        p({
            eventType: 2,
            dismissibleContent: n
        });
    },
    m = (e) => {
        let { dismissibleContent: n } = e;
        p({
            eventType: 0,
            dismissibleContent: n
        });
    };
class g extends (a = s.ZP.Store) {
    getDCFEvents() {
        return d;
    }
}
u(g, 'displayName', 'DCFEventStore'),
    (n.Z = new g(l.Z, {
        LOGOUT: f,
        DCF_EVENT_LOGGED: h,
        DCF_HANDLE_DC_DISMISSED: _,
        DCF_HANDLE_DC_SHOWN: m
    }));
