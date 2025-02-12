t.d(e, { default: () => M }), t(653041), t(47120);
var i = t(200651),
    l = t(192379),
    r = t(120356),
    E = t.n(r),
    a = t(442837),
    d = t(952265),
    o = t(481060),
    _ = t(493683),
    u = t(700582),
    s = t(100527),
    c = t(906732),
    C = t(933557),
    A = t(471445),
    T = t(734307),
    S = t(359110),
    I = t(814443),
    L = t(210887),
    D = t(131704),
    N = t(699516),
    h = t(944486),
    U = t(914010),
    P = t(594174),
    R = t(186523),
    f = t(553826),
    g = t(823379),
    G = t(407316),
    O = t(937784),
    m = t(388032),
    v = t(949574),
    Z = t(138715),
    H = t(979770);
function x(n) {
    let { channel: e, ChannelIcon: t, selected: l, onClick: r } = n,
        E = (0, C.ZP)(e);
    return (0, i.jsxs)(o.P3F, {
        className: v.channelRow,
        onClick: () => r(e.id),
        children: [
            l ? (0, i.jsx)(f.Z, { className: v.radioIcon }) : (0, i.jsx)(R.Z, { className: v.radioIcon }),
            (0, i.jsx)(t, {
                className: v.icon,
                size: 'xs',
                color: 'currentColor'
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-md/medium',
                color: 'interactive-active',
                children: E
            })
        ]
    });
}
function p(n) {
    let { guildId: e, selectedChannelId: t, onSelectChannelId: r } = n,
        d = (0, a.e7)([h.Z], () => h.Z.getChannelId()),
        { guildChannels: _ } = (0, a.cj)([T.Z], () => T.Z.getGuildWithoutChangingGuildActionRows(e)),
        u = l.useMemo(() => {
            let n = [];
            return (
                _.forEachChannel((e) => {
                    !1 !== (0, G.W)(e.id) && ((0, D.r8)(e.type) || (0, D.bw)(e.type)) && n.push(e);
                }),
                n.sort((n, e) => (n.id === d ? -1 : e.id === d ? 1 : 0))
            );
        }, [_, d]);
    return 0 === u.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)('div', { className: E()(v.divider, v.bottomDivider) }),
                  (0, i.jsx)(o.Text, {
                      variant: 'eyebrow',
                      color: 'interactive-normal',
                      className: v.contentPadding,
                      children: m.intl.string(m.t.SOtDeX)
                  }),
                  (0, i.jsx)(o.aVo, {
                      sections: [u.length],
                      sectionHeight: 0,
                      renderRow: (n) => {
                          let { section: e, row: l } = n;
                          if (e > 0) return null;
                          let E = u[l],
                              a = (0, A.KS)(E);
                          return null == a
                              ? null
                              : (0, i.jsx)(
                                    x,
                                    {
                                        channel: E,
                                        ChannelIcon: a,
                                        selected: t === E.id,
                                        onClick: r
                                    },
                                    E.id
                                );
                      },
                      rowHeight: (n, e) => (n > 0 ? 0 : null != u[e] ? 56 : 0),
                      renderSection: () => null,
                      className: E()(v.channelList, v.contentPadding),
                      fade: !0
                  })
              ]
          });
}
function b(n) {
    let { friends: e, searchQuery: t, disabled: r, onShareClip: d } = n,
        _ = l.useMemo(() => (0 === t.length ? e : e.filter((n) => n.username.toLowerCase().includes(t.toLowerCase()))), [e, t]),
        s = (0, a.e7)([L.Z], () => L.Z.theme);
    return 0 === _.length
        ? (0, i.jsxs)(o.ubH, {
              theme: s,
              className: v.emptyStateContainer,
              children: [
                  (0, i.jsx)(o.oxh, {
                      width: 415,
                      height: 75,
                      lightSrc: H,
                      darkSrc: Z
                  }),
                  (0, i.jsx)(o.OZU, { note: m.intl.string(m.t['+Zg0lZ']) })
              ]
          })
        : (0, i.jsx)(o.aVo, {
              sections: [_.length],
              sectionHeight: 0,
              renderRow: (n) => {
                  let { section: e, row: t } = n;
                  if (e > 0) return null;
                  let l = _[t],
                      E = _[t].username;
                  return (0, i.jsxs)(
                      'div',
                      {
                          className: v.userRow,
                          children: [
                              (0, i.jsx)(u.Z, { user: l }),
                              (0, i.jsx)(o.Text, {
                                  className: v.username,
                                  variant: 'text-md/normal',
                                  children: E
                              }),
                              (0, i.jsx)(o.zxk, {
                                  disabled: r,
                                  onClick: () => d(l.id),
                                  className: v.__invalid_friendShareButton,
                                  look: o.iLD.OUTLINED,
                                  size: o.PhG.SMALL,
                                  color: o.Ttl.BRAND,
                                  children: (0, i.jsx)(o.Text, {
                                      variant: 'text-sm/medium',
                                      children: m.intl.string(m.t.RDE0SU)
                                  })
                              })
                          ]
                      },
                      l.id
                  );
              },
              rowHeight: (n, e) => (n > 0 ? 0 : null != _[e] ? 52 : 0),
              renderSection: () => null,
              className: E()(v.friendsList, v.contentPadding),
              fade: !0
          });
}
function M(n) {
    let { clip: e, editMetadata: t, transitionState: r, onClose: u } = n,
        [C, A] = l.useState(''),
        [T, L] = l.useState(!1),
        [D, h] = l.useState(null),
        R = (0, a.Wu)([N.Z], () => N.Z.getFriendIDs()),
        f = (0, a.Wu)(
            [I.Z, P.default],
            () =>
                R.map((n) => P.default.getUser(n))
                    .filter(g.lm)
                    .sort((n, e) => {
                        var t, i, l, r;
                        return (null !== (l = null === (t = I.Z.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== l ? l : 0) - (null !== (r = null === (i = I.Z.getUserAffinity(n.id)) || void 0 === i ? void 0 : i.affinity) && void 0 !== r ? r : 0);
                    }),
            [R]
        ),
        G = (0, a.e7)([U.Z], () => U.Z.getGuildId()),
        { analyticsLocations: Z } = (0, c.ZP)(s.Z.CLIPS_SHARE_MODAL);
    async function H(n) {
        let i = null != n ? n : D;
        if (null != i) {
            L(!0);
            try {
                await (0, O.e)(e, {
                    channelId: i,
                    editMetadata: t,
                    analyticsLocations: Z
                }),
                    null == n && (0, S.Kh)(i),
                    d.pT();
            } catch (n) {
            } finally {
                L(!1);
            }
        }
    }
    async function x(n) {
        let e = await _.Z.openPrivateChannel(n);
        await H(e);
    }
    return (0, i.jsxs)(o.Y0X, {
        size: o.CgR.SMALL,
        transitionState: r,
        children: [
            (0, i.jsx)(o.X6q, {
                className: E()(v.title, v.contentPadding),
                variant: 'heading-lg/semibold',
                color: 'interactive-active',
                children: m.intl.string(m.t['6EcIlJ'])
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'text-normal',
                className: E()(v.subtitle, v.contentPadding),
                children: m.intl.string(m.t.Ey7mOT)
            }),
            (0, i.jsx)(o.E1j, {
                className: v.searchBar,
                query: C,
                onChange: A,
                size: o.E1j.Sizes.MEDIUM,
                onClear: function () {
                    A('');
                },
                placeholder: m.intl.string(m.t.CmSHY2)
            }),
            (0, i.jsx)('div', { className: E()(v.divider, v.topDivider) }),
            (0, i.jsx)(b, {
                searchQuery: C,
                friends: f,
                onShareClip: x,
                disabled: T
            }),
            null != G &&
                (0, i.jsx)(p, {
                    guildId: G,
                    selectedChannelId: D,
                    onSelectChannelId: h
                }),
            (0, i.jsxs)(o.mzw, {
                children: [
                    (0, i.jsx)(o.zxk, {
                        disabled: null == D,
                        submitting: T,
                        color: o.zxk.Colors.BRAND,
                        onClick: () => H(),
                        children: m.intl.string(m.t.I8lglZ)
                    }),
                    (0, i.jsx)(o.zxk, {
                        submitting: T,
                        look: o.iLD.LINK,
                        onClick: u,
                        color: o.Ttl.PRIMARY,
                        children: m.intl.string(m.t['13/7kZ'])
                    })
                ]
            })
        ]
    });
}
