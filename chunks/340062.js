"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(50268),
    o = n(928658),
    l = n(239211),
    u = n(985018),
    c = n(390472);
let d = (e) => {
        let { appRecord: t, closePopout: n, selectedGuildId: i, selectedChannelId: l, children: c = null } = e,
            d = (0, a.A)({ id: t.id, label: u.intl.string(u.t["+NP/b2"]) });
        return (0, r.jsxs)(s.W1t, {
            "data-menu-migrated": !0,
            navId: "authorized-app-action-menu",
            onClose: n,
            "aria-label": u.intl.string(u.t.tKobzb),
            onSelect: void 0,
            children: [
                c,
                (0, r.jsx)(s.Drp, {
                    id: "report",
                    label: u.intl.string(u.t["+78Pfm"]),
                    color: "danger",
                    action: () =>
                        (0, o.r3)({
                            application: t,
                            entrypoint: "authorized_apps_settings",
                            contextualGuildId: i,
                            contextualChannelId: l,
                        }),
                }),
                d,
            ],
        });
    },
    _ = (e) => {
        let { appRecord: t, botUser: n, closePopout: i, selectedGuildId: s, selectedChannelId: a } = e;
        return (0, r.jsx)(d, {
            appRecord: t,
            closePopout: i,
            selectedGuildId: s,
            selectedChannelId: a,
            children: (0, l.A)({ user: n, location: "UserSettingsAuthedApps" }),
        });
    },
    f = (e) => {
        let { appRecord: t, selectedGuildId: n, selectedChannelId: a } = e,
            o = i.useRef(null);
        return (0, r.jsx)(s.YNO, {
            targetElementRef: o,
            renderPopout: (e) => {
                let { closePopout: i } = e;
                return null == t.bot
                    ? (0, r.jsx)(d, { appRecord: t, closePopout: i, selectedGuildId: n, selectedChannelId: a })
                    : (0, r.jsx)(_, {
                          appRecord: t,
                          botUser: t.bot,
                          closePopout: i,
                          selectedGuildId: n,
                          selectedChannelId: a,
                      });
            },
            align: "right",
            position: "bottom",
            children: (e) =>
                (0, r.jsx)(s.DUT, {
                    innerRef: o,
                    className: c.a,
                    "aria-label": u.intl.string(u.t["UKOtz+"]),
                    ...e,
                    children: (0, r.jsx)(s.jNK, { size: "xs", color: s.LU0.colors.INTERACTIVE_TEXT_DEFAULT }),
                }),
        });
    };
