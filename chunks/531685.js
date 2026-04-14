"use strict";
n.d(t, { A: () => I });
var r = n(284009),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(365971);
let l = null,
    u = new Map(),
    c = new Set();
function d(e) {
    let t = u.get(e);
    return null == t
        ? (c.has(e) || console.warn("Window state not initialized", e),
          { isElementFullscreen: !1, focused: !1, windowSize: { width: 0, height: 0 }, visible: !1 })
        : t;
}
function _(e) {
    i()(!u.has(e.windowId), "Window initialized multiple times");
    let { width: t, height: n, isElementFullscreen: r, focused: s, visible: a } = e;
    return (
        u.set(e.windowId, { windowSize: { width: t, height: n }, isElementFullscreen: r, focused: s, visible: a }),
        s && (l = e.windowId),
        !0
    );
}
function f(e) {
    let t = d(e.windowId);
    return (
        t.isElementFullscreen !== e.isElementFullscreen &&
        (u.set(e.windowId, { ...t, isElementFullscreen: e.isElementFullscreen }), !0)
    );
}
function p(e) {
    let t = d(e.windowId);
    return (
        t.focused !== e.focused && (e.focused && (l = e.windowId), u.set(e.windowId, { ...t, focused: e.focused }), !0)
    );
}
function h(e) {
    let t = d(e.windowId);
    return t.visible !== e.visible && (u.set(e.windowId, { ...t, visible: e.visible }), !0);
}
function m(e) {
    let t = d(e.windowId);
    return (
        (t.windowSize.width !== e.width || t.windowSize.height !== e.height) &&
        (u.set(e.windowId, { ...t, windowSize: { width: e.width, height: e.height } }), !0)
    );
}
function E(e) {
    return c.add(e.windowId), u.delete(e.windowId), l === e.windowId && (l = null), !0;
}
class g extends s.Ay.Store {
    static displayName = "WindowStore";
    isFocused() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.Xg)();
        return d(e).focused;
    }
    isAppFocused() {
        return null != this.getFocusedWindowId();
    }
    isVisible() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.Xg)();
        return d(e).visible;
    }
    getFocusedWindowId() {
        let e = null;
        return (
            u.forEach((t, n) => {
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
        return d(e).isElementFullscreen;
    }
    windowSize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.Xg)();
        return d(e).windowSize;
    }
}
let A = new g(a.h, {
    WINDOW_INIT: _,
    WINDOW_FULLSCREEN_CHANGE: f,
    WINDOW_FOCUS: p,
    WINDOW_RESIZED: m,
    WINDOW_UNLOAD: E,
    WINDOW_VISIBILITY_CHANGE: h,
});
Promise.resolve()
    .then(n.bind(n, 954571))
    .then((e) => {
        let { addExtraAnalyticsDecorator: t } = e;
        t((e) => {
            {
                e.client_app_state = A.isAppFocused() ? "focused" : "unfocused";
                let t = A.windowSize();
                (e.client_viewport_width = t.width), (e.client_viewport_height = t.height);
            }
        });
    });
let I = A;
