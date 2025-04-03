l.d(t, {
    default: () => v,
    e: () => C,
    g: () => j
}),
    l(653041),
    l(47120);
var n = l(200651),
    r = l(192379),
    s = l(658722),
    i = l.n(s),
    o = l(442837),
    a = l(481060),
    c = l(37234),
    d = l(565138),
    u = l(703656),
    m = l(430824),
    x = l(771845),
    h = l(267642),
    g = l(981631),
    f = l(388032),
    p = l(544197);
function j(e) {
    let { isTransfer: t = !1, setQuery: l, query: r } = e;
    return (0, n.jsxs)(a.xBx, {
        className: p.selectHeaderContainer,
        children: [
            (0, n.jsx)(a.X6q, {
                className: p.selectHeader,
                variant: 'heading-md/semibold',
                children: t ? f.NW.string(f.t.IB13DQ) : f.NW.string(f.t.cQYceX)
            }),
            (0, n.jsx)(a.E1j, {
                size: a.E1j.Sizes.MEDIUM,
                placeholder: f.NW.string(f.t.vf3ZTU),
                'aria-label': f.NW.string(f.t.vf3ZTU),
                className: p.selectSearch,
                query: r,
                onChange: l,
                onClear: () => l('')
            })
        ]
    });
}
function C(e) {
    let { isTransfer: t = !1, selectedSlotGuilds: l, onClose: r, onSelectGuild: s, query: j } = e,
        C = (0, o.e7)([x.ZP], () => x.ZP.getFlattenedGuildIds()),
        v = (0, o.Wu)([m.Z], () =>
            C.reduce((e, t) => {
                let n = m.Z.getGuild(t);
                return null == n || (null != l && l.some((e) => e.id === t)) || ((j.length <= 0 || i()(j.toLowerCase(), null == n ? void 0 : n.name.toLowerCase())) && e.push(n)), e;
            }, [])
        );
    function N() {
        r(), (0, c.xf)(), (0, u.uL)(g.Z5c.GUILD_DISCOVERY);
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            0 === v.length &&
                (0, n.jsx)('div', {
                    className: p.emptyStateWrapper,
                    children: (0, n.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children:
                            0 === C.length
                                ? f.NW.format(f.t['E3tB6+'], {
                                      publicGuildDirectoryHook: (e, t) =>
                                          (0, n.jsx)(
                                              a.P3F,
                                              {
                                                  onClick: N,
                                                  tag: 'a',
                                                  children: e
                                              },
                                              t
                                          )
                                  })
                                : f.NW.string(f.t.w3GLl5)
                    })
                }),
            v.map((e) =>
                (0, n.jsxs)(
                    a.P3F,
                    {
                        className: p.selectGuild,
                        onClick: () => {
                            s(e);
                        },
                        children: [
                            (0, n.jsx)(d.Z, {
                                className: p.selectGuildIcon,
                                guild: e,
                                size: d.Z.Sizes.SMALL
                            }),
                            (0, n.jsxs)('div', {
                                className: p.selectGuildCopy,
                                children: [
                                    (0, n.jsx)(a.Text, {
                                        className: p.selectGuildName,
                                        variant: 'text-md/normal',
                                        children: e.name
                                    }),
                                    (0, n.jsx)(a.Text, {
                                        className: p.selectGuildLevel,
                                        color: 'text-muted',
                                        variant: 'text-xs/normal',
                                        children: (0, h.nW)(e.premiumTier)
                                    })
                                ]
                            }),
                            (0, n.jsx)(a.Text, {
                                className: p.selectGuildPseudoCta,
                                color: 'always-white',
                                variant: 'text-sm/medium',
                                children: t ? f.NW.string(f.t.dUgaFx) : f.NW.string(f.t.Uj0md3)
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
    let { onClose: t, onSelectGuild: l, transitionState: s } = e,
        [i, o] = r.useState('');
    return (0, n.jsxs)(a.Y0X, {
        transitionState: s,
        className: p.modal,
        size: a.CgR.SMALL,
        children: [
            (0, n.jsx)(j, {
                query: i,
                setQuery: o
            }),
            (0, n.jsx)(a.hzk, {
                className: p.modalContent,
                children: (0, n.jsx)(C, {
                    onClose: t,
                    onSelectGuild: l,
                    query: i
                })
            }),
            (0, n.jsx)(a.olH, {
                className: p.modalCloseButton,
                onClick: t
            })
        ]
    });
}
