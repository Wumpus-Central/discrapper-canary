n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(37234),
    l = n(566898),
    a = n(769654),
    o = n(785717),
    c = n(806729),
    s = n(821179),
    u = n(264481),
    d = n(661462),
    f = n(443680);
function g(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: g } = (0, o.KZ)(),
        { mutualGuilds: b, isFetching: p } = (0, c.Z)(t);
    return (0, r.jsx)(d.F, {
        className: f.scroller,
        fade: !0,
        children:
            null == b && p
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
                : (null != b || p) && (null == b ? void 0 : b.length) !== 0
                  ? null == b
                      ? void 0
                      : b.map((e) => {
                            let { guild: l, nick: o } = e;
                            return (0, r.jsx)(
                                s.Z,
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
