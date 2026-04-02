"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    l = n(858229),
    r = n(322168),
    a = n(491032),
    o = n(391958),
    d = n(255354),
    c = n(957300),
    u = n(378427),
    m = n(411335),
    g = n(985018),
    x = n(10753);
function h(e) {
    let { rule: t, onChangeRule: n } = e,
        h = s.useCallback(
            (e) => {
                n({ ...t, triggerMetadata: { ...t.triggerMetadata, keywordFilter: e } });
            },
            [n, t],
        ),
        _ = s.useCallback(
            (e) => {
                n({ ...t, triggerMetadata: { ...t.triggerMetadata, allowList: e } });
            },
            [n, t],
        );
    return (0, i.jsxs)("div", {
        className: x.sp,
        children: [
            (0, i.jsxs)(c.A, {
                step: 1,
                header: g.intl.string(g.t["ue+tnb"]),
                children: [
                    (0, i.jsx)(o.A, {
                        onChangeText: h,
                        maxWordCount: m.bV,
                        initialValue: t.triggerMetadata?.keywordFilter,
                    }),
                    (0, i.jsx)(a.A, {
                        rule: t,
                        onChangeRule: n,
                        collapsed:
                            t?.triggerMetadata?.regexPatterns == null || t?.triggerMetadata?.regexPatterns.length === 0,
                    }),
                    (0, i.jsx)(l.A, {
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
                header: g.intl.string(g.t.eq3gjh),
                children: (0, i.jsx)(d.A, { rule: t, onChangeRule: n }),
            }),
        ],
    });
}
