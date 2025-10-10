n.d(t, { Z: () => c });
var i,
    r = n(442837),
    o = n(570140);
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
let s = {};
class a extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        Object.assign(s, e);
    }
    getState() {
        return s;
    }
    shouldShowEducation(e) {
        return !0 !== s[e];
    }
}
l(a, "displayName", "ActivityInviteEducationStore"), l(a, "persistKey", "ActivityInviteEducationExperimentStore");
let c = new a(o.Z, {
    ACTIVITY_INVITE_EDUCATION_DISMISS: function (e) {
        return (s[e.key] = e.value), !0;
    },
});
