n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(834730),
    o = n(821609),
    c = n(307301),
    d = n(58149),
    u = n(954571),
    h = n(816662),
    m = n(652215),
    p = n(985018),
    g = n(540044);
function A(e) {
    let { channel: t, narrow: n } = e;
    return (
        l.useEffect(() => {
            u.default.track(m.HAw.CHANNEL_BANNER_VIEWED, {
                ...(0, d.H$)(t.getGuildId()),
                ...(0, d.dI)(t),
                banner_type: "channel_opt_in",
            });
        }, [t]),
        (0, i.jsxs)("div", {
            className: a()(g.JD, { [g.sc]: n }),
            children: [
                (0, i.jsx)(r.E, {
                    className: g.E5,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: p.intl.string(p.t.iOWmmB),
                }),
                (0, i.jsx)(o.$, {
                    size: "sm",
                    variant: "primary",
                    onClick: () => {
                        u.default.track(m.HAw.CHANNEL_BANNER_CTA_CLICKED, {
                            ...(0, d.H$)(t.getGuildId()),
                            ...(0, d.dI)(t),
                            banner_type: "channel_opt_in",
                            cta_type: "add channel",
                        }),
                            (0, h.AC)(t.guild_id, t.id, !0, { section: m.JJy.CHANNEL });
                    },
                    text: p.intl.string(p.t.ZtIlQo),
                    icon: c.j,
                }),
            ],
        })
    );
}
