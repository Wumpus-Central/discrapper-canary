n.d(t, { Q: () => m });
var r = n(255367);
n(73800);
var o = n(481060),
    s = n(230711),
    a = n(617136),
    i = n(497505),
    l = n(981631),
    c = n(388032),
    d = n(449073);
function u(e) {
    let { text: t, quest: n } = e,
        c = (0, a.O5)();
    return (0, r.jsx)(o.P3F, {
        className: d.showConnectionsButton,
        onClick: () => {
            c({
                questId: n.id,
                questContent: i.jn.QUEST_BAR_V2,
                questContentCTA: a.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
            }),
                s.Z.open(l.oAB.CONNECTIONS);
        },
        children: (0, r.jsx)(o.Text, {
            'aria-label': t,
            color: 'none',
            variant: 'text-xxs/normal',
            children: t
        })
    });
}
function p(e) {
    let { xboxAndPlaystationAccounts: t, quest: n } = e;
    return t.length > 0
        ? (0, r.jsx)(u, {
              text: c.intl.string(c.t['qiS+xs']),
              quest: n
          })
        : null;
}
function m(e) {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.Text, {
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
