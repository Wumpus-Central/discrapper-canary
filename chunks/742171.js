n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(876215),
    l = n(442837),
    a = n(481060),
    s = n(835473),
    o = n(594174),
    c = n(388032),
    u = n(524086);
function d(e) {
    let { item: t } = e,
        n = "contentInventory" === t.data.kind ? t.data.content : null,
        d = null == n ? void 0 : n.extra,
        p = null == n ? void 0 : n.author_id,
        f = null == n ? void 0 : n.content_type,
        h =
            (null == d ? void 0 : d.type) === "played_game_extra" ||
            (null == d ? void 0 : d.type) === "launched_activity_extra"
                ? d.application_id
                : void 0,
        g = (0, s.q)(h),
        m = (0, l.e7)([o.default], () => (null != p ? o.default.getUser(p) : null), [p]),
        _ = f === i.s.TOP_GAME,
        b = null == g ? void 0 : g.getIconURL(240);
    return (null == d ? void 0 : d.type) !== "played_game_extra" ||
        "contentInventory" !== t.data.kind ||
        null == g ||
        null == m ||
        null == b
        ? null
        : (0, r.jsx)("div", {
              className: u.container,
              children: (0, r.jsxs)("div", {
                  className: u.card,
                  children: [
                      (0, r.jsx)("img", {
                          src: b,
                          alt: g.name,
                          className: u.gameIcon,
                      }),
                      (0, r.jsxs)("div", {
                          className: u.gameInfo,
                          children: [
                              (0, r.jsx)(a.Text, {
                                  variant: "text-md/semibold",
                                  color: "text-primary",
                                  children: g.name,
                              }),
                              _ &&
                                  (0, r.jsx)("div", {
                                      className: u.badge,
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
