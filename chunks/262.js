var a = n(164636),
    l = n(253932),
    r = n(351906),
    s = n(287809),
    i = n(792996);
let o = "legacy_username";
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let n = l.m$.useSetting(),
                d = (0, a.bG)([s.default], () => s.default.getCurrentUser()),
                c = (0, a.bG)([r.A], () => r.A.hidePersonalInformation);
            if (null == e) return [];
            let u = e?.getBadges() ?? [];
            return (
                null != d && d.id === e.userId && (void 0 !== t ? t : n) && (u = u.filter((e) => e.id !== o)),
                c &&
                    (u = u.map((e) => ({ ...e, description: e.id === o ? i.intl.string(i.t.Br1ls3) : e.description }))),
                u
            );
        },
        h: "quest_completed",
    },
);
