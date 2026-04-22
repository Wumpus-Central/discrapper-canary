t.d(a, { A: () => I });
var s = t(627968);
t(64700);
var n = t(317097),
    l = t(827734),
    r = t(534514),
    i = t(834730),
    c = t(770880),
    o = t(146151),
    d = t(808107),
    m = t(597050),
    _ = t(532590),
    x = t(669281),
    h = t(573613),
    u = t(821609),
    p = t(580630),
    j = t(35275),
    f = t(652215),
    g = t(985018),
    N = t(829093);
function E(e) {
    let { listing: a } = e,
        { name: t, image: l, description: c } = a,
        o = (0, p.$g)(a.price_tier, f.Yri.USD);
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsxs)("div", {
                className: N.l8,
                children: [
                    (0, s.jsx)("img", { src: l, alt: "", className: N.my }),
                    (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(r.D, { variant: "heading-md/medium", className: N.KR, children: t }),
                            (0, s.jsx)(i.E, { variant: "text-md/medium", tag: "span", children: o }),
                            (0, s.jsx)(i.E, { variant: "text-xxs/medium", tag: "span", children: "/mo." }),
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: N.FE,
                children: [
                    (0, s.jsx)("div", { style: { backgroundColor: (0, n.Hl)(a.role_color) }, className: N.yY }),
                    (0, s.jsx)("img", { src: l, alt: "", className: N.UT }),
                    (0, s.jsx)(i.E, { variant: "text-xs/medium", children: t }),
                ],
            }),
            (0, s.jsx)(i.E, { variant: "text-xs/normal", className: N.rj, children: c }),
        ],
    });
}
function T(e) {
    let { channel: a } = e,
        t = (function (e) {
            switch (e) {
                case f.rbe.GUILD_TEXT:
                    return c.I;
                case f.rbe.GUILD_VOICE:
                    return o.t;
                case f.rbe.GUILD_STAGE_VOICE:
                    return d.D;
                case f.rbe.GUILD_FORUM:
                    return m.Q;
                case f.rbe.GUILD_MEDIA:
                    return _.c;
                case f.rbe.GUILD_ANNOUNCEMENT:
                    return x.X;
                default:
                    return null;
            }
        })(a.type);
    return (0, s.jsxs)("div", {
        className: N.$r,
        children: [
            null != t && (0, s.jsx)(t, { className: N.WH, color: "currentColor" }),
            (0, s.jsxs)("div", {
                className: N.WA,
                children: [
                    (0, s.jsx)(i.E, { variant: "text-sm/normal", children: a.name }),
                    (0, s.jsx)(i.E, { variant: "text-xs/normal", className: N.zC, children: a.tagline }),
                ],
            }),
            (0, s.jsx)(j.A, {
                className: N.__invalid_emojiIcon,
                color: l.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css,
            }),
        ],
    });
}
function v(e) {
    let { benefit: a } = e;
    return void 0 === a
        ? null
        : (0, s.jsxs)("div", {
              className: N.Rr,
              children: [
                  (0, s.jsx)("div", { className: N.KI }),
                  (0, s.jsx)(i.E, { variant: "text-sm/normal", children: a }),
              ],
          });
}
function C(e) {
    let { listing: a } = e;
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsx)(r.D, { variant: "heading-sm/semibold", className: N.Ts, children: g.intl.string(g.t.CjC5XZ) }),
            (0, s.jsx)(i.E, { variant: "text-xs/semibold", className: N.hM, children: g.intl.string(g.t.rI43Wx) }),
            a.channels.map((e) => (0, s.jsx)(T, { channel: e }, e.id)),
            (0, s.jsx)(i.E, { variant: "text-xs/semibold", className: N.hM, children: g.intl.string(g.t.XqWRLj) }),
            a.additional_perks.map((e, a) => (0, s.jsx)(v, { benefit: e.name }, a)),
        ],
    });
}
function I(e) {
    let { selectedTemplate: a, handleSelectTemplate: t } = e;
    if (void 0 === a) return null;
    let n = a.listings[0];
    return (0, s.jsxs)("div", {
        className: N.kL,
        children: [
            (0, s.jsxs)(h.Ip, {
                className: N.Qs,
                children: [
                    (0, s.jsx)(E, { listing: n }),
                    (0, s.jsx)("div", { className: N.yF }),
                    (0, s.jsx)(C, { listing: n }),
                ],
            }),
            (0, s.jsx)(u.$, {
                variant: "primary",
                text: g.intl.string(g.t["1W7mCt"]),
                onClick: () => {
                    t(a);
                },
            }),
        ],
    });
}
