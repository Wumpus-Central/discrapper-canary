t.d(e, { default: () => h });
var a = t(54381),
    n = t(775086),
    l = t(481060),
    o = t(835473),
    c = t(933557),
    d = t(471445),
    s = t(454585),
    r = t(63063),
    p = t(981631),
    b = t(388032),
    u = t(587650),
    k = t(960324);
function h(i) {
    var e, t;
    let { channel: h, guild: x, onClose: L, transitionState: N } = i,
        m = null != (t = (0, d.KS)(h, x)) ? t : void 0,
        y = (0, c.ZP)(h, !1),
        v = (0, o.q)(null == (e = h.linkedLobby) ? void 0 : e.application_id);
    return (0, a.jsxs)(n.Modal, {
        title: b.intl.string(b.t.X8jMDh),
        subtitle:
            null != y
                ? {
                      text: y,
                      leadingIcon: m,
                  }
                : void 0,
        actions: void 0,
        transitionState: N,
        onClose: L,
        children: [
            (0, a.jsx)(l.Text, {
                selectable: !0,
                variant: "text-md/normal",
                className: k.markup,
                children: s.Z.parseTopic(h.topic, !0, { channelId: h.id }),
            }),
            null != v
                ? (0, a.jsxs)("div", {
                      className: u.linkedLobbyNotice,
                      children: [
                          (0, a.jsx)(l.DuK, { className: u.linkedLobbyApplicationIcon }),
                          (0, a.jsx)(l.Text, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: b.intl.format(b.t.Ud5ryv, {
                                  applicationName: v.name,
                                  helpdeskArticle: r.Z.getArticleURL(p.BhN.LINKED_LOBBIES),
                                  separatorHook: (i, e) =>
                                      (0, a.jsx)(
                                          "span",
                                          {
                                              className: u.linkedLobbyNoticeSeparator,
                                              children: i,
                                          },
                                          e,
                                      ),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
