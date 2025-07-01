t.d(n, { Z: () => f });
var l = t(255367);
t(73800);
var r = t(481060),
    i = t(37234),
    o = t(769654),
    s = t(785717),
    a = t(806729),
    c = t(821179),
    u = t(388032),
    d = t(301150);
function f(e) {
    let { user: n, onClose: t } = e,
        { trackUserProfileAction: f } = (0, s.KZ)(),
        { mutualGuilds: p, isFetching: g } = (0, a.Z)(n),
        v = (e) => {
            ((0, o.X)(e), t(), (0, i.xf)());
        };
    return (0, l.jsx)(r.zJl, {
        className: d.listScroller,
        fade: !0,
        children:
            null == p && g
                ? (0, l.jsx)('div', {
                      className: d.empty,
                      children: (0, l.jsx)(r.$jN, {})
                  })
                : (null != p || g) && (null == p ? void 0 : p.length) !== 0
                  ? null == p
                      ? void 0
                      : p.map((e) => {
                            let { guild: t, nick: r } = e;
                            return (0, l.jsx)(
                                c.Z,
                                {
                                    user: n,
                                    guild: t,
                                    nick: r,
                                    onSelect: () => {
                                        (f({ action: 'PRESS_MUTUAL_GUILD' }), v(t.id));
                                    }
                                },
                                t.id
                            );
                        })
                  : (0, l.jsxs)('div', {
                        className: d.empty,
                        children: [
                            (0, l.jsx)('div', { className: d.emptyIconGuilds }),
                            (0, l.jsx)('div', {
                                className: d.emptyText,
                                children: u.intl.string(u.t.zjVh8v)
                            })
                        ]
                    })
    });
}
