n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(397927),
    o = n(58149),
    c = n(954571),
    d = n(816662),
    u = n(652215),
    h = n(985018),
    m = n(930399);
function A(e) {
    let { channel: t, narrow: n } = e;
    return (
        l.useEffect(() => {
            c.default.track(u.HAw.CHANNEL_BANNER_VIEWED, {
                ...(0, o.H$)(t.getGuildId()),
                ...(0, o.dI)(t),
                banner_type: "channel_opt_in",
            });
        }, [t]),
        (0, i.jsxs)("div", {
            className: s()(m.JD, { [m.sc]: n }),
            children: [
                (0, i.jsx)(r.Text, {
                    className: m.E5,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: h.intl.string(h.t.iOWmmB),
                }),
                (0, i.jsx)(r.Button, {
                    size: "sm",
                    variant: "primary",
                    onClick: () => {
                        c.default.track(u.HAw.CHANNEL_BANNER_CTA_CLICKED, {
                            ...(0, o.H$)(t.getGuildId()),
                            ...(0, o.dI)(t),
                            banner_type: "channel_opt_in",
                            cta_type: "add channel",
                        }),
                            (0, d.AC)(t.guild_id, t.id, !0, { section: u.JJy.CHANNEL });
                    },
                    text: h.intl.string(h.t.ZtIlQo),
                    icon: r.j96,
                }),
            ],
        })
    );
}
