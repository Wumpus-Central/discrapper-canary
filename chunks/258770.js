e.d(s, { default: () => h });
var r = e(627968);
e(64700);
var i = e(189213),
    n = e(834730),
    l = e(696986),
    a = e(331322),
    c = e(608461),
    o = e(493540),
    d = e(985018),
    m = e(297859);
function x(t) {
    let { header: s, body: e } = t;
    return (0, r.jsxs)("div", {
        className: m.yf,
        children: [
            (0, r.jsx)("img", { alt: "", className: m.mT, src: "/assets/6c311db40838eb17.svg" }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(n.E, { variant: "text-sm/semibold", color: "text-default", children: s }),
                    (0, r.jsx)(l.h, { size: 4 }),
                    (0, r.jsx)(n.E, { variant: "text-sm/normal", color: "text-muted", children: e }),
                ],
            }),
        ],
    });
}
function h(t) {
    let { guildId: s, demonetized: e, transitionState: l, onClose: m } = t,
        [h, { loading: u, error: p }] = (0, c.A)(e ? o.Y7 : o.KW),
        j = async () => {
            try {
                let t = await h(s);
                null != t && m?.();
            } catch (t) {}
        };
    return (0, r.jsx)(i.Modal, {
        size: "md",
        transitionState: l,
        actions: [
            { variant: "secondary", onClick: m, text: d.intl.string(d.t.Jj8nUC) },
            { variant: "primary", loading: u, onClick: j, text: d.intl.string(d.t["pC/ozD"]) },
        ],
        title: d.intl.string(d.t.TP4GSt),
        onClose: m,
        preview: (0, r.jsxs)(r.Fragment, {
            children: [
                null == p
                    ? null
                    : (0, r.jsxs)(n.E, {
                          variant: "text-xs/normal",
                          color: "text-feedback-critical",
                          children: ["Error: ", p.message],
                      }),
                (0, r.jsx)(n.E, {
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
        children: (0, r.jsxs)(a.B, {
            gap: 16,
            children: [
                (0, r.jsx)(x, { header: d.intl.string(d.t.UzDaWD), body: d.intl.string(d.t.IDk8Fz) }),
                (0, r.jsx)(x, { header: d.intl.string(d.t["36/RiT"]), body: d.intl.string(d.t.CBzNtr) }),
            ],
        }),
    });
}
