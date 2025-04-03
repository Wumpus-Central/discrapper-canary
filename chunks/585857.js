n.d(t, { Q: () => C });
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
    f = n(46140),
    g = n(981631),
    x = n(388032),
    h = n(382845);
function b(e) {
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
function j(e) {
    let { quest: t, isConnected: n, consoleType: o } = e,
        c = (0, u.O5)();
    return (0, r.jsx)(l.P3F, {
        className: h.connectConsoleButtonWrapper,
        onClick: () => {
            c({
                questId: t.id,
                questContent: p.jn.QUEST_BAR_V2,
                questContentCTA: u.jZ.CONNECT_CONSOLE
            }),
                (0, d.Z)({ platformType: o });
        },
        children:
            o === g.ABu.PLAYSTATION
                ? (0, r.jsx)(a.T, {
                      colorClass: s()(h.connectConsoleButton, n ? h.playstationButtonConnected : h.connectConsoleButtonUnconnected),
                      size: 'sm'
                  })
                : (0, r.jsx)(i.M, {
                      colorClass: s()(h.connectConsoleButton, n ? h.xboxButtonConnected : h.connectConsoleButtonUnconnected),
                      size: 'sm'
                  })
    });
}
function v(e) {
    let { text: t, quest: n } = e,
        o = (0, u.O5)();
    return (0, r.jsx)(l.P3F, {
        className: h.showConnectionsButton,
        onClick: () => {
            o({
                questId: n.id,
                questContent: p.jn.QUEST_BAR_V2,
                questContentCTA: u.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
            }),
                c.Z.open(g.oAB.CONNECTIONS);
        },
        children: (0, r.jsx)(l.Text, {
            'aria-label': t,
            color: 'none',
            variant: 'text-xxs/normal',
            children: t
        })
    });
}
function y(e) {
    let { quest: t, xboxAccounts: n, playstationAccounts: o, xboxAndPlaystationAccounts: a } = e,
        i = a.slice(0, 2),
        c = a.length > 0,
        d = n.length > 0,
        u = o.length > 0;
    return (0, r.jsxs)('div', {
        className: h.inlineConsoleConnectionDetails,
        children: [
            (0, r.jsxs)('div', {
                className: h.inlineConsoleConnectionDetailsUpper,
                children: [
                    (0, r.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-xxs/normal',
                        children: c ? x.NW.string(x.t['u30/ur']) : x.NW.string(x.t.owFNBw)
                    }),
                    (0, r.jsxs)('div', {
                        className: h.inlineConsoleConnectionDetailsIcons,
                        children: [
                            (0, r.jsx)(j, {
                                consoleType: g.ABu.PLAYSTATION,
                                isConnected: u,
                                quest: t
                            }),
                            (0, r.jsx)('div', { className: h.consoleIconDivider }),
                            (0, r.jsx)(j, {
                                consoleType: g.ABu.XBOX,
                                isConnected: d,
                                quest: t
                            })
                        ]
                    })
                ]
            }),
            c &&
                (0, r.jsxs)('div', {
                    className: h.inlineConsoleConnectionDetailsLower,
                    children: [
                        i.map((e, t) =>
                            (0, r.jsxs)(
                                'div',
                                {
                                    className: s()(h.inlineConsoleConnectionDetailsLowerItem, t > 0 ? h.marginTop4px : void 0),
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            color: 'header-secondary',
                                            variant: 'text-xxs/normal',
                                            children: e.type === g.ABu.XBOX ? x.NW.string(x.t.MEhKlp) : x.NW.string(x.t['74VQCA'])
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
                            (0, r.jsx)(v, {
                                text: x.NW.string(x.t.o8ZkKS),
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
        ? (0, r.jsx)(v, {
              text: x.NW.string(x.t['qiS+xs']),
              quest: n
          })
        : null;
}
function C(e) {
    let t = (0, m.P)({ location: f.dr.QUESTS_BAR });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Text, {
                color: 'text-muted',
                variant: 'text-xs/medium',
                children: x.NW.string(x.t.EJFSvL)
            }),
            t ? (0, r.jsx)(y, b({}, e)) : (0, r.jsx)(_, b({}, e))
        ]
    });
}
