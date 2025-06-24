n.d(t, { Q: () => m });
var r = n(255367);
n(73800);
var s = n(481060),
    o = n(230711),
    a = n(617136),
    i = n(497505),
    l = n(981631),
    c = n(388032),
    u = n(382845);
function d(e) {
    let { text: t, quest: n, sourceQuestContent: c } = e,
        d = (0, a.O5)();
    return (0, r.jsx)(s.P3F, {
        className: u.showConnectionsButton,
        onClick: () => {
            d({
                questId: n.id,
                questContent: i.jn.QUEST_BAR_V2,
                questContentCTA: a.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                sourceQuestContent: c
            }),
                o.Z.open(l.oAB.CONNECTIONS);
        },
        children: (0, r.jsx)(s.Text, {
            'aria-label': t,
            color: 'none',
            variant: 'text-xxs/normal',
            children: t
        })
    });
}
function p(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: s } = e;
    return t.length > 0
        ? (0, r.jsx)(d, {
              text: c.intl.string(c.t['qiS+xs']),
              quest: n,
              sourceQuestContent: s
          })
        : null;
}
function m(e) {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.Text, {
                color: 'text-muted',
                variant: 'text-xs/medium',
                children: c.intl.string(c.t.EJFSvL)
            }),
            (0, r.jsx)(
                p,
                (function (e) {
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
                })({}, e)
            )
        ]
    });
}
