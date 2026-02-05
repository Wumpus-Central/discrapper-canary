n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(398590),
    a = n(345942),
    r = n(183555),
    d = n(913453),
    o = n(51943),
    c = n(985018),
    u = n(781425);
function A(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: A } = (0, r.NJ)(),
        { mutualGuilds: x, isFetching: m } = (0, d.A)(t);
    return (0, i.jsx)(s.IpV, {
        className: u.DK,
        fade: !0,
        children:
            null == x && m
                ? (0, i.jsx)("div", { className: u.Ie, children: (0, i.jsx)(s.y$y, {}) })
                : (null != x || m) && x?.length !== 0
                  ? x?.map((e) => {
                        let { guild: s, nick: r } = e;
                        return (0, i.jsx)(
                            o.A,
                            {
                                user: t,
                                guild: s,
                                nick: r,
                                onSelect: () => {
                                    var e;
                                    A({ action: "PRESS_MUTUAL_GUILD" }), (e = s.id), (0, a.u)(e), n(), (0, l.jH)();
                                },
                            },
                            s.id,
                        );
                    })
                  : (0, i.jsxs)("div", {
                        className: u.Ie,
                        children: [
                            (0, i.jsx)("div", { className: u.vC }),
                            (0, i.jsx)("div", { className: u.BI, children: c.intl.string(c.t.zjVh8h) }),
                        ],
                    }),
    });
}
