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
    _ = n(985018),
    m = n(79668);
function g() {
    let e = (0, o.XQ)(),
        [t, n] = s.useState(!1),
        [g, A] = s.useState(() => (0, o.TC)()),
        x = (0, l.bG)([r.Ay], () => r.Ay.getSystemServiceStatus("input-service")),
        h = s.useCallback(async () => {
            n(!0), g ? await (0, o.z8)("windows-settings") : await (0, o.sL)("windows-settings"), n(!1), A((0, o.TC)());
        }, [g]);
    if (!e) return null;
    let p = "running" === x.state;
    return (0, i.jsxs)("div", {
        className: m.q,
        children: [
            (0, i.jsxs)("div", {
                className: m.L,
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: _.intl.string(_.t.roHq80),
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: _.intl.format(_.t["8CAL+D"], {
                            helpCenterLink: c.A.getArticleURL(u.MVz.SYSTEM_SERVICE),
                        }),
                    }),
                    g
                        ? (0, i.jsx)(a.Text, {
                              variant: "text-sm/normal",
                              color: p ? "text-feedback-positive" : "text-feedback-warning",
                              children: p
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
                                                    (0, d.xb)(e.state);
                                            }
                                        })(x),
                                    }),
                          })
                        : null,
                ],
            }),
            (0, i.jsx)(a.Button, {
                variant: g ? "critical-secondary" : "primary",
                loading: t,
                onClick: h,
                text: g ? _.intl.string(_.t.pAwbdL) : _.intl.string(_.t["1iI46O"]),
            }),
        ],
    });
}
