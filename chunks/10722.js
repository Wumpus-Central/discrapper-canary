t.d(i, { default: () => h });
var n = t(54381),
    a = t(775086),
    o = t(481060),
    l = t(835473),
    c = t(933557),
    r = t(471445),
    s = t(454585),
    d = t(63063),
    p = t(981631),
    b = t(388032),
    u = t(642969),
    k = t(602009);
function h(e) {
    var i, t;
    let { channel: h, guild: L, onClose: N, transitionState: m } = e,
        x = null != (t = (0, r.KS)(h, L)) ? t : void 0,
        y = (0, c.ZP)(h, !1),
        v = (0, l.q)(null == (i = h.linkedLobby) ? void 0 : i.application_id);
    return (0, n.jsxs)(a.u, {
        title: b.intl.string(b.t.X8jMDh),
        subtitle:
            null != y
                ? {
                      text: y,
                      leadingIcon: x,
                  }
                : void 0,
        actions: void 0,
        transitionState: m,
        onClose: N,
        children: [
            (0, n.jsx)(o.Text, {
                selectable: !0,
                variant: "text-md/normal",
                className: k.markup,
                children: s.Z.parseTopic(h.topic, !0, { channelId: h.id }),
            }),
            null != v
                ? (0, n.jsxs)("div", {
                      className: u.linkedLobbyNotice,
                      children: [
                          (0, n.jsx)(o.DuK, { className: u.linkedLobbyApplicationIcon }),
                          (0, n.jsx)(o.Text, {
                              variant: "text-sm/normal",
                              color: "header-secondary",
                              children: b.intl.format(b.t.Ud5ryv, {
                                  applicationName: v.name,
                                  helpdeskArticle: d.Z.getArticleURL(p.BhN.LINKED_LOBBIES),
                                  separatorHook: (e, i) =>
                                      (0, n.jsx)(
                                          "span",
                                          {
                                              className: u.linkedLobbyNoticeSeparator,
                                              children: e,
                                          },
                                          i,
                                      ),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
