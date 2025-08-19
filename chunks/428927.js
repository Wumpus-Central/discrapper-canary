n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var o = n(481060),
    i = n(37234),
    l = n(769654),
    a = n(785717),
    c = n(806729),
    s = n(821179),
    d = n(388032),
    u = n(878449);
function f(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: f } = (0, a.KZ)(),
        { mutualGuilds: p, isFetching: m } = (0, c.Z)(t);
    return (0, r.jsx)(o.zJl, {
        className: u.listScroller,
        fade: !0,
        children:
            null == p && m
                ? (0, r.jsx)("div", {
                      className: u.empty,
                      children: (0, r.jsx)(o.$jN, {}),
                  })
                : (null != p || m) && (null == p ? void 0 : p.length) !== 0
                  ? null == p
                      ? void 0
                      : p.map((e) => {
                            let { guild: o, nick: a } = e;
                            return (0, r.jsx)(
                                s.Z,
                                {
                                    user: t,
                                    guild: o,
                                    nick: a,
                                    onSelect: () => {
                                        var e;
                                        f({ action: "PRESS_MUTUAL_GUILD" }), (e = o.id), (0, l.X)(e), n(), (0, i.xf)();
                                    },
                                },
                                o.id,
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
