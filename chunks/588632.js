n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var l = n(200651),
    o = n(192379),
    a = n(658722),
    r = n.n(a),
    i = n(692547),
    s = n(481060),
    c = n(596454),
    d = n(285888),
    u = n(388032),
    m = n(52609);
function h(e) {
    return null != e && (null != e.id || null != e.name);
}
let v = {
    ...d.v,
    control: (e, t) => {
        let { isDisabled: n, menuIsOpen: l } = t;
        return {
            ...e,
            backgroundColor: 'var(--input-background)',
            borderColor: 'var(--input-background)',
            opacity: n ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: l ? '8px 8px 0 0' : '8px',
            minHeight: 40,
            transition: 'border 0.15s ease',
            cursor: n ? 'not-allowed' : void 0,
            pointerEvents: n ? 'none' : void 0,
            '&:hover': { borderColor: 'var(--input-background)' }
        };
    },
    valueContainer: (e) => ({
        ...e,
        padding: '8px',
        display: 'flex',
        flexDirection: 'row',
        gap: '8px',
        cursor: 'text'
    }),
    indicatorsContainer: (e) => ({
        ...e,
        alignItems: 'flex-start',
        paddingTop: 4
    }),
    option: (e, t) => {
        let { isSelected: n, isFocused: l } = t;
        return {
            ...e,
            ...(n
                ? {
                      backgroundColor: 'var(--background-modifier-selected)',
                      color: 'var(--interactive-active)'
                  }
                : l
                  ? {
                        backgroundColor: 'var(--background-modifier-hover)',
                        color: 'var(--interactive-hover)'
                    }
                  : {
                        backgroundColor: 'transparent',
                        color: 'var(--interactive-normal)'
                    }),
            cursor: 'pointer',
            display: 'flex',
            padding: 12,
            alignItems: 'center',
            minHeight: 40,
            '&:active': {
                backgroundColor: 'var(--background-modifier-selected)',
                color: 'var(--interactive-active)'
            },
            '&:hover [data-hover=true]': { opacity: 1 }
        };
    }
};
function x(e) {
    let { options: t, value: n, onChange: a, canBeNew: x, memberCounts: g } = e,
        p = (e) => {
            e.preventDefault(), e.stopPropagation();
        },
        f = o.useCallback(
            (e) => {
                var o, r, i, d;
                return (0, l.jsxs)('div', {
                    className: m.selectValuePill,
                    onMouseDown: p,
                    children: [
                        h(e.emoji) &&
                            (0, l.jsx)(c.Z, {
                                emojiId: null === (o = e.emoji) || void 0 === o ? void 0 : o.id,
                                emojiName: null === (r = e.emoji) || void 0 === r ? void 0 : r.name,
                                animated: null !== (d = null === (i = e.emoji) || void 0 === i ? void 0 : i.animated) && void 0 !== d && d
                            }),
                        (0, l.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: e.title
                        }),
                        (0, l.jsx)(s.Clickable, {
                            className: m.selectValuePillClose,
                            onClick: () => {
                                a(t.filter((t) => n.includes(t.id) && t.id !== e.id));
                            },
                            children: (0, l.jsx)(s.XSmallIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: m.selectValuePillCloseIcon
                            })
                        })
                    ]
                });
            },
            [a, t, n]
        ),
        j = o.useCallback(
            (e) => {
                var t, n, o, a;
                let r = null == g || null == e.roleIds ? 0 : Math.max(...e.roleIds.map((e) => g[e])),
                    d = null != g && r > 0;
                return (0, l.jsxs)('div', {
                    className: m.selectOption,
                    children: [
                        (0, l.jsxs)('div', {
                            className: m.selectOptionTitle,
                            children: [
                                h(e.emoji) &&
                                    (0, l.jsx)(c.Z, {
                                        emojiId: null === (t = e.emoji) || void 0 === t ? void 0 : t.id,
                                        emojiName: null === (n = e.emoji) || void 0 === n ? void 0 : n.name,
                                        animated: null !== (a = null === (o = e.emoji) || void 0 === o ? void 0 : o.animated) && void 0 !== a && a
                                    }),
                                (0, l.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    children: e.title
                                })
                            ]
                        }),
                        x &&
                            e.isUnseen &&
                            (0, l.jsx)(s.TextBadge, {
                                color: i.Z.unsafe_rawColors.BRAND_260.css,
                                text: u.intl.string(u.t.y2b7CA),
                                className: m.optionNewBadge
                            }),
                        d &&
                            (0, l.jsx)('div', {
                                className: m.selectOptionMemberCount,
                                'data-hover': !0,
                                children: (0, l.jsx)(s.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'always-white',
                                    children: u.intl.format(u.t.EgKsZG, { memberCount: r })
                                })
                            })
                    ]
                });
            },
            [x, g]
        ),
        C = o.useCallback((e, t) => {
            let { data: n } = e;
            return 0 === t.length || r()(t.toLowerCase(), n.title.toLowerCase());
        }, []);
    return (0, l.jsx)(d.Z, {
        styleOverrides: v,
        clearable: !1,
        isMulti: !0,
        options: t,
        onChange: a,
        value: n,
        closeMenuOnSelect: !1,
        multiValueRenderer: f,
        optionRenderer: j,
        filterOption: C
    });
}
