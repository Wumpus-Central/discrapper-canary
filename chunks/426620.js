"use strict";
n.d(t, { A: () => c });
var r = n(311907),
    i = n(73153);
let a = null;
function s() {
    (a = null), u.persist();
}
function o(e) {
    let { newUserType: t } = e;
    (a = t), u.persist();
}
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
let u = new l(i.h, { NUF_NEW_USER: o, NUF_COMPLETE: s }),
    c = u;
