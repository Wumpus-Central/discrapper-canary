n.d(t, {
    Z: () => x,
});
var a = n(627968);
n(64700);
var l = n(397927),
    r = n(780964),
    i = n(840065),
    s = n(341915),
    o = n(18437),
    c = n(590202),
    d = n(652215),
    u = n(985018),
    m = n(805180);

function p(e) {
    let { text: t, quest: n, sourceQuestContent: u } = e,
        p = (0, o.Ut)();
    return (0, a.jsx)(l.DUT, {
        className: m.Z0,
        onClick: () => {
            p({
                questId: n.id,
                questContent: s.uF.QUEST_BAR_V2,
                questContentCTA: c.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                sourceQuestContent: u,
            }),
                (0, i.openUserSettings)(r.X.CONNECTIONS_PANEL, {
                    section: d.nc_.CONNECTIONS,
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

function h(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: l } = e;
    return t.length > 0
        ? (0, a.jsx)(p, {
              text: u.intl.string(u.t["qiS+xj"]),
              quest: n,
              sourceQuestContent: l,
          })
        : null;
}

function x(e) {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(l.Text, {
                color: "text-muted",
                variant: "text-xs/medium",
                children: u.intl.string(u.t.EJFSvD),
            }),
            (0, a.jsx)(
                h,
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
