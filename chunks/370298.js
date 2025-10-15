n.d(t, { Z: () => j }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(749280),
    s = n(28664),
    l = n(481060),
    c = n(166459),
    u = n(911969),
    d = n(476326),
    f = n(827498),
    _ = n(555573),
    p = n(213459),
    h = n(998698),
    m = n(895924),
    g = n(581364),
    E = n(667204),
    b = n(873387),
    y = n(809090),
    O = n(104919),
    v = n(583027),
    I = n(978983),
    T = n(592125),
    S = n(703558),
    A = n(430824),
    C = n(626135),
    N = n(585483),
    R = n(619895),
    P = n(844439),
    w = n(981631),
    D = n(388032),
    L = n(491856);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                x(e, t, n[t]);
            });
    }
    return e;
}
function j(e) {
    let { toggleShowMenu: t, showMenu: n, className: c, channelId: u, imageUrl: d, mimeType: f } = e,
        _ = (0, a.e7)([T.Z], () => T.Z.getChannel(u)),
        { Component: p, events: h, play: m } = (0, o.w)(),
        [g, E] = i.useState(!1),
        b = i.useRef(null);
    return null == _
        ? null
        : (g || m(),
          (0, r.jsx)(l.yRy, {
              targetElementRef: b,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(k, {
                      onClose: t,
                      channel: _,
                      imageUrl: d,
                      mimeType: f,
                  });
              },
              position: "right",
              align: "top",
              animation: l.yRy.Animation.NONE,
              onRequestClose: t,
              shouldShow: n,
              children: (e) => {
                  let { onClick: n } = e;
                  return (0, r.jsx)(s.u, {
                      asContainer: !0,
                      text: D.intl.string(D.t.emnnEB),
                      children: (0, r.jsx)(l.P3F, {
                          className: c,
                          focusProps: { offset: 2 },
                          innerRef: b,
                          onClick: t,
                          onMouseEnter: () => {
                              E(!0), h.onMouseEnter();
                          },
                          onMouseLeave: h.onMouseLeave,
                          "aria-label": D.intl.string(D.t.emnnEB),
                          children: (0, r.jsx)(p, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                  });
              },
          }));
}
function k(e) {
    let { onSelect: t, onClose: n, channel: o, imageUrl: s, mimeType: T } = e,
        x = (0, a.e7)([A.Z], () => A.Z.getGuild(o.guild_id)),
        { fetchState: j, imageRecCommandContexts: k } = (0, R.h)({ channelId: o.id }),
        U = j === P.M.FETCHING,
        G = (0, b.g)(o),
        B = (0, p.PL)(!0, !0),
        Z = (0, p.LD)(o.guild_id, !0);
    i.useEffect(() => {
        (j === P.M.ERROR || (j === P.M.FETCHED && 0 === k.length)) && n();
    }, [j, k.length, n]),
        i.useEffect(() => {
            var e, t;
            if (U || 0 === k.length) return;
            let n = [];
            k.forEach((e) => {
                n.push(Number(e.command.id)), null != e.overrideSendCommand && n.push(Number(e.overrideSendCommand.id));
            }),
                C.default.track(w.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
                    guild_id: null != (e = null == o ? void 0 : o.guild_id) ? e : "",
                    channel_id: null != (t = null == o ? void 0 : o.id) ? t : "",
                    application_ids: [...k.map((e) => Number(e.command.applicationId))],
                    command_ids: n,
                });
        }, [k, o, U]);
    let F = i.useCallback(
            async (e) => {
                let t = await fetch(s),
                    n = await t.arrayBuffer(),
                    r = T.join("/"),
                    i = new File([n], "image".concat((0, R.Q)({ contentType: r })), { type: r });
                c.Z.setFile({
                    channelId: o.id,
                    id: e,
                    file: {
                        id: e,
                        file: i,
                        platform: d.ow.WEB,
                        origin: "unknown:app_recommendation",
                    },
                    draftType: S.d.SlashCommand,
                });
            },
            [s, o.id, T],
        ),
        V = i.useCallback(
            async (e, t, n, r) => {
                var i, a;
                if (!G) return;
                let s = e.applicationId,
                    l = (null == (i = B.result) ? void 0 : i.sections[s]) != null,
                    c = (null == (a = Z.result) ? void 0 : a.sections[s]) != null;
                await F(r),
                    null != h.Z.getActiveCommand(o.id) &&
                        _.Po({
                            channelId: o.id,
                            command: null,
                            section: null,
                        }),
                    l || c || p.ZP.queryInstallOnDemandApp(e.applicationId, o.id),
                    _.Po({
                        channelId: o.id,
                        command: e,
                        section: t,
                        location: n,
                        source: f._b.TEXT,
                        initialValues: {
                            [r]: {
                                type: u.jw.ATTACHMENT,
                                name: r,
                                value: "image",
                            },
                        },
                        commandOrigin: n === m.Vh.IMAGE_RECS_SUBMENU ? m.bB.IMAGE_RECS_SUBMENU : m.bB.IMAGE_RECS_MENU,
                    }),
                    (0, v.Mo)({
                        command: e,
                        location: n,
                        sectionName: t.name,
                    }),
                    N.S.dispatch(w.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: o.id });
            },
            [o.id, F, G, B, Z],
        ),
        H = i.useCallback(
            async (e, t, n) => {
                var r, i;
                let a = e.applicationId,
                    s = (null == (r = B.result) ? void 0 : r.sections[a]) != null,
                    l = (null == (i = Z.result) ? void 0 : i.sections[a]) != null;
                s || l || p.ZP.queryInstallOnDemandApp(e.applicationId, o.id);
                let { isAuthorized: c } = await (0, O.L)({
                    applicationId: a,
                    channel: o,
                    commandIntegrationTypes: e.integration_types,
                    appLauncherContext: {
                        entrypoint: f._b.TEXT,
                        location: t,
                        sectionName: void 0,
                    },
                });
                (0, g.qJ)({
                    command: e,
                    location: t,
                    source: f._b.TEXT,
                }),
                    c &&
                        (await F(n),
                        await (0, E.Z)({
                            command: M({}, e),
                            optionValues: {
                                [n]: [
                                    {
                                        text: "image",
                                        type: "text",
                                    },
                                ],
                            },
                            context: {
                                channel: o,
                                guild: x,
                            },
                            commandOrigin:
                                t === m.Vh.IMAGE_RECS_SUBMENU ? m.bB.IMAGE_RECS_SUBMENU : m.bB.IMAGE_RECS_MENU,
                        }));
            },
            [o, x, B, Z, F],
        );
    return (0, r.jsxs)(l.v2r, {
        onSelect: t,
        navId: "image-context-commands-popout",
        onClose: n,
        "aria-label": D.intl.string(D.t["P3ShV+"]),
        children: [
            (0, r.jsx)(
                l.sNh,
                {
                    id: "menu-image-rec-header",
                    render: () =>
                        (0, r.jsx)(l.Text, {
                            className: L.title,
                            variant: "text-md/bold",
                            color: "header-primary",
                            children: D.intl.string(D.t.emnnEB),
                        }),
                    navigable: !1,
                    disabled: !0,
                },
                "menu-image-rec-header",
            ),
            (0, r.jsx)(l.Clw, {}),
            U
                ? (0, r.jsx)(
                      l.sNh,
                      {
                          id: "menu-image-recs-placeholder",
                          render: () => (0, r.jsx)(I.Z, {}),
                          navigable: !1,
                          disabled: !0,
                      },
                      "menu-image-recs-placeholder",
                  )
                : (0, r.jsx)(r.Fragment, {
                      children: k
                          .filter((e) => null != e.imageOption)
                          .map((e) => {
                              let t = e.overrideSendCommand,
                                  n = null == e ? void 0 : e.overrideSendCommandInfo,
                                  i = null != t && null != n,
                                  a = e.onlyAllowEdit || (null != n && null == t),
                                  s = e.imageOption;
                              return null == s
                                  ? null
                                  : (0, r.jsx)(
                                        l.sNh,
                                        {
                                            id: e.command.id,
                                            action: () => {
                                                a
                                                    ? V(e.command, e.section, m.Vh.IMAGE_RECS_MENU, s)
                                                    : H(i ? t : e.command, m.Vh.IMAGE_RECS_MENU, i ? n.imageOption : s);
                                            },
                                            label: e.command.displayName,
                                            subtext: e.command.displayDescription,
                                            subtextLineClamp: 1,
                                            icon: a ? l.vdY : i ? void 0 : l.Uuj,
                                            iconLeft: () =>
                                                (0, r.jsx)(y.Z, {
                                                    channel: o,
                                                    section: e.section,
                                                    width: 32,
                                                    height: 32,
                                                    isSquircle: !0,
                                                    selectable: !1,
                                                }),
                                            iconLeftSize: "lg",
                                            showImageFirst: !0,
                                            disabled: !G && a,
                                            children: i
                                                ? (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          (0, r.jsx)(
                                                              l.sNh,
                                                              {
                                                                  id: "".concat(e.command.id, "-send"),
                                                                  label: D.intl.string(D.t["M+BhUW"]),
                                                                  subtext: D.intl.string(D.t.zXFjJV),
                                                                  action: () =>
                                                                      H(t, m.Vh.IMAGE_RECS_SUBMENU, n.imageOption),
                                                                  icon: l.Uuj,
                                                              },
                                                              "".concat(e.command.id, "-send"),
                                                          ),
                                                          (0, r.jsx)(
                                                              l.sNh,
                                                              {
                                                                  id: "".concat(e.command.id, "-edit"),
                                                                  label: D.intl.string(D.t["wTaN+K"]),
                                                                  subtext: D.intl.string(D.t.bIB3bs),
                                                                  action: () => {
                                                                      V(
                                                                          e.command,
                                                                          e.section,
                                                                          m.Vh.IMAGE_RECS_SUBMENU,
                                                                          s,
                                                                      );
                                                                  },
                                                                  icon: l.vdY,
                                                                  disabled: !G,
                                                              },
                                                              "".concat(e.command.id, "-edit"),
                                                          ),
                                                      ],
                                                  })
                                                : null,
                                        },
                                        e.command.id,
                                    );
                          }),
                  }),
        ],
    });
}
