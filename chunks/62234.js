(a(323874), a(14289), a(35956));
var n = a(582128);
if (221552 == a.j) var r = a(806163);
var s = a(506988),
    i = a(216934),
    c = a(976860),
    o = a(484063),
    u = a(324061);
let d = "open_hexagon_perks_modal";
a.d(
    t,
    {},
    {
        Ay: function () {
            let e = (0, r.zy)(),
                t = (0, u.A)("useOpenHexagonCampaignPerksModalFromQuery");
            n.useEffect(() => {
                if (!t) return;
                let a = new URLSearchParams(e.search);
                if ("true" !== a.get(d)) return;
                ((0, o.A)({ sourceQuestContent: s.uF.NITRO_HOME_PERK_CARD }), a.delete(d));
                let n = a.toString();
                (0, c.bG)({ pathname: e.pathname, search: "" !== n ? `?${n}` : "", hash: e.hash });
            }, [t, e.pathname, e.search, e.hash]);
        },
        v6: function () {
            (0, i.m)({ fromContent: s.uF.NITRO_HOME_PERK_CARD, searchParams: { [d]: "true" } });
        },
    },
);
