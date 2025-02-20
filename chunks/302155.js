let r, i;
n.d(t, { Z: () => _ });
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
let p = !1;
class _ extends s.Z {
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
                let _ = l.default.getCurrentUser();
                if (null == _) return;
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
                            null === (n = (a = this).onSwitchSuccess) || void 0 === n || n.call(a, _, p);
                    } else c.default.track(d.rMx.MULTI_ACCOUNT_SWITCH_FAILURE), null === (s = (f = this).onSwitchError) || void 0 === s || s.call(f, _);
                    i = null;
                }
                r = _.id;
                let h = o.getToken();
                null != h && '' !== h && o.setToken(h, _.id), null === (e = (t = this).onTokenSet) || void 0 === e || e.call(t, _);
            }),
            f(this, 'handleLogout', (e) => {
                if (e.isSwitchingAccount) {
                    var t, n;
                    (i = r), null === (t = (n = this).onSwitchStart) || void 0 === t || t.call(n), (p = !!e.goHomeAfterSwitching);
                } else (p = !1), o.removeToken(r);
                r = null;
            }),
            (this.onSwitchStart = e),
            (this.onSwitchSuccess = t),
            (this.onSwitchError = n),
            (this.onTokenSet = a);
    }
}
