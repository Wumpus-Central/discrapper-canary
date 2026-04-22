e.d(t, { default: () => x });
var i = e(627968),
    l = e(189213),
    n = e(834730),
    s = e(663417),
    o = e(429913),
    c = e(47167),
    d = e(713654),
    r = e(46054),
    p = e(975571),
    h = e(652215),
    b = e(985018),
    u = e(896527),
    m = e(992595);
function x(a) {
    let { channel: t, guild: e, onClose: x, transitionState: k } = a,
        N = (0, d.gU)(t, e) ?? void 0,
        v = (0, c.Ay)(t, !1),
        f = (0, o.h)(t.linkedLobby?.application_id);
    return (0, i.jsxs)(l.Modal, {
        title: b.intl.string(b.t.X8jMDh),
        subtitle: null != v ? { text: v, leadingIcon: N } : void 0,
        actions: void 0,
        transitionState: k,
        onClose: x,
        children: [
            (0, i.jsx)(n.E, {
                selectable: !0,
                variant: "text-md/normal",
                className: m.PT,
                children: r.A.parseTopic(t.topic, !0, { channelId: t.id }),
            }),
            null != f
                ? (0, i.jsxs)("div", {
                      className: u.a6,
                      children: [
                          (0, i.jsx)(s.f, { className: u.NB }),
                          (0, i.jsx)(n.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: b.intl.format(b.t.Ud5ryv, {
                                  applicationName: f.name,
                                  helpdeskArticle: p.A.getArticleURL(h.MVz.LINKED_LOBBIES),
                                  separatorHook: (a, t) => (0, i.jsx)("span", { className: u.fY, children: a }, t),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
