n.d(t, { J: () => h }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(15285),
    l = n(942405),
    c = n(403362),
    u = n(975571),
    d = n(652215),
    f = n(985018),
    p = n(476555);
function _(e) {
    switch (e.state) {
        case "unknown":
            return f.intl.string(f.t["KW+nqT"]);
        case "disabled":
            return f.intl.string(f.t["Q/wAF7"]);
        case "disconnected":
            return f.intl.string(f.t.Xvs9IM);
        case "initializing":
            return f.intl.string(f.t.h4qz8W);
        case "connecting":
            return f.intl.string(f.t.fSu9XF);
        case "handshaking":
            return f.intl.string(f.t["00aYLJ"]);
        case "running":
            return f.intl.string(f.t["54TB7Z"]);
        case "waiting-for-retry":
            return f.intl.string(f.t["0FONwi"]);
        case "failure":
            return f.intl.string(f.t.Ic0nkd);
        default:
            (0, c.xb)(e.state);
    }
}
function h() {
    let e = (0, l.XQ)(),
        [t, n] = i.useState(!1),
        [c, h] = i.useState(() => (0, l.TC)()),
        m = (0, a.bG)([o.Ay], () => o.Ay.getSystemServiceStatus("input-service")),
        g = i.useCallback(async () => {
            n(!0), c ? await (0, l.z8)("windows-settings") : await (0, l.sL)("windows-settings"), n(!1), h((0, l.TC)());
        }, [c]);
    if (!e) return null;
    let E = "running" === m.state;
    return (0, r.jsxs)("div", {
        className: p.q,
        children: [
            (0, r.jsxs)("div", {
                className: p.L,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: f.intl.string(f.t.roHq80),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: f.intl.format(f.t["8CAL+D"], {
                            helpCenterLink: u.A.getArticleURL(d.MVz.SYSTEM_SERVICE),
                        }),
                    }),
                    c
                        ? (0, r.jsx)(s.Text, {
                              variant: "text-sm/normal",
                              color: E ? "text-feedback-positive" : "text-feedback-warning",
                              children: E ? f.intl.string(f.t.KHVMkW) : f.intl.format(f.t["5Rlr0b"], { status: _(m) }),
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(s.Button, {
                variant: c ? "critical-secondary" : "primary",
                loading: t,
                onClick: g,
                text: c ? f.intl.string(f.t.pAwbdL) : f.intl.string(f.t["1iI46O"]),
            }),
        ],
    });
}
