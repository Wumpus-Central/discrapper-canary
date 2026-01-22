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
        f = null == n ? void 0 : n.content_type,
        h =
            (null == d ? void 0 : d.type) === "played_game_extra" ||
            (null == d ? void 0 : d.type) === "launched_activity_extra"
                ? d.application_id
                : void 0,
        A = (0, s.h)(h),
        g = (0, l.bG)([o.default], () => (null != p ? o.default.getUser(p) : null), [p]),
        m = f === i.I.TOP_GAME,
        b = null == A ? void 0 : A.getIconURL(240);
    return (null == d ? void 0 : d.type) !== "played_game_extra" ||
        "contentInventory" !== t.data.kind ||
        null == A ||
        null == g ||
        null == b
        ? null
        : (0, r.jsx)("div", {
              className: u.kL,
              children: (0, r.jsxs)("div", {
                  className: u.Nr,
                  children: [
                      (0, r.jsx)("img", {
                          src: b,
                          alt: A.name,
                          className: u.Gt,
                      }),
                      (0, r.jsxs)("div", {
                          className: u.Vx,
                          children: [
                              (0, r.jsx)(a.Text, {
                                  variant: "text-md/semibold",
                                  color: "text-strong",
                                  children: A.name,
                              }),
                              m &&
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
