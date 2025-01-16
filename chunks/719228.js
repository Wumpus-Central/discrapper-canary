n.r(l),
    n.d(l, {
        GuildSelectModalBody: function () {
            return S;
        },
        GuildSelectModalHeader: function () {
            return p;
        },
        default: function () {
            return j;
        }
    }),
    n(724458),
    n(653041),
    n(47120);
var t = n(200651),
    s = n(192379),
    r = n(658722),
    i = n.n(r),
    o = n(442837),
    a = n(481060),
    d = n(37234),
    u = n(565138),
    c = n(703656),
    m = n(430824),
    x = n(771845),
    C = n(267642),
    h = n(981631),
    g = n(388032),
    f = n(362333);
function p(e) {
    let { isTransfer: l = !1, setQuery: n, query: s } = e;
    return (0, t.jsxs)(a.ModalHeader, {
        className: f.selectHeaderContainer,
        children: [
            (0, t.jsx)(a.Heading, {
                className: f.selectHeader,
                variant: 'heading-md/semibold',
                children: l ? g.intl.string(g.t.IB13DQ) : g.intl.string(g.t.cQYceX)
            }),
            (0, t.jsx)(a.SearchBar, {
                size: a.SearchBar.Sizes.MEDIUM,
                placeholder: g.intl.string(g.t.vf3ZTU),
                'aria-label': g.intl.string(g.t.vf3ZTU),
                className: f.selectSearch,
                query: s,
                onChange: n,
                onClear: () => n('')
            })
        ]
    });
}
function S(e) {
    let { isTransfer: l = !1, selectedSlotGuilds: n, onClose: s, onSelectGuild: r, query: p } = e,
        S = (0, o.e7)([x.ZP], () => x.ZP.getFlattenedGuildIds()),
        j = (0, o.Wu)([m.Z], () =>
            S.reduce((e, l) => {
                let t = m.Z.getGuild(l);
                return null == t || (null != n && n.some((e) => e.id === l)) ? e : ((p.length <= 0 || i()(p.toLowerCase(), null == t ? void 0 : t.name.toLowerCase())) && e.push(t), e);
            }, [])
        );
    function v() {
        s(), (0, d.xf)(), (0, c.uL)(h.Z5c.GUILD_DISCOVERY);
    }
    return (0, t.jsxs)(t.Fragment, {
        children: [
            0 === j.length &&
                (0, t.jsx)('div', {
                    className: f.emptyStateWrapper,
                    children: (0, t.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children:
                            0 === S.length
                                ? g.intl.format(g.t['E3tB6+'], {
                                      publicGuildDirectoryHook: (e, l) =>
                                          (0, t.jsx)(
                                              a.Clickable,
                                              {
                                                  onClick: v,
                                                  tag: 'a',
                                                  children: e
                                              },
                                              l
                                          )
                                  })
                                : g.intl.string(g.t.w3GLl5)
                    })
                }),
            j.map((e) =>
                (0, t.jsxs)(
                    a.Clickable,
                    {
                        className: f.selectGuild,
                        onClick: () => {
                            r(e);
                        },
                        children: [
                            (0, t.jsx)(u.Z, {
                                className: f.selectGuildIcon,
                                guild: e,
                                size: u.Z.Sizes.SMALL
                            }),
                            (0, t.jsxs)('div', {
                                className: f.selectGuildCopy,
                                children: [
                                    (0, t.jsx)(a.Text, {
                                        className: f.selectGuildName,
                                        variant: 'text-md/normal',
                                        children: e.name
                                    }),
                                    (0, t.jsx)(a.Text, {
                                        className: f.selectGuildLevel,
                                        color: 'text-muted',
                                        variant: 'text-xs/normal',
                                        children: (0, C.nW)(e.premiumTier)
                                    })
                                ]
                            }),
                            (0, t.jsx)(a.Text, {
                                className: f.selectGuildPseudoCta,
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
function j(e) {
    let { onClose: l, onSelectGuild: n, transitionState: r } = e,
        [i, o] = s.useState('');
    return (0, t.jsxs)(a.ModalRoot, {
        transitionState: r,
        className: f.modal,
        size: a.ModalSize.SMALL,
        children: [
            (0, t.jsx)(p, {
                query: i,
                setQuery: o
            }),
            (0, t.jsx)(a.ModalContent, {
                className: f.modalContent,
                children: (0, t.jsx)(S, {
                    onClose: l,
                    onSelectGuild: n,
                    query: i
                })
            }),
            (0, t.jsx)(a.ModalCloseButton, {
                className: f.modalCloseButton,
                onClick: l
            })
        ]
    });
}
