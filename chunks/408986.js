n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var o = n(481060),
    i = n(37234),
    c = n(566898),
    l = n(769654),
    a = n(785717),
    s = n(806729),
    d = n(821179),
    u = n(264481),
    f = n(714905);
function m(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: m } = (0, a.KZ)(),
        { mutualGuilds: p, isFetching: b } = (0, s.Z)(t);
    return (0, r.jsx)(o.Ttm, {
        className: f.scroller,
        fade: !0,
        children:
            null == p && b
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, r.jsxs)(
                          'div',
                          {
                              className: f.guildsLoadingItem,
                              children: [
                                  (0, r.jsx)(c.ZT, {
                                      width: 40,
                                      opacity: 0.08
                                  }),
                                  (0, r.jsx)(c.ZT, {
                                      width: 135,
                                      opacity: 0.08
                                  })
                              ]
                          },
                          t
                      )
                  )
                : (null != p || b) && (null == p ? void 0 : p.length) !== 0
                  ? null == p
                      ? void 0
                      : p.map((e) => {
                            let { guild: o, nick: c } = e;
                            return (0, r.jsx)(
                                d.Z,
                                {
                                    user: t,
                                    guild: o,
                                    nick: c,
                                    onSelect: () => {
                                        (m({ action: 'PRESS_MUTUAL_GUILD' }), (0, l.X)(o.id), n(), (0, i.xf)());
                                    }
                                },
                                o.id
                            );
                        })
                  : (0, r.jsx)(u.b0, {})
    });
}
