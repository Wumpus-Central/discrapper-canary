(t.d(e, { default: () => M }), t(539854), t(642613), t(388685));
var i = t(255367),
    l = t(73800),
    r = t(120356),
    a = t.n(r),
    E = t(442837),
    d = t(952265),
    o = t(755721),
    _ = t(481060),
    u = t(493683),
    s = t(700582),
    c = t(100527),
    C = t(906732),
    A = t(933557),
    T = t(471445),
    S = t(734307),
    I = t(359110),
    L = t(752048),
    D = t(210887),
    N = t(131704),
    h = t(699516),
    U = t(944486),
    P = t(914010),
    g = t(594174),
    R = t(186523),
    f = t(553826),
    G = t(823379),
    O = t(407316),
    m = t(937784),
    p = t(388032),
    Z = t(417254),
    x = t(138715),
    H = t(979770);
function v(n) {
    let { channel: e, ChannelIcon: t, selected: l, onClick: r } = n,
        a = (0, A.ZP)(e);
    return (0, i.jsxs)(_.P3F, {
        className: Z.channelRow,
        onClick: () => r(e.id),
        children: [
            l ? (0, i.jsx)(f.Z, { className: Z.radioIcon }) : (0, i.jsx)(R.Z, { className: Z.radioIcon }),
            (0, i.jsx)(t, {
                className: Z.icon,
                size: 'xs',
                color: 'currentColor'
            }),
            (0, i.jsx)(_.Text, {
                variant: 'text-md/medium',
                color: 'interactive-active',
                children: a
            })
        ]
    });
}
function b(n) {
    let { guildId: e, selectedChannelId: t, onSelectChannelId: r } = n,
        d = (0, E.e7)([U.Z], () => U.Z.getChannelId()),
        { guildChannels: o } = (0, E.cj)([S.Z], () => S.Z.getGuildWithoutChangingGuildActionRows(e)),
        u = l.useMemo(() => {
            let n = [];
            return (
                o.forEachChannel((e) => {
                    !1 !== (0, O.W)(e.id) && ((0, N.r8)(e.type) || (0, N.bw)(e.type)) && n.push(e);
                }),
                n.sort((n, e) => (n.id === d ? -1 : +(e.id === d)))
            );
        }, [o, d]);
    return 0 === u.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)('div', { className: a()(Z.divider, Z.bottomDivider) }),
                  (0, i.jsx)(_.Text, {
                      variant: 'eyebrow',
                      color: 'interactive-normal',
                      className: Z.contentPadding,
                      children: p.intl.string(p.t.SOtDeX)
                  }),
                  (0, i.jsx)(_.aVo, {
                      sections: [u.length],
                      sectionHeight: 0,
                      renderRow: (n) => {
                          let { section: e, row: l } = n;
                          if (e > 0) return null;
                          let a = u[l],
                              E = (0, T.KS)(a);
                          return null == E
                              ? null
                              : (0, i.jsx)(
                                    v,
                                    {
                                        channel: a,
                                        ChannelIcon: E,
                                        selected: t === a.id,
                                        onClick: r
                                    },
                                    a.id
                                );
                      },
                      rowHeight: (n, e) => (n > 0 ? 0 : 56 * (null != u[e])),
                      renderSection: () => null,
                      className: a()(Z.channelList, Z.contentPadding),
                      fade: !0
                  })
              ]
          });
}
function j(n) {
    let { friends: e, searchQuery: t, disabled: r, onShareClip: d } = n,
        u = l.useMemo(() => (0 === t.length ? e : e.filter((n) => n.username.toLowerCase().includes(t.toLowerCase()))), [e, t]),
        c = (0, E.e7)([D.Z], () => D.Z.theme);
    return 0 === u.length
        ? (0, i.jsxs)(_.ubH, {
              theme: c,
              className: Z.emptyStateContainer,
              children: [
                  (0, i.jsx)(_.oxh, {
                      width: 415,
                      height: 75,
                      lightSrc: H,
                      darkSrc: x
                  }),
                  (0, i.jsx)(_.OZU, { note: p.intl.string(p.t['+Zg0lZ']) })
              ]
          })
        : (0, i.jsx)(_.aVo, {
              sections: [u.length],
              sectionHeight: 0,
              renderRow: (n) => {
                  let { section: e, row: t } = n;
                  if (e > 0) return null;
                  let l = u[t],
                      a = u[t].username;
                  return (0, i.jsxs)(
                      'div',
                      {
                          className: Z.userRow,
                          children: [
                              (0, i.jsx)(s.Z, { user: l }),
                              (0, i.jsx)(_.Text, {
                                  className: Z.username,
                                  variant: 'text-md/normal',
                                  children: a
                              }),
                              (0, i.jsx)(o.zx, {
                                  disabled: r,
                                  onClick: () => d(l.id),
                                  className: Z.__invalid_friendShareButton,
                                  look: o.iL.OUTLINED,
                                  size: o.Ph.SMALL,
                                  color: o.Tt.BRAND,
                                  children: (0, i.jsx)(_.Text, {
                                      variant: 'text-sm/medium',
                                      children: p.intl.string(p.t.RDE0SU)
                                  })
                              })
                          ]
                      },
                      l.id
                  );
              },
              rowHeight: (n, e) => (n > 0 ? 0 : 52 * (null != u[e])),
              renderSection: () => null,
              className: a()(Z.friendsList, Z.contentPadding),
              fade: !0
          });
}
function M(n) {
    let { clip: e, editMetadata: t, transitionState: r, onClose: o } = n,
        [s, A] = l.useState(''),
        [T, S] = l.useState(!1),
        [D, N] = l.useState(null),
        U = (0, E.Wu)([h.Z], () => h.Z.getFriendIDs()),
        R = (0, E.Wu)(
            [L.Z, g.default],
            () =>
                U.map((n) => g.default.getUser(n))
                    .filter(G.lm)
                    .sort((n, e) => {
                        var t, i, l, r;
                        return (null != (l = null == (t = L.Z.getUserAffinity(e.id)) ? void 0 : t.communicationProbability) ? l : 0) - (null != (r = null == (i = L.Z.getUserAffinity(n.id)) ? void 0 : i.communicationProbability) ? r : 0);
                    }),
            [U]
        ),
        f = (0, E.e7)([P.Z], () => P.Z.getGuildId()),
        { analyticsLocations: O } = (0, C.ZP)(c.Z.CLIPS_SHARE_MODAL);
    async function x(n) {
        let i = null != n ? n : D;
        if (null != i) {
            S(!0);
            try {
                (await (0, m.e)(e, {
                    channelId: i,
                    editMetadata: t,
                    analyticsLocations: O
                }),
                    null == n && (0, I.Kh)(i),
                    d.pT());
            } catch (n) {
            } finally {
                S(!1);
            }
        }
    }
    async function H(n) {
        let e = await u.Z.openPrivateChannel({ recipientIds: n });
        await x(e);
    }
    return (0, i.jsxs)(_.Y0X, {
        size: _.CgR.SMALL,
        transitionState: r,
        parentComponent: 'ClipsShareModal',
        children: [
            (0, i.jsx)(_.X6q, {
                className: a()(Z.title, Z.contentPadding),
                variant: 'heading-lg/semibold',
                color: 'interactive-active',
                children: p.intl.string(p.t['6EcIlJ'])
            }),
            (0, i.jsx)(_.Text, {
                variant: 'text-md/normal',
                color: 'text-default',
                className: a()(Z.subtitle, Z.contentPadding),
                children: p.intl.string(p.t.Ey7mOT)
            }),
            (0, i.jsx)(_.E1j, {
                className: Z.searchBar,
                query: s,
                onChange: A,
                onClear: function () {
                    A('');
                },
                placeholder: p.intl.string(p.t.CmSHY2)
            }),
            (0, i.jsx)('div', { className: a()(Z.divider, Z.topDivider) }),
            (0, i.jsx)(j, {
                searchQuery: s,
                friends: R,
                onShareClip: H,
                disabled: T
            }),
            null != f &&
                (0, i.jsx)(b, {
                    guildId: f,
                    selectedChannelId: D,
                    onSelectChannelId: N
                }),
            (0, i.jsx)(_.mzw, {
                children: (0, i.jsxs)(_.hE2, {
                    direction: 'horizontal-reverse',
                    children: [
                        (0, i.jsx)(_.zxk, {
                            variant: 'primary',
                            text: p.intl.string(p.t.I8lglZ),
                            disabled: null == D,
                            loading: T,
                            onClick: () => x()
                        }),
                        (0, i.jsx)(_.zxk, {
                            variant: 'secondary',
                            text: p.intl.string(p.t['13/7kZ']),
                            loading: T,
                            onClick: o
                        })
                    ]
                })
            })
        ]
    });
}
