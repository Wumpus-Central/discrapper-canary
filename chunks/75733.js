n.d(t, { Z: () => I }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(596454),
    d = n(318766),
    u = n(907040),
    m = n(273039),
    h = n(176354),
    g = n(434404),
    x = n(999382),
    p = n(185923),
    _ = n(388032),
    C = n(73312),
    f = n(750609);
let v = { label: '' };
function N(e) {
    let { guild: t, trait: n, index: l, onTraitUpdate: a } = e,
        g = t.id,
        x = r.useCallback(() => {
            a(g, l, { emoji: void 0 });
        }, [g, l, a]),
        _ = r.useCallback(
            (e) => (t, n) => {
                a(g, l, { emoji: null != t ? t : void 0 }), n && e();
            },
            [g, l, a]
        ),
        f = r.useMemo(() => {
            let e = n.emoji,
                t =
                    null == e || null == e.name
                        ? null
                        : () => {
                              var t;
                              let n = h.ZP.isCustomEmoji(e) ? e.name : e.surrogates;
                              return (0, i.jsx)(c.Z, {
                                  animated: null !== (t = e.animated) && void 0 !== t && t,
                                  emojiId: e.id,
                                  emojiName: n
                              });
                          };
            return (0, i.jsx)(m.Z, {
                className: C.emojiWrapper,
                hasSetEmoji: null != e && null != e.name,
                onClick: x,
                children: (0, i.jsx)(o.yRy, {
                    position: 'bottom',
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(u.Z, {
                            closePopout: t,
                            onSelectEmoji: _(t),
                            pickerIntention: p.Hz.PROFILE
                        });
                    },
                    children: (e, n) => {
                        let { isShown: r } = n;
                        return (0, i.jsx)(d.Z, {
                            ...e,
                            tabIndex: 0,
                            active: r,
                            renderButtonContents: t
                        });
                    }
                })
            });
        }, [n.emoji, x, _]),
        [v, N] = r.useState(!1),
        j = r.useCallback(() => N(!0), []),
        I = r.useCallback(() => N(!1), []),
        E = r.useCallback(
            (e) => {
                a(g, l, { label: e });
            },
            [g, l, a]
        );
    return (0, i.jsx)(o.oil, {
        value: n.label,
        onChange: E,
        maxLength: 24,
        prefixElement: f,
        className: s()(C.traitContainer, { [C.traitContainerFocused]: v }),
        inputClassName: C.traitInput,
        onFocus: j,
        onBlur: I
    });
}
let j = [0, 1, 2, 3, 4];
function I(e) {
    let { guild: t } = e,
        n = (0, a.e7)([x.Z], () => x.Z.getGuildProfile()),
        l = r.useMemo(() => {
            var e;
            return null !== (e = null == n ? void 0 : n.traits) && void 0 !== e ? e : [];
        }, [n]),
        s = r.useCallback(
            (e, t, n) => {
                let i = [...l];
                (i[t] = {
                    ...l[t],
                    ...n
                }),
                    g.Z.updateGuildProfile(e, { traits: i });
            },
            [l]
        );
    return (0, i.jsxs)(o.hjN, {
        className: f.section,
        children: [
            (0, i.jsxs)('div', {
                className: f.sectionHeader,
                children: [
                    (0, i.jsx)(o.vwX, { children: _.intl.string(_.t.S6JNrq) }),
                    (0, i.jsx)(o.R94, {
                        type: 'description',
                        children: _.intl.string(_.t.l7Ig5e)
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: C.grid,
                children: j.map((e) => {
                    var n;
                    return (0, i.jsx)(
                        N,
                        {
                            guild: t,
                            trait: null !== (n = l[e]) && void 0 !== n ? n : v,
                            index: e,
                            onTraitUpdate: s
                        },
                        'trait-'.concat(e)
                    );
                })
            })
        ]
    });
}
