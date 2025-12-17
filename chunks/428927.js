t.d(n, { Z: () => f });
var l = t(54381);
t(473749);
var i = t(481060),
    o = t(37234),
    r = t(769654),
    a = t(785717),
    c = t(806729),
    s = t(821179),
    d = t(388032),
    u = t(940640);
function f(e) {
    let { user: n, onClose: t } = e,
        { trackUserProfileAction: f } = (0, a.KZ)(),
        { mutualGuilds: m, isFetching: p } = (0, c.Z)(n);
    return (0, l.jsx)(i.zJl, {
        className: u.listScroller,
        fade: !0,
        children:
            null == m && p
                ? (0, l.jsx)("div", {
                      className: u.empty,
                      children: (0, l.jsx)(i.$jN, {}),
                  })
                : (null != m || p) && (null == m ? void 0 : m.length) !== 0
                  ? null == m
                      ? void 0
                      : m.map((e) => {
                            let { guild: i, nick: a } = e;
                            return (0, l.jsx)(
                                s.Z,
                                {
                                    user: n,
                                    guild: i,
                                    nick: a,
                                    onSelect: () => {
                                        var e;
                                        f({ action: "PRESS_MUTUAL_GUILD" }), (e = i.id), (0, r.X)(e), t(), (0, o.xf)();
                                    },
                                },
                                i.id,
                            );
                        })
                  : (0, l.jsxs)("div", {
                        className: u.empty,
                        children: [
                            (0, l.jsx)("div", { className: u.emptyIconGuilds }),
                            (0, l.jsx)("div", {
                                className: u.emptyText,
                                children: d.intl.string(d.t.zjVh8h),
                            }),
                        ],
                    }),
    });
}
