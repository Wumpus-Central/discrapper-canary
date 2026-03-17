n.d(t, { Z: () => p });
var a = n(627968);
n(64700);
var i = n(397927),
    s = n(780964),
    l = n(840065),
    r = n(341915),
    o = n(18437),
    d = n(590202),
    c = n(985018),
    u = n(805180);
function m(e) {
    let { text: t, quest: n, sourceQuestContent: c } = e,
        m = (0, o.Ut)();
    return (0, a.jsx)(i.DUT, {
        className: u.Z0,
        onClick: () => {
            m({
                questId: n.id,
                questContent: r.uF.QUEST_BAR_V2,
                questContentCTA: d.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                sourceQuestContent: c,
            }),
                (0, l.openUserSettings)(s.X.CONNECTIONS_PANEL);
        },
        children: (0, a.jsx)(i.Text, { "aria-label": t, color: "none", variant: "text-xxs/normal", children: t }),
    });
}
function h(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: i } = e;
    return t.length > 0 ? (0, a.jsx)(m, { text: c.intl.string(c.t["qiS+xj"]), quest: n, sourceQuestContent: i }) : null;
}
function p(e) {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(i.Text, { color: "text-muted", variant: "text-xs/medium", children: c.intl.string(c.t.EJFSvD) }),
            (0, a.jsx)(h, { ...e }),
        ],
    });
}
