t.d(n, { Z: () => p });
var o = t(200651);
t(192379);
var r = t(481060),
    c = t(37234),
    i = t(566898),
    a = t(769654),
    l = t(785717),
    s = t(806729),
    d = t(821179),
    u = t(388032),
    f = t(274151);
function p(e) {
    let { user: n, onClose: t } = e,
        { trackUserProfileAction: p } = (0, l.KZ)(),
        { mutualGuilds: m, isFetching: b } = (0, s.Z)(n);
    return (0, o.jsx)(r.Ttm, {
        className: f.scroller,
        fade: !0,
        children:
            null == m && b
                ? Array.from({ length: 10 }).map((e, n) =>
                      (0, o.jsxs)(
                          'div',
                          {
                              className: f.loadingItem,
                              children: [
                                  (0, o.jsx)(i.ZT, {
                                      width: 40,
                                      opacity: 0.08
                                  }),
                                  (0, o.jsx)(i.ZT, {
                                      width: 135,
                                      opacity: 0.08
                                  })
                              ]
                          },
                          n
                      )
                  )
                : (null != m || b) && (null == m ? void 0 : m.length) !== 0
                  ? null == m
                      ? void 0
                      : m.map((e) => {
                            let { guild: r, nick: i } = e;
                            return (0, o.jsx)(
                                d.Z,
                                {
                                    user: n,
                                    guild: r,
                                    nick: i,
                                    onSelect: () => {
                                        p({ action: 'PRESS_MUTUAL_GUILD' }), (0, a.X)(r.id), t(), (0, c.xf)();
                                    }
                                },
                                r.id
                            );
                        })
                  : (0, o.jsxs)('div', {
                        className: f.empty,
                        children: [
                            (0, o.jsx)('div', { className: f.emptyImage }),
                            (0, o.jsx)(r.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-primary',
                                children: u.intl.string(u.t.x5y3DA)
                            })
                        ]
                    })
    });
}
