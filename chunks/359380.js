n.d(t, { Z: () => h }), n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    s = n(214715),
    a = n(18100),
    o = n(308083),
    c = n(388032),
    d = n(165809);
let u = (e) => {
    let { title: t, icon: n, availableTraits: a, selectedTraits: c, onUpdateTraits: u } = e,
        m = r.useCallback(
            (e) => {
                let t = new Set(c);
                t.delete(e), u(t);
            },
            [u, c]
        ),
        h = r.useCallback(
            (e) => {
                if (c.size === o.c4) return;
                let t = new Set(c);
                t.add(e), u(t);
            },
            [u, c]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Text, {
                className: d.interestsCategoryTitle,
                variant: 'text-xs/semibold',
                color: 'text-muted',
                children: t
            }),
            (0, i.jsx)('div', {
                className: d.utilityTraits,
                children: a.map((e) => {
                    let t = c.has(e);
                    return (0, i.jsx)(
                        s.Z,
                        {
                            variant: 'text-xs/semibold',
                            color: 'interactive-normal',
                            icon: n,
                            text: e,
                            selected: t,
                            onClick: t ? m : h
                        },
                        e
                    );
                })
            })
        ]
    });
};
function m(e) {
    let { guildId: t, onUpdateTraits: n, progress: s, availableTraits: m, hidePreview: h = !1 } = e,
        g = r.useMemo(() => {
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
        x = r.useMemo(() => {
            var e;
            return null !== (e = null != m ? m : null == s ? void 0 : s.interests) && void 0 !== e ? e : new Set();
        }, [m, null == s ? void 0 : s.interests]),
        p = r.useMemo(() => Array.from(x), [x]),
        _ = r.useMemo(() => p.filter((e) => o.gh.has(e)), [p]),
        C = r.useCallback(
            (e) => {
                n(new Set([...p.filter((e) => !o.gh.has(e)), ...e]));
            },
            [n, p]
        ),
        f = r.useMemo(() => p.filter((e) => o.WZ.has(e) || o.gh.has(e)), [p]),
        v = r.useCallback(
            (e) => {
                let t = new Set(x);
                t.delete(e), n(t);
            },
            [n, x]
        );
    return (0, i.jsxs)('div', {
        className: d.content,
        children: [
            (0, i.jsxs)('div', {
                className: d.mainPanelContainer,
                children: [
                    (0, i.jsx)(u, {
                        title: c.intl.string(c.t.SXqVqq),
                        icon: l.tBG,
                        availableTraits: o.jK,
                        selectedTraits: x,
                        onUpdateTraits: n
                    }),
                    (0, i.jsx)(u, {
                        title: c.intl.string(c.t['7uZoaG']),
                        icon: l.tBG,
                        availableTraits: o.CT,
                        selectedTraits: x,
                        onUpdateTraits: n
                    }),
                    (0, i.jsx)(l.Text, {
                        className: d.interestsCategoryTitle,
                        variant: 'text-xs/semibold',
                        color: 'text-muted',
                        children: c.intl.string(c.t.rU5dUV)
                    }),
                    (0, i.jsx)('div', {
                        className: d.languageSelect,
                        children: (0, i.jsx)(l.VcW, {
                            wrapperClassName: d.input,
                            options: g,
                            value: _,
                            onChange: C,
                            placeholder: c.intl.string(c.t.GA91en),
                            multi: !0
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: d.fixedWidthSidebar,
                children:
                    null != s &&
                    p.length > 0 &&
                    !h &&
                    (0, i.jsx)(a.Z, {
                        guildId: t,
                        progress: s,
                        traitsToHighlight: f,
                        maskDescription: !0,
                        onTraitClick: v
                    })
            })
        ]
    });
}
let h = (e) => {
    let { guildId: t, title: n, description: r, onUpdateTraits: s, progress: a, traits: o, optional: u = !1, hidePreview: h = !1 } = e;
    return (0, i.jsxs)('div', {
        className: d.slideContent,
        children: [
            u &&
                (0, i.jsx)(l.Text, {
                    variant: 'text-sm/medium',
                    color: 'header-secondary',
                    className: d.optionalTag,
                    children: c.intl.string(c.t['vWEL6+'])
                }),
            (0, i.jsx)(l.X6q, {
                variant: 'heading-xxl/medium',
                className: d.title,
                children: n
            }),
            (0, i.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: d.subtitle,
                children: r
            }),
            (0, i.jsx)(m, {
                guildId: t,
                onUpdateTraits: s,
                progress: a,
                availableTraits: o,
                hidePreview: h
            })
        ]
    });
};
