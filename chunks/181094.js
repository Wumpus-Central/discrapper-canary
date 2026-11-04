var i = t(477900),
    l = t(189213),
    s = t(834730),
    n = t(663417),
    c = t(429913),
    o = t(47167),
    d = t(713654),
    r = t(46054),
    p = t(975571),
    h = t(652215),
    u = t(792996),
    m = t(742514),
    b = t(165648);
t.d(
    e,
    {},
    {
        default: function (a) {
            let { channel: e, guild: t, onClose: v, transitionState: x } = a,
                j = (0, d.gU)(e, t) ?? void 0,
                k = (0, o.Ay)(e, !1),
                N = (0, c.h)(e.linkedLobby?.application_id);
            return (0, i.jsxs)(l.a, {
                title: u.intl.string(u.t.X8jMDh),
                subtitle: null != k ? { text: k, leadingIcon: j } : void 0,
                actions: void 0,
                transitionState: x,
                onClose: v,
                children: [
                    (0, i.jsx)(s.E, {
                        selectable: !0,
                        variant: "body-md/normal",
                        className: b.PT,
                        children: r.A.parseTopic(e.topic, !0, { channelId: e.id }),
                    }),
                    null != N
                        ? (0, i.jsxs)("div", {
                              className: m.a6,
                              children: [
                                  (0, i.jsx)(n.RefreshIcon, { className: m.NB }),
                                  (0, i.jsx)(s.E, {
                                      variant: "body-sm/normal",
                                      color: "text-default",
                                      children: u.intl.format(u.t.Ud5ryv, {
                                          applicationName: N.name,
                                          helpdeskArticle: p.A.getArticleURL(h.MVz.LINKED_LOBBIES),
                                          separatorHook: (a, e) =>
                                              (0, i.jsx)("span", { className: m.fY, children: a }, e),
                                      }),
                                  }),
                              ],
                          })
                        : null,
                ],
            });
        },
    },
);
