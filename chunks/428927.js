n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(37234),
    o = n(769654),
    a = n(785717),
    c = n(806729),
    s = n(821179),
    d = n(388032),
    u = n(878449);
function f(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: f } = (0, a.KZ)(),
        { mutualGuilds: p, isFetching: m } = (0, c.Z)(t);
    return (0, r.jsx)(i.zJl, {
        className: u.listScroller,
        fade: !0,
        children:
            null == p && m
                ? (0, r.jsx)("div", {
                      className: u.empty,
                      children: (0, r.jsx)(i.$jN, {}),
                  })
                : (null != p || m) && (null == p ? void 0 : p.length) !== 0
                  ? null == p
                      ? void 0
                      : p.map((e) => {
                            let { guild: i, nick: a } = e;
                            return (0, r.jsx)(
                                s.Z,
                                {
                                    user: t,
                                    guild: i,
                                    nick: a,
                                    onSelect: () => {
                                        var e;
                                        f({ action: "PRESS_MUTUAL_GUILD" }), (e = i.id), (0, o.X)(e), n(), (0, l.xf)();
                                    },
                                },
                                i.id,
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
