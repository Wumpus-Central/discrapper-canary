n.d(t, {
    I: () => y,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(732955),
    o = n(355622),
    l = n(148355),
    c = n(406704),
    u = n(696451),
    d = n(71393),
    f = n(576705),
    p = n(287809),
    _ = n(460350),
    h = n(167681),
    m = n(652215),
    g = n(985018),
    E = n(182777);
let b = (e) => {
        let { channel: t, message: n } = e,
            a = (0, h.dv)(n.id),
            c = i.useCallback(() => {
                (0, _.i)({
                    type: o.oU.FORM,
                    content: "",
                    channel: t,
                }).then((e) => {
                    let { valid: r } = e;
                    r && (0, h.S9)(t, n, a.id);
                });
            }, [t, n, a]);
        return (0, r.jsx)("div", {
            className: E.T,
            children: (0, r.jsx)(s.$nd, {
                icon: {
                    type: "sticker",
                    asset: a,
                    component: l.A,
                },
                text: g.intl.string(g.t["7Tj6HT"]),
                onClick: c,
                variant: "secondary",
            }),
        });
    },
    y = (e) => {
        let { message: t, channel: n } = e,
            i = n.getGuildId(),
            s = (0, a.bG)([p.default, f.A, d.A, u.Ay], () => {
                var e;
                let r = p.default.getCurrentUser(),
                    a = (0, c.UJ)(n),
                    s = f.A.can(m.xBc.SEND_MESSAGES, n),
                    o = null != i && null != r && (null == (e = u.Ay.getMember(i, r.id)) ? void 0 : e.isPending),
                    l = t.author.bot,
                    _ = d.A.getGuild(i),
                    h = null != _ && (_.systemChannelFlags & m.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
                return s && !a && !o && !l && h;
            });
        return null != i && s
            ? (0, r.jsx)(b, {
                  message: t,
                  channel: n,
              })
            : null;
    };
