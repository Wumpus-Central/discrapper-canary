"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366);
let s = null;
class a extends i.Ay.PersistedStore {
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
let o = new a(r.h, {
        NUF_NEW_USER: function (e) {
            let { newUserType: t } = e;
            (s = t), o.persist();
        },
        NUF_COMPLETE: function () {
            (s = null), o.persist();
        },
    }),
    l = o;
