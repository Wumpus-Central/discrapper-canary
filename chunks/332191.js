n.d(t, {
    J: () => m,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(15285),
    o = n(942405),
    c = n(403362),
    d = n(975571),
    u = n(652215),
    _ = n(985018),
    p = n(476555);

function m() {
    let e = (0, o.XQ)(),
        [t, n] = i.useState(!1),
        [m, g] = i.useState(() => (0, o.TC)()),
        A = (0, l.bG)([a.Ay], () => a.Ay.getSystemServiceStatus("input-service")),
        f = i.useCallback(async () => {
            n(!0), m ? await (0, o.z8)("windows-settings") : await (0, o.sL)("windows-settings"), n(!1), g((0, o.TC)());
        }, [m]);
    if (!e) return null;
    let h = "running" === A.state;
    return (0, r.jsxs)("div", {
        className: p.q,
        children: [
            (0, r.jsxs)("div", {
                className: p.L,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: _.intl.string(_.t.roHq80),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: _.intl.format(_.t["8CAL+D"], {
                            helpCenterLink: d.A.getArticleURL(u.MVz.SYSTEM_SERVICE),
                        }),
                    }),
                    m
                        ? (0, r.jsx)(s.Text, {
                              variant: "text-sm/normal",
                              color: h ? "text-feedback-positive" : "text-feedback-warning",
                              children: h
                                  ? _.intl.string(_.t.KHVMkW)
                                  : _.intl.format(_.t["5Rlr0b"], {
                                        status: (function (e) {
                                            switch (e.state) {
                                                case "unknown":
                                                    return _.intl.string(_.t["KW+nqT"]);
                                                case "disabled":
                                                    return _.intl.string(_.t["Q/wAF7"]);
                                                case "disconnected":
                                                    return _.intl.string(_.t.Xvs9IM);
                                                case "initializing":
                                                    return _.intl.string(_.t.h4qz8W);
                                                case "connecting":
                                                    return _.intl.string(_.t.fSu9XF);
                                                case "handshaking":
                                                    return _.intl.string(_.t["00aYLJ"]);
                                                case "running":
                                                    return _.intl.string(_.t["54TB7Z"]);
                                                case "waiting-for-retry":
                                                    return _.intl.string(_.t["0FONwi"]);
                                                case "failure":
                                                    return _.intl.string(_.t.Ic0nkd);
                                                default:
                                                    (0, c.xb)(e.state);
                                            }
                                        })(A),
                                    }),
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(s.Button, {
                variant: m ? "critical-secondary" : "primary",
                loading: t,
                onClick: f,
                text: m ? _.intl.string(_.t.pAwbdL) : _.intl.string(_.t["1iI46O"]),
            }),
        ],
    });
}
