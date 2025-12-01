n.d(t, { Z: () => y }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(155268),
    s = n(408491);
function l(e, t, n) {
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = null,
    p = new Map();
function _(e) {
    let { applicationId: t } = e;
    p.set(t, !0);
}
function m(e) {
    let { applicationId: t, proxyTicket: n } = e,
        r = (0, o.ZP)(t);
    if (null == r) return void p.delete(t);
    p.delete(t),
        null != f && (f = null),
        (f = {
            applicationId: t,
            url: r,
            connectedSince: Date.now(),
            layoutMode: s.U.FOCUSED,
            proxyTicket: n,
        });
}
function h(e) {
    let { applicationId: t } = e;
    p.delete(t);
}
function g(e) {
    let { applicationId: t } = e;
    (null == f ? void 0 : f.applicationId) === t && (f = null);
}
function E(e) {
    let { applicationId: t, layoutMode: n } = e;
    (null == f ? void 0 : f.applicationId) === t && (f = d(c({}, f), { layoutMode: n }));
}
class b extends (r = i.ZP.Store) {
    getConnectedFrame() {
        return f;
    }
    getFrameLayoutMode() {
        return null == f ? void 0 : f.layoutMode;
    }
    isFrameActive() {
        return null != f;
    }
    isLaunchingFrame(e) {
        var t;
        return null != e ? null != (t = p.get(e)) && t : p.size > 0;
    }
}
l(b, "displayName", "FramesStore");
let y = new b(a.Z, {
    FRAME_LAUNCH_START: _,
    FRAME_LAUNCH: m,
    FRAME_LAUNCH_FAIL: h,
    FRAME_STOP: g,
    FRAME_UPDATE_LAYOUT_MODE: E,
});
