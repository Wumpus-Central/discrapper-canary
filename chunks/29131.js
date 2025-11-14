n.d(t, { default: () => s });
var r = n(951288),
    i = n(647438),
    c = n(481060),
    o = n(151459),
    a = n(388032);
function s(e) {
    let { onClose: t } = e,
        { showSuggestions: s, showActivityTicker: l, setShowSuggestions: u, setShowActivityTicker: b } = (0, o.Z)(),
        d = i.useCallback(() => {
            (0, c.ZDy)(async () => {
                let { default: e } = await n.e("24378").then(n.bind(n, 717756));
                return (t) =>
                    (0, r.jsx)(
                        e,
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
                        })({}, t),
                    );
            }),
                t();
        }, [t]);
    return (0, r.jsxs)(c.v2r, {
        navId: "friends-popout-settings",
        onClose: t,
        "aria-label": a.intl.string(a.t["3D5yo/"]),
        onSelect: () => {},
        children: [
            (0, r.jsx)(c.sNh, {
                id: "create-group",
                label: "Create Group",
                action: d,
            }),
            (0, r.jsx)(c.S89, {
                id: "show-suggestions",
                label: "Show Suggestions",
                checked: s,
                action: () => u(!s),
            }),
            (0, r.jsx)(c.S89, {
                id: "show-activity-ticker",
                label: "Show Activity Ticker",
                checked: l,
                action: () => b(!l),
            }),
        ],
    });
}
