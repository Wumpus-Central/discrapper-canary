n.d(t, {
    A: () => p,
});
var r = n(627968);
n(64700);
var l = n(398590),
    i = n(114212),
    a = n(345942),
    s = n(183555),
    o = n(913453),
    c = n(51943),
    u = n(782505),
    d = n(515054),
    f = n(828151);

function p(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: p } = (0, s.NJ)(),
        { mutualGuilds: b, isFetching: g } = (0, o.A)(t);
    return (0, r.jsx)(d.K, {
        className: f.XG,
        fade: !0,
        children:
            null == b && g
                ? Array.from({
                      length: 10,
                  }).map((e, t) =>
                      (0, r.jsxs)(
                          "div",
                          {
                              className: f.Y7,
                              children: [
                                  (0, r.jsx)(i.FQ, {
                                      width: 40,
                                      opacity: 0.08,
                                  }),
                                  (0, r.jsx)(i.FQ, {
                                      width: 135,
                                      opacity: 0.08,
                                  }),
                              ],
                          },
                          t,
                      ),
                  )
                : (null != b || g) && (null == b ? void 0 : b.length) !== 0
                  ? null == b
                      ? void 0
                      : b.map((e) => {
                            let { guild: i, nick: s } = e;
                            return (0, r.jsx)(
                                c.A,
                                {
                                    user: t,
                                    guild: i,
                                    nick: s,
                                    onSelect: () => {
                                        p({
                                            action: "PRESS_MUTUAL_GUILD",
                                        }),
                                            (0, a.u)(i.id),
                                            n(),
                                            (0, l.jH)();
                                    },
                                },
                                i.id,
                            );
                        })
                  : (0, r.jsx)(u.jB, {}),
    });
}
