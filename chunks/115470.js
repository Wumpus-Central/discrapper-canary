n.d(t, { Z: () => h });
var r,
    i = n(442837),
    o = n(570140),
    a = n(178635);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = {};
function f(e) {
    let { feedbackType: t, cooldown: n, chance: r } = e;
    d[t] = u(l({}, a.R[t]), {
        cooldown: n,
        chance: r
    });
}
function _(e) {
    let { feedbackType: t } = e;
    delete d[t];
}
class p extends (r = i.ZP.Store) {
    initialize() {}
    getFeedbackConfig(e) {
        return d[e];
    }
}
s(p, 'displayName', 'FeedbackOverrideStore'), s(p, 'persistKey', 'feedbackOverrides');
let h = new p(o.Z, {
    FEEDBACK_OVERRIDE_SET: f,
    FEEDBACK_OVERRIDE_CLEAR: _
});
