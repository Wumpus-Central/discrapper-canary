n.d(t, { Q: () => h });
var a = n(54381);
n(473749);
var r = n(481060),
    i = n(313789),
    l = n(518596),
    s = n(617136),
    o = n(49436),
    c = n(981631),
    d = n(388032),
    u = n(574944);
function m(e) {
    let { text: t, quest: n, sourceQuestContent: d } = e,
        m = (0, s.O5)();
    return (0, a.jsx)(r.P3F, {
        className: u.showConnectionsButton,
        onClick: () => {
            m({
                questId: n.id,
                questContent: o.jn.QUEST_BAR_V2,
                questContentCTA: s.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                sourceQuestContent: d,
            }),
                (0, l.openUserSettings)(i.n.CONNECTIONS_PANEL, { section: c.oAB.CONNECTIONS });
        },
        children: (0, a.jsx)(r.Text, {
            "aria-label": t,
            color: "none",
            variant: "text-xxs/normal",
            children: t,
        }),
    });
}
function p(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: r } = e;
    return t.length > 0
        ? (0, a.jsx)(m, {
              text: d.intl.string(d.t["qiS+xj"]),
              quest: n,
              sourceQuestContent: r,
          })
        : null;
}
function h(e) {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(r.Text, {
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
