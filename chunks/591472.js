n.d(t, { Z: () => g });
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            }));
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
let _ = null;
function f(e) {
    let { applicationId: t } = e,
        n = (0, o.ZP)(t);
    null != n &&
        (null != _ && (_ = null),
        (_ = {
            applicationId: t,
            url: n,
            connectedSince: Date.now(),
            layoutMode: s.U.FOCUSED
        }));
}
function p(e) {
    let { applicationId: t } = e;
    (null == _ ? void 0 : _.applicationId) === t && (_ = null);
}
function h(e) {
    let { applicationId: t, layoutMode: n } = e;
    (null == _ ? void 0 : _.applicationId) === t && (_ = d(c({}, _), { layoutMode: n }));
}
class m extends (r = i.ZP.Store) {
    getConnectedFrame() {
        return _;
    }
    getFrameLayoutMode() {
        return null == _ ? void 0 : _.layoutMode;
    }
    isFrameActive() {
        return null != _;
    }
}
l(m, 'displayName', 'FramesStore');
let g = new m(a.Z, {
    FRAME_LAUNCH: f,
    FRAME_STOP: p,
    FRAME_UPDATE_LAYOUT_MODE: h
});
