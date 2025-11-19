t.d(n, { Z: () => m });
var l = t(54381);
t(473749);
var i = t(481060),
    o = t(37234),
    r = t(769654),
    s = t(785717),
    a = t(806729),
    c = t(821179),
    d = t(388032),
    u = t(883172);
function m(e) {
    let { user: n, onClose: t } = e,
        { trackUserProfileAction: m } = (0, s.KZ)(),
        { mutualGuilds: p, isFetching: f } = (0, a.Z)(n);
    return (0, l.jsx)(i.zJl, {
        className: u.listScroller,
        fade: !0,
        children:
            null == p && f
                ? (0, l.jsx)("div", {
                      className: u.empty,
                      children: (0, l.jsx)(i.$jN, {}),
                  })
                : (null != p || f) && (null == p ? void 0 : p.length) !== 0
                  ? null == p
                      ? void 0
                      : p.map((e) => {
                            let { guild: i, nick: s } = e;
                            return (0, l.jsx)(
                                c.Z,
                                {
                                    user: n,
                                    guild: i,
                                    nick: s,
                                    onSelect: () => {
                                        var e;
                                        m({ action: "PRESS_MUTUAL_GUILD" }), (e = i.id), (0, r.X)(e), t(), (0, o.xf)();
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
