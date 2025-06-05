t.d(e, { default: () => M }), t(539854), t(642613), t(388685);
var l = t(255367),
    i = t(73800),
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
    p = t(417254),
    Z = t(138715),
    H = t(979770);
function x(n) {
    let { channel: e, ChannelIcon: t, selected: i, onClick: r } = n,
        E = (0, C.ZP)(e);
    return (0, l.jsxs)(o.P3F, {
        className: p.channelRow,
        onClick: () => r(e.id),
        children: [
            i ? (0, l.jsx)(f.Z, { className: p.radioIcon }) : (0, l.jsx)(R.Z, { className: p.radioIcon }),
            (0, l.jsx)(t, {
                className: p.icon,
                size: 'xs',
                color: 'currentColor'
            }),
            (0, l.jsx)(o.Text, {
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
        { guildChannels: _ } = (0, a.cj)([T.Z], () => T.Z.getGuildWithoutChangingGuildActionRows(e)),
        u = i.useMemo(() => {
            let n = [];
            return (
                _.forEachChannel((e) => {
                    !1 !== (0, G.W)(e.id) && ((0, D.r8)(e.type) || (0, D.bw)(e.type)) && n.push(e);
                }),
                n.sort((n, e) => (n.id === d ? -1 : +(e.id === d)))
            );
        }, [_, d]);
    return 0 === u.length
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)('div', { className: E()(p.divider, p.bottomDivider) }),
                  (0, l.jsx)(o.Text, {
                      variant: 'eyebrow',
                      color: 'interactive-normal',
                      className: p.contentPadding,
                      children: m.intl.string(m.t.SOtDeX)
                  }),
                  (0, l.jsx)(o.aVo, {
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
                      rowHeight: (n, e) => (n > 0 ? 0 : 56 * (null != u[e])),
                      renderSection: () => null,
                      className: E()(p.channelList, p.contentPadding),
                      fade: !0
                  })
              ]
          });
}
function b(n) {
    let { friends: e, searchQuery: t, disabled: r, onShareClip: d } = n,
        _ = i.useMemo(() => (0 === t.length ? e : e.filter((n) => n.username.toLowerCase().includes(t.toLowerCase()))), [e, t]),
        s = (0, a.e7)([L.Z], () => L.Z.theme);
    return 0 === _.length
        ? (0, l.jsxs)(o.ubH, {
              theme: s,
              className: p.emptyStateContainer,
              children: [
                  (0, l.jsx)(o.oxh, {
                      width: 415,
                      height: 75,
                      lightSrc: H,
                      darkSrc: Z
                  }),
                  (0, l.jsx)(o.OZU, { note: m.intl.string(m.t['+Zg0lZ']) })
              ]
          })
        : (0, l.jsx)(o.aVo, {
              sections: [_.length],
              sectionHeight: 0,
              renderRow: (n) => {
                  let { section: e, row: t } = n;
                  if (e > 0) return null;
                  let i = _[t],
                      E = _[t].username;
                  return (0, l.jsxs)(
                      'div',
                      {
                          className: p.userRow,
                          children: [
                              (0, l.jsx)(u.Z, { user: i }),
                              (0, l.jsx)(o.Text, {
                                  className: p.username,
                                  variant: 'text-md/normal',
                                  children: E
                              }),
                              (0, l.jsx)(o.zxk, {
                                  disabled: r,
                                  onClick: () => d(i.id),
                                  className: p.__invalid_friendShareButton,
                                  look: o.iLD.OUTLINED,
                                  size: o.PhG.SMALL,
                                  color: o.Ttl.BRAND,
                                  children: (0, l.jsx)(o.Text, {
                                      variant: 'text-sm/medium',
                                      children: m.intl.string(m.t.RDE0SU)
                                  })
                              })
                          ]
                      },
                      i.id
                  );
              },
              rowHeight: (n, e) => (n > 0 ? 0 : 52 * (null != _[e])),
              renderSection: () => null,
              className: E()(p.friendsList, p.contentPadding),
              fade: !0
          });
}
function M(n) {
    let { clip: e, editMetadata: t, transitionState: r, onClose: u } = n,
        [C, A] = i.useState(''),
        [T, L] = i.useState(!1),
        [D, h] = i.useState(null),
        R = (0, a.Wu)([N.Z], () => N.Z.getFriendIDs()),
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
        { analyticsLocations: Z } = (0, c.ZP)(s.Z.CLIPS_SHARE_MODAL);
    async function H(n) {
        let l = null != n ? n : D;
        if (null != l) {
            L(!0);
            try {
                await (0, O.e)(e, {
                    channelId: l,
                    editMetadata: t,
                    analyticsLocations: Z
                }),
                    null == n && (0, S.Kh)(l),
                    d.pT();
            } catch (n) {
            } finally {
                L(!1);
            }
        }
    }
    async function x(n) {
        let e = await _.Z.openPrivateChannel({ recipientIds: n });
        await H(e);
    }
    return (0, l.jsxs)(o.Y0X, {
        size: o.CgR.SMALL,
        transitionState: r,
        parentComponent: 'ClipsShareModal',
        children: [
            (0, l.jsx)(o.X6q, {
                className: E()(p.title, p.contentPadding),
                variant: 'heading-lg/semibold',
                color: 'interactive-active',
                children: m.intl.string(m.t['6EcIlJ'])
            }),
            (0, l.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'text-normal',
                className: E()(p.subtitle, p.contentPadding),
                children: m.intl.string(m.t.Ey7mOT)
            }),
            (0, l.jsx)(o.E1j, {
                className: p.searchBar,
                query: C,
                onChange: A,
                size: o.E1j.Sizes.MEDIUM,
                onClear: function () {
                    A('');
                },
                placeholder: m.intl.string(m.t.CmSHY2)
            }),
            (0, l.jsx)('div', { className: E()(p.divider, p.topDivider) }),
            (0, l.jsx)(b, {
                searchQuery: C,
                friends: f,
                onShareClip: x,
                disabled: T
            }),
            null != G &&
                (0, l.jsx)(v, {
                    guildId: G,
                    selectedChannelId: D,
                    onSelectChannelId: h
                }),
            (0, l.jsxs)(o.mzw, {
                children: [
                    (0, l.jsx)(o.zxk, {
                        disabled: null == D,
                        submitting: T,
                        color: o.zxk.Colors.BRAND,
                        onClick: () => H(),
                        children: m.intl.string(m.t.I8lglZ)
                    }),
                    (0, l.jsx)(o.zxk, {
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
