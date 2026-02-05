"use strict";
n.d(t, { A: () => I });
var r = n(391973),
    i = n(439372),
    a = n(626584),
    s = n(555528),
    o = n(41984),
    l = n(589051),
    u = n(652215);
let c = new a.A("OverlayWidgetPinManager"),
    d = {},
    _ = 288e5,
    f = !1,
    p = new Set([u.uss.GO_LIVE]),
    h = new Set([
        o.AR.WAITING_FOR_POPOUT_OPEN,
        o.AR.WAITING_FOR_REACT_INITIALIZATION,
        o.AR.WAITING_FOR_PID_FOCUS,
        o.AR.WAITING_FOR_SUCCESSFUL_SHOW,
    ]),
    m = (e) => {
        let t = d[e];
        return null == t || Date.now() - t < _;
    },
    g = (e) => {
        d[e] = Date.now();
    },
    E = (e) => {
        delete d[e];
    };
class A extends i.A {
    actions = {
        OVERLAY_UPDATE_OVERLAY_STATE: (e) => {
            let { overlayState: t } = e,
                { enabled: n } = (0, l.Fg)("OverlayWidgetPinManager");
            if (n && h.has(t))
                for (let e of Object.keys(d)) {
                    if (m(e)) continue;
                    let t = s.A.getWidget(e);
                    if (null == t || !p.has(t.type)) continue;
                    let n = s.A.getWidgetDefaultSettings(t.type)?.pinned ?? f;
                    t.pinned !== n &&
                        (c.verbose(
                            `Widget ${t.type} is ${t.pinned ? "pinned" : "unpinned"}, toggling to ${n ? "pinned" : "unpinned"}`,
                        ),
                        (0, r.v0)(e),
                        E(e));
                }
        },
        LAYOUT_SET_PINNED: (e) => {
            let { widgetId: t, pinned: n } = e,
                { enabled: r } = (0, l.Fg)("OverlayWidgetPinManager");
            if (!r) return;
            let i = s.A.getWidget(t);
            null != i && p.has(i.type) && null != n && (n ? g(t) : E(t));
        },
    };
}
let I = new A();
