n.d(t, { Z: () => D }), n(47120), n(653041);
var o = n(200651),
    i = n(192379),
    r = n(442837),
    l = n(749280),
    a = n(481060),
    c = n(166459),
    d = n(911969),
    u = n(476326),
    s = n(827498),
    m = n(555573),
    p = n(213459),
    f = n(998698),
    O = n(895924),
    b = n(581364),
    E = n(667204),
    v = n(873387),
    g = n(809090),
    y = n(147391),
    h = n(583027),
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
    T = n(122642);
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            o.forEach(function (t) {
                var o;
                (o = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = o);
            });
    }
    return e;
}
function D(e) {
    let { toggleShowMenu: t, showMenu: n, className: c, channelId: d, imageUrl: u, mimeType: s } = e,
        m = (0, r.e7)([P.Z], () => P.Z.getChannel(d)),
        { Component: p, events: f, play: O } = (0, l.w)(),
        [b, E] = i.useState(!1),
        v = i.useRef(null);
    return null == m
        ? null
        : (b || O(),
          (0, o.jsx)(a.yRy, {
              targetElementRef: v,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, o.jsx)(U, {
                      onClose: t,
                      channel: m,
                      imageUrl: u,
                      mimeType: s
                  });
              },
              position: 'right',
              align: 'top',
              animation: a.yRy.Animation.NONE,
              onRequestClose: t,
              shouldShow: n,
              children: (e) => {
                  let { onClick: n } = e;
                  return (0, o.jsx)(a.ua7, {
                      text: I.NW.string(I.t.emnnEB),
                      children: (e) => {
                          var n, i;
                          return (0, o.jsx)(
                              a.P3F,
                              ((n = R({}, e)),
                              (i = i =
                                  {
                                      className: c,
                                      focusProps: { offset: 2 },
                                      innerRef: v,
                                      onClick: t,
                                      onMouseEnter: () => {
                                          E(!0), f.onMouseEnter();
                                      },
                                      onMouseLeave: f.onMouseLeave,
                                      'aria-label': I.NW.string(I.t.emnnEB),
                                      children: (0, o.jsx)(p, {
                                          size: 'custom',
                                          width: 20,
                                          height: 20,
                                          color: 'currentColor'
                                      })
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var o = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, o);
                                        }
                                        return n;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              n)
                          );
                      }
                  });
              }
          }));
}
function U(e) {
    let { onSelect: t, onClose: n, channel: l, imageUrl: P, mimeType: D } = e,
        U = (0, r.e7)([j.Z], () => j.Z.getGuild(l.guild_id)),
        { fetchState: x, imageRecCommandContexts: Z } = (0, M.h)({ channelId: l.id }),
        k = x === w.M.FETCHING,
        F = (0, v.g)(l),
        L = (0, p.PL)(!0, !0),
        H = (0, p.LD)(l.guild_id, !0);
    i.useEffect(() => {
        (x === w.M.ERROR || (x === w.M.FETCHED && 0 === Z.length)) && n();
    }, [x, Z.length, n]),
        i.useEffect(() => {
            var e, t;
            if (k || 0 === Z.length) return;
            let n = [];
            Z.forEach((e) => {
                n.push(Number(e.command.id)), null != e.overrideSendCommand && n.push(Number(e.overrideSendCommand.id));
            }),
                S.default.track(A.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
                    guild_id: null !== (e = null == l ? void 0 : l.guild_id) && void 0 !== e ? e : '',
                    channel_id: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : '',
                    application_ids: [...Z.map((e) => Number(e.command.applicationId))],
                    command_ids: n
                });
        }, [Z, l, k]);
    let G = i.useCallback(
            async (e) => {
                let t = await fetch(P),
                    n = await t.arrayBuffer(),
                    o = D.join('/'),
                    i = new File([n], 'image'.concat((0, M.Q)({ contentType: o })), { type: o });
                c.Z.setFile({
                    channelId: l.id,
                    id: e,
                    file: {
                        id: e,
                        file: i,
                        platform: u.ow.WEB
                    },
                    draftType: _.d.SlashCommand
                });
            },
            [P, l.id, D]
        ),
        B = i.useCallback(
            async (e, t, n, o) => {
                var i, r;
                if (!F) return;
                let a = e.applicationId,
                    c = (null === (i = L.result) || void 0 === i ? void 0 : i.sections[a]) != null,
                    u = (null === (r = H.result) || void 0 === r ? void 0 : r.sections[a]) != null;
                await G(o),
                    null != f.Z.getActiveCommand(l.id) &&
                        m.Po({
                            channelId: l.id,
                            command: null,
                            section: null
                        }),
                    c || u || p.ZP.queryInstallOnDemandApp(e.applicationId, l.id),
                    m.Po({
                        channelId: l.id,
                        command: e,
                        section: t,
                        location: n,
                        source: s._b.TEXT,
                        initialValues: {
                            [o]: {
                                type: d.jw.ATTACHMENT,
                                name: o,
                                value: 'image'
                            }
                        },
                        commandOrigin: n === O.Vh.IMAGE_RECS_SUBMENU ? O.bB.IMAGE_RECS_SUBMENU : O.bB.IMAGE_RECS_MENU
                    }),
                    (0, h.Mo)({
                        command: e,
                        location: n,
                        sectionName: t.name
                    }),
                    N.S.dispatch(A.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: l.id });
            },
            [l.id, G, F, L, H]
        ),
        V = i.useCallback(
            async (e, t, n) => {
                var o, i;
                let r = e.applicationId,
                    a = (null === (o = L.result) || void 0 === o ? void 0 : o.sections[r]) != null,
                    c = (null === (i = H.result) || void 0 === i ? void 0 : i.sections[r]) != null;
                a || c || p.ZP.queryInstallOnDemandApp(e.applicationId, l.id);
                let d = await (0, y.L)({
                    applicationId: r,
                    userIndexState: L,
                    guildIndexState: H,
                    location: t,
                    source: s._b.TEXT
                });
                (0, b.qJ)({
                    command: e,
                    location: t,
                    source: s._b.TEXT
                }),
                    d &&
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
                                channel: l,
                                guild: U
                            },
                            commandOrigin: t === O.Vh.IMAGE_RECS_SUBMENU ? O.bB.IMAGE_RECS_SUBMENU : O.bB.IMAGE_RECS_MENU
                        }));
            },
            [l, U, L, H, G]
        );
    return (0, o.jsxs)(a.v2r, {
        onSelect: t,
        navId: 'image-context-commands-popout',
        onClose: n,
        'aria-label': I.NW.string(I.t.P3ShV1),
        children: [
            (0, o.jsx)(
                a.sNh,
                {
                    id: 'menu-image-rec-header',
                    render: () =>
                        (0, o.jsx)(a.Text, {
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
            (0, o.jsx)(a.Clw, {}),
            k
                ? (0, o.jsx)(
                      a.sNh,
                      {
                          id: 'menu-image-recs-placeholder',
                          render: () => (0, o.jsx)(C.Z, {}),
                          navigable: !1,
                          disabled: !0
                      },
                      'menu-image-recs-placeholder'
                  )
                : (0, o.jsx)(o.Fragment, {
                      children: Z.filter((e) => null != e.imageOption).map((e) => {
                          let t = e.overrideSendCommand,
                              n = null == e ? void 0 : e.overrideSendCommandInfo,
                              i = null != t && null != n,
                              r = e.onlyAllowEdit || (null != n && null == t),
                              c = e.imageOption;
                          return null == c
                              ? null
                              : (0, o.jsx)(
                                    a.sNh,
                                    {
                                        id: e.command.id,
                                        action: () => {
                                            r ? B(e.command, e.section, O.Vh.IMAGE_RECS_MENU, c) : V(i ? t : e.command, O.Vh.IMAGE_RECS_MENU, i ? n.imageOption : c);
                                        },
                                        label: e.command.displayName,
                                        subtext: e.command.displayDescription,
                                        subtextLineClamp: 1,
                                        icon: r ? a.vdY : i ? void 0 : a.Uuj,
                                        iconLeft: () =>
                                            (0, o.jsx)(g.Z, {
                                                channel: l,
                                                section: e.section,
                                                width: 32,
                                                height: 32,
                                                isSquircle: !0,
                                                selectable: !1
                                            }),
                                        iconLeftSize: 'lg',
                                        showImageFirst: !0,
                                        disabled: !F && r,
                                        children: i
                                            ? (0, o.jsxs)(o.Fragment, {
                                                  children: [
                                                      (0, o.jsx)(
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
                                                      (0, o.jsx)(
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
