n.d(t, { Z: () => f });
var i,
    r = n(442837),
    a = n(570140),
    s = n(178635);
function o(e, t, n) {
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
let l = {};
function u(e) {
    let { feedbackType: t, cooldown: n, chance: i } = e;
    l[t] = {
        ...s.R[t],
        cooldown: n,
        chance: i
    };
}
function c(e) {
    let { feedbackType: t } = e;
    delete l[t];
}
class d extends (i = r.ZP.Store) {
    initialize() {}
    getFeedbackConfig(e) {
        return l[e];
    }
}
o(d, 'displayName', 'FeedbackOverrideStore'), o(d, 'persistKey', 'feedbackOverrides');
let f = new d(a.Z, {
    FEEDBACK_OVERRIDE_SET: u,
    FEEDBACK_OVERRIDE_CLEAR: c
});
