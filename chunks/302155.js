let i, a;
r.d(n, {
    Z: function () {
        return _;
    }
});
var o = r(213919),
    s = r(570140),
    l = r(147913),
    u = r(594174),
    c = r(626135),
    d = r(726745),
    f = r(981631);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let h = !1;
class _ extends l.Z {
    _initialize() {
        s.Z.subscribe('CONNECTION_OPEN', () => this.handleConnectionOpen()), this.handleConnectionOpen();
    }
    _terminate() {
        s.Z.unsubscribe('CONNECTION_OPEN', () => this.handleConnectionOpen());
    }
    constructor({ onSwitchStart: e, onSwitchSuccess: n, onSwitchError: r, onTokenSet: s }) {
        super(),
            p(this, 'onSwitchStart', void 0),
            p(this, 'onSwitchSuccess', void 0),
            p(this, 'onSwitchError', void 0),
            p(this, 'onTokenSet', void 0),
            p(this, 'actions', { LOGOUT: (e) => this.handleLogout(e) }),
            p(this, 'handleConnectionOpen', () => {
                var e, n, r, s, l, p;
                let _ = u.default.getCurrentUser();
                if (null == _) return;
                if (null != a) {
                    if (a !== i) {
                        let e = d.Z.getUsers().map((e) => {
                            let { id: n } = e;
                            return n;
                        });
                        c.default.track(f.rMx.MULTI_ACCOUNT_SWITCH_SUCCESS, {
                            from_user_id: a,
                            linked_user_ids: e
                        }),
                            null === (r = (s = this).onSwitchSuccess) || void 0 === r || r.call(s, _, h);
                    } else c.default.track(f.rMx.MULTI_ACCOUNT_SWITCH_FAILURE), null === (l = (p = this).onSwitchError) || void 0 === l || l.call(p, _);
                    a = null;
                }
                i = _.id;
                let m = o.getToken();
                null != m && '' !== m && o.setToken(m, _.id), null === (e = (n = this).onTokenSet) || void 0 === e || e.call(n, _);
            }),
            p(this, 'handleLogout', (e) => {
                if (e.isSwitchingAccount) {
                    var n, r;
                    (a = i), null === (n = (r = this).onSwitchStart) || void 0 === n || n.call(r), (h = !!e.goHomeAfterSwitching);
                } else (h = !1), o.removeToken(i);
                i = null;
            }),
            (this.onSwitchStart = e),
            (this.onSwitchSuccess = n),
            (this.onSwitchError = r),
            (this.onTokenSet = s);
    }
}
