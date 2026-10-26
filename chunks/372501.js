n.d(l, { default: () => ee });
var t = n(477900),
    i = n(582128),
    a = n(17928),
    s = n(189213),
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
let N = [];
var A = n(248675),
    C = n(105292);
let y = [
        [m.q7.BOT, A.default.UnoAgo],
        [m.q7.ACTIVITY, A.default["I88/iG"]],
        [m.q7.PROFILE_WIDGET, A.default.gXY1x1],
        [m.q7.AUTOMOD, A.default.Q9ruoM],
    ],
    E = { screen_capture: A.default["8/7kE7"], connect_user_to_voice: A.default.uvDWXa };
var I = n(503698),
    P = n.n(I),
    _ = n(31300),
    k = n(983851),
    T = n(430392),
    q = n(794083),
    w = n(715641),
    D = n(231483),
    S = n(323384),
    U = n(939249),
    G = n(750943),
    L = n(858899),
    z = n(95477),
    F = n(103557),
    R = n(950305),
    M = n(47167),
    O = n(548118),
    Z = n(946274),
    W = n(535466),
    X = n(497183),
    B = n(536791);
let H = { screen_capture: _.k, connect_user_to_voice: k.H },
    K = { [m.q7.BOT]: T.RobotIcon, [m.q7.ACTIVITY]: q.b, [m.q7.PROFILE_WIDGET]: w.b, [m.q7.AUTOMOD]: D.ShieldIcon };
function V(e) {
    let { project: l, panel: n } = e,
        { initial: a, editable: s, identity: c, sharing: o } = n,
        u = i.useRef(null),
        d = [
            ...(a
                ? n.initialChannelNames.map((e) => (0, t.jsx)(Q, { icon: S.k, label: e }, e))
                : n.channels.map((e) => (0, t.jsx)($, { channel: e }, e.id))),
            ...n.components.map((e) => {
                let { surface: l, label: n } = e;
                return (0, t.jsx)(Q, { icon: K[l], label: n }, l);
            }),
        ];
    return (0, t.jsxs)("div", {
        className: B.zH,
        children: [
            (0, t.jsxs)("div", {
                className: B.wx,
                children: [
                    s
                        ? null != c.iconURL
                            ? (0, t.jsxs)(U.D, {
                                  className: B.gb,
                                  "aria-label": C.intl.string(C.t["6yrpFR"]),
                                  onClick: () => u.current?.activateUploadDialogue(),
                                  children: [
                                      (0, t.jsx)("img", { className: B.Dp, src: c.iconURL, alt: "" }),
                                      (0, t.jsx)("span", {
                                          className: B.E7,
                                          "aria-hidden": !0,
                                          children: (0, t.jsx)(G.X, { size: "xs", color: "currentColor" }),
                                      }),
                                  ],
                              })
                            : (0, t.jsx)(U.D, {
                                  className: P()(B.gb, B.YX),
                                  "aria-label": C.intl.string(C.t["MsUY/S"]),
                                  onClick: () => u.current?.activateUploadDialogue(),
                                  children: (0, t.jsx)(G.X, { size: "md", color: "currentColor" }),
                              })
                        : (0, t.jsx)(X.A, { project: l, size: "dialog" }),
                    s
                        ? (0, t.jsx)(Z.Ay, {
                              ref: u,
                              className: B.Fg,
                              multiple: !1,
                              filters: [{ name: C.intl.string(C.t["Sp2NF+"]), extensions: W.En }],
                              maxFileSizeBytes: W.Q0,
                              onChange: c.setIcon,
                              onFileSizeError: () =>
                                  (0, L.P0)({ text: C.intl.string(A.default.ZTAAMc), variant: "critical" }),
                              "aria-hidden": !0,
                          })
                        : null,
                ],
            }),
            s
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsxs)("div", {
                              className: B.ZZ,
                              children: [
                                  (0, t.jsx)(r.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      "aria-hidden": !0,
                                      children: C.intl.string(A.default.knevPu),
                                  }),
                                  (0, t.jsx)(z.k, {
                                      label: C.intl.string(A.default.knevPu),
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
                              className: B.ZZ,
                              children: [
                                  (0, t.jsx)(r.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      "aria-hidden": !0,
                                      children: C.intl.string(A.default.ynaGa1),
                                  }),
                                  (0, t.jsx)(F.f, {
                                      label: C.intl.string(A.default.ynaGa1),
                                      hideLabel: !0,
                                      placeholder: C.intl.string(A.default["I+3UTL"]),
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
                      className: B.ZZ,
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
            (0, t.jsx)(Y, { title: C.intl.string(A.default.BqNMms), rows: d }),
            (0, t.jsx)(Y, {
                title: C.intl.string(A.default.LnqeFd),
                rows: n.devicePermissions.map((e) => (0, t.jsx)(Q, { icon: H[e], label: C.intl.string(E[e]) }, e)),
            }),
            null != o
                ? (0, t.jsxs)("section", {
                      className: B.KO,
                      children: [
                          (0, t.jsx)(r.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              children: C.intl.string(A.default.esTM8y),
                          }),
                          (0, t.jsxs)("div", {
                              className: B.Kk,
                              children: [
                                  null != o.guild
                                      ? (0, t.jsx)(O.Ay, {
                                            guild: o.guild,
                                            size: O.Ay.Sizes.MEDIUM,
                                            active: !0,
                                            className: B.$f,
                                            "aria-hidden": !0,
                                        })
                                      : (0, t.jsx)("span", {
                                            className: B.qU,
                                            children: (0, t.jsx)(R.UserIcon, {
                                                size: "xs",
                                                color: "currentColor",
                                                "aria-hidden": !0,
                                            }),
                                        }),
                                  (0, t.jsxs)("div", {
                                      className: B.qg,
                                      children: [
                                          (0, t.jsx)(r.E, {
                                              variant: "text-sm/medium",
                                              color: "text-strong",
                                              lineClamp: 1,
                                              children: o.guild?.name ?? C.intl.string(A.default["37xgkF"]),
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
              className: B.mK,
              children: [
                  (0, t.jsx)(r.E, { variant: "text-sm/normal", color: "text-subtle", children: l }),
                  (0, t.jsx)("div", { children: n }),
              ],
          });
}
function Q(e) {
    let { icon: l, label: n } = e;
    return (0, t.jsxs)("div", {
        className: B.CT,
        children: [
            (0, t.jsx)(l, { size: "xs", color: "currentColor", className: B.Pw, "aria-hidden": !0 }),
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
    let { projectId: l, publishOptions: n, entryPoint: s, savingRef: r, transitionState: u, onClose: d } = e,
        m = (0, o.Ay)(l, n),
        x = (0, a.bG)([c.Ay], () => c.Ay.getProject(l), [l]);
    return (i.useEffect(() => {
        (null == x || null == m) && d();
    }, [x, m, d]),
    null == x || null == m)
        ? null
        : (0, t.jsx)(el, { project: x, publish: m, entryPoint: s, savingRef: r, transitionState: u, onClose: d });
}
function el(e) {
    let { project: l, publish: n, entryPoint: o, savingRef: E, transitionState: I, onClose: P } = e,
        _ = (function (e, l) {
            var n, t, s;
            let r,
                o,
                E,
                I,
                P,
                _,
                {
                    liveName: k,
                    liveDescription: T,
                    channels: q,
                    guild: w,
                    memberCount: D,
                } = ((n = e.id),
                (t = l.guildId),
                (r = (0, a.bG)([c.Ay], () => c.Ay.getProject(n) ?? null, [n])),
                (o = r?.application_id ?? null),
                (E = (0, a.bG)([g.A], () => (null == o ? null : (g.A.getApplication(o) ?? null)), [o])),
                (I = (0, a.bG)([j.A], () => (null == t ? null : (j.A.getGuild(t) ?? null)), [t])),
                (P = (0, a.bG)([v.A], () => (null == t ? null : (v.A.getMemberCount(t) ?? null)), [t])),
                (_ = (0, a.yK)(
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
                U = ((s = e.id), (0, a.bG)([b.A], () => b.A.getPublishStatus(s)?.previewDevicePermissions ?? N)),
                [G, L] = i.useState(e.name),
                [z, F] = i.useState(!1),
                R = null == l.status || !(0, p.lE)(l.status.publishState),
                M = R && (0, c.PV)(e),
                O = (R ? e.preview_supported_surfaces : e.supported_surfaces) ?? [],
                Z = G.trim(),
                W = M ? (0, x.p)(Z) : null,
                X = l.status?.previewAppChannels ?? [];
            async function B() {
                if (z || null != W) return !1;
                F(!0);
                try {
                    return (M && (Z !== e.name || S.changed) && (await (0, d.CW)(e.id, { ...S.changes, name: Z })), !0);
                } finally {
                    F(!1);
                }
            }
            return {
                initial: R,
                editable: M,
                identity: S,
                name: G,
                setName: L,
                nameError: W,
                displayName: R ? e.name : k,
                description: R ? S.description : T,
                initialChannelNames:
                    0 === X.length && O.includes(m.q7.APP_CHANNEL) ? [C.intl.string(A.default.xI4N6Q)] : X,
                channels: q,
                components: y
                    .filter((e) => {
                        let [l] = e;
                        return O.includes(l);
                    })
                    .map((e) => {
                        let [l, n] = e;
                        return { surface: l, label: C.intl.string(n) };
                    }),
                devicePermissions: R ? U : [],
                sharing:
                    null != w
                        ? {
                              guild: w,
                              caption: null != D ? C.intl.formatToPlainString(A.default.ZpZxK9, { count: D }) : null,
                          }
                        : "user" === e.install_scope
                          ? { guild: null, caption: C.intl.string(A.default.RUhWLH) }
                          : null,
                saving: z,
                save: B,
            };
        })(l, n),
        [k, T] = i.useState(null);
    async function q() {
        (T(null), (E.current = !0));
        try {
            if (!(await _.save())) return;
        } catch {
            T(C.intl.string(A.default.Fi7boI));
            return;
        } finally {
            E.current = !1;
        }
        (n.run(o), P());
    }
    return (0, t.jsx)(s.a, {
        transitionState: I,
        onClose: P,
        dismissable: !_.saving,
        title: C.intl.string(A.default.NEPcoi),
        notice: null == k ? void 0 : { message: k, type: "critical", role: "alert" },
        preview: (0, t.jsx)("div", { className: J.m, role: "presentation" }),
        actionBarInput: (0, t.jsx)("div", {
            className: J.N,
            children: (0, t.jsx)(r.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: C.intl.string(A.default["+VqXVO"]),
            }),
        }),
        actions: [
            { text: C.intl.string(C.t["ETE/oC"]), variant: "secondary", onClick: P, disabled: _.saving },
            {
                text: n.label,
                variant: "primary",
                loading: _.saving,
                disabled: n.disabled || null != _.nameError,
                onClick: q,
            },
        ],
        children: (0, t.jsx)(V, { project: l, panel: _ }),
    });
}
