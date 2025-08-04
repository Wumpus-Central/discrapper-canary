n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var o = n(481060),
    i = n(37234),
    l = n(566898),
    a = n(769654),
    c = n(785717),
    s = n(806729),
    u = n(821179),
    d = n(264481),
    f = n(714905);
function p(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: p } = (0, c.KZ)(),
        { mutualGuilds: m, isFetching: b } = (0, s.Z)(t);
    return (0, r.jsx)(o.Ttm, {
        className: f.scroller,
        fade: !0,
        children:
            null == m && b
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, r.jsxs)(
                          'div',
                          {
                              className: f.guildsLoadingItem,
                              children: [
                                  (0, r.jsx)(l.ZT, {
                                      width: 40,
                                      opacity: 0.08
                                  }),
                                  (0, r.jsx)(l.ZT, {
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
                            let { guild: o, nick: l } = e;
                            return (0, r.jsx)(
                                u.Z,
                                {
                                    user: t,
                                    guild: o,
                                    nick: l,
                                    onSelect: () => {
                                        (p({ action: 'PRESS_MUTUAL_GUILD' }), (0, a.X)(o.id), n(), (0, i.xf)());
                                    }
                                },
                                o.id
                            );
                        })
                  : (0, r.jsx)(d.b0, {})
    });
}
