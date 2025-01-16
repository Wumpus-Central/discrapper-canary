n.d(t, {
    Q: function () {
        return T;
    }
});
var o = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(54042),
    i = n(179839),
    l = n(481060),
    c = n(230711),
    d = n(231757),
    u = n(617136),
    p = n(497505),
    m = n(796111),
    x = n(46140),
    g = n(981631),
    h = n(388032),
    f = n(387029);
function v(e) {
    let { quest: t, isConnected: n, consoleType: r } = e,
        c = (0, u.O5)();
    return (0, o.jsx)(l.Clickable, {
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
            r === g.ABu.PLAYSTATION
                ? (0, o.jsx)(a.T, {
                      colorClass: s()(f.connectConsoleButton, n ? f.playstationButtonConnected : f.connectConsoleButtonUnconnected),
                      size: 'sm'
                  })
                : (0, o.jsx)(i.M, {
                      colorClass: s()(f.connectConsoleButton, n ? f.xboxButtonConnected : f.connectConsoleButtonUnconnected),
                      size: 'sm'
                  })
    });
}
function C(e) {
    let { text: t, quest: n } = e,
        r = (0, u.O5)();
    return (0, o.jsx)(l.Clickable, {
        className: f.showConnectionsButton,
        onClick: () => {
            r({
                questId: n.id,
                questContent: p.jn.QUEST_BAR_V2,
                questContentCTA: u.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
            }),
                c.Z.open(g.oAB.CONNECTIONS);
        },
        children: (0, o.jsx)(l.Text, {
            'aria-label': t,
            color: 'none',
            variant: 'text-xxs/normal',
            children: t
        })
    });
}
function j(e) {
    let { quest: t, xboxAccounts: n, playstationAccounts: r, xboxAndPlaystationAccounts: a } = e,
        i = a.slice(0, 2),
        c = a.length > 0,
        d = n.length > 0,
        u = r.length > 0;
    return (0, o.jsxs)('div', {
        className: f.inlineConsoleConnectionDetails,
        children: [
            (0, o.jsxs)('div', {
                className: f.inlineConsoleConnectionDetailsUpper,
                children: [
                    (0, o.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-xxs/normal',
                        children: c ? h.intl.string(h.t['u30/ur']) : h.intl.string(h.t.owFNBw)
                    }),
                    (0, o.jsxs)('div', {
                        className: f.inlineConsoleConnectionDetailsIcons,
                        children: [
                            (0, o.jsx)(v, {
                                consoleType: g.ABu.PLAYSTATION,
                                isConnected: u,
                                quest: t
                            }),
                            (0, o.jsx)('div', { className: f.consoleIconDivider }),
                            (0, o.jsx)(v, {
                                consoleType: g.ABu.XBOX,
                                isConnected: d,
                                quest: t
                            })
                        ]
                    })
                ]
            }),
            c &&
                (0, o.jsxs)('div', {
                    className: f.inlineConsoleConnectionDetailsLower,
                    children: [
                        i.map((e, t) =>
                            (0, o.jsxs)(
                                'div',
                                {
                                    className: s()(f.inlineConsoleConnectionDetailsLowerItem, t > 0 ? f.marginTop4px : void 0),
                                    children: [
                                        (0, o.jsx)(l.Text, {
                                            color: 'header-secondary',
                                            variant: 'text-xxs/normal',
                                            children: e.type === g.ABu.XBOX ? h.intl.string(h.t.MEhKlp) : h.intl.string(h.t['74VQCA'])
                                        }),
                                        (0, o.jsx)(l.Text, {
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
                            (0, o.jsx)(C, {
                                text: h.intl.string(h.t.o8ZkKS),
                                quest: t
                            })
                    ]
                })
        ]
    });
}
function _(e) {
    let { xboxAndPlaystationAccounts: t, quest: n } = e;
    return t.length > 0
        ? (0, o.jsx)(C, {
              text: h.intl.string(h.t['qiS+xs']),
              quest: n
          })
        : null;
}
function T(e) {
    let t = (0, m.P)({ location: x.dr.QUESTS_BAR });
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(l.Text, {
                color: 'text-muted',
                variant: 'text-xs/medium',
                children: h.intl.string(h.t.EJFSvL)
            }),
            t ? (0, o.jsx)(j, { ...e }) : (0, o.jsx)(_, { ...e })
        ]
    });
}
