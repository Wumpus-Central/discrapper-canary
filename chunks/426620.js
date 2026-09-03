n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let a = null;
class s extends i.Ay.PersistedStore {
    static displayName = "NewUserStore";
    static persistKey = "nuf";
    initialize(e) {
        a = e?.type ?? null;
    }
    getType() {
        return a;
    }
    getState() {
        return { type: a };
    }
}
let l = new s(r.h, {
        NUF_NEW_USER: function (e) {
            let { newUserType: t } = e;
            (a = t), l.persist();
        },
        NUF_COMPLETE: function () {
            (a = null), l.persist();
        },
    }),
    o = l;
