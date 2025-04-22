n.d(t, { Q: () => _ });
var r = n(200651);
n(192379);
var o = n(120356),
    s = n.n(o),
    a = n(481060),
    i = n(230711),
    l = n(231757),
    c = n(617136),
    d = n(497505),
    u = n(796111),
    p = n(46140),
    m = n(981631),
    f = n(388032),
    g = n(382845);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function h(e) {
    let { quest: t, isConnected: n, consoleType: o } = e,
        i = (0, c.O5)();
    return (0, r.jsx)(a.P3F, {
        className: g.connectConsoleButtonWrapper,
        onClick: () => {
            i({
                questId: t.id,
                questContent: d.jn.QUEST_BAR_V2,
                questContentCTA: c.jZ.CONNECT_CONSOLE
            }),
                (0, l.Z)({ platformType: o });
        },
        children:
            o === m.ABu.PLAYSTATION
                ? (0, r.jsx)(a.Tsp, {
                      colorClass: s()(g.connectConsoleButton, n ? g.playstationButtonConnected : g.connectConsoleButtonUnconnected),
                      size: 'sm'
                  })
                : (0, r.jsx)(a.Mko, {
                      colorClass: s()(g.connectConsoleButton, n ? g.xboxButtonConnected : g.connectConsoleButtonUnconnected),
                      size: 'sm'
                  })
    });
}
function b(e) {
    let { text: t, quest: n } = e,
        o = (0, c.O5)();
    return (0, r.jsx)(a.P3F, {
        className: g.showConnectionsButton,
        onClick: () => {
            o({
                questId: n.id,
                questContent: d.jn.QUEST_BAR_V2,
                questContentCTA: c.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
            }),
                i.Z.open(m.oAB.CONNECTIONS);
        },
        children: (0, r.jsx)(a.Text, {
            'aria-label': t,
            color: 'none',
            variant: 'text-xxs/normal',
            children: t
        })
    });
}
function j(e) {
    let { quest: t, xboxAccounts: n, playstationAccounts: o, xboxAndPlaystationAccounts: i } = e,
        l = i.slice(0, 2),
        c = i.length > 0,
        d = n.length > 0,
        u = o.length > 0;
    return (0, r.jsxs)('div', {
        className: g.inlineConsoleConnectionDetails,
        children: [
            (0, r.jsxs)('div', {
                className: g.inlineConsoleConnectionDetailsUpper,
                children: [
                    (0, r.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-xxs/normal',
                        children: c ? f.intl.string(f.t['u30/ur']) : f.intl.string(f.t.owFNBw)
                    }),
                    (0, r.jsxs)('div', {
                        className: g.inlineConsoleConnectionDetailsIcons,
                        children: [
                            (0, r.jsx)(h, {
                                consoleType: m.ABu.PLAYSTATION,
                                isConnected: u,
                                quest: t
                            }),
                            (0, r.jsx)('div', { className: g.consoleIconDivider }),
                            (0, r.jsx)(h, {
                                consoleType: m.ABu.XBOX,
                                isConnected: d,
                                quest: t
                            })
                        ]
                    })
                ]
            }),
            c &&
                (0, r.jsxs)('div', {
                    className: g.inlineConsoleConnectionDetailsLower,
                    children: [
                        l.map((e, t) =>
                            (0, r.jsxs)(
                                'div',
                                {
                                    className: s()(g.inlineConsoleConnectionDetailsLowerItem, t > 0 ? g.marginTop4px : void 0),
                                    children: [
                                        (0, r.jsx)(a.Text, {
                                            color: 'header-secondary',
                                            variant: 'text-xxs/normal',
                                            children: e.type === m.ABu.XBOX ? f.intl.string(f.t.MEhKlp) : f.intl.string(f.t['74VQCA'])
                                        }),
                                        (0, r.jsx)(a.Text, {
                                            color: 'header-secondary',
                                            variant: 'text-xxs/normal',
                                            children: e.name
                                        })
                                    ]
                                },
                                t
                            )
                        ),
                        i.length > 2 &&
                            (0, r.jsx)(b, {
                                text: f.intl.string(f.t.o8ZkKS),
                                quest: t
                            })
                    ]
                })
        ]
    });
}
function v(e) {
    let { xboxAndPlaystationAccounts: t, quest: n } = e;
    return t.length > 0
        ? (0, r.jsx)(b, {
              text: f.intl.string(f.t['qiS+xs']),
              quest: n
          })
        : null;
}
function _(e) {
    let t = (0, u.P)({ location: p.dr.QUESTS_BAR });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.Text, {
                color: 'text-muted',
                variant: 'text-xs/medium',
                children: f.intl.string(f.t.EJFSvL)
            }),
            t ? (0, r.jsx)(j, x({}, e)) : (0, r.jsx)(v, x({}, e))
        ]
    });
}
