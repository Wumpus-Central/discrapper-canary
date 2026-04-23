"use strict";
n.d(t, { A: () => h });
var i = n(284009),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(365971);
let l = null,
    d = new Map(),
    _ = new Set();
function u(e) {
    let t = d.get(e);
    return null == t
        ? (_.has(e) || console.warn("Window state not initialized", e),
          { isElementFullscreen: !1, focused: !1, windowSize: { width: 0, height: 0 }, visible: !1 })
        : t;
}
class c extends s.Ay.Store {
    static displayName = "WindowStore";
    isFocused() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.Xg)();
        return u(e).focused;
    }
    isAppFocused() {
        return null != this.getFocusedWindowId();
    }
    isVisible() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.Xg)();
        return u(e).visible;
    }
    getFocusedWindowId() {
        let e = null;
        return (
            d.forEach((t, n) => {
                t.focused && (e = n);
            }),
            e
        );
    }
    getLastFocusedWindowId() {
        return l;
    }
    isElementFullScreen() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.Xg)();
        return u(e).isElementFullscreen;
    }
    windowSize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.Xg)();
        return u(e).windowSize;
    }
}
let E = new c(a.h, {
    WINDOW_INIT: function (e) {
        r()(!d.has(e.windowId), "Window initialized multiple times");
        let { width: t, height: n, isElementFullscreen: i, focused: s, visible: a } = e;
        return (
            d.set(e.windowId, { windowSize: { width: t, height: n }, isElementFullscreen: i, focused: s, visible: a }),
            s && (l = e.windowId),
            !0
        );
    },
    WINDOW_FULLSCREEN_CHANGE: function (e) {
        let t = u(e.windowId);
        return (
            t.isElementFullscreen !== e.isElementFullscreen &&
            (d.set(e.windowId, { ...t, isElementFullscreen: e.isElementFullscreen }), !0)
        );
    },
    WINDOW_FOCUS: function (e) {
        let t = u(e.windowId);
        return (
            t.focused !== e.focused &&
            (e.focused && (l = e.windowId), d.set(e.windowId, { ...t, focused: e.focused }), !0)
        );
    },
    WINDOW_RESIZED: function (e) {
        let t = u(e.windowId);
        return (
            (t.windowSize.width !== e.width || t.windowSize.height !== e.height) &&
            (d.set(e.windowId, { ...t, windowSize: { width: e.width, height: e.height } }), !0)
        );
    },
    WINDOW_UNLOAD: function (e) {
        return _.add(e.windowId), d.delete(e.windowId), l === e.windowId && (l = null), !0;
    },
    WINDOW_VISIBILITY_CHANGE: function (e) {
        let t = u(e.windowId);
        return t.visible !== e.visible && (d.set(e.windowId, { ...t, visible: e.visible }), !0);
    },
});
Promise.resolve()
    .then(n.bind(n, 954571))
    .then((e) => {
        let { addExtraAnalyticsDecorator: t } = e;
        t((e) => {
            {
                e.client_app_state = E.isAppFocused() ? "focused" : "unfocused";
                let t = E.windowSize();
                (e.client_viewport_width = t.width), (e.client_viewport_height = t.height);
            }
        });
    });
let h = E;
