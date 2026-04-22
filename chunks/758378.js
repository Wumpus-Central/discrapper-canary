n.d(t, { J: () => A });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(834730),
    r = n(821609),
    o = n(15285),
    d = n(942405),
    u = n(403362),
    c = n(975571),
    g = n(652215),
    m = n(985018),
    _ = n(572985);
function A() {
    let [e, t] = s.useState(!1),
        [n, A] = s.useState(() => (0, d.TC)()),
        h = (0, l.bG)([o.Ay], () => o.Ay.getSystemServiceStatus("input-service")),
        p = s.useCallback(async () => {
            t(!0), n ? await (0, d.z8)("windows-settings") : await (0, d.sL)("windows-settings"), t(!1), A((0, d.TC)());
        }, [n]),
        x = "running" === h.state;
    return (0, i.jsxs)("div", {
        className: _.q,
        children: [
            (0, i.jsxs)("div", {
                className: _.L,
                children: [
                    (0, i.jsx)(a.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: m.intl.string(m.t.roHq80),
                    }),
                    (0, i.jsx)(a.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: m.intl.format(m.t["8CAL+D"], {
                            helpCenterLink: c.A.getArticleURL(g.MVz.SYSTEM_SERVICE),
                        }),
                    }),
                    n
                        ? (0, i.jsx)(a.E, {
                              variant: "text-sm/normal",
                              color: x ? "text-feedback-positive" : "text-feedback-warning",
                              children: x
                                  ? m.intl.string(m.t.KHVMkW)
                                  : m.intl.format(m.t["5Rlr0b"], {
                                        status: (function (e) {
                                            switch (e.state) {
                                                case "unknown":
                                                    return m.intl.string(m.t["KW+nqT"]);
                                                case "disabled":
                                                    return m.intl.string(m.t["Q/wAF7"]);
                                                case "disconnected":
                                                    return m.intl.string(m.t.Xvs9IM);
                                                case "initializing":
                                                    return m.intl.string(m.t.h4qz8W);
                                                case "connecting":
                                                    return m.intl.string(m.t.fSu9XF);
                                                case "handshaking":
                                                    return m.intl.string(m.t["00aYLJ"]);
                                                case "running":
                                                    return m.intl.string(m.t["54TB7Z"]);
                                                case "waiting-for-retry":
                                                    return m.intl.string(m.t["0FONwi"]);
                                                case "failure":
                                                    return m.intl.string(m.t.Ic0nkd);
                                                default:
                                                    (0, u.xb)(e.state);
                                            }
                                        })(h),
                                    }),
                          })
                        : null,
                ],
            }),
            (0, i.jsx)(r.$, {
                variant: n ? "critical-secondary" : "primary",
                loading: e,
                onClick: p,
                text: n ? m.intl.string(m.t.pAwbdL) : m.intl.string(m.t["1iI46O"]),
            }),
        ],
    });
}
