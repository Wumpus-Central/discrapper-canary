t.d(n, { Z: () => m });
var r = t(951288);
t(647438);
var l = t(481060),
    o = t(37234),
    i = t(566898),
    c = t(769654),
    s = t(785717),
    a = t(806729),
    d = t(821179),
    u = t(264481),
    f = t(443680);
function m(e) {
    let { user: n, onClose: t } = e,
        { trackUserProfileAction: m } = (0, s.KZ)(),
        { mutualGuilds: p, isFetching: h } = (0, a.Z)(n);
    return (0, r.jsx)(l.Ttm, {
        className: f.scroller,
        fade: !0,
        children:
            null == p && h
                ? Array.from({ length: 10 }).map((e, n) =>
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
                          n,
                      ),
                  )
                : (null != p || h) && (null == p ? void 0 : p.length) !== 0
                  ? null == p
                      ? void 0
                      : p.map((e) => {
                            let { guild: l, nick: i } = e;
                            return (0, r.jsx)(
                                d.Z,
                                {
                                    user: n,
                                    guild: l,
                                    nick: i,
                                    onSelect: () => {
                                        m({ action: "PRESS_MUTUAL_GUILD" }), (0, c.X)(l.id), t(), (0, o.xf)();
                                    },
                                },
                                l.id,
                            );
                        })
                  : (0, r.jsx)(u.b0, {}),
    });
}
