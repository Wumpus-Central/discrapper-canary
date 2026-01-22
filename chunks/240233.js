let r, i;
n.d(t, { A: () => _ });
var a = n(247775),
    s = n(73153),
    o = n(439372),
    l = n(287809),
    c = n(954571),
    u = n(274303),
    d = n(652215);
function f(e, t, n) {
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
let p = !1;
class _ extends o.A {
    _initialize() {
        s.h.subscribe("CONNECTION_OPEN", () => this.handleConnectionOpen()), this.handleConnectionOpen();
    }
    _terminate() {
        s.h.unsubscribe("CONNECTION_OPEN", () => this.handleConnectionOpen());
    }
    constructor({ onSwitchStart: e, onSwitchSuccess: t, onSwitchError: n, onTokenSet: s }) {
        super(),
            f(this, "onSwitchStart", void 0),
            f(this, "onSwitchSuccess", void 0),
            f(this, "onSwitchError", void 0),
            f(this, "onTokenSet", void 0),
            f(this, "actions", { LOGOUT: (e) => this.handleLogout(e) }),
            f(this, "handleConnectionOpen", () => {
                var e, t, n, s, o, f;
                let _ = l.default.getCurrentUser();
                if (null == _) return;
                if (null != i) {
                    if (i !== r) {
                        let e = u.A.getUsers().map((e) => {
                            let { id: t } = e;
                            return t;
                        });
                        c.default.track(d.HAw.MULTI_ACCOUNT_SWITCH_SUCCESS, {
                            from_user_id: i,
                            linked_user_ids: e,
                        }),
                            null == (n = (s = this).onSwitchSuccess) || n.call(s, _, p);
                    } else
                        c.default.track(d.HAw.MULTI_ACCOUNT_SWITCH_FAILURE),
                            null == (o = (f = this).onSwitchError) || o.call(f, _);
                    i = null;
                }
                r = _.id;
                let h = a.getToken();
                null != h && "" !== h && a.setToken(h, _.id), null == (e = (t = this).onTokenSet) || e.call(t, _);
            }),
            f(this, "handleLogout", (e) => {
                if (e.isSwitchingAccount) {
                    var t, n;
                    (i = r), null == (t = (n = this).onSwitchStart) || t.call(n), (p = !!e.goHomeAfterSwitching);
                } else (p = !1), a.removeToken(r);
                r = null;
            }),
            (this.onSwitchStart = e),
            (this.onSwitchSuccess = t),
            (this.onSwitchError = n),
            (this.onTokenSet = s);
    }
}
