s.d(t, {
    A: () => h,
}),
    s(228524);
var r = s(627968);
s(64700);
var a = s(317097),
    n = s(827734),
    l = s(397927),
    i = s(580630),
    c = s(35275),
    d = s(652215),
    o = s(985018),
    m = s(558304);

function x(e) {
    let { listing: t } = e,
        { name: s, image: n, description: c } = t,
        o = (0, i.$g)(t.price_tier, d.Yri.USD);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)("div", {
                className: m.l8,
                children: [
                    (0, r.jsx)("img", {
                        src: n,
                        alt: "",
                        className: m.my,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(l.Heading, {
                                variant: "heading-md/medium",
                                className: m.KR,
                                children: s,
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: "text-md/medium",
                                tag: "span",
                                children: o,
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: "text-xxs/medium",
                                tag: "span",
                                children: "/mo.",
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: m.FE,
                children: [
                    (0, r.jsx)("div", {
                        style: {
                            backgroundColor: (0, a.Hl)(t.role_color),
                        },
                        className: m.yY,
                    }),
                    (0, r.jsx)("img", {
                        src: n,
                        alt: "",
                        className: m.UT,
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-xs/medium",
                        children: s,
                    }),
                ],
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-xs/normal",
                className: m.rj,
                children: c,
            }),
        ],
    });
}

function u(e) {
    let { channel: t } = e,
        s = (function (e) {
            switch (e) {
                case d.rbe.GUILD_TEXT:
                    return l.I$d;
                case d.rbe.GUILD_VOICE:
                    return l.trU;
                case d.rbe.GUILD_STAGE_VOICE:
                    return l.DC;
                case d.rbe.GUILD_FORUM:
                    return l.QVg;
                case d.rbe.GUILD_MEDIA:
                    return l.cfi;
                case d.rbe.GUILD_ANNOUNCEMENT:
                    return l.XDC;
                default:
                    return null;
            }
        })(t.type);
    return (0, r.jsxs)("div", {
        className: m.$r,
        children: [
            null != s &&
                (0, r.jsx)(s, {
                    className: m.WH,
                    color: "currentColor",
                }),
            (0, r.jsxs)("div", {
                className: m.WA,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: t.name,
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        className: m.zC,
                        children: t.tagline,
                    }),
                ],
            }),
            (0, r.jsx)(c.A, {
                className: m.__invalid_emojiIcon,
                color: n.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css,
            }),
        ],
    });
}

function j(e) {
    let { benefit: t } = e;
    return void 0 === t
        ? null
        : (0, r.jsxs)("div", {
              className: m.Rr,
              children: [
                  (0, r.jsx)("div", {
                      className: m.KI,
                  }),
                  (0, r.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      children: t,
                  }),
              ],
          });
}

function f(e) {
    let { listing: t } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(l.Heading, {
                variant: "heading-sm/semibold",
                className: m.Ts,
                children: o.intl.string(o.t.CjC5XZ),
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-xs/semibold",
                className: m.hM,
                children: o.intl.string(o.t.rI43Wx),
            }),
            t.channels.map((e) =>
                (0, r.jsx)(
                    u,
                    {
                        channel: e,
                    },
                    e.id,
                ),
            ),
            (0, r.jsx)(l.Text, {
                variant: "text-xs/semibold",
                className: m.hM,
                children: o.intl.string(o.t.XqWRLj),
            }),
            t.additional_perks.map((e, t) =>
                (0, r.jsx)(
                    j,
                    {
                        benefit: e.name,
                    },
                    t,
                ),
            ),
        ],
    });
}

function h(e) {
    let { selectedTemplate: t, handleSelectTemplate: s } = e;
    if (void 0 === t) return null;
    let a = t.listings[0];
    return (0, r.jsxs)("div", {
        className: m.kL,
        children: [
            (0, r.jsxs)(l.IpV, {
                className: m.Qs,
                children: [
                    (0, r.jsx)(x, {
                        listing: a,
                    }),
                    (0, r.jsx)("div", {
                        className: m.yF,
                    }),
                    (0, r.jsx)(f, {
                        listing: a,
                    }),
                ],
            }),
            (0, r.jsx)(l.Button, {
                variant: "primary",
                text: o.intl.string(o.t["1W7mCt"]),
                onClick: () => {
                    s(t);
                },
            }),
        ],
    });
}
