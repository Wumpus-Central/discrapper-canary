n.d(t, { Z: () => D }), n(47120), n(653041);
var r = n(200651),
    l = n(192379),
    o = n(442837),
    i = n(749280),
    a = n(481060),
    c = n(166459),
    u = n(911969),
    s = n(476326),
    d = n(827498),
    m = n(555573),
    p = n(213459),
    f = n(998698),
    O = n(895924),
    b = n(581364),
    E = n(667204),
    g = n(873387),
    y = n(809090),
    h = n(147391),
    v = n(583027),
    C = n(978983),
    P = n(592125),
    _ = n(703558),
    j = n(430824),
    S = n(626135),
    N = n(585483),
    M = n(619895),
    w = n(844439),
    A = n(981631),
    I = n(388032),
    T = n(568618);
function R(e) {
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
function D(e) {
    let { toggleShowMenu: t, showMenu: n, className: c, channelId: u, imageUrl: s, mimeType: d } = e,
        m = (0, o.e7)([P.Z], () => P.Z.getChannel(u)),
        { Component: p, events: f, play: O } = (0, i.w)(),
        [b, E] = l.useState(!1),
        g = l.useRef(null);
    return null == m
        ? null
        : (b || O(),
          (0, r.jsx)(a.yRy, {
              targetElementRef: g,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(U, {
                      onClose: t,
                      channel: m,
                      imageUrl: s,
                      mimeType: d
                  });
              },
              position: 'right',
              align: 'top',
              animation: a.yRy.Animation.NONE,
              onRequestClose: t,
              shouldShow: n,
              children: (e) => {
                  let { onClick: n } = e;
                  return (0, r.jsx)(a.ua7, {
                      text: I.NW.string(I.t.emnnEB),
                      children: (e) => {
                          var n, l;
                          return (0, r.jsx)(
                              a.P3F,
                              ((n = R({}, e)),
                              (l = l =
                                  {
                                      className: c,
                                      focusProps: { offset: 2 },
                                      innerRef: g,
                                      onClick: t,
                                      onMouseEnter: () => {
                                          E(!0), f.onMouseEnter();
                                      },
                                      onMouseLeave: f.onMouseLeave,
                                      'aria-label': I.NW.string(I.t.emnnEB),
                                      children: (0, r.jsx)(p, {
                                          size: 'custom',
                                          width: 20,
                                          height: 20,
                                          color: 'currentColor'
                                      })
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              n)
                          );
                      }
                  });
              }
          }));
}
function U(e) {
    let { onSelect: t, onClose: n, channel: i, imageUrl: P, mimeType: D } = e,
        U = (0, o.e7)([j.Z], () => j.Z.getGuild(i.guild_id)),
        { fetchState: x, imageRecCommandContexts: Z } = (0, M.h)({ channelId: i.id }),
        k = x === w.M.FETCHING,
        F = (0, g.g)(i),
        L = (0, p.PL)(!0, !0),
        H = (0, p.LD)(i.guild_id, !0);
    l.useEffect(() => {
        (x === w.M.ERROR || (x === w.M.FETCHED && 0 === Z.length)) && n();
    }, [x, Z.length, n]),
        l.useEffect(() => {
            var e, t;
            if (k || 0 === Z.length) return;
            let n = [];
            Z.forEach((e) => {
                n.push(Number(e.command.id)), null != e.overrideSendCommand && n.push(Number(e.overrideSendCommand.id));
            }),
                S.default.track(A.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
                    guild_id: null != (e = null == i ? void 0 : i.guild_id) ? e : '',
                    channel_id: null != (t = null == i ? void 0 : i.id) ? t : '',
                    application_ids: [...Z.map((e) => Number(e.command.applicationId))],
                    command_ids: n
                });
        }, [Z, i, k]);
    let G = l.useCallback(
            async (e) => {
                let t = await fetch(P),
                    n = await t.arrayBuffer(),
                    r = D.join('/'),
                    l = new File([n], 'image'.concat((0, M.Q)({ contentType: r })), { type: r });
                c.Z.setFile({
                    channelId: i.id,
                    id: e,
                    file: {
                        id: e,
                        file: l,
                        platform: s.ow.WEB
                    },
                    draftType: _.d.SlashCommand
                });
            },
            [P, i.id, D]
        ),
        B = l.useCallback(
            async (e, t, n, r) => {
                var l, o;
                if (!F) return;
                let a = e.applicationId,
                    c = (null == (l = L.result) ? void 0 : l.sections[a]) != null,
                    s = (null == (o = H.result) ? void 0 : o.sections[a]) != null;
                await G(r),
                    null != f.Z.getActiveCommand(i.id) &&
                        m.Po({
                            channelId: i.id,
                            command: null,
                            section: null
                        }),
                    c || s || p.ZP.queryInstallOnDemandApp(e.applicationId, i.id),
                    m.Po({
                        channelId: i.id,
                        command: e,
                        section: t,
                        location: n,
                        source: d._b.TEXT,
                        initialValues: {
                            [r]: {
                                type: u.jw.ATTACHMENT,
                                name: r,
                                value: 'image'
                            }
                        },
                        commandOrigin: n === O.Vh.IMAGE_RECS_SUBMENU ? O.bB.IMAGE_RECS_SUBMENU : O.bB.IMAGE_RECS_MENU
                    }),
                    (0, v.Mo)({
                        command: e,
                        location: n,
                        sectionName: t.name
                    }),
                    N.S.dispatch(A.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: i.id });
            },
            [i.id, G, F, L, H]
        ),
        V = l.useCallback(
            async (e, t, n) => {
                var r, l;
                let o = e.applicationId,
                    a = (null == (r = L.result) ? void 0 : r.sections[o]) != null,
                    c = (null == (l = H.result) ? void 0 : l.sections[o]) != null;
                a || c || p.ZP.queryInstallOnDemandApp(e.applicationId, i.id);
                let u = await (0, h.L)({
                    applicationId: o,
                    userIndexState: L,
                    guildIndexState: H,
                    location: t,
                    source: d._b.TEXT
                });
                (0, b.qJ)({
                    command: e,
                    location: t,
                    source: d._b.TEXT
                }),
                    u &&
                        (await G(n),
                        await (0, E.Z)({
                            command: R({}, e),
                            optionValues: {
                                [n]: [
                                    {
                                        text: 'image',
                                        type: 'text'
                                    }
                                ]
                            },
                            context: {
                                channel: i,
                                guild: U
                            },
                            commandOrigin: t === O.Vh.IMAGE_RECS_SUBMENU ? O.bB.IMAGE_RECS_SUBMENU : O.bB.IMAGE_RECS_MENU
                        }));
            },
            [i, U, L, H, G]
        );
    return (0, r.jsxs)(a.v2r, {
        onSelect: t,
        navId: 'image-context-commands-popout',
        onClose: n,
        'aria-label': I.NW.string(I.t.P3ShV1),
        children: [
            (0, r.jsx)(
                a.sNh,
                {
                    id: 'menu-image-rec-header',
                    render: () =>
                        (0, r.jsx)(a.Text, {
                            className: T.title,
                            variant: 'text-md/bold',
                            color: 'header-primary',
                            children: I.NW.string(I.t.emnnEB)
                        }),
                    navigable: !1,
                    disabled: !0
                },
                'menu-image-rec-header'
            ),
            (0, r.jsx)(a.Clw, {}),
            k
                ? (0, r.jsx)(
                      a.sNh,
                      {
                          id: 'menu-image-recs-placeholder',
                          render: () => (0, r.jsx)(C.Z, {}),
                          navigable: !1,
                          disabled: !0
                      },
                      'menu-image-recs-placeholder'
                  )
                : (0, r.jsx)(r.Fragment, {
                      children: Z.filter((e) => null != e.imageOption).map((e) => {
                          let t = e.overrideSendCommand,
                              n = null == e ? void 0 : e.overrideSendCommandInfo,
                              l = null != t && null != n,
                              o = e.onlyAllowEdit || (null != n && null == t),
                              c = e.imageOption;
                          return null == c
                              ? null
                              : (0, r.jsx)(
                                    a.sNh,
                                    {
                                        id: e.command.id,
                                        action: () => {
                                            o ? B(e.command, e.section, O.Vh.IMAGE_RECS_MENU, c) : V(l ? t : e.command, O.Vh.IMAGE_RECS_MENU, l ? n.imageOption : c);
                                        },
                                        label: e.command.displayName,
                                        subtext: e.command.displayDescription,
                                        subtextLineClamp: 1,
                                        icon: o ? a.vdY : l ? void 0 : a.Uuj,
                                        iconLeft: () =>
                                            (0, r.jsx)(y.Z, {
                                                channel: i,
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
                                            ? (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      (0, r.jsx)(
                                                          a.sNh,
                                                          {
                                                              id: ''.concat(e.command.id, '-send'),
                                                              label: I.NW.string(I.t['M+BhUV']),
                                                              subtext: I.NW.string(I.t.zXFjJS),
                                                              action: () => V(t, O.Vh.IMAGE_RECS_SUBMENU, n.imageOption),
                                                              icon: a.Uuj
                                                          },
                                                          ''.concat(e.command.id, '-send')
                                                      ),
                                                      (0, r.jsx)(
                                                          a.sNh,
                                                          {
                                                              id: ''.concat(e.command.id, '-edit'),
                                                              label: I.NW.string(I.t['wTaN+P']),
                                                              subtext: I.NW.string(I.t.bIB3bm),
                                                              action: () => {
                                                                  B(e.command, e.section, O.Vh.IMAGE_RECS_SUBMENU, c);
                                                              },
                                                              icon: a.vdY,
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
