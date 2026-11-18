t.d(n, { default: () => et });
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
    x = t(580342),
    f = t(855986),
    h = t(961553),
    p = t(233470),
    j = t(951178),
    v = t(722701);
let b = [];
var C = t(277085);
let I = [
        [j.q7.BOT, g.default.UnoAgo],
        [j.q7.ACTIVITY, g.default["I88/iG"]],
        [j.q7.VOICE_CHANNEL, g.default.skjf5I],
        [j.q7.PROFILE_WIDGET, g.default.gXY1x1],
        [j.q7.AUTOMOD, g.default.Q9ruoM],
        [j.q7.OVERLAY, g.default.KR5R34],
    ],
    A = { screen_capture: g.default["8/7kE7"], connect_user_to_voice: g.default.uvDWXa };
var N = t(641655),
    y = t(503698),
    E = t.n(y),
    w = t(31300),
    S = t(983851),
    k = t(430392),
    L = t(794083),
    P = t(715641),
    T = t(231483),
    _ = t(687966),
    q = t(323384),
    O = t(858899),
    R = t(95477),
    D = t(103557),
    U = t(939249),
    M = t(750943),
    Y = t(265872),
    F = t(165862),
    V = t(477782),
    W = t(95635),
    z = t(152367),
    B = t(946274),
    G = t(535466),
    H = t(206393);
let Z = { screen_capture: w.ScreenIcon, connect_user_to_voice: S.VoiceNormalIcon },
    Q = {
        [j.q7.BOT]: k.RobotIcon,
        [j.q7.ACTIVITY]: L.ActivitiesIcon,
        [j.q7.VOICE_CHANNEL]: S.VoiceNormalIcon,
        [j.q7.PROFILE_WIDGET]: P.BadgeIcon,
        [j.q7.AUTOMOD]: T.ShieldIcon,
        [j.q7.OVERLAY]: _.GameControllerIcon,
    };
function X(e) {
    let { review: n, onConjureIcon: t } = e,
        { identity: a } = n,
        r = i.useRef(null),
        s = i.useCallback(() => r.current?.activateUploadDialogue(), []),
        o = [
            ...n.channelNames.map((e) => (0, l.jsx)(ee, { icon: q.AppsIcon, label: e }, `channel:${e}`)),
            ...n.components.map((e) => {
                let { surface: n, label: t } = e;
                return (0, l.jsx)(ee, { icon: Q[n], label: t }, n);
            }),
        ];
    return (0, l.jsxs)("div", {
        className: H.zH,
        children: [
            (0, l.jsxs)("div", {
                className: H.wx,
                children: [
                    (0, l.jsx)($, {
                        onUpload: s,
                        onConjure: t,
                        children: (e) => (0, l.jsx)(K, { iconURL: a.iconURL, onClick: e }),
                    }),
                    (0, l.jsx)(B.Ay, {
                        ref: r,
                        className: H.Fg,
                        multiple: !1,
                        filters: [{ name: m.intl.string(m.t["Sp2NF+"]), extensions: G.En }],
                        maxFileSizeBytes: G.Q0,
                        onChange: a.setIcon,
                        onFileSizeError: () =>
                            (0, O.P0)({ text: m.intl.string(g.default.ZTAAMc), variant: "critical" }),
                        "aria-hidden": !0,
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: H.ZZ,
                children: [
                    (0, l.jsx)(d.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        "aria-hidden": !0,
                        children: m.intl.string(g.default.knevPu),
                    }),
                    (0, l.jsx)(R.k, {
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
                className: H.ZZ,
                children: [
                    (0, l.jsx)(d.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        "aria-hidden": !0,
                        children: m.intl.string(g.default.ynaGa1),
                    }),
                    (0, l.jsx)(D.f, {
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
            (0, l.jsx)(J, { title: m.intl.string(g.default.BqNMms), rows: o }),
            (0, l.jsx)(J, {
                title: m.intl.string(g.default.LnqeFd),
                rows: n.devicePermissions.map((e) => (0, l.jsx)(ee, { icon: Z[e], label: m.intl.string(A[e]) }, e)),
            }),
        ],
    });
}
function K(e) {
    let { iconURL: n, onClick: t } = e;
    return null != n
        ? (0, l.jsxs)(U.D, {
              className: H.gb,
              "aria-label": m.intl.string(m.t["6yrpFR"]),
              onClick: t,
              children: [
                  (0, l.jsx)("img", { className: H.Dp, src: n, alt: "" }),
                  (0, l.jsx)("span", {
                      className: H.E7,
                      "aria-hidden": !0,
                      children: (0, l.jsx)(M.ImagePlusIcon, { size: "xs", color: "currentColor" }),
                  }),
              ],
          })
        : (0, l.jsx)(U.D, {
              className: E()(H.gb, H.YX),
              "aria-label": m.intl.string(m.t["MsUY/S"]),
              onClick: t,
              children: (0, l.jsx)(M.ImagePlusIcon, { size: "md", color: "currentColor" }),
          });
}
function $(e) {
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
            return (0, l.jsxs)(F.W, {
                navId: "conjure-app-icon",
                "aria-label": m.intl.string(m.t["6yrpFR"]),
                onClose: i,
                onSelect: i,
                children: [
                    (0, l.jsx)(V.Dr, {
                        id: "conjure-app-icon-upload",
                        label: m.intl.string(m.t["MsUY/S"]),
                        iconLeft: W.UploadIcon,
                        leadingAccessory: { type: "icon", icon: W.UploadIcon },
                        action: () => {
                            (c(), n());
                        },
                    }),
                    (0, l.jsx)(V.Dr, {
                        id: "conjure-app-icon-conjure",
                        label: m.intl.string(g.default["oAG/BY"]),
                        iconLeft: z.MagicWandIcon,
                        leadingAccessory: { type: "icon", icon: z.MagicWandIcon },
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
function J(e) {
    let { title: n, rows: t } = e;
    return 0 === t.length
        ? null
        : (0, l.jsxs)("section", {
              className: H.mK,
              children: [
                  (0, l.jsx)(d.E, { variant: "body-sm/normal", color: "text-subtle", children: n }),
                  (0, l.jsx)("div", { children: t }),
              ],
          });
}
function ee(e) {
    let { icon: n, label: t } = e;
    return (0, l.jsxs)("div", {
        className: H.CT,
        children: [
            (0, l.jsx)(n, { size: "sm", color: "currentColor", className: H.Pw, "aria-hidden": !0 }),
            (0, l.jsx)(d.E, { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: t }),
        ],
    });
}
var en = t(252753);
function et(e) {
    let { projectId: n, transitionState: t, onClose: a } = e,
        r = (0, N.A)(n),
        { project: s } = r;
    return (i.useEffect(() => {
        null == s && a();
    }, [s, a]),
    null == s)
        ? null
        : (0, l.jsx)(el, { project: s, sharing: r, transitionState: t, onClose: a });
}
function el(e) {
    let { project: n, sharing: t, transitionState: A, onClose: N } = e,
        y = (function (e) {
            var n;
            let t,
                l = (0, h.A)(e.id),
                a = ((n = e.id), (0, f.bG)([v.A], () => v.A.getPublishStatus(n)?.previewDevicePermissions ?? b)),
                r = (0, f.bG)([v.A], () => v.A.getPublishStatus(e.id)?.previewAppChannels, [e.id]),
                [s, o] = i.useState(e.name),
                [c, d] = i.useState(!1),
                u = [...new Set([...(e.preview_supported_surfaces ?? []), ...(e.supported_surfaces ?? [])])],
                x = s.trim(),
                A = (0, C.p)(x),
                N = r ?? [],
                y =
                    N.length > 1
                        ? N
                        : 1 === N.length || u.includes(j.q7.APP_CHANNEL)
                          ? [m.intl.string(g.default.xI4N6Q)]
                          : [],
                E = y.length > 0 && "user" === e.install_scope ? u.filter((e) => e !== j.q7.ACTIVITY) : u;
            return {
                identity: l,
                name: s,
                setName: o,
                nameError: A,
                channelNames: y,
                components: (0 ===
                    (t = I.filter((e) => {
                        let [n] = e;
                        return E.includes(n);
                    })).length && E.includes(j.q7.APPLICATION_COMMANDS)
                    ? I.filter((e) => {
                          let [n] = e;
                          return n === j.q7.BOT;
                      })
                    : t
                ).map((e) => {
                    let [n, t] = e;
                    return { surface: n, label: m.intl.string(t) };
                }),
                devicePermissions: a,
                saving: c,
                save: async function () {
                    if (c || null != A) return !1;
                    d(!0);
                    try {
                        return ((x !== e.name || l.changed) && (await (0, p.CW)(e.id, { ...l.changes, name: x })), !0);
                    } finally {
                        d(!1);
                    }
                },
            };
        })(n);
    (0, x.A)(n.id);
    let [E, w] = i.useState("review"),
        [S, k] = i.useState(!1),
        L = "review" === E,
        P = L ? 1 : 2,
        T = y.saving,
        _ = m.intl.formatToPlainString(g.default.EwO6z5, { step: P, count: 2 }),
        q = L && S ? m.intl.string(g.default.Fi7boI) : null,
        O = m.intl.string(L ? g.default["Vay+ld"] : g.default.IN5vt4);
    return (0, l.jsxs)(a.d, {
        transitionState: A,
        onClose: N,
        dismissable: !T,
        size: "md",
        "aria-label": O,
        children: [
            (0, l.jsx)(r.rQ, {
                gradientColor: "blue",
                title: O,
                subtitle: m.intl.string(L ? g.default["N2HM8/"] : g.default.mbybxl),
                progressBarProps: { value: P, maxValue: 2, "aria-label": _, valueLabel: _ },
            }),
            (0, l.jsx)(s.c, {
                children: (0, l.jsxs)(c.B, {
                    gap: 16,
                    children: [
                        null != q
                            ? (0, l.jsx)(d.E, {
                                  variant: "body-sm/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: q,
                              })
                            : null,
                        L
                            ? (0, l.jsx)(X, {
                                  review: y,
                                  onConjureIcon: async function () {
                                      var e;
                                      k(!1);
                                      try {
                                          if (!(await y.save())) return;
                                      } catch {
                                          k(!0);
                                          return;
                                      }
                                      (N(), (e = n.id), (0, u.dv)(e, m.intl.string(g.default["hOg/Uu"])));
                                  },
                              })
                            : (0, l.jsx)(en.A, { project: n, sharing: t }),
                    ],
                }),
            }),
            (0, l.jsx)(o.H, {
                actionsFullWidth: !0,
                actions: L
                    ? [
                          { text: m.intl.string(m.t["ETE/oC"]), variant: "secondary", onClick: N, disabled: T },
                          {
                              text: m.intl.string(m.t.PDTjLN),
                              variant: "primary",
                              loading: y.saving,
                              disabled: null != y.nameError,
                              onClick: async function () {
                                  k(!1);
                                  try {
                                      if (!(await y.save())) return;
                                  } catch {
                                      k(!0);
                                      return;
                                  }
                                  w("access");
                              },
                          },
                      ]
                    : [
                          {
                              text: m.intl.string(m.t["13/7kX"]),
                              variant: "secondary",
                              onClick: () => w("review"),
                              disabled: T,
                          },
                          { text: m.intl.string(m.t.i4jeWR), variant: "primary", onClick: N },
                      ],
            }),
        ],
    });
}
