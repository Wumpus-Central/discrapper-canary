"use strict";
n.d(t, { A: () => S }), n(321073);
var i = n(247775),
    r = n(17928),
    s = n(228366),
    a = n(626584),
    o = n(174459),
    l = n(274303),
    u = n(652215);
let c = new a.A("MultiAccountSwitchStore"),
    d = null,
    _ = null,
    h = null,
    f = null,
    p = !1,
    E = !1,
    m = !1,
    g = null;
function A(e) {
    return {
        from_user_id: _,
        to_user_id: h,
        actual_user_id: e,
        fast_connect_user_id: null,
        linked_user_ids: l.A.getUsers().map((e) => {
            let { id: t } = e;
            return t;
        }),
        has_ever_connected: E,
        switch_origin: f,
    };
}
function I() {
    return p && !1;
}
class T extends r.Ay.Store {
    static displayName = "MultiAccountSwitchStore";
    initialize() {
        this.waitFor(l.A);
    }
    getIsSwitchingAccount() {
        return p;
    }
    getSwitchResult() {
        return g;
    }
}
let S = new T(s.h, {
    MULTI_ACCOUNT_SWITCH_START: function (e) {
        (h = e.targetUserId), (f = e.location);
    },
    MULTI_ACCOUNT_SWITCH_TIMEOUT: function () {
        return (
            o.default.track(u.HAw.MULTI_ACCOUNT_SWITCH_TIMEOUT, {
                from_user_id: _,
                to_user_id: h,
                linked_user_ids: l.A.getUsers().map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                has_ever_connected: E,
                switch_origin: f,
            }),
            !1
        );
    },
    LOGOUT: function (e) {
        (p = !!e.isSwitchingAccount),
            e.isSwitchingAccount
                ? ((_ = d),
                  (m = !!e.goHomeAfterSwitching),
                  c.log("logout from account switch", {
                      current_user_id: d,
                      expected_user_id: h,
                      fast_connect_user_id: null,
                      switch_origin: f,
                  }))
                : ((m = !1), i.removeToken(d));
    },
    CONNECTION_OPEN: function (e) {
        let { user: t } = e;
        if (p) {
            !(function (e) {
                if (!I()) return;
                let t = i.getToken(e),
                    n = i.getToken(),
                    r = null != h && e !== h,
                    s = null != t && null != n && t !== n;
                if (!s && !r) return;
                let a = {
                    ...A(e),
                    user_token_exists: null != t,
                    main_token_exists: null != n,
                    is_token_mismatch: s,
                    is_user_mismatch: r,
                };
                c.log("Token mismatch on account switch connection open", a),
                    o.default.track(u.HAw.MULTI_ACCOUNT_SWITCH_READY_MISMATCH, a);
            })(t.id);
            let e = _ !== t.id;
            if (e) {
                let e;
                (e = A(t.id)),
                    o.default.track(u.HAw.MULTI_ACCOUNT_SWITCH_SUCCESS, e),
                    I() && c.log("Account switch success", e);
            } else {
                let e;
                (e = A(t.id)),
                    o.default.track(u.HAw.MULTI_ACCOUNT_SWITCH_FAILURE, e),
                    I() && c.log("Account switch failure", e);
            }
            g = { success: e, navigateHome: m };
        } else g = null;
        let n = i.getToken();
        null != n &&
            "" !== n &&
            (!(function (e, t) {
                if (!I()) return;
                let n = new Set(),
                    r = [],
                    s = !1;
                if (
                    (l.A.getUsers().forEach((a) => {
                        let { id: o } = a,
                            l = i.getToken(o);
                        o !== e && l === t && r.push(o), null != l && (n.has(l) ? (s = !0) : n.add(l));
                    }),
                    0 === r.length)
                )
                    return;
                let a = { ...A(e), colliding_user_ids: r, is_already_corrupted: s };
                c.log("setToken about to introduce per-user token collision", a),
                    o.default.track(u.HAw.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION_WRITE, a);
            })(t.id, n),
            i.setToken(n, t.id)),
            (function (e) {
                if (!I()) return;
                let t = new Map();
                l.A.getUsers().forEach((e) => {
                    let { id: n } = e,
                        r = i.getToken(n);
                    if (null == r || "" === r) return;
                    let s = t.get(r) ?? [];
                    s.push(n), t.set(r, s);
                }),
                    t.forEach((t) => {
                        if (t.length < 2) return;
                        let n = { ...A(e), colliding_user_ids: t };
                        c.log("Per-user token collision detected", n),
                            o.default.track(u.HAw.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION, n);
                    });
            })(t.id),
            (_ = null),
            (h = null),
            (f = null),
            (p = !1),
            (m = !1),
            (E = !0),
            (d = t.id);
    },
});
