n.d(l, { default: () => es });
var t = n(477900),
    i = n(582128),
    a = n(17928),
    s = n(189213),
    r = n(834730),
    c = n(260498),
    u = n(79733),
    o = n(495273),
    d = n(71393),
    m = n(576705),
    x = n(961553),
    h = n(371169),
    p = n(951178),
    g = n(277085),
    v = n(811587),
    j = n(587895),
    f = n(808728),
    b = n(498642),
    A = n(246338),
    N = n(722701);
let C = [];
var E = n(652215),
    y = n(809526),
    P = n(105292);
let _ = [
        [p.q7.BOT, y.default.UnoAgo],
        [p.q7.ACTIVITY, y.default["I88/iG"]],
        [p.q7.VOICE_CHANNEL, y.default.skjf5I],
        [p.q7.PROFILE_WIDGET, y.default.gXY1x1],
        [p.q7.AUTOMOD, y.default.Q9ruoM],
    ],
    I = { screen_capture: y.default["8/7kE7"], connect_user_to_voice: y.default.uvDWXa };
var k = n(503698),
    T = n.n(k),
    q = n(31300),
    L = n(983851),
    S = n(430392),
    D = n(794083),
    G = n(715641),
    U = n(231483),
    w = n(901117),
    O = n(323384),
    M = n(939249),
    z = n(750943),
    F = n(858899),
    H = n(95477),
    R = n(103557),
    Z = n(950305),
    B = n(193249),
    W = n(47167),
    V = n(548118),
    Y = n(946274),
    K = n(535466),
    X = n(845079),
    Q = n(536791);
let $ = { screen_capture: q.k, connect_user_to_voice: L.H },
    J = {
        [p.q7.BOT]: S.RobotIcon,
        [p.q7.ACTIVITY]: D.b,
        [p.q7.VOICE_CHANNEL]: L.H,
        [p.q7.PROFILE_WIDGET]: G.b,
        [p.q7.AUTOMOD]: U.ShieldIcon,
    };
function ee(e) {
    let { project: l, panel: n } = e,
        { initial: a, editable: s, identity: c, sharing: u } = n,
        o = i.useRef(null),
        { appChannelsPrivate: d } = n,
        m = d?.isPrivate === !0 ? w.Z : O.k,
        x = [
            ...(a
                ? n.initialChannelNames.map((e) => (0, t.jsx)(en, { icon: m, label: e }, `channel:${e}`))
                : n.channels.map((e) => (0, t.jsx)(ei, { channel: e }, e.id))),
            ...n.components.map((e) => {
                let { surface: l, label: n } = e;
                return (0, t.jsx)(en, { icon: J[l], label: n }, l);
            }),
        ];
    return (0, t.jsxs)("div", {
        className: Q.zH,
        children: [
            (0, t.jsxs)("div", {
                className: Q.wx,
                children: [
                    s
                        ? null != c.iconURL
                            ? (0, t.jsxs)(M.D, {
                                  className: Q.gb,
                                  "aria-label": P.intl.string(P.t["6yrpFR"]),
                                  onClick: () => o.current?.activateUploadDialogue(),
                                  children: [
                                      (0, t.jsx)("img", { className: Q.Dp, src: c.iconURL, alt: "" }),
                                      (0, t.jsx)("span", {
                                          className: Q.E7,
                                          "aria-hidden": !0,
                                          children: (0, t.jsx)(z.X, { size: "xs", color: "currentColor" }),
                                      }),
                                  ],
                              })
                            : (0, t.jsx)(M.D, {
                                  className: T()(Q.gb, Q.YX),
                                  "aria-label": P.intl.string(P.t["MsUY/S"]),
                                  onClick: () => o.current?.activateUploadDialogue(),
                                  children: (0, t.jsx)(z.X, { size: "md", color: "currentColor" }),
                              })
                        : (0, t.jsx)(X.A, { project: l, size: "dialog" }),
                    s
                        ? (0, t.jsx)(Y.Ay, {
                              ref: o,
                              className: Q.Fg,
                              multiple: !1,
                              filters: [{ name: P.intl.string(P.t["Sp2NF+"]), extensions: K.En }],
                              maxFileSizeBytes: K.Q0,
                              onChange: c.setIcon,
                              onFileSizeError: () =>
                                  (0, F.P0)({ text: P.intl.string(y.default.ZTAAMc), variant: "critical" }),
                              "aria-hidden": !0,
                          })
                        : null,
                ],
            }),
            s
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsxs)("div", {
                              className: Q.ZZ,
                              children: [
                                  (0, t.jsx)(r.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      "aria-hidden": !0,
                                      children: P.intl.string(y.default.knevPu),
                                  }),
                                  (0, t.jsx)(H.k, {
                                      label: P.intl.string(y.default.knevPu),
                                      hideLabel: !0,
                                      value: n.name,
                                      onChange: n.setName,
                                      error: n.nameError,
                                      maxLength: p.eq,
                                      disabled: n.saving,
                                      fullWidth: !0,
                                  }),
                              ],
                          }),
                          (0, t.jsxs)("div", {
                              className: Q.ZZ,
                              children: [
                                  (0, t.jsx)(r.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      "aria-hidden": !0,
                                      children: P.intl.string(y.default.ynaGa1),
                                  }),
                                  (0, t.jsx)(R.f, {
                                      label: P.intl.string(y.default.ynaGa1),
                                      hideLabel: !0,
                                      placeholder: P.intl.string(y.default["I+3UTL"]),
                                      value: c.description,
                                      onChange: c.setDescription,
                                      maxLength: p.HR,
                                      disabled: n.saving,
                                      rows: 4,
                                      maxRows: 6,
                                      autosize: !0,
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, t.jsxs)("div", {
                      className: Q.ZZ,
                      children: [
                          (0, t.jsx)(r.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              lineClamp: 1,
                              children: n.displayName,
                          }),
                          "" !== n.description
                              ? (0, t.jsx)(r.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    lineClamp: 2,
                                    children: n.description,
                                })
                              : null,
                      ],
                  }),
            (0, t.jsx)(el, { title: P.intl.string(y.default.BqNMms), rows: x }),
            null != d
                ? (0, t.jsx)(et, {
                      channelCount: n.initialChannelNames.length,
                      appChannelsPrivate: d,
                      disabled: n.saving,
                  })
                : null,
            (0, t.jsx)(el, {
                title: P.intl.string(y.default.LnqeFd),
                rows: n.devicePermissions.map((e) => (0, t.jsx)(en, { icon: $[e], label: P.intl.string(I[e]) }, e)),
            }),
            null != u
                ? (0, t.jsxs)("section", {
                      className: Q.KO,
                      children: [
                          (0, t.jsx)(r.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              children: P.intl.string(y.default.esTM8y),
                          }),
                          (0, t.jsxs)("div", {
                              className: Q.Kk,
                              children: [
                                  null != u.guild
                                      ? (0, t.jsx)(V.Ay, {
                                            guild: u.guild,
                                            size: V.Ay.Sizes.MEDIUM,
                                            active: !0,
                                            className: Q.$f,
                                            "aria-hidden": !0,
                                        })
                                      : (0, t.jsx)("span", {
                                            className: Q.qU,
                                            children: (0, t.jsx)(Z.UserIcon, {
                                                size: "xs",
                                                color: "currentColor",
                                                "aria-hidden": !0,
                                            }),
                                        }),
                                  (0, t.jsxs)("div", {
                                      className: Q.qg,
                                      children: [
                                          (0, t.jsx)(r.E, {
                                              variant: "text-sm/medium",
                                              color: "text-strong",
                                              lineClamp: 1,
                                              children: u.guild?.name ?? P.intl.string(y.default["37xgkF"]),
                                          }),
                                          null != u.caption
                                              ? (0, t.jsx)(r.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-subtle",
                                                    children: u.caption,
                                                })
                                              : null,
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function el(e) {
    let { title: l, rows: n } = e;
    return 0 === n.length
        ? null
        : (0, t.jsxs)("section", {
              className: Q.mK,
              children: [
                  (0, t.jsx)(r.E, { variant: "text-sm/normal", color: "text-subtle", children: l }),
                  (0, t.jsx)("div", { children: n }),
              ],
          });
}
function en(e) {
    let { icon: l, label: n } = e;
    return (0, t.jsxs)("div", {
        className: Q.CT,
        children: [
            (0, t.jsx)(l, { size: "sm", color: "currentColor", className: Q.Pw, "aria-hidden": !0 }),
            (0, t.jsx)(r.E, { variant: "text-md/semibold", color: "text-strong", lineClamp: 1, children: n }),
        ],
    });
}
function et(e) {
    let { channelCount: l, appChannelsPrivate: n, disabled: i } = e,
        { isPrivate: a } = n,
        s = P.intl.formatToPlainString(y.default.Td1mlg, { count: l });
    return (0, t.jsxs)("div", {
        className: Q.HY,
        children: [
            (0, t.jsx)(r.E, {
                variant: "text-md/medium",
                color: a ? "text-default" : "text-muted",
                "aria-hidden": !0,
                children: s,
            }),
            (0, t.jsx)(B.d, { label: s, hideLabel: !0, checked: a, disabled: i, onChange: n.setPrivate }),
        ],
    });
}
function ei(e) {
    let { channel: l } = e;
    return (0, t.jsx)(en, { icon: O.k, label: (0, W.Ay)(l) ?? "" });
}
var ea = n(787032);
function es(e) {
    let { projectId: l, publishOptions: n, entryPoint: s, savingRef: r, transitionState: o, onClose: d } = e,
        m = (0, u.Ay)(l, n),
        x = (0, a.bG)([c.Ay], () => c.Ay.getProject(l), [l]);
    return (i.useEffect(() => {
        (null == x || null == m) && d();
    }, [x, m, d]),
    null == x || null == m)
        ? null
        : (0, t.jsx)(er, { project: x, publish: m, entryPoint: s, savingRef: r, transitionState: o, onClose: d });
}
function er(e) {
    let { project: l, publish: n, entryPoint: u, savingRef: I, transitionState: k, onClose: T } = e,
        q = (function (e, l) {
            var n, t, s;
            let r,
                u,
                I,
                k,
                T,
                q,
                {
                    liveName: L,
                    liveDescription: S,
                    channels: D,
                    guild: G,
                    memberCount: U,
                } = ((n = e.id),
                (t = l.guildId),
                (r = (0, a.bG)([c.Ay], () => c.Ay.getProject(n) ?? null, [n])),
                (u = r?.application_id ?? null),
                (I = (0, a.bG)([j.A], () => (null == u ? null : (j.A.getApplication(u) ?? null)), [u])),
                (k = (0, a.bG)([d.A], () => (null == t ? null : (d.A.getGuild(t) ?? null)), [t])),
                (T = (0, a.bG)([b.A], () => (null == t ? null : (b.A.getMemberCount(t) ?? null)), [t])),
                (q = (0, a.yK)(
                    [f.Ay],
                    () =>
                        null == t || null == u
                            ? []
                            : f.Ay.getChannels(t)
                                  [f.I6].filter((e) => {
                                      let { channel: l } = e;
                                      return (0, A.us)(l) === u;
                                  })
                                  .map((e) => {
                                      let { channel: l } = e;
                                      return l;
                                  }),
                    [t, u],
                )),
                {
                    project: r,
                    liveName: I?.name ?? r?.name ?? "",
                    liveDescription: I?.description?.trim() ?? "",
                    channels: q,
                    guild: k,
                    memberCount: T,
                }),
                w = (0, x.A)(e.id),
                O = ((s = e.id), (0, a.bG)([N.A], () => N.A.getPublishStatus(s)?.previewDevicePermissions ?? C)),
                [M, z] = i.useState(e.name),
                [F, H] = i.useState(!1),
                R = null == l.status || !(0, v.lE)(l.status.publishState),
                Z = R && (0, c.PV)(e),
                B = (R ? e.preview_supported_surfaces : e.supported_surfaces) ?? [],
                W = M.trim(),
                V = Z ? (0, g.p)(W) : null,
                Y = l.status?.previewAppChannels ?? [],
                K = 0 === Y.length && B.includes(p.q7.APP_CHANNEL) ? [P.intl.string(y.default.xI4N6Q)] : Y,
                [X, Q] = i.useState(!1),
                $ =
                    Z && K.length > 0 && "user" !== e.install_scope && e.guild_id === l.guildId
                        ? (e.guild_id ?? null)
                        : null,
                J = (0, a.bG)(
                    [d.A, m.A],
                    () => {
                        let e = null == $ ? null : d.A.getGuild($);
                        return (
                            null != e &&
                            m.A.can(E.xBc.MANAGE_CHANNELS, e) &&
                            (0, o.n0)(E.rbe.GUILD_APP, m.A.can(E.xBc.VIEW_CHANNEL, e), m.A.can(E.xBc.CONNECT, e))
                        );
                    },
                    [$],
                );
            async function ee() {
                if (F || null != V) return !1;
                H(!0);
                try {
                    return (Z && (W !== e.name || w.changed) && (await (0, h.CW)(e.id, { ...w.changes, name: W })), !0);
                } finally {
                    H(!1);
                }
            }
            return {
                initial: R,
                editable: Z,
                identity: w,
                name: M,
                setName: z,
                nameError: V,
                displayName: R ? e.name : L,
                description: R ? w.description : S,
                initialChannelNames: K,
                channels: D,
                appChannelsPrivate: J ? { isPrivate: X, setPrivate: Q } : null,
                components: _.filter((e) => {
                    let [l] = e;
                    return B.includes(l);
                }).map((e) => {
                    let [l, n] = e;
                    return { surface: l, label: P.intl.string(n) };
                }),
                devicePermissions: R ? O : [],
                note:
                    R && "user" !== e.install_scope && B.includes(p.q7.AUTOMOD)
                        ? P.intl.string(y.default.bljqPk)
                        : null,
                sharing:
                    null != G
                        ? {
                              guild: G,
                              caption: null != U ? P.intl.formatToPlainString(y.default.ZpZxK9, { count: U }) : null,
                          }
                        : "user" === e.install_scope
                          ? { guild: null, caption: P.intl.string(y.default.RUhWLH) }
                          : null,
                saving: F,
                save: ee,
            };
        })(l, n),
        [L, S] = i.useState(null);
    async function D() {
        (S(null), (I.current = !0));
        try {
            if (!(await q.save())) return;
        } catch {
            S(P.intl.string(y.default.Fi7boI));
            return;
        } finally {
            I.current = !1;
        }
        (n.run(u, q.appChannelsPrivate?.isPrivate === !0), T());
    }
    return (0, t.jsx)(s.a, {
        transitionState: k,
        onClose: T,
        dismissable: !q.saving,
        title: P.intl.string(y.default.NEPcoi),
        notice: null == L ? void 0 : { message: L, type: "critical", role: "alert" },
        preview: (0, t.jsx)("div", { className: ea.m, role: "presentation" }),
        actionBarInput: (0, t.jsx)("div", {
            className: ea.N,
            children:
                null != q.note
                    ? (0, t.jsx)(r.E, { variant: "text-sm/normal", color: "text-subtle", children: q.note })
                    : null,
        }),
        actions: [
            { text: P.intl.string(P.t["ETE/oC"]), variant: "secondary", onClick: T, disabled: q.saving },
            {
                text: n.label,
                variant: "primary",
                loading: q.saving,
                disabled: n.disabled || null != q.nameError,
                onClick: D,
            },
        ],
        children: (0, t.jsx)(ee, { project: l, panel: q }),
    });
}
