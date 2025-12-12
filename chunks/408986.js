n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(37234),
    l = n(566898),
    a = n(769654),
    o = n(785717),
    s = n(806729),
    c = n(821179),
    u = n(264481),
    d = n(661462),
    f = n(443680);
function g(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: g } = (0, o.KZ)(),
        { mutualGuilds: p, isFetching: m } = (0, s.Z)(t);
    return (0, r.jsx)(d.F, {
        className: f.scroller,
        fade: !0,
        children:
            null == p && m
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, r.jsxs)(
                          "div",
                          {
                              className: f.guildsLoadingItem,
                              children: [
                                  (0, r.jsx)(l.ZT, {
                                      width: 40,
                                      opacity: 0.08,
                                  }),
                                  (0, r.jsx)(l.ZT, {
                                      width: 135,
                                      opacity: 0.08,
                                  }),
                              ],
                          },
                          t,
                      ),
                  )
                : (null != p || m) && (null == p ? void 0 : p.length) !== 0
                  ? null == p
                      ? void 0
                      : p.map((e) => {
                            let { guild: l, nick: o } = e;
                            return (0, r.jsx)(
                                c.Z,
                                {
                                    user: t,
                                    guild: l,
                                    nick: o,
                                    onSelect: () => {
                                        g({ action: "PRESS_MUTUAL_GUILD" }), (0, a.X)(l.id), n(), (0, i.xf)();
                                    },
                                },
                                l.id,
                            );
                        })
                  : (0, r.jsx)(u.b0, {}),
    });
}
