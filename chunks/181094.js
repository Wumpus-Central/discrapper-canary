e.d(t, {
    default: () => m,
});
var l = e(627968),
    i = e(189213),
    n = e(397927),
    s = e(429913),
    d = e(47167),
    c = e(713654),
    o = e(46054),
    r = e(975571),
    p = e(652215),
    h = e(985018),
    u = e(620944),
    x = e(206314);

function m(a) {
    var t, e;
    let { channel: m, guild: b, onClose: v, transitionState: f } = a,
        N = null != (t = (0, c.gU)(m, b)) ? t : void 0,
        j = (0, d.Ay)(m, !1),
        k = (0, s.h)(null == (e = m.linkedLobby) ? void 0 : e.application_id);
    return (0, l.jsxs)(i.Modal, {
        title: h.intl.string(h.t.X8jMDh),
        subtitle:
            null != j
                ? {
                      text: j,
                      leadingIcon: N,
                  }
                : void 0,
        actions: void 0,
        transitionState: f,
        onClose: v,
        children: [
            (0, l.jsx)(n.Text, {
                selectable: !0,
                variant: "text-md/normal",
                className: x.PT,
                children: o.A.parseTopic(m.topic, !0, {
                    channelId: m.id,
                }),
            }),
            null != k
                ? (0, l.jsxs)("div", {
                      className: u.a6,
                      children: [
                          (0, l.jsx)(n.fNY, {
                              className: u.NB,
                          }),
                          (0, l.jsx)(n.Text, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: h.intl.format(h.t.Ud5ryv, {
                                  applicationName: k.name,
                                  helpdeskArticle: r.A.getArticleURL(p.MVz.LINKED_LOBBIES),
                                  separatorHook: (a, t) =>
                                      (0, l.jsx)(
                                          "span",
                                          {
                                              className: u.fY,
                                              children: a,
                                          },
                                          t,
                                      ),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
