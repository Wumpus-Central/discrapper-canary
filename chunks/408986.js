n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var l = n(481060),
    o = n(37234),
    i = n(566898),
    a = n(769654),
    c = n(785717),
    s = n(806729),
    d = n(821179),
    u = n(264481),
    f = n(714905);
function p(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: p } = (0, c.KZ)(),
        { mutualGuilds: m, isFetching: g } = (0, s.Z)(t);
    return (0, r.jsx)(l.Ttm, {
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
                                  (0, r.jsx)(i.ZT, {
                                      width: 40,
                                      opacity: 0.08,
                                  }),
                                  (0, r.jsx)(i.ZT, {
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
                            let { guild: l, nick: i } = e;
                            return (0, r.jsx)(
                                d.Z,
                                {
                                    user: t,
                                    guild: l,
                                    nick: i,
                                    onSelect: () => {
                                        p({ action: "PRESS_MUTUAL_GUILD" }), (0, a.X)(l.id), n(), (0, o.xf)();
                                    },
                                },
                                l.id,
                            );
                        })
                  : (0, r.jsx)(u.b0, {}),
    });
}
