n.d(t, { Z: () => j }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(749280),
    s = n(481060),
    l = n(166459),
    c = n(911969),
    u = n(476326),
    d = n(827498),
    f = n(555573),
    _ = n(213459),
    p = n(998698),
    h = n(895924),
    m = n(581364),
    g = n(667204),
    E = n(873387),
    b = n(809090),
    y = n(104919),
    O = n(583027),
    v = n(978983),
    I = n(592125),
    T = n(703558),
    S = n(430824),
    A = n(626135),
    N = n(585483),
    C = n(619895),
    R = n(844439),
    P = n(981631),
    w = n(388032),
    D = n(491856);
function L(e, t, n) {
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
function x(e) {
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
                L(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e) {
    let { toggleShowMenu: t, showMenu: n, className: l, channelId: c, imageUrl: u, mimeType: d } = e,
        f = (0, o.e7)([I.Z], () => I.Z.getChannel(c)),
        { Component: _, events: p, play: h } = (0, a.w)(),
        [m, g] = i.useState(!1),
        E = i.useRef(null);
    return null == f
        ? null
        : (m || h(),
          (0, r.jsx)(s.yRy, {
              targetElementRef: E,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(U, {
                      onClose: t,
                      channel: f,
                      imageUrl: u,
                      mimeType: d,
                  });
              },
              position: "right",
              align: "top",
              animation: s.yRy.Animation.NONE,
              onRequestClose: t,
              shouldShow: n,
              children: (e) => {
                  let { onClick: n } = e;
                  return (0, r.jsx)(s.ua7, {
                      text: w.intl.string(w.t.emnnEB),
                      children: (e) =>
                          (0, r.jsx)(
                              s.P3F,
                              k(x({}, e), {
                                  className: l,
                                  focusProps: { offset: 2 },
                                  innerRef: E,
                                  onClick: t,
                                  onMouseEnter: () => {
                                      g(!0), p.onMouseEnter();
                                  },
                                  onMouseLeave: p.onMouseLeave,
                                  "aria-label": w.intl.string(w.t.emnnEB),
                                  children: (0, r.jsx)(_, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: "currentColor",
                                  }),
                              }),
                          ),
                  });
              },
          }));
}
function U(e) {
    let { onSelect: t, onClose: n, channel: a, imageUrl: I, mimeType: L } = e,
        M = (0, o.e7)([S.Z], () => S.Z.getGuild(a.guild_id)),
        { fetchState: k, imageRecCommandContexts: j } = (0, C.h)({ channelId: a.id }),
        U = k === R.M.FETCHING,
        G = (0, E.g)(a),
        B = (0, _.PL)(!0, !0),
        Z = (0, _.LD)(a.guild_id, !0);
    i.useEffect(() => {
        (k === R.M.ERROR || (k === R.M.FETCHED && 0 === j.length)) && n();
    }, [k, j.length, n]),
        i.useEffect(() => {
            var e, t;
            if (U || 0 === j.length) return;
            let n = [];
            j.forEach((e) => {
                n.push(Number(e.command.id)), null != e.overrideSendCommand && n.push(Number(e.overrideSendCommand.id));
            }),
                A.default.track(P.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
                    guild_id: null != (e = null == a ? void 0 : a.guild_id) ? e : "",
                    channel_id: null != (t = null == a ? void 0 : a.id) ? t : "",
                    application_ids: [...j.map((e) => Number(e.command.applicationId))],
                    command_ids: n,
                });
        }, [j, a, U]);
    let F = i.useCallback(
            async (e) => {
                let t = await fetch(I),
                    n = await t.arrayBuffer(),
                    r = L.join("/"),
                    i = new File([n], "image".concat((0, C.Q)({ contentType: r })), { type: r });
                l.Z.setFile({
                    channelId: a.id,
                    id: e,
                    file: {
                        id: e,
                        file: i,
                        platform: u.ow.WEB,
                        origin: "unknown:app_recommendation",
                    },
                    draftType: T.d.SlashCommand,
                });
            },
            [I, a.id, L],
        ),
        V = i.useCallback(
            async (e, t, n, r) => {
                var i, o;
                if (!G) return;
                let s = e.applicationId,
                    l = (null == (i = B.result) ? void 0 : i.sections[s]) != null,
                    u = (null == (o = Z.result) ? void 0 : o.sections[s]) != null;
                await F(r),
                    null != p.Z.getActiveCommand(a.id) &&
                        f.Po({
                            channelId: a.id,
                            command: null,
                            section: null,
                        }),
                    l || u || _.ZP.queryInstallOnDemandApp(e.applicationId, a.id),
                    f.Po({
                        channelId: a.id,
                        command: e,
                        section: t,
                        location: n,
                        source: d._b.TEXT,
                        initialValues: {
                            [r]: {
                                type: c.jw.ATTACHMENT,
                                name: r,
                                value: "image",
                            },
                        },
                        commandOrigin: n === h.Vh.IMAGE_RECS_SUBMENU ? h.bB.IMAGE_RECS_SUBMENU : h.bB.IMAGE_RECS_MENU,
                    }),
                    (0, O.Mo)({
                        command: e,
                        location: n,
                        sectionName: t.name,
                    }),
                    N.S.dispatch(P.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: a.id });
            },
            [a.id, F, G, B, Z],
        ),
        H = i.useCallback(
            async (e, t, n) => {
                var r, i;
                let o = e.applicationId,
                    s = (null == (r = B.result) ? void 0 : r.sections[o]) != null,
                    l = (null == (i = Z.result) ? void 0 : i.sections[o]) != null;
                s || l || _.ZP.queryInstallOnDemandApp(e.applicationId, a.id);
                let { isAuthorized: c } = await (0, y.L)({
                    applicationId: o,
                    channel: a,
                    commandIntegrationTypes: e.integration_types,
                    appLauncherContext: {
                        entrypoint: d._b.TEXT,
                        location: t,
                        sectionName: void 0,
                    },
                });
                (0, m.qJ)({
                    command: e,
                    location: t,
                    source: d._b.TEXT,
                }),
                    c &&
                        (await F(n),
                        await (0, g.Z)({
                            command: x({}, e),
                            optionValues: {
                                [n]: [
                                    {
                                        text: "image",
                                        type: "text",
                                    },
                                ],
                            },
                            context: {
                                channel: a,
                                guild: M,
                            },
                            commandOrigin:
                                t === h.Vh.IMAGE_RECS_SUBMENU ? h.bB.IMAGE_RECS_SUBMENU : h.bB.IMAGE_RECS_MENU,
                        }));
            },
            [a, M, B, Z, F],
        );
    return (0, r.jsxs)(s.v2r, {
        onSelect: t,
        navId: "image-context-commands-popout",
        onClose: n,
        "aria-label": w.intl.string(w.t.P3ShV1),
        children: [
            (0, r.jsx)(
                s.sNh,
                {
                    id: "menu-image-rec-header",
                    render: () =>
                        (0, r.jsx)(s.Text, {
                            className: D.title,
                            variant: "text-md/bold",
                            color: "header-primary",
                            children: w.intl.string(w.t.emnnEB),
                        }),
                    navigable: !1,
                    disabled: !0,
                },
                "menu-image-rec-header",
            ),
            (0, r.jsx)(s.Clw, {}),
            U
                ? (0, r.jsx)(
                      s.sNh,
                      {
                          id: "menu-image-recs-placeholder",
                          render: () => (0, r.jsx)(v.Z, {}),
                          navigable: !1,
                          disabled: !0,
                      },
                      "menu-image-recs-placeholder",
                  )
                : (0, r.jsx)(r.Fragment, {
                      children: j
                          .filter((e) => null != e.imageOption)
                          .map((e) => {
                              let t = e.overrideSendCommand,
                                  n = null == e ? void 0 : e.overrideSendCommandInfo,
                                  i = null != t && null != n,
                                  o = e.onlyAllowEdit || (null != n && null == t),
                                  l = e.imageOption;
                              return null == l
                                  ? null
                                  : (0, r.jsx)(
                                        s.sNh,
                                        {
                                            id: e.command.id,
                                            action: () => {
                                                o
                                                    ? V(e.command, e.section, h.Vh.IMAGE_RECS_MENU, l)
                                                    : H(i ? t : e.command, h.Vh.IMAGE_RECS_MENU, i ? n.imageOption : l);
                                            },
                                            label: e.command.displayName,
                                            subtext: e.command.displayDescription,
                                            subtextLineClamp: 1,
                                            icon: o ? s.vdY : i ? void 0 : s.Uuj,
                                            iconLeft: () =>
                                                (0, r.jsx)(b.Z, {
                                                    channel: a,
                                                    section: e.section,
                                                    width: 32,
                                                    height: 32,
                                                    isSquircle: !0,
                                                    selectable: !1,
                                                }),
                                            iconLeftSize: "lg",
                                            showImageFirst: !0,
                                            disabled: !G && o,
                                            children: i
                                                ? (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          (0, r.jsx)(
                                                              s.sNh,
                                                              {
                                                                  id: "".concat(e.command.id, "-send"),
                                                                  label: w.intl.string(w.t["M+BhUV"]),
                                                                  subtext: w.intl.string(w.t.zXFjJS),
                                                                  action: () =>
                                                                      H(t, h.Vh.IMAGE_RECS_SUBMENU, n.imageOption),
                                                                  icon: s.Uuj,
                                                              },
                                                              "".concat(e.command.id, "-send"),
                                                          ),
                                                          (0, r.jsx)(
                                                              s.sNh,
                                                              {
                                                                  id: "".concat(e.command.id, "-edit"),
                                                                  label: w.intl.string(w.t["wTaN+P"]),
                                                                  subtext: w.intl.string(w.t.bIB3bm),
                                                                  action: () => {
                                                                      V(
                                                                          e.command,
                                                                          e.section,
                                                                          h.Vh.IMAGE_RECS_SUBMENU,
                                                                          l,
                                                                      );
                                                                  },
                                                                  icon: s.vdY,
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
