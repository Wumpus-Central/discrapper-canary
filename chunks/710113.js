r.d(s, { default: () => x });
var i = r(477900);
r(582128);
var e = r(189213),
    n = r(834730),
    a = r(696986),
    l = r(331322),
    o = r(608461),
    c = r(493540),
    d = r(792996),
    m = r(488984);
function h(t) {
    let { header: s, body: r } = t;
    return (0, i.jsxs)("div", {
        className: m.yf,
        children: [
            (0, i.jsx)("img", { alt: "", className: m.mT, src: "/assets/6c311db40838eb17.svg" }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(n.E, { variant: "body-sm/semibold", color: "text-default", children: s }),
                    (0, i.jsx)(a.h, { size: 4 }),
                    (0, i.jsx)(n.E, { variant: "body-sm/normal", color: "text-muted", children: r }),
                ],
            }),
        ],
    });
}
function x(t) {
    let { guildId: s, demonetized: r, transitionState: a, onClose: m } = t,
        [x, { loading: u, error: p }] = (0, o.A)(r ? c.Y7 : c.KW);
    return (0, i.jsx)(e.a, {
        size: "md",
        transitionState: a,
        actions: [
            { variant: "secondary", onClick: m, text: d.intl.string(d.t.Jj8nUC) },
            {
                variant: "primary",
                loading: u,
                onClick: async function () {
                    try {
                        let t = await x(s);
                        null != t && m?.();
                    } catch (t) {}
                },
                text: d.intl.string(d.t["pC/ozD"]),
            },
        ],
        title: d.intl.string(d.t.TP4GSt),
        onClose: m,
        preview: (0, i.jsxs)(i.Fragment, {
            children: [
                null == p
                    ? null
                    : (0, i.jsxs)(n.E, {
                          variant: "body-xs/normal",
                          color: "text-feedback-critical",
                          children: ["Error: ", p.message],
                      }),
                (0, i.jsx)(n.E, {
                    variant: "body-xs/normal",
                    color: "text-muted",
                    children: d.intl.format(d.t["+oNl6x"], {
                        termsURL: "https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms",
                    }),
                }),
            ],
        }),
        subtitle: d.intl.format(d.t.c0IsON, {
            termsURL: "https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms",
        }),
        children: (0, i.jsxs)(l.B, {
            gap: 16,
            children: [
                (0, i.jsx)(h, { header: d.intl.string(d.t.UzDaWD), body: d.intl.string(d.t.IDk8Fz) }),
                (0, i.jsx)(h, { header: d.intl.string(d.t["36/RiT"]), body: d.intl.string(d.t.CBzNtr) }),
            ],
        }),
    });
}
