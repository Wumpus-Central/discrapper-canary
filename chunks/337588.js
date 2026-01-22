n.d(t, { default: () => s });
var r = n(627968),
    i = n(64700),
    c = n(397927),
    o = n(348417),
    a = n(985018);
function s(e) {
    let { onClose: t } = e,
        { showSuggestions: s, showActivityTicker: l, setShowSuggestions: u, setShowActivityTicker: b } = (0, o.A)(),
        p = i.useCallback(() => {
            (0, c.mMO)(async () => {
                let { default: e } = await n.e("51080").then(n.bind(n, 519528));
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
    return (0, r.jsxs)(c.W1t, {
        navId: "friends-popout-settings",
        onClose: t,
        "aria-label": a.intl.string(a.t["3D5yo/"]),
        onSelect: () => {},
        children: [
            (0, r.jsx)(c.Drp, {
                id: "create-group",
                label: "Create Group",
                action: p,
            }),
            (0, r.jsx)(c.sLh, {
                id: "show-suggestions",
                label: "Show Suggestions",
                checked: s,
                action: () => u(!s),
            }),
            (0, r.jsx)(c.sLh, {
                id: "show-activity-ticker",
                label: "Show Activity Ticker",
                checked: l,
                action: () => b(!l),
            }),
        ],
    });
}
