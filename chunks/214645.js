t.d(n, { default: () => ei });
var l = t(477900),
    i = t(582128),
    a = t(224640),
    r = t(20742),
    s = t(430993),
    o = t(696208),
    c = t(331322),
    d = t(834730),
    u = t(540665),
    g = t(191850),
    m = t(792996),
    p = t(580342),
    x = t(855986),
    h = t(961553),
    f = t(60498),
    j = t(233470),
    v = t(951178),
    b = t(722701);
let I = [];
var C = t(277085);
let A = [
        [v.q7.BOT, g.default.UnoAgo],
        [v.q7.ACTIVITY, g.default["I88/iG"]],
        [v.q7.VOICE_CHANNEL, g.default.skjf5I],
        [v.q7.PROFILE_WIDGET, g.default.gXY1x1],
        [v.q7.AUTOMOD, g.default.Q9ruoM],
        [v.q7.OVERLAY, g.default.KR5R34],
    ],
    N = { screen_capture: g.default["8/7kE7"], connect_user_to_voice: g.default.uvDWXa };
var y = t(641655),
    E = t(503698),
    w = t.n(E),
    S = t(31300),
    k = t(983851),
    L = t(430392),
    P = t(794083),
    T = t(715641),
    _ = t(231483),
    q = t(687966),
    O = t(323384),
    R = t(858899),
    D = t(95477),
    U = t(103557),
    F = t(939249),
    M = t(750943),
    Y = t(265872),
    V = t(165862),
    W = t(477782),
    z = t(95635),
    B = t(152367),
    G = t(946274),
    H = t(535466),
    Z = t(407431),
    Q = t(206393);
let X = { screen_capture: S.ScreenIcon, connect_user_to_voice: k.VoiceNormalIcon },
    K = {
        [v.q7.BOT]: L.RobotIcon,
        [v.q7.ACTIVITY]: P.ActivitiesIcon,
        [v.q7.VOICE_CHANNEL]: k.VoiceNormalIcon,
        [v.q7.PROFILE_WIDGET]: T.BadgeIcon,
        [v.q7.AUTOMOD]: _.ShieldIcon,
        [v.q7.OVERLAY]: q.GameControllerIcon,
    };
function J(e) {
    let { review: n, onConjureIcon: t } = e,
        { identity: a } = n,
        r = i.useRef(null),
        s = i.useCallback(() => r.current?.activateUploadDialogue(), []),
        o = [
            ...n.channelNames.map((e) => (0, l.jsx)(et, { icon: O.AppsIcon, label: e }, `channel:${e}`)),
            ...n.components.map((e) => {
                let { surface: n, label: t } = e;
                return (0, l.jsx)(et, { icon: K[n], label: t }, n);
            }),
        ];
    return (0, l.jsxs)("div", {
        className: Q.zH,
        children: [
            n.managedCopy
                ? (0, l.jsx)(Z.A, { projectId: n.projectId })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("div", {
                              className: Q.wx,
                              children: [
                                  (0, l.jsx)(ee, {
                                      onUpload: s,
                                      onConjure: t,
                                      children: (e) => (0, l.jsx)($, { iconURL: a.iconURL, onClick: e }),
                                  }),
                                  (0, l.jsx)(G.Ay, {
                                      ref: r,
                                      className: Q.Fg,
                                      multiple: !1,
                                      filters: [{ name: m.intl.string(m.t["Sp2NF+"]), extensions: H.En }],
                                      maxFileSizeBytes: H.Q0,
                                      onChange: a.setIcon,
                                      onFileSizeError: () =>
                                          (0, R.P0)({ text: m.intl.string(g.default.ZTAAMc), variant: "critical" }),
                                      "aria-hidden": !0,
                                  }),
                              ],
                          }),
                          (0, l.jsxs)("div", {
                              className: Q.ZZ,
                              children: [
                                  (0, l.jsx)(d.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      "aria-hidden": !0,
                                      children: m.intl.string(g.default.knevPu),
                                  }),
                                  (0, l.jsx)(D.k, {
                                      label: m.intl.string(g.default.knevPu),
                                      hideLabel: !0,
                                      value: n.name,
                                      onChange: n.setName,
                                      error: n.nameError,
                                      maxLength: 128,
                                      disabled: n.saving,
                                      fullWidth: !0,
                                  }),
                              ],
                          }),
                          (0, l.jsxs)("div", {
                              className: Q.ZZ,
                              children: [
                                  (0, l.jsx)(d.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      "aria-hidden": !0,
                                      children: m.intl.string(g.default.ynaGa1),
                                  }),
                                  (0, l.jsx)(U.f, {
                                      label: m.intl.string(g.default.ynaGa1),
                                      hideLabel: !0,
                                      placeholder: m.intl.string(g.default["I+3UTL"]),
                                      value: a.description,
                                      onChange: a.setDescription,
                                      maxLength: 400,
                                      disabled: n.saving,
                                      rows: 4,
                                      maxRows: 6,
                                      autosize: !0,
                                  }),
                              ],
                          }),
                      ],
                  }),
            (0, l.jsx)(en, { title: m.intl.string(g.default.BqNMms), rows: o }),
            (0, l.jsx)(en, {
                title: m.intl.string(g.default.LnqeFd),
                rows: n.devicePermissions.map((e) => (0, l.jsx)(et, { icon: X[e], label: m.intl.string(N[e]) }, e)),
            }),
        ],
    });
}
function $(e) {
    let { iconURL: n, onClick: t } = e;
    return null != n
        ? (0, l.jsxs)(F.D, {
              className: Q.gb,
              "aria-label": m.intl.string(m.t["6yrpFR"]),
              onClick: t,
              children: [
                  (0, l.jsx)("img", { className: Q.Dp, src: n, alt: "" }),
                  (0, l.jsx)("span", {
                      className: Q.E7,
                      "aria-hidden": !0,
                      children: (0, l.jsx)(M.ImagePlusIcon, { size: "xs", color: "currentColor" }),
                  }),
              ],
          })
        : (0, l.jsx)(F.D, {
              className: w()(Q.gb, Q.YX),
              "aria-label": m.intl.string(m.t["MsUY/S"]),
              onClick: t,
              children: (0, l.jsx)(M.ImagePlusIcon, { size: "md", color: "currentColor" }),
          });
}
function ee(e) {
    let { onUpload: n, onConjure: t, children: a } = e,
        [r, s] = i.useState(!1),
        o = i.useRef(null),
        c = i.useCallback(() => s(!1), []);
    return (0, l.jsx)(Y.Y, {
        targetElementRef: o,
        shouldShow: r,
        onRequestClose: c,
        position: "bottom",
        align: "left",
        animation: Y.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, l.jsxs)(V.W, {
                navId: "conjure-app-icon",
                "aria-label": m.intl.string(m.t["6yrpFR"]),
                onClose: i,
                onSelect: i,
                children: [
                    (0, l.jsx)(W.Dr, {
                        id: "conjure-app-icon-upload",
                        label: m.intl.string(m.t["MsUY/S"]),
                        iconLeft: z.UploadIcon,
                        leadingAccessory: { type: "icon", icon: z.UploadIcon },
                        action: () => {
                            (c(), n());
                        },
                    }),
                    (0, l.jsx)(W.Dr, {
                        id: "conjure-app-icon-conjure",
                        label: m.intl.string(g.default["oAG/BY"]),
                        iconLeft: B.MagicWandIcon,
                        leadingAccessory: { type: "icon", icon: B.MagicWandIcon },
                        action: () => {
                            (c(), t());
                        },
                    }),
                ],
            });
        },
        children: () => (0, l.jsx)("div", { ref: o, children: a(() => s((e) => !e)) }),
    });
}
function en(e) {
    let { title: n, rows: t } = e;
    return 0 === t.length
        ? null
        : (0, l.jsxs)("section", {
              className: Q.mK,
              children: [
                  (0, l.jsx)(d.E, { variant: "body-sm/normal", color: "text-subtle", children: n }),
                  (0, l.jsx)("div", { children: t }),
              ],
          });
}
function et(e) {
    let { icon: n, label: t } = e;
    return (0, l.jsxs)("div", {
        className: Q.CT,
        children: [
            (0, l.jsx)(n, { size: "sm", color: "currentColor", className: Q.Pw, "aria-hidden": !0 }),
            (0, l.jsx)(d.E, { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: t }),
        ],
    });
}
var el = t(252753);
function ei(e) {
    let { projectId: n, transitionState: t, onClose: a } = e,
        r = (0, y.A)(n),
        { project: s } = r;
    return (i.useEffect(() => {
        null == s && a();
    }, [s, a]),
    null == s)
        ? null
        : (0, l.jsx)(ea, { project: s, sharing: r, transitionState: t, onClose: a });
}
function ea(e) {
    let { project: n, sharing: t, transitionState: N, onClose: y } = e,
        E = (function (e) {
            var n;
            let t,
                l = (0, h.A)(e.id),
                a = (0, f.AJ)(e.id),
                r = ((n = e.id), (0, x.bG)([b.A], () => b.A.getPublishStatus(n)?.previewDevicePermissions ?? I)),
                s = (0, x.bG)([b.A], () => b.A.getPublishStatus(e.id)?.previewAppChannels, [e.id]),
                [o, c] = i.useState(e.name),
                [d, u] = i.useState(!1),
                p = [...new Set([...(e.preview_supported_surfaces ?? []), ...(e.supported_surfaces ?? [])])],
                N = o.trim(),
                y = (0, C.p)(N),
                E = s ?? [],
                w =
                    E.length > 1
                        ? E
                        : 1 === E.length || p.includes(v.q7.APP_CHANNEL)
                          ? [m.intl.string(g.default.xI4N6Q)]
                          : [],
                S = w.length > 0 && "user" === e.install_scope ? p.filter((e) => e !== v.q7.ACTIVITY) : p;
            return {
                projectId: e.id,
                managedCopy: a,
                identity: l,
                name: o,
                setName: c,
                nameError: y,
                channelNames: w,
                components: (0 ===
                    (t = A.filter((e) => {
                        let [n] = e;
                        return S.includes(n);
                    })).length && S.includes(v.q7.APPLICATION_COMMANDS)
                    ? A.filter((e) => {
                          let [n] = e;
                          return n === v.q7.BOT;
                      })
                    : t
                ).map((e) => {
                    let [n, t] = e;
                    return { surface: n, label: m.intl.string(t) };
                }),
                devicePermissions: r,
                saving: d,
                save: async function () {
                    if (d || null != y) return !1;
                    u(!0);
                    try {
                        return (
                            !a && (N !== e.name || l.changed) && (await (0, j.CW)(e.id, { ...l.changes, name: N })), !0
                        );
                    } finally {
                        u(!1);
                    }
                },
            };
        })(n);
    (0, p.A)(n.id);
    let [w, S] = i.useState("review"),
        [k, L] = i.useState(!1),
        P = "review" === w,
        T = P ? 1 : 2,
        _ = E.saving,
        q = m.intl.formatToPlainString(g.default.EwO6z5, { step: T, count: 2 }),
        O = P && k ? m.intl.string(g.default.Fi7boI) : null,
        R = m.intl.string(P ? g.default["Vay+ld"] : g.default.IN5vt4);
    return (0, l.jsxs)(a.d, {
        transitionState: N,
        onClose: y,
        dismissable: !_,
        size: "md",
        "aria-label": R,
        children: [
            (0, l.jsx)(r.rQ, {
                gradientColor: "blue",
                title: R,
                subtitle: m.intl.string(P ? g.default["N2HM8/"] : g.default.mbybxl),
                progressBarProps: { value: T, maxValue: 2, "aria-label": q, valueLabel: q },
            }),
            (0, l.jsx)(s.c, {
                children: (0, l.jsxs)(c.B, {
                    gap: 16,
                    children: [
                        null != O
                            ? (0, l.jsx)(d.E, {
                                  variant: "body-sm/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: O,
                              })
                            : null,
                        P
                            ? (0, l.jsx)(J, {
                                  review: E,
                                  onConjureIcon: async function () {
                                      var e;
                                      L(!1);
                                      try {
                                          if (!(await E.save())) return;
                                      } catch {
                                          L(!0);
                                          return;
                                      }
                                      (y(), (e = n.id), (0, u.dv)(e, m.intl.string(g.default["hOg/Uu"])));
                                  },
                              })
                            : (0, l.jsx)(el.A, { project: n, sharing: t }),
                    ],
                }),
            }),
            (0, l.jsx)(o.H, {
                actionsFullWidth: !0,
                actions: P
                    ? [
                          { text: m.intl.string(m.t["ETE/oC"]), variant: "secondary", onClick: y, disabled: _ },
                          {
                              text: m.intl.string(m.t.PDTjLN),
                              variant: "primary",
                              loading: E.saving,
                              disabled: null != E.nameError,
                              onClick: async function () {
                                  L(!1);
                                  try {
                                      if (!(await E.save())) return;
                                  } catch {
                                      L(!0);
                                      return;
                                  }
                                  S("access");
                              },
                          },
                      ]
                    : [
                          {
                              text: m.intl.string(m.t["13/7kX"]),
                              variant: "secondary",
                              onClick: () => S("review"),
                              disabled: _,
                          },
                          { text: m.intl.string(m.t.i4jeWR), variant: "primary", onClick: y },
                      ],
            }),
        ],
    });
}
