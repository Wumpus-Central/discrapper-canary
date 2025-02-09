n.d(t, { Z: () => j }), n(47120);
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
    h = n(434404),
    g = n(999382),
    x = n(185923),
    p = n(388032),
    _ = n(724255),
    C = n(489007);
let f = { label: '' };
function v(e) {
    let { guild: t, trait: n, index: l, onTraitUpdate: a } = e,
        h = t.id,
        g = r.useCallback(() => {
            a(h, l, { emoji: void 0 });
        }, [h, l, a]),
        p = r.useCallback(
            (e) => (t, n) => {
                a(h, l, { emoji: null != t ? t : void 0 }), n && e();
            },
            [h, l, a]
        ),
        C = r.useMemo(() => {
            let e = n.emoji,
                t =
                    null == e || null == e.name
                        ? null
                        : () => {
                              var t;
                              return (0, i.jsx)(c.Z, {
                                  animated: null !== (t = e.animated) && void 0 !== t && t,
                                  emojiId: e.id,
                                  emojiName: e.name
                              });
                          };
            return (0, i.jsx)(m.Z, {
                className: _.emojiWrapper,
                hasSetEmoji: null != e && null != e.name,
                onClick: g,
                children: (0, i.jsx)(o.yRy, {
                    position: 'bottom',
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(u.Z, {
                            closePopout: t,
                            onSelectEmoji: p(t),
                            pickerIntention: x.Hz.PROFILE
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
        }, [n.emoji, g, p]),
        [f, v] = r.useState(!1),
        N = r.useCallback(() => v(!0), []),
        j = r.useCallback(() => v(!1), []),
        I = r.useCallback(
            (e) => {
                a(h, l, { label: e });
            },
            [h, l, a]
        );
    return (0, i.jsx)(o.oil, {
        value: n.label,
        onChange: I,
        maxLength: 24,
        prefixElement: C,
        className: s()(_.traitContainer, { [_.traitContainerFocused]: f }),
        inputClassName: _.traitInput,
        onFocus: N,
        onBlur: j
    });
}
let N = [0, 1, 2, 3, 4];
function j(e) {
    let { guild: t } = e,
        n = (0, a.e7)([g.Z], () => g.Z.getGuildProfile()),
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
                    h.Z.updateGuildProfile(e, { traits: i });
            },
            [l]
        );
    return (0, i.jsxs)(o.hjN, {
        className: C.section,
        children: [
            (0, i.jsxs)('div', {
                className: C.sectionHeader,
                children: [
                    (0, i.jsx)(o.vwX, { children: p.intl.string(p.t.S6JNrq) }),
                    (0, i.jsx)(o.R94, {
                        type: 'description',
                        children: p.intl.string(p.t.l7Ig5e)
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: _.grid,
                children: N.map((e) => {
                    var n;
                    return (0, i.jsx)(
                        v,
                        {
                            guild: t,
                            trait: null !== (n = l[e]) && void 0 !== n ? n : f,
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
