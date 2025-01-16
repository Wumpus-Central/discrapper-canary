n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    s = n(273504),
    a = n(388032),
    o = n(900340);
function c(e) {
    let { preset: t, toggled: n, onToggle: r } = e,
        { headerText: c, subtitleText: d } = (function (e) {
            let t = null,
                n = null;
            switch (e) {
                case s.Ux.PROFANITY:
                    (t = a.intl.string(a.t['I+BDrK'])), (n = (0, i.jsx)(i.Fragment, { children: a.intl.string(a.t.hISCmp) }));
                    break;
                case s.Ux.SEXUAL_CONTENT:
                    (t = a.intl.string(a.t.URSMen)), (n = (0, i.jsx)(i.Fragment, { children: a.intl.string(a.t.oRQDBg) }));
                    break;
                case s.Ux.SLURS:
                    (t = a.intl.string(a.t.xjK2Mz)), (n = (0, i.jsx)(i.Fragment, { children: a.intl.string(a.t.oJYXBA) }));
                    break;
                default:
                    (t = 'Error'), (n = 'Unrecognized list');
            }
            return {
                headerText: t,
                subtitleText: n
            };
        })(t);
    return (0, i.jsxs)('div', {
        className: o.keywordListContainer,
        children: [
            (0, i.jsxs)('div', {
                className: o.keywordListTextContainer,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-sm/semibold',
                        children: c
                    }),
                    (0, i.jsx)(l.Text, {
                        color: 'interactive-normal',
                        variant: 'text-xs/medium',
                        children: d
                    })
                ]
            }),
            (0, i.jsx)(l.Checkbox, {
                className: o.toggle,
                type: l.Checkbox.Types.INVERTED,
                value: n,
                onChange: () => r(t)
            })
        ]
    });
}
function d(e) {
    var t;
    let { rule: n, onChangeRule: l } = e,
        [a, o] = r.useState(new Set(null == n ? void 0 : null === (t = n.triggerMetadata) || void 0 === t ? void 0 : t.presets)),
        d = r.useMemo(
            () => (e) => {
                l({
                    ...n,
                    triggerMetadata: {
                        ...n.triggerMetadata,
                        presets: e
                    }
                });
            },
            [l, n]
        ),
        u = (e) => {
            let t = new Set(a);
            t.has(e) ? t.delete(e) : t.add(e), o(t), d(Array.from(t));
        };
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(c, {
                preset: s.Ux.PROFANITY,
                toggled: a.has(s.Ux.PROFANITY),
                onToggle: u
            }),
            (0, i.jsx)(c, {
                preset: s.Ux.SLURS,
                toggled: a.has(s.Ux.SLURS),
                onToggle: u
            }),
            (0, i.jsx)(c, {
                preset: s.Ux.SEXUAL_CONTENT,
                toggled: a.has(s.Ux.SEXUAL_CONTENT),
                onToggle: u
            })
        ]
    });
}
