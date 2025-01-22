var i,
    a = r(47120);
var o = r(512722),
    s = r.n(o),
    l = r(442837),
    u = r(570140),
    c = r(830917);
function d(e, n, r) {
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
let f = null,
    p = new Map();
function h(e) {
    let n = p.get(e);
    return null == n
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
        : n;
}
function _(e) {
    s()(!p.has(e.windowId), 'Window initialized multiple times');
    let { width: n, height: r, isElementFullscreen: i, focused: a, visible: o } = e;
    return (
        p.set(e.windowId, {
            windowSize: {
                width: n,
                height: r
            },
            isElementFullscreen: i,
            focused: a,
            visible: o
        }),
        a && (f = e.windowId),
        !0
    );
}
function m(e) {
    let n = h(e.windowId);
    return (
        n.isElementFullscreen !== e.isElementFullscreen &&
        (p.set(e.windowId, {
            ...n,
            isElementFullscreen: e.isElementFullscreen
        }),
        !0)
    );
}
function g(e) {
    let n = h(e.windowId);
    return (
        n.focused !== e.focused &&
        (e.focused && (f = e.windowId),
        p.set(e.windowId, {
            ...n,
            focused: e.focused
        }),
        !0)
    );
}
function E(e) {
    let n = h(e.windowId);
    return (
        n.visible !== e.visible &&
        (p.set(e.windowId, {
            ...n,
            visible: e.visible
        }),
        !0)
    );
}
function v(e) {
    let n = h(e.windowId);
    return (
        (n.windowSize.width !== e.width || n.windowSize.height !== e.height) &&
        (p.set(e.windowId, {
            ...n,
            windowSize: {
                width: e.width,
                height: e.height
            }
        }),
        !0)
    );
}
function y(e) {
    return p.delete(e.windowId), f === e.windowId && (f = null), !0;
}
class b extends (i = l.ZP.Store) {
    isFocused() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, c.UU)();
        return h(e).focused;
    }
    isVisible() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, c.UU)();
        return h(e).visible;
    }
    getFocusedWindowId() {
        let e = null;
        return (
            p.forEach((n, r) => {
                n.focused && (e = r);
            }),
            e
        );
    }
    getLastFocusedWindowId() {
        return f;
    }
    isElementFullScreen() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, c.UU)();
        return h(e).isElementFullscreen;
    }
    windowSize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, c.UU)();
        return h(e).windowSize;
    }
}
d(b, 'displayName', 'WindowStore');
let I = new b(u.Z, {
    WINDOW_INIT: _,
    WINDOW_FULLSCREEN_CHANGE: m,
    WINDOW_FOCUS: g,
    WINDOW_RESIZED: v,
    WINDOW_UNLOAD: y,
    WINDOW_VISIBILITY_CHANGE: E
});
Promise.resolve()
    .then(r.bind(r, 626135))
    .then((e) => {
        let { addExtraAnalyticsDecorator: n } = e;
        n((e) => {
            e.client_app_state = I.isFocused() ? 'focused' : 'unfocused';
        });
    }),
    (n.Z = I);
