n.d(t, { N: () => S });
var i = n(627968),
    r = n(64700),
    a = n(224640),
    s = n(20742),
    _ = n(430993),
    l = n(696208),
    o = n(192308),
    E = n(830215),
    d = n(854378),
    c = n(976860),
    u = n(954571),
    I = n(652215),
    A = n(985018);
function T(e) {
    let {
        title: t,
        subtitle: n,
        body: o,
        actions: T,
    } = (function (e) {
        let { token: t, onClose: n } = e,
            [a, s] = r.useState("loading");
        r.useEffect(() => {
            u.default.track(I.HAw.ONE_TIME_LOGIN_MODAL_OPENED, { has_token: null != t });
        }, [t]);
        let _ = r.useCallback(async () => {
            try {
                if (null == t) {
                    s("error"),
                        u.default.track(I.HAw.ONE_TIME_LOGIN_ERROR, {
                            source: "web_modal",
                            error_reason: "missing_token",
                            error_message: "No token provided",
                        });
                    return;
                }
                s("loading"),
                    u.default.track(I.HAw.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_modal" }),
                    await E.A.oneTimeLogin(t),
                    s("success"),
                    u.default.track(I.HAw.LOGIN_SUCCESSFUL, { source: "web_modal", login_method: "one_time_login" });
            } catch (t) {
                s("error");
                let e = t instanceof Error ? t.message : "Login failed";
                u.default.track(I.HAw.ONE_TIME_LOGIN_ERROR, {
                    source: "web_modal",
                    error_reason: "api_error",
                    error_message: e,
                });
            }
        }, [t]);
        r.useEffect(() => {
            _();
        }, [_]);
        let l = r.useCallback(() => {
            u.default.track(I.HAw.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, { current_state: a }), n?.();
        }, [n, a]);
        switch (
            (r.useEffect(() => {
                "success" === a && (n?.(), (0, c.pX)(I.BVt.ME));
            }, [a, n]),
            a)
        ) {
            case "loading":
            case "success":
                return { title: A.intl.string(A.t.W9uNdG), body: (0, i.jsx)(d.CK, {}) };
            case "error":
                return {
                    title: A.intl.string(A.t.RtCSr1),
                    subtitle: A.intl.string(A.t["S+YjYJ"]),
                    actions: [{ onClick: l, text: A.intl.string(A.t["ETE/oC"]) }],
                };
            default:
                return {};
        }
    })(e);
    return (0, i.jsxs)(a.d, {
        ...e,
        onClose: () => Promise.resolve(e.onClose?.()),
        size: "sm",
        children: [
            (0, i.jsx)(s.rQ, { title: t ?? "", subtitle: n }),
            (0, i.jsx)(_.c, { children: o }),
            (0, i.jsx)(l.H, { actions: T ?? [], actionsFullWidth: !0 }),
        ],
    });
}
function S(e) {
    (0, o.openModalLazy)(() => Promise.resolve((t) => (0, i.jsx)(T, { ...t, ...e })));
}
