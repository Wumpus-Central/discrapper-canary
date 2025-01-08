n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(536982),
    a = n(456677),
    s = n(951665),
    o = n(428760),
    c = n(55889),
    d = n(300453),
    u = n(620436),
    m = n(273504),
    h = n(388032),
    g = n(318668);
function x(e) {
    var t, n, x, p, f, C;
    let { rule: v, onChangeRule: _ } = e,
        N = r.useCallback(
            (e) => {
                _({
                    ...v,
                    triggerMetadata: {
                        ...v.triggerMetadata,
                        keywordFilter: e
                    }
                });
            },
            [_, v]
        ),
        I = r.useCallback(
            (e) => {
                _({
                    ...v,
                    triggerMetadata: {
                        ...v.triggerMetadata,
                        allowList: e
                    }
                });
            },
            [_, v]
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
                            initialValue: null === (t = v.triggerMetadata) || void 0 === t ? void 0 : t.keywordFilter
                        }),
                        (0, i.jsx)(s.Z, {
                            rule: v,
                            onChangeRule: _,
                            collapsed: (null == v ? void 0 : null === (n = v.triggerMetadata) || void 0 === n ? void 0 : n.regexPatterns) == null || (null == v ? void 0 : null === (x = v.triggerMetadata) || void 0 === x ? void 0 : x.regexPatterns.length) === 0
                        }),
                        (0, i.jsx)(l.Z, {
                            onChange: I,
                            initialValue: null === (p = v.triggerMetadata) || void 0 === p ? void 0 : p.allowList,
                            maxWordCount: m.n4,
                            collapsed: (null === (f = v.triggerMetadata) || void 0 === f ? void 0 : f.allowList) == null || (null === (C = v.triggerMetadata) || void 0 === C ? void 0 : C.allowList.length) === 0
                        })
                    ]
                }),
                (0, i.jsx)(u.Z, { type: u.Z.Type.ARROW_DOWN }),
                (0, i.jsx)(d.Z, {
                    step: 2,
                    header: h.intl.string(h.t['18TOiY']),
                    children: (0, i.jsx)(a.Z, {
                        rule: v,
                        onChangeRule: _
                    })
                }),
                (0, i.jsx)(u.Z, { type: u.Z.Type.CROSS }),
                (0, i.jsx)(d.Z, {
                    step: 3,
                    header: h.intl.string(h.t.eq3gjo),
                    children: (0, i.jsx)(c.Z, {
                        rule: v,
                        onChangeRule: _
                    })
                })
            ]
        })
    });
}
