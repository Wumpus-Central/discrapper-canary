n.d(t, { Z: () => D }), n(388685), n(539854);
var r = n(200651),
    l = n(192379),
    o = n(442837),
    a = n(749280),
    i = n(481060),
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
    N = n(626135),
    M = n(585483),
    _ = n(619895),
    w = n(844439),
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
        m = (0, o.e7)([j.Z], () => j.Z.getChannel(u)),
        { Component: p, events: f, play: b } = (0, a.w)(),
        [O, g] = l.useState(!1),
        E = l.useRef(null);
    return null == m
        ? null
        : (O || b(),
          (0, r.jsx)(i.yRy, {
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
              animation: i.yRy.Animation.NONE,
              onRequestClose: t,
              shouldShow: n,
              children: (e) => {
                  let { onClick: n } = e;
                  return (0, r.jsx)(i.ua7, {
                      text: A.NW.string(A.t.emnnEB),
                      children: (e) => {
                          var n, l;
                          return (0, r.jsx)(
                              i.P3F,
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
                                      'aria-label': A.NW.string(A.t.emnnEB),
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
    let { onSelect: t, onClose: n, channel: a, imageUrl: j, mimeType: D } = e,
        x = (0, o.e7)([S.Z], () => S.Z.getGuild(a.guild_id)),
        { fetchState: U, imageRecCommandContexts: k } = (0, _.h)({ channelId: a.id }),
        Z = U === w.M.FETCHING,
        F = (0, E.g)(a),
        G = (0, p.PL)(!0, !0),
        L = (0, p.LD)(a.guild_id, !0);
    l.useEffect(() => {
        (U === w.M.ERROR || (U === w.M.FETCHED && 0 === k.length)) && n();
    }, [U, k.length, n]),
        l.useEffect(() => {
            var e, t;
            if (Z || 0 === k.length) return;
            let n = [];
            k.forEach((e) => {
                n.push(Number(e.command.id)), null != e.overrideSendCommand && n.push(Number(e.overrideSendCommand.id));
            }),
                N.default.track(I.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
                    guild_id: null != (e = null == a ? void 0 : a.guild_id) ? e : '',
                    channel_id: null != (t = null == a ? void 0 : a.id) ? t : '',
                    application_ids: [...k.map((e) => Number(e.command.applicationId))],
                    command_ids: n
                });
        }, [k, a, Z]);
    let B = l.useCallback(
            async (e) => {
                let t = await fetch(j),
                    n = await t.arrayBuffer(),
                    r = D.join('/'),
                    l = new File([n], 'image'.concat((0, _.Q)({ contentType: r })), { type: r });
                c.Z.setFile({
                    channelId: a.id,
                    id: e,
                    file: {
                        id: e,
                        file: l,
                        platform: s.ow.WEB
                    },
                    draftType: P.d.SlashCommand
                });
            },
            [j, a.id, D]
        ),
        H = l.useCallback(
            async (e, t, n, r) => {
                var l, o;
                if (!F) return;
                let i = e.applicationId,
                    c = (null == (l = G.result) ? void 0 : l.sections[i]) != null,
                    s = (null == (o = L.result) ? void 0 : o.sections[i]) != null;
                await B(r),
                    null != f.Z.getActiveCommand(a.id) &&
                        m.Po({
                            channelId: a.id,
                            command: null,
                            section: null
                        }),
                    c || s || p.ZP.queryInstallOnDemandApp(e.applicationId, a.id),
                    m.Po({
                        channelId: a.id,
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
                    M.S.dispatch(I.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: a.id });
            },
            [a.id, B, F, G, L]
        ),
        W = l.useCallback(
            async (e, t, n) => {
                var r, l;
                let o = e.applicationId,
                    i = (null == (r = G.result) ? void 0 : r.sections[o]) != null,
                    c = (null == (l = L.result) ? void 0 : l.sections[o]) != null;
                i || c || p.ZP.queryInstallOnDemandApp(e.applicationId, a.id);
                let { isAuthorized: u } = await (0, h.L)({
                    applicationId: o,
                    channel: a,
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
                                channel: a,
                                guild: x
                            },
                            commandOrigin: t === b.Vh.IMAGE_RECS_SUBMENU ? b.bB.IMAGE_RECS_SUBMENU : b.bB.IMAGE_RECS_MENU
                        }));
            },
            [a, x, G, L, B]
        );
    return (0, r.jsxs)(i.v2r, {
        onSelect: t,
        navId: 'image-context-commands-popout',
        onClose: n,
        'aria-label': A.NW.string(A.t.P3ShV1),
        children: [
            (0, r.jsx)(
                i.sNh,
                {
                    id: 'menu-image-rec-header',
                    render: () =>
                        (0, r.jsx)(i.Text, {
                            className: T.title,
                            variant: 'text-md/bold',
                            color: 'header-primary',
                            children: A.NW.string(A.t.emnnEB)
                        }),
                    navigable: !1,
                    disabled: !0
                },
                'menu-image-rec-header'
            ),
            (0, r.jsx)(i.Clw, {}),
            Z
                ? (0, r.jsx)(
                      i.sNh,
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
                                  o = e.onlyAllowEdit || (null != n && null == t),
                                  c = e.imageOption;
                              return null == c
                                  ? null
                                  : (0, r.jsx)(
                                        i.sNh,
                                        {
                                            id: e.command.id,
                                            action: () => {
                                                o ? H(e.command, e.section, b.Vh.IMAGE_RECS_MENU, c) : W(l ? t : e.command, b.Vh.IMAGE_RECS_MENU, l ? n.imageOption : c);
                                            },
                                            label: e.command.displayName,
                                            subtext: e.command.displayDescription,
                                            subtextLineClamp: 1,
                                            icon: o ? i.vdY : l ? void 0 : i.Uuj,
                                            iconLeft: () =>
                                                (0, r.jsx)(y.Z, {
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
                                                ? (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          (0, r.jsx)(
                                                              i.sNh,
                                                              {
                                                                  id: ''.concat(e.command.id, '-send'),
                                                                  label: A.NW.string(A.t['M+BhUV']),
                                                                  subtext: A.NW.string(A.t.zXFjJS),
                                                                  action: () => W(t, b.Vh.IMAGE_RECS_SUBMENU, n.imageOption),
                                                                  icon: i.Uuj
                                                              },
                                                              ''.concat(e.command.id, '-send')
                                                          ),
                                                          (0, r.jsx)(
                                                              i.sNh,
                                                              {
                                                                  id: ''.concat(e.command.id, '-edit'),
                                                                  label: A.NW.string(A.t['wTaN+P']),
                                                                  subtext: A.NW.string(A.t.bIB3bm),
                                                                  action: () => {
                                                                      H(e.command, e.section, b.Vh.IMAGE_RECS_SUBMENU, c);
                                                                  },
                                                                  icon: i.vdY,
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
