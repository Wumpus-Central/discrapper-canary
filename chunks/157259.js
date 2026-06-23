n.d(t, { A: () => A });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(834730),
    o = n(821609),
    c = n(307301),
    d = n(95561),
    u = n(174459),
    h = n(816662),
    m = n(652215),
    g = n(375708),
    p = n(540044);
function A(e) {
    let { channel: t, narrow: n } = e;
    return (
        i.useEffect(() => {
            u.default.track(m.HAw.CHANNEL_BANNER_VIEWED, {
                ...(0, d.H$)(t.getGuildId()),
                ...(0, d.dI)(t),
                banner_type: "channel_opt_in",
            });
        }, [t]),
        (0, l.jsxs)("div", {
            className: a()(p.JD, { [p.sc]: n }),
            children: [
                (0, l.jsx)(r.E, {
                    className: p.E5,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: g.intl.string(g.t.iOWmmB),
                }),
                (0, l.jsx)(o.$, {
                    size: "sm",
                    variant: "primary",
                    onClick: function () {
                        u.default.track(m.HAw.CHANNEL_BANNER_CTA_CLICKED, {
                            ...(0, d.H$)(t.getGuildId()),
                            ...(0, d.dI)(t),
                            banner_type: "channel_opt_in",
                            cta_type: "add channel",
                        }),
                            (0, h.AC)(t.guild_id, t.id, !0, { section: m.JJy.CHANNEL });
                    },
                    text: g.intl.string(g.t.ZtIlQo),
                    icon: c.j,
                }),
            ],
        })
    );
}
