n.d(t, { Q: () => h });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(230711),
    o = n(617136),
    s = n(497505),
    l = n(981631),
    c = n(388032),
    u = n(39625);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e) {
    let { text: t, quest: n, sourceQuestContent: c } = e,
        d = (0, o.O5)();
    return (0, r.jsx)(i.P3F, {
        className: u.showConnectionsButton,
        onClick: () => {
            d({
                questId: n.id,
                questContent: s.jn.QUEST_BAR_V2,
                questContentCTA: o.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                sourceQuestContent: c,
            }),
                a.Z.open(l.oAB.CONNECTIONS);
        },
        children: (0, r.jsx)(i.Text, {
            "aria-label": t,
            color: "none",
            variant: "text-xxs/normal",
            children: t,
        }),
    });
}
function p(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: i } = e;
    return t.length > 0
        ? (0, r.jsx)(_, {
              text: c.intl.string(c.t["qiS+xs"]),
              quest: n,
              sourceQuestContent: i,
          })
        : null;
}
function h(e) {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.Text, {
                color: "text-muted",
                variant: "text-xs/medium",
                children: c.intl.string(c.t.EJFSvL),
            }),
            (0, r.jsx)(p, f({}, e)),
        ],
    });
}
