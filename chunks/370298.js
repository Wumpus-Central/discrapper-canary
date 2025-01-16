t.d(n, {
    Z: function () {
        return y;
    }
}),
    t(47120),
    t(653041);
var i = t(200651),
    l = t(192379),
    o = t(442837),
    a = t(749280),
    d = t(481060),
    r = t(166459),
    c = t(911969),
    u = t(476326),
    s = t(827498),
    m = t(555573),
    E = t(213459),
    p = t(998698),
    v = t(895924),
    C = t(581364),
    _ = t(667204),
    f = t(873387),
    h = t(809090),
    M = t(147391),
    g = t(583027),
    I = t(978983),
    S = t(592125),
    A = t(703558),
    N = t(430824),
    T = t(626135),
    P = t(585483),
    b = t(619895),
    O = t(844439),
    R = t(981631),
    x = t(388032),
    U = t(974378);
function y(e) {
    let { toggleShowMenu: n, showMenu: t, className: r, channelId: c, imageUrl: u, mimeType: s } = e,
        m = (0, o.e7)([S.Z], () => S.Z.getChannel(c)),
        { Component: E, events: p, play: v } = (0, a.w)(),
        [C, _] = l.useState(!1);
    return null == m
        ? null
        : (!C && v(),
          (0, i.jsx)(d.Popout, {
              renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, i.jsx)(w, {
                      onClose: n,
                      channel: m,
                      imageUrl: u,
                      mimeType: s
                  });
              },
              position: 'right',
              align: 'top',
              animation: d.Popout.Animation.NONE,
              onRequestClose: n,
              shouldShow: t,
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, i.jsx)(d.Tooltip, {
                      text: x.intl.string(x.t.emnnEB),
                      children: (e) =>
                          (0, i.jsx)(d.Clickable, {
                              ...e,
                              className: r,
                              focusProps: { offset: 2 },
                              onClick: n,
                              onMouseEnter: () => {
                                  _(!0), p.onMouseEnter();
                              },
                              onMouseLeave: p.onMouseLeave,
                              'aria-label': x.intl.string(x.t.emnnEB),
                              children: (0, i.jsx)(E, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: 'currentColor'
                              })
                          })
                  });
              }
          }));
}
function w(e) {
    let { onSelect: n, onClose: t, channel: a, imageUrl: S, mimeType: y } = e,
        w = (0, o.e7)([N.Z], () => N.Z.getGuild(a.guild_id)),
        { fetchState: j, imageRecCommandContexts: Z } = (0, b.h)({ channelId: a.id }),
        D = j === O.M.FETCHING,
        F = (0, f.g)(a),
        L = (0, E.PL)(!0, !0),
        k = (0, E.LD)(a.guild_id, !0);
    l.useEffect(() => {
        (j === O.M.ERROR || (j === O.M.FETCHED && 0 === Z.length)) && t();
    }, [j, Z.length, t]),
        l.useEffect(() => {
            var e, n;
            if (D || 0 === Z.length) return;
            let t = [];
            Z.forEach((e) => {
                t.push(Number(e.command.id)), null != e.overrideSendCommand && t.push(Number(e.overrideSendCommand.id));
            }),
                T.default.track(R.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
                    guild_id: null !== (e = null == a ? void 0 : a.guild_id) && void 0 !== e ? e : '',
                    channel_id: null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : '',
                    application_ids: [...Z.map((e) => Number(e.command.applicationId))],
                    command_ids: t
                });
        }, [Z, a, D]);
    let H = l.useCallback(
            async (e) => {
                let n = await fetch(S),
                    t = await n.arrayBuffer(),
                    i = y.join('/'),
                    l = new File([t], 'image'.concat((0, b.Q)({ contentType: i })), { type: i });
                r.Z.setFile({
                    channelId: a.id,
                    id: e,
                    file: {
                        id: e,
                        file: l,
                        platform: u.ow.WEB
                    },
                    draftType: A.d.SlashCommand
                });
            },
            [S, a.id, y]
        ),
        G = l.useCallback(
            async (e, n, t, i) => {
                var l, o;
                if (!F) return;
                let d = e.applicationId,
                    r = (null === (l = L.result) || void 0 === l ? void 0 : l.sections[d]) != null,
                    u = (null === (o = k.result) || void 0 === o ? void 0 : o.sections[d]) != null;
                await H(i),
                    null != p.Z.getActiveCommand(a.id) &&
                        m.Po({
                            channelId: a.id,
                            command: null,
                            section: null
                        }),
                    r || u || E.ZP.queryInstallOnDemandApp(e.applicationId, a.id),
                    m.Po({
                        channelId: a.id,
                        command: e,
                        section: n,
                        location: t,
                        source: s._b.TEXT,
                        initialValues: {
                            [i]: {
                                type: c.jw.ATTACHMENT,
                                name: i,
                                value: 'image'
                            }
                        },
                        commandOrigin: t === v.Vh.IMAGE_RECS_SUBMENU ? v.bB.IMAGE_RECS_SUBMENU : v.bB.IMAGE_RECS_MENU
                    }),
                    (0, g.Mo)({
                        command: e,
                        location: t,
                        sectionName: n.name
                    }),
                    P.S.dispatch(R.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: a.id });
            },
            [a.id, H, F, L, k]
        ),
        B = l.useCallback(
            async (e, n, t) => {
                var i, l;
                let o = e.applicationId,
                    d = (null === (i = L.result) || void 0 === i ? void 0 : i.sections[o]) != null,
                    r = (null === (l = k.result) || void 0 === l ? void 0 : l.sections[o]) != null;
                d || r || E.ZP.queryInstallOnDemandApp(e.applicationId, a.id);
                let c = await (0, M.L)({
                    applicationId: o,
                    userIndexState: L,
                    guildIndexState: k,
                    location: n,
                    source: s._b.TEXT
                });
                (0, C.qJ)({
                    command: e,
                    location: n,
                    source: s._b.TEXT
                }),
                    c &&
                        (await H(t),
                        await (0, _.Z)({
                            command: { ...e },
                            optionValues: {
                                [t]: [
                                    {
                                        text: 'image',
                                        type: 'text'
                                    }
                                ]
                            },
                            context: {
                                channel: a,
                                guild: w
                            },
                            commandOrigin: n === v.Vh.IMAGE_RECS_SUBMENU ? v.bB.IMAGE_RECS_SUBMENU : v.bB.IMAGE_RECS_MENU
                        }));
            },
            [a, w, L, k, H]
        );
    return (0, i.jsxs)(d.Menu, {
        onSelect: n,
        navId: 'image-context-commands-popout',
        onClose: t,
        'aria-label': x.intl.string(x.t.P3ShV1),
        children: [
            (0, i.jsx)(
                d.MenuItem,
                {
                    id: 'menu-image-rec-header',
                    render: () =>
                        (0, i.jsx)(d.Text, {
                            className: U.title,
                            variant: 'text-md/bold',
                            color: 'header-primary',
                            children: x.intl.string(x.t.emnnEB)
                        }),
                    navigable: !1,
                    disabled: !0
                },
                'menu-image-rec-header'
            ),
            (0, i.jsx)(d.MenuSeparator, {}),
            D
                ? (0, i.jsx)(
                      d.MenuItem,
                      {
                          id: 'menu-image-recs-placeholder',
                          render: () => (0, i.jsx)(I.Z, {}),
                          navigable: !1,
                          disabled: !0
                      },
                      'menu-image-recs-placeholder'
                  )
                : (0, i.jsx)(i.Fragment, {
                      children: Z.filter((e) => null != e.imageOption).map((e) => {
                          let n = e.overrideSendCommand,
                              t = null == e ? void 0 : e.overrideSendCommandInfo,
                              l = null != n && null != t,
                              o = e.onlyAllowEdit || (null != t && null == n),
                              r = e.imageOption;
                          return null == r
                              ? null
                              : (0, i.jsx)(
                                    d.MenuItem,
                                    {
                                        id: e.command.id,
                                        action: () => {
                                            o ? G(e.command, e.section, v.Vh.IMAGE_RECS_MENU, r) : B(l ? n : e.command, v.Vh.IMAGE_RECS_MENU, l ? t.imageOption : r);
                                        },
                                        label: e.command.displayName,
                                        subtext: e.command.displayDescription,
                                        subtextLineClamp: 1,
                                        icon: o ? d.PencilIcon : l ? void 0 : d.SendMessageIcon,
                                        iconLeft: () =>
                                            (0, i.jsx)(h.Z, {
                                                channel: a,
                                                section: e.section,
                                                width: 32,
                                                height: 32,
                                                isSquircle: !0,
                                                selectable: !1
                                            }),
                                        iconLeftSize: 'lg',
                                        showImageFirst: !0,
                                        disabled: !F && o,
                                        children: l
                                            ? (0, i.jsxs)(i.Fragment, {
                                                  children: [
                                                      (0, i.jsx)(
                                                          d.MenuItem,
                                                          {
                                                              id: ''.concat(e.command.id, '-send'),
                                                              label: x.intl.string(x.t['M+BhUV']),
                                                              subtext: x.intl.string(x.t.zXFjJS),
                                                              action: () => B(n, v.Vh.IMAGE_RECS_SUBMENU, t.imageOption),
                                                              icon: d.SendMessageIcon
                                                          },
                                                          ''.concat(e.command.id, '-send')
                                                      ),
                                                      (0, i.jsx)(
                                                          d.MenuItem,
                                                          {
                                                              id: ''.concat(e.command.id, '-edit'),
                                                              label: x.intl.string(x.t['wTaN+P']),
                                                              subtext: x.intl.string(x.t.bIB3bm),
                                                              action: () => {
                                                                  G(e.command, e.section, v.Vh.IMAGE_RECS_SUBMENU, r);
                                                              },
                                                              icon: d.PencilIcon,
                                                              disabled: !F
                                                          },
                                                          ''.concat(e.command.id, '-edit')
                                                      )
                                                  ]
                                              })
                                            : null
                                    },
                                    e.command.id
                                );
                      })
                  })
        ]
    });
}
