i.d(t, { P: () => c });
var n = i(64700),
    l = i(985018);
function c() {
    let [e, t] = n.useState(!1),
        [i, c] = n.useState(!1),
        [s, d] = n.useState(!1);
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
                    onCheck: () => c(!i),
                    checked: i,
                },
                {
                    key: "guidelines",
                    title: l.intl.string(l.t.cZwlWn),
                    body: l.intl.string(l.t.u0Go2s),
                    onCheck: () => d(!s),
                    checked: s,
                },
            ],
            [s, e, i],
        ),
        rulesAccepted: e && i && s,
    };
}
