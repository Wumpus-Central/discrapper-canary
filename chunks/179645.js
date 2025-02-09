n.d(t, { Z: () => d });
var i,
    r = n(442837),
    l = n(570140);
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
let o = null;
class s extends (i = r.ZP.PersistedStore) {
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
a(s, 'displayName', 'NewUserStore'), a(s, 'persistKey', 'nuf');
let c = new s(l.Z, {
        NUF_NEW_USER: function (e) {
            let { newUserType: t } = e;
            (o = t), c.persist();
        },
        NUF_COMPLETE: function () {
            (o = null), c.persist();
        }
    }),
    d = 12633 == n.j ? c : null;
