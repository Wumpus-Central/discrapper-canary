n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(858229),
    r = n(99787),
    a = n(491032),
    o = n(391958),
    d = n(255354),
    c = n(957300),
    u = n(378427),
    m = n(411335),
    g = n(985018),
    h = n(301462);
function x(e) {
    let { rule: t, onChangeRule: n } = e,
        x = l.useCallback(
            (e) => {
                n({ ...t, triggerMetadata: { ...t.triggerMetadata, keywordFilter: e } });
            },
            [n, t],
        ),
        _ = l.useCallback(
            (e) => {
                n({ ...t, triggerMetadata: { ...t.triggerMetadata, allowList: e } });
            },
            [n, t],
        );
    return (0, i.jsxs)("div", {
        className: h.sp,
        children: [
            (0, i.jsxs)(c.A, {
                step: 1,
                header: g.intl.string(g.t["ue+tnb"]),
                children: [
                    (0, i.jsx)(o.A, {
                        onChangeText: x,
                        maxWordCount: m.bV,
                        initialValue: t.triggerMetadata?.keywordFilter,
                    }),
                    (0, i.jsx)(a.A, {
                        rule: t,
                        onChangeRule: n,
                        collapsed:
                            t?.triggerMetadata?.regexPatterns == null || t?.triggerMetadata?.regexPatterns.length === 0,
                    }),
                    (0, i.jsx)(s.A, {
                        onChange: _,
                        initialValue: t.triggerMetadata?.allowList,
                        maxWordCount: m.UW,
                        collapsed: t.triggerMetadata?.allowList == null || t.triggerMetadata?.allowList.length === 0,
                    }),
                ],
            }),
            (0, i.jsx)(u.A, { type: u.A.Type.ARROW_DOWN }),
            (0, i.jsx)(c.A, {
                step: 2,
                header: g.intl.string(g.t["18TOiQ"]),
                children: (0, i.jsx)(r.A, { rule: t, onChangeRule: n }),
            }),
            (0, i.jsx)(u.A, { type: u.A.Type.CROSS }),
            (0, i.jsx)(c.A, {
                step: 3,
                header: g.intl.string(g.t.u5xPPW),
                children: (0, i.jsx)(d.A, { rule: t, onChangeRule: n, onlyRoles: !0 }),
            }),
        ],
    });
}
