a.d(e, { default: () => u });
var i = a(627968),
    l = a(189213),
    n = a(397927),
    s = a(429913),
    o = a(47167),
    c = a(713654),
    d = a(46054),
    r = a(975571),
    p = a(652215),
    h = a(985018),
    x = a(41567),
    b = a(782691);
function u(t) {
    let { channel: e, guild: a, onClose: u, transitionState: m } = t,
        N = (0, c.gU)(e, a) ?? void 0,
        k = (0, o.Ay)(e, !1),
        v = (0, s.h)(e.linkedLobby?.application_id);
    return (0, i.jsxs)(l.Modal, {
        title: h.intl.string(h.t.X8jMDh),
        subtitle: null != k ? { text: k, leadingIcon: N } : void 0,
        actions: void 0,
        transitionState: m,
        onClose: u,
        children: [
            (0, i.jsx)(n.Text, {
                selectable: !0,
                variant: "text-md/normal",
                className: b.PT,
                children: d.A.parseTopic(e.topic, !0, { channelId: e.id }),
            }),
            null != v
                ? (0, i.jsxs)("div", {
                      className: x.a6,
                      children: [
                          (0, i.jsx)(n.fNY, { className: x.NB }),
                          (0, i.jsx)(n.Text, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: h.intl.format(h.t.Ud5ryv, {
                                  applicationName: v.name,
                                  helpdeskArticle: r.A.getArticleURL(p.MVz.LINKED_LOBBIES),
                                  separatorHook: (t, e) => (0, i.jsx)("span", { className: x.fY, children: t }, e),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
