a.d(e, { default: () => v });
var i = a(477900),
    l = a(189213),
    s = a(834730),
    n = a(663417),
    c = a(429913),
    o = a(47167),
    r = a(713654),
    d = a(46054),
    p = a(975571),
    h = a(652215),
    u = a(375708),
    m = a(742514),
    x = a(165648);
function v(t) {
    let { channel: e, guild: a, onClose: v, transitionState: j } = t,
        k = (0, r.gU)(e, a) ?? void 0,
        N = (0, o.Ay)(e, !1),
        b = (0, c.h)(e.linkedLobby?.application_id);
    return (0, i.jsxs)(l.Modal, {
        title: u.intl.string(u.t.X8jMDh),
        subtitle: null != N ? { text: N, leadingIcon: k } : void 0,
        actions: void 0,
        transitionState: j,
        onClose: v,
        children: [
            (0, i.jsx)(s.E, {
                selectable: !0,
                variant: "text-md/normal",
                className: x.PT,
                children: d.A.parseTopic(e.topic, !0, { channelId: e.id }),
            }),
            null != b
                ? (0, i.jsxs)("div", {
                      className: m.a6,
                      children: [
                          (0, i.jsx)(n.RefreshIcon, { className: m.NB }),
                          (0, i.jsx)(s.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: u.intl.format(u.t.Ud5ryv, {
                                  applicationName: b.name,
                                  helpdeskArticle: p.A.getArticleURL(h.MVz.LINKED_LOBBIES),
                                  separatorHook: (t, e) => (0, i.jsx)("span", { className: m.fY, children: t }, e),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
