a.d(t, { A: () => p });
var s = a(627968);
a(64700);
var n = a(317097),
    l = a(827734),
    i = a(397927),
    r = a(580630),
    c = a(35275),
    o = a(652215),
    d = a(985018),
    m = a(663086);
function x(e) {
    let { listing: t } = e,
        { name: a, image: l, description: c } = t,
        d = (0, r.$g)(t.price_tier, o.Yri.USD);
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsxs)("div", {
                className: m.l8,
                children: [
                    (0, s.jsx)("img", { src: l, alt: "", className: m.my }),
                    (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(i.Heading, { variant: "heading-md/medium", className: m.KR, children: a }),
                            (0, s.jsx)(i.Text, { variant: "text-md/medium", tag: "span", children: d }),
                            (0, s.jsx)(i.Text, { variant: "text-xxs/medium", tag: "span", children: "/mo." }),
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: m.FE,
                children: [
                    (0, s.jsx)("div", { style: { backgroundColor: (0, n.Hl)(t.role_color) }, className: m.yY }),
                    (0, s.jsx)("img", { src: l, alt: "", className: m.UT }),
                    (0, s.jsx)(i.Text, { variant: "text-xs/medium", children: a }),
                ],
            }),
            (0, s.jsx)(i.Text, { variant: "text-xs/normal", className: m.rj, children: c }),
        ],
    });
}
function _(e) {
    let { channel: t } = e,
        a = (function (e) {
            switch (e) {
                case o.rbe.GUILD_TEXT:
                    return i.I$d;
                case o.rbe.GUILD_VOICE:
                    return i.trU;
                case o.rbe.GUILD_STAGE_VOICE:
                    return i.DC;
                case o.rbe.GUILD_FORUM:
                    return i.QVg;
                case o.rbe.GUILD_MEDIA:
                    return i.cfi;
                case o.rbe.GUILD_ANNOUNCEMENT:
                    return i.XDC;
                default:
                    return null;
            }
        })(t.type);
    return (0, s.jsxs)("div", {
        className: m.$r,
        children: [
            null != a && (0, s.jsx)(a, { className: m.WH, color: "currentColor" }),
            (0, s.jsxs)("div", {
                className: m.WA,
                children: [
                    (0, s.jsx)(i.Text, { variant: "text-sm/normal", children: t.name }),
                    (0, s.jsx)(i.Text, { variant: "text-xs/normal", className: m.zC, children: t.tagline }),
                ],
            }),
            (0, s.jsx)(c.A, {
                className: m.__invalid_emojiIcon,
                color: l.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css,
            }),
        ],
    });
}
function u(e) {
    let { benefit: t } = e;
    return void 0 === t
        ? null
        : (0, s.jsxs)("div", {
              className: m.Rr,
              children: [
                  (0, s.jsx)("div", { className: m.KI }),
                  (0, s.jsx)(i.Text, { variant: "text-sm/normal", children: t }),
              ],
          });
}
function h(e) {
    let { listing: t } = e;
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsx)(i.Heading, {
                variant: "heading-sm/semibold",
                className: m.Ts,
                children: d.intl.string(d.t.CjC5XZ),
            }),
            (0, s.jsx)(i.Text, { variant: "text-xs/semibold", className: m.hM, children: d.intl.string(d.t.rI43Wx) }),
            t.channels.map((e) => (0, s.jsx)(_, { channel: e }, e.id)),
            (0, s.jsx)(i.Text, { variant: "text-xs/semibold", className: m.hM, children: d.intl.string(d.t.XqWRLj) }),
            t.additional_perks.map((e, t) => (0, s.jsx)(u, { benefit: e.name }, t)),
        ],
    });
}
function p(e) {
    let { selectedTemplate: t, handleSelectTemplate: a } = e;
    if (void 0 === t) return null;
    let n = t.listings[0];
    return (0, s.jsxs)("div", {
        className: m.kL,
        children: [
            (0, s.jsxs)(i.IpV, {
                className: m.Qs,
                children: [
                    (0, s.jsx)(x, { listing: n }),
                    (0, s.jsx)("div", { className: m.yF }),
                    (0, s.jsx)(h, { listing: n }),
                ],
            }),
            (0, s.jsx)(i.Button, {
                variant: "primary",
                text: d.intl.string(d.t["1W7mCt"]),
                onClick: () => {
                    a(t);
                },
            }),
        ],
    });
}
