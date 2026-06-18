i.d(t, { A: () => m });
var n = i(627968);
i(64700);
var l = i(398590),
    s = i(114212),
    a = i(345942),
    r = i(183555),
    d = i(913453),
    o = i(51943),
    c = i(782505),
    u = i(515054),
    g = i(851284);
function m(e) {
    let { user: t, onClose: i } = e,
        { trackUserProfileAction: m } = (0, r.NJ)(),
        { mutualGuilds: h, isFetching: x } = (0, d.A)(t);
    return (0, n.jsx)(u.K, {
        className: g.XG,
        fade: !0,
        children:
            null == h && x
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, n.jsxs)(
                          "div",
                          {
                              className: g.Y7,
                              children: [
                                  (0, n.jsx)(s.FQ, { width: 40, opacity: 0.08 }),
                                  (0, n.jsx)(s.FQ, { width: 135, opacity: 0.08 }),
                              ],
                          },
                          t,
                      ),
                  )
                : (null != h || x) && h?.length !== 0
                  ? h?.map((e) => {
                        let { guild: s, nick: r } = e;
                        return (0, n.jsx)(
                            o.A,
                            {
                                user: t,
                                guild: s,
                                nick: r,
                                onSelect: () => {
                                    m({ action: "PRESS_MUTUAL_GUILD" }), (0, a.u)(s.id), i(), (0, l.jH)();
                                },
                            },
                            s.id,
                        );
                    })
                  : (0, n.jsx)(c.jB, {}),
    });
}
