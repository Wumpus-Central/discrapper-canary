n.d(t, {
    default: () => v,
    e: () => C,
    g: () => j
}),
    n(653041),
    n(47120);
var l = n(200651),
    r = n(192379),
    s = n(658722),
    i = n.n(s),
    o = n(442837),
    a = n(481060),
    c = n(37234),
    d = n(565138),
    u = n(703656),
    m = n(430824),
    x = n(771845),
    h = n(267642),
    p = n(981631),
    g = n(388032),
    f = n(612459);
function j(e) {
    let { isTransfer: t = !1, setQuery: n, query: r } = e;
    return (0, l.jsxs)(a.xBx, {
        className: f.selectHeaderContainer,
        children: [
            (0, l.jsx)(a.X6q, {
                className: f.selectHeader,
                variant: 'heading-md/semibold',
                children: t ? g.NW.string(g.t.IB13DQ) : g.NW.string(g.t.cQYceX)
            }),
            (0, l.jsx)(a.E1j, {
                size: a.E1j.Sizes.MEDIUM,
                placeholder: g.NW.string(g.t.vf3ZTU),
                'aria-label': g.NW.string(g.t.vf3ZTU),
                className: f.selectSearch,
                query: r,
                onChange: n,
                onClear: () => n('')
            })
        ]
    });
}
function C(e) {
    let { isTransfer: t = !1, selectedSlotGuilds: n, onClose: r, onSelectGuild: s, query: j } = e,
        C = (0, o.e7)([x.ZP], () => x.ZP.getFlattenedGuildIds()),
        v = (0, o.Wu)([m.Z], () =>
            C.reduce((e, t) => {
                let l = m.Z.getGuild(t);
                return null == l || (null != n && n.some((e) => e.id === t)) || ((j.length <= 0 || i()(j.toLowerCase(), null == l ? void 0 : l.name.toLowerCase())) && e.push(l)), e;
            }, [])
        );
    function b() {
        r(), (0, c.xf)(), (0, u.uL)(p.Z5c.GUILD_DISCOVERY);
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            0 === v.length &&
                (0, l.jsx)('div', {
                    className: f.emptyStateWrapper,
                    children: (0, l.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children:
                            0 === C.length
                                ? g.NW.format(g.t['E3tB6+'], {
                                      publicGuildDirectoryHook: (e, t) =>
                                          (0, l.jsx)(
                                              a.P3F,
                                              {
                                                  onClick: b,
                                                  tag: 'a',
                                                  children: e
                                              },
                                              t
                                          )
                                  })
                                : g.NW.string(g.t.w3GLl5)
                    })
                }),
            v.map((e) =>
                (0, l.jsxs)(
                    a.P3F,
                    {
                        className: f.selectGuild,
                        onClick: () => {
                            s(e);
                        },
                        children: [
                            (0, l.jsx)(d.Z, {
                                className: f.selectGuildIcon,
                                guild: e,
                                size: d.Z.Sizes.SMALL
                            }),
                            (0, l.jsxs)('div', {
                                className: f.selectGuildCopy,
                                children: [
                                    (0, l.jsx)(a.Text, {
                                        className: f.selectGuildName,
                                        variant: 'text-md/normal',
                                        children: e.name
                                    }),
                                    (0, l.jsx)(a.Text, {
                                        className: f.selectGuildLevel,
                                        color: 'text-muted',
                                        variant: 'text-xs/normal',
                                        children: (0, h.nW)(e.premiumTier)
                                    })
                                ]
                            }),
                            (0, l.jsx)(a.Text, {
                                className: f.selectGuildPseudoCta,
                                color: 'always-white',
                                variant: 'text-sm/medium',
                                children: t ? g.NW.string(g.t.dUgaFx) : g.NW.string(g.t.Uj0md3)
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
    let { onClose: t, onSelectGuild: n, transitionState: s } = e,
        [i, o] = r.useState('');
    return (0, l.jsxs)(a.Y0X, {
        transitionState: s,
        className: f.modal,
        size: a.CgR.SMALL,
        children: [
            (0, l.jsx)(j, {
                query: i,
                setQuery: o
            }),
            (0, l.jsx)(a.hzk, {
                className: f.modalContent,
                children: (0, l.jsx)(C, {
                    onClose: t,
                    onSelectGuild: n,
                    query: i
                })
            }),
            (0, l.jsx)(a.olH, {
                className: f.modalCloseButton,
                onClick: t
            })
        ]
    });
}
