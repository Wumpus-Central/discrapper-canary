l.d(t, { A: () => j });
var n = l(627968),
    s = l(64700),
    i = l(265872),
    r = l(939249),
    a = l(365199),
    o = l(827734),
    c = l(861672),
    d = l(477782),
    u = l(50268),
    m = l(928658),
    p = l(239211),
    h = l(985018),
    x = l(540507);
let A = (e) => {
        let { appRecord: t, closePopout: l, selectedGuildId: s, selectedChannelId: i, children: r = null } = e,
            a = (0, u.A)({ id: t.id, label: h.intl.string(h.t["+NP/b2"]) });
        return (0, n.jsxs)(c.W, {
            "data-menu-migrated": !0,
            navId: "authorized-app-action-menu",
            onClose: l,
            "aria-label": h.intl.string(h.t.tKobzb),
            onSelect: void 0,
            children: [
                r,
                (0, n.jsx)(d.Dr, {
                    id: "report",
                    label: h.intl.string(h.t["+78Pfm"]),
                    color: "danger",
                    action: () =>
                        (0, m.r3)({
                            application: t,
                            entrypoint: "authorized_apps_settings",
                            contextualGuildId: s,
                            contextualChannelId: i,
                        }),
                }),
                a,
            ],
        });
    },
    N = (e) => {
        let { appRecord: t, botUser: l, closePopout: s, selectedGuildId: i, selectedChannelId: r } = e;
        return (0, n.jsx)(A, {
            appRecord: t,
            closePopout: s,
            selectedGuildId: i,
            selectedChannelId: r,
            children: (0, p.A)({ user: l, location: "UserSettingsAuthedApps" }),
        });
    },
    j = (e) => {
        let { appRecord: t, selectedGuildId: l, selectedChannelId: c } = e,
            d = s.useRef(null);
        return (0, n.jsx)(i.Y, {
            targetElementRef: d,
            renderPopout: (e) => {
                let { closePopout: s } = e;
                return null == t.bot
                    ? (0, n.jsx)(A, { appRecord: t, closePopout: s, selectedGuildId: l, selectedChannelId: c })
                    : (0, n.jsx)(N, {
                          appRecord: t,
                          botUser: t.bot,
                          closePopout: s,
                          selectedGuildId: l,
                          selectedChannelId: c,
                      });
            },
            align: "right",
            position: "bottom",
            children: (e) =>
                (0, n.jsx)(r.D, {
                    innerRef: d,
                    className: x.a,
                    "aria-label": h.intl.string(h.t["UKOtz+"]),
                    ...e,
                    children: (0, n.jsx)(a.j, { size: "xs", color: o.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                }),
        });
    };
