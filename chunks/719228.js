n.d(l, {
    default: () => v,
    e: () => f,
    g: () => p
}),
    n(724458),
    n(653041),
    n(47120);
var t = n(200651),
    s = n(192379),
    i = n(658722),
    r = n.n(i),
    a = n(442837),
    o = n(481060),
    d = n(37234),
    c = n(565138),
    u = n(703656),
    m = n(430824),
    x = n(771845),
    h = n(267642),
    C = n(981631),
    g = n(388032),
    j = n(771738);
function p(e) {
    let { isTransfer: l = !1, setQuery: n, query: s } = e;
    return (0, t.jsxs)(o.xBx, {
        className: j.selectHeaderContainer,
        children: [
            (0, t.jsx)(o.X6q, {
                className: j.selectHeader,
                variant: 'heading-md/semibold',
                children: l ? g.intl.string(g.t.IB13DQ) : g.intl.string(g.t.cQYceX)
            }),
            (0, t.jsx)(o.E1j, {
                size: o.E1j.Sizes.MEDIUM,
                placeholder: g.intl.string(g.t.vf3ZTU),
                'aria-label': g.intl.string(g.t.vf3ZTU),
                className: j.selectSearch,
                query: s,
                onChange: n,
                onClear: () => n('')
            })
        ]
    });
}
function f(e) {
    let { isTransfer: l = !1, selectedSlotGuilds: n, onClose: s, onSelectGuild: i, query: p } = e,
        f = (0, a.e7)([x.ZP], () => x.ZP.getFlattenedGuildIds()),
        v = (0, a.Wu)([m.Z], () =>
            f.reduce((e, l) => {
                let t = m.Z.getGuild(l);
                return null == t || (null != n && n.some((e) => e.id === l)) || ((p.length <= 0 || r()(p.toLowerCase(), null == t ? void 0 : t.name.toLowerCase())) && e.push(t)), e;
            }, [])
        );
    function S() {
        s(), (0, d.xf)(), (0, u.uL)(C.Z5c.GUILD_DISCOVERY);
    }
    return (0, t.jsxs)(t.Fragment, {
        children: [
            0 === v.length &&
                (0, t.jsx)('div', {
                    className: j.emptyStateWrapper,
                    children: (0, t.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children:
                            0 === f.length
                                ? g.intl.format(g.t['E3tB6+'], {
                                      publicGuildDirectoryHook: (e, l) =>
                                          (0, t.jsx)(
                                              o.P3F,
                                              {
                                                  onClick: S,
                                                  tag: 'a',
                                                  children: e
                                              },
                                              l
                                          )
                                  })
                                : g.intl.string(g.t.w3GLl5)
                    })
                }),
            v.map((e) =>
                (0, t.jsxs)(
                    o.P3F,
                    {
                        className: j.selectGuild,
                        onClick: () => {
                            i(e);
                        },
                        children: [
                            (0, t.jsx)(c.Z, {
                                className: j.selectGuildIcon,
                                guild: e,
                                size: c.Z.Sizes.SMALL
                            }),
                            (0, t.jsxs)('div', {
                                className: j.selectGuildCopy,
                                children: [
                                    (0, t.jsx)(o.Text, {
                                        className: j.selectGuildName,
                                        variant: 'text-md/normal',
                                        children: e.name
                                    }),
                                    (0, t.jsx)(o.Text, {
                                        className: j.selectGuildLevel,
                                        color: 'text-muted',
                                        variant: 'text-xs/normal',
                                        children: (0, h.nW)(e.premiumTier)
                                    })
                                ]
                            }),
                            (0, t.jsx)(o.Text, {
                                className: j.selectGuildPseudoCta,
                                color: 'always-white',
                                variant: 'text-sm/medium',
                                children: l ? g.intl.string(g.t.dUgaFx) : g.intl.string(g.t.Uj0md3)
                            })
                        ]
                    },
                    e.id
                )
            )
        ]
    });
}
function v(e) {
    let { onClose: l, onSelectGuild: n, transitionState: i } = e,
        [r, a] = s.useState('');
    return (0, t.jsxs)(o.Y0X, {
        transitionState: i,
        className: j.modal,
        size: o.CgR.SMALL,
        children: [
            (0, t.jsx)(p, {
                query: r,
                setQuery: a
            }),
            (0, t.jsx)(o.hzk, {
                className: j.modalContent,
                children: (0, t.jsx)(f, {
                    onClose: l,
                    onSelectGuild: n,
                    query: r
                })
            }),
            (0, t.jsx)(o.olH, {
                className: j.modalCloseButton,
                onClick: l
            })
        ]
    });
}
