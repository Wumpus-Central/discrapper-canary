n.d(t, { Q: () => b });
var s = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    o = n(54042),
    i = n(179839),
    l = n(481060),
    c = n(230711),
    d = n(231757),
    u = n(617136),
    p = n(497505),
    m = n(796111),
    x = n(46140),
    h = n(981631),
    g = n(388032),
    f = n(387029);
function v(e) {
    let { quest: t, isConnected: n, consoleType: r } = e,
        c = (0, u.O5)();
    return (0, s.jsx)(l.P3F, {
        className: f.connectConsoleButtonWrapper,
        onClick: () => {
            c({
                questId: t.id,
                questContent: p.jn.QUEST_BAR_V2,
                questContentCTA: u.jZ.CONNECT_CONSOLE
            }),
                (0, d.Z)({ platformType: r });
        },
        children:
            r === h.ABu.PLAYSTATION
                ? (0, s.jsx)(o.T, {
                      colorClass: a()(f.connectConsoleButton, n ? f.playstationButtonConnected : f.connectConsoleButtonUnconnected),
                      size: 'sm'
                  })
                : (0, s.jsx)(i.M, {
                      colorClass: a()(f.connectConsoleButton, n ? f.xboxButtonConnected : f.connectConsoleButtonUnconnected),
                      size: 'sm'
                  })
    });
}
function _(e) {
    let { text: t, quest: n } = e,
        r = (0, u.O5)();
    return (0, s.jsx)(l.P3F, {
        className: f.showConnectionsButton,
        onClick: () => {
            r({
                questId: n.id,
                questContent: p.jn.QUEST_BAR_V2,
                questContentCTA: u.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
            }),
                c.Z.open(h.oAB.CONNECTIONS);
        },
        children: (0, s.jsx)(l.Text, {
            'aria-label': t,
            color: 'none',
            variant: 'text-xxs/normal',
            children: t
        })
    });
}
function C(e) {
    let { quest: t, xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: o } = e,
        i = o.slice(0, 2),
        c = o.length > 0,
        d = n.length > 0,
        u = r.length > 0;
    return (0, s.jsxs)('div', {
        className: f.inlineConsoleConnectionDetails,
        children: [
            (0, s.jsxs)('div', {
                className: f.inlineConsoleConnectionDetailsUpper,
                children: [
                    (0, s.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-xxs/normal',
                        children: c ? g.intl.string(g.t['u30/ur']) : g.intl.string(g.t.owFNBw)
                    }),
                    (0, s.jsxs)('div', {
                        className: f.inlineConsoleConnectionDetailsIcons,
                        children: [
                            (0, s.jsx)(v, {
                                consoleType: h.ABu.PLAYSTATION,
                                isConnected: u,
                                quest: t
                            }),
                            (0, s.jsx)('div', { className: f.consoleIconDivider }),
                            (0, s.jsx)(v, {
                                consoleType: h.ABu.XBOX,
                                isConnected: d,
                                quest: t
                            })
                        ]
                    })
                ]
            }),
            c &&
                (0, s.jsxs)('div', {
                    className: f.inlineConsoleConnectionDetailsLower,
                    children: [
                        i.map((e, t) =>
                            (0, s.jsxs)(
                                'div',
                                {
                                    className: a()(f.inlineConsoleConnectionDetailsLowerItem, t > 0 ? f.marginTop4px : void 0),
                                    children: [
                                        (0, s.jsx)(l.Text, {
                                            color: 'header-secondary',
                                            variant: 'text-xxs/normal',
                                            children: e.type === h.ABu.XBOX ? g.intl.string(g.t.MEhKlp) : g.intl.string(g.t['74VQCA'])
                                        }),
                                        (0, s.jsx)(l.Text, {
                                            color: 'header-secondary',
                                            variant: 'text-xxs/normal',
                                            children: e.name
                                        })
                                    ]
                                },
                                t
                            )
                        ),
                        o.length > 2 &&
                            (0, s.jsx)(_, {
                                text: g.intl.string(g.t.o8ZkKS),
                                quest: t
                            })
                    ]
                })
        ]
    });
}
function j(e) {
    let { xboxAndPlaystationAccounts: t, quest: n } = e;
    return t.length > 0
        ? (0, s.jsx)(_, {
              text: g.intl.string(g.t['qiS+xs']),
              quest: n
          })
        : null;
}
function b(e) {
    let t = (0, m.P)({ location: x.dr.QUESTS_BAR });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(l.Text, {
                color: 'text-muted',
                variant: 'text-xs/medium',
                children: g.intl.string(g.t.EJFSvL)
            }),
            t ? (0, s.jsx)(C, { ...e }) : (0, s.jsx)(j, { ...e })
        ]
    });
}
