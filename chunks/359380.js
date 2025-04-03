n.d(t, { Z: () => g }), n(47120), n(653041), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(214715),
    l = n(18100),
    o = n(308083),
    c = n(388032),
    d = n(130116);
let u = (e) => {
    let { title: t, icon: n, availableTraits: l, selectedTraits: c, onUpdateTraits: u } = e,
        m = i.useCallback(
            (e) => {
                let t = new Set(c);
                t.delete(e), u(t);
            },
            [u, c]
        ),
        g = i.useCallback(
            (e) => {
                if (c.size === o.c4) return;
                let t = new Set(c);
                t.add(e), u(t);
            },
            [u, c]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.Text, {
                className: d.interestsCategoryTitle,
                variant: 'text-xs/semibold',
                color: 'text-muted',
                children: t
            }),
            (0, r.jsx)('div', {
                className: d.utilityTraits,
                children: l.map((e) => {
                    let t = c.has(e);
                    return (0, r.jsx)(
                        a.Z,
                        {
                            variant: 'text-xs/semibold',
                            color: 'interactive-normal',
                            icon: n,
                            text: e,
                            selected: t,
                            onClick: t ? m : g
                        },
                        e
                    );
                })
            })
        ]
    });
};
function m(e) {
    let { guildId: t, onUpdateTraits: n, progress: a, availableTraits: m, hidePreview: g = !1 } = e,
        p = i.useMemo(() => {
            let e = [];
            return (
                o.gh.forEach((t) =>
                    e.push({
                        value: t,
                        label: t
                    })
                ),
                e
            );
        }, []),
        h = i.useMemo(() => {
            var e;
            return null != (e = null != m ? m : null == a ? void 0 : a.interests) ? e : new Set();
        }, [m, null == a ? void 0 : a.interests]),
        f = i.useMemo(() => Array.from(h), [h]),
        b = i.useMemo(() => f.filter((e) => o.gh.has(e)), [f]),
        x = i.useCallback(
            (e) => {
                n(new Set([...f.filter((e) => !o.gh.has(e)), ...e]));
            },
            [n, f]
        ),
        j = i.useMemo(() => f.filter((e) => o.WZ.has(e) || o.gh.has(e)), [f]),
        N = i.useCallback(
            (e) => {
                let t = new Set(h);
                t.delete(e), n(t);
            },
            [n, h]
        );
    return (0, r.jsxs)('div', {
        className: d.content,
        children: [
            (0, r.jsxs)('div', {
                className: d.mainPanelContainer,
                children: [
                    (0, r.jsx)(u, {
                        title: c.NW.string(c.t.SXqVqq),
                        icon: s.tBG,
                        availableTraits: o.jK,
                        selectedTraits: h,
                        onUpdateTraits: n
                    }),
                    (0, r.jsx)(u, {
                        title: c.NW.string(c.t['7uZoaG']),
                        icon: s.tBG,
                        availableTraits: o.CT,
                        selectedTraits: h,
                        onUpdateTraits: n
                    }),
                    (0, r.jsx)(s.Text, {
                        className: d.interestsCategoryTitle,
                        variant: 'text-xs/semibold',
                        color: 'text-muted',
                        children: c.NW.string(c.t.rU5dUV)
                    }),
                    (0, r.jsx)('div', {
                        className: d.languageSelect,
                        children: (0, r.jsx)(s.VcW, {
                            wrapperClassName: d.input,
                            options: p,
                            value: b,
                            onChange: x,
                            placeholder: c.NW.string(c.t.GA91en),
                            multi: !0
                        })
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: d.fixedWidthSidebar,
                children:
                    null != a &&
                    f.length > 0 &&
                    !g &&
                    (0, r.jsx)(l.Z, {
                        guildId: t,
                        progress: a,
                        traitsToHighlight: j,
                        maskDescription: !0,
                        onTraitClick: N
                    })
            })
        ]
    });
}
let g = (e) => {
    let { guildId: t, title: n, description: i, onUpdateTraits: a, progress: l, traits: o, optional: u = !1, hidePreview: g = !1 } = e;
    return (0, r.jsxs)('div', {
        className: d.slideContent,
        children: [
            u &&
                (0, r.jsx)(s.Text, {
                    variant: 'text-sm/medium',
                    color: 'header-secondary',
                    className: d.optionalTag,
                    children: c.NW.string(c.t['vWEL6+'])
                }),
            (0, r.jsx)(s.X6q, {
                variant: 'heading-xxl/medium',
                className: d.title,
                children: n
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: d.subtitle,
                children: i
            }),
            (0, r.jsx)(m, {
                guildId: t,
                onUpdateTraits: a,
                progress: l,
                availableTraits: o,
                hidePreview: g
            })
        ]
    });
};
