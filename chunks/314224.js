n.d(t, { Z: () => x });
var i = n(200651),
    r = n(192379),
    l = n(536982),
    s = n(456677),
    a = n(951665),
    o = n(428760),
    c = n(55889),
    d = n(300453),
    u = n(620436),
    m = n(273504),
    h = n(388032),
    g = n(521566);
function x(e) {
    var t, n, x, p, _, C;
    let { rule: f, onChangeRule: v } = e,
        N = r.useCallback(
            (e) => {
                v({
                    ...f,
                    triggerMetadata: {
                        ...f.triggerMetadata,
                        keywordFilter: e
                    }
                });
            },
            [v, f]
        ),
        j = r.useCallback(
            (e) => {
                v({
                    ...f,
                    triggerMetadata: {
                        ...f.triggerMetadata,
                        allowList: e
                    }
                });
            },
            [v, f]
        );
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: g.cardContentsContainer,
            children: [
                (0, i.jsxs)(d.Z, {
                    step: 1,
                    header: h.intl.string(h.t['ue+tnZ']),
                    children: [
                        (0, i.jsx)(o.Z, {
                            onChangeText: N,
                            maxWordCount: m.RH,
                            initialValue: null === (t = f.triggerMetadata) || void 0 === t ? void 0 : t.keywordFilter
                        }),
                        (0, i.jsx)(a.Z, {
                            rule: f,
                            onChangeRule: v,
                            collapsed: (null == f ? void 0 : null === (n = f.triggerMetadata) || void 0 === n ? void 0 : n.regexPatterns) == null || (null == f ? void 0 : null === (x = f.triggerMetadata) || void 0 === x ? void 0 : x.regexPatterns.length) === 0
                        }),
                        (0, i.jsx)(l.Z, {
                            onChange: j,
                            initialValue: null === (p = f.triggerMetadata) || void 0 === p ? void 0 : p.allowList,
                            maxWordCount: m.n4,
                            collapsed: (null === (_ = f.triggerMetadata) || void 0 === _ ? void 0 : _.allowList) == null || (null === (C = f.triggerMetadata) || void 0 === C ? void 0 : C.allowList.length) === 0
                        })
                    ]
                }),
                (0, i.jsx)(u.Z, { type: u.Z.Type.ARROW_DOWN }),
                (0, i.jsx)(d.Z, {
                    step: 2,
                    header: h.intl.string(h.t['18TOiY']),
                    children: (0, i.jsx)(s.Z, {
                        rule: f,
                        onChangeRule: v
                    })
                }),
                (0, i.jsx)(u.Z, { type: u.Z.Type.CROSS }),
                (0, i.jsx)(d.Z, {
                    step: 3,
                    header: h.intl.string(h.t.eq3gjo),
                    children: (0, i.jsx)(c.Z, {
                        rule: f,
                        onChangeRule: v
                    })
                })
            ]
        })
    });
}
