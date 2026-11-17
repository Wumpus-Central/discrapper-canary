t.d(n, { default: () => ea });
var l = t(477900),
    i = t(582128),
    a = t(224640),
    s = t(20742),
    r = t(430993),
    o = t(696208),
    c = t(331322),
    d = t(834730),
    u = t(858899),
    g = t(540665),
    h = t(191850),
    m = t(792996),
    p = t(580342),
    f = t(855986),
    v = t(961553),
    x = t(233470),
    b = t(951178),
    j = t(722701);
let C = [];
var I = t(277085);
let A = [
        [b.q7.BOT, h.default.UnoAgo],
        [b.q7.ACTIVITY, h.default["I88/iG"]],
        [b.q7.VOICE_CHANNEL, h.default.skjf5I],
        [b.q7.PROFILE_WIDGET, h.default.gXY1x1],
        [b.q7.AUTOMOD, h.default.Q9ruoM],
        [b.q7.OVERLAY, h.default.KR5R34],
    ],
    N = { screen_capture: h.default["8/7kE7"], connect_user_to_voice: h.default.uvDWXa };
var y = t(424947),
    P = t(641655),
    E = t(503698),
    S = t.n(E),
    k = t(31300),
    L = t(983851),
    T = t(430392),
    w = t(794083),
    _ = t(715641),
    q = t(231483),
    O = t(687966),
    R = t(901117),
    D = t(323384),
    M = t(150934),
    U = t(95477),
    Y = t(103557),
    F = t(939249),
    V = t(750943),
    B = t(265872),
    W = t(165862),
    z = t(477782),
    G = t(95635),
    H = t(152367),
    X = t(946274),
    Z = t(535466),
    Q = t(206393);
let K = { screen_capture: k.ScreenIcon, connect_user_to_voice: L.VoiceNormalIcon },
    $ = {
        [b.q7.BOT]: T.RobotIcon,
        [b.q7.ACTIVITY]: w.ActivitiesIcon,
        [b.q7.VOICE_CHANNEL]: L.VoiceNormalIcon,
        [b.q7.PROFILE_WIDGET]: _.BadgeIcon,
        [b.q7.AUTOMOD]: q.ShieldIcon,
        [b.q7.OVERLAY]: O.GameControllerIcon,
    };
function J(e) {
    let { review: n, onConjureIcon: t } = e,
        { identity: a } = n,
        s = i.useRef(null),
        r = i.useCallback(() => s.current?.activateUploadDialogue(), []),
        { appChannelsPrivate: o } = n,
        c = o?.isPrivate === !0 ? R.AppsLockIcon : D.AppsIcon,
        g = n.channelNames.length > 1,
        p = g ? null : o,
        f = [
            ...n.channelNames.map((e) =>
                (0, l.jsx)(
                    el,
                    {
                        icon: c,
                        label: e,
                        trailing:
                            null != p
                                ? (0, l.jsx)(M.S, {
                                      label: m.intl.string(h.default.RSyIc9),
                                      labelType: "secondary",
                                      checked: p.isPrivate,
                                      disabled: n.saving,
                                      onChange: p.setPrivate,
                                  })
                                : null,
                    },
                    `channel:${e}`,
                ),
            ),
            ...n.components.map((e) => {
                let { surface: n, label: t } = e;
                return (0, l.jsx)(el, { icon: $[n], label: t }, n);
            }),
        ];
    return (0, l.jsxs)("div", {
        className: Q.zH,
        children: [
            (0, l.jsxs)("div", {
                className: Q.wx,
                children: [
                    (0, l.jsx)(en, {
                        onUpload: r,
                        onConjure: t,
                        children: (e) => (0, l.jsx)(ee, { iconURL: a.iconURL, onClick: e }),
                    }),
                    (0, l.jsx)(X.Ay, {
                        ref: s,
                        className: Q.Fg,
                        multiple: !1,
                        filters: [{ name: m.intl.string(m.t["Sp2NF+"]), extensions: Z.En }],
                        maxFileSizeBytes: Z.Q0,
                        onChange: a.setIcon,
                        onFileSizeError: () =>
                            (0, u.P0)({ text: m.intl.string(h.default.ZTAAMc), variant: "critical" }),
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
                        children: m.intl.string(h.default.knevPu),
                    }),
                    (0, l.jsx)(U.k, {
                        label: m.intl.string(h.default.knevPu),
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
                        children: m.intl.string(h.default.ynaGa1),
                    }),
                    (0, l.jsx)(Y.f, {
                        label: m.intl.string(h.default.ynaGa1),
                        hideLabel: !0,
                        placeholder: m.intl.string(h.default["I+3UTL"]),
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
            (0, l.jsx)(et, { title: m.intl.string(h.default.BqNMms), rows: f }),
            g && null != o
                ? (0, l.jsx)(M.S, {
                      label: m.intl.string(h.default.Td1mlg),
                      checked: o.isPrivate,
                      disabled: n.saving,
                      onChange: o.setPrivate,
                  })
                : null,
            (0, l.jsx)(et, {
                title: m.intl.string(h.default.LnqeFd),
                rows: n.devicePermissions.map((e) => (0, l.jsx)(el, { icon: K[e], label: m.intl.string(N[e]) }, e)),
            }),
        ],
    });
}
function ee(e) {
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
                      children: (0, l.jsx)(V.ImagePlusIcon, { size: "xs", color: "currentColor" }),
                  }),
              ],
          })
        : (0, l.jsx)(F.D, {
              className: S()(Q.gb, Q.YX),
              "aria-label": m.intl.string(m.t["MsUY/S"]),
              onClick: t,
              children: (0, l.jsx)(V.ImagePlusIcon, { size: "md", color: "currentColor" }),
          });
}
function en(e) {
    let { onUpload: n, onConjure: t, children: a } = e,
        [s, r] = i.useState(!1),
        o = i.useRef(null),
        c = i.useCallback(() => r(!1), []);
    return (0, l.jsx)(B.Y, {
        targetElementRef: o,
        shouldShow: s,
        onRequestClose: c,
        position: "bottom",
        align: "left",
        animation: B.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, l.jsxs)(W.W, {
                navId: "conjure-app-icon",
                "aria-label": m.intl.string(m.t["6yrpFR"]),
                onClose: i,
                onSelect: i,
                children: [
                    (0, l.jsx)(z.Dr, {
                        id: "conjure-app-icon-upload",
                        label: m.intl.string(m.t["MsUY/S"]),
                        iconLeft: G.UploadIcon,
                        leadingAccessory: { type: "icon", icon: G.UploadIcon },
                        action: () => {
                            (c(), n());
                        },
                    }),
                    (0, l.jsx)(z.Dr, {
                        id: "conjure-app-icon-conjure",
                        label: m.intl.string(h.default["oAG/BY"]),
                        iconLeft: H.MagicWandIcon,
                        leadingAccessory: { type: "icon", icon: H.MagicWandIcon },
                        action: () => {
                            (c(), t());
                        },
                    }),
                ],
            });
        },
        children: () => (0, l.jsx)("div", { ref: o, children: a(() => r((e) => !e)) }),
    });
}
function et(e) {
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
function el(e) {
    let { icon: n, label: t, trailing: i = null } = e;
    return (0, l.jsxs)("div", {
        className: Q.CT,
        children: [
            (0, l.jsx)(n, { size: "sm", color: "currentColor", className: Q.Pw, "aria-hidden": !0 }),
            (0, l.jsx)(d.E, { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: t }),
            null != i ? (0, l.jsx)("div", { className: Q.Mu, children: i }) : null,
        ],
    });
}
var ei = t(252753);
function ea(e) {
    let { projectId: n, guildId: t, publishOptions: a, transitionState: s, onClose: r } = e,
        o = (0, P.A)(n),
        { project: c } = o;
    return (i.useEffect(() => {
        null == c && r();
    }, [c, r]),
    null == c)
        ? null
        : (0, l.jsx)(es, { project: c, sharing: o, guildId: t, publishOptions: a, transitionState: s, onClose: r });
}
function es(e) {
    let { project: n, sharing: t, guildId: N, publishOptions: P, transitionState: E, onClose: S } = e,
        k = (function (e) {
            var n;
            let t,
                l = (0, v.A)(e.id),
                a = ((n = e.id), (0, f.bG)([j.A], () => j.A.getPublishStatus(n)?.previewDevicePermissions ?? C)),
                s = (0, f.bG)([j.A], () => j.A.getPublishStatus(e.id)?.previewAppChannels, [e.id]),
                [r, o] = i.useState(e.name),
                [c, d] = i.useState(!1),
                [u, g] = i.useState(!1),
                p = [...new Set([...(e.preview_supported_surfaces ?? []), ...(e.supported_surfaces ?? [])])],
                N = r.trim(),
                y = (0, I.p)(N),
                P = s ?? [],
                E =
                    P.length > 1
                        ? P
                        : 1 === P.length || p.includes(b.q7.APP_CHANNEL)
                          ? [m.intl.string(h.default.xI4N6Q)]
                          : [],
                S = E.length > 0 && "user" === e.install_scope ? p.filter((e) => e !== b.q7.ACTIVITY) : p;
            return {
                identity: l,
                name: r,
                setName: o,
                nameError: y,
                channelNames: E,
                appChannelsPrivate: E.length > 0 ? { isPrivate: u, setPrivate: g } : null,
                components: (0 ===
                    (t = A.filter((e) => {
                        let [n] = e;
                        return S.includes(n);
                    })).length && S.includes(b.q7.APPLICATION_COMMANDS)
                    ? A.filter((e) => {
                          let [n] = e;
                          return n === b.q7.BOT;
                      })
                    : t
                ).map((e) => {
                    let [n, t] = e;
                    return { surface: n, label: m.intl.string(t) };
                }),
                devicePermissions: a,
                saving: c,
                save: async function () {
                    if (c || null != y) return !1;
                    d(!0);
                    try {
                        return ((N !== e.name || l.changed) && (await (0, x.CW)(e.id, { ...l.changes, name: N })), !0);
                    } finally {
                        d(!1);
                    }
                },
            };
        })(n),
        L = (0, y.A)(n.id, N, P);
    (0, p.A)(n.id);
    let [T, w] = i.useState("review"),
        [_, q] = i.useState(!1),
        O = "review" === T,
        R = O ? 1 : 2,
        D = k.saving || L.sharing,
        M = m.intl.formatToPlainString(h.default.EwO6z5, { step: R, count: 2 }),
        U = O ? (_ ? m.intl.string(h.default.Fi7boI) : null) : L.error,
        Y = m.intl.string(O ? h.default["Vay+ld"] : h.default.IN5vt4);
    return (0, l.jsxs)(a.d, {
        transitionState: E,
        onClose: S,
        dismissable: !D,
        size: "md",
        "aria-label": Y,
        children: [
            (0, l.jsx)(s.rQ, {
                gradientColor: "blue",
                title: Y,
                subtitle: m.intl.string(O ? h.default["N2HM8/"] : h.default.mbybxl),
                progressBarProps: { value: R, maxValue: 2, "aria-label": M, valueLabel: M },
            }),
            (0, l.jsx)(r.c, {
                children: (0, l.jsxs)(c.B, {
                    gap: 16,
                    children: [
                        null != U
                            ? (0, l.jsx)(d.E, {
                                  variant: "body-sm/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: U,
                              })
                            : null,
                        O
                            ? (0, l.jsx)(J, {
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
                                      (S(), (e = n.id), (0, g.dv)(e, m.intl.string(h.default["hOg/Uu"])));
                                  },
                              })
                            : (0, l.jsx)(ei.A, {
                                  project: n,
                                  sharing: t,
                                  servers: L,
                                  serversLabel: m.intl.string(h.default.BPxXfh),
                              }),
                    ],
                }),
            }),
            (0, l.jsx)(o.H, {
                actionsFullWidth: !0,
                actions: O
                    ? [
                          { text: m.intl.string(m.t["ETE/oC"]), variant: "secondary", onClick: S, disabled: D },
                          {
                              text: m.intl.string(m.t.PDTjLN),
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
                                  w("access");
                              },
                          },
                      ]
                    : [
                          {
                              text: m.intl.string(m.t["13/7kX"]),
                              variant: "secondary",
                              onClick: () => w("review"),
                              disabled: D,
                          },
                          {
                              text: m.intl.string(m.t.i4jeWR),
                              variant: "primary",
                              loading: L.sharing,
                              onClick: () =>
                                  L.finish(
                                      S,
                                      (e) => (0, u.P0)({ text: e, variant: "success" }),
                                      k.appChannelsPrivate?.isPrivate === !0,
                                  ),
                          },
                      ],
            }),
        ],
    });
}
