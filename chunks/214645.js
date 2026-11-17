l.d(n, { default: () => ea });
var t = l(477900),
    i = l(582128),
    a = l(224640),
    s = l(20742),
    r = l(430993),
    o = l(696208),
    c = l(331322),
    u = l(834730),
    d = l(858899),
    g = l(540665),
    h = l(191850),
    p = l(792996),
    m = l(580342),
    f = l(855986),
    x = l(961553),
    v = l(233470),
    b = l(951178),
    j = l(722701);
let C = [];
var I = l(277085);
let A = [
        [b.q7.BOT, h.default.UnoAgo],
        [b.q7.ACTIVITY, h.default["I88/iG"]],
        [b.q7.VOICE_CHANNEL, h.default.skjf5I],
        [b.q7.PROFILE_WIDGET, h.default.gXY1x1],
        [b.q7.AUTOMOD, h.default.Q9ruoM],
        [b.q7.OVERLAY, h.default.KR5R34],
    ],
    N = { screen_capture: h.default["8/7kE7"], connect_user_to_voice: h.default.uvDWXa };
var y = l(424947),
    P = l(641655),
    E = l(503698),
    S = l.n(E),
    k = l(31300),
    w = l(983851),
    L = l(430392),
    T = l(794083),
    _ = l(715641),
    q = l(231483),
    O = l(687966),
    R = l(901117),
    D = l(323384),
    M = l(150934),
    U = l(95477),
    Y = l(103557),
    F = l(939249),
    V = l(750943),
    B = l(265872),
    W = l(165862),
    z = l(477782),
    G = l(95635),
    H = l(152367),
    Q = l(946274),
    X = l(535466),
    Z = l(206393);
let K = { screen_capture: k.ScreenIcon, connect_user_to_voice: w.VoiceNormalIcon },
    $ = {
        [b.q7.BOT]: L.RobotIcon,
        [b.q7.ACTIVITY]: T.ActivitiesIcon,
        [b.q7.VOICE_CHANNEL]: w.VoiceNormalIcon,
        [b.q7.PROFILE_WIDGET]: _.BadgeIcon,
        [b.q7.AUTOMOD]: q.ShieldIcon,
        [b.q7.OVERLAY]: O.GameControllerIcon,
    };
function J(e) {
    let { review: n, onConjureIcon: l } = e,
        { identity: a } = n,
        s = i.useRef(null),
        r = i.useCallback(() => s.current?.activateUploadDialogue(), []),
        { appChannelsPrivate: o } = n,
        c = o?.isPrivate === !0 ? R.AppsLockIcon : D.AppsIcon,
        g = n.channelNames.length > 1,
        m = g ? null : o,
        f = [
            ...n.channelNames.map((e) =>
                (0, t.jsx)(
                    et,
                    {
                        icon: c,
                        label: e,
                        trailing:
                            null != m
                                ? (0, t.jsx)(M.S, {
                                      label: p.intl.string(h.default.RSyIc9),
                                      labelType: "secondary",
                                      checked: m.isPrivate,
                                      disabled: n.saving,
                                      onChange: m.setPrivate,
                                  })
                                : null,
                    },
                    `channel:${e}`,
                ),
            ),
            ...n.components.map((e) => {
                let { surface: n, label: l } = e;
                return (0, t.jsx)(et, { icon: $[n], label: l }, n);
            }),
        ];
    return (0, t.jsxs)("div", {
        className: Z.zH,
        children: [
            (0, t.jsxs)("div", {
                className: Z.wx,
                children: [
                    (0, t.jsx)(en, {
                        onUpload: r,
                        onConjure: l,
                        children: (e) => (0, t.jsx)(ee, { iconURL: a.iconURL, onClick: e }),
                    }),
                    (0, t.jsx)(Q.Ay, {
                        ref: s,
                        className: Z.Fg,
                        multiple: !1,
                        filters: [{ name: p.intl.string(p.t["Sp2NF+"]), extensions: X.En }],
                        maxFileSizeBytes: X.Q0,
                        onChange: a.setIcon,
                        onFileSizeError: () =>
                            (0, d.P0)({ text: p.intl.string(h.default.ZTAAMc), variant: "critical" }),
                        "aria-hidden": !0,
                    }),
                ],
            }),
            (0, t.jsxs)("div", {
                className: Z.ZZ,
                children: [
                    (0, t.jsx)(u.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        "aria-hidden": !0,
                        children: p.intl.string(h.default.knevPu),
                    }),
                    (0, t.jsx)(U.k, {
                        label: p.intl.string(h.default.knevPu),
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
            (0, t.jsxs)("div", {
                className: Z.ZZ,
                children: [
                    (0, t.jsx)(u.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        "aria-hidden": !0,
                        children: p.intl.string(h.default.ynaGa1),
                    }),
                    (0, t.jsx)(Y.f, {
                        label: p.intl.string(h.default.ynaGa1),
                        hideLabel: !0,
                        placeholder: p.intl.string(h.default["I+3UTL"]),
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
            (0, t.jsx)(el, { title: p.intl.string(h.default.BqNMms), rows: f }),
            g && null != o
                ? (0, t.jsx)(M.S, {
                      label: p.intl.string(h.default.Td1mlg),
                      checked: o.isPrivate,
                      disabled: n.saving,
                      onChange: o.setPrivate,
                  })
                : null,
            (0, t.jsx)(el, {
                title: p.intl.string(h.default.LnqeFd),
                rows: n.devicePermissions.map((e) => (0, t.jsx)(et, { icon: K[e], label: p.intl.string(N[e]) }, e)),
            }),
        ],
    });
}
function ee(e) {
    let { iconURL: n, onClick: l } = e;
    return null != n
        ? (0, t.jsxs)(F.D, {
              className: Z.gb,
              "aria-label": p.intl.string(p.t["6yrpFR"]),
              onClick: l,
              children: [
                  (0, t.jsx)("img", { className: Z.Dp, src: n, alt: "" }),
                  (0, t.jsx)("span", {
                      className: Z.E7,
                      "aria-hidden": !0,
                      children: (0, t.jsx)(V.ImagePlusIcon, { size: "xs", color: "currentColor" }),
                  }),
              ],
          })
        : (0, t.jsx)(F.D, {
              className: S()(Z.gb, Z.YX),
              "aria-label": p.intl.string(p.t["MsUY/S"]),
              onClick: l,
              children: (0, t.jsx)(V.ImagePlusIcon, { size: "md", color: "currentColor" }),
          });
}
function en(e) {
    let { onUpload: n, onConjure: l, children: a } = e,
        [s, r] = i.useState(!1),
        o = i.useRef(null),
        c = i.useCallback(() => r(!1), []);
    return (0, t.jsx)(B.Y, {
        targetElementRef: o,
        shouldShow: s,
        onRequestClose: c,
        position: "bottom",
        align: "left",
        animation: B.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, t.jsxs)(W.W, {
                navId: "conjure-app-icon",
                "aria-label": p.intl.string(p.t["6yrpFR"]),
                onClose: i,
                onSelect: i,
                children: [
                    (0, t.jsx)(z.Dr, {
                        id: "conjure-app-icon-upload",
                        label: p.intl.string(p.t["MsUY/S"]),
                        iconLeft: G.UploadIcon,
                        leadingAccessory: { type: "icon", icon: G.UploadIcon },
                        action: () => {
                            (c(), n());
                        },
                    }),
                    (0, t.jsx)(z.Dr, {
                        id: "conjure-app-icon-conjure",
                        label: p.intl.string(h.default["oAG/BY"]),
                        iconLeft: H.MagicWandIcon,
                        leadingAccessory: { type: "icon", icon: H.MagicWandIcon },
                        action: () => {
                            (c(), l());
                        },
                    }),
                ],
            });
        },
        children: () => (0, t.jsx)("div", { ref: o, children: a(() => r((e) => !e)) }),
    });
}
function el(e) {
    let { title: n, rows: l } = e;
    return 0 === l.length
        ? null
        : (0, t.jsxs)("section", {
              className: Z.mK,
              children: [
                  (0, t.jsx)(u.E, { variant: "body-sm/normal", color: "text-subtle", children: n }),
                  (0, t.jsx)("div", { children: l }),
              ],
          });
}
function et(e) {
    let { icon: n, label: l, trailing: i = null } = e;
    return (0, t.jsxs)("div", {
        className: Z.CT,
        children: [
            (0, t.jsx)(n, { size: "sm", color: "currentColor", className: Z.Pw, "aria-hidden": !0 }),
            (0, t.jsx)(u.E, { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: l }),
            null != i ? (0, t.jsx)("div", { className: Z.Mu, children: i }) : null,
        ],
    });
}
var ei = l(252753);
function ea(e) {
    let { projectId: n, guildId: l, publishOptions: a, transitionState: s, onClose: r } = e,
        o = (0, P.A)(n),
        { project: c } = o;
    return (i.useEffect(() => {
        null == c && r();
    }, [c, r]),
    null == c)
        ? null
        : (0, t.jsx)(es, { project: c, sharing: o, guildId: l, publishOptions: a, transitionState: s, onClose: r });
}
function es(e) {
    let { project: n, sharing: l, guildId: N, publishOptions: P, transitionState: E, onClose: S } = e,
        k = (function (e) {
            var n;
            let l,
                t = (0, x.A)(e.id),
                a = ((n = e.id), (0, f.bG)([j.A], () => j.A.getPublishStatus(n)?.previewDevicePermissions ?? C)),
                s = (0, f.bG)([j.A], () => j.A.getPublishStatus(e.id)?.previewAppChannels, [e.id]),
                [r, o] = i.useState(e.name),
                [c, u] = i.useState(!1),
                [d, g] = i.useState(!1),
                m = [...new Set([...(e.preview_supported_surfaces ?? []), ...(e.supported_surfaces ?? [])])],
                N = r.trim(),
                y = (0, I.p)(N),
                P = s ?? [],
                E =
                    P.length > 1
                        ? P
                        : 1 === P.length || m.includes(b.q7.APP_CHANNEL)
                          ? [p.intl.string(h.default.xI4N6Q)]
                          : [],
                S = E.length > 0 && "user" === e.install_scope ? m.filter((e) => e !== b.q7.ACTIVITY) : m;
            return {
                identity: t,
                name: r,
                setName: o,
                nameError: y,
                channelNames: E,
                appChannelsPrivate: E.length > 0 ? { isPrivate: d, setPrivate: g } : null,
                components: (0 ===
                    (l = A.filter((e) => {
                        let [n] = e;
                        return S.includes(n);
                    })).length && S.includes(b.q7.APPLICATION_COMMANDS)
                    ? A.filter((e) => {
                          let [n] = e;
                          return n === b.q7.BOT;
                      })
                    : l
                ).map((e) => {
                    let [n, l] = e;
                    return { surface: n, label: p.intl.string(l) };
                }),
                devicePermissions: a,
                saving: c,
                save: async function () {
                    if (c || null != y) return !1;
                    u(!0);
                    try {
                        return ((N !== e.name || t.changed) && (await (0, v.CW)(e.id, { ...t.changes, name: N })), !0);
                    } finally {
                        u(!1);
                    }
                },
            };
        })(n),
        w = (0, y.A)(n.id, N, P, !0);
    (0, m.A)(n.id);
    let [L, T] = i.useState("review"),
        [_, q] = i.useState(!1),
        O = "review" === L,
        R = O ? 1 : 2,
        D = k.saving || w.sharing,
        M = p.intl.formatToPlainString(h.default.EwO6z5, { step: R, count: 2 }),
        U = O ? (_ ? p.intl.string(h.default.Fi7boI) : null) : w.error,
        Y = p.intl.string(O ? h.default["Vay+ld"] : h.default.IN5vt4);
    return (0, t.jsxs)(a.d, {
        transitionState: E,
        onClose: S,
        dismissable: !D,
        size: "md",
        "aria-label": Y,
        children: [
            (0, t.jsx)(s.rQ, {
                gradientColor: "blue",
                title: Y,
                subtitle: p.intl.string(O ? h.default["N2HM8/"] : h.default.mbybxl),
                progressBarProps: { value: R, maxValue: 2, "aria-label": M, valueLabel: M },
            }),
            (0, t.jsx)(r.c, {
                children: (0, t.jsxs)(c.B, {
                    gap: 16,
                    children: [
                        null != U
                            ? (0, t.jsx)(u.E, {
                                  variant: "body-sm/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: U,
                              })
                            : null,
                        O
                            ? (0, t.jsx)(J, {
                                  review: k,
                                  onConjureIcon: async function () {
                                      var e;
                                      q(!1);
                                      try {
                                          if (!(await k.save())) return;
                                      } catch {
                                          q(!0);
                                          return;
                                      }
                                      (S(), (e = n.id), (0, g.dv)(e, p.intl.string(h.default["hOg/Uu"])));
                                  },
                              })
                            : (0, t.jsx)(ei.A, {
                                  project: n,
                                  sharing: l,
                                  servers: w,
                                  serversLabel: p.intl.string(h.default.BPxXfh),
                              }),
                    ],
                }),
            }),
            (0, t.jsx)(o.H, {
                actionsFullWidth: !0,
                actions: O
                    ? [
                          { text: p.intl.string(p.t["ETE/oC"]), variant: "secondary", onClick: S, disabled: D },
                          {
                              text: p.intl.string(p.t.PDTjLN),
                              variant: "primary",
                              loading: k.saving,
                              disabled: null != k.nameError,
                              onClick: async function () {
                                  q(!1);
                                  try {
                                      if (!(await k.save())) return;
                                  } catch {
                                      q(!0);
                                      return;
                                  }
                                  T("access");
                              },
                          },
                      ]
                    : [
                          {
                              text: p.intl.string(p.t["13/7kX"]),
                              variant: "secondary",
                              onClick: () => T("review"),
                              disabled: D,
                          },
                          {
                              text: p.intl.string(null != w.picked ? h.default["+uQwxA"] : p.t.i4jeWR),
                              variant: "primary",
                              loading: w.sharing,
                              onClick: () =>
                                  w.finish(
                                      S,
                                      (e) => (0, d.P0)({ text: e, variant: "success" }),
                                      k.appChannelsPrivate?.isPrivate === !0,
                                  ),
                          },
                      ],
            }),
        ],
    });
}
