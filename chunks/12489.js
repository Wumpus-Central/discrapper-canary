n.d(t, { A: () => m });
var i = n(858899),
    r = n(192308),
    a = n(976860),
    s = n(73153),
    l = n(439372),
    o = n(868),
    d = n(378570),
    c = n(734057),
    u = n(287809),
    _ = n(274303),
    E = n(376463);
class A extends l.A {
    actions = {
        LOGOUT: (e) => this.handleLogout(e),
        MULTI_ACCOUNT_SWITCH_START: (e) => this.handleMultiAccountSwitchStart(e),
    };
    _initialize() {
        (s.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), this.handleConnectionOpen());
    }
    _terminate() {
        s.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
    }
    handleLogout(e) {
        e.isSwitchingAccount && this.onSwitchStart();
    }
    handleMultiAccountSwitchStart(e) {
        (0, o.m)(e.targetUserId);
    }
    handleConnectionOpen = () => {
        let e = E.A.getSwitchResult();
        if (null == e) return;
        let t = u.default.getCurrentUser();
        null != t &&
            (e.success ? this.onSwitchSuccess(t, e.navigateHome) : this.onSwitchError(t),
            (0, o.m)(null),
            this.onSwitchComplete());
    };
    transitionToLastChannel(e) {
        let t = _.A.getLastChannelId(e);
        return null != t && null != c.A.getChannel(t) && ((0, d.iN)(t, { navigationReplace: !0 }), !0);
    }
}
var f = n(573879),
    h = n(652215),
    I = n(792996);
let p = "SWITCH_ACCOUNTS_TOAST",
    m = new (class extends A {
        onSwitchStart() {}
        onSwitchSuccess(e, t) {
            setTimeout(() => {
                (t && !this.transitionToLastChannel(e.id) && (0, a.pX)(h.BVt.ME),
                    (0, i.P0)({
                        text: I.intl.formatToPlainString(I.t.wx7O3L, { username: e.username }),
                        variant: "success",
                        toastKey: p,
                    }));
            }, 100);
        }
        onSwitchError() {
            (0, i.P0)({ text: I.intl.string(I.t.pqvKWA), variant: "critical", toastKey: p });
        }
        onSwitchComplete() {
            ((0, r.Oo)(f.ov), (0, r.Oo)(f.Gl));
        }
    })();
