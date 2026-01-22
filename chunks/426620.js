n.d(t, { A: () => f });
var r,
    i = n(311907),
    a = n(73153);
function s(e, t, n) {
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
let o = null;
function l() {
    (o = null), d.persist();
}
function c(e) {
    let { newUserType: t } = e;
    (o = t), d.persist();
}
class u extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        var t;
        o = null != (t = null == e ? void 0 : e.type) ? t : null;
    }
    getType() {
        return o;
    }
    getState() {
        return { type: o };
    }
}
s(u, "displayName", "NewUserStore"), s(u, "persistKey", "nuf");
let d = new u(a.h, {
        NUF_NEW_USER: c,
        NUF_COMPLETE: l,
    }),
    f = d;
