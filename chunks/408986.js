n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(37234),
    o = n(566898),
    a = n(769654),
    c = n(785717),
    s = n(806729),
    d = n(821179),
    u = n(264481),
    f = n(443680);
function p(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: p } = (0, c.KZ)(),
        { mutualGuilds: m, isFetching: g } = (0, s.Z)(t);
    return (0, r.jsx)(i.Ttm, {
        className: f.scroller,
        fade: !0,
        children:
            null == m && g
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, r.jsxs)(
                          "div",
                          {
                              className: f.guildsLoadingItem,
                              children: [
                                  (0, r.jsx)(o.ZT, {
                                      width: 40,
                                      opacity: 0.08,
                                  }),
                                  (0, r.jsx)(o.ZT, {
                                      width: 135,
                                      opacity: 0.08,
                                  }),
                              ],
                          },
                          t,
                      ),
                  )
                : (null != m || g) && (null == m ? void 0 : m.length) !== 0
                  ? null == m
                      ? void 0
                      : m.map((e) => {
                            let { guild: i, nick: o } = e;
                            return (0, r.jsx)(
                                d.Z,
                                {
                                    user: t,
                                    guild: i,
                                    nick: o,
                                    onSelect: () => {
                                        p({ action: "PRESS_MUTUAL_GUILD" }), (0, a.X)(i.id), n(), (0, l.xf)();
                                    },
                                },
                                i.id,
                            );
                        })
                  : (0, r.jsx)(u.b0, {}),
    });
}
