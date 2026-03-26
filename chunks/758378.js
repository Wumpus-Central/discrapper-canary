n.d(t, { J: () => g });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(15285),
    o = n(942405),
    d = n(403362),
    c = n(975571),
    u = n(652215),
    m = n(985018),
    _ = n(595241);
function g() {
    let e = (0, o.XQ)(),
        [t, n] = s.useState(!1),
        [g, x] = s.useState(() => (0, o.TC)()),
        A = (0, l.bG)([r.Ay], () => r.Ay.getSystemServiceStatus("input-service")),
        h = s.useCallback(async () => {
            n(!0), g ? await (0, o.z8)("windows-settings") : await (0, o.sL)("windows-settings"), n(!1), x((0, o.TC)());
        }, [g]);
    if (!e) return null;
    let p = "running" === A.state;
    return (0, i.jsxs)("div", {
        className: _.q,
        children: [
            (0, i.jsxs)("div", {
                className: _.L,
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: m.intl.string(m.t.roHq80),
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: m.intl.format(m.t["8CAL+D"], {
                            helpCenterLink: c.A.getArticleURL(u.MVz.SYSTEM_SERVICE),
                        }),
                    }),
                    g
                        ? (0, i.jsx)(a.Text, {
                              variant: "text-sm/normal",
                              color: p ? "text-feedback-positive" : "text-feedback-warning",
                              children: p
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
                                                    (0, d.xb)(e.state);
                                            }
                                        })(A),
                                    }),
                          })
                        : null,
                ],
            }),
            (0, i.jsx)(a.Button, {
                variant: g ? "critical-secondary" : "primary",
                loading: t,
                onClick: h,
                text: g ? m.intl.string(m.t.pAwbdL) : m.intl.string(m.t["1iI46O"]),
            }),
        ],
    });
}
