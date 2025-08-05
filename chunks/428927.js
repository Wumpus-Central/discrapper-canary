t.d(n, { Z: () => f });
var l = t(255367);
t(73800);
var r = t(481060),
    i = t(37234),
    o = t(769654),
    s = t(785717),
    d = t(806729),
    a = t(821179),
    c = t(388032),
    u = t(301150);
function f(e) {
    let { user: n, onClose: t } = e,
        { trackUserProfileAction: f } = (0, s.KZ)(),
        { mutualGuilds: p, isFetching: h } = (0, d.Z)(n),
        g = (e) => {
            ((0, o.X)(e), t(), (0, i.xf)());
        };
    return (0, l.jsx)(r.zJl, {
        className: u.listScroller,
        fade: !0,
        children:
            null == p && h
                ? (0, l.jsx)('div', {
                      className: u.empty,
                      children: (0, l.jsx)(r.$jN, {})
                  })
                : (null != p || h) && (null == p ? void 0 : p.length) !== 0
                  ? null == p
                      ? void 0
                      : p.map((e) => {
                            let { guild: t, nick: r } = e;
                            return (0, l.jsx)(
                                a.Z,
                                {
                                    user: n,
                                    guild: t,
                                    nick: r,
                                    onSelect: () => {
                                        (f({ action: 'PRESS_MUTUAL_GUILD' }), g(t.id));
                                    }
                                },
                                t.id
                            );
                        })
                  : (0, l.jsxs)('div', {
                        className: u.empty,
                        children: [
                            (0, l.jsx)('div', { className: u.emptyIconGuilds }),
                            (0, l.jsx)('div', {
                                className: u.emptyText,
                                children: c.intl.string(c.t.zjVh8v)
                            })
                        ]
                    })
    });
}
