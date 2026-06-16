r.d(s, { default: () => h });
var e = r(627968);
r(64700);
var i = r(189213),
    n = r(834730),
    a = r(696986),
    l = r(331322),
    c = r(608461),
    o = r(493540),
    d = r(375708),
    x = r(297859);
function m(t) {
    let { header: s, body: r } = t;
    return (0, e.jsxs)("div", {
        className: x.yf,
        children: [
            (0, e.jsx)("img", { alt: "", className: x.mT, src: "/assets/6c311db40838eb17.svg" }),
            (0, e.jsxs)("div", {
                children: [
                    (0, e.jsx)(n.E, { variant: "text-sm/semibold", color: "text-default", children: s }),
                    (0, e.jsx)(a.h, { size: 4 }),
                    (0, e.jsx)(n.E, { variant: "text-sm/normal", color: "text-muted", children: r }),
                ],
            }),
        ],
    });
}
function h(t) {
    let { guildId: s, demonetized: r, transitionState: a, onClose: x } = t,
        [h, { loading: u, error: p }] = (0, c.A)(r ? o.Y7 : o.KW),
        j = async () => {
            try {
                let t = await h(s);
                null != t && x?.();
            } catch (t) {}
        };
    return (0, e.jsx)(i.Modal, {
        size: "md",
        transitionState: a,
        actions: [
            { variant: "secondary", onClick: x, text: d.intl.string(d.t.Jj8nUC) },
            { variant: "primary", loading: u, onClick: j, text: d.intl.string(d.t["pC/ozD"]) },
        ],
        title: d.intl.string(d.t.TP4GSt),
        onClose: x,
        preview: (0, e.jsxs)(e.Fragment, {
            children: [
                null == p
                    ? null
                    : (0, e.jsxs)(n.E, {
                          variant: "text-xs/normal",
                          color: "text-feedback-critical",
                          children: ["Error: ", p.message],
                      }),
                (0, e.jsx)(n.E, {
                    variant: "text-xs/normal",
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
        children: (0, e.jsxs)(l.B, {
            gap: 16,
            children: [
                (0, e.jsx)(m, { header: d.intl.string(d.t.UzDaWD), body: d.intl.string(d.t.IDk8Fz) }),
                (0, e.jsx)(m, { header: d.intl.string(d.t["36/RiT"]), body: d.intl.string(d.t.CBzNtr) }),
            ],
        }),
    });
}
