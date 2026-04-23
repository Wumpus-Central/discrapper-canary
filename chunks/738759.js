n.d(t, { A: () => p });
var a = n(627968);
n(64700);
var i = n(289873),
    l = n(573613),
    r = n(398590),
    s = n(345942),
    o = n(183555),
    d = n(913453),
    c = n(51943),
    _ = n(985018),
    u = n(928666);
function p(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: p } = (0, o.NJ)(),
        { mutualGuilds: m, isFetching: f } = (0, d.A)(t);
    return (0, a.jsx)(l.Ip, {
        className: u.DK,
        fade: !0,
        children:
            null == m && f
                ? (0, a.jsx)("div", { className: u.Ie, children: (0, a.jsx)(i.y, {}) })
                : (null != m || f) && m?.length !== 0
                  ? m?.map((e) => {
                        let { guild: i, nick: l } = e;
                        return (0, a.jsx)(
                            c.A,
                            {
                                user: t,
                                guild: i,
                                nick: l,
                                onSelect: () => {
                                    var e;
                                    p({ action: "PRESS_MUTUAL_GUILD" }), (e = i.id), (0, s.u)(e), n(), (0, r.jH)();
                                },
                            },
                            i.id,
                        );
                    })
                  : (0, a.jsxs)("div", {
                        className: u.Ie,
                        children: [
                            (0, a.jsx)("div", { className: u.vC }),
                            (0, a.jsx)("div", { className: u.BI, children: _.intl.string(_.t.zjVh8h) }),
                        ],
                    }),
    });
}
