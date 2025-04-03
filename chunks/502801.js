t.d(e, { default: () => M }), t(653041), t(230036), t(47120);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    E = t.n(r),
    a = t(442837),
    d = t(952265),
    _ = t(481060),
    o = t(493683),
    u = t(700582),
    s = t(100527),
    c = t(906732),
    C = t(933557),
    A = t(471445),
    T = t(734307),
    S = t(359110),
    I = t(814443),
    L = t(210887),
    N = t(131704),
    D = t(699516),
    h = t(944486),
    U = t(914010),
    P = t(594174),
    R = t(186523),
    f = t(553826),
    g = t(823379),
    G = t(407316),
    O = t(937784),
    m = t(388032),
    Z = t(417254),
    H = t(138715),
    x = t(979770);
function p(n) {
    let { channel: e, ChannelIcon: t, selected: i, onClick: r } = n,
        E = (0, C.ZP)(e);
    return (0, l.jsxs)(_.P3F, {
        className: Z.channelRow,
        onClick: () => r(e.id),
        children: [
            i ? (0, l.jsx)(f.Z, { className: Z.radioIcon }) : (0, l.jsx)(R.Z, { className: Z.radioIcon }),
            (0, l.jsx)(t, {
                className: Z.icon,
                size: 'xs',
                color: 'currentColor'
            }),
            (0, l.jsx)(_.Text, {
                variant: 'text-md/medium',
                color: 'interactive-active',
                children: E
            })
        ]
    });
}
function v(n) {
    let { guildId: e, selectedChannelId: t, onSelectChannelId: r } = n,
        d = (0, a.e7)([h.Z], () => h.Z.getChannelId()),
        { guildChannels: o } = (0, a.cj)([T.Z], () => T.Z.getGuildWithoutChangingGuildActionRows(e)),
        u = i.useMemo(() => {
            let n = [];
            return (
                o.forEachChannel((e) => {
                    !1 !== (0, G.W)(e.id) && ((0, N.r8)(e.type) || (0, N.bw)(e.type)) && n.push(e);
                }),
                n.sort((n, e) => (n.id === d ? -1 : +(e.id === d)))
            );
        }, [o, d]);
    return 0 === u.length
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)('div', { className: E()(Z.divider, Z.bottomDivider) }),
                  (0, l.jsx)(_.Text, {
                      variant: 'eyebrow',
                      color: 'interactive-normal',
                      className: Z.contentPadding,
                      children: m.NW.string(m.t.SOtDeX)
                  }),
                  (0, l.jsx)(_.aVo, {
                      sections: [u.length],
                      sectionHeight: 0,
                      renderRow: (n) => {
                          let { section: e, row: i } = n;
                          if (e > 0) return null;
                          let E = u[i],
                              a = (0, A.KS)(E);
                          return null == a
                              ? null
                              : (0, l.jsx)(
                                    p,
                                    {
                                        channel: E,
                                        ChannelIcon: a,
                                        selected: t === E.id,
                                        onClick: r
                                    },
                                    E.id
                                );
                      },
                      rowHeight: (n, e) => (n > 0 ? 0 : 56 * (null != u[e])),
                      renderSection: () => null,
                      className: E()(Z.channelList, Z.contentPadding),
                      fade: !0
                  })
              ]
          });
}
function b(n) {
    let { friends: e, searchQuery: t, disabled: r, onShareClip: d } = n,
        o = i.useMemo(() => (0 === t.length ? e : e.filter((n) => n.username.toLowerCase().includes(t.toLowerCase()))), [e, t]),
        s = (0, a.e7)([L.Z], () => L.Z.theme);
    return 0 === o.length
        ? (0, l.jsxs)(_.ubH, {
              theme: s,
              className: Z.emptyStateContainer,
              children: [
                  (0, l.jsx)(_.oxh, {
                      width: 415,
                      height: 75,
                      lightSrc: x,
                      darkSrc: H
                  }),
                  (0, l.jsx)(_.OZU, { note: m.NW.string(m.t['+Zg0lZ']) })
              ]
          })
        : (0, l.jsx)(_.aVo, {
              sections: [o.length],
              sectionHeight: 0,
              renderRow: (n) => {
                  let { section: e, row: t } = n;
                  if (e > 0) return null;
                  let i = o[t],
                      E = o[t].username;
                  return (0, l.jsxs)(
                      'div',
                      {
                          className: Z.userRow,
                          children: [
                              (0, l.jsx)(u.Z, { user: i }),
                              (0, l.jsx)(_.Text, {
                                  className: Z.username,
                                  variant: 'text-md/normal',
                                  children: E
                              }),
                              (0, l.jsx)(_.zxk, {
                                  disabled: r,
                                  onClick: () => d(i.id),
                                  className: Z.__invalid_friendShareButton,
                                  look: _.iLD.OUTLINED,
                                  size: _.PhG.SMALL,
                                  color: _.Ttl.BRAND,
                                  children: (0, l.jsx)(_.Text, {
                                      variant: 'text-sm/medium',
                                      children: m.NW.string(m.t.RDE0SU)
                                  })
                              })
                          ]
                      },
                      i.id
                  );
              },
              rowHeight: (n, e) => (n > 0 ? 0 : 52 * (null != o[e])),
              renderSection: () => null,
              className: E()(Z.friendsList, Z.contentPadding),
              fade: !0
          });
}
function M(n) {
    let { clip: e, editMetadata: t, transitionState: r, onClose: u } = n,
        [C, A] = i.useState(''),
        [T, L] = i.useState(!1),
        [N, h] = i.useState(null),
        R = (0, a.Wu)([D.Z], () => D.Z.getFriendIDs()),
        f = (0, a.Wu)(
            [I.Z, P.default],
            () =>
                R.map((n) => P.default.getUser(n))
                    .filter(g.lm)
                    .sort((n, e) => {
                        var t, l, i, r;
                        return (null != (i = null == (t = I.Z.getUserAffinity(e.id)) ? void 0 : t.affinity) ? i : 0) - (null != (r = null == (l = I.Z.getUserAffinity(n.id)) ? void 0 : l.affinity) ? r : 0);
                    }),
            [R]
        ),
        G = (0, a.e7)([U.Z], () => U.Z.getGuildId()),
        { analyticsLocations: H } = (0, c.ZP)(s.Z.CLIPS_SHARE_MODAL);
    async function x(n) {
        let l = null != n ? n : N;
        if (null != l) {
            L(!0);
            try {
                await (0, O.e)(e, {
                    channelId: l,
                    editMetadata: t,
                    analyticsLocations: H
                }),
                    null == n && (0, S.Kh)(l),
                    d.pT();
            } catch (n) {
            } finally {
                L(!1);
            }
        }
    }
    async function p(n) {
        let e = await o.Z.openPrivateChannel(n);
        await x(e);
    }
    return (0, l.jsxs)(_.Y0X, {
        size: _.CgR.SMALL,
        transitionState: r,
        children: [
            (0, l.jsx)(_.X6q, {
                className: E()(Z.title, Z.contentPadding),
                variant: 'heading-lg/semibold',
                color: 'interactive-active',
                children: m.NW.string(m.t['6EcIlJ'])
            }),
            (0, l.jsx)(_.Text, {
                variant: 'text-md/normal',
                color: 'text-normal',
                className: E()(Z.subtitle, Z.contentPadding),
                children: m.NW.string(m.t.Ey7mOT)
            }),
            (0, l.jsx)(_.E1j, {
                className: Z.searchBar,
                query: C,
                onChange: A,
                size: _.E1j.Sizes.MEDIUM,
                onClear: function () {
                    A('');
                },
                placeholder: m.NW.string(m.t.CmSHY2)
            }),
            (0, l.jsx)('div', { className: E()(Z.divider, Z.topDivider) }),
            (0, l.jsx)(b, {
                searchQuery: C,
                friends: f,
                onShareClip: p,
                disabled: T
            }),
            null != G &&
                (0, l.jsx)(v, {
                    guildId: G,
                    selectedChannelId: N,
                    onSelectChannelId: h
                }),
            (0, l.jsxs)(_.mzw, {
                children: [
                    (0, l.jsx)(_.zxk, {
                        disabled: null == N,
                        submitting: T,
                        color: _.zxk.Colors.BRAND,
                        onClick: () => x(),
                        children: m.NW.string(m.t.I8lglZ)
                    }),
                    (0, l.jsx)(_.zxk, {
                        submitting: T,
                        look: _.iLD.LINK,
                        onClick: u,
                        color: _.Ttl.PRIMARY,
                        children: m.NW.string(m.t['13/7kZ'])
                    })
                ]
            })
        ]
    });
}
