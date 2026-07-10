i.d(t, { A: () => m });
var n = i(627968);
i(64700);
var l = i(398590),
    s = i(114212),
    r = i(345942),
    a = i(183555),
    o = i(913453),
    d = i(51943),
    c = i(782505),
    u = i(515054),
    g = i(851284);
function m(e) {
    let { user: t, onClose: i } = e,
        { trackUserProfileAction: m } = (0, a.NJ)(),
        { mutualGuilds: h, isFetching: x } = (0, o.A)(t);
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
                        let { guild: s, nick: a } = e;
                        return (0, n.jsx)(
                            d.A,
                            {
                                user: t,
                                guild: s,
                                nick: a,
                                onSelect: () => {
                                    m({ action: "PRESS_MUTUAL_GUILD" }), (0, r.u)(s.id), i(), (0, l.jH)();
                                },
                            },
                            s.id,
                        );
                    })
                  : (0, n.jsx)(c.jB, {}),
    });
}
