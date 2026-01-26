n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(681154),
    l = n(311907),
    a = n(397927),
    s = n(429913),
    o = n(287809),
    c = n(985018),
    u = n(707934);

function d(e) {
    let { item: t } = e,
        n = "contentInventory" === t.data.kind ? t.data.content : null,
        d = null == n ? void 0 : n.extra,
        p = null == n ? void 0 : n.author_id,
        h = null == n ? void 0 : n.content_type,
        g =
            (null == d ? void 0 : d.type) === "played_game_extra" ||
            (null == d ? void 0 : d.type) === "launched_activity_extra"
                ? d.application_id
                : void 0,
        f = (0, s.h)(g),
        m = (0, l.bG)([o.default], () => (null != p ? o.default.getUser(p) : null), [p]),
        A = h === i.ContentInventoryEntryType.TOP_GAME,
        _ = null == f ? void 0 : f.getIconURL(240);
    return (null == d ? void 0 : d.type) !== "played_game_extra" ||
        "contentInventory" !== t.data.kind ||
        null == f ||
        null == m ||
        null == _
        ? null
        : (0, r.jsx)("div", {
              className: u.kL,
              children: (0, r.jsxs)("div", {
                  className: u.Nr,
                  children: [
                      (0, r.jsx)("img", {
                          src: _,
                          alt: f.name,
                          className: u.Gt,
                      }),
                      (0, r.jsxs)("div", {
                          className: u.Vx,
                          children: [
                              (0, r.jsx)(a.Text, {
                                  variant: "text-md/semibold",
                                  color: "text-strong",
                                  children: f.name,
                              }),
                              A &&
                                  (0, r.jsx)("div", {
                                      className: u.qS,
                                      children: (0, r.jsx)(a.Text, {
                                          variant: "text-xs/semibold",
                                          color: "text-brand",
                                          children: c.intl.string(c.t["/50eHi"]),
                                      }),
                                  }),
                          ],
                      }),
                  ],
              }),
          });
}
