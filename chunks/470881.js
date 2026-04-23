n.d(t, { A: () => u });
var a = n(627968);
n(64700);
var i = n(681154),
    s = n(311907),
    l = n(834730),
    r = n(429913),
    d = n(287809),
    o = n(985018),
    c = n(115323);
function u(e) {
    let { item: t } = e,
        n = "contentInventory" === t.data.kind ? t.data.content : null,
        u = n?.extra,
        m = n?.author_id,
        h = n?.content_type,
        g = u?.type === "played_game_extra" || u?.type === "launched_activity_extra" ? u.application_id : void 0,
        p = (0, r.h)(g),
        v = (0, s.bG)([d.default], () => (null != m ? d.default.getUser(m) : null), [m]),
        x = h === i.ContentInventoryEntryType.TOP_GAME,
        A = p?.getIconURL(240);
    return u?.type !== "played_game_extra" || "contentInventory" !== t.data.kind || null == p || null == v || null == A
        ? null
        : (0, a.jsx)("div", {
              className: c.kL,
              children: (0, a.jsxs)("div", {
                  className: c.Nr,
                  children: [
                      (0, a.jsx)("img", { src: A, alt: p.name, className: c.Gt }),
                      (0, a.jsxs)("div", {
                          className: c.Vx,
                          children: [
                              (0, a.jsx)(l.E, { variant: "text-md/semibold", color: "text-strong", children: p.name }),
                              x &&
                                  (0, a.jsx)("div", {
                                      className: c.qS,
                                      children: (0, a.jsx)(l.E, {
                                          variant: "text-xs/semibold",
                                          color: "text-brand",
                                          children: o.intl.string(o.t["/50eHi"]),
                                      }),
                                  }),
                          ],
                      }),
                  ],
              }),
          });
}
