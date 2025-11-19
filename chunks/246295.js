n.d(t, { V: () => l }), n(388685);
var i = n(473749),
    c = n(388032);
function l() {
    let [e, t] = i.useState(!1),
        [n, l] = i.useState(!1),
        [r, o] = i.useState(!1);
    return {
        rules: i.useMemo(
            () => [
                {
                    key: "healthy",
                    title: c.intl.string(c.t.jIi9gq),
                    body: c.intl.string(c.t["4uUAXh"]),
                    onCheck: () => t(!e),
                    checked: e,
                },
                {
                    key: "nonNSFW",
                    title: c.intl.string(c.t["iwnCh+"]),
                    body: c.intl.string(c.t.UKFzEY),
                    onCheck: () => l(!n),
                    checked: n,
                },
                {
                    key: "guidelines",
                    title: c.intl.string(c.t.cZwlWn),
                    body: c.intl.string(c.t.u0Go2s),
                    onCheck: () => o(!r),
                    checked: r,
                },
            ],
            [r, e, n],
        ),
        rulesAccepted: e && n && r,
    };
}
