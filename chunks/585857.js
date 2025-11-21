n.d(t, { Q: () => g });
var r = n(54381);
n(473749);
var s = n(481060),
    o = n(313789),
    a = n(518596),
    i = n(617136),
    l = n(49436),
    c = n(981631),
    d = n(388032),
    u = n(39625);
function p(e) {
    let { text: t, quest: n, sourceQuestContent: d } = e,
        p = (0, i.O5)();
    return (0, r.jsx)(s.P3F, {
        className: u.showConnectionsButton,
        onClick: () => {
            p({
                questId: n.id,
                questContent: l.jn.QUEST_BAR_V2,
                questContentCTA: i.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                sourceQuestContent: d,
            }),
                (0, a.openUserSettings)(o.n.CONNECTIONS_PANEL, { section: c.oAB.CONNECTIONS });
        },
        children: (0, r.jsx)(s.Text, {
            "aria-label": t,
            color: "none",
            variant: "text-xxs/normal",
            children: t,
        }),
    });
}
function m(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: s } = e;
    return t.length > 0
        ? (0, r.jsx)(p, {
              text: d.intl.string(d.t["qiS+xj"]),
              quest: n,
              sourceQuestContent: s,
          })
        : null;
}
function g(e) {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.Text, {
                color: "text-muted",
                variant: "text-xs/medium",
                children: d.intl.string(d.t.EJFSvD),
            }),
            (0, r.jsx)(
                m,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, e),
            ),
        ],
    });
}
