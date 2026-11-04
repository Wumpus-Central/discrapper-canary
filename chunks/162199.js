var i = n(855986),
    r = n(181079),
    a = n(5180),
    s = n(967198),
    l = n(652215);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, i.bG)([s.A], () => s.A.getGuildId());
            return null != t ? t : e.getGuildId();
        },
        j: function (e) {
            return (0, a.ai)(s.A.getGuildId()) &&
                (r.A.isFavorite(e.id) || (e.isThread() && r.A.isFavorite(e.parent_id)))
                ? l.YYv
                : e.getGuildId();
        },
    },
);
