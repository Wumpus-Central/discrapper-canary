n.d(e, { default: () => tc, Z: () => tr }), n(321073);
var i,
    l = n(477900),
    s = n(582128),
    r = n(32880),
    a = n(347704),
    o = n(157559),
    c = n(376728),
    d = n(717398),
    u = n(631670),
    p = n(913122),
    g = n(812633),
    m = n(626584),
    x = n(837057),
    b = n(894778),
    h = n(207803),
    j = n(287809),
    C = n(53505),
    v = n(4274),
    E = n(723702),
    f = n(834730),
    N = n(975571),
    y = n(652215),
    w = n(375708);
function S() {
    let t = N.A.getArticleURL(y.MVz.GUILD_GETTING_STARTED);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(f.E, { variant: "text-md/normal", children: w.intl.string(w.t.crKvu5) }),
            (0, l.jsx)(f.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                style: { marginTop: 8 },
                children: w.intl.format(w.t.OtQkd2, { url: t }),
            }),
        ],
    });
}
var A = n(873298),
    k = n(331322),
    D = n(297264),
    O = n(487245),
    P = n(885386),
    R = n(188514);
function T() {
    let t = (function (t) {
            switch (t) {
                case A.NS.COMPACT:
                    return "compact";
                case A.NS.COZY:
                    return "spacious";
                default:
                    return "default";
            }
        })(P.Xi.useSetting()),
        e = s.useMemo(
            () => [
                { value: "compact", label: w.intl.string(w.t["1JNcPS"]), proto: A.NS.COMPACT },
                { value: "default", label: w.intl.string(w.t.Jqj4cZ), proto: A.NS.DEFAULT },
                { value: "spacious", label: w.intl.string(w.t["4cuYHx"]), proto: A.NS.COZY },
            ],
            [],
        ),
        n = s.useCallback(
            (t) => {
                let n = e.find((e) => e.value === t);
                null != n && P.Xi.updateSetting(n.proto);
            },
            [e],
        );
    return (0, l.jsxs)(k.B, {
        gap: 20,
        children: [
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(D.D, { variant: "heading-md/semibold", children: w.intl.string(w.t.Ksh3ik) }),
                    (0, l.jsx)(f.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: w.intl.string(w.t["mz+/o+"]),
                    }),
                    (0, l.jsx)(O.Ay, {
                        type: O.v0.SETTINGS,
                        children: (0, l.jsx)(k.B, {
                            direction: "horizontal",
                            wrap: !0,
                            gap: 8,
                            style: { marginTop: 12 },
                            children: (0, l.jsx)(O.t6, { systemSelectorFirst: !1 }),
                        }),
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(D.D, { variant: "heading-md/semibold", children: w.intl.string(w.t["C/5V0A"]) }),
                    (0, l.jsx)(f.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: w.intl.string(w.t.sBENmo),
                    }),
                    (0, l.jsx)(k.B, {
                        direction: "horizontal",
                        gap: 8,
                        style: { marginTop: 12 },
                        children: e.map((e) =>
                            (0, l.jsx)(
                                "button",
                                {
                                    className: R.mj,
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
var K = n(17928),
    I = n(259678),
    L = n(939249),
    U = n(332461),
    B = n(452027),
    _ = n(95477),
    M = n(103557),
    F = n(252732),
    G = n(290386),
    z = n(486020),
    V = n(339984);
function X(t) {
    let { pendingGlobalName: e, onGlobalNameChange: n, pendingBio: i, onBioChange: r } = t,
        a = (0, K.bG)([j.default], () => j.default.getCurrentUser()),
        o = null != a ? z.Ay.getUserAvatarURL(a, !0, 80) : void 0,
        c = (0, G.U)({ location: "onboarding_profile_slide" }),
        d = s.useCallback(() => {
            (0, F.XD)({ uploadType: V.HL.AVATAR });
        }, []);
    return (0, l.jsxs)("div", {
        className: R.eE,
        children: [
            (0, l.jsx)("div", {
                className: R.Zk,
                children: (0, l.jsx)(I.vN, {
                    children: (0, l.jsxs)(L.D, {
                        className: R.nz,
                        onClick: d,
                        role: "button",
                        "aria-label": w.intl.string(w.t["70lEQe"]),
                        children: [
                            null != o
                                ? (0, l.jsx)("img", { src: o, alt: "", className: R.uV })
                                : (0, l.jsx)("div", {
                                      className: R.GT,
                                      children: (0, l.jsx)(U.x, { size: "md", color: "currentColor" }),
                                  }),
                            (0, l.jsx)("div", {
                                className: R.Nd,
                                children: (0, l.jsx)(U.x, { size: "sm", color: "currentColor" }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, l.jsx)(B.D, {
                label: w.intl.string(w.t["9AjdkD"]),
                children: (0, l.jsx)(_.k, { value: e, onChange: n, placeholder: a?.username, maxLength: 32 }),
            }),
            (0, l.jsx)(M.f, {
                label: w.intl.string(w.t["61W33d"]),
                value: i,
                onChange: r,
                maxLength: c,
                showCharacterCount: !0,
                rows: 3,
            }),
        ],
    });
}
var W = n(998445),
    J = n(836480),
    Z = n(283973),
    q = n(664121),
    Y = n(906471);
function Q(t) {
    let { icon: e, title: n, description: i, onClick: s } = t;
    return (0, l.jsx)(I.vN, {
        children: (0, l.jsxs)("button", {
            className: R.we,
            onClick: s,
            children: [
                (0, l.jsx)("div", { className: R.XM, children: (0, l.jsx)(e, { size: "md", color: "currentColor" }) }),
                (0, l.jsxs)("div", {
                    className: R.ht,
                    children: [
                        (0, l.jsx)(f.E, { variant: "text-md/semibold", children: n }),
                        (0, l.jsx)(f.E, { variant: "text-sm/normal", color: "text-subtle", children: i }),
                    ],
                }),
                (0, l.jsx)("img", { className: R.$O, alt: "", src: Y }),
            ],
        }),
    });
}
function H(t) {
    let { onSelectOption: e, onExplore: n, onCreateServer: i } = t;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(Q, {
                icon: W.GlobeEarthIcon,
                title: w.intl.string(w.t.riOUtB),
                description: w.intl.string(w.t["5u0zvP"]),
                onClick: () => e(tr.JOIN_SERVER),
            }),
            (0, l.jsx)(Q, {
                icon: J.CompassIcon,
                title: w.intl.string(w.t.gHNiza),
                description: w.intl.string(w.t.v7xiEA),
                onClick: n,
            }),
            (0, l.jsx)(Q, {
                icon: Z.R,
                title: w.intl.string(w.t.w5uwoI),
                description: w.intl.string(w.t.bgoxKS),
                onClick: () => e(tr.ADD_FRIEND),
            }),
            (0, l.jsx)(Q, {
                icon: q.R,
                title: w.intl.string(w.t.ZLfEo8),
                description: w.intl.string(w.t.z7OAvN),
                onClick: i,
            }),
        ],
    });
}
function $(t) {
    let { inviteLink: e, onInviteLinkChange: n } = t;
    return (0, l.jsx)(B.D, {
        label: w.intl.string(w.t.riOUtB),
        children: (0, l.jsx)(_.k, { value: e, onChange: n, placeholder: w.intl.string(w.t["+9XKWu"]), autoFocus: !0 }),
    });
}
function tt(t) {
    let { friendUsername: e, onFriendUsernameChange: n } = t;
    return (0, l.jsx)(B.D, {
        label: w.intl.string(w.t.w5uwoI),
        children: (0, l.jsx)(_.k, { value: e, onChange: n, placeholder: w.intl.string(w.t.qRaqel), autoFocus: !0 }),
    });
}
var te = n(488995),
    tn = n(324580),
    ti = n(315290),
    tl = n(227143);
let ts = new m.A("NewUserOnboarding");
var tr =
    (((i = {}).WELCOME = "welcome"),
    (i.APPEARANCE = "appearance"),
    (i.DOWNLOAD_DESKTOP = "download-desktop"),
    (i.PROFILE = "profile"),
    (i.NEXT_STEPS = "next-steps"),
    (i.JOIN_SERVER = "join-server"),
    (i.ADD_FRIEND = "add-friend"),
    i);
let ta = {
    welcome: ti.jK.WELCOME,
    appearance: ti.jK.APPEARANCE,
    "download-desktop": ti.jK.DOWNLOAD_DESKTOP,
    profile: ti.jK.PROFILE,
    "next-steps": ti.jK.NEXT_STEPS,
    "join-server": ti.jK.JOIN_SERVER,
    "add-friend": ti.jK.ADD_FRIEND,
};
function to(t) {
    b.A.flowStep(ti.do.ANY, t);
}
function tc(t) {
    let { onClose: e, ...n } = t,
        [i, m] = s.useState("welcome"),
        [b, f] = s.useState(null),
        N = j.default.getCurrentUser()?.isClaimed() === !0,
        [y, A] = s.useState(() => j.default.getCurrentUser()?.globalName ?? ""),
        [k, D] = s.useState(""),
        [O, P] = s.useState(""),
        [R, K] = s.useState("");
    s.useEffect(() => {
        to(ti.jK.WELCOME);
    }, []);
    let I = s.useCallback((t) => {
            to(ta[t]), f(t), m(t);
        }, []),
        L = s.useCallback(
            (t, e) => {
                "next-steps" === t && null != b && f(null);
                let n = ta[t];
                null != n && to(n), m(t);
            },
            [b],
        ),
        U = s.useCallback(async () => {
            let t = j.default.getCurrentUser(),
                e = y.trim(),
                n = t?.globalName ?? "";
            if (t?.isClaimed() === !0 && e.length > 0 && e !== n)
                try {
                    await (0, u._L)({ globalName: e });
                } catch (t) {
                    ts.warn("failed to save globalName", t);
                }
            if (k.trim().length > 0)
                try {
                    await (0, h.gi)({ bio: k.trim() });
                } catch (t) {
                    ts.warn("failed to save bio", t);
                }
        }, [y, k]),
        B = s.useCallback(async () => {
            "next-steps" === i && to(ti.jK.DISMISSED), await U();
        }, [i, U]),
        _ = s.useCallback(async () => {
            let t = O.replace(/^\s*(https?:\/\/)?([\w-]+\.)?(discord\.gg|discord(?:app)?\.com\/invite)\//i, "").trim();
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
                let t = e instanceof p.Wl || e instanceof p.LG ? e.code : void 0;
                return o.A.show({ title: w.intl.string(w.t.R0RpRX), body: (0, v.s)(t) }), !1;
            }
        }, [O]),
        M = s.useCallback(async () => {
            to(ti.jK.EXPLORE),
                await U(),
                await e(),
                (0, x.transitionToGlobalDiscovery)({ tab: te.GlobalDiscoveryTab.SERVERS, entrypoint: tn.J8.UNKNOWN });
        }, [U, e]),
        F = s.useCallback(async () => {
            let t = R.trim();
            if (0 === t.length) return !1;
            try {
                return await d.A.sendRequest({ discordTag: t, context: { location: "New User Onboarding" } }), !0;
            } catch {
                return !1;
            }
        }, [R]),
        G = s.useCallback(async () => {
            to(ti.jK.CREATE_SERVER),
                await U(),
                await e(),
                (0, g.openCreateGuildModal)({ location: "New User Onboarding" });
        }, [U, e]),
        z = s.useCallback(() => {
            window.open((0, C.SU)());
        }, []),
        V = s.useMemo(() => {
            let t = [
                {
                    stepKey: "welcome",
                    modalProps: {
                        graphic: {
                            type: "image",
                            src: "https://cdn.discordapp.com/assets/content/8cee6ac1e59daf603468edf05ecc97beeeeebdba44b55f9cb6bd589a44d7a08f.svg",
                        },
                        gradientColor: "purple",
                        title: w.intl.string(w.t.A1Q7a8),
                        subtitle: w.intl.string(w.t.jJZohU),
                    },
                    body: (0, l.jsx)(S, {}),
                    nextButtonProps: { text: w.intl.string(w.t.LhlgY9) },
                },
                {
                    stepKey: "appearance",
                    modalProps: { title: w.intl.string(w.t.mTkQFn), subtitle: w.intl.string(w.t["2b+0N6"]) },
                    hideBackButton: !0,
                    body: (0, l.jsx)(T, {}),
                },
            ];
            return (
                E.isPlatformEmbedded ||
                    t.push({
                        stepKey: "download-desktop",
                        modalProps: {
                            graphic: {
                                type: "image",
                                src: "https://cdn.discordapp.com/assets/content/4c20dd37f47dc0ad5926db81fc09233750332e94a0fe76ee49455a24c4240a95.svg",
                            },
                            gradientColor: "purple",
                            title: w.intl.string(w.t.qDbCbw),
                            subtitle: w.intl.string(w.t["5Di7f2"]),
                        },
                        secondaryActionButtonProps: {
                            text: w.intl.format(w.t.JoS1i3, { platform: (0, C.Vf)() }),
                            icon: r.DownloadIcon,
                            onClick: z,
                        },
                        nextButtonProps: { text: w.intl.string(w.t.L5eIZ2) },
                    }),
                N &&
                    t.push({
                        stepKey: "profile",
                        modalProps: { title: w.intl.string(w.t["6A8F1a"]), subtitle: w.intl.string(w.t.sqjmbr) },
                        body: (0, l.jsx)(X, {
                            pendingGlobalName: y,
                            onGlobalNameChange: A,
                            pendingBio: k,
                            onBioChange: D,
                        }),
                    }),
                t.push({
                    stepKey: "next-steps",
                    modalProps: {
                        graphic: { type: "image", src: tl.A },
                        gradientColor: "blue",
                        title: w.intl.string(w.t["++F+ha"]),
                        subtitle: w.intl.string(w.t.yMX0GO),
                    },
                    body: (0, l.jsx)(H, { onSelectOption: I, onExplore: M, onCreateServer: G }),
                    nextButtonProps: { text: w.intl.string(w.t.zcmBTS) },
                }),
                t
            );
        }, [N, y, k, I, M, G, z]),
        W = s.useMemo(() => V.map((t) => t.stepKey), [V]),
        J = s.useMemo(
            () => ({
                "join-server": {
                    stepKey: "join-server",
                    modalProps: { title: w.intl.string(w.t.riOUtB), subtitle: w.intl.string(w.t.cs48bs) },
                    body: (0, l.jsx)($, { inviteLink: O, onInviteLinkChange: P }),
                    nextButtonProps: { text: w.intl.string(w.t["Ts/9Ac"]) },
                    nextEnabled: O.trim().length > 0,
                    onNext: _,
                },
                "add-friend": {
                    stepKey: "add-friend",
                    modalProps: { title: w.intl.string(w.t.w5uwoI), subtitle: w.intl.string(w.t.jy1kln) },
                    body: (0, l.jsx)(tt, { friendUsername: R, onFriendUsernameChange: K }),
                    nextButtonProps: { text: w.intl.string(w.t["PMsq/b"]) },
                    nextEnabled: R.trim().length > 0,
                    onNext: F,
                },
            }),
            [O, R, _, F],
        ),
        Z = s.useMemo(() => (null != b && null != J[b] ? [...V, J[b]] : V), [V, b, J]);
    return (0, l.jsx)(a.t, {
        ...n,
        onClose: e,
        steps: Z,
        numberedSteps: W,
        currentStepKey: i,
        onStepChange: L,
        onComplete: B,
    });
}
