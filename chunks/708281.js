"use strict";
n.d(t, { N: () => h });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(397927),
    o = n(830215),
    l = n(854378),
    u = n(976860),
    c = n(954571),
    d = n(652215),
    _ = n(985018);
function f(e) {
    let { token: t, onClose: n } = e,
        [a, s] = i.useState("loading");
    i.useEffect(() => {
        c.default.track(d.HAw.ONE_TIME_LOGIN_MODAL_OPENED, { has_token: null != t });
    }, [t]);
    let f = i.useCallback(async () => {
        try {
            if (null == t) {
                s("error"),
                    c.default.track(d.HAw.ONE_TIME_LOGIN_ERROR, {
                        source: "web_modal",
                        error_reason: "missing_token",
                        error_message: "No token provided",
                    });
                return;
            }
            s("loading"),
                c.default.track(d.HAw.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_modal" }),
                await o.A.oneTimeLogin(t),
                s("success"),
                c.default.track(d.HAw.LOGIN_SUCCESSFUL, { source: "web_modal", login_method: "one_time_login" });
        } catch (t) {
            s("error");
            let e = t instanceof Error ? t.message : "Login failed";
            c.default.track(d.HAw.ONE_TIME_LOGIN_ERROR, {
                source: "web_modal",
                error_reason: "api_error",
                error_message: e,
            });
        }
    }, [t]);
    i.useEffect(() => {
        f();
    }, [f]);
    let p = i.useCallback(() => {
        c.default.track(d.HAw.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: a }), n?.();
    }, [n, a]);
    switch (
        (i.useEffect(() => {
            "success" === a && (n?.(), (0, u.pX)(d.BVt.ME));
        }, [a, n]),
        a)
    ) {
        case "loading":
        case "success":
            return { title: _.intl.string(_.t.W9uNdG), body: (0, r.jsx)(l.CK, {}) };
        case "error":
            return {
                title: _.intl.string(_.t.RtCSr1),
                subtitle: _.intl.string(_.t["S+YjYJ"]),
                actions: [{ onClick: p, text: _.intl.string(_.t["ETE/oC"]) }],
            };
        default:
            return {};
    }
}
function p(e) {
    let { title: t, subtitle: n, body: i, actions: s } = f(e);
    return (0, r.jsxs)(a.dWK, {
        ...e,
        onClose: () => Promise.resolve(e.onClose?.()),
        size: "sm",
        children: [
            (0, r.jsx)(a.rQ0, { title: t ?? "", subtitle: n }),
            (0, r.jsx)(a.cwr, { children: i }),
            (0, r.jsx)(a.H7u, { actions: s ?? [], actionsFullWidth: !0 }),
        ],
    });
}
function h(e) {
    (0, s.mMO)(() => Promise.resolve((t) => (0, r.jsx)(p, { ...t, ...e })));
}
