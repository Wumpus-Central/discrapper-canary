(n.d(e, { default: () => to }), n(321073));
var i,
    l = n(477900),
    s = n(582128),
    a = n(32880),
    r = n(347704),
    o = n(157559),
    c = n(376728),
    d = n(49229),
    u = n(631670),
    g = n(913122),
    p = n(812633),
    b = n(626584),
    m = n(837057),
    E = n(894778),
    h = n(207803),
    x = n(287809),
    j = n(53505),
    C = n(4274),
    N = n(723702),
    v = n(834730),
    S = n(975571),
    f = n(652215),
    y = n(105292);
function A() {
    let t = S.A.getArticleURL(f.MVz.GUILD_GETTING_STARTED);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(v.E, { variant: "body-md/normal", children: y.intl.string(y.t.crKvu5) }),
            (0, l.jsx)(v.E, {
                variant: "body-sm/normal",
                color: "text-subtle",
                style: { marginTop: 8 },
                children: y.intl.format(y.t.OtQkd2, { url: t }),
            }),
        ],
    });
}
var D = n(873298),
    O = n(331322),
    R = n(534514),
    P = n(487245),
    T = n(253932),
    w = n(188514);
function k() {
    let t = (function (t) {
            switch (t) {
                case D.NS.COMPACT:
                    return "compact";
                case D.NS.COZY:
                    return "spacious";
                default:
                    return "default";
            }
        })(T.Xi.useSetting()),
        e = s.useMemo(
            () => [
                { value: "compact", label: y.intl.string(y.t["1JNcPS"]), proto: D.NS.COMPACT },
                { value: "default", label: y.intl.string(y.t.Jqj4cZ), proto: D.NS.DEFAULT },
                { value: "spacious", label: y.intl.string(y.t["4cuYHx"]), proto: D.NS.COZY },
            ],
            [],
        ),
        n = s.useCallback(
            (t) => {
                let n = e.find((e) => e.value === t);
                null != n && T.Xi.updateSetting(n.proto);
            },
            [e],
        );
    return (0, l.jsxs)(O.B, {
        gap: 20,
        children: [
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(R.D, { variant: "heading-sm/semibold", children: y.intl.string(y.t.Ksh3ik) }),
                    (0, l.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: y.intl.string(y.t["mz+/o+"]),
                    }),
                    (0, l.jsx)(P.Ay, {
                        type: P.v0.SETTINGS,
                        children: (0, l.jsx)(O.B, {
                            direction: "horizontal",
                            wrap: !0,
                            gap: 8,
                            style: { marginTop: 12 },
                            children: (0, l.jsx)(P.t6, { systemSelectorFirst: !1 }),
                        }),
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(R.D, { variant: "heading-sm/semibold", children: y.intl.string(y.t["C/5V0A"]) }),
                    (0, l.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: y.intl.string(y.t.sBENmo),
                    }),
                    (0, l.jsx)(O.B, {
                        direction: "horizontal",
                        gap: 8,
                        style: { marginTop: 12 },
                        children: e.map((e) =>
                            (0, l.jsx)(
                                "button",
                                {
                                    className: w.mj,
                                    "data-selected": t === e.value || void 0,
                                    onClick: () => n(e.value),
                                    "aria-pressed": t === e.value,
                                    type: "button",
                                    children: e.label,
                                },
                                e.value,
                            ),
                        ),
                    }),
                ],
            }),
        ],
    });
}
var I = n(17928),
    K = n(559106),
    _ = n(939249),
    L = n(332461),
    U = n(452027),
    F = n(95477),
    M = n(103557),
    B = n(252732),
    G = n(290386),
    W = n(486020),
    X = n(339984);
function V(t) {
    let { pendingGlobalName: e, onGlobalNameChange: n, pendingBio: i, onBioChange: a } = t,
        r = (0, I.bG)([x.default], () => x.default.getCurrentUser()),
        o = null != r ? W.Ay.getUserAvatarURL(r, !0, 80) : void 0,
        c = (0, G.U)({ location: "onboarding_profile_slide" }),
        d = s.useCallback(() => {
            (0, B.XD)({ uploadType: X.HL.AVATAR });
        }, []);
    return (0, l.jsxs)("div", {
        className: w.eE,
        children: [
            (0, l.jsx)("div", {
                className: w.Zk,
                children: (0, l.jsx)(K.vN, {
                    children: (0, l.jsxs)(_.D, {
                        className: w.nz,
                        onClick: d,
                        role: "button",
                        "aria-label": y.intl.string(y.t["70lEQe"]),
                        children: [
                            null != o
                                ? (0, l.jsx)("img", { src: o, alt: "", className: w.uV })
                                : (0, l.jsx)("div", {
                                      className: w.GT,
                                      children: (0, l.jsx)(L.x, { size: "md", color: "currentColor" }),
                                  }),
                            (0, l.jsx)("div", {
                                className: w.Nd,
                                children: (0, l.jsx)(L.x, { size: "sm", color: "currentColor" }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, l.jsx)(U.D, {
                label: y.intl.string(y.t["9AjdkD"]),
                children: (0, l.jsx)(F.k, { value: e, onChange: n, placeholder: r?.username, maxLength: 32 }),
            }),
            (0, l.jsx)(M.f, {
                label: y.intl.string(y.t["61W33d"]),
                value: i,
                onChange: a,
                maxLength: c,
                showCharacterCount: !0,
                rows: 3,
            }),
        ],
    });
}
var z = n(998445),
    J = n(836480),
    q = n(283973),
    Z = n(664121),
    Y =
        (((i = {}).WELCOME = "welcome"),
        (i.APPEARANCE = "appearance"),
        (i.DOWNLOAD_DESKTOP = "download-desktop"),
        (i.PROFILE = "profile"),
        (i.NEXT_STEPS = "next-steps"),
        (i.JOIN_SERVER = "join-server"),
        (i.ADD_FRIEND = "add-friend"),
        i),
    Q = n(906471);
function H(t) {
    let { icon: e, title: n, description: i, onClick: s } = t;
    return (0, l.jsx)(K.vN, {
        children: (0, l.jsxs)("button", {
            className: w.we,
            onClick: s,
            children: [
                (0, l.jsx)("div", { className: w.XM, children: (0, l.jsx)(e, { size: "md", color: "currentColor" }) }),
                (0, l.jsxs)("div", {
                    className: w.ht,
                    children: [
                        (0, l.jsx)(v.E, { variant: "body-md/semibold", children: n }),
                        (0, l.jsx)(v.E, { variant: "body-sm/normal", color: "text-subtle", children: i }),
                    ],
                }),
                (0, l.jsx)("img", { className: w.$O, alt: "", src: Q }),
            ],
        }),
    });
}
function $(t) {
    let { onSelectOption: e, onExplore: n, onCreateServer: i } = t;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(H, {
                icon: z.GlobeEarthIcon,
                title: y.intl.string(y.t.riOUtB),
                description: y.intl.string(y.t["5u0zvP"]),
                onClick: () => e(Y.JOIN_SERVER),
            }),
            (0, l.jsx)(H, {
                icon: J.CompassIcon,
                title: y.intl.string(y.t.gHNiza),
                description: y.intl.string(y.t.v7xiEA),
                onClick: n,
            }),
            (0, l.jsx)(H, {
                icon: q.R,
                title: y.intl.string(y.t.w5uwoI),
                description: y.intl.string(y.t.bgoxKS),
                onClick: () => e(Y.ADD_FRIEND),
            }),
            (0, l.jsx)(H, {
                icon: Z.R,
                title: y.intl.string(y.t.ZLfEo8),
                description: y.intl.string(y.t.z7OAvN),
                onClick: i,
            }),
        ],
    });
}
function tt(t) {
    let { inviteLink: e, onInviteLinkChange: n } = t;
    return (0, l.jsx)(U.D, {
        label: y.intl.string(y.t.riOUtB),
        children: (0, l.jsx)(F.k, { value: e, onChange: n, placeholder: y.intl.string(y.t["+9XKWu"]), autoFocus: !0 }),
    });
}
function te(t) {
    let { friendUsername: e, onFriendUsernameChange: n } = t;
    return (0, l.jsx)(U.D, {
        label: y.intl.string(y.t.w5uwoI),
        children: (0, l.jsx)(F.k, { value: e, onChange: n, placeholder: y.intl.string(y.t.qRaqel), autoFocus: !0 }),
    });
}
var tn = n(488995),
    ti = n(324580),
    tl = n(315290);
let ts = new b.A("NewUserOnboarding"),
    ta = {
        [Y.WELCOME]: tl.jK.WELCOME,
        [Y.APPEARANCE]: tl.jK.APPEARANCE,
        [Y.DOWNLOAD_DESKTOP]: tl.jK.DOWNLOAD_DESKTOP,
        [Y.PROFILE]: tl.jK.PROFILE,
        [Y.NEXT_STEPS]: tl.jK.NEXT_STEPS,
        [Y.JOIN_SERVER]: tl.jK.JOIN_SERVER,
        [Y.ADD_FRIEND]: tl.jK.ADD_FRIEND,
    };
function tr(t) {
    E.A.flowStep(tl.do.ANY, t);
}
function to(t) {
    let { onClose: e, ...n } = t,
        [i, b] = s.useState(Y.WELCOME),
        [E, v] = s.useState(null),
        S = x.default.getCurrentUser()?.isClaimed() === !0,
        [f, D] = s.useState(() => x.default.getCurrentUser()?.globalName ?? ""),
        [O, R] = s.useState(""),
        [P, T] = s.useState(""),
        [w, I] = s.useState("");
    s.useEffect(() => {
        tr(tl.jK.WELCOME);
    }, []);
    let K = s.useCallback((t) => {
            (tr(ta[t]), v(t), b(t));
        }, []),
        _ = s.useCallback(
            (t, e) => {
                t === Y.NEXT_STEPS && null != E && v(null);
                let n = ta[t];
                (null != n && tr(n), b(t));
            },
            [E],
        ),
        L = s.useCallback(async () => {
            let t = x.default.getCurrentUser(),
                e = f.trim(),
                n = t?.globalName ?? "";
            if (t?.isClaimed() === !0 && e.length > 0 && e !== n)
                try {
                    await (0, u._L)({ globalName: e });
                } catch (t) {
                    ts.warn("failed to save globalName", t);
                }
            if (O.trim().length > 0)
                try {
                    await (0, h.gi)({ bio: O.trim() });
                } catch (t) {
                    ts.warn("failed to save bio", t);
                }
        }, [f, O]),
        U = s.useCallback(async () => {
            (i === Y.NEXT_STEPS && tr(tl.jK.DISMISSED), await L());
        }, [i, L]),
        F = s.useCallback(async () => {
            let t = P.replace(/^\s*(https?:\/\/)?([\w-]+\.)?(discord\.gg|discord(?:app)?\.com\/invite)\//i, "").trim();
            if (0 === t.length) return !1;
            try {
                return (
                    await c.Ay.acceptInviteAndTransitionToInviteChannel({
                        inviteKey: t,
                        context: { location: "New User Onboarding" },
                    }),
                    !0
                );
            } catch (e) {
                let t = e instanceof g.Wl || e instanceof g.LG ? e.code : void 0;
                return (o.A.show({ title: y.intl.string(y.t.R0RpRX), body: (0, C.s)(t) }), !1);
            }
        }, [P]),
        M = s.useCallback(async () => {
            (tr(tl.jK.EXPLORE),
                await L(),
                await e(),
                (0, m.transitionToGlobalDiscovery)({ tab: tn.GlobalDiscoveryTab.SERVERS, entrypoint: ti.J8.UNKNOWN }));
        }, [L, e]),
        B = s.useCallback(async () => {
            let t = w.trim();
            if (0 === t.length) return !1;
            try {
                return (await d.A.sendRequest({ discordTag: t, context: { location: "New User Onboarding" } }), !0);
            } catch {
                return !1;
            }
        }, [w]),
        G = s.useCallback(async () => {
            (tr(tl.jK.CREATE_SERVER),
                await L(),
                await e(),
                (0, p.openCreateGuildModal)({ location: "New User Onboarding" }));
        }, [L, e]),
        W = s.useCallback(() => {
            window.open((0, j.SU)());
        }, []),
        X = s.useMemo(() => {
            let t = [
                {
                    stepKey: Y.WELCOME,
                    modalProps: {
                        graphic: {
                            type: "image",
                            src: "https://cdn.discordapp.com/assets/content/8cee6ac1e59daf603468edf05ecc97beeeeebdba44b55f9cb6bd589a44d7a08f.svg",
                        },
                        gradientColor: "purple",
                        title: y.intl.string(y.t.A1Q7a8),
                        subtitle: y.intl.string(y.t.jJZohU),
                    },
                    body: (0, l.jsx)(A, {}),
                    nextButtonProps: { text: y.intl.string(y.t.LhlgY9) },
                },
                {
                    stepKey: Y.APPEARANCE,
                    modalProps: { title: y.intl.string(y.t.mTkQFn), subtitle: y.intl.string(y.t["2b+0N6"]) },
                    hideBackButton: !0,
                    body: (0, l.jsx)(k, {}),
                },
            ];
            return (
                N.isPlatformEmbedded ||
                    t.push({
                        stepKey: Y.DOWNLOAD_DESKTOP,
                        modalProps: {
                            graphic: {
                                type: "image",
                                src: "https://cdn.discordapp.com/assets/content/4c20dd37f47dc0ad5926db81fc09233750332e94a0fe76ee49455a24c4240a95.svg",
                            },
                            gradientColor: "purple",
                            title: y.intl.string(y.t.qDbCbw),
                            subtitle: y.intl.string(y.t["5Di7f2"]),
                        },
                        secondaryActionButtonProps: {
                            text: y.intl.format(y.t.JoS1i3, { platform: (0, j.Vf)() }),
                            icon: a.DownloadIcon,
                            onClick: W,
                        },
                        nextButtonProps: { text: y.intl.string(y.t.L5eIZ2) },
                    }),
                S &&
                    t.push({
                        stepKey: Y.PROFILE,
                        modalProps: { title: y.intl.string(y.t["6A8F1a"]), subtitle: y.intl.string(y.t.sqjmbr) },
                        body: (0, l.jsx)(V, {
                            pendingGlobalName: f,
                            onGlobalNameChange: D,
                            pendingBio: O,
                            onBioChange: R,
                        }),
                    }),
                t.push({
                    stepKey: Y.NEXT_STEPS,
                    modalProps: {
                        graphic: {
                            type: "image",
                            src: "https://cdn.discordapp.com/assets/content/e080b25a204330f6009430ab2cb53737b9c204f09112729be927bdc06b7609dc.svg",
                        },
                        gradientColor: "blue",
                        title: y.intl.string(y.t["++F+ha"]),
                        subtitle: y.intl.string(y.t.yMX0GO),
                    },
                    body: (0, l.jsx)($, { onSelectOption: K, onExplore: M, onCreateServer: G }),
                    nextButtonProps: { text: y.intl.string(y.t.zcmBTS) },
                }),
                t
            );
        }, [S, f, O, K, M, G, W]),
        z = s.useMemo(() => X.map((t) => t.stepKey), [X]),
        J = s.useMemo(
            () => ({
                [Y.JOIN_SERVER]: {
                    stepKey: Y.JOIN_SERVER,
                    modalProps: { title: y.intl.string(y.t.riOUtB), subtitle: y.intl.string(y.t.cs48bs) },
                    body: (0, l.jsx)(tt, { inviteLink: P, onInviteLinkChange: T }),
                    nextButtonProps: { text: y.intl.string(y.t["Ts/9Ac"]) },
                    nextEnabled: P.trim().length > 0,
                    onNext: F,
                },
                [Y.ADD_FRIEND]: {
                    stepKey: Y.ADD_FRIEND,
                    modalProps: { title: y.intl.string(y.t.w5uwoI), subtitle: y.intl.string(y.t.jy1kln) },
                    body: (0, l.jsx)(te, { friendUsername: w, onFriendUsernameChange: I }),
                    nextButtonProps: { text: y.intl.string(y.t["PMsq/b"]) },
                    nextEnabled: w.trim().length > 0,
                    onNext: B,
                },
            }),
            [P, w, F, B],
        ),
        q = s.useMemo(() => (null != E && null != J[E] ? [...X, J[E]] : X), [X, E, J]);
    return (0, l.jsx)(r.t, {
        ...n,
        onClose: e,
        steps: q,
        numberedSteps: z,
        currentStepKey: i,
        onStepChange: _,
        onComplete: U,
    });
}
