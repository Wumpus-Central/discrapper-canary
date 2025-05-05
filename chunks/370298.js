n.d(t, { Z: () => D }), n(388685), n(539854);
var r = n(255367),
    l = n(73800),
    i = n(442837),
    o = n(749280),
    a = n(481060),
    c = n(166459),
    u = n(911969),
    s = n(476326),
    d = n(827498),
    m = n(555573),
    p = n(213459),
    f = n(998698),
    b = n(895924),
    O = n(581364),
    g = n(667204),
    E = n(873387),
    y = n(809090),
    h = n(104919),
    v = n(583027),
    C = n(978983),
    j = n(592125),
    P = n(703558),
    S = n(430824),
    M = n(626135),
    _ = n(585483),
    w = n(619895),
    N = n(844439),
    I = n(981631),
    A = n(388032),
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
        m = (0, i.e7)([j.Z], () => j.Z.getChannel(u)),
        { Component: p, events: f, play: b } = (0, o.w)(),
        [O, g] = l.useState(!1),
        E = l.useRef(null);
    return null == m
        ? null
        : (O || b(),
          (0, r.jsx)(a.yRy, {
              targetElementRef: E,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(x, {
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
                      text: A.intl.string(A.t.emnnEB),
                      children: (e) => {
                          var n, l;
                          return (0, r.jsx)(
                              a.P3F,
                              ((n = R({}, e)),
                              (l = l =
                                  {
                                      className: c,
                                      focusProps: { offset: 2 },
                                      innerRef: E,
                                      onClick: t,
                                      onMouseEnter: () => {
                                          g(!0), f.onMouseEnter();
                                      },
                                      onMouseLeave: f.onMouseLeave,
                                      'aria-label': A.intl.string(A.t.emnnEB),
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
function x(e) {
    let { onSelect: t, onClose: n, channel: o, imageUrl: j, mimeType: D } = e,
        x = (0, i.e7)([S.Z], () => S.Z.getGuild(o.guild_id)),
        { fetchState: U, imageRecCommandContexts: k } = (0, w.h)({ channelId: o.id }),
        Z = U === N.M.FETCHING,
        F = (0, E.g)(o),
        G = (0, p.PL)(!0, !0),
        L = (0, p.LD)(o.guild_id, !0);
    l.useEffect(() => {
        (U === N.M.ERROR || (U === N.M.FETCHED && 0 === k.length)) && n();
    }, [U, k.length, n]),
        l.useEffect(() => {
            var e, t;
            if (Z || 0 === k.length) return;
            let n = [];
            k.forEach((e) => {
                n.push(Number(e.command.id)), null != e.overrideSendCommand && n.push(Number(e.overrideSendCommand.id));
            }),
                M.default.track(I.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
                    guild_id: null != (e = null == o ? void 0 : o.guild_id) ? e : '',
                    channel_id: null != (t = null == o ? void 0 : o.id) ? t : '',
                    application_ids: [...k.map((e) => Number(e.command.applicationId))],
                    command_ids: n
                });
        }, [k, o, Z]);
    let B = l.useCallback(
            async (e) => {
                let t = await fetch(j),
                    n = await t.arrayBuffer(),
                    r = D.join('/'),
                    l = new File([n], 'image'.concat((0, w.Q)({ contentType: r })), { type: r });
                c.Z.setFile({
                    channelId: o.id,
                    id: e,
                    file: {
                        id: e,
                        file: l,
                        platform: s.ow.WEB
                    },
                    draftType: P.d.SlashCommand
                });
            },
            [j, o.id, D]
        ),
        H = l.useCallback(
            async (e, t, n, r) => {
                var l, i;
                if (!F) return;
                let a = e.applicationId,
                    c = (null == (l = G.result) ? void 0 : l.sections[a]) != null,
                    s = (null == (i = L.result) ? void 0 : i.sections[a]) != null;
                await B(r),
                    null != f.Z.getActiveCommand(o.id) &&
                        m.Po({
                            channelId: o.id,
                            command: null,
                            section: null
                        }),
                    c || s || p.ZP.queryInstallOnDemandApp(e.applicationId, o.id),
                    m.Po({
                        channelId: o.id,
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
                        commandOrigin: n === b.Vh.IMAGE_RECS_SUBMENU ? b.bB.IMAGE_RECS_SUBMENU : b.bB.IMAGE_RECS_MENU
                    }),
                    (0, v.Mo)({
                        command: e,
                        location: n,
                        sectionName: t.name
                    }),
                    _.S.dispatch(I.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: o.id });
            },
            [o.id, B, F, G, L]
        ),
        V = l.useCallback(
            async (e, t, n) => {
                var r, l;
                let i = e.applicationId,
                    a = (null == (r = G.result) ? void 0 : r.sections[i]) != null,
                    c = (null == (l = L.result) ? void 0 : l.sections[i]) != null;
                a || c || p.ZP.queryInstallOnDemandApp(e.applicationId, o.id);
                let { isAuthorized: u } = await (0, h.L)({
                    applicationId: i,
                    channel: o,
                    commandIntegrationTypes: e.integration_types,
                    appLauncherContext: {
                        entrypoint: d._b.TEXT,
                        location: t,
                        sectionName: void 0
                    }
                });
                (0, O.qJ)({
                    command: e,
                    location: t,
                    source: d._b.TEXT
                }),
                    u &&
                        (await B(n),
                        await (0, g.Z)({
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
                                channel: o,
                                guild: x
                            },
                            commandOrigin: t === b.Vh.IMAGE_RECS_SUBMENU ? b.bB.IMAGE_RECS_SUBMENU : b.bB.IMAGE_RECS_MENU
                        }));
            },
            [o, x, G, L, B]
        );
    return (0, r.jsxs)(a.v2r, {
        onSelect: t,
        navId: 'image-context-commands-popout',
        onClose: n,
        'aria-label': A.intl.string(A.t.P3ShV1),
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
                            children: A.intl.string(A.t.emnnEB)
                        }),
                    navigable: !1,
                    disabled: !0
                },
                'menu-image-rec-header'
            ),
            (0, r.jsx)(a.Clw, {}),
            Z
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
                      children: k
                          .filter((e) => null != e.imageOption)
                          .map((e) => {
                              let t = e.overrideSendCommand,
                                  n = null == e ? void 0 : e.overrideSendCommandInfo,
                                  l = null != t && null != n,
                                  i = e.onlyAllowEdit || (null != n && null == t),
                                  c = e.imageOption;
                              return null == c
                                  ? null
                                  : (0, r.jsx)(
                                        a.sNh,
                                        {
                                            id: e.command.id,
                                            action: () => {
                                                i ? H(e.command, e.section, b.Vh.IMAGE_RECS_MENU, c) : V(l ? t : e.command, b.Vh.IMAGE_RECS_MENU, l ? n.imageOption : c);
                                            },
                                            label: e.command.displayName,
                                            subtext: e.command.displayDescription,
                                            subtextLineClamp: 1,
                                            icon: i ? a.vdY : l ? void 0 : a.Uuj,
                                            iconLeft: () =>
                                                (0, r.jsx)(y.Z, {
                                                    channel: o,
                                                    section: e.section,
                                                    width: 32,
                                                    height: 32,
                                                    isSquircle: !0,
                                                    selectable: !1
                                                }),
                                            iconLeftSize: 'lg',
                                            showImageFirst: !0,
                                            disabled: !F && i,
                                            children: l
                                                ? (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          (0, r.jsx)(
                                                              a.sNh,
                                                              {
                                                                  id: ''.concat(e.command.id, '-send'),
                                                                  label: A.intl.string(A.t['M+BhUV']),
                                                                  subtext: A.intl.string(A.t.zXFjJS),
                                                                  action: () => V(t, b.Vh.IMAGE_RECS_SUBMENU, n.imageOption),
                                                                  icon: a.Uuj
                                                              },
                                                              ''.concat(e.command.id, '-send')
                                                          ),
                                                          (0, r.jsx)(
                                                              a.sNh,
                                                              {
                                                                  id: ''.concat(e.command.id, '-edit'),
                                                                  label: A.intl.string(A.t['wTaN+P']),
                                                                  subtext: A.intl.string(A.t.bIB3bm),
                                                                  action: () => {
                                                                      H(e.command, e.section, b.Vh.IMAGE_RECS_SUBMENU, c);
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
