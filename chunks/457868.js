n.d(t, { Z: () => et }), n(47120), n(978209);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n.n(a),
    c = n(91192),
    u = n(924826),
    d = n(873546),
    p = n(442837),
    h = n(481060),
    f = n(239091),
    m = n(144144),
    g = n(607070),
    b = n(100527),
    _ = n(906732),
    C = n(82295),
    y = n(91218),
    x = n(623624),
    v = n(518738),
    j = n(850020),
    O = n(965376),
    E = n(159299),
    N = n(823415),
    I = n(754047),
    P = n(184301),
    S = n(347475),
    Z = n(199902),
    T = n(271383),
    A = n(430824),
    w = n(158776),
    R = n(885110),
    k = n(111583),
    M = n(594174),
    L = n(499033),
    D = n(626135),
    W = n(585483),
    U = n(700785),
    B = n(51144),
    H = n(998502),
    F = n(276264),
    G = n(981631),
    V = n(388032),
    z = n(688826),
    Y = n(11847);
function q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function K(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let X = H.ZP.getEnableHardwareAcceleration(),
    Q = 44 + F.x,
    J = i.memo(function (e) {
        let { channel: t, sectionId: l, userId: o, guildOwnerId: a } = e,
            s = (0, p.e7)([k.Z], () => k.Z.isTyping(t.id, o)),
            u = (0, p.e7)([T.ZP], () => T.ZP.getMember(t.guild_id, o)),
            g = (0, p.e7)(
                [A.Z],
                () => {
                    var e;
                    return (null == u ? void 0 : u.colorRoleId) != null ? (null == (e = A.Z.getRole(t.guild_id, u.colorRoleId)) ? void 0 : e.name) : void 0;
                },
                [t.guild_id, u]
            ),
            b = (0, p.e7)([M.default], () => M.default.getUser(o)),
            _ = (0, p.e7)([M.default], () => M.default.getCurrentUser()),
            C = (null == b ? void 0 : b.id) === (null == _ ? void 0 : _.id),
            y = (0, p.e7)([w.Z, R.Z], () => (C ? R.Z.getStatus() : w.Z.getStatus(o, t.guild_id))),
            v = (0, p.e7)([w.Z], () => w.Z.isMobileOnline(o)),
            O = (0, p.e7)([w.Z, R.Z], () => (C ? R.Z.getActivities() : w.Z.getActivities(o, t.guild_id))),
            L = (0, p.e7)([Z.Z], () => Z.Z.getAnyStreamForUser(o)),
            D = (0, c.JA)(o),
            U = (0, p.e7)([E.Z], () => E.Z.canUserViewChannel(t.id, l, o)),
            H = (null == b ? void 0 : b.id) != null && b.id === a,
            z = i.useCallback(
                (e) => {
                    null != b &&
                        (0, f.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('70675')]).then(n.bind(n, 654663));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    K(q({}, n), {
                                        user: b,
                                        guildId: t.guild_id,
                                        channel: t
                                    })
                                );
                        });
                },
                [b, t]
            ),
            Y = i.useCallback(() => {
                if (null == b) return;
                let e = '@'.concat(B.ZP.getUserTag(b, { decoration: 'never' })),
                    n = '<@'.concat(b.id, '>');
                W.S.dispatchToLastSubscribed(G.CkL.INSERT_TEXT, {
                    plainText: e,
                    rawText: n
                }),
                    m.Z.startTyping(t.id);
            }, [b, t]),
            Q = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, x.f)({
                            guildId: t.guild_id,
                            location: {
                                section: G.jXE.THREAD_MEMBER_LIST,
                                object: G.qAy.BOOST_GEM_ICON
                            }
                        });
                },
                [t.guild_id]
            ),
            J = (0, j.K)({
                location: 'ThreadMembers',
                user: b
            }),
            $ = (e) =>
                (0, P.Z)(b, {
                    guildId: t.guild_id,
                    channelId: t.id,
                    abortSignal: e
                }),
            [ee, et] = i.useState(!1),
            en = (0, N.nT)({ location: 'PrivateChannelRecipients' }),
            {
                showPopoutFromHover: er,
                onRequestClose: ei,
                onMouseEnter: el,
                onMouseLeave: eo
            } = (0, I.Z)({
                shouldShowPopoutOnHover: en,
                handlePreload: $
            });
        if (null == b) return null;
        let ea = null == u ? void 0 : u.premiumSince;
        return en
            ? (0, r.jsx)('div', {
                  onMouseEnter: el,
                  onMouseLeave: eo,
                  children: (0, r.jsx)(h.yRy, {
                      preload: er || ee ? void 0 : $,
                      renderPopout: (e) =>
                          (0, r.jsx)(
                              S.Z,
                              K(q({}, e), {
                                  userId: b.id,
                                  guildId: t.guild_id,
                                  channelId: t.id
                              })
                          ),
                      position: d.tq ? 'window_center' : 'left',
                      spacing: 16,
                      onShiftClick: Y,
                      clickTrap: ee,
                      shouldShow: ee || er,
                      onRequestClose: () => {
                          null == ei || ei(), et(!1);
                      },
                      children: (e, n) => {
                          var { onClick: i } = e,
                              l = (function (e, t) {
                                  if (null == e) return {};
                                  var n,
                                      r,
                                      i = (function (e, t) {
                                          if (null == e) return {};
                                          var n,
                                              r,
                                              i = {},
                                              l = Object.keys(e);
                                          for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                          return i;
                                      })(e, t);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(e);
                                      for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                  }
                                  return i;
                              })(e, ['onClick']),
                              { isShown: o } = n;
                          return (0, r.jsx)(
                              F.Z,
                              q(
                                  {
                                      onContextMenu: z,
                                      shouldAnimateStatus: X,
                                      user: b,
                                      currentUser: _,
                                      nick: null == u ? void 0 : u.nick,
                                      status: y,
                                      activities: O,
                                      colorString: null == u ? void 0 : u.colorString,
                                      colorRoleName: g,
                                      isTyping: s,
                                      channel: t,
                                      guildId: t.guild_id,
                                      isMobile: v,
                                      selected: o && !er,
                                      applicationStream: L,
                                      premiumSince: null == ea ? null : new Date(ea),
                                      onClickPremiumGuildIcon: Q,
                                      itemProps: D,
                                      lostPermissionTooltipText: U ? void 0 : V.NW.string(V.t['/QcoT0']),
                                      isOwner: H,
                                      nameplate: J,
                                      onClick: () => et((e) => !e)
                                  },
                                  l
                              )
                          );
                      }
                  })
              })
            : (0, r.jsx)(h.yRy, {
                  preload: $,
                  renderPopout: (e) =>
                      (0, r.jsx)(
                          S.Z,
                          K(q({}, e), {
                              userId: b.id,
                              guildId: t.guild_id,
                              channelId: t.id
                          })
                      ),
                  position: d.tq ? 'window_center' : 'left',
                  spacing: 16,
                  onShiftClick: Y,
                  clickTrap: !0,
                  children: (e, n) => {
                      let { isShown: i } = n;
                      return (0, r.jsx)(
                          F.Z,
                          q(
                              {
                                  onContextMenu: z,
                                  shouldAnimateStatus: X,
                                  user: b,
                                  currentUser: _,
                                  nick: null == u ? void 0 : u.nick,
                                  status: y,
                                  activities: O,
                                  colorString: null == u ? void 0 : u.colorString,
                                  colorStrings: null == u ? void 0 : u.colorStrings,
                                  colorRoleName: g,
                                  isTyping: s,
                                  channel: t,
                                  guildId: t.guild_id,
                                  isMobile: v,
                                  selected: i,
                                  applicationStream: L,
                                  premiumSince: null == ea ? null : new Date(ea),
                                  onClickPremiumGuildIcon: Q,
                                  itemProps: D,
                                  lostPermissionTooltipText: U ? void 0 : V.NW.string(V.t['/QcoT0']),
                                  isOwner: H,
                                  nameplate: J
                              },
                              e
                          )
                      );
                  }
              });
    }),
    $ = i.memo(function (e) {
        let { id: t, label: n, count: i, guildId: l } = e,
            o = (0, v.p9)({
                roleId: t,
                guildId: l,
                size: 16
            });
        return t === G.Skl.UNKNOWN
            ? (0, r.jsx)('div', {
                  className: Y.membersGroup,
                  children: (0, r.jsx)('div', { className: Y.memberGroupsPlaceholder })
              })
            : (0, r.jsxs)(C.Z, {
                  className: Y.membersGroup,
                  'aria-label': V.NW.formatToPlainString(V.t.UaqbkZ, {
                      title: n,
                      count: i
                  }),
                  children: [
                      null != o ? (0, r.jsx)(y.Z, q({ className: Y.roleIcon }, o)) : null,
                      (0, r.jsxs)('span', {
                          'aria-hidden': !0,
                          children: [n, ' \u2014 ', i]
                      })
                  ]
              });
    }),
    ee = i.memo(function (e) {
        let { channel: t } = e;
        return t.type === G.d4z.PRIVATE_THREAD
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)('div', { className: z.divider }),
                      (0, r.jsxs)(h.Text, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: z.private,
                          children: [
                              (0, r.jsx)(h.mBM, {
                                  size: 'xxs',
                                  color: 'currentColor'
                              }),
                              '\xA0',
                              V.NW.string(V.t.BTLTAg)
                          ]
                      }),
                      (0, r.jsx)(h.Text, {
                          variant: 'text-sm/normal',
                          color: 'header-secondary',
                          className: z.instructions,
                          children: V.NW.string(V.t.Hsd8hI)
                      })
                  ]
              })
            : null;
    });
function et(e) {
    let { channel: t, guild: n } = e,
        l = 'members-'.concat(t.id),
        { analyticsLocations: a } = (0, _.ZP)(b.Z.MEMBER_LIST),
        d = (0, O.D)(t.id, n),
        f = d.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: m, listRef: C } = (function (e, t) {
            let n = (0, p.e7)([g.Z], () => g.Z.keyboardModeEnabled),
                r = i.useRef(null),
                l = i.useCallback(
                    (e, n) => {
                        let i = r.current;
                        if (null == i) return;
                        let l = parseInt(n, 10),
                            [o, a] = i.getSectionRowFromIndex(l),
                            s = 0 === o && 0 === a ? t : 0;
                        i.scrollToIndex({
                            section: o,
                            row: a,
                            padding: s,
                            callback: () => {
                                requestAnimationFrame(() => {
                                    var t;
                                    return null == (t = document.querySelector(e)) ? void 0 : t.focus({ preventScroll: !0 });
                                });
                            }
                        });
                    },
                    [t]
                ),
                o = i.useCallback(
                    () =>
                        new Promise((e) => {
                            let t = r.current;
                            if (null == t) return e();
                            t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                        }),
                    []
                ),
                a = i.useCallback(
                    () =>
                        new Promise((e) => {
                            let t = r.current;
                            if (null == t) return e();
                            t.scrollToBottom({
                                callback() {
                                    requestAnimationFrame(() => setTimeout(e, 100));
                                }
                            });
                        }),
                    []
                );
            return {
                navigator: (0, u.ZP)({
                    id: e,
                    setFocus: l,
                    isEnabled: n,
                    scrollToStart: o,
                    scrollToEnd: a
                }),
                listRef: r
            };
        })(l, Q),
        y = 0 === d.length || d.every((e) => 0 === e.userIds.length);
    if (
        (i.useEffect(() => {
            D.default.track(G.rMx.MEMBER_LIST_VIEWED, {
                channel_id: t.id,
                channel_type: t.type,
                guild_id: t.guild_id
            });
        }, [t.guild_id, t.id, t.type]),
        y)
    )
        return (0, r.jsx)(en, { channel: t });
    let x = s().omit(m.containerProps, ['ref']),
        v = U.iJ(n);
    return (0, r.jsx)(_.Gt, {
        value: a,
        children: (0, r.jsx)(c.bG, {
            navigator: m,
            children: (0, r.jsx)(h.Wdt, {
                children: (e) =>
                    (0, r.jsx)('div', {
                        className: o()(Y.membersWrap, Y.hiddenMembers, z.container),
                        children: (0, r.jsx)(
                            h.aVo,
                            q(
                                {
                                    ref: C,
                                    className: Y.members,
                                    paddingTop: 0,
                                    sectionHeight: 40,
                                    renderSection: (e) => {
                                        let { section: t } = e,
                                            i = d[t];
                                        return (0, r.jsx)(
                                            $,
                                            {
                                                id: i.id,
                                                label: i.label,
                                                count: i.userIds.length,
                                                guildId: n.id
                                            },
                                            i.id
                                        );
                                    },
                                    rowHeight: Q,
                                    renderRow: (e) => {
                                        let { section: n, row: i } = e,
                                            { userIds: l, id: o } = d[n];
                                        return (0, r.jsx)(
                                            J,
                                            {
                                                channel: t,
                                                sectionId: o,
                                                userId: l[i],
                                                guildOwnerId: v
                                            },
                                            l[i]
                                        );
                                    },
                                    footerHeight: (e) => 80 * (d[e] === f && t.type === G.d4z.PRIVATE_THREAD),
                                    renderFooter: (e) => (d[e.section] === f ? (0, r.jsx)(ee, { channel: t }, 'footer') : null),
                                    innerAriaLabel: V.NW.string(V.t['9Oq93t']),
                                    innerTag: 'ul',
                                    sections: d.map((e) => e.userIds.length),
                                    fade: !0
                                },
                                x,
                                e
                            ),
                            l
                        )
                    })
            })
        })
    });
}
function en(e) {
    let { channel: t } = e;
    return (0, r.jsxs)('div', {
        className: o()(Y.membersWrap, Y.hiddenMembers, Y.members, z.emptyState),
        children: [
            (0, r.jsx)(h.Text, {
                className: z.emptyStateHeader,
                variant: 'text-xs/bold',
                color: 'interactive-normal',
                children: V.NW.string(V.t['9Oq93t'])
            }),
            (0, r.jsxs)('div', {
                className: z.emptyStateIconContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: z.emptyStateIcon,
                        children: (0, r.jsx)(h.BFJ, {
                            size: 'lg',
                            color: 'currentColor'
                        })
                    }),
                    (0, r.jsx)(L.Z, { className: z.emptyStateStars })
                ]
            }),
            (0, r.jsx)(h.X6q, {
                variant: 'heading-md/semibold',
                children: t.isForumPost() ? V.NW.string(V.t.p0UgNT) : V.NW.string(V.t['9/n5v7'])
            }),
            (0, r.jsx)(h.Text, {
                className: z.emptyStateSubtext,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: V.NW.string(V.t.emw8UF)
            })
        ]
    });
}
