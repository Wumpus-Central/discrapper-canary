n.d(t, { Z: () => S }), n(47120);
var r,
    i = n(512722),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(830917);
function c(e, t, n) {
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
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = null,
    p = new Map();
function h(e) {
    let t = p.get(e);
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
function m(e) {
    o()(!p.has(e.windowId), 'Window initialized multiple times');
    let { width: t, height: n, isElementFullscreen: r, focused: i, visible: a } = e;
    return (
        p.set(e.windowId, {
            windowSize: {
                width: t,
                height: n
            },
            isElementFullscreen: r,
            focused: i,
            visible: a
        }),
        i && (_ = e.windowId),
        !0
    );
}
function g(e) {
    let t = h(e.windowId);
    return t.isElementFullscreen !== e.isElementFullscreen && (p.set(e.windowId, f(u({}, t), { isElementFullscreen: e.isElementFullscreen })), !0);
}
function E(e) {
    let t = h(e.windowId);
    return t.focused !== e.focused && (e.focused && (_ = e.windowId), p.set(e.windowId, f(u({}, t), { focused: e.focused })), !0);
}
function b(e) {
    let t = h(e.windowId);
    return t.visible !== e.visible && (p.set(e.windowId, f(u({}, t), { visible: e.visible })), !0);
}
function y(e) {
    let t = h(e.windowId);
    return (
        (t.windowSize.width !== e.width || t.windowSize.height !== e.height) &&
        (p.set(
            e.windowId,
            f(u({}, t), {
                windowSize: {
                    width: e.width,
                    height: e.height
                }
            })
        ),
        !0)
    );
}
function v(e) {
    return p.delete(e.windowId), _ === e.windowId && (_ = null), !0;
}
class O extends (r = a.ZP.Store) {
    isFocused() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.UU)();
        return h(e).focused;
    }
    isVisible() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.UU)();
        return h(e).visible;
    }
    getFocusedWindowId() {
        let e = null;
        return (
            p.forEach((t, n) => {
                t.focused && (e = n);
            }),
            e
        );
    }
    getLastFocusedWindowId() {
        return _;
    }
    isElementFullScreen() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.UU)();
        return h(e).isElementFullscreen;
    }
    windowSize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.UU)();
        return h(e).windowSize;
    }
}
c(O, 'displayName', 'WindowStore');
let I = new O(s.Z, {
    WINDOW_INIT: m,
    WINDOW_FULLSCREEN_CHANGE: g,
    WINDOW_FOCUS: E,
    WINDOW_RESIZED: y,
    WINDOW_UNLOAD: v,
    WINDOW_VISIBILITY_CHANGE: b
});
Promise.resolve()
    .then(n.bind(n, 626135))
    .then((e) => {
        let { addExtraAnalyticsDecorator: t } = e;
        t((e) => {
            {
                e.client_app_state = I.isFocused() ? 'focused' : 'unfocused';
                let t = I.windowSize();
                (e.client_viewport_width = t.width), (e.client_viewport_height = t.height);
            }
        });
    });
let S = I;
