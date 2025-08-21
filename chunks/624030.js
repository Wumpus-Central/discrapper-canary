i.d(t, { Z: () => d });
var n,
    r = i(442837),
    s = i(570140);
function o(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = i),
        e
    );
}
let l = {};
class a extends (n = r.ZP.PersistedStore) {
    initialize(e) {
        Object.assign(l, e);
    }
    getState() {
        return l;
    }
    shouldShowEducation(e) {
        return !0 !== l[e];
    }
}
o(a, "displayName", "ActivityInviteEducationStore"), o(a, "persistKey", "ActivityInviteEducationExperimentStore");
let d = new a(s.Z, {
    ACTIVITY_INVITE_EDUCATION_DISMISS: function (e) {
        return (l[e.key] = e.value), !0;
    },
});
