n.d(t, { Z: () => p });
var a = n(627968);
n(64700);
var s = n(397927),
    i = n(780964),
    l = n(840065),
    r = n(341915),
    o = n(18437),
    d = n(590202),
    c = n(652215),
    u = n(985018),
    m = n(805180);
function h(e) {
    let { text: t, quest: n, sourceQuestContent: u } = e,
        h = (0, o.Ut)();
    return (0, a.jsx)(s.DUT, {
        className: m.Z0,
        onClick: () => {
            h({
                questId: n.id,
                questContent: r.uF.QUEST_BAR_V2,
                questContentCTA: d.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                sourceQuestContent: u,
            }),
                (0, l.openUserSettings)(i.X.CONNECTIONS_PANEL, { section: c.nc_.CONNECTIONS });
        },
        children: (0, a.jsx)(s.Text, { "aria-label": t, color: "none", variant: "text-xxs/normal", children: t }),
    });
}
function x(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: s } = e;
    return t.length > 0 ? (0, a.jsx)(h, { text: u.intl.string(u.t["qiS+xj"]), quest: n, sourceQuestContent: s }) : null;
}
function p(e) {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(s.Text, { color: "text-muted", variant: "text-xs/medium", children: u.intl.string(u.t.EJFSvD) }),
            (0, a.jsx)(x, { ...e }),
        ],
    });
}
