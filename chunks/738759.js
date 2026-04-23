a.d(t, { A: () => m });
var n = a(627968);
a(64700);
var i = a(289873),
    l = a(573613),
    r = a(398590),
    d = a(345942),
    o = a(183555),
    s = a(913453),
    c = a(51943),
    _ = a(985018),
    u = a(928666);
function m(e) {
    let { user: t, onClose: a } = e,
        { trackUserProfileAction: m } = (0, o.NJ)(),
        { mutualGuilds: p, isFetching: g } = (0, s.A)(t);
    return (0, n.jsx)(l.Ip, {
        className: u.DK,
        fade: !0,
        children:
            null == p && g
                ? (0, n.jsx)("div", { className: u.Ie, children: (0, n.jsx)(i.y, {}) })
                : (null != p || g) && p?.length !== 0
                  ? p?.map((e) => {
                        let { guild: i, nick: l } = e;
                        return (0, n.jsx)(
                            c.A,
                            {
                                user: t,
                                guild: i,
                                nick: l,
                                onSelect: () => {
                                    var e;
                                    m({ action: "PRESS_MUTUAL_GUILD" }), (e = i.id), (0, d.u)(e), a(), (0, r.jH)();
                                },
                            },
                            i.id,
                        );
                    })
                  : (0, n.jsxs)("div", {
                        className: u.Ie,
                        children: [
                            (0, n.jsx)("div", { className: u.vC }),
                            (0, n.jsx)("div", { className: u.BI, children: _.intl.string(_.t.zjVh8h) }),
                        ],
                    }),
    });
}
