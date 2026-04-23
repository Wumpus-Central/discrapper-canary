n.d(t, { Z: () => _ });
var i = n(627968);
n(64700);
var s = n(939249),
    l = n(834730),
    a = n(780964),
    r = n(858897),
    o = n(341915),
    d = n(18437),
    c = n(590202),
    u = n(985018),
    p = n(540037);
function h(e) {
    let { text: t, quest: n, sourceQuestContent: u } = e,
        h = (0, d.Ut)();
    return (0, i.jsx)(s.D, {
        className: p.Z0,
        onClick: () => {
            h({
                questId: n.id,
                questContent: o.uF.QUEST_BAR_V2,
                questContentCTA: c.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                sourceQuestContent: u,
            }),
                (0, r.openUserSettings)(a.X.CONNECTIONS_PANEL);
        },
        children: (0, i.jsx)(l.E, { "aria-label": t, color: "none", variant: "text-xxs/normal", children: t }),
    });
}
function m(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: s } = e;
    return t.length > 0 ? (0, i.jsx)(h, { text: u.intl.string(u.t["qiS+xj"]), quest: n, sourceQuestContent: s }) : null;
}
function _(e) {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.E, { color: "text-muted", variant: "text-xs/medium", children: u.intl.string(u.t.EJFSvD) }),
            (0, i.jsx)(m, { ...e }),
        ],
    });
}
