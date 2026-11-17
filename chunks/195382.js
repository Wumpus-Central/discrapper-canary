(n.d(e, { default: () => tc }), n(321073));
var i,
    l = n(477900),
    s = n(582128),
    r = n(32880),
    a = n(347704),
    o = n(157559),
    c = n(574332),
    d = n(49229),
    u = n(631670),
    g = n(627784),
    p = n(130565),
    m = n(626584),
    b = n(837057),
    E = n(894778),
    h = n(207803),
    x = n(287809),
    C = n(53505),
    j = n(4274),
    N = n(723702),
    v = n(834730),
    S = n(975571),
    y = n(652215),
    A = n(792996);
function f() {
    let t = S.A.getArticleURL(y.MVz.GUILD_GETTING_STARTED);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(v.E, { variant: "body-md/normal", children: A.intl.string(A.t.crKvu5) }),
            (0, l.jsx)(v.E, {
                variant: "body-sm/normal",
                color: "text-subtle",
                style: { marginTop: 8 },
                children: A.intl.format(A.t.OtQkd2, { url: t }),
            }),
        ],
    });
}
var D = n(873298),
    O = n(331322),
    P = n(534514),
    R = n(270746),
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
                { value: "compact", label: A.intl.string(A.t["1JNcPS"]), proto: D.NS.COMPACT },
                { value: "default", label: A.intl.string(A.t.Jqj4cZ), proto: D.NS.DEFAULT },
                { value: "spacious", label: A.intl.string(A.t["4cuYHx"]), proto: D.NS.COZY },
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
                    (0, l.jsx)(P.D, { variant: "heading-sm/semibold", children: A.intl.string(A.t.Ksh3ik) }),
                    (0, l.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: A.intl.string(A.t["mz+/o+"]),
                    }),
                    (0, l.jsx)(R.Ay, {
                        type: R.v0.SETTINGS,
                        children: (0, l.jsx)(O.B, {
                            direction: "horizontal",
                            wrap: !0,
                            gap: 8,
                            style: { marginTop: 12 },
                            children: (0, l.jsx)(R.t6, { systemSelectorFirst: !1 }),
                        }),
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(P.D, { variant: "heading-sm/semibold", children: A.intl.string(A.t["C/5V0A"]) }),
                    (0, l.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: A.intl.string(A.t.sBENmo),
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
var I = n(855986),
    K = n(559106),
    _ = n(939249),
    L = n(332461),
    U = n(452027),
    F = n(95477),
    M = n(103557),
    B = n(468450),
    G = n(290386),
    W = n(486020),
    X = n(339984);
function V(t) {
    let { pendingGlobalName: e, onGlobalNameChange: n, pendingBio: i, onBioChange: r } = t,
        a = (0, I.bG)([x.default], () => x.default.getCurrentUser()),
        o = null != a ? W.Ay.getUserAvatarURL(a, !0, 80) : void 0,
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
                        "aria-label": A.intl.string(A.t["70lEQe"]),
                        children: [
                            null != o
                                ? (0, l.jsx)("img", { src: o, alt: "", className: w.uV })
                                : (0, l.jsx)("div", {
                                      className: w.GT,
                                      children: (0, l.jsx)(L.CameraIcon, { size: "md", color: "currentColor" }),
                                  }),
                            (0, l.jsx)("div", {
                                className: w.Nd,
                                children: (0, l.jsx)(L.CameraIcon, { size: "sm", color: "currentColor" }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, l.jsx)(U.D, {
                label: A.intl.string(A.t["9AjdkD"]),
                children: (0, l.jsx)(F.k, { value: e, onChange: n, placeholder: a?.username, maxLength: 32 }),
            }),
            (0, l.jsx)(M.f, {
                label: A.intl.string(A.t["61W33d"]),
                value: i,
                onChange: r,
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
                title: A.intl.string(A.t.riOUtB),
                description: A.intl.string(A.t["5u0zvP"]),
                onClick: () => e(Y.JOIN_SERVER),
            }),
            (0, l.jsx)(H, {
                icon: J.CompassIcon,
                title: A.intl.string(A.t.gHNiza),
                description: A.intl.string(A.t.v7xiEA),
                onClick: n,
            }),
            (0, l.jsx)(H, {
                icon: q.UserPlusIcon,
                title: A.intl.string(A.t.w5uwoI),
                description: A.intl.string(A.t.bgoxKS),
                onClick: () => e(Y.ADD_FRIEND),
            }),
            (0, l.jsx)(H, {
                icon: Z.ServerIcon,
                title: A.intl.string(A.t.ZLfEo8),
                description: A.intl.string(A.t.z7OAvN),
                onClick: i,
            }),
        ],
    });
}
function tt(t) {
    let { inviteLink: e, onInviteLinkChange: n } = t;
    return (0, l.jsx)(U.D, {
        label: A.intl.string(A.t.riOUtB),
        children: (0, l.jsx)(F.k, { value: e, onChange: n, placeholder: A.intl.string(A.t["+9XKWu"]), autoFocus: !0 }),
    });
}
function te(t) {
    let { friendUsername: e, onFriendUsernameChange: n } = t;
    return (0, l.jsx)(U.D, {
        label: A.intl.string(A.t.w5uwoI),
        children: (0, l.jsx)(F.k, { value: e, onChange: n, placeholder: A.intl.string(A.t.qRaqel), autoFocus: !0 }),
    });
}
var tn = n(488995),
    ti = n(324580),
    tl = n(315290),
    ts = n(227143);
let tr = new m.A("NewUserOnboarding"),
    ta = {
        [Y.WELCOME]: tl.jK.WELCOME,
        [Y.APPEARANCE]: tl.jK.APPEARANCE,
        [Y.DOWNLOAD_DESKTOP]: tl.jK.DOWNLOAD_DESKTOP,
        [Y.PROFILE]: tl.jK.PROFILE,
        [Y.NEXT_STEPS]: tl.jK.NEXT_STEPS,
        [Y.JOIN_SERVER]: tl.jK.JOIN_SERVER,
        [Y.ADD_FRIEND]: tl.jK.ADD_FRIEND,
    };
function to(t) {
    E.A.flowStep(tl.do.ANY, t);
}
function tc(t) {
    let { onClose: e, ...n } = t,
        [i, m] = s.useState(Y.WELCOME),
        [E, v] = s.useState(null),
        S = x.default.getCurrentUser()?.isClaimed() === !0,
        [y, D] = s.useState(() => x.default.getCurrentUser()?.globalName ?? ""),
        [O, P] = s.useState(""),
        [R, T] = s.useState(""),
        [w, I] = s.useState("");
    s.useEffect(() => {
        to(tl.jK.WELCOME);
    }, []);
    let K = s.useCallback((t) => {
            (to(ta[t]), v(t), m(t));
        }, []),
        _ = s.useCallback(
            (t, e) => {
                t === Y.NEXT_STEPS && null != E && v(null);
                let n = ta[t];
                (null != n && to(n), m(t));
            },
            [E],
        ),
        L = s.useCallback(async () => {
            let t = x.default.getCurrentUser(),
                e = y.trim(),
                n = t?.globalName ?? "";
            if (t?.isClaimed() === !0 && e.length > 0 && e !== n)
                try {
                    await (0, u._L)({ globalName: e });
                } catch (t) {
                    tr.warn("failed to save globalName", t);
                }
            if (O.trim().length > 0)
                try {
                    await (0, h.gi)({ bio: O.trim() });
                } catch (t) {
                    tr.warn("failed to save bio", t);
                }
        }, [y, O]),
        U = s.useCallback(async () => {
            (i === Y.NEXT_STEPS && to(tl.jK.DISMISSED), await L());
        }, [i, L]),
        F = s.useCallback(async () => {
            let t = R.replace(/^\s*(https?:\/\/)?([\w-]+\.)?(discord\.gg|discord(?:app)?\.com\/invite)\//i, "").trim();
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
                return (o.A.show({ title: A.intl.string(A.t.R0RpRX), body: (0, j.s)(t) }), !1);
            }
        }, [R]),
        M = s.useCallback(async () => {
            (to(tl.jK.EXPLORE),
                await L(),
                await e(),
                (0, b.transitionToGlobalDiscovery)({ tab: tn.GlobalDiscoveryTab.SERVERS, entrypoint: ti.J8.UNKNOWN }));
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
            (to(tl.jK.CREATE_SERVER),
                await L(),
                await e(),
                (0, p.openCreateGuildModal)({ location: "New User Onboarding" }));
        }, [L, e]),
        W = s.useCallback(() => {
            window.open((0, C.SU)());
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
                        title: A.intl.string(A.t.A1Q7a8),
                        subtitle: A.intl.string(A.t.jJZohU),
                    },
                    body: (0, l.jsx)(f, {}),
                    nextButtonProps: { text: A.intl.string(A.t.LhlgY9) },
                },
                {
                    stepKey: Y.APPEARANCE,
                    modalProps: { title: A.intl.string(A.t.mTkQFn), subtitle: A.intl.string(A.t["2b+0N6"]) },
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
                            title: A.intl.string(A.t.qDbCbw),
                            subtitle: A.intl.string(A.t["5Di7f2"]),
                        },
                        secondaryActionButtonProps: {
                            text: A.intl.format(A.t.JoS1i3, { platform: (0, C.Vf)() }),
                            icon: r.DownloadIcon,
                            onClick: W,
                        },
                        nextButtonProps: { text: A.intl.string(A.t.L5eIZ2) },
                    }),
                S &&
                    t.push({
                        stepKey: Y.PROFILE,
                        modalProps: { title: A.intl.string(A.t["6A8F1a"]), subtitle: A.intl.string(A.t.sqjmbr) },
                        body: (0, l.jsx)(V, {
                            pendingGlobalName: y,
                            onGlobalNameChange: D,
                            pendingBio: O,
                            onBioChange: P,
                        }),
                    }),
                t.push({
                    stepKey: Y.NEXT_STEPS,
                    modalProps: {
                        graphic: { type: "image", src: ts.A },
                        gradientColor: "blue",
                        title: A.intl.string(A.t["++F+ha"]),
                        subtitle: A.intl.string(A.t.yMX0GO),
                    },
                    body: (0, l.jsx)($, { onSelectOption: K, onExplore: M, onCreateServer: G }),
                    nextButtonProps: { text: A.intl.string(A.t.zcmBTS) },
                }),
                t
            );
        }, [S, y, O, K, M, G, W]),
        z = s.useMemo(() => X.map((t) => t.stepKey), [X]),
        J = s.useMemo(
            () => ({
                [Y.JOIN_SERVER]: {
                    stepKey: Y.JOIN_SERVER,
                    modalProps: { title: A.intl.string(A.t.riOUtB), subtitle: A.intl.string(A.t.cs48bs) },
                    body: (0, l.jsx)(tt, { inviteLink: R, onInviteLinkChange: T }),
                    nextButtonProps: { text: A.intl.string(A.t["Ts/9Ac"]) },
                    nextEnabled: R.trim().length > 0,
                    onNext: F,
                },
                [Y.ADD_FRIEND]: {
                    stepKey: Y.ADD_FRIEND,
                    modalProps: { title: A.intl.string(A.t.w5uwoI), subtitle: A.intl.string(A.t.jy1kln) },
                    body: (0, l.jsx)(te, { friendUsername: w, onFriendUsernameChange: I }),
                    nextButtonProps: { text: A.intl.string(A.t["PMsq/b"]) },
                    nextEnabled: w.trim().length > 0,
                    onNext: B,
                },
            }),
            [R, w, F, B],
        ),
        q = s.useMemo(() => (null != E && null != J[E] ? [...X, J[E]] : X), [X, E, J]);
    return (0, l.jsx)(a.t, {
        ...n,
        onClose: e,
        steps: q,
        numberedSteps: z,
        currentStepKey: i,
        onStepChange: _,
        onComplete: U,
    });
}
