t.d(l, {
    A: () => f,
});
var n = t(627968);
t(64700);
var i = t(397927),
    r = t(398590),
    s = t(345942),
    a = t(183555),
    o = t(913453),
    d = t(51943),
    c = t(985018),
    u = t(781425);

function f(e) {
    let { user: l, onClose: t } = e,
        { trackUserProfileAction: f } = (0, a.NJ)(),
        { mutualGuilds: p, isFetching: m } = (0, o.A)(l);
    return (0, n.jsx)(i.IpV, {
        className: u.DK,
        fade: !0,
        children:
            null == p && m
                ? (0, n.jsx)("div", {
                      className: u.Ie,
                      children: (0, n.jsx)(i.y$y, {}),
                  })
                : (null != p || m) && (null == p ? void 0 : p.length) !== 0
                  ? null == p
                      ? void 0
                      : p.map((e) => {
                            let { guild: i, nick: a } = e;
                            return (0, n.jsx)(
                                d.A,
                                {
                                    user: l,
                                    guild: i,
                                    nick: a,
                                    onSelect: () => {
                                        var e;
                                        f({
                                            action: "PRESS_MUTUAL_GUILD",
                                        }),
                                            (e = i.id),
                                            (0, s.u)(e),
                                            t(),
                                            (0, r.jH)();
                                    },
                                },
                                i.id,
                            );
                        })
                  : (0, n.jsxs)("div", {
                        className: u.Ie,
                        children: [
                            (0, n.jsx)("div", {
                                className: u.vC,
                            }),
                            (0, n.jsx)("div", {
                                className: u.BI,
                                children: c.intl.string(c.t.zjVh8h),
                            }),
                        ],
                    }),
    });
}
