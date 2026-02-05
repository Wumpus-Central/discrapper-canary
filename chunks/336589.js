n.d(t, { I: () => E });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(732955),
    s = n(355622),
    o = n(148355),
    d = n(406704),
    c = n(696451),
    u = n(71393),
    m = n(576705),
    _ = n(287809),
    h = n(460350),
    p = n(167681),
    g = n(652215),
    A = n(985018),
    f = n(182777);
let x = (e) => {
        let { channel: t, message: n } = e,
            a = (0, p.dv)(n.id),
            d = l.useCallback(() => {
                (0, h.i)({ type: s.oU.FORM, content: "", channel: t }).then((e) => {
                    let { valid: i } = e;
                    i && (0, p.S9)(t, n, a.id);
                });
            }, [t, n, a]);
        return (0, i.jsx)("div", {
            className: f.T,
            children: (0, i.jsx)(r.$nd, {
                icon: { type: "sticker", asset: a, component: o.A },
                text: A.intl.string(A.t["7Tj6HT"]),
                onClick: d,
                variant: "secondary",
            }),
        });
    },
    E = (e) => {
        let { message: t, channel: n } = e,
            l = n.getGuildId(),
            r = (0, a.bG)([_.default, m.A, u.A, c.Ay], () => {
                let e = _.default.getCurrentUser(),
                    i = (0, d.UJ)(n),
                    a = m.A.can(g.xBc.SEND_MESSAGES, n),
                    r = null != l && null != e && c.Ay.getMember(l, e.id)?.isPending,
                    s = t.author.bot,
                    o = u.A.getGuild(l),
                    h = null != o && (o.systemChannelFlags & g.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
                return a && !i && !r && !s && h;
            });
        return null != l && r ? (0, i.jsx)(x, { message: t, channel: n }) : null;
    };
