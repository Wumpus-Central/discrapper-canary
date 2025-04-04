let r, i;
n.d(t, { Z: () => p });
var o = n(213919),
    a = n(570140),
    s = n(147913),
    l = n(594174),
    c = n(626135),
    u = n(726745),
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
class p extends s.Z {
    _initialize() {
        a.Z.subscribe('CONNECTION_OPEN', () => this.handleConnectionOpen()), this.handleConnectionOpen();
    }
    _terminate() {
        a.Z.unsubscribe('CONNECTION_OPEN', () => this.handleConnectionOpen());
    }
    constructor({ onSwitchStart: e, onSwitchSuccess: t, onSwitchError: n, onTokenSet: a }) {
        super(),
            f(this, 'onSwitchStart', void 0),
            f(this, 'onSwitchSuccess', void 0),
            f(this, 'onSwitchError', void 0),
            f(this, 'onTokenSet', void 0),
            f(this, 'actions', { LOGOUT: (e) => this.handleLogout(e) }),
            f(this, 'handleConnectionOpen', () => {
                var e, t, n, a, s, f;
                let p = l.default.getCurrentUser();
                if (null == p) return;
                if (null != i) {
                    if (i !== r) {
                        let e = u.Z.getUsers().map((e) => {
                            let { id: t } = e;
                            return t;
                        });
                        c.default.track(d.rMx.MULTI_ACCOUNT_SWITCH_SUCCESS, {
                            from_user_id: i,
                            linked_user_ids: e
                        }),
                            null == (n = (a = this).onSwitchSuccess) || n.call(a, p, _);
                    } else c.default.track(d.rMx.MULTI_ACCOUNT_SWITCH_FAILURE), null == (s = (f = this).onSwitchError) || s.call(f, p);
                    i = null;
                }
                r = p.id;
                let h = o.getToken();
                null != h && '' !== h && o.setToken(h, p.id), null == (e = (t = this).onTokenSet) || e.call(t, p);
            }),
            f(this, 'handleLogout', (e) => {
                if (e.isSwitchingAccount) {
                    var t, n;
                    (i = r), null == (t = (n = this).onSwitchStart) || t.call(n), (_ = !!e.goHomeAfterSwitching);
                } else (_ = !1), o.removeToken(r);
                r = null;
            }),
            (this.onSwitchStart = e),
            (this.onSwitchSuccess = t),
            (this.onSwitchError = n),
            (this.onTokenSet = a);
    }
}
