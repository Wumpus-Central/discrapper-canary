n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(214715),
    s = n(18100),
    o = n(308083),
    c = n(388032),
    d = n(240938);
let u = (e) => {
    let { title: t, icon: n, availableTraits: s, selectedTraits: c, onUpdateTraits: u } = e,
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
                children: s.map((e) => {
                    let t = c.has(e);
                    return (0, i.jsx)(
                        a.Z,
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
    let { guildId: t, onUpdateTraits: n, progress: a, availableTraits: m, hidePreview: h = !1 } = e,
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
            return null !== (e = null != m ? m : null == a ? void 0 : a.interests) && void 0 !== e ? e : new Set();
        }, [m, null == a ? void 0 : a.interests]),
        p = r.useMemo(() => Array.from(x), [x]),
        f = r.useMemo(() => p.filter((e) => o.gh.has(e)), [p]),
        C = r.useCallback(
            (e) => {
                n(new Set([...p.filter((e) => !o.gh.has(e)), ...e]));
            },
            [n, p]
        ),
        v = r.useMemo(() => p.filter((e) => o.WZ.has(e) || o.gh.has(e)), [p]),
        _ = r.useCallback(
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
                        icon: l.UserIcon,
                        availableTraits: o.jK,
                        selectedTraits: x,
                        onUpdateTraits: n
                    }),
                    (0, i.jsx)(u, {
                        title: c.intl.string(c.t['7uZoaG']),
                        icon: l.UserIcon,
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
                        children: (0, i.jsx)(l.SearchableSelect, {
                            wrapperClassName: d.input,
                            options: g,
                            value: f,
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
                    null != a &&
                    p.length > 0 &&
                    !h &&
                    (0, i.jsx)(s.Z, {
                        guildId: t,
                        progress: a,
                        traitsToHighlight: v,
                        maskDescription: !0,
                        onTraitClick: _
                    })
            })
        ]
    });
}
t.Z = (e) => {
    let { guildId: t, title: n, description: r, onUpdateTraits: a, progress: s, traits: o, optional: u = !1, hidePreview: h = !1 } = e;
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
            (0, i.jsx)(l.Heading, {
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
                onUpdateTraits: a,
                progress: s,
                availableTraits: o,
                hidePreview: h
            })
        ]
    });
};
