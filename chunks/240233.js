"use strict";
let r, i;
n.d(t, { A: () => f });
var s = n(247775),
    a = n(73153),
    o = n(439372),
    l = n(287809),
    u = n(954571),
    c = n(274303),
    d = n(652215);
let _ = !1;
class f extends o.A {
    onSwitchStart;
    onSwitchSuccess;
    onSwitchError;
    onTokenSet;
    constructor({ onSwitchStart: e, onSwitchSuccess: t, onSwitchError: n, onTokenSet: r }) {
        super(), (this.onSwitchStart = e), (this.onSwitchSuccess = t), (this.onSwitchError = n), (this.onTokenSet = r);
    }
    actions = { LOGOUT: (e) => this.handleLogout(e) };
    _initialize() {
        a.h.subscribe("CONNECTION_OPEN", () => this.handleConnectionOpen()), this.handleConnectionOpen();
    }
    _terminate() {
        a.h.unsubscribe("CONNECTION_OPEN", () => this.handleConnectionOpen());
    }
    handleConnectionOpen = () => {
        let e = l.default.getCurrentUser();
        if (null == e) return;
        if (null != i) {
            if (i !== r) {
                let t = c.A.getUsers().map((e) => {
                    let { id: t } = e;
                    return t;
                });
                u.default.track(d.HAw.MULTI_ACCOUNT_SWITCH_SUCCESS, { from_user_id: i, linked_user_ids: t }),
                    this.onSwitchSuccess?.(e, _);
            } else u.default.track(d.HAw.MULTI_ACCOUNT_SWITCH_FAILURE), this.onSwitchError?.(e);
            i = null;
        }
        r = e.id;
        let t = s.getToken();
        null != t && "" !== t && s.setToken(t, e.id), this.onTokenSet?.(e);
    };
    handleLogout = (e) => {
        e.isSwitchingAccount
            ? ((i = r), this.onSwitchStart?.(), (_ = !!e.goHomeAfterSwitching))
            : ((_ = !1), s.removeToken(r)),
            (r = null);
    };
}
