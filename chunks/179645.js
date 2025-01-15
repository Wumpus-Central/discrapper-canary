var r,
    i = n(442837),
    l = n(570140);
function u(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
let o = null;
class a extends (r = i.ZP.PersistedStore) {
    initialize(t) {
        var e;
        o = null !== (e = null == t ? void 0 : t.type) && void 0 !== e ? e : null;
    }
    getType() {
        return o;
    }
    getState() {
        return { type: o };
    }
}
u(a, 'displayName', 'NewUserStore'),
    u(a, 'persistKey', 'nuf'),
    (e.Z = new a(l.Z, {
        NUF_NEW_USER: function (t) {
            let { newUserType: e } = t;
            o = e;
        },
        NUF_COMPLETE: function () {
            o = null;
        }
    }));
