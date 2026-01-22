e.d(s, {
    default: () => m,
}),
    e(896048);
var r = e(627968);
e(64700);
var i = e(158954),
    n = e(397927),
    a = e(608461),
    l = e(493540),
    c = e(985018),
    o = e(100670),
    d = e(485885);

function x(t) {
    let { header: s, body: e } = t;
    return (0, r.jsxs)("div", {
        className: o.yf,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                className: o.mT,
                src: d,
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(n.Text, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: s,
                    }),
                    (0, r.jsx)(n.hKd, {
                        size: 4,
                    }),
                    (0, r.jsx)(n.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: e,
                    }),
                ],
            }),
        ],
    });
}

function m(t) {
    let { guildId: s, demonetized: e, transitionState: o, onClose: d } = t,
        [m, { loading: h, error: u }] = (0, a.A)(e ? l.Y7 : l.KW),
        p = async () => {
            try {
                let t = await m(s);
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
                loading: h,
                onClick: p,
                text: c.intl.string(c.t["pC/ozD"]),
            },
        ],
        title: c.intl.string(c.t.TP4GSt),
        onClose: d,
        preview: (0, r.jsxs)(r.Fragment, {
            children: [
                null == u
                    ? null
                    : (0, r.jsxs)(n.Text, {
                          variant: "text-xs/normal",
                          color: "text-feedback-critical",
                          children: ["Error: ", u.message],
                      }),
                (0, r.jsx)(n.Text, {
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
        children: (0, r.jsxs)(n.BJc, {
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
