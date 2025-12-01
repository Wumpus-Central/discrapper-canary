n.d(t, { Z: () => O }), n(388685);
var r = n(765250),
    i = n(147913),
    a = n(710845),
    o = n(355863),
    s = n(837268),
    l = n(32300),
    c = n(981631);
function u(e, t, n) {
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
let d = new a.Z("OverlayWidgetPinManager"),
    f = {},
    p = 28800000,
    _ = !1,
    m = new Set([c.Odu.GO_LIVE]),
    h = new Set([
        s.mM.WAITING_FOR_POPOUT_OPEN,
        s.mM.WAITING_FOR_REACT_INITIALIZATION,
        s.mM.WAITING_FOR_PID_FOCUS,
        s.mM.WAITING_FOR_SUCCESSFUL_SHOW,
    ]),
    g = (e) => {
        let t = f[e];
        return null == t || Date.now() - t < p;
    },
    E = (e) => {
        f[e] = Date.now();
    },
    b = (e) => {
        delete f[e];
    };
class y extends i.Z {
    constructor(...e) {
        super(...e),
            u(this, "actions", {
                OVERLAY_UPDATE_OVERLAY_STATE: (e) => {
                    let { overlayState: t } = e,
                        { enabled: n } = (0, l.lj)("OverlayWidgetPinManager");
                    if (n && h.has(t))
                        for (let e of Object.keys(f)) {
                            var i, a;
                            if (g(e)) continue;
                            let t = o.Z.getWidget(e);
                            if (null == t || !m.has(t.type)) continue;
                            let n =
                                null != (a = null == (i = o.Z.getWidgetDefaultSettings(t.type)) ? void 0 : i.pinned)
                                    ? a
                                    : _;
                            t.pinned !== n &&
                                (d.verbose(
                                    "Widget "
                                        .concat(t.type, " is ")
                                        .concat(t.pinned ? "pinned" : "unpinned", ", toggling to ")
                                        .concat(n ? "pinned" : "unpinned"),
                                ),
                                (0, r.xh)(e),
                                b(e));
                        }
                },
                LAYOUT_SET_PINNED: (e) => {
                    let { widgetId: t, pinned: n } = e,
                        { enabled: r } = (0, l.lj)("OverlayWidgetPinManager");
                    if (!r) return;
                    let i = o.Z.getWidget(t);
                    null != i && m.has(i.type) && null != n && (n ? E(t) : b(t));
                },
            });
    }
}
let O = new y();
