s.d(e, { default: () => m });
var r = s(627968);
s(64700);
var i = s(158954),
    n = s(397927),
    l = s(608461),
    a = s(493540),
    c = s(985018),
    o = s(100670),
    d = s(485885);
function x(t) {
    let { header: e, body: s } = t;
    return (0, r.jsxs)("div", {
        className: o.yf,
        children: [
            (0, r.jsx)("img", { alt: "", className: o.mT, src: d }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(n.Text, { variant: "text-sm/semibold", color: "text-default", children: e }),
                    (0, r.jsx)(n.hKd, { size: 4 }),
                    (0, r.jsx)(n.Text, { variant: "text-sm/normal", color: "text-muted", children: s }),
                ],
            }),
        ],
    });
}
function m(t) {
    let { guildId: e, demonetized: s, transitionState: o, onClose: d } = t,
        [m, { loading: h, error: u }] = (0, l.A)(s ? a.Y7 : a.KW),
        p = async () => {
            try {
                let t = await m(e);
                null != t && d?.();
            } catch (t) {}
        };
    return (0, r.jsx)(i.Modal, {
        size: "md",
        transitionState: o,
        actions: [
            { variant: "secondary", onClick: d, text: c.intl.string(c.t.Jj8nUC) },
            { variant: "primary", loading: h, onClick: p, text: c.intl.string(c.t["pC/ozD"]) },
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
                (0, r.jsx)(x, { header: c.intl.string(c.t.UzDaWD), body: c.intl.string(c.t.IDk8Fz) }),
                (0, r.jsx)(x, { header: c.intl.string(c.t["36/RiT"]), body: c.intl.string(c.t.CBzNtr) }),
            ],
        }),
    });
}
