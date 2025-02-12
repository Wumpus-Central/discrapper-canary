n.d(t, { Q: () => b });
var r = n(200651);
n(192379);
var o = n(120356),
    s = n.n(o),
    a = n(54042),
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
    f = n(969079);
function _(e) {
    let { quest: t, isConnected: n, consoleType: o } = e,
        c = (0, u.O5)();
    return (0, r.jsx)(l.P3F, {
        className: f.connectConsoleButtonWrapper,
        onClick: () => {
            c({
                questId: t.id,
                questContent: p.jn.QUEST_BAR_V2,
                questContentCTA: u.jZ.CONNECT_CONSOLE
            }),
                (0, d.Z)({ platformType: o });
        },
        children:
            o === h.ABu.PLAYSTATION
                ? (0, r.jsx)(a.T, {
                      colorClass: s()(f.connectConsoleButton, n ? f.playstationButtonConnected : f.connectConsoleButtonUnconnected),
                      size: 'sm'
                  })
                : (0, r.jsx)(i.M, {
                      colorClass: s()(f.connectConsoleButton, n ? f.xboxButtonConnected : f.connectConsoleButtonUnconnected),
                      size: 'sm'
                  })
    });
}
function C(e) {
    let { text: t, quest: n } = e,
        o = (0, u.O5)();
    return (0, r.jsx)(l.P3F, {
        className: f.showConnectionsButton,
        onClick: () => {
            o({
                questId: n.id,
                questContent: p.jn.QUEST_BAR_V2,
                questContentCTA: u.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
            }),
                c.Z.open(h.oAB.CONNECTIONS);
        },
        children: (0, r.jsx)(l.Text, {
            'aria-label': t,
            color: 'none',
            variant: 'text-xxs/normal',
            children: t
        })
    });
}
function v(e) {
    let { quest: t, xboxAccounts: n, playstationAccounts: o, xboxAndPlaystationAccounts: a } = e,
        i = a.slice(0, 2),
        c = a.length > 0,
        d = n.length > 0,
        u = o.length > 0;
    return (0, r.jsxs)('div', {
        className: f.inlineConsoleConnectionDetails,
        children: [
            (0, r.jsxs)('div', {
                className: f.inlineConsoleConnectionDetailsUpper,
                children: [
                    (0, r.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-xxs/normal',
                        children: c ? g.intl.string(g.t['u30/ur']) : g.intl.string(g.t.owFNBw)
                    }),
                    (0, r.jsxs)('div', {
                        className: f.inlineConsoleConnectionDetailsIcons,
                        children: [
                            (0, r.jsx)(_, {
                                consoleType: h.ABu.PLAYSTATION,
                                isConnected: u,
                                quest: t
                            }),
                            (0, r.jsx)('div', { className: f.consoleIconDivider }),
                            (0, r.jsx)(_, {
                                consoleType: h.ABu.XBOX,
                                isConnected: d,
                                quest: t
                            })
                        ]
                    })
                ]
            }),
            c &&
                (0, r.jsxs)('div', {
                    className: f.inlineConsoleConnectionDetailsLower,
                    children: [
                        i.map((e, t) =>
                            (0, r.jsxs)(
                                'div',
                                {
                                    className: s()(f.inlineConsoleConnectionDetailsLowerItem, t > 0 ? f.marginTop4px : void 0),
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            color: 'header-secondary',
                                            variant: 'text-xxs/normal',
                                            children: e.type === h.ABu.XBOX ? g.intl.string(g.t.MEhKlp) : g.intl.string(g.t['74VQCA'])
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            color: 'header-secondary',
                                            variant: 'text-xxs/normal',
                                            children: e.name
                                        })
                                    ]
                                },
                                t
                            )
                        ),
                        a.length > 2 &&
                            (0, r.jsx)(C, {
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
        ? (0, r.jsx)(C, {
              text: g.intl.string(g.t['qiS+xs']),
              quest: n
          })
        : null;
}
function b(e) {
    let t = (0, m.P)({ location: x.dr.QUESTS_BAR });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Text, {
                color: 'text-muted',
                variant: 'text-xs/medium',
                children: g.intl.string(g.t.EJFSvL)
            }),
            t ? (0, r.jsx)(v, { ...e }) : (0, r.jsx)(j, { ...e })
        ]
    });
}
