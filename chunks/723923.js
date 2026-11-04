var a,
    i = e(792996),
    s =
        (((a = {}).COMMUNICATION = "communication"),
        (a.SOCIAL = "social"),
        (a.TIPS = "tips"),
        (a.RECOMMENDATIONS_AND_EVENTS = "recommendations_and_events"),
        (a.UPDATES_AND_ANNOUNCEMENTS = "updates_and_announcements"),
        (a.FAMILY_CENTER_DIGEST = "family_center_digest"),
        a);
let l = [
        {
            category: "communication",
            label: () => i.intl.string(i.t["B75+xe"]),
            subLabel: () => i.intl.string(i.t.ZHg9Tc),
        },
        { category: "social", label: () => i.intl.string(i.t.sxn7lR), subLabel: () => i.intl.string(i.t.l7sdzF) },
        {
            category: "updates_and_announcements",
            label: () => i.intl.string(i.t.EkxXhe),
            subLabel: () => i.intl.string(i.t["8ba9Q7"]),
        },
        { category: "tips", label: () => i.intl.string(i.t.jNrkrM), subLabel: () => i.intl.string(i.t["FF6/+B"]) },
        {
            category: "recommendations_and_events",
            label: () => i.intl.string(i.t.E8g1l8),
            subLabel: () => i.intl.string(i.t.X4JMt1),
        },
    ],
    r = l.map((t) => {
        let { category: n } = t;
        return n;
    });
e.d(n, {}, { HO: s, Zk: r, px: l });
