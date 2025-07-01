n.d(t, { Z: () => p });
var o = n(255367);
n(73800);
var r = n(481060),
    i = n(37234),
    c = n(566898),
    l = n(769654),
    a = n(785717),
    s = n(806729),
    d = n(821179),
    u = n(264481),
    f = n(714905);
function p(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: p } = (0, a.KZ)(),
        { mutualGuilds: m, isFetching: b } = (0, s.Z)(t);
    return (0, o.jsx)(r.Ttm, {
        className: f.scroller,
        fade: !0,
        children:
            null == m && b
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, o.jsxs)(
                          'div',
                          {
                              className: f.guildsLoadingItem,
                              children: [
                                  (0, o.jsx)(c.ZT, {
                                      width: 40,
                                      opacity: 0.08
                                  }),
                                  (0, o.jsx)(c.ZT, {
                                      width: 135,
                                      opacity: 0.08
                                  })
                              ]
                          },
                          t
                      )
                  )
                : (null != m || b) && (null == m ? void 0 : m.length) !== 0
                  ? null == m
                      ? void 0
                      : m.map((e) => {
                            let { guild: r, nick: c } = e;
                            return (0, o.jsx)(
                                d.Z,
                                {
                                    user: t,
                                    guild: r,
                                    nick: c,
                                    onSelect: () => {
                                        (p({ action: 'PRESS_MUTUAL_GUILD' }), (0, l.X)(r.id), n(), (0, i.xf)());
                                    }
                                },
                                r.id
                            );
                        })
                  : (0, o.jsx)(u.b0, {})
    });
}
