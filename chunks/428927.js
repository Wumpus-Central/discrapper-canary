t.d(n, { Z: () => f });
var l = t(200651);
t(192379);
var r = t(481060),
    i = t(37234),
    s = t(769654),
    o = t(785717),
    a = t(806729),
    c = t(821179),
    d = t(388032),
    u = t(301150);
function f(e) {
    let { user: n, onClose: t } = e,
        { trackUserProfileAction: f } = (0, o.KZ)(),
        { mutualGuilds: p, isFetching: h } = (0, a.Z)(n),
        v = (e) => {
            (0, s.X)(e), t(), (0, i.xf)();
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
                                c.Z,
                                {
                                    user: n,
                                    guild: t,
                                    nick: r,
                                    onSelect: () => {
                                        f({ action: 'PRESS_MUTUAL_GUILD' }), v(t.id);
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
                                children: d.intl.string(d.t.zjVh8v)
                            })
                        ]
                    })
    });
}
