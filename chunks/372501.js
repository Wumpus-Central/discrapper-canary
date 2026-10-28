n.d(l, { default: () => es });
var t = n(477900),
    i = n(582128),
    a = n(17928),
    s = n(189213),
    r = n(834730),
    c = n(260498),
    u = n(893067),
    o = n(495273),
    d = n(71393),
    m = n(576705),
    x = n(961553),
    h = n(371169),
    g = n(951178),
    p = n(277085),
    v = n(811587),
    j = n(587895),
    f = n(808728),
    b = n(498642),
    A = n(246338),
    N = n(722701);
let C = [];
var E = n(652215),
    y = n(248675),
    P = n(105292);
let _ = [
        [g.q7.BOT, y.default.UnoAgo],
        [g.q7.ACTIVITY, y.default["I88/iG"]],
        [g.q7.PROFILE_WIDGET, y.default.gXY1x1],
        [g.q7.AUTOMOD, y.default.Q9ruoM],
    ],
    I = { screen_capture: y.default["8/7kE7"], connect_user_to_voice: y.default.uvDWXa };
var T = n(503698),
    k = n.n(T),
    q = n(31300),
    S = n(983851),
    D = n(430392),
    G = n(794083),
    L = n(715641),
    w = n(231483),
    U = n(939249),
    O = n(750943),
    z = n(858899),
    M = n(95477),
    R = n(103557),
    F = n(950305),
    Z = n(901117),
    B = n(323384),
    H = n(193249),
    V = n(47167),
    W = n(548118),
    X = n(946274),
    Y = n(535466),
    K = n(497183),
    Q = n(536791);
let $ = { screen_capture: q.k, connect_user_to_voice: S.H },
    J = { [g.q7.BOT]: D.RobotIcon, [g.q7.ACTIVITY]: G.b, [g.q7.PROFILE_WIDGET]: L.b, [g.q7.AUTOMOD]: w.ShieldIcon };
function ee(e) {
    let { project: l, panel: n } = e,
        { initial: a, editable: s, identity: c, sharing: u } = n,
        o = i.useRef(null),
        { appChannelsPrivate: d } = n,
        m = [
            ...(a
                ? n.initialChannelNames.length > 0
                    ? [
                          (0, t.jsx)(
                              et,
                              { channelNames: n.initialChannelNames, appChannelsPrivate: d, disabled: n.saving },
                              "app-channels",
                          ),
                      ]
                    : []
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
                            ? (0, t.jsxs)(U.D, {
                                  className: Q.gb,
                                  "aria-label": P.intl.string(P.t["6yrpFR"]),
                                  onClick: () => o.current?.activateUploadDialogue(),
                                  children: [
                                      (0, t.jsx)("img", { className: Q.Dp, src: c.iconURL, alt: "" }),
                                      (0, t.jsx)("span", {
                                          className: Q.E7,
                                          "aria-hidden": !0,
                                          children: (0, t.jsx)(O.X, { size: "xs", color: "currentColor" }),
                                      }),
                                  ],
                              })
                            : (0, t.jsx)(U.D, {
                                  className: k()(Q.gb, Q.YX),
                                  "aria-label": P.intl.string(P.t["MsUY/S"]),
                                  onClick: () => o.current?.activateUploadDialogue(),
                                  children: (0, t.jsx)(O.X, { size: "md", color: "currentColor" }),
                              })
                        : (0, t.jsx)(K.A, { project: l, size: "dialog" }),
                    s
                        ? (0, t.jsx)(X.Ay, {
                              ref: o,
                              className: Q.Fg,
                              multiple: !1,
                              filters: [{ name: P.intl.string(P.t["Sp2NF+"]), extensions: Y.En }],
                              maxFileSizeBytes: Y.Q0,
                              onChange: c.setIcon,
                              onFileSizeError: () =>
                                  (0, z.P0)({ text: P.intl.string(y.default.ZTAAMc), variant: "critical" }),
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
                                  (0, t.jsx)(M.k, {
                                      label: P.intl.string(y.default.knevPu),
                                      hideLabel: !0,
                                      value: n.name,
                                      onChange: n.setName,
                                      error: n.nameError,
                                      maxLength: g.eq,
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
                                      maxLength: g.HR,
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
            (0, t.jsx)(el, { title: P.intl.string(y.default.BqNMms), rows: m }),
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
                                      ? (0, t.jsx)(W.Ay, {
                                            guild: u.guild,
                                            size: W.Ay.Sizes.MEDIUM,
                                            active: !0,
                                            className: Q.$f,
                                            "aria-hidden": !0,
                                        })
                                      : (0, t.jsx)("span", {
                                            className: Q.qU,
                                            children: (0, t.jsx)(F.UserIcon, {
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
            (0, t.jsx)(l, { size: "xs", color: "currentColor", className: Q.Pw, "aria-hidden": !0 }),
            (0, t.jsx)(r.E, { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: n }),
        ],
    });
}
function et(e) {
    let { channelNames: l, appChannelsPrivate: n, disabled: i } = e,
        a = n?.isPrivate === !0,
        s = a ? Z.Z : B.k,
        c = P.intl.formatToPlainString(y.default.Td1mlg, { count: l.length });
    return (0, t.jsxs)("div", {
        children: [
            l.map((e) =>
                (0, t.jsxs)(
                    "div",
                    {
                        className: Q.fR,
                        children: [
                            (0, t.jsx)(s, { size: "sm", color: "currentColor", className: Q.Pw, "aria-hidden": !0 }),
                            (0, t.jsx)(r.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: e,
                            }),
                        ],
                    },
                    e,
                ),
            ),
            null != n
                ? (0, t.jsxs)("div", {
                      className: Q.HY,
                      children: [
                          (0, t.jsx)(r.E, {
                              variant: "text-md/medium",
                              color: a ? "text-default" : "text-muted",
                              "aria-hidden": !0,
                              children: c,
                          }),
                          (0, t.jsx)(H.d, { label: c, hideLabel: !0, checked: a, disabled: i, onChange: n.setPrivate }),
                      ],
                  })
                : null,
        ],
    });
}
function ei(e) {
    let { channel: l } = e;
    return (0, t.jsx)(en, { icon: B.k, label: (0, V.Ay)(l) ?? "" });
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
    let { project: l, publish: n, entryPoint: u, savingRef: I, transitionState: T, onClose: k } = e,
        q = (function (e, l) {
            var n, t, s;
            let r,
                u,
                I,
                T,
                k,
                q,
                {
                    liveName: S,
                    liveDescription: D,
                    channels: G,
                    guild: L,
                    memberCount: w,
                } = ((n = e.id),
                (t = l.guildId),
                (r = (0, a.bG)([c.Ay], () => c.Ay.getProject(n) ?? null, [n])),
                (u = r?.application_id ?? null),
                (I = (0, a.bG)([j.A], () => (null == u ? null : (j.A.getApplication(u) ?? null)), [u])),
                (T = (0, a.bG)([d.A], () => (null == t ? null : (d.A.getGuild(t) ?? null)), [t])),
                (k = (0, a.bG)([b.A], () => (null == t ? null : (b.A.getMemberCount(t) ?? null)), [t])),
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
                    guild: T,
                    memberCount: k,
                }),
                U = (0, x.A)(e.id),
                O = ((s = e.id), (0, a.bG)([N.A], () => N.A.getPublishStatus(s)?.previewDevicePermissions ?? C)),
                [z, M] = i.useState(e.name),
                [R, F] = i.useState(!1),
                Z = null == l.status || !(0, v.lE)(l.status.publishState),
                B = Z && (0, c.PV)(e),
                H = (Z ? e.preview_supported_surfaces : e.supported_surfaces) ?? [],
                V = z.trim(),
                W = B ? (0, p.p)(V) : null,
                X = l.status?.previewAppChannels ?? [],
                Y = 0 === X.length && H.includes(g.q7.APP_CHANNEL) ? [P.intl.string(y.default.xI4N6Q)] : X,
                [K, Q] = i.useState(!1),
                $ =
                    B && Y.length > 0 && "user" !== e.install_scope && e.guild_id === l.guildId
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
                if (R || null != W) return !1;
                F(!0);
                try {
                    return (B && (V !== e.name || U.changed) && (await (0, h.CW)(e.id, { ...U.changes, name: V })), !0);
                } finally {
                    F(!1);
                }
            }
            return {
                initial: Z,
                editable: B,
                identity: U,
                name: z,
                setName: M,
                nameError: W,
                displayName: Z ? e.name : S,
                description: Z ? U.description : D,
                initialChannelNames: Y,
                channels: G,
                appChannelsPrivate: J ? { isPrivate: K, setPrivate: Q } : null,
                components: _.filter((e) => {
                    let [l] = e;
                    return H.includes(l);
                }).map((e) => {
                    let [l, n] = e;
                    return { surface: l, label: P.intl.string(n) };
                }),
                devicePermissions: Z ? O : [],
                note:
                    Z && "user" !== e.install_scope && H.includes(g.q7.AUTOMOD)
                        ? `${P.intl.string(y.default["+VqXVO"])} ${P.intl.string(y.default.bljqPk)}`
                        : P.intl.string(y.default["+VqXVO"]),
                sharing:
                    null != L
                        ? {
                              guild: L,
                              caption: null != w ? P.intl.formatToPlainString(y.default.ZpZxK9, { count: w }) : null,
                          }
                        : "user" === e.install_scope
                          ? { guild: null, caption: P.intl.string(y.default.RUhWLH) }
                          : null,
                saving: R,
                save: ee,
            };
        })(l, n),
        [S, D] = i.useState(null);
    async function G() {
        (D(null), (I.current = !0));
        try {
            if (!(await q.save())) return;
        } catch {
            D(P.intl.string(y.default.Fi7boI));
            return;
        } finally {
            I.current = !1;
        }
        (n.run(u, q.appChannelsPrivate?.isPrivate === !0), k());
    }
    return (0, t.jsx)(s.a, {
        transitionState: T,
        onClose: k,
        dismissable: !q.saving,
        title: P.intl.string(y.default.NEPcoi),
        notice: null == S ? void 0 : { message: S, type: "critical", role: "alert" },
        preview: (0, t.jsx)("div", { className: ea.m, role: "presentation" }),
        actionBarInput: (0, t.jsx)("div", {
            className: ea.N,
            children: (0, t.jsx)(r.E, { variant: "text-sm/normal", color: "text-subtle", children: q.note }),
        }),
        actions: [
            { text: P.intl.string(P.t["ETE/oC"]), variant: "secondary", onClick: k, disabled: q.saving },
            {
                text: n.label,
                variant: "primary",
                loading: q.saving,
                disabled: n.disabled || null != q.nameError,
                onClick: G,
            },
        ],
        children: (0, t.jsx)(ee, { project: l, panel: q }),
    });
}
