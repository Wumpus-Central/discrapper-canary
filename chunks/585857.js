n.d(t, { Q: () => m });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(313789),
    o = n(518596),
    s = n(617136),
    l = n(497505),
    c = n(981631),
    u = n(388032),
    d = n(39625);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e) {
    let { text: t, quest: n, sourceQuestContent: u } = e,
        f = (0, s.O5)();
    return (0, r.jsx)(i.P3F, {
        className: d.showConnectionsButton,
        onClick: () => {
            f({
                questId: n.id,
                questContent: l.jn.QUEST_BAR_V2,
                questContentCTA: s.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                sourceQuestContent: u,
            }),
                (0, o.openUserSettings)(a.n.CONNECTIONS_PANEL, { section: c.oAB.CONNECTIONS });
        },
        children: (0, r.jsx)(i.Text, {
            "aria-label": t,
            color: "none",
            variant: "text-xxs/normal",
            children: t,
        }),
    });
}
function h(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: i } = e;
    return t.length > 0
        ? (0, r.jsx)(p, {
              text: u.intl.string(u.t["qiS+xs"]),
              quest: n,
              sourceQuestContent: i,
          })
        : null;
}
function m(e) {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.Text, {
                color: "text-muted",
                variant: "text-xs/medium",
                children: u.intl.string(u.t.EJFSvL),
            }),
            (0, r.jsx)(h, _({}, e)),
        ],
    });
}
