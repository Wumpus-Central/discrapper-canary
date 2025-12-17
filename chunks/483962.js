n.d(t, { Z: () => b });
var i = n(54381),
    r = n(473749),
    a = n(442837),
    s = n(831218),
    o = n(840780),
    l = n(51596),
    c = n(905423),
    d = n(237997),
    u = n(145597),
    f = n(981631),
    h = n(388032),
    p = n(808006);
let g = () => (0, l.$Z)("DM_SEARCH"),
    b = r.memo(function () {
        let e = (0, a.e7)([d.default], () => (d.default.isLocked((0, u.getPID)()) ? "true" : "false")),
            t = (0, c.Z)((e) => {
                let { channelId: t } = e;
                return t;
            });
        return (0, i.jsxs)("div", {
            className: p.privateChannels,
            children: [
                (0, i.jsx)("div", {
                    className: p.searchBar,
                    children: (0, i.jsx)("button", {
                        type: "button",
                        className: p.searchBarComponent,
                        onClick: g,
                        children: h.intl.string(h.t.LzcpeZ),
                    }),
                }),
                (0, i.jsx)(s.Z, {
                    padding: 8,
                    theme: f.BRd.DARK,
                    version: e,
                    selectedChannelId: t,
                }),
                (0, i.jsx)("section", {
                    className: p.panels,
                    "aria-label": h.intl.string(h.t.StREWK),
                    children: (0, i.jsx)(o.Z, { guildId: null }),
                }),
            ],
        });
    });
