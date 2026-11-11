(n(323874), n(14289), n(35956));
var i = n(976860),
    r = n(830543),
    a = n(814793),
    s = n(369189),
    l = n(652215);
n.d(
    t,
    {},
    {
        m: function (e) {
            let { fromContent: t, questId: n, searchParams: o } = e;
            (0, a.jQ)({ questId: n, fromContent: t });
            let d = new URLSearchParams((0, s.p)() ? (0, i.JK)().location.search : "");
            for (let [e, t] of Object.entries(o ?? {})) d.set(e, t);
            let c = d.toString(),
                u = "" !== c ? `?${c}` : "",
                _ = null != n ? `#${n}` : "";
            ((0, r.default)(), (0, i.pX)(l.BVt.QUEST_HOME, { search: u, hash: _ }));
        },
    },
);
