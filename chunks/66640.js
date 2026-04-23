n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(858229),
    r = n(702942),
    a = n(99787),
    o = n(255354),
    d = n(957300),
    c = n(378427),
    u = n(411335),
    m = n(985018),
    g = n(301462);
function h(e) {
    let { rule: t, onChangeRule: n } = e,
        h = l.useCallback(
            (e) => {
                n({ ...t, triggerMetadata: { ...t.triggerMetadata, allowList: e } });
            },
            [n, t],
        );
    return (0, i.jsxs)("div", {
        className: g.sp,
        children: [
            (0, i.jsxs)(d.A, {
                step: 1,
                header: m.intl.string(m.t.CX5Yfc),
                children: [
                    (0, i.jsx)(r.A, { rule: t, onChangeRule: n }),
                    (0, i.jsx)(s.A, {
                        onChange: h,
                        initialValue: t.triggerMetadata?.allowList,
                        maxWordCount: u.hG,
                        collapsed: t.triggerMetadata?.allowList == null || t.triggerMetadata?.allowList.length === 0,
                    }),
                ],
            }),
            (0, i.jsx)(c.A, { type: c.A.Type.ARROW_DOWN }),
            (0, i.jsx)(d.A, {
                step: 2,
                header: m.intl.string(m.t["18TOiQ"]),
                children: (0, i.jsx)(a.A, { rule: t, onChangeRule: n }),
            }),
            (0, i.jsx)(c.A, { type: c.A.Type.CROSS }),
            (0, i.jsx)(d.A, {
                step: 3,
                header: m.intl.string(m.t.eq3gjh),
                children: (0, i.jsx)(o.A, { rule: t, onChangeRule: n }),
            }),
        ],
    });
}
