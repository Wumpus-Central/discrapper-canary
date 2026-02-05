n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(398590),
    a = n(114212),
    r = n(345942),
    s = n(183555),
    o = n(913453),
    d = n(51943),
    c = n(782505),
    u = n(515054),
    g = n(828151);
function m(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: m } = (0, s.NJ)(),
        { mutualGuilds: x, isFetching: f } = (0, o.A)(t);
    return (0, i.jsx)(u.K, {
        className: g.XG,
        fade: !0,
        children:
            null == x && f
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, i.jsxs)(
                          "div",
                          {
                              className: g.Y7,
                              children: [
                                  (0, i.jsx)(a.FQ, { width: 40, opacity: 0.08 }),
                                  (0, i.jsx)(a.FQ, { width: 135, opacity: 0.08 }),
                              ],
                          },
                          t,
                      ),
                  )
                : (null != x || f) && x?.length !== 0
                  ? x?.map((e) => {
                        let { guild: a, nick: s } = e;
                        return (0, i.jsx)(
                            d.A,
                            {
                                user: t,
                                guild: a,
                                nick: s,
                                onSelect: () => {
                                    m({ action: "PRESS_MUTUAL_GUILD" }), (0, r.u)(a.id), n(), (0, l.jH)();
                                },
                            },
                            a.id,
                        );
                    })
                  : (0, i.jsx)(c.jB, {}),
    });
}
