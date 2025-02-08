n.d(t, { Z: () => d });
var i,
    r = n(442837),
    a = n(570140);
function l(e, t, n) {
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
l(s, 'displayName', 'NewUserStore'), l(s, 'persistKey', 'nuf');
let c = new s(a.Z, {
        NUF_NEW_USER: function (e) {
            let { newUserType: t } = e;
            (o = t), c.persist();
        },
        NUF_COMPLETE: function () {
            (o = null), c.persist();
        }
    }),
    d = 12633 == n.j ? c : null;
