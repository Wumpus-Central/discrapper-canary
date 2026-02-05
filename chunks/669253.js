"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(50268),
    o = n(928658),
    l = n(239211),
    u = n(985018),
    c = n(888897);
let d = (e) => {
        let { appRecord: t, closePopout: n, selectedGuildId: i, selectedChannelId: l, children: c = null } = e,
            d = (0, s.A)({ id: t.id, label: u.intl.string(u.t["+NP/b2"]) });
        return (0, r.jsxs)(a.W1t, {
            "data-menu-migrated": !0,
            navId: "authorized-app-action-menu",
            onClose: n,
            "aria-label": u.intl.string(u.t.tKobzb),
            onSelect: void 0,
            children: [
                c,
                (0, r.jsx)(a.Drp, {
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
        let { appRecord: t, botUser: n, closePopout: i, selectedGuildId: a, selectedChannelId: s } = e;
        return (0, r.jsx)(d, {
            appRecord: t,
            closePopout: i,
            selectedGuildId: a,
            selectedChannelId: s,
            children: (0, l.A)({ user: n, location: "UserSettingsAuthedApps", color: "danger" }),
        });
    },
    f = (e) => {
        let { appRecord: t, selectedGuildId: n, selectedChannelId: s } = e,
            o = i.useRef(null);
        return (0, r.jsx)(a.YNO, {
            targetElementRef: o,
            renderPopout: (e) => {
                let { closePopout: i } = e;
                return null == t.bot
                    ? (0, r.jsx)(d, { appRecord: t, closePopout: i, selectedGuildId: n, selectedChannelId: s })
                    : (0, r.jsx)(_, {
                          appRecord: t,
                          botUser: t.bot,
                          closePopout: i,
                          selectedGuildId: n,
                          selectedChannelId: s,
                      });
            },
            align: "right",
            position: "bottom",
            children: (e) =>
                (0, r.jsx)(a.DUT, {
                    innerRef: o,
                    className: c.a,
                    "aria-label": u.intl.string(u.t["UKOtz+"]),
                    ...e,
                    children: (0, r.jsx)(a.jNK, { size: "xs", color: a.LU0.colors.INTERACTIVE_TEXT_DEFAULT }),
                }),
        });
    };
