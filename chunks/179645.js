n.d(t, { Z: () => f });
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
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
let o = null;
function l() {
    (o = null), d.persist();
}
function u(e) {
    let { newUserType: t } = e;
    (o = t), d.persist();
}
class c extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        var t;
        o = null !== (t = null == e ? void 0 : e.type) && void 0 !== t ? t : null;
    }
    getType() {
        return o;
    }
    getState() {
        return { type: o };
    }
}
s(c, 'displayName', 'NewUserStore'), s(c, 'persistKey', 'nuf');
let d = new c(a.Z, {
        NUF_NEW_USER: u,
        NUF_COMPLETE: l
    }),
    f = d;
