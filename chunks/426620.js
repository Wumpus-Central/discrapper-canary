n.d(t, { A: () => o });
var r = n(17928),
    i = n(228366);
let a = null;
class l extends r.Ay.PersistedStore {
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
let s = new l(i.h, {
        NUF_NEW_USER: function (e) {
            let { newUserType: t } = e;
            (a = t), s.persist();
        },
        NUF_COMPLETE: function () {
            (a = null), s.persist();
        },
    }),
    o = s;
