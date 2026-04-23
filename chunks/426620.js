"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(73153);
let s = null;
class a extends r.Ay.PersistedStore {
    static displayName = "NewUserStore";
    static persistKey = "nuf";
    initialize(e) {
        s = e?.type ?? null;
    }
    getType() {
        return s;
    }
    getState() {
        return { type: s };
    }
}
let o = new a(i.h, {
        NUF_NEW_USER: function (e) {
            let { newUserType: t } = e;
            (s = t), o.persist();
        },
        NUF_COMPLETE: function () {
            (s = null), o.persist();
        },
    }),
    l = o;
