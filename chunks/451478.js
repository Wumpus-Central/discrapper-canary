n.d(t, { Z: () => I }), n(47120);
var i,
    r = n(512722),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(830917);
function u(e, t, n) {
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
let c = null,
    d = new Map();
function f(e) {
    let t = d.get(e);
    return null == t
        ? (console.warn('Window state not initialized', e),
          {
              isElementFullscreen: !1,
              focused: !1,
              windowSize: {
                  width: 0,
                  height: 0
              },
              visible: !1
          })
        : t;
}
function _(e) {
    a()(!d.has(e.windowId), 'Window initialized multiple times');
    let { width: t, height: n, isElementFullscreen: i, focused: r, visible: s } = e;
    return (
        d.set(e.windowId, {
            windowSize: {
                width: t,
                height: n
            },
            isElementFullscreen: i,
            focused: r,
            visible: s
        }),
        r && (c = e.windowId),
        !0
    );
}
function p(e) {
    let t = f(e.windowId);
    return (
        t.isElementFullscreen !== e.isElementFullscreen &&
        (d.set(e.windowId, {
            ...t,
            isElementFullscreen: e.isElementFullscreen
        }),
        !0)
    );
}
function h(e) {
    let t = f(e.windowId);
    return (
        t.focused !== e.focused &&
        (e.focused && (c = e.windowId),
        d.set(e.windowId, {
            ...t,
            focused: e.focused
        }),
        !0)
    );
}
function m(e) {
    let t = f(e.windowId);
    return (
        t.visible !== e.visible &&
        (d.set(e.windowId, {
            ...t,
            visible: e.visible
        }),
        !0)
    );
}
function g(e) {
    let t = f(e.windowId);
    return (
        (t.windowSize.width !== e.width || t.windowSize.height !== e.height) &&
        (d.set(e.windowId, {
            ...t,
            windowSize: {
                width: e.width,
                height: e.height
            }
        }),
        !0)
    );
}
function E(e) {
    return d.delete(e.windowId), c === e.windowId && (c = null), !0;
}
class v extends (i = s.ZP.Store) {
    isFocused() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.UU)();
        return f(e).focused;
    }
    isVisible() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.UU)();
        return f(e).visible;
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
        return c;
    }
    isElementFullScreen() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.UU)();
        return f(e).isElementFullscreen;
    }
    windowSize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.UU)();
        return f(e).windowSize;
    }
}
u(v, 'displayName', 'WindowStore');
let y = new v(o.Z, {
    WINDOW_INIT: _,
    WINDOW_FULLSCREEN_CHANGE: p,
    WINDOW_FOCUS: h,
    WINDOW_RESIZED: g,
    WINDOW_UNLOAD: E,
    WINDOW_VISIBILITY_CHANGE: m
});
Promise.resolve()
    .then(n.bind(n, 626135))
    .then((e) => {
        let { addExtraAnalyticsDecorator: t } = e;
        t((e) => {
            e.client_app_state = y.isFocused() ? 'focused' : 'unfocused';
        });
    });
let I = y;
