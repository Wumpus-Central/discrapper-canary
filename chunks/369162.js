i.d(t, { P: () => r }), i(896048);
var n = i(64700),
    l = i(985018);
function r() {
    let [e, t] = n.useState(!1),
        [i, r] = n.useState(!1),
        [c, s] = n.useState(!1);
    return {
        rules: n.useMemo(
            () => [
                {
                    key: "healthy",
                    title: l.intl.string(l.t.jIi9gq),
                    body: l.intl.string(l.t["4uUAXh"]),
                    onCheck: () => t(!e),
                    checked: e,
                },
                {
                    key: "nonNSFW",
                    title: l.intl.string(l.t["iwnCh+"]),
                    body: l.intl.string(l.t.UKFzEY),
                    onCheck: () => r(!i),
                    checked: i,
                },
                {
                    key: "guidelines",
                    title: l.intl.string(l.t.cZwlWn),
                    body: l.intl.string(l.t.u0Go2s),
                    onCheck: () => s(!c),
                    checked: c,
                },
            ],
            [c, e, i],
        ),
        rulesAccepted: e && i && c,
    };
}
