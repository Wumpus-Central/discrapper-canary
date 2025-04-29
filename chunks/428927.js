n.d(t, { Z: () => f });
var l = n(255367);
n(73800);
var r = n(481060),
    i = n(37234),
    s = n(769654),
    o = n(785717),
    c = n(806729),
    a = n(821179),
    d = n(388032),
    u = n(301150);
function f(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: f } = (0, o.KZ)(),
        { mutualGuilds: p, isFetching: h } = (0, c.Z)(t),
        j = (e) => {
            (0, s.X)(e), n(), (0, i.xf)();
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
                            let { guild: n, nick: r } = e;
                            return (0, l.jsx)(
                                a.Z,
                                {
                                    user: t,
                                    guild: n,
                                    nick: r,
                                    onSelect: () => {
                                        f({ action: 'PRESS_MUTUAL_GUILD' }), j(n.id);
                                    }
                                },
                                n.id
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
