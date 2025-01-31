let i, r;
n.d(t, { Z: () => p });
var a = n(213919),
    s = n(570140),
    o = n(147913),
    l = n(594174),
    u = n(626135),
    c = n(726745),
    d = n(981631);
function f(e, t, n) {
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
let _ = !1;
class p extends o.Z {
    _initialize() {
        s.Z.subscribe('CONNECTION_OPEN', () => this.handleConnectionOpen()), this.handleConnectionOpen();
    }
    _terminate() {
        s.Z.unsubscribe('CONNECTION_OPEN', () => this.handleConnectionOpen());
    }
    constructor({ onSwitchStart: e, onSwitchSuccess: t, onSwitchError: n, onTokenSet: s }) {
        super(),
            f(this, 'onSwitchStart', void 0),
            f(this, 'onSwitchSuccess', void 0),
            f(this, 'onSwitchError', void 0),
            f(this, 'onTokenSet', void 0),
            f(this, 'actions', { LOGOUT: (e) => this.handleLogout(e) }),
            f(this, 'handleConnectionOpen', () => {
                var e, t, n, s, o, f;
                let p = l.default.getCurrentUser();
                if (null == p) return;
                if (null != r) {
                    if (r !== i) {
                        let e = c.Z.getUsers().map((e) => {
                            let { id: t } = e;
                            return t;
                        });
                        u.default.track(d.rMx.MULTI_ACCOUNT_SWITCH_SUCCESS, {
                            from_user_id: r,
                            linked_user_ids: e
                        }),
                            null === (n = (s = this).onSwitchSuccess) || void 0 === n || n.call(s, p, _);
                    } else u.default.track(d.rMx.MULTI_ACCOUNT_SWITCH_FAILURE), null === (o = (f = this).onSwitchError) || void 0 === o || o.call(f, p);
                    r = null;
                }
                i = p.id;
                let h = a.getToken();
                null != h && '' !== h && a.setToken(h, p.id), null === (e = (t = this).onTokenSet) || void 0 === e || e.call(t, p);
            }),
            f(this, 'handleLogout', (e) => {
                if (e.isSwitchingAccount) {
                    var t, n;
                    (r = i), null === (t = (n = this).onSwitchStart) || void 0 === t || t.call(n), (_ = !!e.goHomeAfterSwitching);
                } else (_ = !1), a.removeToken(i);
                i = null;
            }),
            (this.onSwitchStart = e),
            (this.onSwitchSuccess = t),
            (this.onSwitchError = n),
            (this.onTokenSet = s);
    }
}
