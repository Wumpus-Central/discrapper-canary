n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(573435),
    s = n(145497),
    o = n(649640),
    l = n(985018),
    c = n(838934);

function u(e) {
    let { name: t, onRetry: n } = e,
        u = (0, o.b2)(),
        d = (0, o.n6)(u.hex()),
        f = null != t ? t : l.intl.string(l.t.DmIUGK);
    return (0, r.jsxs)("div", {
        className: c.kL,
        children: [
            (0, r.jsx)("div", {
                className: c.vK,
                style: {
                    background: d,
                },
            }),
            (0, r.jsx)("div", {
                className: c.H,
                children: (0, r.jsx)(a.Ay, {
                    mask: a.hW.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, r.jsx)("div", {
                        className: c.R3,
                        children: (0, r.jsx)(s.B$, {
                            guildName: f,
                            iconSize: 64,
                        }),
                    }),
                }),
            }),
            (0, r.jsxs)("div", {
                className: c.wx,
                children: [
                    (0, r.jsx)(i.Heading, {
                        variant: "heading-lg/medium",
                        color: "text-strong",
                        children: f,
                    }),
                    (0, r.jsxs)(i.DUT, {
                        className: c.z3,
                        onClick: n,
                        children: [
                            (0, r.jsx)(i.EpV, {
                                size: "sm",
                                color: "currentColor",
                            }),
                            (0, r.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-feedback-warning",
                                children: l.intl.string(l.t.tmGHjc),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
