t.d(n, { Z: () => f });
var r = t(951288);
t(647438);
var o = t(481060),
    l = t(37234),
    i = t(769654),
    c = t(785717),
    a = t(806729),
    s = t(821179),
    d = t(388032),
    u = t(878449);
function f(e) {
    let { user: n, onClose: t } = e,
        { trackUserProfileAction: f } = (0, c.KZ)(),
        { mutualGuilds: m, isFetching: p } = (0, a.Z)(n);
    return (0, r.jsx)(o.zJl, {
        className: u.listScroller,
        fade: !0,
        children:
            null == m && p
                ? (0, r.jsx)("div", {
                      className: u.empty,
                      children: (0, r.jsx)(o.$jN, {}),
                  })
                : (null != m || p) && (null == m ? void 0 : m.length) !== 0
                  ? null == m
                      ? void 0
                      : m.map((e) => {
                            let { guild: o, nick: c } = e;
                            return (0, r.jsx)(
                                s.Z,
                                {
                                    user: n,
                                    guild: o,
                                    nick: c,
                                    onSelect: () => {
                                        var e;
                                        f({ action: "PRESS_MUTUAL_GUILD" }), (e = o.id), (0, i.X)(e), t(), (0, l.xf)();
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
