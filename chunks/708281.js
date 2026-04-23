"use strict";
n.d(t, { N: () => m });
var r = n(627968),
    i = n(64700),
    s = n(224640),
    a = n(20742),
    o = n(430993),
    l = n(696208),
    u = n(192308),
    c = n(830215),
    d = n(854378),
    _ = n(976860),
    f = n(954571),
    p = n(652215),
    h = n(985018);
function E(e) {
    let {
        title: t,
        subtitle: n,
        body: u,
        actions: E,
    } = (function (e) {
        let { token: t, onClose: n } = e,
            [s, a] = i.useState("loading");
        i.useEffect(() => {
            f.default.track(p.HAw.ONE_TIME_LOGIN_MODAL_OPENED, { has_token: null != t });
        }, [t]);
        let o = i.useCallback(async () => {
            try {
                if (null == t) {
                    a("error"),
                        f.default.track(p.HAw.ONE_TIME_LOGIN_ERROR, {
                            source: "web_modal",
                            error_reason: "missing_token",
                            error_message: "No token provided",
                        });
                    return;
                }
                a("loading"),
                    f.default.track(p.HAw.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_modal" }),
                    await c.A.oneTimeLogin(t),
                    a("success"),
                    f.default.track(p.HAw.LOGIN_SUCCESSFUL, { source: "web_modal", login_method: "one_time_login" });
            } catch (t) {
                a("error");
                let e = t instanceof Error ? t.message : "Login failed";
                f.default.track(p.HAw.ONE_TIME_LOGIN_ERROR, {
                    source: "web_modal",
                    error_reason: "api_error",
                    error_message: e,
                });
            }
        }, [t]);
        i.useEffect(() => {
            o();
        }, [o]);
        let l = i.useCallback(() => {
            f.default.track(p.HAw.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: s }), n?.();
        }, [n, s]);
        switch (
            (i.useEffect(() => {
                "success" === s && (n?.(), (0, _.pX)(p.BVt.ME));
            }, [s, n]),
            s)
        ) {
            case "loading":
            case "success":
                return { title: h.intl.string(h.t.W9uNdG), body: (0, r.jsx)(d.CK, {}) };
            case "error":
                return {
                    title: h.intl.string(h.t.RtCSr1),
                    subtitle: h.intl.string(h.t["S+YjYJ"]),
                    actions: [{ onClick: l, text: h.intl.string(h.t["ETE/oC"]) }],
                };
            default:
                return {};
        }
    })(e);
    return (0, r.jsxs)(s.d, {
        ...e,
        onClose: () => Promise.resolve(e.onClose?.()),
        size: "sm",
        children: [
            (0, r.jsx)(a.rQ, { title: t ?? "", subtitle: n }),
            (0, r.jsx)(o.c, { children: u }),
            (0, r.jsx)(l.H, { actions: E ?? [], actionsFullWidth: !0 }),
        ],
    });
}
function m(e) {
    (0, u.openModalLazy)(() => Promise.resolve((t) => (0, r.jsx)(E, { ...t, ...e })));
}
