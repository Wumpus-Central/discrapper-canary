s.d(e, { default: () => x }), s(388685);
var r = s(54381);
s(473749);
var l = s(793030),
    n = s(481060),
    i = s(935369),
    a = s(53365),
    o = s(388032),
    c = s(65618),
    d = s(490962);
function u(t) {
    let { header: e, body: s } = t;
    return (0, r.jsxs)("div", {
        className: c.bulletItem,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                className: c.bulletImage,
                src: d,
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(n.Text, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: e,
                    }),
                    (0, r.jsx)(n.LZC, { size: 4 }),
                    (0, r.jsx)(n.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: s,
                    }),
                ],
            }),
        ],
    });
}
function x(t) {
    let { guildId: e, demonetized: s, transitionState: c, onClose: d } = t,
        [x, { loading: m, error: h }] = (0, i.Z)(s ? a.$J : a.hY),
        p = async () => {
            try {
                let t = await x(e);
                null != t && (null == d || d());
            } catch (t) {}
        };
    return (0, r.jsx)(l.Modal, {
        size: "md",
        transitionState: c,
        actions: [
            {
                variant: "secondary",
                onClick: d,
                text: o.intl.string(o.t.Jj8nUC),
            },
            {
                variant: "primary",
                loading: m,
                onClick: p,
                text: o.intl.string(o.t["pC/ozD"]),
            },
        ],
        title: o.intl.string(o.t.TP4GSt),
        onClose: d,
        preview: (0, r.jsxs)(r.Fragment, {
            children: [
                null == h
                    ? null
                    : (0, r.jsxs)(n.Text, {
                          variant: "text-xs/normal",
                          color: "status-danger",
                          children: ["Error: ", h.message],
                      }),
                (0, r.jsx)(n.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: o.intl.format(o.t["+oNl6x"], {
                        termsURL: "https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms",
                    }),
                }),
            ],
        }),
        subtitle: o.intl.format(o.t.c0IsON, {
            termsURL: "https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms",
        }),
        children: (0, r.jsxs)(n.Kqy, {
            gap: 16,
            children: [
                (0, r.jsx)(u, {
                    header: o.intl.string(o.t.UzDaWD),
                    body: o.intl.string(o.t.IDk8Fz),
                }),
                (0, r.jsx)(u, {
                    header: o.intl.string(o.t["36/RiT"]),
                    body: o.intl.string(o.t.CBzNtr),
                }),
            ],
        }),
    });
}
