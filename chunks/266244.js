"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(828100),
    r = n(355205),
    o = n(793322),
    d = n(366811),
    c = n(256415),
    u = n(9302),
    h = n(652215),
    p = n(985018),
    A = n(481171);
let f = () => (0, o.WU)("DM_SEARCH"),
    _ = s.memo(function () {
        let e = (0, l.bG)([c.default], () => (c.default.isLocked((0, u.getPID)()) ? "true" : "false")),
            t = (0, d.A)((e) => {
                let { channelId: t } = e;
                return t;
            });
        return (0, i.jsxs)("div", {
            className: A.AB,
            children: [
                (0, i.jsx)("div", {
                    className: A.ON,
                    children: (0, i.jsx)("button", {
                        type: "button",
                        className: A.lU,
                        onClick: f,
                        children: p.intl.string(p.t.LzcpeZ),
                    }),
                }),
                (0, i.jsx)(a.A, { padding: 8, theme: h.NJ8.DARK, version: e, selectedChannelId: t }),
                (0, i.jsx)("section", {
                    className: A.C3,
                    "aria-label": p.intl.string(p.t.StREWK),
                    children: (0, i.jsx)(r.A, { guildId: null }),
                }),
            ],
        });
    });
