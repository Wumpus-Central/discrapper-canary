l.d(n, { default: () => ey });
var i = l(477900),
    a = l(582128),
    s = l(855986),
    t = l(224640),
    r = l(430993),
    c = l(858899),
    o = l(866665),
    d = l(408278),
    u = l(972213),
    m = l(821609),
    x = l(778712),
    h = l(834730),
    j = l(730134),
    g = l(682163),
    p = l(540665),
    v = l(191850),
    b = l(792996),
    f = l(260498),
    C = l(738604),
    N = l(495273),
    y = l(71393),
    I = l(576705),
    A = l(287809),
    E = l(961553),
    P = l(60498),
    S = l(233470),
    w = l(277085),
    k = l(722701),
    L = l(984782);
let _ = [];
var R = l(641655),
    D = l(652215),
    U = l(503698),
    z = l.n(U),
    G = l(31300),
    q = l(983851),
    M = l(323384),
    T = l(430392),
    F = l(794083),
    O = l(715641),
    Y = l(231483),
    Z = l(757789),
    W = l(901117),
    B = l(95477),
    V = l(103557),
    H = l(150934),
    X = l(939249),
    K = l(750943),
    Q = l(265872),
    $ = l(165862),
    J = l(477782),
    ee = l(95635),
    en = l(152367),
    el = l(805251),
    ei = l(946274),
    ea = l(535466),
    es = l(407431),
    et = l(951178),
    er = l(559106),
    ec = l(885574),
    eo = l(715482),
    ed = l(398978);
function eu(e) {
    let { remix: n, disabled: l } = e,
        { options: s, value: t, setValue: r, canChange: c } = n,
        [d, u] = a.useState(!1),
        m = a.useCallback(() => u(!1), []),
        x = a.useRef(null),
        j = a.useId(),
        g = s.find((e) => e.value === t);
    if (null == g) return null;
    let p = b.intl.string(v.default["Z/NFcQ"]),
        f = b.intl.string(v.default["PuID+v"]),
        C = !c || l;
    return (0, i.jsxs)("div", {
        className: ed.nM,
        children: [
            (0, i.jsxs)("div", {
                className: ed.Pf,
                children: [
                    (0, i.jsx)(h.E, { id: j, variant: "body-sm/medium", color: "text-subtle", children: p }),
                    (0, i.jsx)(o.m, {
                        text: f,
                        asContainer: !0,
                        ariaHidden: !0,
                        children: (0, i.jsx)(er.vN, {
                            children: (0, i.jsx)("span", {
                                className: ed.pq,
                                role: "img",
                                "aria-label": f,
                                tabIndex: 0,
                                children: (0, i.jsx)(ec.CircleInformationIcon, { size: "xxs", color: "currentColor" }),
                            }),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(Q.Y, {
                targetElementRef: x,
                shouldShow: d && !C,
                onRequestClose: m,
                position: "bottom",
                align: "right",
                animation: Q.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, i.jsx)($.W, {
                        navId: "conjure-publish-remix",
                        "aria-label": p,
                        onClose: n,
                        onSelect: n,
                        children: s.map((e) =>
                            (0, i.jsx)(
                                J.iD,
                                {
                                    id: `conjure-publish-remix-${e.value}`,
                                    group: "conjure-publish-remix",
                                    label: e.label,
                                    checked: e.value === t,
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
                        { isShown: s } = n;
                    return (0, i.jsx)(er.vN, {
                        children: (0, i.jsxs)("button", {
                            ...a,
                            ref: x,
                            type: "button",
                            className: ed.hZ,
                            "aria-labelledby": j,
                            "aria-haspopup": "menu",
                            "aria-expanded": s,
                            disabled: C,
                            onClick: () => u((e) => !e),
                            children: [
                                (0, i.jsx)(h.E, {
                                    tag: "span",
                                    variant: "body-sm/medium",
                                    color: "none",
                                    children: g.label,
                                }),
                                c ? (0, i.jsx)(eo.ChevronLargeDownIcon, { size: "xs", color: "currentColor" }) : null,
                            ],
                        }),
                    });
                },
            }),
        ],
    });
}
var em = l(229171);
let ex = { screen_capture: G.ScreenIcon, connect_user_to_voice: q.VoiceNormalIcon },
    eh = {
        app_channel: M.AppsIcon,
        [et.q7.BOT]: T.RobotIcon,
        [et.q7.ACTIVITY]: F.ActivitiesIcon,
        [et.q7.VOICE_CHANNEL]: q.VoiceNormalIcon,
        [et.q7.PROFILE_WIDGET]: O.BadgeIcon,
        [et.q7.AUTOMOD]: Y.ShieldIcon,
        [et.q7.OVERLAY]: Z.WindowTopIcon,
    };
function ej(e) {
    let { review: n } = e,
        { identity: l, appChannelsPrivate: a } = n,
        s = null == a || a.shared ? null : a,
        t = n.includes.map((e) =>
            (0, i.jsx)(
                eC,
                {
                    icon: "app_channel" === e.icon && e.creates && a?.isPrivate === !0 ? W.AppsLockIcon : eh[e.icon],
                    label: e.label,
                    isNew: e.isNew,
                    trailing:
                        e.creates && null != s ? (0, i.jsx)(ep, { appChannelsPrivate: s, disabled: n.saving }) : null,
                },
                e.key,
            ),
        );
    return (0, i.jsxs)("div", {
        className: em.zH,
        children: [
            n.managedCopy
                ? (0, i.jsx)(es.A, { projectId: n.projectId })
                : n.editable
                  ? (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsxs)("div", {
                                className: em.ZZ,
                                children: [
                                    (0, i.jsx)(h.E, {
                                        variant: "body-sm/medium",
                                        color: "text-subtle",
                                        "aria-hidden": !0,
                                        children: b.intl.string(v.default.knevPu),
                                    }),
                                    (0, i.jsx)(B.k, {
                                        label: b.intl.string(v.default.knevPu),
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
                                className: em.ZZ,
                                children: [
                                    (0, i.jsx)(h.E, {
                                        variant: "body-sm/medium",
                                        color: "text-subtle",
                                        "aria-hidden": !0,
                                        children: b.intl.string(v.default.ynaGa1),
                                    }),
                                    (0, i.jsx)(V.f, {
                                        label: b.intl.string(v.default.ynaGa1),
                                        hideLabel: !0,
                                        placeholder: b.intl.string(v.default["I+3UTL"]),
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
                        className: em.Xp,
                        children: (0, i.jsxs)("div", {
                            className: em.ZZ,
                            children: [
                                (0, i.jsx)(h.E, {
                                    variant: "body-md/semibold",
                                    color: "text-strong",
                                    lineClamp: 1,
                                    children: n.name,
                                }),
                                "" !== l.description
                                    ? (0, i.jsx)(h.E, {
                                          variant: "body-sm/normal",
                                          color: "text-subtle",
                                          lineClamp: 3,
                                          children: l.description,
                                      })
                                    : null,
                            ],
                        }),
                    }),
            (0, i.jsx)(ef, { title: b.intl.string(v.default.BqNMms), rows: t }),
            a?.shared === !0
                ? (0, i.jsx)(H.S, {
                      label: b.intl.string(v.default.Td1mlg),
                      checked: a.isPrivate,
                      disabled: n.saving,
                      onChange: a.setPrivate,
                  })
                : null,
            (0, i.jsx)(ef, {
                title: b.intl.string(v.default.LnqeFd),
                rows: n.devicePermissions.map((e) => (0, i.jsx)(eC, { icon: ex[e], label: b.intl.string(L.sP[e]) }, e)),
            }),
            (0, i.jsx)(eu, { remix: n.remix, disabled: n.saving }),
        ],
    });
}
function eg(e) {
    let { review: n, onConjureIcon: l } = e,
        { identity: s } = n,
        t = a.useRef(null),
        r = a.useCallback(() => t.current?.activateUploadDialogue(), []);
    return n.managedCopy
        ? null
        : n.editable
          ? (0, i.jsxs)("div", {
                className: em.wx,
                children: [
                    (0, i.jsx)(eb, {
                        onUpload: r,
                        onConjure: l,
                        children: (e) => (0, i.jsx)(ev, { iconURL: s.iconURL, onClick: e }),
                    }),
                    (0, i.jsx)(ei.Ay, {
                        ref: t,
                        className: em.Fg,
                        multiple: !1,
                        filters: [{ name: b.intl.string(b.t["Sp2NF+"]), extensions: ea.En }],
                        maxFileSizeBytes: ea.Q0,
                        onChange: s.setIcon,
                        onFileSizeError: () =>
                            (0, c.P0)({ text: b.intl.string(v.default.ZTAAMc), variant: "critical" }),
                        "aria-hidden": !0,
                    }),
                ],
            })
          : null != s.iconURL
            ? (0, i.jsx)("img", { className: em.Dp, src: s.iconURL, alt: "" })
            : null;
}
function ep(e) {
    let { appChannelsPrivate: n, disabled: l } = e;
    return (0, i.jsx)("div", {
        className: em.to,
        children: (0, i.jsx)(H.S, {
            label: b.intl.string(v.default.RSyIc9),
            labelType: "secondary",
            checked: n.isPrivate,
            disabled: l,
            onChange: n.setPrivate,
        }),
    });
}
function ev(e) {
    let { iconURL: n, onClick: l } = e;
    return null != n
        ? (0, i.jsxs)(X.D, {
              className: em.gb,
              "aria-label": b.intl.string(b.t["6yrpFR"]),
              onClick: l,
              children: [
                  (0, i.jsx)("img", { className: em.Dp, src: n, alt: "" }),
                  (0, i.jsx)("span", {
                      className: em.E7,
                      "aria-hidden": !0,
                      children: (0, i.jsx)(K.ImagePlusIcon, { size: "xs", color: "currentColor" }),
                  }),
              ],
          })
        : (0, i.jsx)(X.D, {
              className: z()(em.gb, em.YX),
              "aria-label": b.intl.string(b.t["MsUY/S"]),
              onClick: l,
              children: (0, i.jsx)(K.ImagePlusIcon, { size: "md", color: "currentColor" }),
          });
}
function eb(e) {
    let { onUpload: n, onConjure: l, children: s } = e,
        [t, r] = a.useState(!1),
        c = a.useRef(null),
        o = a.useCallback(() => r(!1), []);
    return (0, i.jsx)(Q.Y, {
        targetElementRef: c,
        shouldShow: t,
        onRequestClose: o,
        position: "bottom",
        align: "left",
        animation: Q.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, i.jsxs)($.W, {
                navId: "conjure-app-icon",
                "aria-label": b.intl.string(b.t["6yrpFR"]),
                onClose: a,
                onSelect: a,
                children: [
                    (0, i.jsx)(J.Dr, {
                        id: "conjure-app-icon-upload",
                        label: b.intl.string(b.t["MsUY/S"]),
                        iconLeft: ee.UploadIcon,
                        leadingAccessory: { type: "icon", icon: ee.UploadIcon },
                        action: () => {
                            (o(), n());
                        },
                    }),
                    (0, i.jsx)(J.Dr, {
                        id: "conjure-app-icon-conjure",
                        label: b.intl.string(v.default["oAG/BY"]),
                        iconLeft: en.MagicWandIcon,
                        leadingAccessory: { type: "icon", icon: en.MagicWandIcon },
                        action: () => {
                            (o(), l());
                        },
                    }),
                ],
            });
        },
        children: () => (0, i.jsx)("div", { ref: c, children: s(() => r((e) => !e)) }),
    });
}
function ef(e) {
    let { title: n, rows: l } = e;
    return 0 === l.length
        ? null
        : (0, i.jsxs)("section", {
              className: em.mK,
              children: [(0, i.jsx)(h.E, { variant: "body-sm/medium", color: "text-subtle", children: n }), l],
          });
}
function eC(e) {
    let { icon: n, label: l, isNew: a = !1, trailing: s = null } = e;
    return (0, i.jsxs)("div", {
        className: em.CT,
        children: [
            (0, i.jsx)(n, { size: "xs", color: "currentColor", className: em.Pw, "aria-hidden": !0 }),
            (0, i.jsx)(h.E, { variant: "body-sm/medium", color: "text-strong", lineClamp: 1, children: l }),
            a ? (0, i.jsx)(el.E, { type: "new" }) : null,
            null != s ? (0, i.jsx)("div", { className: em.Mu, children: s }) : null,
        ],
    });
}
var eN = l(787032);
function ey(e) {
    let { projectId: n, publishOptions: l, entryPoint: t, savingRef: r, transitionState: c, onClose: o } = e,
        d = (0, C.Ay)(n, l),
        u = (0, s.bG)([f.Ay], () => f.Ay.getProject(n), [n]);
    return (a.useEffect(() => {
        (null == u || null == d) && o();
    }, [u, d, o]),
    null == u || null == d)
        ? null
        : (0, i.jsx)(eI, { project: u, publish: d, entryPoint: t, savingRef: r, transitionState: c, onClose: o });
}
function eI(e) {
    let { project: n, publish: l, entryPoint: x, savingRef: h, transitionState: j, onClose: g } = e,
        C = (function (e, n) {
            var l;
            let i = (0, E.A)(e.id),
                t = (0, P.AJ)(e.id),
                r = ((l = e.id), (0, s.bG)([k.A], () => k.A.getPublishStatus(l)?.previewDevicePermissions ?? _)),
                c = (function (e) {
                    let n = (0, R.A)(e),
                        [l, i] = a.useState(null),
                        { mode: s, canChange: t, changeMode: r } = n,
                        c = a.useCallback(() => (null != l && l !== s && t ? r(l) : Promise.resolve(!0)), [l, s, t, r]);
                    return { options: n.options, value: l ?? s, setValue: i, canChange: t && !n.changing, save: c };
                })(e.id),
                o = (0, s.bG)([k.A], () => k.A.getPublishStatus(e.id), [e.id]),
                [d, u] = a.useState(e.name),
                [m, x] = a.useState(!1),
                [h, j] = a.useState(!1),
                g = (0, f.PV)(e),
                p = d.trim(),
                v = g && !t ? (0, w.p)(p) : null,
                b = (0, L.a1)(e, o),
                C = a.useMemo(() => (0, L.Dy)(e, o, b), [e, o, b]),
                U = C.filter((e) => e.creates).length,
                z = g && U > 0 && "guild" === e.install_scope && e.guild_id === n ? n : null,
                G = (0, s.bG)(
                    [y.A, I.A],
                    () => {
                        let e = null == z ? null : y.A.getGuild(z);
                        return (
                            null != e &&
                            I.A.can(D.xBc.MANAGE_CHANNELS, e) &&
                            (0, N.n0)(D.rbe.GUILD_APP, I.A.can(D.xBc.VIEW_CHANNEL, e), I.A.can(D.xBc.CONNECT, e))
                        );
                    },
                    [z],
                ),
                q = (0, s.bG)([y.A], () => (null == n ? null : y.A.getGuild(n)), [n]),
                M = (0, s.bG)([A.default], () => A.default.getCurrentUser());
            return {
                projectId: e.id,
                reason: b,
                editable: g,
                managedCopy: t,
                identity: i,
                name: d,
                setName: u,
                nameError: v,
                includes: C,
                appChannelsPrivate: G ? { isPrivate: h, setPrivate: j, shared: U > 1 } : null,
                devicePermissions: r,
                remix: c,
                destination:
                    "user" === e.install_scope
                        ? null != M
                            ? { type: "account", user: M }
                            : null
                        : null != q
                          ? { type: "server", guild: q }
                          : null,
                saving: m,
                save: async function () {
                    if (m || null != v) return !1;
                    x(!0);
                    try {
                        if (
                            (g &&
                                !t &&
                                (p !== e.name || i.changed) &&
                                (await (0, S.CW)(e.id, { ...i.changes, name: p })),
                            !(await c.save()))
                        )
                            throw Error("Saving who can remix failed");
                        return !0;
                    } finally {
                        x(!1);
                    }
                },
            };
        })(n, l.guildId);
    async function U() {
        h.current = !0;
        try {
            return await C.save();
        } catch {
            return ((0, c.P0)({ text: b.intl.string(v.default.Fi7boI), variant: "critical" }), !1);
        } finally {
            h.current = !1;
        }
    }
    let z = b.intl.string(b.t.cpT0Cq);
    return (0, i.jsxs)(t.d, {
        transitionState: j,
        onClose: g,
        dismissable: !C.saving,
        size: "sm",
        "aria-label": b.intl.string("adds_surfaces" === C.reason ? v.default.wnZ4yU : v.default.NEPcoi),
        children: [
            (0, i.jsxs)("div", {
                className: eN.wx,
                children: [
                    (0, i.jsx)(eg, {
                        review: C,
                        onConjureIcon: async function () {
                            if (await U()) {
                                var e;
                                (g(), (e = n.id), (0, p.dv)(e, b.intl.string(v.default["hOg/Uu"])));
                            }
                        },
                    }),
                    (0, i.jsx)("div", {
                        className: eN.b,
                        children: (0, i.jsx)(o.m, {
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
                children: (0, i.jsx)("div", { className: eN.rf, children: (0, i.jsx)(ej, { review: C }) }),
            }),
            (0, i.jsxs)("div", {
                className: eN.qr,
                children: [
                    null != C.destination ? (0, i.jsx)(eA, { destination: C.destination }) : null,
                    (0, i.jsx)(m.$, {
                        variant: "primary",
                        text: l.label,
                        loading: C.saving,
                        disabled: l.disabled || null != C.nameError,
                        onClick: async function () {
                            (await U()) && (l.run(x, C.appChannelsPrivate?.isPrivate === !0), g());
                        },
                    }),
                ],
            }),
        ],
    });
}
function eA(e) {
    let { destination: n } = e,
        l = "server" === n.type ? n.guild.name : b.intl.string(v.default["11Xr/r"]);
    return (0, i.jsxs)("div", {
        className: eN.j_,
        children: [
            "server" === n.type
                ? (0, i.jsx)(g.Ay, {
                      guild: n.guild,
                      size: g.Ay.Sizes.MEDIUM,
                      active: !0,
                      className: eN.sm,
                      "aria-hidden": !0,
                  })
                : (0, i.jsx)(j.A, { user: n.user, size: x._3.SIZE_40, className: eN.sm, "aria-hidden": !0 }),
            (0, i.jsxs)("div", {
                className: eN.Yr,
                children: [
                    (0, i.jsx)(h.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        children: b.intl.string(v.default.XHjO6t),
                    }),
                    (0, i.jsx)(h.E, { variant: "body-md/medium", color: "text-default", lineClamp: 1, children: l }),
                ],
            }),
        ],
    });
}
