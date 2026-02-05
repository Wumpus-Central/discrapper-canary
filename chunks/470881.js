n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(681154),
    a = n(311907),
    l = n(397927),
    s = n(429913),
    o = n(287809),
    d = n(985018),
    c = n(707934);
function u(e) {
    let { item: t } = e,
        n = "contentInventory" === t.data.kind ? t.data.content : null,
        u = n?.extra,
        A = n?.author_id,
        h = n?.content_type,
        _ = u?.type === "played_game_extra" || u?.type === "launched_activity_extra" ? u.application_id : void 0,
        m = (0, s.h)(_),
        p = (0, a.bG)([o.default], () => (null != A ? o.default.getUser(A) : null), [A]),
        g = h === r.ContentInventoryEntryType.TOP_GAME,
        E = m?.getIconURL(240);
    return u?.type !== "played_game_extra" || "contentInventory" !== t.data.kind || null == m || null == p || null == E
        ? null
        : (0, i.jsx)("div", {
              className: c.kL,
              children: (0, i.jsxs)("div", {
                  className: c.Nr,
                  children: [
                      (0, i.jsx)("img", { src: E, alt: m.name, className: c.Gt }),
                      (0, i.jsxs)("div", {
                          className: c.Vx,
                          children: [
                              (0, i.jsx)(l.Text, {
                                  variant: "text-md/semibold",
                                  color: "text-strong",
                                  children: m.name,
                              }),
                              g &&
                                  (0, i.jsx)("div", {
                                      className: c.qS,
                                      children: (0, i.jsx)(l.Text, {
                                          variant: "text-xs/semibold",
                                          color: "text-brand",
                                          children: d.intl.string(d.t["/50eHi"]),
                                      }),
                                  }),
                          ],
                      }),
                  ],
              }),
          });
}
