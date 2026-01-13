s.d(e, { default: () => u }), s(388685);
var r = s(54381);
s(473749);
var i = s(793030),
    l = s(481060),
    n = s(935369),
    a = s(53365),
    c = s(388032),
    o = s(69901),
    d = s(490962);
function x(t) {
    let { header: e, body: s } = t;
    return (0, r.jsxs)("div", {
        className: o.bulletItem,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                className: o.bulletImage,
                src: d,
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: e,
                    }),
                    (0, r.jsx)(l.LZC, { size: 4 }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: s,
                    }),
                ],
            }),
        ],
    });
}
function u(t) {
    let { guildId: e, demonetized: s, transitionState: o, onClose: d } = t,
        [u, { loading: m, error: h }] = (0, n.Z)(s ? a.$J : a.hY),
        p = async () => {
            try {
                let t = await u(e);
                null != t && (null == d || d());
            } catch (t) {}
        };
    return (0, r.jsx)(i.Modal, {
        size: "md",
        transitionState: o,
        actions: [
            {
                variant: "secondary",
                onClick: d,
                text: c.intl.string(c.t.Jj8nUC),
            },
            {
                variant: "primary",
                loading: m,
                onClick: p,
                text: c.intl.string(c.t["pC/ozD"]),
            },
        ],
        title: c.intl.string(c.t.TP4GSt),
        onClose: d,
        preview: (0, r.jsxs)(r.Fragment, {
            children: [
                null == h
                    ? null
                    : (0, r.jsxs)(l.Text, {
                          variant: "text-xs/normal",
                          color: "text-feedback-critical",
                          children: ["Error: ", h.message],
                      }),
                (0, r.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: c.intl.format(c.t["+oNl6x"], {
                        termsURL: "https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms",
                    }),
                }),
            ],
        }),
        subtitle: c.intl.format(c.t.c0IsON, {
            termsURL: "https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms",
        }),
        children: (0, r.jsxs)(l.Kqy, {
            gap: 16,
            children: [
                (0, r.jsx)(x, {
                    header: c.intl.string(c.t.UzDaWD),
                    body: c.intl.string(c.t.IDk8Fz),
                }),
                (0, r.jsx)(x, {
                    header: c.intl.string(c.t["36/RiT"]),
                    body: c.intl.string(c.t.CBzNtr),
                }),
            ],
        }),
    });
}
