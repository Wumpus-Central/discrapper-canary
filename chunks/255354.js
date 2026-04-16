"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(938078),
    a = n(57222),
    o = n(985018),
    d = n(394661);
let c = s.memo(function (e) {
    let { rule: t, onlyRoles: n = !1, onChangeRule: s } = e,
        c = (0, i.jsx)(r.A, {
            guildId: t.guildId,
            selectedChannelIds: t.exemptChannels,
            selectedRoleIds: t.exemptRoles,
            onChange: (e, n) => s({ ...t, exemptChannels: e, exemptRoles: n }),
            disableEveryoneRole: !0,
            includeRoleRestrictedPrivateChannels: !0,
        });
    return (
        n &&
            (c = (0, i.jsx)(a.A, {
                guildId: t.guildId,
                selectedRoleIds: t.exemptRoles,
                onChange: (e) => s({ ...t, exemptRoles: e }),
                placeholder: o.intl.string(o.t.aFO1I6),
                disableEveryoneRole: !0,
            })),
        (0, i.jsxs)("div", {
            children: [
                c,
                (0, i.jsx)(l.Text, {
                    color: "text-default",
                    variant: "text-xs/normal",
                    className: d.d,
                    children: o.intl.string(o.t.GKlYaS),
                }),
            ],
        })
    );
});
