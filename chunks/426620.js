n.d(t, { A: () => s });
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
let o = new l(i.h, {
        NUF_NEW_USER: function (e) {
            let { newUserType: t } = e;
            (a = t), o.persist();
        },
        NUF_COMPLETE: function () {
            (a = null), o.persist();
        },
    }),
    s = o;
