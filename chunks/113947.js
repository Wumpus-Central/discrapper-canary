l.d(n, { default: () => eV });
var i = l(477900),
    a = l(582128),
    t = l(855986),
    s = l(224640),
    r = l(430993),
    o = l(858899),
    c = l(866665),
    d = l(408278),
    u = l(972213),
    m = l(821609),
    h = l(778712),
    p = l(834730),
    x = l(730134),
    g = l(682163),
    v = l(540665),
    f = l(258576),
    b = l(792996),
    j = l(260498),
    C = l(738604),
    y = l(495273),
    N = l(71393),
    A = l(576705),
    w = l(287809),
    E = l(961553),
    I = l(838117),
    k = l(233470),
    P = l(951178),
    S = l(277085),
    T = l(88112),
    L = l(734057),
    R = l(811587);
function _(e, n, l) {
    return { ...e, appChannels: e.appChannels.flatMap((e) => (e.key === n ? (l(e) ?? []) : e)) };
}
l(647193);
var M = l(722701),
    V = l(984782);
let q = [];
var U = l(641655),
    D = l(652215);
let G = new Set(["app_channel", P.q7.ACTIVITY, P.q7.VOICE_CHANNEL]);
var z = l(503698),
    F = l.n(z),
    W = l(31300),
    O = l(983851),
    Y = l(323384),
    Z = l(430392),
    B = l(794083),
    H = l(715641),
    K = l(231483),
    X = l(757789),
    $ = l(901117),
    Q = l(150934),
    J = l(95477),
    ee = l(103557),
    en = l(939249),
    el = l(750943),
    ei = l(265872),
    ea = l(165862),
    et = l(477782),
    es = l(95635),
    er = l(152367),
    eo = l(805251),
    ec = l(946274),
    ed = l(535466),
    eu = l(407431),
    em = l(307301),
    eh = l(691885),
    ep = l(241326),
    ex = l(303810);
function eg(e) {
    return e.map((e) => {
        let n = e.value ?? "";
        return { id: "" === n ? "nowhere" : `view-${n}`, value: n, label: e.label };
    });
}
function ev(e) {
    let { placement: n, disabled: l } = e,
        { draft: a } = n;
    return (0, i.jsxs)("section", {
        className: ex.uW,
        children: [
            (0, i.jsxs)("div", {
                className: ex.R_,
                children: [
                    (0, i.jsx)(p.E, {
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        children: b.intl.string(f.default["zI+Y/G"]),
                    }),
                    (0, i.jsx)(p.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        children: b.intl.string(f.default.yUT1lm),
                    }),
                ],
            }),
            null != n.missingNotice
                ? (0, i.jsx)(p.E, {
                      variant: "body-sm/medium",
                      color: "text-feedback-critical",
                      children: n.missingNotice,
                  })
                : null,
            (0, i.jsx)(ef, {
                label: b.intl.string(f.default.ZWevfx),
                placement: n,
                value: a.activity,
                onChange: n.setActivity,
                disabled: l,
            }),
            n.personal
                ? (0, i.jsx)(p.E, {
                      variant: "body-xs/normal",
                      color: "text-muted",
                      children: b.intl.string(f.default.Tg4m1p),
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(ef, {
                              label: b.intl.string(f.default.gRNv14),
                              placement: n,
                              value: a.voiceChannel,
                              onChange: n.setVoiceChannel,
                              disabled: l,
                          }),
                          (0, i.jsxs)("div", {
                              className: ex.iw,
                              children: [
                                  (0, i.jsx)(p.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: b.intl.string(f.default["8NKFKk"]),
                                  }),
                                  0 === a.appChannels.length
                                      ? (0, i.jsx)(p.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: b.intl.string(f.default["62VVHK"]),
                                        })
                                      : null,
                                  a.appChannels.map((e) =>
                                      (0, i.jsx)(eb, { row: e, placement: n, disabled: l }, e.key),
                                  ),
                                  n.hasExistingAppChannel
                                      ? (0, i.jsx)(p.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: b.intl.string(f.default.AMgl7V),
                                        })
                                      : null,
                                  (0, i.jsxs)("div", {
                                      className: ex.uY,
                                      children: [
                                          (0, i.jsx)(m.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              icon: em.PlusSmallIcon,
                                              text: b.intl.string(f.default["3g7BVY"]),
                                              disabled: l || !n.canAddAppChannel,
                                              onClick: n.addAppChannel,
                                          }),
                                          (0, i.jsx)(p.E, {
                                              variant: "body-xs/normal",
                                              color: "text-muted",
                                              children: n.appChannelLimitHint,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
            null != n.unplacedNotice
                ? (0, i.jsx)(p.E, {
                      variant: "body-sm/normal",
                      color: "text-feedback-warning",
                      children: n.unplacedNotice,
                  })
                : null,
        ],
    });
}
function ef(e) {
    let { label: n, placement: l, value: a, onChange: t, disabled: s } = e;
    return (0, i.jsx)(eh.l, {
        label: n,
        options: eg(l.surfaceChoices(a)),
        value: a ?? "",
        onSelectionChange: (e) => t("" === e ? null : e),
        selectionMode: "single",
        errorMessage: l.isMissing(a) ? b.intl.formatToPlainString(f.default.qRfT8T, { view: a }) : void 0,
        disabled: s,
        fullWidth: !0,
    });
}
function eb(e) {
    let { row: n, placement: l, disabled: a } = e,
        t = "" === n.name.trim() ? b.intl.string(f.default.xI4N6Q) : `#${n.name.trim()}`,
        s = b.intl.formatToPlainString(f.default.B3mNv4, { channel: t });
    return (0, i.jsxs)("div", {
        className: ex.WG,
        children: [
            (0, i.jsx)(J.k, {
                label: b.intl.string(f.default.RXXA5n),
                value: n.name,
                onChange: (e) => l.renameAppChannel(n.key, e),
                error: l.channelError(n.key),
                maxLength: 100,
                disabled: a || null != n.existing,
                fullWidth: !0,
            }),
            (0, i.jsx)(eh.l, {
                label: b.intl.string(f.default["54ex3d"]),
                options: eg(l.channelChoices(n.view)),
                value: n.view,
                onSelectionChange: (e) => l.setAppChannelView(n.key, e),
                selectionMode: "single",
                errorMessage: l.isMissing(n.view)
                    ? b.intl.formatToPlainString(f.default.qRfT8T, { view: n.view })
                    : void 0,
                disabled: a,
                fullWidth: !0,
            }),
            (0, i.jsx)("div", {
                className: ex.DT,
                children: (0, i.jsx)(c.m, {
                    text: s,
                    children: (0, i.jsx)(d.K, {
                        icon: ep.TrashIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": s,
                        disabled: a,
                        onClick: () => l.removeAppChannel(n.key),
                    }),
                }),
            }),
        ],
    });
}
var ej = l(559106),
    eC = l(885574),
    ey = l(715482),
    eN = l(398978);
function eA(e) {
    let { remix: n, disabled: l } = e,
        { options: t, value: s, setValue: r, canChange: o } = n,
        [d, u] = a.useState(!1),
        m = a.useCallback(() => u(!1), []),
        h = a.useRef(null),
        x = a.useId(),
        g = t.find((e) => e.value === s);
    if (null == g) return null;
    let v = b.intl.string(f.default["Z/NFcQ"]),
        j = b.intl.string(f.default["PuID+v"]),
        C = !o || l;
    return (0, i.jsxs)("div", {
        className: eN.nM,
        children: [
            (0, i.jsxs)("div", {
                className: eN.Pf,
                children: [
                    (0, i.jsx)(p.E, { id: x, variant: "body-sm/medium", color: "text-subtle", children: v }),
                    (0, i.jsx)(c.m, {
                        text: j,
                        asContainer: !0,
                        ariaHidden: !0,
                        children: (0, i.jsx)(ej.vN, {
                            children: (0, i.jsx)("span", {
                                className: eN.pq,
                                role: "img",
                                "aria-label": j,
                                tabIndex: 0,
                                children: (0, i.jsx)(eC.CircleInformationIcon, { size: "xxs", color: "currentColor" }),
                            }),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(ei.Y, {
                targetElementRef: h,
                shouldShow: d && !C,
                onRequestClose: m,
                position: "bottom",
                align: "right",
                animation: ei.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, i.jsx)(ea.W, {
                        navId: "conjure-publish-remix",
                        "aria-label": v,
                        onClose: n,
                        onSelect: n,
                        children: t.map((e) =>
                            (0, i.jsx)(
                                et.iD,
                                {
                                    id: `conjure-publish-remix-${e.value}`,
                                    group: "conjure-publish-remix",
                                    label: e.label,
                                    checked: e.value === s,
                                    action: () => {
                                        (m(), r(e.value));
                                    },
                                },
                                e.value,
                            ),
                        ),
                    });
                },
                children: (e, n) => {
                    let { onClick: l, ...a } = e,
                        { isShown: t } = n;
                    return (0, i.jsx)(ej.vN, {
                        children: (0, i.jsxs)("button", {
                            ...a,
                            ref: h,
                            type: "button",
                            className: eN.hZ,
                            "aria-labelledby": x,
                            "aria-haspopup": "menu",
                            "aria-expanded": t,
                            disabled: C,
                            onClick: () => u((e) => !e),
                            children: [
                                (0, i.jsx)(p.E, {
                                    tag: "span",
                                    variant: "body-sm/medium",
                                    color: "none",
                                    children: g.label,
                                }),
                                o ? (0, i.jsx)(ey.ChevronLargeDownIcon, { size: "xs", color: "currentColor" }) : null,
                            ],
                        }),
                    });
                },
            }),
        ],
    });
}
var ew = l(229171);
let eE = { screen_capture: W.ScreenIcon, connect_user_to_voice: O.VoiceNormalIcon },
    eI = {
        app_channel: Y.AppsIcon,
        [P.q7.BOT]: Z.RobotIcon,
        [P.q7.ACTIVITY]: B.ActivitiesIcon,
        [P.q7.VOICE_CHANNEL]: O.VoiceNormalIcon,
        [P.q7.PROFILE_WIDGET]: H.BadgeIcon,
        [P.q7.AUTOMOD]: K.ShieldIcon,
        [P.q7.OVERLAY]: X.WindowTopIcon,
    };
function ek(e) {
    let { review: n } = e,
        { identity: l, appChannelsPrivate: a } = n,
        t = null == a || a.shared ? null : a,
        s = n.includes.map((e) =>
            (0, i.jsx)(
                e_,
                {
                    icon: "app_channel" === e.icon && e.creates && a?.isPrivate === !0 ? $.AppsLockIcon : eI[e.icon],
                    label: e.label,
                    isNew: e.isNew,
                    trailing:
                        e.creates && null != t ? (0, i.jsx)(eS, { appChannelsPrivate: t, disabled: n.saving }) : null,
                },
                e.key,
            ),
        ),
        r =
            a?.shared === !0
                ? (0, i.jsx)(Q.S, {
                      label: b.intl.string(f.default.Td1mlg),
                      checked: a.isPrivate,
                      disabled: n.saving,
                      onChange: a.setPrivate,
                  })
                : null;
    return (0, i.jsxs)("div", {
        className: ew.zH,
        children: [
            n.managedCopy ? (0, i.jsx)(eu.A, { projectId: n.projectId }) : null,
            n.editable
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)("div", {
                              className: ew.ZZ,
                              children: [
                                  (0, i.jsx)(p.E, {
                                      variant: "body-sm/medium",
                                      color: "text-subtle",
                                      "aria-hidden": !0,
                                      children: b.intl.string(f.default.knevPu),
                                  }),
                                  (0, i.jsx)(J.k, {
                                      label: b.intl.string(f.default.knevPu),
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
                          (0, i.jsxs)("div", {
                              className: ew.ZZ,
                              children: [
                                  (0, i.jsx)(p.E, {
                                      variant: "body-sm/medium",
                                      color: "text-subtle",
                                      "aria-hidden": !0,
                                      children: b.intl.string(f.default.ynaGa1),
                                  }),
                                  (0, i.jsx)(ee.f, {
                                      label: b.intl.string(f.default.ynaGa1),
                                      hideLabel: !0,
                                      placeholder: b.intl.string(f.default["I+3UTL"]),
                                      value: l.description,
                                      onChange: l.setDescription,
                                      maxLength: 400,
                                      disabled: n.saving,
                                      rows: 4,
                                      maxRows: 6,
                                      autosize: !0,
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, i.jsx)("div", {
                      className: ew.Xp,
                      children: (0, i.jsxs)("div", {
                          className: ew.ZZ,
                          children: [
                              (0, i.jsx)(p.E, {
                                  variant: "body-md/semibold",
                                  color: "text-strong",
                                  lineClamp: 1,
                                  children: n.name,
                              }),
                              "" !== l.description
                                  ? (0, i.jsx)(p.E, {
                                        variant: "body-sm/normal",
                                        color: "text-subtle",
                                        lineClamp: 3,
                                        children: l.description,
                                    })
                                  : null,
                          ],
                      }),
                  }),
            null != n.placement ? (0, i.jsx)(ev, { placement: n.placement, disabled: n.saving }) : null,
            null != n.placement ? r : null,
            (0, i.jsx)(eR, { title: b.intl.string(f.default.BqNMms), rows: s }),
            null == n.placement ? r : null,
            (0, i.jsx)(eR, {
                title: b.intl.string(f.default.LnqeFd),
                rows: n.devicePermissions.map((e) => (0, i.jsx)(e_, { icon: eE[e], label: b.intl.string(V.sP[e]) }, e)),
            }),
            (0, i.jsx)(eA, { remix: n.remix, disabled: n.saving }),
        ],
    });
}
function eP(e) {
    let { review: n, onConjureIcon: l } = e,
        { identity: t } = n,
        s = a.useRef(null),
        r = a.useCallback(() => s.current?.activateUploadDialogue(), []);
    return n.editable
        ? (0, i.jsxs)("div", {
              className: ew.wx,
              children: [
                  (0, i.jsx)(eL, {
                      onUpload: r,
                      onConjure: l,
                      children: (e) => (0, i.jsx)(eT, { iconURL: t.iconURL, onClick: e }),
                  }),
                  (0, i.jsx)(ec.Ay, {
                      ref: s,
                      className: ew.Fg,
                      multiple: !1,
                      filters: [{ name: b.intl.string(b.t["Sp2NF+"]), extensions: ed.En }],
                      maxFileSizeBytes: ed.Q0,
                      onChange: t.setIcon,
                      onFileSizeError: () => (0, o.P0)({ text: b.intl.string(f.default.ZTAAMc), variant: "critical" }),
                      "aria-hidden": !0,
                  }),
              ],
          })
        : null != t.iconURL
          ? (0, i.jsx)("img", { className: ew.Dp, src: t.iconURL, alt: "" })
          : null;
}
function eS(e) {
    let { appChannelsPrivate: n, disabled: l } = e;
    return (0, i.jsx)("div", {
        className: ew.to,
        children: (0, i.jsx)(Q.S, {
            label: b.intl.string(f.default.RSyIc9),
            labelType: "secondary",
            checked: n.isPrivate,
            disabled: l,
            onChange: n.setPrivate,
        }),
    });
}
function eT(e) {
    let { iconURL: n, onClick: l } = e;
    return null != n
        ? (0, i.jsxs)(en.D, {
              className: ew.gb,
              "aria-label": b.intl.string(b.t["6yrpFR"]),
              onClick: l,
              children: [
                  (0, i.jsx)("img", { className: ew.Dp, src: n, alt: "" }),
                  (0, i.jsx)("span", {
                      className: ew.E7,
                      "aria-hidden": !0,
                      children: (0, i.jsx)(el.ImagePlusIcon, { size: "xs", color: "currentColor" }),
                  }),
              ],
          })
        : (0, i.jsx)(en.D, {
              className: F()(ew.gb, ew.YX),
              "aria-label": b.intl.string(b.t["MsUY/S"]),
              onClick: l,
              children: (0, i.jsx)(el.ImagePlusIcon, { size: "md", color: "currentColor" }),
          });
}
function eL(e) {
    let { onUpload: n, onConjure: l, children: t } = e,
        [s, r] = a.useState(!1),
        o = a.useRef(null),
        c = a.useCallback(() => r(!1), []);
    return (0, i.jsx)(ei.Y, {
        targetElementRef: o,
        shouldShow: s,
        onRequestClose: c,
        position: "bottom",
        align: "left",
        animation: ei.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, i.jsxs)(ea.W, {
                navId: "conjure-app-icon",
                "aria-label": b.intl.string(b.t["6yrpFR"]),
                onClose: a,
                onSelect: a,
                children: [
                    (0, i.jsx)(et.Dr, {
                        id: "conjure-app-icon-upload",
                        label: b.intl.string(b.t["MsUY/S"]),
                        iconLeft: es.UploadIcon,
                        leadingAccessory: { type: "icon", icon: es.UploadIcon },
                        action: () => {
                            (c(), n());
                        },
                    }),
                    (0, i.jsx)(et.Dr, {
                        id: "conjure-app-icon-conjure",
                        label: b.intl.string(f.default["oAG/BY"]),
                        iconLeft: er.MagicWandIcon,
                        leadingAccessory: { type: "icon", icon: er.MagicWandIcon },
                        action: () => {
                            (c(), l());
                        },
                    }),
                ],
            });
        },
        children: () => (0, i.jsx)("div", { ref: o, children: t(() => r((e) => !e)) }),
    });
}
function eR(e) {
    let { title: n, rows: l } = e;
    return 0 === l.length
        ? null
        : (0, i.jsxs)("section", {
              className: ew.mK,
              children: [(0, i.jsx)(p.E, { variant: "body-sm/medium", color: "text-subtle", children: n }), l],
          });
}
function e_(e) {
    let { icon: n, label: l, isNew: a = !1, trailing: t = null } = e;
    return (0, i.jsxs)("div", {
        className: ew.CT,
        children: [
            (0, i.jsx)(n, { size: "xs", color: "currentColor", className: ew.Pw, "aria-hidden": !0 }),
            (0, i.jsx)(p.E, { variant: "body-sm/medium", color: "text-strong", lineClamp: 1, children: l }),
            a ? (0, i.jsx)(eo.E, { type: "new" }) : null,
            null != t ? (0, i.jsx)("div", { className: ew.Mu, children: t }) : null,
        ],
    });
}
var eM = l(787032);
function eV(e) {
    let { projectId: n, publishOptions: l, entryPoint: s, savingRef: r, transitionState: o, onClose: c } = e,
        d = (0, C.Ay)(n, l),
        u = (0, t.bG)([j.Ay], () => j.Ay.getProject(n), [n]);
    return (a.useEffect(() => {
        (null == u || null == d) && c();
    }, [u, d, c]),
    null == u || null == d)
        ? null
        : (0, i.jsx)(eq, { project: u, publish: d, entryPoint: s, savingRef: r, transitionState: o, onClose: c });
}
function eq(e) {
    let { project: n, publish: l, entryPoint: h, savingRef: p, transitionState: x, onClose: g } = e,
        C = (function (e, n) {
            var l;
            let i = (0, E.A)(e.id),
                s = (0, I.AJ)(e.id),
                r = ((l = e.id), (0, t.bG)([M.A], () => M.A.getPublishStatus(l)?.previewDevicePermissions ?? q)),
                o = (function (e) {
                    let n = (0, U.A)(e),
                        [l, i] = a.useState(null),
                        { mode: t, canChange: s, changeMode: r } = n,
                        o = a.useCallback(() => (null != l && l !== t && s ? r(l) : Promise.resolve(!0)), [l, t, s, r]);
                    return { options: n.options, value: l ?? t, setValue: i, canChange: s && !n.changing, save: o };
                })(e.id),
                c = (0, t.bG)([M.A], () => M.A.getPublishStatus(e.id), [e.id]),
                [d, u] = a.useState(e.name),
                [m, h] = a.useState(!1),
                [p, x] = a.useState(!1),
                g = (0, j.PV)(e),
                v = d.trim(),
                C = g ? (0, S.p)(v) : null,
                P = (0, V.a1)(e, c),
                z = (function (e, n) {
                    let l = n?.views ?? null,
                        i = "user" === e.install_scope,
                        s = null != n && (0, R.l)(n.publishState),
                        r = l?.mounts.appChannels,
                        o = (0, t.cf)(
                            [L.A],
                            () =>
                                Object.fromEntries(
                                    (r ?? []).map((e) => {
                                        let { id: n } = e;
                                        return [n, L.A.getChannel(n)?.name];
                                    }),
                                ),
                            [r],
                        );
                    function c(e) {
                        return (0, T.$0)(e, {
                            personal: i,
                            live: s,
                            channelName: (e) => o[e],
                            buildAppChannels: n?.previewAppChannels,
                        });
                    }
                    let [d, u] = a.useState(() => (null == l ? null : c(l)));
                    null == d && null != l && u(c(l));
                    let m = l?.views,
                        h = a.useMemo(() => (null == d || null == m ? null : (0, T.RX)(d, m)), [d, m]),
                        p = a.useCallback((e) => u((n) => (null == n ? n : e(n))), []);
                    if (null == d || null == m || null == h) return null;
                    let x = (e) => null != e && h.missingViews.includes(e),
                        g = (e) => [
                            ...(null != e && x(e)
                                ? [
                                      {
                                          value: e,
                                          label: b.intl.formatToPlainString(f.default.qRfT8T, { view: e }),
                                          missing: !0,
                                      },
                                  ]
                                : []),
                            ...m.map((e) => ({ value: e.id, label: e.name, missing: !1 })),
                        ],
                        v = h.channelErrors;
                    return {
                        views: m,
                        personal: i,
                        draft: d,
                        surfaceChoices: (e) => [
                            { value: null, label: b.intl.string(f.default.tkc5qm), missing: !1 },
                            ...g(e),
                        ],
                        channelChoices: (e) => g(e),
                        setActivity: (e) => p((n) => ({ ...n, activity: e })),
                        setVoiceChannel: (e) => p((n) => ({ ...n, voiceChannel: e })),
                        addAppChannel: () => p((e) => (0, T.fG)(e, m)),
                        removeAppChannel: (e) => p((n) => _(n, e, () => null)),
                        renameAppChannel: (e, n) => p((l) => _(l, e, (e) => ({ ...e, name: n }))),
                        setAppChannelView: (e, n) => p((l) => _(l, e, (e) => ({ ...e, view: n }))),
                        canAddAppChannel: !i && m.length > 0 && d.appChannels.length < 5,
                        hasExistingAppChannel: d.appChannels.some((e) => {
                            let { existing: n } = e;
                            return null != n;
                        }),
                        appChannelLimitHint: b.intl.formatToPlainString(f.default.K90CLK, { count: 5 }),
                        channelError: (e) => {
                            switch (v.get(e)) {
                                case "empty":
                                    return b.intl.string(f.default["6Eeo8t"]);
                                case "too_long":
                                    return b.intl.formatToPlainString(f.default["4dSq3U"], { max: 100 });
                                case "unusable":
                                    return b.intl.string(f.default.CUlTpp);
                                case "duplicate":
                                    return b.intl.string(f.default.k4F0ZO);
                                default:
                                    return null;
                            }
                        },
                        missingNotice:
                            0 === h.missingViews.length
                                ? null
                                : b.intl.formatToPlainString(f.default["4k/FdZ"], {
                                      views: h.missingViews.map((e) => m.find((n) => n.id === e)?.name ?? e).join(", "),
                                  }),
                        unplacedNotice:
                            0 === h.unplacedViews.length
                                ? null
                                : b.intl.formatToPlainString(f.default["9G0FW8"], {
                                      views: h.unplacedViews.map((e) => e.name).join(", "),
                                  }),
                        isMissing: x,
                        blocked: h.blocked,
                        wire: (0, T.aO)(d),
                    };
                })(e, c),
                F = null != z,
                W = a.useMemo(() => {
                    let n = (0, V.Dy)(e, c, P);
                    return F ? n.filter((e) => !G.has(e.icon)) : n;
                }, [e, c, P, F]),
                O = c?.views?.mounts.appChannels,
                Y = null == z ? W.filter((e) => e.creates).length : (0, T.F7)(z.draft, O ?? []),
                Z = g && Y > 0 && "guild" === e.install_scope && e.guild_id === n ? n : null,
                B = (0, t.bG)(
                    [N.A, A.A],
                    () => {
                        let e = null == Z ? null : N.A.getGuild(Z);
                        return (
                            null != e &&
                            A.A.can(D.xBc.MANAGE_CHANNELS, e) &&
                            (0, y.n0)(D.rbe.GUILD_APP, A.A.can(D.xBc.VIEW_CHANNEL, e), A.A.can(D.xBc.CONNECT, e))
                        );
                    },
                    [Z],
                ),
                H = (0, t.bG)([N.A], () => (null == n ? null : N.A.getGuild(n)), [n]),
                K = (0, t.bG)([w.default], () => w.default.getCurrentUser());
            return {
                projectId: e.id,
                reason: P,
                editable: g,
                managedCopy: s,
                identity: i,
                name: d,
                setName: u,
                nameError: C,
                includes: W,
                placement: z,
                appChannelsPrivate: B ? { isPrivate: p, setPrivate: x, shared: null != z || Y > 1 } : null,
                devicePermissions: r,
                remix: o,
                destination:
                    "user" === e.install_scope
                        ? null != K
                            ? { type: "account", user: K }
                            : null
                        : null != H
                          ? { type: "server", guild: H }
                          : null,
                saving: m,
                save: async function () {
                    if (m || null != C) return !1;
                    h(!0);
                    try {
                        if (
                            (g && (v !== e.name || i.changed) && (await (0, k.CW)(e.id, { ...i.changes, name: v })),
                            !(await o.save()))
                        )
                            throw Error("Saving who can make a copy failed");
                        return !0;
                    } finally {
                        h(!1);
                    }
                },
            };
        })(n, l.guildId);
    async function P() {
        p.current = !0;
        try {
            return await C.save();
        } catch {
            return ((0, o.P0)({ text: b.intl.string(f.default.Fi7boI), variant: "critical" }), !1);
        } finally {
            p.current = !1;
        }
    }
    let z = b.intl.string(b.t.cpT0Cq);
    return (0, i.jsxs)(s.d, {
        transitionState: x,
        onClose: g,
        dismissable: !C.saving,
        size: "sm",
        "aria-label": b.intl.string("adds_surfaces" === C.reason ? f.default.wnZ4yU : f.default.NEPcoi),
        children: [
            (0, i.jsxs)("div", {
                className: eM.wx,
                children: [
                    (0, i.jsx)(eP, {
                        review: C,
                        onConjureIcon: async function () {
                            if (await P()) {
                                var e;
                                (g(), (e = n.id), (0, v.dv)(e, b.intl.string(f.default["hOg/Uu"])));
                            }
                        },
                    }),
                    (0, i.jsx)("div", {
                        className: eM.b,
                        children: (0, i.jsx)(c.m, {
                            text: z,
                            children: (0, i.jsx)(d.K, {
                                icon: u.XLargeIcon,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": z,
                                disabled: C.saving,
                                onClick: g,
                            }),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(r.c, {
                children: (0, i.jsx)("div", { className: eM.rf, children: (0, i.jsx)(ek, { review: C }) }),
            }),
            (0, i.jsxs)("div", {
                className: eM.qr,
                children: [
                    null != C.destination ? (0, i.jsx)(eU, { destination: C.destination }) : null,
                    (0, i.jsx)(m.$, {
                        variant: "primary",
                        text: l.label,
                        loading: C.saving,
                        disabled: l.disabled || null != C.nameError || C.placement?.blocked === !0,
                        onClick: async function () {
                            (await P()) &&
                                (l.run(h, {
                                    appChannelsPrivate: C.appChannelsPrivate?.isPrivate === !0,
                                    ...(null != C.placement ? { viewMounts: C.placement.wire } : {}),
                                }),
                                g());
                        },
                    }),
                ],
            }),
        ],
    });
}
function eU(e) {
    let { destination: n } = e,
        l = "server" === n.type ? n.guild.name : b.intl.string(f.default["11Xr/r"]);
    return (0, i.jsxs)("div", {
        className: eM.j_,
        children: [
            "server" === n.type
                ? (0, i.jsx)(g.Ay, {
                      guild: n.guild,
                      size: g.Ay.Sizes.MEDIUM,
                      active: !0,
                      className: eM.sm,
                      "aria-hidden": !0,
                  })
                : (0, i.jsx)(x.A, { user: n.user, size: h._3.SIZE_40, className: eM.sm, "aria-hidden": !0 }),
            (0, i.jsxs)("div", {
                className: eM.Yr,
                children: [
                    (0, i.jsx)(p.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        children: b.intl.string(f.default.XHjO6t),
                    }),
                    (0, i.jsx)(p.E, { variant: "body-md/medium", color: "text-default", lineClamp: 1, children: l }),
                ],
            }),
        ],
    });
}
