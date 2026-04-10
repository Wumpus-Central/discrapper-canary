"use strict";
n.d(t, { I: () => f });
var i = n(627968),
    r = n(64700),
    s = n(311907),
    l = n(732955),
    a = n(355622),
    c = n(148355),
    o = n(406704),
    u = n(696451),
    d = n(71393),
    _ = n(576705),
    E = n(287809),
    A = n(460350),
    m = n(167681),
    I = n(652215),
    T = n(985018),
    g = n(453302);
let N = (e) => {
        let { channel: t, message: n } = e,
            s = (0, m.dv)(n.id),
            o = r.useCallback(() => {
                (0, A.i)({ type: a.oU.FORM, content: "", channel: t }).then((e) => {
                    let { valid: i } = e;
                    i && (0, m.S9)(t, n, s.id);
                });
            }, [t, n, s]);
        return (0, i.jsx)("div", {
            className: g.T,
            children: (0, i.jsx)(l.$nd, {
                icon: { type: "sticker", asset: s, component: c.A },
                text: T.intl.string(T.t["7Tj6HT"]),
                onClick: o,
                variant: "secondary",
            }),
        });
    },
    f = (e) => {
        let { message: t, channel: n } = e,
            r = n.getGuildId(),
            l = (0, s.bG)([E.default, _.A, d.A, u.Ay], () => {
                let e = E.default.getCurrentUser(),
                    i = (0, o.UJ)(n),
                    s = _.A.can(I.xBc.SEND_MESSAGES, n),
                    l = null != r && null != e && u.Ay.getMember(r, e.id)?.isPending,
                    a = t.author.bot,
                    c = d.A.getGuild(r),
                    A = null != c && (c.systemChannelFlags & I.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
                return s && !i && !l && !a && A;
            });
        return null != r && l ? (0, i.jsx)(N, { message: t, channel: n }) : null;
    };
