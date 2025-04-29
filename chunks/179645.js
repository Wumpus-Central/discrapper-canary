n.d(t, { Z: () => f });
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
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
let s = null;
function l() {
    (s = null), d.persist();
}
function c(e) {
    let { newUserType: t } = e;
    (s = t), d.persist();
}
class u extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        var t;
        s = null != (t = null == e ? void 0 : e.type) ? t : null;
    }
    getType() {
        return s;
    }
    getState() {
        return { type: s };
    }
}
a(u, 'displayName', 'NewUserStore'), a(u, 'persistKey', 'nuf');
let d = new u(o.Z, {
        NUF_NEW_USER: c,
        NUF_COMPLETE: l
    }),
    f = d;
