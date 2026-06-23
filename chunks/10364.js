n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var l = n(284009),
    s = n.n(l),
    r = n(109026),
    a = n(455207),
    o = n(990078),
    d = n(534514),
    c = n(834730),
    u = n(235986),
    m = n(375708),
    h = n(882020);
let g = function () {
    return (0, i.jsxs)(u.A, {
        align: u.A.Align.CENTER,
        justify: u.A.Justify.CENTER,
        direction: u.A.Direction.VERTICAL,
        className: h.SW,
        children: [
            (0, i.jsx)("img", { alt: "", src: (0, a.NB)(), className: h.my }),
            (0, i.jsxs)(u.A, {
                align: u.A.Align.CENTER,
                justify: u.A.Justify.CENTER,
                className: h.Bm,
                children: [
                    (0, i.jsx)(o.m, {
                        text: m.intl.string(m.t.oMx98L),
                        children: (0, i.jsx)("div", { className: h.io }),
                    }),
                    (0, i.jsx)(d.D, {
                        className: h.wx,
                        variant: "heading-md/semibold",
                        children: m.intl.string(m.t.xfAlNx),
                    }),
                ],
            }),
            (0, i.jsx)(c.E, {
                className: h.h_,
                color: "text-default",
                variant: "text-sm/normal",
                children: m.intl.string(m.t.BUZ0sl),
            }),
            (0, i.jsx)(c.E, {
                className: h.h_,
                color: "text-default",
                variant: "text-sm/normal",
                children: m.intl.string(m.t.w5beJH),
            }),
        ],
    });
};
var p = n(589022),
    A = n(734057),
    x = n(287809),
    f = n(943667);
function E(e, t) {
    if ((0, a.MZ)(t)) return (0, i.jsx)(g, {});
    if ((0, f.A)(t)) {
        let n = (t?.author?.username ?? "").split(" ").slice(0, -1).join(" "),
            { guild_id: l } = t.messageReference;
        if (null != l) return (0, i.jsx)(r.default, { setPopoutRef: e.setPopoutRef, guildId: l, name: n });
    }
    if (null != t.interaction && "SENDING" === t.state) return (0, i.jsx)(i.Fragment, {});
    let n = null != t.webhookId ? t.author : (x.default.getUser(t.author.id) ?? t.author);
    s()(null != n, "renderUserGuildPopout: user should never be null");
    let l = x.default.getCurrentUser();
    s()(null != l, "renderUserGuildPopout: currentUser should never be null");
    let o = A.A.getChannel(t.channel_id);
    return (
        s()(null != o, "renderUserGuildPopout: channel should never be null"),
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
