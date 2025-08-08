n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var l = n(481060),
    i = n(37234),
    o = n(769654),
    a = n(785717),
    c = n(806729),
    s = n(821179),
    d = n(388032),
    u = n(301150);
function f(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: f } = (0, a.KZ)(),
        { mutualGuilds: p, isFetching: m } = (0, c.Z)(t),
        g = (e) => {
            (0, o.X)(e), n(), (0, i.xf)();
        };
    return (0, r.jsx)(l.zJl, {
        className: u.listScroller,
        fade: !0,
        children:
            null == p && m
                ? (0, r.jsx)("div", {
                      className: u.empty,
                      children: (0, r.jsx)(l.$jN, {}),
                  })
                : (null != p || m) && (null == p ? void 0 : p.length) !== 0
                  ? null == p
                      ? void 0
                      : p.map((e) => {
                            let { guild: n, nick: l } = e;
                            return (0, r.jsx)(
                                s.Z,
                                {
                                    user: t,
                                    guild: n,
                                    nick: l,
                                    onSelect: () => {
                                        f({ action: "PRESS_MUTUAL_GUILD" }), g(n.id);
                                    },
                                },
                                n.id,
                            );
                        })
                  : (0, r.jsxs)("div", {
                        className: u.empty,
                        children: [
                            (0, r.jsx)("div", { className: u.emptyIconGuilds }),
                            (0, r.jsx)("div", {
                                className: u.emptyText,
                                children: d.intl.string(d.t.zjVh8v),
                            }),
                        ],
                    }),
    });
}
