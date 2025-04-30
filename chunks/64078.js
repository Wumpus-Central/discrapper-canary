n.d(t, {
    AI: () => f,
    EL: () => h,
    SE: () => _,
    ew: () => p
});
var r = n(570140),
    i = n(314897),
    o = n(351780),
    a = n(843693),
    s = n(112606);
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
function f(e) {
    r.Z.dispatch({
        type: 'POGGERMODE_SETTINGS_UPDATE',
        settings: e
    });
    let t = c({}, o.Z.getState(), e);
    (0, s.Z)(t);
}
function _(e) {
    r.Z.dispatch(c({ type: 'POGGERMODE_UPDATE_COMBO' }, e));
}
function p(e) {
    r.Z.dispatch({
        type: 'POGGERMODE_UPDATE_MESSAGE_COMBO',
        comboMessage: d(c({}, e), { displayed: !0 })
    });
}
function h(e, t) {
    var n;
    let o = i.default.getId(),
        s = a.ZP.getUserCombo(o, e);
    null != s &&
        r.Z.dispatch({
            type: 'POGGERMODE_UPDATE_MESSAGE_COMBO',
            comboMessage: {
                combo: s,
                channelId: e,
                messageId: t,
                displayed: !1
            }
        });
    let l = null != s && (null == s ? void 0 : s.value) > 0 ? (null != (n = null == s ? void 0 : s.multiplier) ? n : 0) + 1 : 1;
    r.Z.dispatch({
        type: 'POGGERMODE_UPDATE_COMBO',
        channelId: e,
        userId: o,
        multiplier: l,
        value: 0
    });
}
