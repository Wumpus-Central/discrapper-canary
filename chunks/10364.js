n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var l = n(284009),
    a = n.n(l),
    r = n(109026),
    s = n(455207),
    o = n(990078),
    c = n(534514),
    d = n(834730),
    u = n(235986),
    _ = n(985018),
    m = n(882020);
let h = () =>
    (0, i.jsxs)(u.A, {
        align: u.A.Align.CENTER,
        justify: u.A.Justify.CENTER,
        direction: u.A.Direction.VERTICAL,
        className: m.SW,
        children: [
            (0, i.jsx)("img", { alt: "", src: (0, s.NB)(), className: m.my }),
            (0, i.jsxs)(u.A, {
                align: u.A.Align.CENTER,
                justify: u.A.Justify.CENTER,
                className: m.Bm,
                children: [
                    (0, i.jsx)(o.m, {
                        text: _.intl.string(_.t.oMx98L),
                        children: (0, i.jsx)("div", { className: m.io }),
                    }),
                    (0, i.jsx)(c.D, {
                        className: m.wx,
                        variant: "heading-md/semibold",
                        children: _.intl.string(_.t.xfAlNx),
                    }),
                ],
            }),
            (0, i.jsx)(d.E, {
                className: m.h_,
                color: "text-default",
                variant: "text-sm/normal",
                children: _.intl.string(_.t.BUZ0sl),
            }),
            (0, i.jsx)(d.E, {
                className: m.h_,
                color: "text-default",
                variant: "text-sm/normal",
                children: _.intl.string(_.t.w5beJH),
            }),
        ],
    });
var p = n(589022),
    g = n(734057),
    f = n(287809),
    x = n(943667);
function A(e, t) {
    if ((0, s.MZ)(t)) return (0, i.jsx)(h, {});
    if ((0, x.A)(t)) {
        let n = (t?.author?.username ?? "").split(" ").slice(0, -1).join(" "),
            { guild_id: l } = t.messageReference;
        if (null != l) return (0, i.jsx)(r.default, { setPopoutRef: e.setPopoutRef, guildId: l, name: n });
    }
    if (null != t.interaction && "SENDING" === t.state) return (0, i.jsx)(i.Fragment, {});
    let n = null != t.webhookId ? t.author : (f.default.getUser(t.author.id) ?? t.author);
    a()(null != n, "renderUserGuildPopout: user should never be null");
    let l = f.default.getCurrentUser();
    a()(null != l, "renderUserGuildPopout: currentUser should never be null");
    let o = g.A.getChannel(t.channel_id);
    return (
        a()(null != o, "renderUserGuildPopout: channel should never be null"),
        (0, i.jsx)(p.A, {
            ...e,
            user: n,
            currentUser: l,
            guildId: o.guild_id,
            channelId: t.channel_id,
            messageId: t.id,
        })
    );
}
