n.d(t, { A: () => E });
var i = n(477900);
n(582128);
var l = n(284009),
    s = n.n(l),
    a = n(109026),
    r = n(455207),
    o = n(866665),
    c = n(297264),
    d = n(834730),
    u = n(235986),
    m = n(375708),
    h = n(475973);
let g = function () {
    return (0, i.jsxs)(u.A, {
        align: u.A.Align.CENTER,
        justify: u.A.Justify.CENTER,
        direction: u.A.Direction.VERTICAL,
        className: h.SW,
        children: [
            (0, i.jsx)("img", { alt: "", src: (0, r.NB)(), className: h.my }),
            (0, i.jsxs)(u.A, {
                align: u.A.Align.CENTER,
                justify: u.A.Justify.CENTER,
                className: h.Bm,
                children: [
                    (0, i.jsx)(o.m, {
                        text: m.intl.string(m.t.oMx98L),
                        children: (0, i.jsx)("div", { className: h.io }),
                    }),
                    (0, i.jsx)(c.D, {
                        className: h.wx,
                        variant: "heading-md/semibold",
                        children: m.intl.string(m.t.xfAlNx),
                    }),
                ],
            }),
            (0, i.jsx)(d.E, {
                className: h.h_,
                color: "text-default",
                variant: "text-sm/normal",
                children: m.intl.string(m.t.BUZ0sl),
            }),
            (0, i.jsx)(d.E, {
                className: h.h_,
                color: "text-default",
                variant: "text-sm/normal",
                children: m.intl.string(m.t.w5beJH),
            }),
        ],
    });
};
var A = n(589022),
    p = n(734057),
    x = n(287809),
    f = n(943667);
function E(e, t) {
    if ((0, r.MZ)(t)) return (0, i.jsx)(g, {});
    if ((0, f.A)(t)) {
        let n = (t?.author?.username ?? "").split(" ").slice(0, -1).join(" "),
            { guild_id: l } = t.messageReference;
        if (null != l) return (0, i.jsx)(a.default, { setPopoutRef: e.setPopoutRef, guildId: l, name: n });
    }
    if (null != t.interaction && "SENDING" === t.state) return (0, i.jsx)(i.Fragment, {});
    let n = null != t.webhookId ? t.author : (x.default.getUser(t.author.id) ?? t.author);
    s()(null != n, "renderUserGuildPopout: user should never be null");
    let l = x.default.getCurrentUser();
    s()(null != l, "renderUserGuildPopout: currentUser should never be null");
    let o = p.A.getChannel(t.channel_id);
    return (
        s()(null != o, "renderUserGuildPopout: channel should never be null"),
        (0, i.jsx)(A.A, {
            ...e,
            user: n,
            currentUser: l,
            guildId: o.guild_id,
            channelId: t.channel_id,
            messageId: t.id,
        })
    );
}
