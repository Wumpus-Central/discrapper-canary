n.d(t, {
    Z: () => h,
});
var a = n(627968);
n(64700);
var l = n(397927),
    i = n(780964),
    r = n(840065),
    s = n(216456),
    o = n(341915),
    c = n(652215),
    d = n(985018),
    u = n(805180);

function m(e) {
    let { text: t, quest: n, sourceQuestContent: d } = e,
        m = (0, s.Ut)();
    return (0, a.jsx)(l.DUT, {
        className: u.Z0,
        onClick: () => {
            m({
                questId: n.id,
                questContent: o.uF.QUEST_BAR_V2,
                questContentCTA: s.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                sourceQuestContent: d,
            }),
                (0, r.openUserSettings)(i.X.CONNECTIONS_PANEL, {
                    section: c.nc_.CONNECTIONS,
                });
        },
        children: (0, a.jsx)(l.Text, {
            "aria-label": t,
            color: "none",
            variant: "text-xxs/normal",
            children: t,
        }),
    });
}

function p(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: l } = e;
    return t.length > 0
        ? (0, a.jsx)(m, {
              text: d.intl.string(d.t["qiS+xj"]),
              quest: n,
              sourceQuestContent: l,
          })
        : null;
}

function h(e) {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(l.Text, {
                color: "text-muted",
                variant: "text-xs/medium",
                children: d.intl.string(d.t.EJFSvD),
            }),
            (0, a.jsx)(
                p,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            a.forEach(function (t) {
                                var a;
                                (a = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: a,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = a);
                            });
                    }
                    return e;
                })({}, e),
            ),
        ],
    });
}
