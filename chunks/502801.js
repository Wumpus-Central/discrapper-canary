t.r(e),
    t.d(e, {
        default: function () {
            return M;
        }
    }),
    t(653041),
    t(47120);
var i = t(200651),
    l = t(192379),
    a = t(120356),
    r = t.n(a),
    E = t(442837),
    o = t(952265),
    d = t(481060),
    u = t(493683),
    _ = t(700582),
    s = t(100527),
    c = t(906732),
    C = t(933557),
    S = t(471445),
    A = t(734307),
    T = t(359110),
    I = t(814443),
    L = t(210887),
    D = t(131704),
    N = t(699516),
    h = t(944486),
    U = t(914010),
    P = t(594174),
    f = t(186523),
    R = t(553826),
    g = t(823379),
    G = t(407316),
    O = t(937784),
    m = t(388032),
    v = t(881861),
    p = t(138715),
    H = t(979770);
function Z(n) {
    let { channel: e, ChannelIcon: t, selected: l, onClick: a } = n,
        r = (0, C.ZP)(e);
    return (0, i.jsxs)(d.Clickable, {
        className: v.channelRow,
        onClick: () => a(e.id),
        children: [
            l ? (0, i.jsx)(R.Z, { className: v.radioIcon }) : (0, i.jsx)(f.Z, { className: v.radioIcon }),
            (0, i.jsx)(t, {
                className: v.icon,
                size: 'xs',
                color: 'currentColor'
            }),
            (0, i.jsx)(d.Text, {
                variant: 'text-md/medium',
                color: 'interactive-active',
                children: r
            })
        ]
    });
}
function x(n) {
    let { guildId: e, selectedChannelId: t, onSelectChannelId: a } = n,
        o = (0, E.e7)([h.Z], () => h.Z.getChannelId()),
        { guildChannels: u } = (0, E.cj)([A.Z], () => A.Z.getGuildWithoutChangingGuildActionRows(e)),
        _ = l.useMemo(() => {
            let n = [];
            return (
                u.forEachChannel((e) => {
                    !1 !== (0, G.W)(e.id) && ((0, D.r8)(e.type) || (0, D.bw)(e.type)) && n.push(e);
                }),
                n.sort((n, e) => (n.id === o ? -1 : e.id === o ? 1 : 0))
            );
        }, [u, o]);
    return 0 === _.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)('div', { className: r()(v.divider, v.bottomDivider) }),
                  (0, i.jsx)(d.Text, {
                      variant: 'eyebrow',
                      color: 'interactive-normal',
                      className: v.contentPadding,
                      children: m.intl.string(m.t.SOtDeX)
                  }),
                  (0, i.jsx)(d.List, {
                      sections: [_.length],
                      sectionHeight: 0,
                      renderRow: (n) => {
                          let { section: e, row: l } = n;
                          if (e > 0) return null;
                          let r = _[l],
                              E = (0, S.KS)(r);
                          return null == E
                              ? null
                              : (0, i.jsx)(
                                    Z,
                                    {
                                        channel: r,
                                        ChannelIcon: E,
                                        selected: t === r.id,
                                        onClick: a
                                    },
                                    r.id
                                );
                      },
                      rowHeight: (n, e) => (n > 0 ? 0 : null != _[e] ? 56 : 0),
                      renderSection: () => null,
                      className: r()(v.channelList, v.contentPadding),
                      fade: !0
                  })
              ]
          });
}
function b(n) {
    let { friends: e, searchQuery: t, disabled: a, onShareClip: o } = n,
        u = l.useMemo(() => (0 === t.length ? e : e.filter((n) => n.username.toLowerCase().includes(t.toLowerCase()))), [e, t]),
        s = (0, E.e7)([L.Z], () => L.Z.theme);
    return 0 === u.length
        ? (0, i.jsxs)(d.EmptyState, {
              theme: s,
              className: v.emptyStateContainer,
              children: [
                  (0, i.jsx)(d.EmptyStateImage, {
                      width: 415,
                      height: 75,
                      lightSrc: H,
                      darkSrc: p
                  }),
                  (0, i.jsx)(d.EmptyStateText, { note: m.intl.string(m.t['+Zg0lZ']) })
              ]
          })
        : (0, i.jsx)(d.List, {
              sections: [u.length],
              sectionHeight: 0,
              renderRow: (n) => {
                  let { section: e, row: t } = n;
                  if (e > 0) return null;
                  let l = u[t],
                      r = u[t].username;
                  return (0, i.jsxs)(
                      'div',
                      {
                          className: v.userRow,
                          children: [
                              (0, i.jsx)(_.Z, { user: l }),
                              (0, i.jsx)(d.Text, {
                                  className: v.username,
                                  variant: 'text-md/normal',
                                  children: r
                              }),
                              (0, i.jsx)(d.Button, {
                                  disabled: a,
                                  onClick: () => o(l.id),
                                  className: v.__invalid_friendShareButton,
                                  look: d.ButtonLooks.OUTLINED,
                                  size: d.ButtonSizes.SMALL,
                                  color: d.ButtonColors.BRAND,
                                  children: (0, i.jsx)(d.Text, {
                                      variant: 'text-sm/medium',
                                      children: m.intl.string(m.t.RDE0SU)
                                  })
                              })
                          ]
                      },
                      l.id
                  );
              },
              rowHeight: (n, e) => (n > 0 ? 0 : null != u[e] ? 52 : 0),
              renderSection: () => null,
              className: r()(v.friendsList, v.contentPadding),
              fade: !0
          });
}
function M(n) {
    let { clip: e, editMetadata: t, transitionState: a, onClose: _ } = n,
        [C, S] = l.useState(''),
        [A, L] = l.useState(!1),
        [D, h] = l.useState(null),
        f = (0, E.Wu)([N.Z], () => N.Z.getFriendIDs()),
        R = (0, E.Wu)(
            [I.Z, P.default],
            () =>
                f
                    .map((n) => P.default.getUser(n))
                    .filter(g.lm)
                    .sort((n, e) => {
                        var t, i, l, a;
                        return (null !== (l = null === (t = I.Z.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== l ? l : 0) - (null !== (a = null === (i = I.Z.getUserAffinity(n.id)) || void 0 === i ? void 0 : i.affinity) && void 0 !== a ? a : 0);
                    }),
            [f]
        ),
        G = (0, E.e7)([U.Z], () => U.Z.getGuildId()),
        { analyticsLocations: p } = (0, c.ZP)(s.Z.CLIPS_SHARE_MODAL);
    async function H(n) {
        let i = null != n ? n : D;
        if (null != i) {
            L(!0);
            try {
                await (0, O.e)(e, {
                    channelId: i,
                    editMetadata: t,
                    analyticsLocations: p
                }),
                    null == n && (0, T.Kh)(i),
                    o.pT();
            } catch (n) {
            } finally {
                L(!1);
            }
        }
    }
    async function Z(n) {
        let e = await u.Z.openPrivateChannel(n);
        await H(e);
    }
    return (0, i.jsxs)(d.ModalRoot, {
        size: d.ModalSize.SMALL,
        transitionState: a,
        children: [
            (0, i.jsx)(d.Heading, {
                className: r()(v.title, v.contentPadding),
                variant: 'heading-lg/semibold',
                color: 'interactive-active',
                children: m.intl.string(m.t['6EcIlJ'])
            }),
            (0, i.jsx)(d.Text, {
                variant: 'text-md/normal',
                color: 'text-normal',
                className: r()(v.subtitle, v.contentPadding),
                children: m.intl.string(m.t.Ey7mOT)
            }),
            (0, i.jsx)(d.SearchBar, {
                className: v.searchBar,
                query: C,
                onChange: S,
                size: d.SearchBar.Sizes.MEDIUM,
                onClear: function () {
                    S('');
                },
                placeholder: m.intl.string(m.t.CmSHY2)
            }),
            (0, i.jsx)('div', { className: r()(v.divider, v.topDivider) }),
            (0, i.jsx)(b, {
                searchQuery: C,
                friends: R,
                onShareClip: Z,
                disabled: A
            }),
            null != G &&
                (0, i.jsx)(x, {
                    guildId: G,
                    selectedChannelId: D,
                    onSelectChannelId: h
                }),
            (0, i.jsxs)(d.ModalFooter, {
                children: [
                    (0, i.jsx)(d.Button, {
                        disabled: null == D,
                        submitting: A,
                        color: d.Button.Colors.BRAND,
                        onClick: () => H(),
                        children: m.intl.string(m.t.I8lglZ)
                    }),
                    (0, i.jsx)(d.Button, {
                        submitting: A,
                        look: d.ButtonLooks.LINK,
                        onClick: _,
                        color: d.ButtonColors.PRIMARY,
                        children: m.intl.string(m.t['13/7kZ'])
                    })
                ]
            })
        ]
    });
}
