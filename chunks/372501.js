n.d(l, { default: () => ee });
var t = n(477900),
    i = n(582128),
    s = n(17928),
    a = n(189213),
    r = n(834730),
    c = n(260498),
    o = n(893067),
    u = n(961553),
    d = n(371169),
    m = n(951178),
    x = n(277085),
    p = n(811587),
    g = n(587895),
    h = n(808728),
    v = n(498642),
    j = n(71393),
    f = n(246338),
    b = n(722701);
let A = [];
var N = n(248675),
    C = n(105292);
let y = [
        [m.q7.BOT, N.default.UnoAgo],
        [m.q7.ACTIVITY, N.default["I88/iG"]],
        [m.q7.PROFILE_WIDGET, N.default.gXY1x1],
        [m.q7.AUTOMOD, N.default.Q9ruoM],
    ],
    E = { screen_capture: N.default["8/7kE7"], connect_user_to_voice: N.default.uvDWXa };
var I = n(503698),
    P = n.n(I),
    _ = n(31300),
    k = n(983851),
    q = n(430392),
    T = n(794083),
    D = n(715641),
    w = n(231483),
    S = n(323384),
    U = n(939249),
    O = n(750943),
    G = n(858899),
    L = n(95477),
    z = n(103557),
    F = n(950305),
    M = n(47167),
    R = n(548118),
    Z = n(946274),
    V = n(535466),
    X = n(497183),
    W = n(536791);
let B = { screen_capture: _.k, connect_user_to_voice: k.H },
    H = { [m.q7.BOT]: q.RobotIcon, [m.q7.ACTIVITY]: T.b, [m.q7.PROFILE_WIDGET]: D.b, [m.q7.AUTOMOD]: w.ShieldIcon };
function K(e) {
    let { project: l, panel: n } = e,
        { initial: s, editable: a, identity: c, sharing: o } = n,
        u = i.useRef(null),
        d = [
            ...(s
                ? n.initialChannelNames.map((e) => (0, t.jsx)(Q, { icon: S.k, label: e }, e))
                : n.channels.map((e) => (0, t.jsx)($, { channel: e }, e.id))),
            ...n.components.map((e) => {
                let { surface: l, label: n } = e;
                return (0, t.jsx)(Q, { icon: H[l], label: n }, l);
            }),
        ];
    return (0, t.jsxs)("div", {
        className: W.zH,
        children: [
            (0, t.jsxs)("div", {
                className: W.wx,
                children: [
                    a
                        ? null != c.iconURL
                            ? (0, t.jsxs)(U.D, {
                                  className: W.gb,
                                  "aria-label": C.intl.string(C.t["6yrpFR"]),
                                  onClick: () => u.current?.activateUploadDialogue(),
                                  children: [
                                      (0, t.jsx)("img", { className: W.Dp, src: c.iconURL, alt: "" }),
                                      (0, t.jsx)("span", {
                                          className: W.E7,
                                          "aria-hidden": !0,
                                          children: (0, t.jsx)(O.X, { size: "xs", color: "currentColor" }),
                                      }),
                                  ],
                              })
                            : (0, t.jsx)(U.D, {
                                  className: P()(W.gb, W.YX),
                                  "aria-label": C.intl.string(C.t["MsUY/S"]),
                                  onClick: () => u.current?.activateUploadDialogue(),
                                  children: (0, t.jsx)(O.X, { size: "md", color: "currentColor" }),
                              })
                        : (0, t.jsx)(X.A, { project: l, size: "dialog" }),
                    a
                        ? (0, t.jsx)(Z.Ay, {
                              ref: u,
                              className: W.Fg,
                              multiple: !1,
                              filters: [{ name: C.intl.string(C.t["Sp2NF+"]), extensions: V.En }],
                              maxFileSizeBytes: V.Q0,
                              onChange: c.setIcon,
                              onFileSizeError: () =>
                                  (0, G.P0)({ text: C.intl.string(N.default.ZTAAMc), variant: "critical" }),
                              "aria-hidden": !0,
                          })
                        : null,
                ],
            }),
            a
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsxs)("div", {
                              className: W.ZZ,
                              children: [
                                  (0, t.jsx)(r.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      "aria-hidden": !0,
                                      children: C.intl.string(N.default.knevPu),
                                  }),
                                  (0, t.jsx)(L.k, {
                                      label: C.intl.string(N.default.knevPu),
                                      hideLabel: !0,
                                      value: n.name,
                                      onChange: n.setName,
                                      error: n.nameError,
                                      maxLength: m.eq,
                                      disabled: n.saving,
                                      fullWidth: !0,
                                  }),
                              ],
                          }),
                          (0, t.jsxs)("div", {
                              className: W.ZZ,
                              children: [
                                  (0, t.jsx)(r.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      "aria-hidden": !0,
                                      children: C.intl.string(N.default.ynaGa1),
                                  }),
                                  (0, t.jsx)(z.f, {
                                      label: C.intl.string(N.default.ynaGa1),
                                      hideLabel: !0,
                                      placeholder: C.intl.string(N.default["I+3UTL"]),
                                      value: c.description,
                                      onChange: c.setDescription,
                                      maxLength: m.HR,
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
                      className: W.ZZ,
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
            (0, t.jsx)(Y, { title: C.intl.string(N.default.BqNMms), rows: d }),
            (0, t.jsx)(Y, {
                title: C.intl.string(N.default.LnqeFd),
                rows: n.devicePermissions.map((e) => (0, t.jsx)(Q, { icon: B[e], label: C.intl.string(E[e]) }, e)),
            }),
            null != o
                ? (0, t.jsxs)("section", {
                      className: W.KO,
                      children: [
                          (0, t.jsx)(r.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              children: C.intl.string(N.default.esTM8y),
                          }),
                          (0, t.jsxs)("div", {
                              className: W.Kk,
                              children: [
                                  null != o.guild
                                      ? (0, t.jsx)(R.Ay, {
                                            guild: o.guild,
                                            size: R.Ay.Sizes.MEDIUM,
                                            active: !0,
                                            className: W.$f,
                                            "aria-hidden": !0,
                                        })
                                      : (0, t.jsx)("span", {
                                            className: W.qU,
                                            children: (0, t.jsx)(F.UserIcon, {
                                                size: "xs",
                                                color: "currentColor",
                                                "aria-hidden": !0,
                                            }),
                                        }),
                                  (0, t.jsxs)("div", {
                                      className: W.qg,
                                      children: [
                                          (0, t.jsx)(r.E, {
                                              variant: "text-sm/medium",
                                              color: "text-strong",
                                              lineClamp: 1,
                                              children: o.guild?.name ?? C.intl.string(N.default["37xgkF"]),
                                          }),
                                          null != o.caption
                                              ? (0, t.jsx)(r.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-subtle",
                                                    children: o.caption,
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
function Y(e) {
    let { title: l, rows: n } = e;
    return 0 === n.length
        ? null
        : (0, t.jsxs)("section", {
              className: W.mK,
              children: [
                  (0, t.jsx)(r.E, { variant: "text-sm/normal", color: "text-subtle", children: l }),
                  (0, t.jsx)("div", { children: n }),
              ],
          });
}
function Q(e) {
    let { icon: l, label: n } = e;
    return (0, t.jsxs)("div", {
        className: W.CT,
        children: [
            (0, t.jsx)(l, { size: "xs", color: "currentColor", className: W.Pw, "aria-hidden": !0 }),
            (0, t.jsx)(r.E, { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: n }),
        ],
    });
}
function $(e) {
    let { channel: l } = e;
    return (0, t.jsx)(Q, { icon: S.k, label: (0, M.Ay)(l) ?? "" });
}
var J = n(787032);
function ee(e) {
    let { projectId: l, publishOptions: n, entryPoint: a, savingRef: r, transitionState: u, onClose: d } = e,
        m = (0, o.Ay)(l, n),
        x = (0, s.bG)([c.Ay], () => c.Ay.getProject(l), [l]);
    return (i.useEffect(() => {
        (null == x || null == m) && d();
    }, [x, m, d]),
    null == x || null == m)
        ? null
        : (0, t.jsx)(el, { project: x, publish: m, entryPoint: a, savingRef: r, transitionState: u, onClose: d });
}
function el(e) {
    let { project: l, publish: n, entryPoint: o, savingRef: E, transitionState: I, onClose: P } = e,
        _ = (function (e, l) {
            var n, t, a;
            let r,
                o,
                E,
                I,
                P,
                _,
                {
                    liveName: k,
                    liveDescription: q,
                    channels: T,
                    guild: D,
                    memberCount: w,
                } = ((n = e.id),
                (t = l.guildId),
                (r = (0, s.bG)([c.Ay], () => c.Ay.getProject(n) ?? null, [n])),
                (o = r?.application_id ?? null),
                (E = (0, s.bG)([g.A], () => (null == o ? null : (g.A.getApplication(o) ?? null)), [o])),
                (I = (0, s.bG)([j.A], () => (null == t ? null : (j.A.getGuild(t) ?? null)), [t])),
                (P = (0, s.bG)([v.A], () => (null == t ? null : (v.A.getMemberCount(t) ?? null)), [t])),
                (_ = (0, s.yK)(
                    [h.Ay],
                    () =>
                        null == t || null == o
                            ? []
                            : h.Ay.getChannels(t)
                                  [h.I6].filter((e) => {
                                      let { channel: l } = e;
                                      return (0, f.us)(l) === o;
                                  })
                                  .map((e) => {
                                      let { channel: l } = e;
                                      return l;
                                  }),
                    [t, o],
                )),
                {
                    project: r,
                    liveName: E?.name ?? r?.name ?? "",
                    liveDescription: E?.description?.trim() ?? "",
                    channels: _,
                    guild: I,
                    memberCount: P,
                }),
                S = (0, u.A)(e.id),
                U = ((a = e.id), (0, s.bG)([b.A], () => b.A.getPublishStatus(a)?.previewDevicePermissions ?? A)),
                [O, G] = i.useState(e.name),
                [L, z] = i.useState(!1),
                F = null == l.status || !(0, p.lE)(l.status.publishState),
                M = F && (0, c.PV)(e),
                R = (F ? e.preview_supported_surfaces : e.supported_surfaces) ?? [],
                Z = O.trim(),
                V = M ? (0, x.p)(Z) : null,
                X = l.status?.previewAppChannels ?? [];
            async function W() {
                if (L || null != V) return !1;
                z(!0);
                try {
                    return (M && (Z !== e.name || S.changed) && (await (0, d.CW)(e.id, { ...S.changes, name: Z })), !0);
                } finally {
                    z(!1);
                }
            }
            return {
                initial: F,
                editable: M,
                identity: S,
                name: O,
                setName: G,
                nameError: V,
                displayName: F ? e.name : k,
                description: F ? S.description : q,
                initialChannelNames:
                    0 === X.length && R.includes(m.q7.APP_CHANNEL) ? [C.intl.string(N.default.xI4N6Q)] : X,
                channels: T,
                components: y
                    .filter((e) => {
                        let [l] = e;
                        return R.includes(l);
                    })
                    .map((e) => {
                        let [l, n] = e;
                        return { surface: l, label: C.intl.string(n) };
                    }),
                devicePermissions: F ? U : [],
                note:
                    F && "user" !== e.install_scope && R.includes(m.q7.AUTOMOD)
                        ? `${C.intl.string(N.default["+VqXVO"])} ${C.intl.string(N.default.bljqPk)}`
                        : C.intl.string(N.default["+VqXVO"]),
                sharing:
                    null != D
                        ? {
                              guild: D,
                              caption: null != w ? C.intl.formatToPlainString(N.default.ZpZxK9, { count: w }) : null,
                          }
                        : "user" === e.install_scope
                          ? { guild: null, caption: C.intl.string(N.default.RUhWLH) }
                          : null,
                saving: L,
                save: W,
            };
        })(l, n),
        [k, q] = i.useState(null);
    async function T() {
        (q(null), (E.current = !0));
        try {
            if (!(await _.save())) return;
        } catch {
            q(C.intl.string(N.default.Fi7boI));
            return;
        } finally {
            E.current = !1;
        }
        (n.run(o), P());
    }
    return (0, t.jsx)(a.a, {
        transitionState: I,
        onClose: P,
        dismissable: !_.saving,
        title: C.intl.string(N.default.NEPcoi),
        notice: null == k ? void 0 : { message: k, type: "critical", role: "alert" },
        preview: (0, t.jsx)("div", { className: J.m, role: "presentation" }),
        actionBarInput: (0, t.jsx)("div", {
            className: J.N,
            children: (0, t.jsx)(r.E, { variant: "text-sm/normal", color: "text-subtle", children: _.note }),
        }),
        actions: [
            { text: C.intl.string(C.t["ETE/oC"]), variant: "secondary", onClick: P, disabled: _.saving },
            {
                text: n.label,
                variant: "primary",
                loading: _.saving,
                disabled: n.disabled || null != _.nameError,
                onClick: T,
            },
        ],
        children: (0, t.jsx)(K, { project: l, panel: _ }),
    });
}
