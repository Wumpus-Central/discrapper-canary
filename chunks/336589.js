"use strict";
n.d(t, { I: () => p });
var i = n(627968),
    r = n(64700),
    l = n(311907),
    s = n(821609),
    a = n(355622),
    o = n(148355),
    c = n(406704),
    u = n(696451),
    d = n(71393),
    _ = n(576705),
    E = n(287809),
    A = n(460350),
    m = n(167681),
    I = n(652215),
    T = n(985018),
    N = n(914342);
let g = (e) => {
        let { channel: t, message: n } = e,
            l = (0, m.dv)(n.id),
            c = r.useCallback(() => {
                (0, A.i)({ type: a.oU.FORM, content: "", channel: t }).then((e) => {
                    let { valid: i } = e;
                    i && (0, m.S9)(t, n, l.id);
                });
            }, [t, n, l]);
        return (0, i.jsx)("div", {
            className: N.T,
            children: (0, i.jsx)(s.$, {
                icon: { type: "sticker", asset: l, component: o.A },
                text: T.intl.string(T.t["7Tj6HT"]),
                onClick: c,
                variant: "secondary",
            }),
        });
    },
    p = (e) => {
        let { message: t, channel: n } = e,
            r = n.getGuildId(),
            s = (0, l.bG)([E.default, _.A, d.A, u.Ay], () => {
                let e = E.default.getCurrentUser(),
                    i = (0, c.UJ)(n),
                    l = _.A.can(I.xBc.SEND_MESSAGES, n),
                    s = null != r && null != e && u.Ay.getMember(r, e.id)?.isPending,
                    a = t.author.bot,
                    o = d.A.getGuild(r),
                    A = null != o && (o.systemChannelFlags & I.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
                return l && !i && !s && !a && A;
            });
        return null != r && s ? (0, i.jsx)(g, { message: t, channel: n }) : null;
    };
