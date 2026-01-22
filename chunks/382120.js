t.d(l, {
    A: () => f,
}),
    t(228524),
    t(938796);
var n = t(627968);
t(64700);
var i = t(158954),
    r = t(311907),
    s = t(397927),
    a = t(973925),
    o = t(622543),
    d = t(985018),
    c = t(437102);

function u(e) {
    let { icon: l, title: t, description: i } = e;
    return (0, n.jsxs)("div", {
        className: c.nM,
        children: [
            (0, n.jsx)("div", {
                className: c.aL,
                children: (0, n.jsx)(l, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                }),
            }),
            (0, n.jsxs)("div", {
                className: c.qg,
                children: [
                    (0, n.jsx)(s.Heading, {
                        variant: "text-xs/semibold",
                        children: t,
                    }),
                    (0, n.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: i,
                    }),
                ],
            }),
        ],
    });
}

function f(e) {
    let { user: l } = e,
        t = (0, r.bG)([o.A], () => {
            var e;
            return null == (e = o.A.getUserProfile(l.id)) ? void 0 : e.application;
        }),
        {
            hasMessageContent: f,
            hasGuildPresences: p,
            hasGuildMembers: m,
        } = (0, a.Z)({
            flags: null == t ? void 0 : t.flags,
        });
    return (0, n.jsxs)(i.IpV, {
        fade: !0,
        className: c.XG,
        children: [
            f &&
                (0, n.jsx)(u, {
                    icon: s.oyn,
                    title: d.intl.string(d.t["7Tmhfu"]),
                    description: d.intl.string(d.t.eu5x7z),
                }),
            p &&
                (0, n.jsx)(u, {
                    icon: s._xR,
                    title: d.intl.string(d.t.awYSsM),
                    description: d.intl.string(d.t.TpsXoC),
                }),
            m &&
                (0, n.jsx)(u, {
                    icon: s.nFg,
                    title: d.intl.string(d.t.WuKeSJ),
                    description: d.intl.string(d.t.wOBmtV),
                }),
            (0, n.jsx)(s.Text, {
                variant: "text-xs/normal",
                children: d.intl.format(d.t.b6nqk0, {
                    helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975",
                }),
            }),
        ],
    });
}
