var i,
    a = r(442837),
    o = r(570140),
    s = r(178635);
function l(e, n, r) {
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
let u = {};
function c(e) {
    let { feedbackType: n, cooldown: r, chance: i } = e;
    u[n] = {
        ...s.R[n],
        cooldown: r,
        chance: i
    };
}
function d(e) {
    let { feedbackType: n } = e;
    delete u[n];
}
class f extends (i = a.ZP.Store) {
    initialize() {}
    getFeedbackConfig(e) {
        return u[e];
    }
}
l(f, 'displayName', 'FeedbackOverrideStore'),
    l(f, 'persistKey', 'feedbackOverrides'),
    (n.Z = new f(o.Z, {
        FEEDBACK_OVERRIDE_SET: c,
        FEEDBACK_OVERRIDE_CLEAR: d
    }));
