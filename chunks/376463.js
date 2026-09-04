n.d(t, { A: () => S }), n(321073);
var i = n(247775),
    r = n(17928),
    a = n(228366),
    s = n(626584),
    l = n(174459),
    o = n(274303),
    d = n(652215);
let c = new s.A("MultiAccountSwitchStore"),
    u = null,
    _ = null,
    E = null,
    A = null,
    h = !1,
    I = !1,
    f = !1,
    p = null;
function T(e) {
    return {
        from_user_id: _,
        to_user_id: E,
        actual_user_id: e,
        fast_connect_user_id: null,
        linked_user_ids: o.A.getUsers().map((e) => {
            let { id: t } = e;
            return t;
        }),
        has_ever_connected: I,
        switch_origin: A,
    };
}
function m() {
    return h && !1;
}
class g extends r.Ay.Store {
    static displayName = "MultiAccountSwitchStore";
    initialize() {
        this.waitFor(o.A);
    }
    getIsSwitchingAccount() {
        return h;
    }
    getSwitchResult() {
        return p;
    }
    getTargetUserId() {
        return E;
    }
}
let S = new g(a.h, {
    MULTI_ACCOUNT_SWITCH_START: function (e) {
        (E = e.targetUserId), (A = e.location);
    },
    MULTI_ACCOUNT_SWITCH_TIMEOUT: function () {
        return (
            l.default.track(d.HAw.MULTI_ACCOUNT_SWITCH_TIMEOUT, {
                from_user_id: _,
                to_user_id: E,
                linked_user_ids: o.A.getUsers().map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                has_ever_connected: I,
                switch_origin: A,
            }),
            !1
        );
    },
    LOGOUT: function (e) {
        (h = !!e.isSwitchingAccount),
            e.isSwitchingAccount
                ? ((_ = u),
                  (f = !!e.goHomeAfterSwitching),
                  c.log("logout from account switch", {
                      current_user_id: u,
                      expected_user_id: E,
                      fast_connect_user_id: null,
                      switch_origin: A,
                  }))
                : ((f = !1), i.removeToken(u));
    },
    CONNECTION_OPEN: function (e) {
        let { user: t } = e;
        if (h) {
            !(function (e) {
                if (!m()) return;
                let t = i.getToken(e),
                    n = i.getToken(),
                    r = null != E && e !== E,
                    a = null != t && null != n && t !== n;
                if (!a && !r) return;
                let s = {
                    ...T(e),
                    user_token_exists: null != t,
                    main_token_exists: null != n,
                    is_token_mismatch: a,
                    is_user_mismatch: r,
                };
                c.log("Token mismatch on account switch connection open", s),
                    l.default.track(d.HAw.MULTI_ACCOUNT_SWITCH_READY_MISMATCH, s);
            })(t.id);
            let e = _ !== t.id;
            if (e) {
                let e;
                (e = T(t.id)),
                    l.default.track(d.HAw.MULTI_ACCOUNT_SWITCH_SUCCESS, e),
                    m() && c.log("Account switch success", e);
            } else {
                let e;
                (e = T(t.id)),
                    l.default.track(d.HAw.MULTI_ACCOUNT_SWITCH_FAILURE, e),
                    m() && c.log("Account switch failure", e);
            }
            p = { success: e, navigateHome: f };
        } else p = null;
        let n = i.getToken();
        null != n &&
            "" !== n &&
            (!(function (e, t) {
                if (!m()) return;
                let n = o.A.getUsers()
                    .map((e) => {
                        let { id: t } = e;
                        return t;
                    })
                    .filter((n) => n !== e && i.getToken(n) === t);
                if (0 === n.length) return;
                let r = i.getToken(e) === t,
                    a = n.length >= 2,
                    s = { ...T(e), colliding_user_ids: n, is_already_corrupted: r || a };
                c.log("setToken about to introduce per-user token collision", s),
                    l.default.track(d.HAw.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION_WRITE, s);
            })(t.id, n),
            i.setToken(n, t.id)),
            (function (e) {
                if (!m()) return;
                let t = new Map();
                o.A.getUsers().forEach((e) => {
                    let { id: n } = e,
                        r = i.getToken(n);
                    if (null == r || "" === r) return;
                    let a = t.get(r) ?? [];
                    a.push(n), t.set(r, a);
                }),
                    t.forEach((t) => {
                        if (t.length < 2) return;
                        let n = { ...T(e), colliding_user_ids: t };
                        c.log("Per-user token collision detected", n),
                            l.default.track(d.HAw.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION, n);
                    });
            })(t.id),
            (_ = null),
            (E = null),
            (A = null),
            (h = !1),
            (f = !1),
            (I = !0),
            (u = t.id);
    },
    CONNECTION_CLOSED: function (e) {
        if (40004 !== e.code || !h) return !1;
        (_ = null), (E = null), (A = null), (f = !1);
    },
});
