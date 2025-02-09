t.d(n, { Z: () => x }), t(47120), t(653041);
var l = t(200651),
    i = t(192379),
    a = t(442837),
    o = t(749280),
    d = t(481060),
    c = t(166459),
    r = t(911969),
    u = t(476326),
    s = t(827498),
    m = t(555573),
    E = t(213459),
    v = t(998698),
    p = t(895924),
    C = t(581364),
    _ = t(667204),
    h = t(873387),
    g = t(809090),
    M = t(147391),
    f = t(583027),
    N = t(978983),
    A = t(592125),
    S = t(703558),
    I = t(430824),
    T = t(626135),
    b = t(585483),
    O = t(619895),
    P = t(844439),
    R = t(981631),
    y = t(388032),
    U = t(646633);
function x(e) {
    let { toggleShowMenu: n, showMenu: t, className: c, channelId: r, imageUrl: u, mimeType: s } = e,
        m = (0, a.e7)([A.Z], () => A.Z.getChannel(r)),
        { Component: E, events: v, play: p } = (0, o.w)(),
        [C, _] = i.useState(!1);
    return null == m
        ? null
        : (C || p(),
          (0, l.jsx)(d.yRy, {
              renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, l.jsx)(w, {
                      onClose: n,
                      channel: m,
                      imageUrl: u,
                      mimeType: s
                  });
              },
              position: 'right',
              align: 'top',
              animation: d.yRy.Animation.NONE,
              onRequestClose: n,
              shouldShow: t,
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, l.jsx)(d.ua7, {
                      text: y.intl.string(y.t.emnnEB),
                      children: (e) =>
                          (0, l.jsx)(d.P3F, {
                              ...e,
                              className: c,
                              focusProps: { offset: 2 },
                              onClick: n,
                              onMouseEnter: () => {
                                  _(!0), v.onMouseEnter();
                              },
                              onMouseLeave: v.onMouseLeave,
                              'aria-label': y.intl.string(y.t.emnnEB),
                              children: (0, l.jsx)(E, {
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
    let { onSelect: n, onClose: t, channel: o, imageUrl: A, mimeType: x } = e,
        w = (0, a.e7)([I.Z], () => I.Z.getGuild(o.guild_id)),
        { fetchState: j, imageRecCommandContexts: Z } = (0, O.h)({ channelId: o.id }),
        D = j === P.M.FETCHING,
        F = (0, h.g)(o),
        L = (0, E.PL)(!0, !0),
        H = (0, E.LD)(o.guild_id, !0);
    i.useEffect(() => {
        (j === P.M.ERROR || (j === P.M.FETCHED && 0 === Z.length)) && t();
    }, [j, Z.length, t]),
        i.useEffect(() => {
            var e, n;
            if (D || 0 === Z.length) return;
            let t = [];
            Z.forEach((e) => {
                t.push(Number(e.command.id)), null != e.overrideSendCommand && t.push(Number(e.overrideSendCommand.id));
            }),
                T.default.track(R.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
                    guild_id: null !== (e = null == o ? void 0 : o.guild_id) && void 0 !== e ? e : '',
                    channel_id: null !== (n = null == o ? void 0 : o.id) && void 0 !== n ? n : '',
                    application_ids: [...Z.map((e) => Number(e.command.applicationId))],
                    command_ids: t
                });
        }, [Z, o, D]);
    let k = i.useCallback(
            async (e) => {
                let n = await fetch(A),
                    t = await n.arrayBuffer(),
                    l = x.join('/'),
                    i = new File([t], 'image'.concat((0, O.Q)({ contentType: l })), { type: l });
                c.Z.setFile({
                    channelId: o.id,
                    id: e,
                    file: {
                        id: e,
                        file: i,
                        platform: u.ow.WEB
                    },
                    draftType: S.d.SlashCommand
                });
            },
            [A, o.id, x]
        ),
        G = i.useCallback(
            async (e, n, t, l) => {
                var i, a;
                if (!F) return;
                let d = e.applicationId,
                    c = (null === (i = L.result) || void 0 === i ? void 0 : i.sections[d]) != null,
                    u = (null === (a = H.result) || void 0 === a ? void 0 : a.sections[d]) != null;
                await k(l),
                    null != v.Z.getActiveCommand(o.id) &&
                        m.Po({
                            channelId: o.id,
                            command: null,
                            section: null
                        }),
                    c || u || E.ZP.queryInstallOnDemandApp(e.applicationId, o.id),
                    m.Po({
                        channelId: o.id,
                        command: e,
                        section: n,
                        location: t,
                        source: s._b.TEXT,
                        initialValues: {
                            [l]: {
                                type: r.jw.ATTACHMENT,
                                name: l,
                                value: 'image'
                            }
                        },
                        commandOrigin: t === p.Vh.IMAGE_RECS_SUBMENU ? p.bB.IMAGE_RECS_SUBMENU : p.bB.IMAGE_RECS_MENU
                    }),
                    (0, f.Mo)({
                        command: e,
                        location: t,
                        sectionName: n.name
                    }),
                    b.S.dispatch(R.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: o.id });
            },
            [o.id, k, F, L, H]
        ),
        B = i.useCallback(
            async (e, n, t) => {
                var l, i;
                let a = e.applicationId,
                    d = (null === (l = L.result) || void 0 === l ? void 0 : l.sections[a]) != null,
                    c = (null === (i = H.result) || void 0 === i ? void 0 : i.sections[a]) != null;
                d || c || E.ZP.queryInstallOnDemandApp(e.applicationId, o.id);
                let r = await (0, M.L)({
                    applicationId: a,
                    userIndexState: L,
                    guildIndexState: H,
                    location: n,
                    source: s._b.TEXT
                });
                (0, C.qJ)({
                    command: e,
                    location: n,
                    source: s._b.TEXT
                }),
                    r &&
                        (await k(t),
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
                                channel: o,
                                guild: w
                            },
                            commandOrigin: n === p.Vh.IMAGE_RECS_SUBMENU ? p.bB.IMAGE_RECS_SUBMENU : p.bB.IMAGE_RECS_MENU
                        }));
            },
            [o, w, L, H, k]
        );
    return (0, l.jsxs)(d.v2r, {
        onSelect: n,
        navId: 'image-context-commands-popout',
        onClose: t,
        'aria-label': y.intl.string(y.t.P3ShV1),
        children: [
            (0, l.jsx)(
                d.sNh,
                {
                    id: 'menu-image-rec-header',
                    render: () =>
                        (0, l.jsx)(d.Text, {
                            className: U.title,
                            variant: 'text-md/bold',
                            color: 'header-primary',
                            children: y.intl.string(y.t.emnnEB)
                        }),
                    navigable: !1,
                    disabled: !0
                },
                'menu-image-rec-header'
            ),
            (0, l.jsx)(d.Clw, {}),
            D
                ? (0, l.jsx)(
                      d.sNh,
                      {
                          id: 'menu-image-recs-placeholder',
                          render: () => (0, l.jsx)(N.Z, {}),
                          navigable: !1,
                          disabled: !0
                      },
                      'menu-image-recs-placeholder'
                  )
                : (0, l.jsx)(l.Fragment, {
                      children: Z.filter((e) => null != e.imageOption).map((e) => {
                          let n = e.overrideSendCommand,
                              t = null == e ? void 0 : e.overrideSendCommandInfo,
                              i = null != n && null != t,
                              a = e.onlyAllowEdit || (null != t && null == n),
                              c = e.imageOption;
                          return null == c
                              ? null
                              : (0, l.jsx)(
                                    d.sNh,
                                    {
                                        id: e.command.id,
                                        action: () => {
                                            a ? G(e.command, e.section, p.Vh.IMAGE_RECS_MENU, c) : B(i ? n : e.command, p.Vh.IMAGE_RECS_MENU, i ? t.imageOption : c);
                                        },
                                        label: e.command.displayName,
                                        subtext: e.command.displayDescription,
                                        subtextLineClamp: 1,
                                        icon: a ? d.vdY : i ? void 0 : d.Uuj,
                                        iconLeft: () =>
                                            (0, l.jsx)(g.Z, {
                                                channel: o,
                                                section: e.section,
                                                width: 32,
                                                height: 32,
                                                isSquircle: !0,
                                                selectable: !1
                                            }),
                                        iconLeftSize: 'lg',
                                        showImageFirst: !0,
                                        disabled: !F && a,
                                        children: i
                                            ? (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      (0, l.jsx)(
                                                          d.sNh,
                                                          {
                                                              id: ''.concat(e.command.id, '-send'),
                                                              label: y.intl.string(y.t['M+BhUV']),
                                                              subtext: y.intl.string(y.t.zXFjJS),
                                                              action: () => B(n, p.Vh.IMAGE_RECS_SUBMENU, t.imageOption),
                                                              icon: d.Uuj
                                                          },
                                                          ''.concat(e.command.id, '-send')
                                                      ),
                                                      (0, l.jsx)(
                                                          d.sNh,
                                                          {
                                                              id: ''.concat(e.command.id, '-edit'),
                                                              label: y.intl.string(y.t['wTaN+P']),
                                                              subtext: y.intl.string(y.t.bIB3bm),
                                                              action: () => {
                                                                  G(e.command, e.section, p.Vh.IMAGE_RECS_SUBMENU, c);
                                                              },
                                                              icon: d.vdY,
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
