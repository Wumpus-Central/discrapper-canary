n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(37234),
    l = n(566898),
    a = n(769654),
    o = n(785717),
    s = n(806729),
    c = n(821179),
    u = n(264481),
    d = n(661462),
    p = n(443680);
function f(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: f } = (0, o.KZ)(),
        { mutualGuilds: h, isFetching: g } = (0, s.Z)(t);
    return (0, r.jsx)(d.F, {
        className: p.scroller,
        fade: !0,
        children:
            null == h && g
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, r.jsxs)(
                          "div",
                          {
                              className: p.guildsLoadingItem,
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
                : (null != h || g) && (null == h ? void 0 : h.length) !== 0
                  ? null == h
                      ? void 0
                      : h.map((e) => {
                            let { guild: l, nick: o } = e;
                            return (0, r.jsx)(
                                c.Z,
                                {
                                    user: t,
                                    guild: l,
                                    nick: o,
                                    onSelect: () => {
                                        f({ action: "PRESS_MUTUAL_GUILD" }), (0, a.X)(l.id), n(), (0, i.xf)();
                                    },
                                },
                                l.id,
                            );
                        })
                  : (0, r.jsx)(u.b0, {}),
    });
}
