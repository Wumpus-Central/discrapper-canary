(n.r(t), n.d(t, { default: () => u4 }), n(321073));
var l,
    a = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    o = n(536637),
    u = n.n(o),
    d = n(478104),
    c = n(17928),
    m = n(314116),
    f = n(534890),
    h = n(646270),
    p = n(31300),
    g = n(739187),
    x = n(857250),
    b = n(97483),
    v = n(834730),
    j = n(939249),
    y = n(866665),
    w = n(140735),
    k = n(289873),
    C = n(821609),
    A = n(604525),
    N = n(92446),
    S = n(625903),
    E = n(297264),
    I = n(97893),
    T = n(364522),
    P = n(103557),
    M = n(150934),
    _ = n(691885),
    R = n(789645),
    L = n(152367),
    D = n(661531),
    O = n(442433),
    F = n(627363),
    z = n(47167),
    U = n(713654),
    G = n(625180),
    q = n(672929),
    $ = n(775946),
    B = n(742589),
    H = n(976860),
    V = n(402860),
    K = n(885386),
    W = n(734057),
    X = n(696451),
    Y = n(71393),
    J = n(576705),
    Q = n(597331),
    Z = n(248675),
    ee = n(375708),
    et = n(164892),
    en = n(477818);
function el(e) {
    let { idea: t, installScope: n, submitting: l } = e;
    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var ea = n(11696),
    ei = n(489586),
    er = n(188698);
function es(e, t, n) {
    return t?.integration_installed === !0 && e?.guild_id != null ? e.guild_id : n;
}
async function eo(e, t) {
    (e.guild_id !== t || e.preview_guild_id !== t) && (await (0, en.M7)(e.id, { guild_id: t, preview_guild_id: t }));
}
var eu = n(35413),
    ed = n(388208);
let ec = Object.freeze({ x: 0.5, y: 0.5 });
function em(e) {
    return "" !== e.trim();
}
function ef(e) {
    let t = e.name.trim(),
        n = (function (e) {
            switch (e.role) {
                case "button":
                    return "Button";
                case "link":
                    return "Link";
                case "heading":
                    return "Heading";
                case "textbox":
                    return "Input";
                case "checkbox":
                    return "Checkbox";
                case "radio":
                    return "Radio";
                case "combobox":
                    return "Dropdown";
                case "slider":
                    return "Slider";
                case "switch":
                    return "Toggle";
                case "img":
                    return "Image";
                case "list":
                    return "List";
                case "listitem":
                    return "List item";
                case "tab":
                    return "Tab";
                case "menuitem":
                    return "Menu item";
                case "dialog":
                    return "Dialog";
                case "progressbar":
                    return "Progress bar";
                case "separator":
                    return "Divider";
                case "label":
                    return "Label";
            }
            switch (e.tag) {
                case "img":
                case "picture":
                    return "Image";
                case "svg":
                    return "Icon";
                case "video":
                    return "Video";
                case "canvas":
                    return "Canvas";
                case "p":
                case "span":
                case "strong":
                case "em":
                case "small":
                case "blockquote":
                case "code":
                case "li":
                    return "Text";
                case "form":
                    return "Form";
                case "ul":
                case "ol":
                    return "List";
                case "table":
                    return "Table";
                case "header":
                    return "Header";
                case "footer":
                    return "Footer";
                case "nav":
                    return "Navigation";
                case "section":
                case "article":
                case "main":
                case "aside":
                case "figure":
                    return "Section";
                case "div":
                    return "Container";
            }
            return null;
        })(e);
    return null == n
        ? "" === t
            ? { kind: "" !== e.role ? e.role : e.tag, name: "" }
            : { kind: "", name: t }
        : { kind: n, name: t };
}
function eh(e) {
    let { kind: t, name: n } = ef(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function ep(e) {
    let t = [`<${e.tag}>`];
    "" !== e.role && t.push(`role=${e.role}`);
    let n = e.name.trim();
    return (
        "" !== n && t.push(`name="${n}"`),
        null != e.value && "" !== e.value && t.push(`value="${e.value}"`),
        null != e.path && "" !== e.path && t.push(`path="${e.path}"`),
        t.push(`at x=${e.rect.x} y=${e.rect.y}`),
        t.push(`size ${e.rect.width}x${e.rect.height}`),
        t.push(`ref=${e.ref}`),
        t.join(" ")
    );
}
let eg = "[vibegrations:selected] ",
    ex = " \u2014 ";
function eb(e) {
    if (!e.startsWith(eg)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        a = n.slice(eg.length),
        i = a.indexOf(ex),
        r = (-1 === i ? a : a.slice(0, i)).trim();
    return "" === r ? null : { label: r, body: l };
}
let ev = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    ej = new Map(),
    ey = new Set();
function ew(e) {
    return ej.get(e) ?? ev;
}
function ek(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? ej.set(e, t) : ej.delete(e), [...ey]))
        try {
            n();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function eC(e) {
    ej.has(e) && ek(e, ev);
}
function eA(e, t) {
    let n = ew(e);
    n.active && ek(e, { ...n, context: t });
}
function eN(e, t) {
    return null != t && e.authorId === t;
}
function eS(e) {
    return (
        ey.add(e),
        () => {
            ey.delete(e);
        }
    );
}
function eE(e) {
    let t = i.useCallback(() => (null == e ? ev : ew(e)), [e]);
    return i.useSyncExternalStore(eS, t, t);
}
var eI = n(476133),
    eT = n(200240),
    eP = n(59996),
    eM = n(303491),
    e_ = n(222454),
    eR = n(26278),
    eL = n(598748),
    eD = n(294323),
    eO = n(25451),
    eF = n(280450),
    ez = n(287809),
    eU = n(427262),
    eG = n(485163),
    eq = n(803306);
let e$ = new Set(),
    eB = new Map();
function eH(e, t, n) {
    return null == e ? (n ?? null) : (t ?? null);
}
function eV(e) {
    if (null == e || e$.has(e) || null != ez.default.getUser(e)) return;
    let t = eB.get(e) ?? 0;
    t >= 3 ||
        (eB.set(e, t + 1),
        e$.add(e),
        eq
            .wz(e)
            .finally(() => e$.delete(e))
            .catch(() => {}));
}
var eK = n(58430),
    eW = n(73153),
    eX = n(587895),
    eY = n(321191),
    eJ = n(808728),
    eQ = n(757575),
    eZ = n(488671),
    e0 = n(870440),
    e2 = n(283878);
function e1(e) {
    let { installScope: t, status: n, integrationStatus: l, guildName: a, appChannelName: i } = e;
    if (null == n) return null;
    let r = n.surface;
    if ("unpublished" === n.state && null == r && l?.preview_ready !== !0) return null;
    let s =
            null == r
                ? null
                : "user" === t
                  ? (function (e) {
                        switch (e) {
                            case "bot":
                                return {
                                    update: ee.intl.string(Z.default.JpDnbE),
                                    open: ee.intl.string(Z.default.NNIwRu),
                                    destination: "dm",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: ee.intl.string(Z.default.QesMDC),
                                    open: ee.intl.string(Z.default.iyQTsb),
                                    destination: "launch",
                                    navigatesOnFirstPublish: !1,
                                    navigatesOnUpdate: !1,
                                };
                            case "widget":
                                return {
                                    update: ee.intl.string(Z.default["LUi/55"]),
                                    open: ee.intl.string(Z.default.TXUK1g),
                                    destination: "profile",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !0,
                                };
                            case "automod":
                                return null;
                        }
                    })(r)
                  : (function (e, t, n) {
                        if (null == t) return null;
                        let l = ee.intl.formatToPlainString(Z.default.fTgw6C, { server: t });
                        switch (e) {
                            case "bot":
                                return {
                                    update: ee.intl.string(Z.default.JpDnbE),
                                    open: l,
                                    destination: "guild",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: ee.intl.string(Z.default.QesMDC),
                                    open: null == n ? l : ee.intl.formatToPlainString(Z.default.l9xGQD, { channel: n }),
                                    destination: "channel",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "automod":
                                return {
                                    update: ee.intl.string(Z.default.bwBMMn),
                                    open: ee.intl.string(Z.default.KjbLum),
                                    destination: "automod",
                                    navigatesOnFirstPublish: !1,
                                    navigatesOnUpdate: !1,
                                };
                            case "widget":
                                return null;
                        }
                    })(r, a, i),
        o = (function (e) {
            let { installScope: t, status: n, appChannelName: l, appChannelPending: a, botInGuild: i } = e;
            return (
                "guild" === t &&
                null != n &&
                "unpublished" !== n.state &&
                ("activity" === n.surface ? null == l && !0 !== a : "bot" === n.surface && !1 === i)
            );
        })(e);
    if (null != s && "up_to_date" === n.state && !o)
        return {
            label: s.open,
            intent: "open",
            action: "open",
            destination: s.destination,
            navigatesOnPublish: !1,
            upToDate: !0,
            isUpdate: !1,
            disabledReason: null,
        };
    let u = (function (e) {
            let {
                installScope: t,
                guildName: n,
                canManageGuild: l,
                canManageChannels: a,
                usesNativeAppChannels: i,
            } = e;
            if ("guild" !== t) return null;
            let r = !1 === l,
                s = i && !1 === a,
                o = { server: n ?? "" };
            return r && s
                ? ee.intl.formatToPlainString(Z.default["4sqXfg"], o)
                : r
                  ? ee.intl.formatToPlainString(Z.default.N4NkyR, o)
                  : s
                    ? ee.intl.formatToPlainString(Z.default.PxtHIV, o)
                    : null;
        })(e),
        d = (0, eM.Qg)({
            installScope: t,
            previewReady: l?.preview_ready === !0,
            integrationInstalled: l?.integration_installed ?? null,
            botPermissionsChanged: l?.bot_permissions_changed === !0,
        }),
        c = "changes" === n.state && !o,
        m = {
            intent: d ? "consent_then_publish" : "publish",
            destination: s?.destination ?? null,
            upToDate: !1,
            isUpdate: c,
            disabledReason: u,
        },
        f = null != s && (c ? s.navigatesOnUpdate : s.navigatesOnFirstPublish);
    if (d && l?.bot_permissions_changed === !0)
        return {
            ...m,
            label: ee.intl.string(Z.default["tUeY/h"]),
            action: "review_permissions",
            navigatesOnPublish: f,
        };
    let h = s?.update ?? ee.intl.string(Z.default.QesMDC);
    return { ...m, label: c ? h : ee.intl.string(Z.default["120EFN"]), action: "publish", navigatesOnPublish: f };
}
var e6 = (((l = {}).NO_PREVIEW = "no-preview"), (l.PERMISSIONS = "permissions"), l),
    e9 = n(308528),
    e5 = n(345942),
    e3 = n(652215),
    e4 = n(165610);
let e8 = i.createContext(null);
function e7(e) {
    return eX.A.getApplication(e.application_id)?.bot?.id ?? e.application_id;
}
function te(e, t) {
    let n = eR.Ay.getProject(e);
    if (null == n) return null;
    let l = "user" === n.install_scope ? null : (n.guild_id ?? t),
        a = null == l ? null : (0, e0.i8)(l, n.application_id),
        i = null == l ? null : Y.A.getGuild(l);
    return {
        project: n,
        guildId: l,
        appChannelId: a,
        input: {
            installScope: n.install_scope,
            status: eR.Ay.getPublishStatus(e),
            integrationStatus: eR.Ay.getIntegrationStatus(e),
            guildName: i?.name ?? null,
            appChannelName: null == a ? null : (W.A.getChannel(a)?.name ?? null),
            appChannelPending: eR.Ay.isAppChannelPending(e),
            canManageGuild: null == i ? null : J.A.can(e3.xBc.MANAGE_GUILD, i),
            canManageChannels: null == i ? null : J.A.can(e3.xBc.MANAGE_CHANNELS, i),
            usesNativeAppChannels: (0, et.KQ)(n),
            botInGuild: (function (e, t) {
                if (null == t) return null;
                let n = eY.A.getMutualGuilds(e7(e));
                return null == n
                    ? null
                    : n.some((e) => {
                          let { guild: n } = e;
                          return n.id === t;
                      });
            })(n, l),
        },
    };
}
function tt(e, t, n) {
    return (function (e, t) {
        let n,
            { applicationId: l, guildId: a, appChannelId: i, openProfile: r, openAutomodSettings: s } = t;
        switch (e) {
            case "launch":
                if ((0, eO.X)(eX.A.getApplication(l)))
                    return (G.A.launchFrame({ applicationId: l, surface: e4.sd }).catch(() => {}), Promise.resolve());
                break;
            case "profile": {
                let e = ez.default.getCurrentUser()?.id;
                if (null != e) return (r(e), Promise.resolve());
                break;
            }
            case "channel":
                if (null != a && null != i) return ((0, H.pX)(e3.BVt.CHANNEL(a, i)), Promise.resolve());
                break;
            case "automod":
                if (null != a && null != s) return (s(a), Promise.resolve());
        }
        if ("dm" !== e && null != a) {
            let e;
            return (
                null != (e = eJ.Ay.getDefaultChannel(a)?.id) ? (0, H.pX)(e3.BVt.CHANNEL(a, e)) : (0, e5.u)(a),
                Promise.resolve()
            );
        }
        return ((n = eX.A.getApplication(l)?.bot?.id ?? l), e9.A.openPrivateChannel({ recipientIds: n }));
    })(t, {
        applicationId: e.project.application_id,
        guildId: e.guildId,
        appChannelId: e.appChannelId,
        openProfile: n.openProfile,
        openAutomodSettings: n.openAutomodSettings,
    });
}
async function tn(e, t) {
    let n = eR.Ay.getProject(e),
        l = n?.preview_application_id;
    if (null == n || null == l) return;
    let a = es(n, eR.Ay.getIntegrationStatus(e), t);
    (null == eX.A.getApplication(l) && (await (0, F.TA)(l).catch(() => {})),
        await new Promise((e) => {
            eZ.A.openConjureAppInstallModal({
                applicationId: l,
                application: eX.A.getApplication(l) ?? null,
                guildId: a,
                onClose: e,
            });
        }),
        await eo(n, a).catch(() => {}),
        await (0, en.U1)(e).catch(() => {}));
}
let tl = new Set(["dm", "guild", "channel"]);
function ta(e, t, n) {
    let { project: l } = e,
        { platform: a, guildId: i } = n,
        r = l.id,
        s = t.navigatesOnPublish ? t.destination : null,
        o = "user" === l.install_scope || null != s ? null : (0, Q.$C)(r);
    (o?.catch(() => {}), "channel" === s && ti(r, !0));
    let u = (0, Q.TV)(r).then((e) => {
            if (!0 !== e.ok) {
                let t;
                throw Error(
                    null != (t = e.detail?.trim()) && "" !== t
                        ? ee.intl.formatToPlainString(Z.default["7ZsIF1"], { reason: t })
                        : ee.intl.string(Z.default.gMWZeG),
                );
            }
            return e;
        }),
        d = u.then(
            () =>
                (0, en.tZ)(r, { isPreview: !1 }).catch((e) => {
                    console.error("[vibegrations] post-publish refresh failed", r, e);
                }),
            () => {},
        );
    if (
        (u.then(
            () => {
                (null != e.guildId && ts(l),
                    null != s &&
                        (tl.has(s) && (0, e2.cP)(r),
                        d
                            .then(() => ("channel" === s ? tr(r, i) : void 0))
                            .finally(() => ti(r, !1))
                            .then(() => tt(te(r, i) ?? e, s, a))
                            .catch(() => {})));
            },
            (e) => {
                (ti(r, !1), a.showError(e instanceof Error ? e.message : ee.intl.string(Z.default.gMWZeG)));
            },
        ),
        null != o && null != e.guildId)
    ) {
        let t = u.then(() => {});
        (t.catch(() => {}),
            a.openPublishNotes({
                projectId: r,
                guildId: e.guildId,
                applicationId: l.application_id,
                projectName: l.name,
                publish: t,
                initialDraft: o,
            }));
    }
}
function ti(e, t) {
    eW.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: e, pending: t });
}
async function tr(e, t) {
    let n = Date.now() + 5e3;
    for (; te(e, t)?.appChannelId == null && Date.now() < n;) await new Promise((e) => setTimeout(e, 250));
}
function ts(e) {
    (0, eq.eO)(e7(e), { withMutualGuilds: !0 }).catch(() => {});
}
let to = new Set();
async function tu(e, t, n) {
    let { guildId: l, platform: a } = n;
    if (!0 === n.busy || to.has(e)) return;
    let i = te(e, l);
    if (null == i || eR.Ay.isProjectPublishing(e)) return;
    let r = e1(i.input);
    if (null != r) {
        if (
            ((0, eQ.yJ)(e, {
                entryPoint: t,
                publishState: i.input.status?.state ?? null,
                surface: i.input.status?.surface ?? null,
                installScope: i.project.install_scope,
                action: r.action,
            }),
            "open" === r.intent)
        ) {
            null != r.destination && tt(i, r.destination, a).catch(() => {});
            return;
        }
        if (null == r.disabledReason) {
            if (i.input.integrationStatus?.preview_ready !== !0) return void a.showPublishBlocked(e6.NO_PREVIEW);
            if ("consent_then_publish" === r.intent) {
                to.add(e);
                try {
                    await (a.requestConsent ?? ((e) => tn(e, l)))(e);
                } finally {
                    to.delete(e);
                }
                if (eR.Ay.isProjectPublishing(e)) return;
                let t = te(e, l),
                    i = t?.input.integrationStatus ?? null;
                if (
                    null == t ||
                    (0, eM.Qg)({
                        installScope: t.project.install_scope,
                        previewReady: i?.preview_ready === !0,
                        integrationInstalled: i?.integration_installed ?? null,
                        botPermissionsChanged: i?.bot_permissions_changed === !0,
                    })
                )
                    return;
                ta(t, r, n);
                return;
            }
            ta(i, r, n);
        }
    }
}
function td(e, t) {
    let n = i.useContext(e8),
        l = t ?? n,
        a = l?.guildId ?? null,
        {
            canPublish: r,
            publishing: s,
            project: o,
            guildId: u,
            appChannelId: d,
            installScope: m,
            status: f,
            integrationStatus: h,
            guildName: p,
            appChannelName: g,
            appChannelPending: x,
            canManageGuild: b,
            canManageChannels: v,
            usesNativeAppChannels: j,
            botInGuild: y,
        } = (0, c.cf)(
            [eR.Ay, Y.A, eJ.Ay, W.A, J.A, eY.A, eX.A],
            () => {
                let t = null == e || null == a ? null : te(e, a);
                return {
                    canPublish: null != t && (0, eR.jf)(t.project),
                    project: t?.project ?? null,
                    guildId: t?.guildId ?? null,
                    appChannelId: t?.appChannelId ?? null,
                    publishing: null != e && eR.Ay.isProjectPublishing(e),
                    installScope: t?.input.installScope ?? null,
                    status: t?.input.status ?? null,
                    integrationStatus: t?.input.integrationStatus ?? null,
                    guildName: t?.input.guildName ?? null,
                    appChannelName: t?.input.appChannelName ?? null,
                    appChannelPending: t?.input.appChannelPending ?? !1,
                    canManageGuild: t?.input.canManageGuild ?? null,
                    canManageChannels: t?.input.canManageChannels ?? null,
                    usesNativeAppChannels: t?.input.usesNativeAppChannels ?? !1,
                    botInGuild: t?.input.botInGuild ?? null,
                };
            },
            [e, a],
        ),
        w = i.useMemo(
            () =>
                null == o
                    ? null
                    : {
                          installScope: m,
                          status: f,
                          integrationStatus: h,
                          guildName: p,
                          appChannelName: g,
                          appChannelPending: x,
                          canManageGuild: b,
                          canManageChannels: v,
                          usesNativeAppChannels: j,
                          botInGuild: y,
                      },
            [o, m, f, h, p, g, x, b, v, j, y],
        ),
        k = w?.status?.state ?? null,
        C = w?.installScope === "guild" && w.status?.surface === "bot";
    i.useEffect(() => {
        null != o && null != u && C && null != k && "unpublished" !== k && ts(o);
    }, [o?.id, u, C, k]);
    let A = i.useMemo(() => (null == w ? null : e1(w)), [w]),
        N = i.useCallback(
            (t) => {
                null != e &&
                    null != l &&
                    tu(e, t, l).catch((t) => {
                        console.error("[vibegrations] publish action failed", e, t);
                    });
            },
            [e, l],
        );
    return null != l && r && null != A
        ? {
              ...A,
              status: w?.status ?? null,
              guildId: u,
              appChannelId: d,
              publishing: s,
              disabled: s || !0 === l.busy || null != A.disabledReason,
              run: N,
          }
        : null;
}
var tc = n(544952),
    tm = n(991690),
    tf = n(58736),
    th = n(580954),
    tp = n(590062),
    tg = n(343030),
    tx = n(91242),
    tb = n(317608),
    tv = n(206600),
    tj = n(869146),
    ty = n(742023),
    tw = n(697744),
    tk = n(594269);
function tC(e) {
    let t = (0, tw.c)(),
        { events: n, getDuration: l } = t;
    return (
        i.useEffect(() => {
            let e = null,
                t = 0;
            return (
                (e = requestAnimationFrame(function a() {
                    ((e = null), null != l()) ? n.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(a));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [n, l]),
        i.useEffect(() => {
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e]),
        t
    );
}
function tA(e) {
    let { className: t } = e,
        { Component: n, events: l } = tC(3e4);
    return (0, a.jsxs)("div", {
        className: t,
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: tk.o,
                children: ee.intl.string(Z.default.AyiQEp),
            }),
        ],
    });
}
var tN = n(543886);
function tS(e) {
    let { title: t, body: n, wide: l = !1, children: i } = e;
    return (0, a.jsxs)("div", {
        className: s()(tN.Bf, l && tN.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: tN.Ux,
                children: [
                    (0, a.jsx)(E.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            i,
        ],
    });
}
var tE = n(394005);
function tI(e) {
    let { applicationId: t, surface: n, frameOverlay: l } = e,
        { frame: r, state: s } = (0, tv.A)({ applicationId: t, surface: n }),
        o = (0, e4.VA)(t, n);
    switch (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = tx.A.getFrame(e);
                    if (null == t || tj.A.getWindowOpen(e3.MLl.ACTIVITY_POPOUT)) return;
                    let n = tx.A.getMainFrame()?.id === e;
                    t.intent === e4.sV.MAIN
                        ? (n || G.A.promoteFrame(e), G.A.resetFrameLayoutModes(e))
                        : n && G.A.clearMainFrameSlot();
                })(o),
                () => {
                    let e;
                    null != (e = tx.A.getFrame(o)) &&
                        ((0, e4.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        ty.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === e4.sV.INLINE && G.A.promoteFrame(o),
                              G.A.updateFrameLayoutMode({ frameId: o, layoutMode: e4.y0.PIP }))
                            : e.intent === e4.sV.MAIN && G.A.demoteMainFrame(o));
                }
            ),
            [o],
        ),
        s)
    ) {
        case tv.n.Launched:
            return (0, a.jsx)(tb.A, { frameId: r.id, level: tg.A.WithinAppContent, className: tE.Z7, overlay: l });
        case tv.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: tE.qs,
                children: (0, a.jsx)(tS, {
                    title: ee.intl.string(Z.default["9kpdo7"]),
                    body: ee.intl.string(Z.default.iIA8Nj),
                }),
            });
        case tv.n.NoApplication:
            return (0, a.jsx)(tA, { className: tE.qs });
        case tv.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: tE.qs,
                children: (0, a.jsx)(tS, {
                    title: ee.intl.string(Z.default["7k4GyN"]),
                    body: ee.intl.string(Z.default.zdIy3R),
                }),
            });
        case tv.n.Error:
            return (0, a.jsxs)("div", {
                className: tE.qs,
                children: [
                    (0, a.jsx)(E.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: ee.intl.string(Z.default.lTPbnG),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: tE.tj,
                        children: ee.intl.string(Z.default.e6GiAZ),
                    }),
                ],
            });
        case tv.n.AwaitingLaunch:
        case tv.n.Loading:
            return (0, a.jsx)("div", { className: tE.qs, children: (0, a.jsx)(k.y, {}) });
    }
}
var tT = n(323384),
    tP = n(334738),
    tM = n(688438),
    t_ = n(355622),
    tR = n(531685),
    tL = n(365971),
    tD = n(548147);
function tO(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: tD.f,
        children: [
            (0, a.jsx)(tT.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function tF() {
    return (0, a.jsx)("div", { className: tD.f, children: (0, a.jsx)(k.y, {}) });
}
function tz(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: r, isLoading: s } = (0, F.YY)(l),
        o = r?.bot?.id ?? null,
        u = (0, c.bG)([W.A], () => {
            if (null == o) return null;
            let e = W.A.getDMFromUserId(o);
            return null != e ? W.A.getChannel(e) : null;
        });
    ((t = u?.id ?? null),
        i.useEffect(() => {
            null != t && e9.A.preload(e3.ME, t);
        }, [t]),
        (n = (0, c.bG)([tR.A], () => tR.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, tL.Xg)();
            return (
                (0, tP.yl)(t, e),
                () => {
                    (0, tP.dm)(t, e);
                }
            );
        }, [t, n]));
    let [d, m] = i.useState(null),
        f = null != o && d === o;
    return (i.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            e9.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || m(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    s)
        ? (0, a.jsx)(tF, {})
        : null == o || f
          ? (0, a.jsx)(tO, { message: ee.intl.string(Z.default["VP/O8s"]) })
          : null == u
            ? (0, a.jsx)(tF, {})
            : (0, a.jsx)("div", {
                  className: tD.g,
                  children: (0, a.jsx)(tM.A, { channel: u, guild: null, chatInputType: t_.oU.SIDEBAR }, u.id),
              });
}
var tU = n(887909),
    tG = n(570962),
    tq = n(609202);
function t$(e) {
    let {
        label: t,
        title: n,
        subtitle: l,
        header: i,
        body: r,
        actions: o,
        nextStep: u,
        appDetails: d,
        hasContentBackground: c,
        noPadding: m,
        obscured: f,
    } = (0, tU.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: tq.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: tq.rf,
                children: (0, a.jsx)(tG.A, {
                    obscured: !0 === f,
                    children: (0, a.jsxs)("div", {
                        className: tq.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: tq.z3,
                                      children: [
                                          (0, a.jsx)(E.D, {
                                              variant: "heading-lg/bold",
                                              color: "text-strong",
                                              children: n,
                                          }),
                                          null != l
                                              ? (0, a.jsx)(v.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-default",
                                                    children: l,
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            i,
                            (0, a.jsxs)("div", {
                                className: s()(tq.Qs, c ? tq.cw : null, m ? tq.pN : null),
                                children: [r, null == u ? d : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != o && o.length > 0
                ? (0, a.jsx)("div", {
                      className: tq.o1,
                      children: o.map((e, t) => (0, a.jsx)(C.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var tB = n(412555),
    tH = n(568892);
function tV(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            previewReady: r,
            previewGate: s,
            availability: o,
            activeMode: u,
            widgetApplicationId: d,
            frameOverlay: c,
        } = e,
        m = (0, q.A)(t, l),
        { data: f, isLoading: h } = (0, F.YY)(t ?? void 0);
    if (
        (i.useEffect(() => {
            s?.type === "permissions" && null != m && (0, th.A)().leaveFrame(m.id);
        }, [m, s?.type]),
        s?.type === "checking")
    )
        return (0, a.jsx)("div", { className: tH.q, children: (0, a.jsx)(k.y, {}) });
    if (s?.type === "permissions")
        return (0, a.jsx)("div", {
            className: tH.q,
            children: null == s.authorizeProps ? (0, a.jsx)(k.y, {}) : (0, a.jsx)(t$, { ...s.authorizeProps }),
        });
    if (!r) return (0, a.jsx)(tA, { className: tH.q });
    if (null == t) return null;
    if (h && null == f) return (0, a.jsx)("div", { className: tH.q, children: (0, a.jsx)(k.y, {}) });
    let p = o.showModeSwitch && null != u ? { role: "tabpanel", id: (0, tp.z3)(u), "aria-label": (0, tp.kZ)(u) } : {};
    return (0, a.jsxs)("div", {
        className: tH.R,
        ...p,
        children: [
            ("frame" === u && o.modes.includes("frame")) || 0 === o.modes.length
                ? (0, a.jsx)(tI, { applicationId: t, surface: l, frameOverlay: c })
                : null,
            "widget" === u && null != d
                ? "unavailable-authorization-revoked" === o.profileState
                    ? (0, a.jsx)("div", {
                          className: tH.q,
                          children: (0, a.jsx)(tS, {
                              wide: !0,
                              title: ee.intl.string(Z.default["08U+YO"]),
                              body: ee.intl.string(Z.default.pKBfrc),
                          }),
                      })
                    : (0, a.jsx)(tB.A, { applicationId: d })
                : null,
            "bot" === u && null != n ? (0, a.jsx)(tz, { previewApplicationId: n }) : null,
        ],
    });
}
var tK = n(689175),
    tW = n(65593),
    tX = n(177446);
function tY(e) {
    return !(0, eG.BL)(e) && !0 !== e.stopRequested;
}
var tJ = n(935208);
(n(323874), n(14289), n(35956));
var tQ = n(839214);
let tZ = [],
    t0 = 1,
    t2 = (0, tQ.D)(() => ({ draftsByProject: {} }));
function t1(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? tZ;
}
function t6(e, t) {
    return t1(t2.getState(), e, t);
}
function t9(e, t, n) {
    let { draftsByProject: l } = t2.getState();
    t2.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function t5(e, t, n, l) {
    let a = t6(e, t);
    return (
        !!a.some((e) => e.localId === n) &&
        (t9(
            e,
            t,
            a.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function t3(e, t) {
    (0, Q.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function t4(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && t3(e, t.ref.id));
}
function t8(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = t2.getState(),
        a = l[e];
    if (null == a) return;
    for (let t of Object.values(a))
        for (let l of t ?? tZ) n ? t4(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: i, ...r } = l;
    t2.setState({ draftsByProject: r });
}
function t7(e) {
    return ee.intl.formatToPlainString(Z.default.JZ59Bo, { size: (0, et.sM)((0, et.Ju)(e)) });
}
function ne(e, t) {
    let n = t6(e, t);
    if (0 !== n.length) {
        for (let t of n) t4(e, t);
        t9(e, t, tZ);
    }
}
function nt(e, t) {
    let n = t6(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (t9(e, t, tZ), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function nn(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = t6(e, "chat"),
        i = a.length > 0 && a.every((e) => "ready" === e.status) ? nt(e, "chat") : [];
    (0, Q.dv)(e, t, [...l, ...i], { clarificationAnswers: n });
}
(eW.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(t2.getState().draftsByProject)) t8(e, { deleteFromWorker: !0 });
}),
    eW.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        t8(t, { deleteFromWorker: !1 });
    }));
var nl = n(435558),
    na = n.n(nl),
    ni = n(506774);
let nr = "VibegrationsComposerDrafts";
function ns() {
    return ni.w.get(nr) ?? {};
}
let no = new Map(),
    nu = na().throttle(() => {
        if (0 === no.size) return;
        let e = ns();
        for (let [t, n] of no) "" === n ? delete e[t] : (e[t] = n);
        (no.clear(), ni.w.set(nr, e));
    }, 1e3);
class nd extends c.Ay.Store {
    getDraft(e) {
        let t = no.get(e);
        return null != t ? t : (ns()[e] ?? "");
    }
}
let nc = new nd(eW.h, {
    LOGOUT: function () {
        return (no.clear(), nu.cancel(), ni.w.remove(nr), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (no.set(t, n), nu(), "" === n && nu.flush(), !1);
    },
});
function nm(e) {
    return "" !== nc.getDraft(e).trim();
}
var nf = n(571685),
    nh = n(29080),
    np = n(46054),
    ng = n(485303);
function nx(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : ee.intl.string(Z.default.KcFvbo);
}
function nb(e) {
    var t;
    let n,
        l,
        { steps: a, content: i, hasProposal: r, hasAttachments: s } = e,
        o = (0, tX.B4)(a),
        u = o.filter((e) => "message" === e.type).at(-1),
        d =
            !r &&
            null != u &&
            ((t = u.content),
            (n = t.trim()),
            (l = i.trim()),
            "" !== n && "" !== l && (n === l || (t.length >= 16e3 && l.startsWith(n))))
                ? u
                : null,
        c = o.filter((e) => e !== d),
        m = c.filter((e) => "message" === e.type).at(-1),
        f = !r && "" !== i.trim();
    return {
        streamed: c,
        lastStreamedMessage: m,
        replyKey: d?.key,
        showsClosingMessage: f,
        closingContent: f ? i.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: s, showsClosingMessage: f, endsOnStreamedMessage: (0, tX.Lf)(a) }),
    };
}
(n(134528), n(947204));
var nv = n(478016),
    nj = n(331322),
    ny = n(815898);
function nw(e) {
    let { title: t, trailing: n, children: l, className: i, headerClassName: r, ...o } = e;
    return (0, a.jsxs)("section", {
        className: s()(ny.Nr, i),
        ...o,
        children: [
            (0, a.jsxs)("header", {
                className: s()(ny.wx, null != n && ny.o5, r),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var nk = n(518535);
function nC(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        o = null == l;
    return (0, a.jsxs)(j.D, {
        className: s()(nk.nM, { [nk.f1]: o, [nk.CZ]: n }),
        onClick: o ? void 0 : () => l(t),
        "aria-label": ee.intl.formatToPlainString(Z.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": o,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: nk.jo,
                children: [
                    n
                        ? (0, a.jsx)(nv.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: nk.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: nk.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "div",
                      id: r,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function nA(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(nw, {
        title: ee.intl.string(Z.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                nC,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
function nN(e) {
    let { onAsk: t } = e;
    return (0, a.jsx)(nj.B, {
        align: "start",
        "data-conjure-ideas-offer": !0,
        children: (0, a.jsx)(C.$, {
            variant: "secondary",
            size: "sm",
            disabled: null == t,
            onClick: t,
            text: ee.intl.string(Z.default["U/bLzU"]),
        }),
    });
}
var nS = n(370609),
    nE = n(885574),
    nI = n(231483),
    nT = n(430392),
    nP = n(632015),
    nM = n(256905);
function n_(e, t) {
    let [n, l] = i.useState(null),
        [a, r] = i.useState(!1),
        [s, o] = i.useState(0);
    return (
        i.useEffect(() => {
            let n = !1;
            return (
                (0, Q.PK)(e, t).then(
                    (e) => {
                        n || l(e);
                    },
                    () => {
                        n || (0 === s ? o(1) : r(!0));
                    },
                ),
                () => {
                    n = !0;
                }
            );
        }, [e, t, s]),
        {
            src: n,
            gone: a,
            handleError: i.useCallback(() => {
                (l(null),
                    (0, Q.n6)(e, t).then(
                        (e) => {
                            e && 0 === s ? o(1) : r(!0);
                        },
                        () => r(!0),
                    ));
            }, [e, t, s]),
        }
    );
}
var nR = n(847374),
    nL = n(320448),
    nD = n(435568);
function nO(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function nF(e) {
    let {
            title: t,
            meta: n,
            superseded: l = !1,
            showLabel: r,
            hideLabel: o,
            bodyClassName: u,
            beforeBody: d,
            children: c,
            ...m
        } = e,
        f = i.useId(),
        [h, p] = i.useState(!l),
        [g, x] = i.useState(l);
    g !== l && (x(l), p(!l));
    let b = i.useCallback(() => p((e) => !e), []),
        v = h ? nR.a : nL._,
        y = null != n || l;
    return (0, a.jsxs)(nw, {
        ...m,
        title: t,
        trailing: y
            ? (0, a.jsxs)("span", {
                  className: nD.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(j.D, {
                                className: nD.L$,
                                onClick: b,
                                "aria-expanded": h,
                                "aria-controls": f,
                                "aria-label": h ? o : r,
                                children: (0, a.jsx)(v, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: h ? void 0 : nD.RG,
        "data-superseded": l ? "true" : void 0,
        children: [d, (0, a.jsx)("div", { id: f, className: s()(nD.rf, u), hidden: !h, children: c })],
    });
}
var nz = n(782603),
    nU = n(628284),
    nG = n(97808),
    nq = n(778712),
    n$ = n(809115),
    nB = n(486020),
    nH = n(200700);
let nV = {
        alert: { label: () => ee.intl.string(Z.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => ee.intl.string(Z.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => ee.intl.string(Z.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => ee.intl.string(Z.default.RGzFNK), blockedStyle: !1 },
    },
    nK = {
        blocked: { label: () => ee.intl.string(Z.default.YdnZ8q), tone: "red" },
        alert: { label: () => ee.intl.string(Z.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => ee.intl.string(Z.default.RGzFNK), tone: "green" },
    },
    nW = ["blocked", "alert", "allowed"],
    nX = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var nY = n(446517),
    nJ = n(13673);
let nQ = { blocked: nI.ShieldIcon, alert: nz.BellIcon, allowed: nU.y },
    nZ = {
        blurple: { text: "text-brand", icon: D.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: D.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: D.A.colors.TEXT_FEEDBACK_POSITIVE },
    };
function n0(e) {
    var t, n;
    let l,
        i,
        { example: r } = e,
        s =
            "" ===
            (i = [
                "timeout" !== (t = r).outcome || null == t.timeout_seconds
                    ? null
                    : ee.intl.formatToPlainString(ee.t["3LYql6"], {
                          duration:
                              ((n = t.timeout_seconds),
                              null != (l = (0, nH.getFriendlyDurationString)(n))
                                  ? l
                                  : n % 604800 == 0
                                    ? ee.intl.formatToPlainString(ee.t.EmoBD2, { weeks: n / 604800 })
                                    : n % 86400 == 0
                                      ? ee.intl.formatToPlainString(ee.t["k2UNz+"], { days: n / 86400 })
                                      : n % 3600 == 0
                                        ? ee.intl.formatToPlainString(ee.t.xCjYxK, { hours: n / 3600 })
                                        : n % 60 == 0
                                          ? ee.intl.formatToPlainString(ee.t.opVZ9q, { mins: n / 60 })
                                          : ee.intl.formatToPlainString(ee.t["4zv/jq"], { secs: n })),
                      }),
                r.reason,
            ]
                .filter((e) => null != e && "" !== e)
                .join(" "))
                ? null
                : i;
    return null == s
        ? null
        : (0, a.jsx)(v.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: s,
          });
}
function n2(e) {
    var t;
    let { example: n } = e,
        { label: l, blockedStyle: i } = nV[n.outcome];
    return (0, a.jsxs)("li", {
        className: s()(nY.nM, { [s()(nY.HV, nJ.DX)]: i }),
        children: [
            (0, a.jsx)(w.A, { children: `${l()}: ` }),
            (0, a.jsx)("span", {
                className: nY.my,
                children: (0, a.jsx)(nG.eu, {
                    src: (0, nB.AE)(void 0, void 0),
                    size: nq._3.SIZE_24,
                    "aria-label": ee.intl.string(Z.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: nY.fw,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), np.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    (0, a.jsx)(n0, { example: n }),
                ],
            }),
        ],
    });
}
function n1(e) {
    let { group: t } = e,
        n = i.useId(),
        l = nK[t.section],
        r = nQ[t.section],
        s = nZ[l.tone];
    return (0, a.jsxs)("div", {
        className: nY.uW,
        children: [
            (0, a.jsxs)("div", {
                className: nY.bV,
                children: [
                    (0, a.jsx)(r, { size: "xs", color: s.icon, "aria-hidden": !0 }),
                    (0, a.jsx)(v.E, {
                        id: n,
                        variant: "text-xs/semibold",
                        color: s.text,
                        className: nY.a9,
                        children: l.label(),
                    }),
                ],
            }),
            (0, a.jsx)("ul", {
                className: nY.Ge,
                "aria-labelledby": n,
                children: t.examples.map((e, t) => (0, a.jsx)(n2, { example: e }, t)),
            }),
        ],
    });
}
function n6() {
    let { avatarSrc: e, eventHandlers: t } = (0, n$.a)(!0);
    return (0, a.jsx)("span", {
        className: nY.Gy,
        ...t,
        children: (0, a.jsx)(nG.eu, { src: e, size: nq._3.SIZE_16, "aria-label": ee.intl.string(ee.t.hG1StD) }),
    });
}
function n9(e) {
    var t;
    let { automod: n } = e;
    return (0, a.jsx)("div", {
        className: nY.K1,
        children: ((t = n.examples),
        nW
            .map((e) => ({ section: e, examples: t.filter((t) => nX[t.outcome] === e) }))
            .filter((e) => e.examples.length > 0)).map((e) => (0, a.jsx)(n1, { group: e }, e.section)),
    });
}
var n5 = n(286755);
function n3(e) {
    let { label: t, icon: n, info: l, children: i } = e;
    return (0, a.jsxs)("section", {
        className: n5.uW,
        children: [
            (0, a.jsxs)("span", {
                className: n5.a9,
                children: [
                    n,
                    (0, a.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    l,
                ],
            }),
            i,
        ],
    });
}
function n4(e) {
    let { text: t, label: n } = e;
    return (0, a.jsx)(y.m, {
        text: t,
        children: (0, a.jsx)(j.D, {
            className: n5.bk,
            "aria-label": n,
            children: (0, a.jsx)(nE.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function n8(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)(n3, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: n5.Ip,
                  children: n.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: n5.jw,
                              children: (0, a.jsx)(v.E, {
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  tag: "span",
                                  children: e
                                      .split("_")
                                      .map((e) => (0 === e.length ? e : e[0] + e.slice(1).toLowerCase()))
                                      .join(" "),
                              }),
                          },
                          e,
                      ),
                  ),
              }),
          });
}
function n7() {
    return (0, a.jsxs)("span", {
        className: n5.L6,
        children: [
            (0, a.jsx)(nI.ShieldIcon, {
                size: "custom",
                width: 16,
                height: 16,
                color: "currentColor",
                "aria-hidden": !0,
            }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                tag: "span",
                children: ee.intl.string(Z.default.DnWMLj),
            }),
        ],
    });
}
function le(e) {
    let { isActivity: t, hasWidget: n } = e,
        l = t ? tT.k : nT.RobotIcon;
    return (0, a.jsxs)("span", {
        className: n5.K2,
        children: [
            n
                ? (0, a.jsxs)("span", {
                      className: n5.L6,
                      children: [
                          (0, a.jsx)(nP.f, {
                              size: "custom",
                              width: 16,
                              height: 16,
                              color: "currentColor",
                              "aria-hidden": !0,
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              tag: "span",
                              children: ee.intl.string(Z.default["EswAi+"]),
                          }),
                      ],
                  })
                : null,
            (0, a.jsxs)("span", {
                className: n5.L6,
                children: [
                    (0, a.jsx)(l, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: ee.intl.string(t ? ee.t.IC5Ann : Z.default.VFWfz1),
                    }),
                ],
            }),
        ],
    });
}
function lt(e) {
    let { projectId: t, design: n } = e,
        { id: l } = n,
        { src: r, gone: s, handleError: o } = n_(t, l),
        u = ee.intl.string(Z.default["3/aHX6"]),
        d = i.useCallback(() => {
            (0, Q.PK)(t, l).then(
                (e) => {
                    (0, nM.R)({
                        items: [{ type: "IMAGE", url: e, alt: u }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
                },
                () => {},
            );
        }, [t, l, u]);
    return s
        ? null
        : (0, a.jsx)(n3, {
              label: ee.intl.string(Z.default.X15LLY),
              info: (0, a.jsx)(n4, { text: ee.intl.string(Z.default.nR4B8P), label: ee.intl.string(Z.default.nc0SNY) }),
              children: (0, a.jsx)(j.D, {
                  className: n5.xX,
                  onClick: d,
                  "aria-label": ee.intl.string(Z.default.TvAPIm),
                  children: null != r ? (0, a.jsx)("img", { src: r, alt: u, className: n5.sN, onError: o }) : null,
              }),
          });
}
function ln(e) {
    let { projectId: t, proposal: n, version: l, onApprove: i } = e,
        { automod: r } = n,
        s = l?.superseded === !0,
        o = n.what_changed?.trim() ?? "";
    return (0, a.jsxs)(nF, {
        title:
            s && null != l
                ? ee.intl.formatToPlainString(Z.default.YZ3qJs, { version: l.version })
                : ee.intl.string(Z.default["3b6e7o"]),
        meta: s
            ? (0, a.jsx)(nO, { children: ee.intl.string(Z.default.hF2c41) })
            : null != r
              ? (0, a.jsx)(n7, {})
              : (0, a.jsx)(le, { isActivity: !0 === n.is_activity, hasWidget: null != n.widget_config }),
        superseded: s,
        showLabel: ee.intl.string(Z.default.yD8EJS),
        hideLabel: ee.intl.string(Z.default.nSPGNb),
        bodyClassName: n5.rf,
        "data-conjure-plan-card": !0,
        children: [
            "" !== o
                ? (0, a.jsx)(n3, {
                      label: ee.intl.string(Z.default.iNS4dl),
                      children: (0, a.jsx)(v.E, {
                          variant: "experimental/body-md/normal",
                          color: "text-default",
                          selectable: !0,
                          children: o,
                      }),
                  })
                : null,
            (0, a.jsx)(v.E, {
                variant: "experimental/body-md/normal",
                color: "text-default",
                selectable: !0,
                children: n.summary,
            }),
            null != r && r.examples.length > 0
                ? (0, a.jsx)(n3, {
                      label: ee.intl.string(Z.default.z4ZKYG),
                      icon: (0, a.jsx)(n6, {}),
                      info: (0, a.jsx)(n4, {
                          text: ee.intl.string(Z.default.bo4MOx),
                          label: ee.intl.string(Z.default.VPLNot),
                      }),
                      children: (0, a.jsx)(n9, { automod: r }),
                  })
                : null,
            null == r && null != n.design_image ? (0, a.jsx)(lt, { projectId: t, design: n.design_image }) : null,
            n.changes.length > 0
                ? (0, a.jsx)(n3, {
                      label: ee.intl.string(Z.default["5+mG1z"]),
                      children: (0, a.jsx)("ul", {
                          className: n5.p_,
                          children: n.changes.map((e, t) =>
                              (0, a.jsx)(
                                  "li",
                                  {
                                      className: n5.Aw,
                                      children: (0, a.jsx)(v.E, {
                                          variant: "experimental/body-md/normal",
                                          color: "text-default",
                                          tag: "span",
                                          selectable: !0,
                                          children: e,
                                      }),
                                  },
                                  t,
                              ),
                          ),
                      }),
                  })
                : null,
            n.commands.length > 0
                ? (0, a.jsx)(n3, {
                      label: ee.intl.string(ee.t["0hKkS+"]),
                      children: (0, a.jsx)("ul", {
                          className: n5.p_,
                          children: n.commands.map((e, t) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: n5.uX,
                                      children: [
                                          (0, a.jsxs)(v.E, {
                                              variant: "experimental/body-md/medium",
                                              color: "text-default",
                                              tag: "span",
                                              selectable: !0,
                                              children: [
                                                  "launch" === e.kind || 4 === e.type
                                                      ? "\u21EA /"
                                                      : 2 === e.type || 3 === e.type
                                                        ? ""
                                                        : "/",
                                                  e.name,
                                              ],
                                          }),
                                          (0, a.jsx)(v.E, {
                                              variant: "experimental/body-md/normal",
                                              color: "text-muted",
                                              tag: "span",
                                              selectable: !0,
                                              children: e.description,
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      }),
                  })
                : null,
            (0, a.jsx)(n8, { label: ee.intl.string(Z.default["2UbW6r"]), names: n.bot_permissions ?? [] }),
            (0, a.jsx)(n8, { label: ee.intl.string(Z.default["7TKfpj"]), names: n.privileged_intents ?? [] }),
            null == i || s
                ? null
                : (0, a.jsxs)("div", {
                      className: n5.o1,
                      children: [
                          (0, a.jsx)(C.$, {
                              variant: "primary",
                              size: "sm",
                              text: ee.intl.string(Z.default["6S+wRM"]),
                              onClick: i,
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              children: ee.intl.string(Z.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var ll = n(548118);
function la(e) {
    return null != e && e.status?.state === "unpublished";
}
function li(e) {
    let { publish: t } = e,
        n = t.guildId,
        l = (0, c.bG)([Y.A], () => (null == n ? null : Y.A.getGuild(n)));
    return (0, a.jsx)(nj.B, {
        gap: 8,
        align: "start",
        children: (0, a.jsxs)(nj.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [
                (0, a.jsx)(y.m, {
                    text: t.disabledReason,
                    asContainer: !0,
                    children: (0, a.jsx)(C.$, {
                        variant: "primary",
                        size: "sm",
                        loading: t.publishing,
                        disabled: t.disabled,
                        onClick: () => t.run("card"),
                        text: t.label,
                    }),
                }),
                null != l
                    ? (0, a.jsxs)(nj.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: ee.intl.string(Z.default["+HGTlC"]),
                              }),
                              (0, a.jsx)(ll.Ay, { guild: l, size: ll.Ay.Sizes.SMOL }),
                              (0, a.jsx)(v.E, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  lineClamp: 1,
                                  children: (function (e) {
                                      let t = Array.from(e);
                                      if (t.length <= 24) return e;
                                      let n = t.slice(0, 23).join("");
                                      return `${n.trimEnd()}\u{2026}`;
                                  })(l.name),
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
function lr(e) {
    let { projectId: t } = e,
        n = td(t);
    return null != n && la(n) ? (0, a.jsx)(li, { publish: n }) : null;
}
var ls = n(438784);
function lo(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, er.lG)(t.authored_at);
    return (0, a.jsx)(nw, {
        title: ee.intl.string(Z.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: ls.r,
            children: [
                (0, a.jsxs)("div", {
                    className: ls.z,
                    children: [
                        (0, a.jsx)(v.E, { variant: "text-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  title: l.absolute ?? void 0,
                                  children: l.relative,
                              })
                            : null,
                    ],
                }),
                null != n
                    ? (0, a.jsx)(C.$, {
                          variant: "secondary",
                          size: "sm",
                          text: ee.intl.string(Z.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var lu = n(530557),
    ld = n(872162);
function lc(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var lm = n(192308),
    lf = n(519073);
function lh(e) {
    let { projectId: t, cardId: l, request: r, status: o, awaiting: u } = e,
        d = i.useCallback(() => {
            (0, lm.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("725855"), n.e("955707")]).then(n.bind(n, 409078));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        c = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: lu.R })), [r.fields]),
        m = (function (e, t) {
            let [n, l] = i.useState(() => lc(e, t));
            return n.cardId !== e || (null == n.status && "pending" !== t)
                ? (l(lc(e, t)), !1)
                : null != n.status && t !== n.status;
        })(l, o),
        f = s()(lf.Lo, { [lf.jY]: m });
    return "superseded" === o
        ? (0, a.jsx)(
              "article",
              {
                  className: f,
                  children: (0, a.jsx)(v.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: ee.intl.string(Z.default.CTxtdV),
                  }),
              },
              o,
          )
        : "inactive" === o
          ? (0, a.jsxs)(
                "article",
                {
                    className: f,
                    children: [
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: ee.intl.string(Z.default.HCQvpO),
                        }),
                        (0, a.jsx)(ld.C, { label: ee.intl.string(Z.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                o,
            )
          : "pending" === o
            ? (0, a.jsx)(
                  "article",
                  {
                      className: lf.Lo,
                      children: (0, a.jsx)(ld.C, { label: ee.intl.string(Z.default.HCQvpO), size: "xs", items: c }),
                  },
                  o,
              )
            : "received" === o
              ? (0, a.jsxs)(
                    "article",
                    {
                        className: f,
                        children: [
                            (0, a.jsxs)("div", {
                                className: lf.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: lf.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(nU.y, {
                                            size: "xs",
                                            color: D.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, a.jsx)(v.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: ee.intl.string(Z.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(ld.C, { label: ee.intl.string(Z.default.sfp7Up), size: "xs", items: c }),
                        ],
                    },
                    o,
                )
              : (0, a.jsxs)("article", {
                    className: lf.Lo,
                    children: [
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: null != u ? "text-brand" : "text-muted",
                            tag: "span",
                            children: ee.intl.string(null != u ? Z.default.O0QIqj : Z.default.HCQvpO),
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != r.note && "" !== r.note ? r.note : ee.intl.string(Z.default.MPGSHL),
                        }),
                        (0, a.jsx)(ld.C, { label: ee.intl.string(Z.default.HCQvpO), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: lf.sq,
                            children: (0, a.jsx)(C.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: d,
                                text: ee.intl.string(Z.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var lp = n(966249),
    lg = n(675062),
    lx = n(599830);
function lb(e) {
    let { projectId: t, request: n, onDismiss: l } = e,
        i = null != n.note && "" !== n.note ? n.note : ee.intl.string(Z.default.XuOf5s);
    return (0, a.jsx)(lp.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: r, submit: o } = e;
            function u(e) {
                (e.preventDefault(), o());
            }
            let d = (0, a.jsx)(C.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: r,
                disabled: !n,
                text: ee.intl.string(Z.default.A7dQd9),
            });
            return null == l
                ? (0, a.jsxs)("form", {
                      className: lx.Mk,
                      onSubmit: u,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: ee.intl.string(Z.default["jZjP+I"]),
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: i,
                          }),
                          t,
                          (0, a.jsx)("div", { className: lx.p0, children: d }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: s()(lg.nd, lg.jx),
                      "aria-label": ee.intl.string(Z.default["jZjP+I"]),
                      onSubmit: u,
                      children: [
                          (0, a.jsxs)("div", {
                              className: lg.wx,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: lg.TK,
                                      children: ee.intl.string(Z.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(j.D, {
                                      className: s()(lg.gb, lg.Q7),
                                      onClick: l,
                                      "aria-label": ee.intl.string(Z.default["iq+Pte"]),
                                      children: (0, a.jsx)(R.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: lx.DQ,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      selectable: !0,
                                      children: i,
                                  }),
                                  t,
                              ],
                          }),
                          (0, a.jsx)("div", {
                              className: lg.qr,
                              children: (0, a.jsx)("div", { className: lg.zt, children: d }),
                          }),
                      ],
                  });
        },
    });
}
var lv = n(148992);
let lj = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    ly = {
        snail: () => Z.default.ABeVsS,
        goat: () => Z.default.dhXay8,
        frog: () => Z.default.SHeweG,
        bunny: () => Z.default.FytFE1,
        cat: () => Z.default["5c+sHs"],
        caterpillar: () => Z.default["/FYcne"],
        butterfly: () => Z.default["Ib/AxK"],
        dog: () => Z.default.zDjBR1,
        spider: () => Z.default["6sxyrN"],
        bee: () => Z.default.cVtefg,
        bot: () => Z.default.MjCw0v,
    },
    lw = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        goat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        frog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        bunny: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        cat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        caterpillar: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        butterfly: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
        dog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        spider: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        bee: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function lk(e) {
    return { ...lw[e], name: ee.intl.string(ly[e]()) };
}
function lC(e) {
    return lj.includes(e) ? lk(e) : void 0;
}
function lA(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % lj.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, lj[(t + n) % lj.length]);
            }),
            l
        );
    })(e))
        t.set(n, lk(l));
    return t;
}
var lN = n(683063),
    lS = n(165320),
    lE = n(169656),
    lI = n(508769);
function lT(e) {
    let { projectId: t, lane: n, Illocon: l, tint: i, name: r, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        d = (0, tX.SY)(n.steps),
        c = u
            ? null != d
                ? (0, tX.WQ)(d)
                : nx(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(nx(e));
                  switch (e.status) {
                      case "failed":
                          return ee.intl.formatToPlainString(Z.default.YrVgOf, { task: t });
                      case "cancelled":
                          return ee.intl.formatToPlainString(Z.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return ee.intl.formatToPlainString(Z.default["++9woZ"], {
                                  task: t,
                                  duration: (0, ng.MB)(e.durationMs),
                              });
                          return ee.intl.formatToPlainString(Z.default.nmI9Uh, { task: t });
                      default:
                          return ee.intl.formatToPlainString(Z.default.nmI9Uh, { task: t });
                  }
              })(o),
        m = u ? d : void 0,
        f =
            o.detail.length > 0 ||
            n.steps.some((e) => {
                var t;
                return e !== m || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: lI.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            lE.A,
                                            { projectId: t, node: e, presentation: "detail", active: u && e === d },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          o.detail.map((e, t) =>
                              (0, a.jsx)(
                                  "div",
                                  {
                                      className: lI.iq,
                                      children: (0, a.jsx)(lS.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(lv.A, {
        glyph: (0, a.jsx)(lN.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: r,
            body: nx(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: lI.nC,
                children: (0, a.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: c,
        live: u,
        settled: !u,
        tint: i,
        detail: f,
        connected: !0,
        connectsDown: s,
    });
}
var lP = n(141014);
let lM = [];
function l_(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: s()(lP.xL, {
            [lP.Vb]: "in_progress" === t,
            [lP.cT]: "completed" === t,
            [lP.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return ee.intl.string(Z.default.KvBdun);
                case "in_progress":
                    return ee.intl.string(Z.default["m5G9+S"]);
                case "unfinished":
                    return ee.intl.string(Z.default.lRpwhD);
                default:
                    return ee.intl.string(Z.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(k.y, {
                type: k.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: lP.Qd,
                itemClassName: lP.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: lP.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: lP.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function lR(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : lM), [n, t]),
        r = i.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [o, u] = i.useState(l),
        [d, c] = i.useState(s),
        [m, f] = i.useState(!1);
    d !== s && (c(s), u([...l, ...o.filter((e) => !r.has(e.key))]), 0 === l.length && f(!1));
    let h = o.some((e) => !r.has(e.key));
    if (
        (i.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => u(l), n ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, l, n]),
        i.useEffect(() => {
            if (!n || 0 === o.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => f(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [n, o.length]),
        0 === o.length)
    )
        return null;
    let p = o.slice(0, 3),
        g = o.length - p.length;
    return (0, a.jsxs)("span", {
        className: lP.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            p.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    lN.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: lP.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            g > 0
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: lP.qA,
                      children: `+${g}`,
                  })
                : null,
        ],
    });
}
function lL(e) {
    let t,
        { todos: n, provisional: l, agents: r, live: o = !0 } = e,
        u = (function (e) {
            let t = e.join("\0"),
                [n, l] = i.useState(() => new Set(e)),
                [a, r] = i.useState(t),
                [s, o] = i.useState(() => new Set());
            return (
                a !== t && (r(t), l(new Set(e)), o(0 === n.size ? new Set() : new Set(e.filter((e) => !n.has(e))))),
                i.useEffect(() => {
                    if (0 === s.size) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => o(new Set()));
                        });
                    return () => {
                        (cancelAnimationFrame(t), cancelAnimationFrame(e));
                    };
                }, [s]),
                s
            );
        })(i.useMemo(() => n.map((e) => e.id), [n])),
        d =
            ((t = (r ?? lM).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of r ?? lM) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let n = e.get(t.todoId);
                    null != n ? n.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, a.jsxs)("ul", {
        className: lP.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || o ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: s()(lP.AS, { [lP.J1]: "completed" === n }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(l_, { status: n }),
                            (0, a.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: lP.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: lP.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(lR, { agents: d.get(e.id) ?? lM, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: lP.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(l_, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: lP.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: lP.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function lD(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: i = !0, live: r = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let d = ee.intl.formatToPlainString(Z.default["P/I+JW"], { completed: o, total: u }),
        c = ee.intl.formatToPlainString(Z.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(nF, {
        title: ee.intl.string(Z.default.RtzECX),
        meta: (0, a.jsx)(nO, { children: d }),
        superseded: s,
        showLabel: ee.intl.string(Z.default.RKyN9q),
        hideLabel: ee.intl.string(Z.default.xydHoj),
        className: lP.Nr,
        bodyClassName: lP.rf,
        beforeBody: i && !s ? (0, a.jsx)(w.A, { role: "status", "aria-live": "polite", children: c }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(lL, { todos: t, provisional: n, agents: l, live: r }),
    });
}
var lO = n(242765),
    lF = n(946753),
    lz = n(165648);
function lU(e) {
    let t = lA(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? lC(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: nx(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function lG(e) {
    let {
            projectId: t,
            steps: n,
            active: l = !1,
            turnActive: r = l,
            checklistSuperseded: s = !1,
            durationMs: o,
            interrupted: u = !1,
            todos: d,
            provisionalTodo: c,
            segment: m,
            hostsChecklist: f = !0,
            reportsDuration: h = !0,
            closed: p = !1,
            segmentDurationMs: g,
        } = e,
        x = i.useMemo(() => (0, tX.GO)(n, { turnActive: l }), [n, l]),
        b = i.useMemo(
            () =>
                null == m
                    ? x
                    : {
                          ...x,
                          steps: x.steps.filter((e) => e.segment === m),
                          tasks: x.tasks.filter((e) => e.task.segment === m),
                      },
            [x, m],
        );
    if (u)
        return (0, a.jsx)("ol", {
            className: lI.pj,
            "data-live": !1,
            children: (0, a.jsx)(lv.A, {
                glyph: (0, a.jsx)(nh.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: ee.intl.string(Z.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let v = l ? void 0 : (g ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        j = f ? ((0, tX.lt)(n) ?? d ?? null) : null,
        y = null != j && j.length > 0;
    if (0 === b.steps.length && 0 === b.tasks.length && !y) return null;
    let w = b.tasks,
        k = lA(w.map((e) => e.taskId)),
        C = !p && (l || w.some((e) => "running" === e.task.status)),
        A = lU(w);
    return (0, a.jsx)(lv.E.Provider, {
        value: w.length,
        children: (0, a.jsxs)("ol", {
            className: lI.pj,
            "data-live": C,
            children: [
                (0, a.jsx)(nf.A, {
                    projectId: t,
                    steps: b.steps,
                    fallbackLabel: w.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: l,
                    closed: p,
                    durationMs: v,
                    connectsDown: w.length > 0,
                    tier: x.turn?.tier,
                }),
                w.map((e, n) => {
                    let l = null != e.task.helperMark ? lC(e.task.helperMark) : void 0,
                        i = l ?? k.get(e.taskId);
                    return null == i
                        ? null
                        : (0, a.jsx)(
                              lT,
                              {
                                  projectId: t,
                                  lane: e,
                                  Illocon: i.Illocon,
                                  tint: i.tint,
                                  name: null != l && null != e.task.helperName ? e.task.helperName : i.name,
                                  connectsDown: n < w.length - 1,
                              },
                              e.taskId,
                          );
                }),
                y
                    ? (0, a.jsx)("li", {
                          className: lI.YO,
                          children: (0, a.jsx)(lD, { todos: j, provisional: c, agents: A, live: r, superseded: s }),
                      })
                    : null,
            ],
        }),
    });
}
function lq(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: r,
            planVersion: o,
            ideas: u,
            attachments: d,
            secretRequest: c,
            secretRequestId: m,
            secretRequestAwaiting: f,
            secretRequestStatus: h = "open",
            settingsRequest: p,
            publishCta: g,
            onPickIdea: x,
            pickedIdeaIds: b,
            onApprovePlan: j,
            sideReply: y = !1,
            sideReplyAcknowledges: w,
            hoistedProse: k = !1,
            hoistedAttachmentsHost: C,
            restoreProposal: A,
            onRestoreProposal: N,
        } = e,
        S = i.useMemo(
            () => nb({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != d && d.length > 0 }),
            [n, l, r, d],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: T, closingContent: P } = S,
        M = (k ? C : void 0) ?? S.attachmentsHost,
        _ = T && !k,
        R = null == d ? null : (0, a.jsx)(nS.A, { projectId: t, attachments: d }),
        L = null == R ? null : (0, a.jsx)("div", { className: lI.MT, children: R }),
        D = y
            ? (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return ee.intl.string(Z.default.Mv5OmK);
                          case "queued":
                              return ee.intl.string(Z.default["Po/2mi"]);
                          case "restarting":
                              return ee.intl.string(Z.default.Vj0woh);
                          default:
                              return ee.intl.string(Z.default.gY3L8p);
                      }
                  })(w),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: lI.ue,
        children: [
            E.length > 0 && !k
                ? (0, a.jsx)("ol", {
                      className: lI.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: lI.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: lz.PT,
                                          children: np.A.parse(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === M && e === I ? L : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(ln, { projectId: t, proposal: r, version: o, onApprove: j })
                : _
                  ? (0, a.jsxs)("div", {
                        className: s()(lI.ky, lF.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: s()(lz.PT, lI.cW),
                                children: np.A.parse(P, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === M ? L : null,
                            D,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: s()(lI.ky, lF.XR, { [lO.O]: null != f && "open" === h }),
                      children: (0, a.jsx)(lh, {
                          projectId: t,
                          cardId: m ?? "",
                          request: c,
                          status: h,
                          awaiting: "open" === h ? f : void 0,
                      }),
                  })
                : null,
            null != p
                ? (0, a.jsx)("div", {
                      className: s()(lI.ky, lF.XR),
                      children: (0, a.jsx)(lb, { projectId: t, request: p }),
                  })
                : null,
            "standalone" !== M && ("closing" !== M || _) ? null : R,
            null != g ? (0, a.jsx)(lr, { projectId: t }) : null,
            null != u && u.length > 0 ? (0, a.jsx)(nA, { ideas: u, pickedIdeaIds: b, onPick: x }) : null,
            null != A ? (0, a.jsx)(lo, { proposal: A, onRestore: N }) : null,
            _ ? null : D,
        ],
    });
}
var l$ = n(864970),
    lB = n(146806),
    lH = n(475358),
    lV = n(81369),
    lK = n(922016),
    lW = n(980707),
    lX = n(477782),
    lY = n(717400),
    lJ = n(663341),
    lQ = n(826745),
    lZ = n(783977),
    l0 = n(559647),
    l2 = n(775602),
    l1 = n(234320),
    l6 = n(900797),
    l9 = n(599310),
    l5 = n(720203),
    l3 = n(938377),
    l4 = n(88205),
    l8 = n(258435);
function l7(e) {
    let [t, n] = i.useState(e),
        [l, a] = i.useState(!1),
        [r, s] = i.useState(e);
    return (
        r !== e && (s(e), e ? n(!0) : a(!1)),
        i.useEffect(() => {
            if (e || !t) return;
            let l = setTimeout(() => n(!1), 150);
            return () => clearTimeout(l);
        }, [e, t]),
        i.useEffect(() => {
            if (!t || !e) return;
            let n = 0,
                l = requestAnimationFrame(() => {
                    n = requestAnimationFrame(() => a(!0));
                });
            return () => {
                (cancelAnimationFrame(l), cancelAnimationFrame(n));
            };
        }, [t, e]),
        { mounted: t, entered: l }
    );
}
function ae(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: o, placement: u, open: d, entered: c } = e,
        [m, f] = i.useState(!1),
        h = l7(m),
        p = et.PY.indexOf(t.tier),
        g = m ? l6.t : nL._,
        x = et.PY.map(l9.D0),
        b = (0, l9.Tc)(t.tier),
        { text: j, phase: y } = (0, l4.Q)(b);
    return (0, a.jsx)("div", {
        className: l8.qd,
        "data-placement": u ?? void 0,
        children: (0, a.jsxs)("div", {
            className: s()(l8.t$, { [l8.Zr]: d && c, [l8.GF]: !d }),
            role: "dialog",
            "aria-label": ee.intl.string(Z.default["3E7Yc0"]),
            children: [
                h.mounted
                    ? (0, a.jsx)("div", {
                          className: s()(l8.Nr, l8.uO, { [l8.Zr]: m && h.entered, [l8.GF]: !m }),
                          children: (0, a.jsx)(l3.bR, { settings: t, tiers: n, choices: l, disabled: r, onChange: o }),
                      })
                    : null,
                (0, a.jsxs)("div", {
                    className: `${l8.Nr} ${l8.rF}`,
                    children: [
                        (0, a.jsxs)("div", {
                            className: l8.wx,
                            children: [
                                (0, a.jsxs)("button", {
                                    type: "button",
                                    className: l8.y6,
                                    "aria-expanded": m,
                                    "aria-label": ee.intl.string(Z.default.eGqPbV),
                                    onClick: () => f((e) => !e),
                                    children: [
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: ee.intl.string(Z.default.aBPQxX),
                                        }),
                                        (0, a.jsx)(g, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: l8.vg,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(v.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: s()(l8.Z, { [l8.xQ]: "exit" === y, [l8.lm]: "enter" === y }),
                                    children: j,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: l8.hs,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: l8.Nb,
                                    children: [
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: ee.intl.string(Z.default["/tlOR5"]),
                                        }),
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: ee.intl.string(Z.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(l5.A, {
                                    activeIndex: p,
                                    stops: x,
                                    ariaLabel: ee.intl.string(Z.default.aBPQxX),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let n = et.PY[e];
                                        null != n && n !== t.tier && o((0, l9.CM)((0, l9.j6)(t, n)));
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function at(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, className: o, icon: u } = e,
        d = i.useRef(null),
        [c, m] = (0, l3.FT)(t, s),
        [f, h] = i.useState(!1),
        { mounted: p, entered: g } = l7(f);
    return (0, a.jsx)(lK.Y, {
        targetElementRef: d,
        position: "top",
        align: "right",
        shouldShow: p,
        onRequestClose: () => h(!1),
        animation: lK.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, a.jsx)(ae, {
                settings: c,
                tiers: n ?? null,
                choices: l,
                disabled: r,
                onChange: m,
                placement: t,
                open: f,
                entered: g,
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, a.jsx)(y.m, {
                text: ee.intl.string(Z.default["k2JN/p"]),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, a.jsx)(j.D, {
                    innerRef: d,
                    className: o ?? l8.hZ,
                    "aria-label": ee.intl.string(Z.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, a.jsx)(lZ.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var an = n(285796),
    al = n(763426),
    aa = n(245150);
let ai = et.lN;
function ar(e, t, n, l) {
    let a = t6(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: t0++ }, upload: n };
        });
        for (let { draft: n, upload: a } of (t9(e, t, [
            ...t6(e, t),
            ...l.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        l))
            a?.().then(
                (l) => {
                    "errorText" in l
                        ? t5(e, t, n.localId, { status: "error", errorText: l.errorText })
                        : t5(e, t, n.localId, { status: "ready", ref: l })
                          ? setTimeout(
                                () =>
                                    t5(e, t, n.localId, {
                                        status: "error",
                                        errorText: ee.intl.string(Z.default.E7dS5n),
                                    }),
                                et.o2 - 3e5,
                            )
                          : t3(e, l.id);
                },
                (l) => {
                    (console.error("[vibegrations] attachment upload failed", l),
                        t5(e, t, n.localId, { status: "error", errorText: ee.intl.string(Z.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        n.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                n = { name: e.name, contentType: t };
            if (a++ >= ai)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: ee.intl.formatToPlainString(Z.default.Q0aCVZ, { count: ai }),
                    },
                };
            if (!(0, et.Oq)(e.size, t)) return { draft: { ...n, status: "error", errorText: t7(t) } };
            let i = et.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: i }, upload: () => l(e) };
        }),
    );
}
function as(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        a = t2.useState((e) => t1(e, t, n)),
        r = i.useCallback((e) => ar(t, n, e, l), [t, n, l]),
        s = i.useCallback(
            (e) => {
                if (e.defaultPrevented) return;
                let t = Array.from(e.clipboardData?.files ?? []);
                0 !== t.length && (e.preventDefault(), r(t));
            },
            [r],
        ),
        o = i.useCallback(
            (e) => {
                let l, a;
                null != (a = (l = t6(t, n)).find((t) => t.localId === e)) &&
                    (t4(t, a),
                    t9(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = i.useCallback(() => nt(t, n), [t, n]);
    return {
        drafts: a,
        addFiles: r,
        pasteFiles: s,
        removeDraft: o,
        settled: a.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function ao(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(al.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(k.y, { type: k.t.SPINNING_CIRCLE_SIMPLE, className: aa.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: aa.o1,
                onClick: () => n(t.localId),
                "aria-label": ee.intl.string(Z.default.Slam9g),
                children: (0, a.jsx)(an.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var au = n(65e4);
let ad = "text-md/normal",
    ac = null;
function am(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, o] = i.useState(t),
        u = i.useRef(null),
        d = i.useRef(null),
        m = i.useRef(0),
        [f, h] = i.useState(0),
        [p, g] = i.useState(0),
        [x, b] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (i.useLayoutEffect(() => {
        let e = u.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let n = m.current;
        function l() {
            let e = u.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let l = d.current;
            if (null == l) return;
            let a = parseFloat(getComputedStyle(t).columnGap),
                i = Number.isNaN(a) ? 0 : a,
                r = e.offsetWidth,
                s = l.offsetWidth + i;
            (g(r + i), h(s));
            let o = s + r,
                c = Math.max(n, l.offsetWidth) + i + r,
                m = 0 === c ? 1 : s / c,
                f = 0 === c ? 1 : o / c;
            b({
                frontFrom: 1e3 * (0, lB._R)(m),
                frontTo: 1e3 * (0, lB._R)(f),
                backFrom: 1e3 * (0, lB.T)(m),
                backTo: 1e3 * (0, lB.T)(f),
            });
        }
        let a = new ResizeObserver(l);
        return (l(), a.observe(e), a.observe(t), null != d.current && a.observe(d.current), () => a.disconnect());
    }, [t]),
        i.useEffect(() => {
            m.current = d.current?.offsetWidth ?? 0;
        }, [t]));
    let [j, y] = i.useState(0),
        [w, k] = i.useState(null),
        C = i.useRef(!1),
        A = i.useCallback(() => {
            (k(C.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        C.current = n;
    }, [n, t]);
    let N = "in" === w ? x.backFrom : x.frontFrom,
        S = "out" === w ? x.frontTo : x.backTo,
        E = (0, c.bG)([l2.Ay], () => l2.Ay.useReducedMotion),
        I = t === ee.intl.string(Z.default.Zc7gML),
        T = r === t && I;
    function P(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: s()(au.VT, { [au.qk]: l }),
            style: l
                ? {
                      insetInlineStart: f,
                      "--custom-cap-wipe-delay": `${N}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, S - N)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && j > 0 && null != w ? j % 2 : void 0,
            "data-wipe-kind": l ? (w ?? void 0) : void 0,
            children: (0, a.jsx)(lH.e, { shortcut: "tab", className: au.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(l$.o, {
                text: t,
                variant: ad,
                delay: null,
                duration: 1e3,
                trailingWidth: p,
                className: s()(au.xM, { [au.s2]: l }),
                onStart: A,
                onComplete: () => o(t),
            }),
            P(au.IS, n || (!E && "out" === w), u),
            (0, a.jsx)("span", {
                ref: d,
                className: au.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(v.E, { variant: ad, tag: "span", children: t }),
            }),
            T
                ? (0, a.jsxs)("span", {
                      className: au.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(v.E, { variant: ad, tag: "span", className: au.xM, children: t }),
                          P(au.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function af(e) {
    let {
            projectId: t,
            canSend: n,
            stopped: l,
            running: r,
            restoring: s = !1,
            onSend: o,
            onInterrupt: u,
            onUploadFile: d,
            onApprove: m,
            onImport: f,
            suggestion: h,
            questionOpen: p = !1,
            hasPendingContext: g = !1,
            onDraftHasTextChange: x,
            modelSettings: b,
            onModelSettingsChange: v,
        } = e,
        [j, k] = i.useState(() => nc.getDraft(t)),
        C = i.useCallback(
            (e) => {
                ((0, en.I$)(t, e), k(e));
            },
            [t],
        ),
        A = "" !== j.trim();
    i.useEffect(() => x?.(A), [A, x]);
    let [N, S] = i.useState(t);
    N !== t && (S(t), k(nc.getDraft(t)));
    let E = (0, c.bG)([l2.Ay], () => l2.Ay.isSubmitButtonEnabled),
        [I, T] = i.useState(!1);
    i.useEffect(() => {
        r || T(!1);
    }, [r]);
    let P = i.useRef(null),
        {
            drafts: M,
            addFiles: _,
            pasteFiles: R,
            removeDraft: L,
            settled: D,
            takeRefs: O,
        } = as({ projectId: t, surface: "chat", onUploadFile: d }),
        F = "" !== j.trim() || M.length > 0 || g,
        z = n && F && D,
        [U, G] = i.useState(null);
    i.useEffect(() => {
        if (null == U) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => G(null));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [U]);
    let q = i.useCallback(() => {
            if (!z) return;
            let e = O();
            o(j, e.length > 0 ? e : void 0);
            let t = (function (e, t, n) {
                let l,
                    a,
                    i = n.split("\n", 1)[0] ?? "";
                if (null == e || "" === i) return i;
                null == ac && (ac = document.createElement("canvas").getContext("2d"));
                let r = ac;
                if (null == r) return i;
                let s = getComputedStyle(e);
                r.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                let o =
                    t > 0
                        ? t
                        : ((l = parseFloat(s.paddingInlineStart)),
                          (a = parseFloat(s.paddingInlineEnd)),
                          e.clientWidth - (Number.isNaN(l) ? 0 : l) - (Number.isNaN(a) ? 0 : a));
                if (o <= 0 || r.measureText(i).width <= o) return i;
                let u = 0,
                    d = i.length;
                for (; u < d;) {
                    let e = Math.ceil((u + d) / 2);
                    r.measureText(i.slice(0, e)).width <= o ? (u = e) : (d = e - 1);
                }
                let c = i.slice(0, u),
                    m = c.lastIndexOf(" ");
                return (m > 0 ? c.slice(0, m) : c).trimEnd();
            })(X.current?.querySelector("textarea") ?? null, es.current, j);
            ("" !== t && G(t), C(""));
        }, [z, j, o, O, C]),
        $ = i.useCallback(
            (e) => {
                (e.preventDefault(), q());
            },
            [q],
        ),
        B = i.useCallback(() => {
            null == u || I || (T(!0), u());
        }, [u, I]),
        H = null == h || "" !== j || !n || l || s || g ? null : h,
        V = i.useCallback(
            (e) => {
                if ("Escape" === e.key && r && null != u && !I) {
                    (e.preventDefault(), e.stopPropagation(), B());
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != H) {
                    (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), C(H));
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != m && (e.preventDefault(), m());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), q());
            },
            [q, m, r, u, I, B, H, C],
        ),
        K = i.useCallback(
            (e) => {
                n && R(e);
            },
            [n, R],
        );
    (0, l1.Vo)({
        event: e3.jej.GLOBAL_CLIPBOARD_PASTE,
        handler: (e) => {
            let { event: t } = e;
            return K(t);
        },
    });
    let W = i.useCallback(
            (e) => {
                (_(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [_],
        ),
        X = i.useRef(null),
        Y = i.useRef(null),
        [J, Q] = i.useState(0),
        [et, el] = i.useState(!1);
    i.useEffect(() => {
        if (0 === j.length) return void el(!1);
        let e = X.current?.querySelector("textarea");
        if (null != e) {
            let t = ag(e);
            null != t && Q(t);
        }
        el(!0);
        let t = setTimeout(() => el(!1), ah);
        return () => clearTimeout(t);
    }, [j]);
    let ea = i.useMemo(() => ({ "--custom-glow-x": `${J}px` }), [J]),
        ei = et ? ` ${au.EB}` : "",
        er = s
            ? ee.intl.string(Z.default.qqlUiW)
            : l
              ? ee.intl.string(Z.default.mPB3eo)
              : n
                ? g
                    ? ee.intl.string(Z.default.knUjL3)
                    : p
                      ? ee.intl.string(Z.default.IevBEw)
                      : ee.intl.string(r ? Z.default["0BJa/0"] : Z.default.TEeU7z)
                : ee.intl.string(Z.default.zZ9NgM),
        es = i.useRef(0),
        eo = i.useRef(null),
        eu = i.useCallback((e) => {
            if ((eo.current?.disconnect(), null == e)) return;
            es.current = e.clientWidth;
            let t = new ResizeObserver(() => {
                es.current = e.clientWidth;
            });
            (t.observe(e), (eo.current = t));
        }, []),
        ed = i.useId(),
        ec = null != H,
        em = U ?? H ?? er,
        ef = "" === j && "" !== em;
    return (0, a.jsxs)("form", {
        onSubmit: $,
        className: au.DA,
        children: [
            M.length > 0
                ? (0, a.jsx)("div", {
                      className: au.lN,
                      children: M.map((e) => (0, a.jsx)(ao, { draft: e, onRemove: L }, e.localId)),
                  })
                : null,
            (0, a.jsx)("span", { className: `${au.wg} ${au.LP}${ei}`, style: ea, "aria-hidden": !0 }),
            (0, a.jsx)("span", { className: `${au.wg} ${au.L3}${ei}`, style: ea, "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: au.VA,
                ref: X,
                children: [
                    (0, a.jsx)("input", {
                        ref: P,
                        type: "file",
                        multiple: !0,
                        onChange: W,
                        className: au.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    null == f
                        ? (0, a.jsx)(y.m, {
                              text: ee.intl.string(Z.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  ref: Y,
                                  type: "button",
                                  className: `${au.Y0} ${au.nu}`,
                                  disabled: !n,
                                  onClick: () => P.current?.click(),
                                  "aria-label": ee.intl.string(Z.default.lgvqSB),
                                  children: (0, a.jsx)(lV.H, {
                                      size: "refresh_sm",
                                      color: "currentColor",
                                      className: au.Qu,
                                  }),
                              }),
                          })
                        : (0, a.jsx)(lK.Y, {
                              targetElementRef: Y,
                              position: "top",
                              align: "left",
                              animation: lK.Y.Animation.NONE,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, a.jsx)(lW.W, {
                                      "data-menu-migrated": !0,
                                      navId: "conjure-composer-attach",
                                      "aria-label": ee.intl.string(ee.t.d56gCa),
                                      onClose: t,
                                      onSelect: t,
                                      children: (0, a.jsxs)(lX.rX, {
                                          children: [
                                              (0, a.jsx)(lX.Dr, {
                                                  id: "upload-file",
                                                  label: ee.intl.string(ee.t["d3+iYs"]),
                                                  iconLeft: lV.H,
                                                  leadingAccessory: { type: "icon", icon: lV.H },
                                                  action: () => P.current?.click(),
                                              }),
                                              null != f
                                                  ? (0, a.jsx)(lX.Dr, {
                                                        id: "import-project",
                                                        label: ee.intl.string(Z.default["p/k5i7"]),
                                                        iconLeft: lY.q,
                                                        leadingAccessory: { type: "icon", icon: lY.q },
                                                        action: f,
                                                    })
                                                  : null,
                                          ],
                                      }),
                                  });
                              },
                              children: (e, t) => {
                                  let { isShown: l } = t;
                                  return (0, a.jsx)("button", {
                                      ...e,
                                      ref: Y,
                                      type: "button",
                                      className: `${au.Y0} ${au.nu}`,
                                      disabled: !n,
                                      "aria-label": ee.intl.string(ee.t.d56gCa),
                                      "aria-haspopup": "menu",
                                      "aria-expanded": l,
                                      children: (0, a.jsx)(lJ.PlusLargeIcon, {
                                          size: "refresh_sm",
                                          color: "currentColor",
                                          className: au.Qu,
                                      }),
                                  });
                              },
                          }),
                    ef
                        ? (0, a.jsx)("div", {
                              ref: eu,
                              className: au.ar,
                              "aria-hidden": "true",
                              children: (0, a.jsx)(am, { text: em, offering: ec && null == U, typed: null != U }),
                          })
                        : null,
                    (0, a.jsx)(lQ.y, {
                        value: j,
                        onChange: (e) => C(e.currentTarget.value),
                        onKeyDown: V,
                        onPaste: K,
                        placeholder: ef ? "" : er,
                        disabled: !n,
                        "aria-label": ee.intl.string(Z.default.ldNl9x),
                        "aria-describedby": ef ? ed : void 0,
                        rows: 1,
                        className: au.jp,
                    }),
                    ef ? (0, a.jsx)(w.A, { id: ed, children: er }) : null,
                    (0, a.jsx)("div", {
                        className: au.Sz,
                        children:
                            r && null != u
                                ? (0, a.jsx)(y.m, {
                                      text: ee.intl.string(Z.default.wiguT0),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: `${au.Y0} ${au.$E}`,
                                          disabled: I,
                                          onClick: B,
                                          "aria-label": ee.intl.string(Z.default.wiguT0),
                                          children: (0, a.jsx)(nh.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : b?.tierSettings != null && null != v
                                  ? (0, a.jsx)(at, {
                                        settings: b.tierSettings,
                                        tiers: b.tiers,
                                        choices: b.choices,
                                        disabled: !n,
                                        onChange: v,
                                        className: `${au.Y0} ${au.$E}`,
                                        icon: (0, a.jsx)(lZ.R, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                    }),
                    E
                        ? (0, a.jsxs)("div", {
                              className: au.fF,
                              children: [
                                  (0, a.jsx)("div", { className: au.MT }),
                                  (0, a.jsx)("button", {
                                      type: "submit",
                                      className: au.rt,
                                      disabled: !z,
                                      "aria-label": ee.intl.string(Z.default.rxW2cl),
                                      children: (0, a.jsx)(l0.SendMessageIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        ],
    });
}
let ah = 1500,
    ap = [
        "font-family",
        "font-size",
        "font-weight",
        "font-style",
        "font-variant",
        "letter-spacing",
        "word-spacing",
        "line-height",
        "text-indent",
        "text-transform",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "border-top-width",
        "border-right-width",
        "border-bottom-width",
        "border-left-width",
    ];
function ag(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = ag.mirror;
            if (null != e) return e;
            let t = document.createElement("div");
            return (
                t.setAttribute("aria-hidden", "true"),
                (t.style.position = "absolute"),
                (t.style.top = "0"),
                (t.style.left = "-9999px"),
                (t.style.visibility = "hidden"),
                (t.style.boxSizing = "border-box"),
                (t.style.whiteSpace = "pre-wrap"),
                (t.style.overflowWrap = "break-word"),
                document.body.appendChild(t),
                (ag.mirror = t),
                t
            );
        })(),
        n = window.getComputedStyle(e);
    for (let e of ap) t.style.setProperty(e, n.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let l = document.createElement("span");
    ((l.textContent = "\u200B"), t.appendChild(l));
    let a = l.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
ag.mirror = null;
var ax = n(790453);
let ab = [6e4, 18e4, 6e5],
    av = [
        {
            key: "outdated",
            priority: 2,
            idleDelayMs: 6e4,
            backoffDelaysMs: ab,
            clock: "persistent",
            eligible: (e) => {
                var t;
                let { publish: n, draftTyped: l } = e;
                return !l && null != (t = n) && t.isUpdate && null == t.disabledReason && !0 !== t.publishing;
            },
        },
        {
            key: "ideas",
            priority: 1,
            idleDelayMs: 6e4,
            clock: "visit",
            eligible: (e) => {
                var t;
                let { turn: n, publish: l, draftHasText: a } = e;
                return (
                    !a &&
                    l?.publishing !== !0 &&
                    "plan_implemented" === (t = n).kind &&
                    (0, eG.BL)(t) &&
                    !(null != n.publishCta && la(l))
                );
            },
        },
    ];
function aj(e, t) {
    return {
        ...e,
        now: t,
        visitStartedAt: t,
        draftTyped: !1,
        lastActivityAt: null,
        lastMessageAt: null == e.messageAt ? null : Math.min(e.messageAt, t),
        seenAt: null,
        unseen: !1,
        hiddenAt: e.visible ? null : t,
        outdatedShown: !1,
        outdatedBackoff: 0,
    };
}
let ay = new Map();
var aw = n(320095),
    ak = n(963852),
    aC = n(521981),
    aA = n(763754),
    aN = n(491182),
    aS = n(438729),
    aE = n(622868),
    aI = n(448368),
    aT = n(837528),
    aP = n(439762),
    aM = n(715628),
    a_ = n(752636),
    aR = n(9842),
    aL = n(589022),
    aD = n(95701),
    aO = n(994500),
    aF = n(967198),
    az = n(7584);
let aU = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function aG(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function aq(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function a$(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let a = aq(e, t),
        i = e.codePointAt(t);
    if (
        (null != i &&
            (8205 === i ||
                (i >= 65024 && i <= 65039) ||
                (i >= 127995 && i <= 127999) ||
                (i >= 768 && i <= 879) ||
                (i >= 8400 && i <= 8447) ||
                (i >= 65056 && i <= 65071) ||
                (i >= 917536 && i <= 917631))) ||
        8205 === a
    )
        return !0;
    if (aG(a) && aG(i)) {
        let n = 0,
            l = t;
        for (; n < 32 && aG(aq(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function aB(e, t) {
    let { streaming: n } = t,
        l = (0, c.bG)([l2.Ay], () => l2.Ay.useReducedMotion),
        a = n && !l,
        [r, s] = i.useState(() => ({ target: e, length: e.length })),
        o = r;
    (o.target !== e &&
        (o = {
            target: e,
            length: a
                ? (function (e, t, n) {
                      let l = Math.min(Math.max(n, 0), e.length);
                      if (0 === l) return 0;
                      if (t.length >= l && t.startsWith(e.slice(0, l))) return l;
                      let a = Math.min(l, t.length),
                          i = 0;
                      for (; i < a && e.charCodeAt(i) === t.charCodeAt(i);) i++;
                      for (; i > 0 && a$(t, i);) i--;
                      return i;
                  })(o.target, e, o.length)
                : e.length,
        }),
        a || o.length === e.length || (o = { target: e, length: e.length }),
        o !== r && s(o));
    let u = a && o.length < e.length,
        d = i.useRef(o);
    i.useLayoutEffect(() => {
        d.current = o;
    });
    let m = i.useRef(0),
        f = i.useRef(0);
    (i.useEffect(() => {
        if (u)
            return (
                (f.current = 0),
                (m.current = requestAnimationFrame(function e(t) {
                    let n = 0 === f.current ? 32 : t - f.current;
                    if (n >= 32) {
                        f.current = t;
                        let e = d.current,
                            l = (function (e) {
                                let { target: t, revealed: n, elapsedMs: l } = e,
                                    a = Math.min(Math.max(n, 0), t.length),
                                    i = t.length - a;
                                if (i <= 0) return a;
                                if (i > 900) return t.length;
                                let r = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, i / 280) * Math.max(l, 0))),
                                );
                                var s = (function (e, t, n) {
                                    if (n >= e.length) return n;
                                    let l = n;
                                    for (; l > t + 1 && n - l < 12 && aU.has(e.charAt(l - 1));) l--;
                                    return aU.has(e.charAt(l - 1)) ? n : l;
                                })(t, a, Math.min(t.length, a + r));
                                let o = s;
                                for (; o < t.length && o - s < 32 && a$(t, o);) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    m.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(m.current)
            );
    }, [u]),
        i.useEffect(() => {
            if (u)
                return (
                    e(),
                    document.addEventListener("visibilitychange", e),
                    () => document.removeEventListener("visibilitychange", e)
                );
            function e() {
                if ("hidden" !== document.visibilityState) return;
                let { target: e } = d.current;
                s({ target: e, length: e.length });
            }
        }, [u]));
    let h = Math.min(o.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: a && h < e.length };
}
var aH = n(565645),
    aV = n(821844);
function aK(e) {
    let { emoji: t, label: n } = e;
    return (0, a.jsx)("div", {
        className: aV.H,
        children: (0, a.jsx)(aH.A, { emojiName: t, alt: n, size: "reaction" }),
    });
}
var aW = n(365199),
    aX = n(194085),
    aY = n(734495),
    aJ = n(818974);
function aQ(e) {
    let { message: t, onClose: n } = e,
        l = (0, aY.A)(t);
    return (0, a.jsx)(lW.W, {
        navId: "conjure-message-actions",
        "aria-label": ee.intl.string(ee.t.Lv7LxN),
        onClose: n,
        onSelect: n,
        children: (0, a.jsx)(lX.rX, { children: l }),
    });
}
function aZ(e) {
    let { groupStart: t, renderMenu: n } = e,
        [l, r] = i.useState(!1),
        o = i.useRef(null),
        u = i.useCallback(() => r((e) => !e), []),
        d = i.useCallback(() => r(!1), []);
    return (0, a.jsx)("div", {
        className: s()(aJ.QE, { [aJ.Rn]: t, [aJ.vg]: l }),
        children: (0, a.jsx)(aX.Ay, {
            children: (0, a.jsx)(lK.Y, {
                targetElementRef: o,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return n(t);
                },
                shouldShow: l,
                onRequestClose: d,
                position: "left",
                align: "top",
                animation: lK.Y.Animation.NONE,
                children: (e, t) => {
                    let { onClick: n, ...l } = e,
                        { isShown: i } = t;
                    return (0, a.jsx)(aX.qv, {
                        ref: o,
                        label: ee.intl.string(ee.t["UKOtz+"]),
                        icon: aW.MoreHorizontalIcon,
                        selected: i,
                        onClick: u,
                        ...l,
                    });
                },
            }),
        }),
    });
}
function a0(e) {
    let { message: t, groupStart: n } = e,
        l = i.useCallback((e) => (0, a.jsx)(aQ, { message: t, onClose: e }), [t]);
    return null == (0, aY.A)(t) ? null : (0, a.jsx)(aZ, { groupStart: n, renderMenu: l });
}
let a2 = (0, aD.createChannelRecord)({ id: "conjure-builder", type: e3.rbe.DM }),
    a1 = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function a6(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: s()(aJ.Yq, { [aJ.x1]: t }), children: e });
}
function a9(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function a5(e, t, n) {
    let { content: l } = (0, aP.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        r = i.useMemo(() => ({ message: e, channel: a2, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(aS.Ay, { className: n, message: e, content: l, compact: !1 })
          : (0, aM.A)(r, l);
}
function a3(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, aT.m)(e, a2, t.usernameProfile, l),
        o = (0, aT.Jo)(t.avatarProfile, l),
        u = (0, c.bG)([aF.A], () => aF.A.getGuildId()),
        d = (0, c.bG)([ez.default], () => ez.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = ez.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(aL.A, { ...t, user: n, currentUser: d, guildId: u ?? void 0 });
            },
            [d, u, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: s,
        onPopoutRequestClose: r,
        renderPopout: m,
        guildId: u ?? void 0,
    };
}
function a4(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = "" !== n.content ? (0, aC.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: aJ.GV,
                              children: [
                                  (0, a.jsx)(A.x, {
                                      className: aJ.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 14,
                                      height: 14,
                                  }),
                                  l,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [n, l]),
        { isReplyAuthorBlocked: o, isReplyAuthorIgnored: u } = (0, c.cf)(
            [aO.A],
            () => ({
                isReplyAuthorBlocked: aO.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: aO.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, aA.X4)(n),
        m = (0, aA.X4)(t),
        f = a3(n);
    return (0, a.jsx)(aI.A, {
        repliedAuthor: d,
        baseAuthor: m,
        baseMessage: t,
        channel: a2,
        referencedMessage: { state: aR.a.LOADED, message: n },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: o,
        isReplyAuthorIgnored: u,
        isReplySpineClickable: null != r,
        showReplySpine: !0,
        renderPopout: f.renderPopout,
        showAvatarPopout: f.showAvatarPopout,
        showUsernamePopout: f.showUsernamePopout,
        onClickAvatar: f.onClickAvatar,
        onClickUsername: f.onClickUsername,
        onClickReply: r,
        onPopoutRequestClose: f.onPopoutRequestClose,
    });
}
function a8(e) {
    let { message: t, author: n } = e,
        l = a3(t);
    return (0, a.jsx)(aE.Ay, {
        message: t,
        channel: a2,
        author: n,
        guildId: l.guildId,
        subscribeToGroupId: t.id,
        renderPopout: l.renderPopout,
        showAvatarPopout: l.showAvatarPopout,
        showUsernamePopout: l.showUsernamePopout,
        onClickAvatar: l.onClickAvatar,
        onClickUsername: l.onClickUsername,
        onPopoutRequestClose: l.onPopoutRequestClose,
    });
}
function a7(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, agentReaction: s, groupStart: o } = e;
    i.useEffect(() => eV(l), [l]);
    let u = (0, c.bG)(
            [ez.default],
            () => eH(l, null != l ? ez.default.getUser(l) : null, ez.default.getCurrentUser()),
            [l],
        ),
        d = i.useMemo(() => (0, aA.FT)(u, null), [u]),
        m = i.useMemo(() => eb(t), [t]),
        f = m?.body ?? t,
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, ak.Ay)({ channelId: a2.id, content: f, author: u });
            return (0, aw.rh)({ ...e, timestamp: a9(n, e.timestamp), state: e3.cmJ.SENT });
        }, [f, u, n]),
        p = (function (e) {
            if (null == e || "" === e) return null;
            let t = az.Ay.convertSurrogateToName(e, !1);
            return "" === t ? null : ee.intl.formatToPlainString(Z.default.lxXLho, { emojiName: t });
        })(s);
    return null == h
        ? null
        : (0, a.jsx)(ie, {
              message: h,
              author: d,
              content: f,
              selected: m?.label,
              accessories:
                  null != s && null != p
                      ? (0, a.jsxs)(a.Fragment, { children: [r, (0, a.jsx)(aK, { emoji: s, label: p })] })
                      : r,
              groupStart: o,
          });
}
function ie(e) {
    let { message: t, author: n, content: l, selected: i, accessories: r, groupStart: s = !0 } = e,
        o = a5(t, l);
    return (0, a.jsx)(aN.A, {
        className: aJ.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(a8, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == i
                ? o
                : (0, a.jsxs)("div", {
                      className: aJ.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: aJ.GV,
                              children: [
                                  (0, a.jsx)(A.x, {
                                      className: aJ.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  i,
                              ],
                          }),
                          (0, a.jsx)("span", { className: aJ.WO, children: o }),
                      ],
                  }),
        childrenAccessories: a6(r, "" !== l),
        childrenButtons: (0, a.jsx)(a0, { message: t, groupStart: s }),
    });
}
function it(e) {
    let {
            content: t,
            createdAt: n,
            accessories: l,
            replyTo: r,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
            buttons: d,
        } = e,
        { text: m, revealing: f } = aB(t, { streaming: u }),
        h = i.useMemo(() => (0, aA.FT)(null, null), []),
        p = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        g = r?.userId,
        x = (0, c.bG)(
            [ez.default],
            () => eH(g, null != g ? ez.default.getUser(g) : null, ez.default.getCurrentUser()),
            [g],
        ),
        b = i.useMemo(() => (null == r ? null : eb(r.content)), [r]),
        v = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, ak.Ay)({ channelId: a2.id, content: b?.body ?? r.content, author: x });
            return (0, aw.rh)({ ...e, id: r.id, timestamp: a9(r.createdAt, e.timestamp), state: e3.cmJ.SENT });
        }, [r, b, x]),
        j = i.useMemo(() => (null == r ? void 0 : { channel_id: a2.id, message_id: r.id }), [r]),
        y = i.useMemo(() => {
            let e = (0, ak.Ay)({ channelId: a2.id, content: m, author: a1 });
            return (0, aw.rh)({
                ...e,
                timestamp: a9(n, e.timestamp),
                state: e3.cmJ.SENT,
                ...(null != j ? { type: e3.lAJ.REPLY, message_reference: j } : {}),
            });
        }, [m, n, j]),
        w = a5(y, m, aJ.OS);
    return (0, a.jsxs)("div", {
        className: aJ.$4,
        "data-replying": null != v ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(aN.A, {
                className: aJ.yE,
                author: p,
                childrenRepliedMessage:
                    null == v
                        ? null
                        : (0, a.jsx)(a4, { baseMessage: y, referenced: v, selected: b?.label, onJumpToReplied: s }),
                childrenHeader: (0, a_.A)({ message: y, channel: a2, author: p, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: w,
                childrenAccessories: a6(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            o
                ? (0, a.jsx)("span", {
                      className: aJ.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(tT.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let il = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
function ia(e) {
    let { projectId: t, notice: n } = e;
    return "outdated" === n ? (0, a.jsx)(ir, { projectId: t }) : (0, a.jsx)(ii, { projectId: t, notice: n });
}
function ii(e) {
    let { projectId: t, notice: n } = e,
        l = i.useContext(e8),
        r = (0, c.bG)([eR.Ay, eX.A], () => {
            let e = eR.Ay.getProject(t);
            return null == e ? "" : (eX.A.getApplication(e.application_id)?.name ?? e.name);
        }),
        s = i.useCallback(() => {
            null != l &&
                (function (e, t) {
                    let n = te(e, t.guildId);
                    if (null == n) return;
                    let l = e1({
                        ...n.input,
                        status: null == n.input.status ? null : { ...n.input.status, state: "up_to_date" },
                    })?.destination;
                    null != l && tt(n, l, t.platform).catch(() => {});
                })(t, l);
        }, [l, t]);
    return (0, a.jsx)(v.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: ee.intl.format(
            (function (e) {
                if (!e.update) return Z.default.MOrR29;
                switch (e.surface) {
                    case "bot":
                        return Z.default.zfpeIL;
                    case "widget":
                        return Z.default.DxCfTh;
                    case "automod":
                        return Z.default["8ytGC3"];
                    case "activity":
                    case null:
                        return Z.default.WSmpBT;
                }
            })(n),
            { name: r, onOpen: s },
        ),
    });
}
function ir(e) {
    let { projectId: t } = e,
        n = td(t);
    return null == n
        ? null
        : (0, a.jsx)(v.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: ee.intl.format(Z.default.X8tdbS, {
                  action: n.label,
                  onUpdate: () => {
                      (ay.get(t)?.forEach((e) => e()), n.run("outdated_notice"));
                  },
              }),
          });
}
var is = n(337838);
function io(e, t) {
    e.style.height = `${t.offsetHeight}px`;
}
function iu(e) {
    let { reminder: t, renderReminder: n } = e,
        l = (function (e) {
            let t,
                [n, l] = i.useState([]);
            (n.find((e) => !e.leaving)?.key ?? null) !== e &&
                l(
                    ((t = n.filter((t) => t.key !== e).map((e) => ({ ...e, leaving: !0 }))),
                    null != e ? [...t, { key: e, leaving: !1 }] : t),
                );
            let a = n.some((e) => e.leaving);
            return (
                i.useEffect(() => {
                    if (!a) return;
                    let e = setTimeout(() => l((e) => e.filter((e) => !e.leaving)), 180);
                    return () => clearTimeout(e);
                }, [a, n]),
                n
            );
        })(t),
        r = l.find((e) => !e.leaving)?.key ?? null,
        o = null == r && l.length > 0,
        u = i.useRef(null),
        d = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = u.current;
            if (null == e || o) return;
            e.getBoundingClientRect();
            let t = d.current;
            if (null == t) {
                e.style.height = "0px";
                return;
            }
            io(e, t);
            let n = new ResizeObserver(() => io(e, t));
            return (n.observe(t), () => n.disconnect());
        }, [r, o]),
        (0, a.jsx)("div", {
            ref: u,
            className: s()(is.NI, { [is.Jg]: null == r }),
            "aria-live": "polite",
            children: (0, a.jsx)("div", {
                className: is.t$,
                children: l.map((e) =>
                    (0, a.jsx)(
                        "div",
                        {
                            ref: e.leaving ? void 0 : d,
                            "aria-hidden": e.leaving || void 0,
                            className: s()(is.qd, e.leaving ? is.cu : is.We),
                            children: n(e.key),
                        },
                        e.key,
                    ),
                ),
            }),
        })
    );
}
var id = n(744898);
function ic(e) {
    let { onSelect: t, onClose: n = O.Z_, onRestoreVersion: l } = e;
    return (0, a.jsx)(lW.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": ee.intl.string(ee.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsx)(lX.rX, {
            children: (0, a.jsx)(lX.Dr, {
                id: "restore-version",
                label: ee.intl.string(Z.default.H8Jfhu),
                icon: id.e,
                action: l,
            }),
        }),
    });
}
var im = n(958284),
    ih = n(872886);
function ip(e, t) {
    (0, im.F)({ onConfirm: () => t(e) });
}
function ig(e) {
    let {
            projectId: t,
            messages: n,
            emptyState: l,
            ref: r,
            onPickIdea: o,
            onAskForIdeas: u,
            draftHasText: d,
            onApprovePlan: m,
            floatingSettingsMessageId: f,
            onRestoreVersion: h,
        } = e,
        p = i.useRef(null),
        g = i.useCallback(
            (e) => {
                ((p.current = e), "function" == typeof r ? r(e) : null != r && (r.current = e));
            },
            [r],
        ),
        [x, b] = i.useState(null),
        j = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(j.current), []);
    let y = i.useCallback((e) => {
            let t = p.current?.querySelector(`[data-conjure-message="${e}"]`);
            (t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                b(e),
                window.clearTimeout(j.current),
                (j.current = window.setTimeout(() => b(null), 1600)));
        }, []),
        w = (0, c.bG)([eR.Ay], () => eR.Ay.getPublishStatus(t)?.state ?? null),
        C = i.useMemo(() => {
            let e;
            return (function (e) {
                let t = [],
                    n = (function (e) {
                        let t = new Set(),
                            n = !1;
                        for (let l = e.length - 1; l >= 0; l--) {
                            let a = e[l];
                            null != a &&
                                null !=
                                    (function (e) {
                                        if ("assistant" !== e.role) return null;
                                        let t = (0, tX.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(a) &&
                                (n && t.add(a.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                function l(e, n) {
                    t.push({ row: e, groupable: { key: e.key, ...n } });
                }
                for (let t of e) {
                    if ("user" === t.role) {
                        l(
                            { kind: "user", key: t.render_id, message: t, groupStart: !1 },
                            { actor: "user", authorId: t.user_id, boundary: void 0 },
                        );
                        continue;
                    }
                    if ("publish_notice" === t.kind) {
                        let e = `${t.render_id}:publish`;
                        l(
                            { kind: "publishNotice", key: e, message: t, groupStart: !1 },
                            { actor: "assistant", boundary: e },
                        );
                        continue;
                    }
                    let e = !(0, eG.BL)(t),
                        a = nb({
                            steps: t.steps,
                            content: t.content,
                            hasProposal: null != t.proposal,
                            hasAttachments: (t.attachments?.length ?? 0) > 0,
                        }),
                        i = a.lastStreamedMessage?.key,
                        r = (0, tX.C6)(t.steps, { turnActive: e }),
                        { lastWork: s, open: o } = (0, tX.CT)(r, { turnActive: e }),
                        u = r.at(-1)?.index,
                        d = !1;
                    for (let c of r) {
                        if (null != c.prose && il.test(c.prose.content)) d = !0;
                        else if (null != c.prose && c.prose.key !== a.replyKey) {
                            let n = `${t.render_id}:${c.key}`;
                            l(
                                {
                                    kind: "prose",
                                    key: n,
                                    message: t,
                                    groupStart: !1,
                                    content: c.prose.content,
                                    hostsAttachments:
                                        "streamed" === a.attachmentsHost && c.prose.key === i && null != t.attachments,
                                    streaming: e && c.index === u && !c.hasWork,
                                },
                                { actor: "assistant", boundary: n },
                            );
                        }
                        (c.hasWork || c.hasTodos) &&
                            l(
                                {
                                    kind: "activity",
                                    key: `${t.render_id}:work-${c.index}`,
                                    message: t,
                                    groupStart: !1,
                                    segment: c.index,
                                    active: c.index === o,
                                    closed: c.index !== o,
                                    ...(null != c.durationMs ? { segmentDurationMs: c.durationMs } : {}),
                                    reportsDuration: c.index === s,
                                    hostsChecklist: c.hasTodos,
                                    turnActive: tY(t),
                                    checklistSuperseded: c.hasTodos && n.has(t.render_id),
                                },
                                { actor: null, boundary: void 0 },
                            );
                    }
                    let c = il.test(t.content ?? "");
                    if (
                        (!0 === t.interrupted || d || c
                            ? l(
                                  {
                                      kind: "interrupted",
                                      key: `${t.render_id}:interrupted`,
                                      message: t,
                                      groupStart: !1,
                                  },
                                  { actor: null, boundary: void 0 },
                              )
                            : r.every((e) => !e.hasTodos) &&
                              (t.todos?.length ?? 0) > 0 &&
                              l(
                                  {
                                      kind: "legacyTodos",
                                      key: `${t.render_id}:todos`,
                                      message: t,
                                      groupStart: !1,
                                      checklistSuperseded: n.has(t.render_id),
                                  },
                                  { actor: null, boundary: void 0 },
                              ),
                        (a.showsClosingMessage && !c) ||
                            null != t.proposal ||
                            null != t.clarification ||
                            null != t.restoreProposal ||
                            (!e &&
                                (null != t.ideas ||
                                    null != t.publishCta ||
                                    null != t.secretRequest ||
                                    null != t.settingsRequest)) ||
                            "standalone" === a.attachmentsHost)
                    ) {
                        let n = `${t.render_id}:closing`;
                        l(
                            {
                                kind: "closing",
                                key: n,
                                message: t,
                                groupStart: !1,
                                active: e,
                                attachmentsHost: a.attachmentsHost,
                                content: a.closingContent,
                                sideReply: "side_reply" === t.kind,
                            },
                            {
                                actor: "assistant",
                                boundary: n,
                                separate: null != t.proposal || null != t.clarification || "side_reply" === t.kind,
                            },
                        );
                    }
                }
                let a = (function (e) {
                    let t,
                        n,
                        l = [],
                        a = null,
                        i = !1,
                        r = !1;
                    for (let s of e) {
                        if (null == s.actor) {
                            (l.push(!1), (a = null), (t = void 0), (i = !1), (r = !1), (n = void 0));
                            continue;
                        }
                        let e = !i || a !== s.actor || t !== s.authorId || s.boundary !== n || !0 === s.separate || r;
                        (e && ((a = s.actor), (t = s.authorId), (i = !0), (r = !0 === s.separate), (n = s.boundary)),
                            l.push(e));
                    }
                    return l;
                })(t.map((e) => e.groupable));
                return t.map((e, t) => ({ ...e.row, groupStart: a[t] ?? !0 }));
            })(
                ((e = (function (e, t) {
                    if ("unpublished" !== t) return null;
                    for (let t = e.length - 1; t >= 0; t--) if (null != e[t].publishCta) return e[t].id;
                    return null;
                })(n, w)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => (null == t.publishCta || t.id === e ? t : { ...t, publishCta: null }))),
            );
        }, [n, w]),
        A = n.at(-1),
        N = (function (e, t, n) {
            var l;
            let a = td(e),
                r = (0, ax.A)(),
                s = (function (e) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("publish_notice" !== n.kind) {
                            if ("user" === n.role) return null;
                            if ((0, eG.BL)(n)) return n;
                            if (!(0, eG.B0)(e, t)) break;
                        }
                    }
                    return null;
                })(t),
                o = t.at(-1),
                u = {
                    projectId: e,
                    draftHasText: n,
                    publishing: a?.publishing === !0,
                    drift: a?.status?.state === "changes",
                    messageAt: null != o ? Math.max(o.created_at, o.finished_at ?? 0, o.settled_at ?? 0) : null,
                    visible: r,
                },
                [d, c] = i.useState(() => aj(u, Date.now())),
                m = (function (e, t, n) {
                    if (e.projectId !== t.projectId) return aj(t, n());
                    if (
                        e.draftHasText === t.draftHasText &&
                        e.publishing === t.publishing &&
                        e.drift === t.drift &&
                        e.messageAt === t.messageAt &&
                        e.visible === t.visible
                    )
                        return e;
                    let l = n(),
                        a = { ...e, now: l };
                    if (
                        (e.draftHasText !== t.draftHasText &&
                            (a = { ...a, draftHasText: t.draftHasText, draftTyped: t.draftHasText, lastActivityAt: l }),
                        e.publishing !== t.publishing &&
                            (a = {
                                ...a,
                                publishing: t.publishing,
                                lastActivityAt: l,
                                outdatedShown: !1,
                                outdatedBackoff: 0,
                            }),
                        e.drift !== t.drift &&
                            ((a = { ...a, drift: t.drift }),
                            t.drift || (a = { ...a, outdatedShown: !1, outdatedBackoff: 0 })),
                        e.messageAt !== t.messageAt)
                    ) {
                        let n = null == t.messageAt ? null : Math.min(t.messageAt, l);
                        ((a = (function (e) {
                            if (!e.outdatedShown || e.publishing) return e;
                            let t = Math.min(e.outdatedBackoff + 1, ab.length - 1);
                            return { ...e, outdatedShown: !1, outdatedBackoff: t };
                        })({ ...a, messageAt: t.messageAt, lastMessageAt: n })),
                            t.visible || null == e.messageAt || (a = { ...a, unseen: !0 }));
                    }
                    return (
                        e.visible !== t.visible &&
                            ((a = { ...a, visible: t.visible }),
                            t.visible
                                ? (l - (e.hiddenAt ?? l) >= 6e5
                                      ? (a = { ...a, visitStartedAt: l })
                                      : a.unseen && (a = { ...a, seenAt: l }),
                                  (a = { ...a, hiddenAt: null, unseen: !1 }))
                                : (a = { ...a, hiddenAt: l, unseen: !1 })),
                        a
                    );
                })(d, u, Date.now),
                f =
                    null == s ||
                    null != (l = s).awaitingUser ||
                    null != l.secretRequest ||
                    null != l.settingsRequest ||
                    (l.intake?.questions.length ?? 0) > 0
                        ? null
                        : { turn: s, publish: a, draftHasText: n, draftTyped: m.draftTyped && n },
                { shown: h, nextDueAt: p } = (function (e, t) {
                    var n;
                    let l;
                    if (t.unseen) return { shown: null, nextDueAt: null };
                    let a = e.filter((e) => e.eligible).sort((e, t) => t.priority - e.priority)[0];
                    if (null == a) return { shown: null, nextDueAt: null };
                    let i =
                        ((l = Math.max(
                            0,
                            t.now -
                                ((n = a.clock),
                                Math.max(
                                    t.lastMessageAt ?? -1 / 0,
                                    t.lastActivityAt ?? -1 / 0,
                                    t.seenAt ?? -1 / 0,
                                    "visit" === n ? t.visitStartedAt : -1 / 0,
                                )),
                        )),
                        t.now + Math.max(0, a.idleDelayMs - l));
                    return i <= t.now ? { shown: a.key, nextDueAt: null } : { shown: null, nextDueAt: i };
                })(
                    av.map((e) => ({
                        ...e,
                        idleDelayMs: e.backoffDelaysMs?.[m.outdatedBackoff] ?? e.idleDelayMs,
                        eligible: null != f && e.eligible(f),
                    })),
                    m,
                );
            return (
                "outdated" !== h || m.outdatedShown ? m !== d && c(m) : c({ ...m, outdatedShown: !0 }),
                i.useEffect(() => {
                    function t() {
                        let e = Date.now();
                        c((t) => ({ ...t, now: e, lastActivityAt: e }));
                    }
                    let n = ay.get(e) ?? new Set();
                    return (
                        ay.set(e, n),
                        n.add(t),
                        () => {
                            (n.delete(t), 0 === n.size && ay.delete(e));
                        }
                    );
                }, [e]),
                i.useEffect(() => {
                    if (null == p) return;
                    let e = setTimeout(() => c((e) => ({ ...e, now: Date.now() })), Math.max(0, p - Date.now()));
                    return () => clearTimeout(e);
                }, [p, m.now]),
                h
            );
        })(t, n, !0 === d),
        S = i.useCallback(
            (e) => {
                switch (e) {
                    case "outdated":
                        return (0, a.jsx)(it, {
                            groupStart: !1,
                            content: "",
                            accessories: (0, a.jsx)(ia, { projectId: t, notice: "outdated" }),
                        });
                    case "ideas":
                        return (0, a.jsx)("div", {
                            className: ih.u$,
                            children: (0, a.jsx)(it, {
                                content: ee.intl.string(Z.default.s96AWB),
                                accessories: (0, a.jsx)(nN, { onAsk: u }),
                            }),
                        });
                }
            },
            [t, u],
        ),
        E = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("assistant" === n.role) {
                            if (!(0, eG.BL)(n) || "plan_implemented" === n.kind) return null;
                            if (null != n.proposal) return n.render_id;
                        }
                    }
                    return null;
                })(n),
            [n],
        ),
        I = i.useMemo(
            () =>
                (function (e) {
                    let t = new Map(),
                        n = null,
                        l = 0;
                    for (let a of e)
                        if ("assistant" === a.role) {
                            if ("plan_implemented" === a.kind) {
                                ((n = null), (l = 0));
                                continue;
                            }
                            null != a.proposal &&
                                (null != n && t.set(n, { version: l, superseded: !0 }),
                                (l += 1),
                                t.set(a.render_id, { version: l, superseded: !1 }),
                                (n = a.render_id));
                        }
                    return t;
                })(n),
            [n],
        ),
        T =
            (A?.role !== "assistant" || null == A.awaitingUser || null == A.secretRequest
                ? null
                : (0, eG.BL)(A)
                  ? A.awaitingUser
                  : null) ?? void 0,
        P = (0, c.bG)([Q.Ay], () => Q.Ay.getSettings(t)?.secrets, [t]),
        M = i.useMemo(
            () =>
                (function (e, t) {
                    let n = null != t ? new Set(t.filter((e) => e.set).map((e) => e.name)) : null,
                        l = new Map(),
                        a = new Set(),
                        i = !1,
                        r = !1;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let s = e[t];
                        if (null == s) continue;
                        if ("user" === s.role) {
                            r =
                                r ||
                                (function (e) {
                                    let t = e.content.trim();
                                    return (
                                        t === ee.intl.string(Z.default.UGqnoV) || t === ee.intl.string(Z.default.sMQt5O)
                                    );
                                })(s);
                            continue;
                        }
                        let o = s.secretRequest?.fields ?? [];
                        if (0 === o.length || !(0, eG.BL)(s)) continue;
                        let u = r;
                        for (let e of (u && null == n
                            ? l.set(s.render_id, "pending")
                            : u && null != n && o.every((e) => n.has(e.name))
                              ? l.set(s.render_id, "received")
                              : i
                                ? l.set(s.render_id, o.some((e) => a.has(e.name)) ? "superseded" : "inactive")
                                : l.set(s.render_id, "open"),
                        o))
                            a.add(e.name);
                        ((i = !0), (r = !1));
                    }
                    return l;
                })(n, P),
            [n, P],
        );
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                ref: r,
                className: s()(ih.x7, ih.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: ih.Ub, children: (0, a.jsx)(k.y, {}) }),
            });
        let e = "unavailable" === l ? Z.default.Td4Sf4 : Z.default.V1QiNz;
        return (0, a.jsx)("ol", {
            ref: r,
            className: ih.x7,
            children: (0, a.jsx)(ix, { role: "assistant", children: (0, a.jsx)(it, { content: ee.intl.string(e) }) }),
        });
    }
    return (0, a.jsxs)("ol", {
        ref: g,
        className: ih.x7,
        children: [
            C.map((e) => {
                let l = e.message;
                switch (e.kind) {
                    case "user": {
                        let n = null != l.attachments && l.attachments.length > 0 ? l.attachments : null;
                        return (0, a.jsx)(
                            ix,
                            {
                                role: "user",
                                anchorId: l.id,
                                highlighted: x === l.id,
                                continuation: !e.groupStart,
                                children: (0, a.jsx)(a7, {
                                    groupStart: e.groupStart,
                                    content: l.content,
                                    createdAt: l.created_at,
                                    userId: l.user_id,
                                    agentReaction: l.agentReaction,
                                    accessories:
                                        null != n ? (0, a.jsx)(nS.A, { projectId: t, attachments: n }) : void 0,
                                }),
                            },
                            e.key,
                        );
                    }
                    case "prose":
                        return (0, a.jsx)(
                            ix,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, a.jsx)(it, {
                                    groupStart: e.groupStart,
                                    content: e.content,
                                    streaming: e.streaming,
                                    createdAt: l.created_at,
                                    accessories:
                                        e.hostsAttachments && null != l.attachments
                                            ? (0, a.jsx)(nS.A, { projectId: t, attachments: l.attachments })
                                            : void 0,
                                }),
                            },
                            e.key,
                        );
                    case "activity":
                        return (0, a.jsx)(
                            ix,
                            {
                                role: "assistant",
                                children: (0, a.jsx)(lG, {
                                    projectId: t,
                                    steps: l.steps,
                                    segment: e.segment,
                                    active: e.active,
                                    closed: e.closed,
                                    segmentDurationMs: e.segmentDurationMs,
                                    reportsDuration: e.reportsDuration,
                                    hostsChecklist: e.hostsChecklist,
                                    turnActive: e.turnActive,
                                    checklistSuperseded: e.checklistSuperseded,
                                    durationMs: null != l.finished_at ? l.finished_at - l.created_at : void 0,
                                    todos: l.todos,
                                    provisionalTodo: l.provisionalTodo,
                                }),
                            },
                            e.key,
                        );
                    case "publishNotice":
                        return (0, a.jsx)(
                            ix,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, a.jsx)(it, {
                                    groupStart: e.groupStart,
                                    content: null == l.publishNotice ? l.content : "",
                                    createdAt: l.created_at,
                                    accessories:
                                        null == l.publishNotice
                                            ? void 0
                                            : (0, a.jsx)(ia, { projectId: t, notice: l.publishNotice }),
                                }),
                            },
                            e.key,
                        );
                    case "interrupted":
                        return (0, a.jsx)(
                            ix,
                            {
                                role: "assistant",
                                children: (0, a.jsx)(lG, { projectId: t, interrupted: !0, steps: l.steps }),
                            },
                            e.key,
                        );
                    case "legacyTodos":
                        return (0, a.jsx)(
                            ix,
                            {
                                role: "assistant",
                                children: (0, a.jsx)(lG, {
                                    projectId: t,
                                    steps: [],
                                    active: !1,
                                    checklistSuperseded: e.checklistSuperseded,
                                    todos: l.todos,
                                    provisionalTodo: l.provisionalTodo,
                                }),
                            },
                            e.key,
                        );
                    case "closing": {
                        let i =
                                null != h
                                    ? "assistant" !== l.role || null == l.sourceSha
                                        ? null
                                        : {
                                              sha: l.sourceSha,
                                              authorName: "",
                                              authorEmail: "",
                                              authoredAt: new Date(l.created_at).toISOString(),
                                              subject: l.content,
                                          }
                                    : null,
                            r = null != i && null != h ? () => ip(i, h) : void 0,
                            s = l.restoreProposal;
                        return (0, a.jsx)(
                            ix,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                onContextMenu:
                                    null != r
                                        ? (e) => {
                                              (0, O.jA)(e, (e) => (0, a.jsx)(ic, { ...e, onRestoreVersion: r }));
                                          }
                                        : void 0,
                                children: (0, a.jsx)(it, {
                                    groupStart: e.groupStart,
                                    buttons:
                                        null != r
                                            ? (0, a.jsx)(aZ, {
                                                  groupStart: e.groupStart,
                                                  renderMenu: (e) =>
                                                      (0, a.jsx)(ic, { onClose: e, onSelect: e, onRestoreVersion: r }),
                                              })
                                            : void 0,
                                    content: e.content,
                                    createdAt: l.created_at,
                                    replyTo: (function (e, t) {
                                        if (null == t) return;
                                        let n = e.find((e) => e.id === t && "user" === e.role);
                                        if (null != n)
                                            return {
                                                id: n.id,
                                                content: n.content,
                                                ...(null != n.user_id ? { userId: n.user_id } : {}),
                                                createdAt: n.created_at,
                                            };
                                    })(n, l.in_reply_to),
                                    onJumpToReplied: null != l.in_reply_to ? () => y(l.in_reply_to) : void 0,
                                    accessories: (0, a.jsx)(lq, {
                                        projectId: t,
                                        steps: l.steps,
                                        content: "",
                                        proposal: l.proposal,
                                        planVersion: I.get(l.render_id),
                                        interrupted: !0 === l.interrupted,
                                        hoistedProse: !0,
                                        hoistedAttachmentsHost: e.attachmentsHost,
                                        sideReply: e.sideReply,
                                        sideReplyAcknowledges: l.acknowledges,
                                        active: e.active,
                                        ideas: e.active ? void 0 : l.ideas,
                                        pickedIdeaIds:
                                            null == l.ideas
                                                ? void 0
                                                : (function (e, t, n) {
                                                      let l = new Set();
                                                      for (let a = e.indexOf(t) + 1; a > 0 && a < e.length; a++) {
                                                          let t = e[a];
                                                          if ("user" === t.role)
                                                              for (let e of n)
                                                                  e.implementation_prompt.trim() === t.content.trim() &&
                                                                      l.add(e.id);
                                                      }
                                                      return l;
                                                  })(n, l, l.ideas),
                                        attachments: l.attachments,
                                        secretRequest: e.active ? void 0 : l.secretRequest,
                                        secretRequestId: l.render_id,
                                        secretRequestAwaiting: l === A ? T : void 0,
                                        secretRequestStatus: M.get(l.render_id),
                                        settingsRequest: e.active || l.id === f ? void 0 : l.settingsRequest,
                                        publishCta: e.active ? null : l.publishCta,
                                        onPickIdea: o,
                                        onApprovePlan: l.render_id === E ? m : void 0,
                                        restoreProposal: s,
                                        onRestoreProposal:
                                            null != s && null != h && l === A
                                                ? () =>
                                                      ip(
                                                          {
                                                              sha: s.sha,
                                                              authorName: "",
                                                              authorEmail: "",
                                                              authoredAt: s.authored_at,
                                                              subject: s.subject,
                                                          },
                                                          h,
                                                      )
                                                : void 0,
                                    }),
                                }),
                            },
                            e.key,
                        );
                    }
                }
            }),
            null != T
                ? (0, a.jsx)(ix, {
                      role: "assistant",
                      continuation: !0,
                      children: (0, a.jsx)(it, {
                          groupStart: !1,
                          content: "",
                          accessories: (0, a.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: ee.intl.string(Z.default.YR8A2v),
                          }),
                      }),
                  })
                : null,
            (0, a.jsx)("li", {
                role: "none",
                className: ih.q3,
                children: (0, a.jsx)(iu, { reminder: N, renderReminder: S }),
            }),
        ],
    });
}
function ix(e) {
    let { role: t, children: n, anchorId: l, highlighted: i = !1, continuation: r = !1, onContextMenu: o } = e;
    return (0, a.jsx)("li", {
        onContextMenu: o,
        "data-role": t,
        "data-conjure-message": l,
        className: s()(ih.xk, { [ih.Qo]: i, [ih.q3]: r }),
        children: n,
    });
}
let ib = [Z.default["AX+5lk"], Z.default.VAU6A7, Z.default["1emysd"], Z.default.EXHX3L, Z.default.ChslmX];
function iv(e) {
    return ib.some((t) => ee.intl.string(t) === e);
}
function ij(e) {
    switch (e) {
        case "connecting":
            return ee.intl.string(Z.default["ECl+Dx"]);
        case "closed":
            return ee.intl.string(Z.default.mQZSp1);
        case "failed":
            return ee.intl.string(Z.default.xzJSZ6);
    }
}
var iy = n(823376),
    iw = n(706799);
function ik(e) {
    let { activity: t, id: n } = e,
        { text: l, revealing: r } = aB(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [l]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: iw.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(tK.Ch, {
                ref: o,
                className: iw.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: s()(lz.PT, iw.bb),
                    "data-conjure-revealing": r ? "true" : void 0,
                    children: np.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var iC = n(831811);
function iA(e) {
    let {
            activity: t,
            compacting: n = !1,
            restoring: l = !1,
            recalling: r = !1,
            controlling: o = !1,
            spoken: u,
            onSpokenChange: d,
        } = e,
        c = i.useRef(null),
        m = i.useId(),
        [f, h] = i.useState(null),
        p = (function (e) {
            let { activity: t, compacting: n = !1, restoring: l = !1, recalling: a = !1, controlling: i = !1 } = e,
                r = null != t && "end" !== t.phase;
            return i
                ? Z.default["1jqaAc"]
                : l
                  ? Z.default.M4KI5F
                  : a
                    ? ib[0]
                    : n
                      ? Z.default.xnCAaP
                      : r
                        ? Z.default.izrt52
                        : Z.default.L9EDub;
        })({ activity: t, compacting: n, restoring: l, recalling: r, controlling: o }),
        g = ee.intl.string(p),
        x = p === ib["0"],
        [b, v] = i.useState(u ?? g),
        y = i.useRef(g);
    (i.useEffect(() => {
        y.current = g;
    }, [g]),
        i.useEffect(() => {
            d?.(b);
        }, [b, d]));
    let w = i.useRef(null),
        k = i.useRef(b);
    i.useEffect(() => {
        k.current = b;
    }, [b]);
    let C = i.useRef(x),
        A = i.useRef(0);
    (i.useEffect(() => {
        ((C.current = x), !x && iv(k.current) && v(y.current));
    }, [x]),
        i.useEffect(() => {
            let e = 0,
                t = 0;
            function n() {
                if (C.current) {
                    var e;
                    ((A.current = iv(k.current) ? A.current + 1 : 0),
                        v(((e = A.current), ee.intl.string(ib[e % ib.length]))));
                } else y.current !== k.current ? v(y.current) : w.current?.play();
            }
            function l() {
                (window.clearTimeout(e), window.clearInterval(t), (e = 0), (t = 0));
            }
            function a() {
                (l(),
                    (e = window.setTimeout(() => {
                        (n(), (t = window.setInterval(n, 2400)));
                    }, 1800)));
            }
            function i() {
                (w.current?.stop(), a());
            }
            return (
                ("u" < typeof document || document.hasFocus()) && a(),
                window.addEventListener("focus", i),
                window.addEventListener("blur", l),
                () => {
                    (l(), window.removeEventListener("focus", i), window.removeEventListener("blur", l));
                }
            );
        }, []));
    let N = null != t && "" !== t.text,
        S = t?.session ?? null,
        E = N && null != S && f === S,
        I = i.useCallback(() => {
            N && null != S && h((e) => (e === S ? null : S));
        }, [N, S]),
        T = i.useCallback(() => h(null), []);
    return (0, a.jsx)(lK.Y, {
        targetElementRef: c,
        position: "top",
        align: "left",
        shouldShow: E,
        onRequestClose: T,
        renderPopout: () => (0, a.jsx)(ik, { id: m, activity: t }),
        children: () =>
            (0, a.jsxs)(j.D, {
                innerRef: c,
                className: s()(iC.hF, N && iC.Xd),
                "aria-label": ee.intl.string(l ? Z.default.qqlUiW : x ? ib["0"] : Z.default["Uuj/gh"]),
                "aria-expanded": E,
                "aria-describedby": E ? m : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": ee.intl.string(p),
                onClick: I,
                children: [
                    (0, a.jsx)("span", {
                        className: iC.bl,
                        children: (0, a.jsx)(iy.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: iC.xu,
                        "aria-hidden": !!o || !!x || void 0,
                        children: (0, a.jsx)(l$.o, {
                            ref: w,
                            text: b,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: iC.yE,
                        }),
                    }),
                ],
            }),
    });
}
let iN = { second: 1e3, minute: 6e4 };
function iS(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let a = iN[t];
            return (
                !(function t() {
                    let i = Date.now();
                    (l(i), (n = setTimeout(t, a - ((((i - e) % a) + a) % a))));
                })(),
                () => clearTimeout(n)
            );
        }, [e, t]),
        null == e ? void 0 : Math.max(0, n - e)
    );
}
var iE = n(618534);
function iI(e) {
    let { startedAt: t } = e,
        n = iS(t);
    return (0, a.jsx)(v.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: iE.$,
        "data-conjure-turn-timer": !0,
        children: (0, ng.C7)(n),
    });
}
function iT(e) {
    let { startedAt: t } = e,
        n = iS(t, "minute");
    return (0, a.jsx)(w.A, { role: "timer", children: (0, ng.Us)(n) });
}
var iP = n(442188);
function iM(e) {
    return e.toLocaleString();
}
function i_(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: iP.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: iP.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [iM((0, et.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    iM(n.input_tokens),
                    " in \xb7 ",
                    iM(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${iM(n.cache_creation_input_tokens)} cache write \xb7 ${iM(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function iR(e) {
    let { project: t } = e,
        n = (0, et.wU)(t.compaction),
        l = (0, et.wU)(t.classifier),
        i = (0, et.wV)(t.orchestrator, t.codegen),
        r = (0, et.wV)(i, n);
    return (0, a.jsxs)("div", {
        className: iP.si,
        role: "dialog",
        "aria-label": ee.intl.string(Z.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: iP.Q$,
                children: (0, a.jsxs)("div", {
                    className: iP.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [iM((0, et.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(i_, { label: ee.intl.string(Z.default["9Sj3SX"]), usage: i }),
            (0, a.jsx)(i_, { label: ee.intl.string(Z.default.ANCEo3), usage: n }),
            (0, a.jsx)(i_, { label: ee.intl.string(Z.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: iP.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: ee.intl.string(Z.default["8OUg09"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, et.sj)(r) ? "\u2014" : `${Math.round(100 * (0, et.CA)(r))}%`,
                    }),
                ],
            }),
        ],
    });
}
function iL(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(lK.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(iR, { project: t }),
        children: (e) =>
            (0, a.jsx)(j.D, {
                innerRef: n,
                className: iP.Y$,
                "aria-label": ee.intl.string(Z.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(nE.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var iD = n(537886);
function iO(e) {
    let t,
        {
            projectId: n,
            thinking: l,
            turnStartedAt: r,
            restoring: s = !1,
            recalling: o = !1,
            thinkingActivity: u,
            compacting: d,
            projectUsage: c,
            connState: m,
        } = e,
        f = (0, eT.Zv)(n),
        [h, p] = i.useState(null),
        g = i.useCallback((e) => p(iv(e) ? null : e), []),
        x =
            null == c
                ? null
                : ((t = (0, et.a7)(c.cost_usd)),
                  {
                      text: ee.intl.formatToPlainString(Z.default.gMuw5d, { runes: t.toLocaleString() }),
                      aria: ee.intl.formatToPlainString(Z.default.Z4LvGa, { runes: t, turns: c.turns }),
                  }),
        b = l && null != r;
    return (0, a.jsxs)("div", {
        className: iD.jf,
        children: [
            (0, a.jsxs)("div", {
                className: iD.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    l || s || o || f
                        ? (0, a.jsx)(iA, {
                              activity: u,
                              compacting: d,
                              restoring: s,
                              recalling: o,
                              controlling: f,
                              spoken: h,
                              onSpokenChange: g,
                          })
                        : null,
                    b ? (0, a.jsx)(iI, { startedAt: r }) : null,
                ],
            }),
            b ? (0, a.jsx)(iT, { startedAt: r }) : null,
            null == c || null == x
                ? null
                : (0, a.jsxs)("span", {
                      className: iD.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": x.aria,
                              children: x.text,
                          }),
                          (0, a.jsx)(iL, { project: c }),
                      ],
                  }),
            "open" === m
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === m ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": ee.intl.formatToPlainString(Z.default["tCo+ZM"], { status: ij(m) }),
                      "data-conjure-conn": !0,
                      "data-state": m,
                      className: iD.XF,
                      children: ij(m),
                  }),
        ],
    });
}
var iF = n(621466),
    iz = n(658675),
    iU = n(22231),
    iG = n(408278),
    iq = n(123292),
    i$ = n(155078);
function iB(e) {
    return e.options.some((e) => null != e.image);
}
let iH = [];
function iV(e, t) {
    return {
        image: e,
        selected: t,
        busy: null,
        error: null,
        onPick: () => void 0,
        onRemove: () => void 0,
        onUpload: () => void 0,
        onLink: () => Promise.resolve(!1),
    };
}
var iK = n(87221),
    iW = n(144228),
    iX = n(241326),
    iY = n(26430),
    iJ = n(750943),
    iQ = n(173936),
    iZ = n(95477),
    i0 = n(789249);
function i2(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: o, gone: u, handleError: d } = n_(t, n),
        [c, m] = i.useState(null),
        f = null != o && c === o;
    return u
        ? (0, a.jsxs)("span", {
              className: s()(i0.Gt, i0.b6),
              children: [
                  (0, a.jsx)(iK.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: ee.intl.string(Z.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: s()(i0.Gt, { [i0.iP]: !f }),
              children:
                  null != o
                      ? (0, a.jsx)("img", {
                            src: o,
                            alt: l,
                            className: i0.Sl,
                            onLoad: (e) => {
                                m(o);
                                let { naturalWidth: t, naturalHeight: n } = e.currentTarget;
                                t > 0 && n > 0 && r({ width: t, height: n });
                            },
                            onError: d,
                            draggable: !1,
                        })
                      : null,
          });
}
function i1(e) {
    let t,
        n,
        {
            projectId: l,
            option: i,
            multi: r,
            selected: o,
            disabled: u,
            reachable: d,
            tabbable: c,
            onPick: m,
            onView: f,
            onArrow: h,
            onMeasured: p,
            onRemove: g,
        } = e,
        x = ee.intl.formatToPlainString(Z.default.JGjZMs, { answer: i.label });
    return (0, a.jsxs)("div", {
        className: s()(i0.Vs, { [i0.Q9]: o, [i0.RX]: u }),
        "data-conjure-clarification-option": i.id,
        children: [
            (0, a.jsxs)(j.D, {
                className: i0.Up,
                "data-conjure-image-option-pick": !0,
                onClick: u ? void 0 : () => m(i),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(i, t));
                },
                role: r ? "checkbox" : "radio",
                "aria-checked": o,
                "aria-label": ee.intl.formatToPlainString(Z.default.AQbxhf, { answer: i.label }),
                "aria-disabled": u,
                tabIndex: d && c ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: i0.$_,
                        children: [
                            null != i.image
                                ? (0, a.jsx)(i2, {
                                      projectId: l,
                                      attachmentId: i.image.attachment_id,
                                      alt: i.label,
                                      onMeasured: p,
                                  })
                                : (0, a.jsx)("span", { className: i0.Gt }),
                            (0, a.jsx)("span", {
                                className: i0.q3,
                                "aria-hidden": !0,
                                children: r
                                    ? (0, a.jsx)(iz.P, { checked: o, disabled: u })
                                    : (0, a.jsx)(iW.T, { checked: o, disabled: u }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: i0.pG,
                        children:
                            "" !== (n = null != (t = i.image?.page_url ?? i.image?.url) ? (0, i$.E)(t) : "")
                                ? (function (e) {
                                      let t = e.toLowerCase().split(".");
                                      if (t.length < 2 || /^\d+$/.test(t[t.length - 1]) || e.includes(":")) return e;
                                      let [n, l] = t.slice(-2),
                                          a = t.length > 2 && 2 === l.length && n.length <= 3;
                                      return t.slice(a ? -3 : -2).join(".");
                                  })(n)
                                : i.label,
                    }),
                ],
            }),
            null != g
                ? (0, a.jsx)("span", {
                      className: i0.B4,
                      children: (0, a.jsx)(y.m, {
                          text: ee.intl.string(Z.default.HQEXJM),
                          children: (0, a.jsx)(iG.K, {
                              icon: iX.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: g,
                              disabled: u,
                              "aria-label": ee.intl.string(Z.default.HQEXJM),
                              tabIndex: d ? 0 : -1,
                          }),
                      }),
                  })
                : null != i.image
                  ? (0, a.jsx)("span", {
                        className: i0.B4,
                        children: (0, a.jsx)(y.m, {
                            text: ee.intl.string(Z.default["4/eeDD"]),
                            children: (0, a.jsx)(iG.K, {
                                icon: iY._,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => f(i),
                                "aria-label": x,
                                tabIndex: d && c ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function i6(e) {
    var t;
    let { projectId: n, question: l, selectedIds: r, disabled: o, reachable: u = !0, onPick: d, own: c } = e,
        m = !0 === l.multi_select,
        { options: f } = l,
        h = f.length > 4 ? "gallery" : "row",
        p = i.useRef(null),
        g = i.useRef(new Map()),
        [x, b] = i.useState(null),
        v = null != x && f.some((e) => e.id === x) ? x : (f.find((e) => r.includes(e.id)) ?? f[0])?.id,
        j = i.useCallback(
            (e) => {
                let t = f.flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = t.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(t.map((e) => (0, Q.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, nM.R)({
                                items: e.map((e, n) => {
                                    let l,
                                        a = g.current.get(t[n].id);
                                    return {
                                        type: "IMAGE",
                                        url: e,
                                        original: e,
                                        alt: t[n].label,
                                        ...(null != a
                                            ? ((l = Math.max(1, 480 / Math.max(a.width, a.height))),
                                              { width: Math.round(a.width * l), height: Math.round(a.height * l) })
                                            : {}),
                                    };
                                }),
                                startingIndex: l,
                                shouldHideMediaOptions: !0,
                                location: "VibegrationsClarificationImageOptions",
                            });
                        },
                        () => {},
                    );
            },
            [f, n],
        ),
        y = i.useCallback(
            (e, t) => {
                let n = (f.findIndex((t) => t.id === e.id) + t + f.length) % f.length,
                    l = f[n];
                (b(l.id), p.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), m || o || d(l));
            },
            [o, m, d, f],
        ),
        w =
            null == c.image
                ? null
                : ((t = c.image),
                  {
                      id: `own:${t.attachment.id}`,
                      label: ee.intl.string(Z.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, a.jsxs)("div", {
        className: i0.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: p,
                className: s()(i0.fF, "gallery" === h ? i0.nV : i0.nM, { [i0.m3]: m }),
                role: m ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": h,
                "data-count": f.length,
                children: [
                    f.map((e) =>
                        (0, a.jsx)(
                            i1,
                            {
                                projectId: n,
                                option: e,
                                multi: m,
                                selected: r.includes(e.id),
                                disabled: o,
                                reachable: u,
                                tabbable: m || e.id === v,
                                onPick: (e) => {
                                    (b(e.id), d(e));
                                },
                                onView: j,
                                onArrow: y,
                                onMeasured: (t) => g.current.set(e.id, t),
                            },
                            e.id,
                        ),
                    ),
                    null != w
                        ? (0, a.jsx)(
                              i1,
                              {
                                  projectId: n,
                                  option: w,
                                  multi: m,
                                  selected: c.selected,
                                  disabled: o,
                                  reachable: u,
                                  tabbable: !0,
                                  onPick: c.onPick,
                                  onView: () => void 0,
                                  onArrow: () => void 0,
                                  onMeasured: () => void 0,
                                  onRemove: c.onRemove,
                              },
                              w.id,
                          )
                        : null,
                ],
            }),
            (0, a.jsx)(i9, {
                projectId: n,
                own: c,
                disabled: o,
                reachable: u,
                uploadText: ee.intl.string(/\bicons?\b/i.test(l.question) ? Z.default.qU4WN6 : Z.default.cbMDDB),
            }),
        ],
    });
}
function i9(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        o = i.useRef(null),
        [u, d] = i.useState(!1),
        [c, m] = i.useState(""),
        f = r ? 0 : -1,
        h = n.busy;
    function p() {
        "" !== c.trim() &&
            null == h &&
            n.onLink(c.trim()).then(
                (e) => {
                    e && (d(!1), m(""));
                },
                () => void 0,
            );
    }
    return (0, a.jsxs)("div", {
        className: i0.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: i0.QJ,
                children: [
                    (0, a.jsx)(C.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: iJ.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: l || "link" === h,
                        onClick: () => o.current?.click(),
                        tabIndex: f,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, a.jsx)(C.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: iQ.LinkIcon,
                              text: ee.intl.string(Z.default["1TgOO+"]),
                              disabled: l || "upload" === h,
                              onClick: () => d(!0),
                              tabIndex: f,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: i0.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            var l, a;
                            let i = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""),
                                null != i &&
                                    n.onUpload(
                                        ((l = i.name),
                                        (a = i.type),
                                        (0, et.Oq)(i.size, a)
                                            ? (0, Q.c9)(t, i, l, a)
                                            : Promise.resolve({ errorText: t7(a) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: i0.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: i0.Hs,
                              children: (0, a.jsx)(iZ.k, {
                                  label: ee.intl.string(Z.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: ee.intl.string(Z.default.AVhvn8),
                                  value: c,
                                  onChange: (e) => m(e),
                                  onKeyDown: (e) => {
                                      "Enter" === e.key
                                          ? (e.preventDefault(), p())
                                          : "Escape" === e.key && (e.stopPropagation(), d(!1));
                                  },
                                  autoFocus: !0,
                                  type: "url",
                                  error: null == h && n.error?.source === "link" ? n.error.text : null,
                                  disabled: l,
                                  "data-conjure-own-image-link-input": !0,
                              }),
                          }),
                          (0, a.jsxs)("div", {
                              className: i0.gd,
                              children: [
                                  (0, a.jsx)(C.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: ee.intl.string(Z.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: l || "" === c.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(iq.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: ee.intl.string(Z.default.eXZL4X),
                                      onClick: () => d(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      "data-conjure-own-image-error": !0,
                      children: n.error.text,
                  })
                : null,
        ],
    });
}
var i5 = n(203228);
function i3(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: o = !0, selected: u } = e,
        d = i.useId(),
        c = !0 === t.recommended,
        m = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(j.D, {
        className: s()(i5.uK, { [i5.ue]: l, [i5.h4]: !0 === u }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": ee.intl.formatToPlainString(c ? Z.default["2p6UFz"] : Z.default.AQbxhf, { answer: t.label }),
        "aria-describedby": m ? d : void 0,
        "aria-disabled": l,
        role: null != u ? "checkbox" : void 0,
        "aria-checked": u,
        tabIndex: o ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            null != u
                ? (0, a.jsx)("span", { className: i5.dy, children: (0, a.jsx)(iz.P, { checked: u, disabled: l }) })
                : (0, a.jsx)("span", { className: i5.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: i5.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: i5.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: i5.ed,
                            children: t.label,
                        }),
                    }),
                    m
                        ? (0, a.jsx)(v.E, {
                              tag: "span",
                              id: d,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: t.detail,
                          })
                        : null,
                ],
            }),
            c
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: i5.rM,
                      children: ee.intl.string(Z.default.zku6r1),
                  })
                : null,
        ],
    });
}
function i4(e) {
    let { projectId: t, question: n, selected: l, disabled: i, reachable: r = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return iB(n)
        ? (0, a.jsx)(i6, { projectId: t, question: n, selectedIds: l, disabled: i, reachable: r, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      i3,
                      {
                          option: e,
                          position: t + 1,
                          disabled: i,
                          selected: u ? l.includes(e.id) : void 0,
                          onPick: s,
                          reachable: r,
                      },
                      e.id,
                  ),
              ),
          });
}
let i8 = [];
function i7(e) {
    let {
            projectId: t,
            question: n,
            draft: l,
            selected: i,
            direction: r,
            disabled: o,
            ownImage: u,
            ownSelected: d,
        } = e,
        c = "" === l.trim() ? null : l,
        m = !0 === n.multi_select;
    return (0, a.jsxs)("div", {
        className: s()(i5.Ge, i5.x1),
        "data-direction": r,
        "aria-hidden": !0,
        children: [
            m
                ? (0, a.jsx)(v.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: i5.aK,
                      children: ee.intl.string(Z.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(i4, {
                projectId: t,
                question: n,
                selected: i,
                disabled: o,
                onPick: () => void 0,
                reachable: !1,
                own: iV(u, d),
            }),
            iB(n)
                ? null
                : (0, a.jsxs)("div", {
                      className: i5.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: i5.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(iU.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, a.jsx)("span", { className: s()(i5.Pu, i5.es), children: c }),
                      ],
                  }),
        ],
    });
}
function re(e) {
    var t;
    let { projectId: n, clarification: l, onSubmit: r, onDismiss: o } = e,
        [u, d] = i.useState({}),
        [c, m] = i.useState({}),
        [f, h] = i.useState({}),
        [p, g] = i.useState(0),
        [x, b] = i.useState(null),
        [w, k] = i.useState(null),
        [A, N] = i.useState(null),
        [S, E] = i.useState(!1),
        I = i.useRef(null),
        [T, P] = i.useState(null),
        M = i.useRef(null),
        _ = i.useRef(0),
        L = null == r,
        D = l.questions.length,
        O = Math.min(p, D - 1),
        F = l.questions[O],
        [z, U] = i.useState({ id: F.id, expanded: !1 }),
        G = z.id === F.id && z.expanded,
        [q, $] = i.useState(null),
        B = c[F.id] ?? "",
        H = !0 === F.multi_select,
        V = iB(F),
        K = H ? (f[F.id] ?? i8) : ((t = u[F.id]), t?.kind === "option" ? [t.optionId] : iH),
        W = (function (e, t, n) {
            let [l, a] = i.useState({}),
                [r, s] = i.useState({}),
                [o, u] = i.useState({}),
                d = ee.intl.string(Z.default.wTsP5l),
                c = i.useCallback((e) => l[e] ?? null, [l]),
                m = i.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === o[e.id] : t[e.id]?.kind === "image"),
                    [t, l, o],
                ),
                f = i.useCallback(
                    (e) => {
                        let t = l[e.id];
                        return null != t && !0 === o[e.id] ? { attachment: t.attachment, text: d } : void 0;
                    },
                    [d, l, o],
                ),
                h = i.useCallback(
                    (i, o) => {
                        let c = i.id,
                            f = !0 === i.multi_select,
                            h = l[c] ?? null;
                        if (o) return iV(h, m(i));
                        function p(e) {
                            return s((t) => ({ ...t, [c]: e }));
                        }
                        function g(e) {
                            return { kind: "image", attachment: e.attachment, text: d };
                        }
                        let x = t[c];
                        function b(t) {
                            (a((n) => {
                                let l = n[c];
                                return (
                                    null != l && (0, Q.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [c]: t }
                                );
                            }),
                                p({ busy: null, error: null }),
                                f ? u((e) => ({ ...e, [c]: !0 })) : n((e) => (e[c] === x ? { ...e, [c]: g(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: m(i),
                            busy: r[c]?.busy ?? null,
                            error: r[c]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (f ? u((e) => ({ ...e, [c]: !0 !== e[c] })) : n((e) => ({ ...e, [c]: g(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, Q.Vm)(e, h.attachment.id).catch(() => void 0),
                                    a((e) => {
                                        let { [c]: t, ...n } = e;
                                        return n;
                                    }),
                                    u((e) => ({ ...e, [c]: !1 })),
                                    n((e) => {
                                        if (e[c]?.kind !== "image") return e;
                                        let { [c]: t, ...n } = e;
                                        return n;
                                    }));
                            },
                            onUpload: (e) => {
                                (p({ busy: "upload", error: null }),
                                    e.then(
                                        (e) => {
                                            "errorText" in e
                                                ? p({ busy: null, error: { source: "upload", text: e.errorText } })
                                                : b({ attachment: e });
                                        },
                                        () =>
                                            p({
                                                busy: null,
                                                error: { source: "upload", text: ee.intl.string(Z.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                p({ busy: "link", error: null }),
                                (0, Q.gm)(e, t).then(
                                    (e) => (b({ attachment: e }), !0),
                                    (e) => (
                                        p({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : ee.intl.string(Z.default.l79PMc),
                                            },
                                        }),
                                        !1
                                    ),
                                )
                            ),
                        };
                    },
                    [d, t, l, e, m, n, r],
                );
            return { imageFor: c, selectedFor: m, multiPartFor: f, controlsFor: h };
        })(n, u, d),
        X = W.imageFor(F.id),
        Y = W.selectedFor(F),
        { text: J, phase: et } = (0, l4.Q)(F.question),
        en = J === F.question,
        el = en && q?.id === F.id && q.truncated;
    i.useLayoutEffect(() => {
        if (null == T || G || !en) return;
        function e() {
            if (null == T) return;
            let e = T.scrollHeight > T.clientHeight + 1;
            $((t) => (t?.id === F.id && t.truncated === e ? t : { id: F.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(T), () => t.disconnect());
    }, [en, T, F.id, G]);
    let ea = ee.intl.string(G ? ee.t.iTcuma : ee.t.dcl9MQ),
        ei = i.useCallback(
            (e) => {
                if (null == r) return;
                let t = l.questions
                    .map((t, n) => ({ question: t, index: n, answer: e[t.id] }))
                    .filter((e) => null != e.answer && "" !== e.answer.text.trim())
                    .map((e) => {
                        let { question: t, index: n, answer: l } = e;
                        return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
                    })
                    .join("\n");
                if ("" !== t) {
                    let n;
                    r(
                        t,
                        (n = l.questions.flatMap((t) => {
                            let n = e[t.id];
                            if (null == n || "" === n.text.trim()) return [];
                            let l = "option" === n.kind ? [n.optionId] : "multi" === n.kind ? n.optionIds : [],
                                a = "custom" === n.kind ? n.text.trim() : "multi" === n.kind ? n.custom : void 0,
                                i = "image" === n.kind || "multi" === n.kind ? n.attachment : void 0;
                            return [
                                {
                                    question_id: t.id,
                                    option_ids: l,
                                    ...(null != a && "" !== a ? { custom: a } : {}),
                                    ...(null != i ? { attachment_id: i.id } : {}),
                                },
                            ];
                        })).length > 0
                            ? { clarification_id: l.id, answers: n }
                            : null,
                        l.questions.flatMap((t) => {
                            let n = e[t.id];
                            return null == n || "" === n.text.trim()
                                ? []
                                : "image" === n.kind || ("multi" === n.kind && null != n.attachment)
                                  ? [n.attachment]
                                  : [];
                        }),
                    );
                }
            },
            [l, r],
        ),
        er = i.useCallback(
            (e, t) => {
                _.current += 1;
                let n = _.current;
                (b({ direction: t, moves: n }),
                    k({ question: F, draft: B, selected: K, ownImage: X, ownSelected: Y, direction: t, moves: n }),
                    E(!0),
                    g(e));
            },
            [B, X, Y, F, K],
        ),
        es = i.useCallback(() => {
            let e = I.current,
                t = M.current;
            null != e && null != t && N({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = I.current,
            t = M.current;
        if (null == e || null == t) return;
        es();
        let n = new ResizeObserver(es);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [es]);
    let eo = x?.moves;
    i.useEffect(() => {
        if (null == eo) return;
        let e = setTimeout(() => k(null), 400),
            t = setTimeout(() => E(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [eo]);
    let eu = i.useCallback(
            (e) => {
                if (L) return;
                let t = { ...u, [F.id]: e };
                d(t);
                let n =
                    O < l.questions.length - 1
                        ? O + 1
                        : (function (e, t, n) {
                              let { questions: l } = e;
                              for (let e = 1; e <= l.length; e++) {
                                  let a = (n + e) % l.length,
                                      i = t[l[a].id];
                                  if (null == i || "" === i.text.trim()) return a;
                              }
                              return null;
                          })(l, t, O);
                null == n ? ei(t) : er(n, n < O ? "back" : "forward");
            },
            [u, l, L, O, F.id, ei, er],
        ),
        ed = i.useCallback(() => {
            L || 0 === O || er(O - 1, "back");
        }, [L, O, er]),
        ec = O > 0 && !L,
        em = i.useCallback(
            (e) => {
                m((e) => ({ ...e, [F.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                V ? L || d((e) => ({ ...e, [F.id]: t })) : eu(t);
            },
            [L, V, F.id, eu],
        ),
        { multiPartFor: ef } = W,
        eh = i.useMemo(() => {
            var e;
            let t, n;
            return H
                ? ((e = ef(F)),
                  (t = B.trim()),
                  (n = F.options.filter((e) => K.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: K,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...n, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [B, H, ef, F, K]),
        ep = W.controlsFor(F, L),
        eg = i.useCallback(() => {
            if (null != eh) {
                "" !== eh.text && eu(eh);
                return;
            }
            let e = B.trim();
            "" !== e && eu({ kind: "custom", text: e });
        }, [B, eh, eu]),
        [ex, eb] = i.useState(!1),
        [ev, ej] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eb(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let ey = i.useCallback(() => {
            null != o && (ej(!0), setTimeout(o, 150));
        }, [o]),
        ew = i.useMemo(
            () =>
                null != eh
                    ? "" !== eh.text
                        ? eh
                        : null
                    : "" !== B.trim()
                      ? { kind: "custom", text: B.trim() }
                      : (u[F.id] ?? null),
            [u, B, eh, F.id],
        ),
        ek = null != ew && !L,
        eC = O === D - 1,
        eA = i.useCallback(() => {
            null == ew || L || eu(ew);
        }, [L, ew, eu]),
        eN = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, iF.vq)(e.target, HTMLTextAreaElement) ||
                    (0, iF.vq)(e.target, HTMLInputElement) ||
                    ((!(0, iF.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ec
                            ? (e.preventDefault(), ed())
                            : "ArrowRight" === e.key && ek && (e.preventDefault(), eA())));
            },
            [ec, ek, ed, eA],
        );
    return (0, a.jsxs)("section", {
        className: s()(i5.$O, { [i5.fI]: ex && !ev, [i5.Oh]: ev }),
        role: "dialog",
        "aria-label": F.question,
        "data-conjure-clarification": l.id,
        "data-state": L ? "inert" : "open",
        "data-question-expanded": G ? "true" : void 0,
        "data-step": O,
        tabIndex: -1,
        onKeyDown: eN,
        children: [
            (0, a.jsxs)("div", {
                className: i5.rf,
                style: null == A ? void 0 : { height: A.heading + A.rows },
                "data-moving": S ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: I,
                        className: i5.wx,
                        children: [
                            (0, a.jsx)(v.E, {
                                ref: P,
                                tag: "span",
                                id: `${F.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: G ? void 0 : 5,
                                className: s()(lg.TK, i5.R_, { [i5.TB]: "exit" === et, [i5.JU]: "enter" === et }),
                                children: J,
                            }),
                            el || G
                                ? (0, a.jsx)("div", {
                                      className: lg.Q7,
                                      children: (0, a.jsx)(y.m, {
                                          text: ea,
                                          children: (0, a.jsx)(iG.K, {
                                              icon: G ? l6.t : nR.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => U({ id: F.id, expanded: !G }),
                                              "aria-label": ea,
                                              "aria-controls": `${F.id}-label`,
                                              "aria-expanded": G,
                                          }),
                                      }),
                                  })
                                : null,
                            null == o
                                ? null
                                : (0, a.jsx)(j.D, {
                                      className: s()(lg.gb, lg.Q7),
                                      onClick: ey,
                                      "aria-label": ee.intl.string(Z.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(R.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: i5.Cg,
                        style: null == A ? void 0 : { insetBlockStart: A.heading },
                        children: (0, a.jsxs)("div", {
                            className: i5.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: M,
                                    className: i5.Ge,
                                    role: "group",
                                    "aria-labelledby": `${F.id}-label`,
                                    "data-direction": x?.direction,
                                    "data-parity": null == x ? void 0 : x.moves % 2,
                                    children: [
                                        H
                                            ? (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: i5.aK,
                                                  children: ee.intl.string(Z.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(i4, {
                                            projectId: n,
                                            question: F,
                                            selected: K,
                                            disabled: L,
                                            onPick: (e) =>
                                                H
                                                    ? h((t) => {
                                                          var n, l;
                                                          let a;
                                                          return {
                                                              ...t,
                                                              [F.id]:
                                                                  ((n = t[F.id] ?? i8),
                                                                  (l = e.id),
                                                                  (a = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  F.options
                                                                      .filter((e) => a.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : em(e),
                                            own: ep,
                                        }),
                                        V
                                            ? null
                                            : (0, a.jsxs)("div", {
                                                  className: i5.Xy,
                                                  children: [
                                                      (0, a.jsx)("span", {
                                                          className: i5.Gy,
                                                          "aria-hidden": !0,
                                                          children: (0, a.jsx)(iU.PencilIcon, {
                                                              size: "custom",
                                                              width: 20,
                                                              height: 20,
                                                              color: "currentColor",
                                                          }),
                                                      }),
                                                      (0, a.jsx)(lQ.y, {
                                                          value: B,
                                                          onChange: (e) => {
                                                              let { value: t } = e.currentTarget;
                                                              m((e) => ({ ...e, [F.id]: t }));
                                                          },
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  e.nativeEvent.isComposing ||
                                                                  (e.preventDefault(), eg());
                                                          },
                                                          placeholder: ee.intl.string(Z.default["tOC+tn"]),
                                                          "aria-label": ee.intl.formatToPlainString(
                                                              Z.default["4JeYPB"],
                                                              { question: F.question },
                                                          ),
                                                          disabled: L,
                                                          rows: 1,
                                                          className: i5.Pu,
                                                          "data-conjure-clarification-other": F.id,
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                                null == w
                                    ? null
                                    : (0, a.jsx)(
                                          i7,
                                          {
                                              projectId: n,
                                              question: w.question,
                                              draft: w.draft,
                                              selected: w.selected,
                                              ownImage: w.ownImage,
                                              ownSelected: w.ownSelected,
                                              direction: w.direction,
                                              disabled: L,
                                          },
                                          w.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            D > 1 || H || V
                ? (0, a.jsxs)("div", {
                      className: lg.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  D > 1
                                      ? ee.intl.formatToPlainString(Z.default.yzYUjq, { index: O + 1, total: D })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: lg.zt,
                              children: [
                                  ec
                                      ? (0, a.jsx)(iq.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: ee.intl.string(Z.default.Pk5lfA),
                                            onClick: ed,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, a.jsx)(C.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: ee.intl.string(eC ? ee.t.geKm7t : Z.default.w1nRmT),
                                      disabled: !ek,
                                      onClick: eA,
                                      "data-conjure-clarification-next": !0,
                                      "data-submits": eC ? "true" : void 0,
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var rt = n(643278),
    rn = n(677649),
    rl = n(150927);
function ra(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: o, agents: u, onJumpToActivity: d } = e,
        c = null != n,
        [m, f] = i.useState(n ?? "top"),
        [h, p] = i.useState(c),
        [g, x] = i.useState(!1),
        [b, v] = i.useState(!1),
        [w, k] = i.useState(c);
    (w !== c && (k(c), null != n ? (f(n), p(!0)) : (x(!1), v(!1))),
        i.useEffect(() => {
            if (c || !h) return;
            let e = setTimeout(() => p(!1), 150);
            return () => clearTimeout(e);
        }, [c, h]),
        i.useEffect(() => {
            if (!h || !c) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => x(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [h, c]));
    let [C, A] = i.useState(!1),
        [N, S] = i.useState(!1),
        [E, I] = i.useState(b);
    (E !== b && (I(b), b ? A(!0) : S(!1)),
        i.useEffect(() => {
            if (b || !C) return;
            let e = setTimeout(() => A(!1), 150);
            return () => clearTimeout(e);
        }, [b, C]),
        i.useEffect(() => {
            if (!C || !b) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => S(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [C, b]));
    let T = null != l && l.length > 0,
        P = i.useCallback(() => v((e) => !e), []);
    return h
        ? (0, a.jsxs)("div", {
              className: rl.qd,
              "data-placement": m,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: s()(rl.vK, { [rl.ho]: g && c, [rl.ET]: !c }),
                      children: [
                          null == d
                              ? (0, a.jsx)("ol", {
                                    className: s()(rl.Rk, lI.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(lv.A, {
                                        glyph: (0, a.jsx)(rn.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(j.D, {
                                    className: rl.pZ,
                                    onClick: d,
                                    "aria-label": ee.intl.string(Z.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: s()(rl.Rk, lI.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(lv.A, {
                                            glyph: (0, a.jsx)(rn.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          T
                              ? (0, a.jsx)(y.m, {
                                    text: ee.intl.string(Z.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(j.D, {
                                        className: rl.BO,
                                        onClick: P,
                                        "aria-expanded": b,
                                        "aria-label": ee.intl.string(Z.default.RtzECX),
                                        children: (0, a.jsx)(rt.ClipboardListIcon, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  C && T
                      ? (0, a.jsx)("div", {
                            className: s()(rl.vB, { [rl.pg]: b && N, [rl.ui]: !b }),
                            children: (0, a.jsx)(lD, {
                                todos: l,
                                provisional: o,
                                agents: u,
                                live: r,
                                announceProgress: !1,
                            }),
                        })
                      : null,
              ],
          })
        : null;
}
var ri = n(106430),
    rr = n(670455),
    rs = n(698638),
    ro = n(282406);
let ru = [ee.intl.string(Z.default["9w+Chc"]), ee.intl.string(Z.default["9B/zQ2"]), ee.intl.string(Z.default.SKsrzl)];
function rd(e) {
    var t;
    let { projectId: l, restoreState: r, onRestoreVersion: s } = e,
        o = (0, c.bG)([eG.Ay], () => eG.Ay.getMessages(l), [l]),
        u = (0, c.bG)([Q.Ay], () => Q.Ay.getConnState(l), [l]),
        d = (0, c.bG)([Q.Ay], () => Q.Ay.isChatStopped(l), [l]),
        m = (0, c.bG)([eG.Ay], () => eG.Ay.getProjectUsage(l), [l]),
        f = (0, c.bG)([eG.Ay], () => eG.Ay.getThinkingActivity(l), [l]),
        h = (0, c.bG)([eG.Ay], () => eG.Ay.isCompacting(l), [l]),
        p = (0, c.bG)([Q.Ay], () => Q.Ay.getModelSettings(l), [l]),
        g = i.useRef(null),
        x = i.useRef(null),
        b = i.useRef(null),
        j = i.useRef(!0),
        [y, w] = i.useState(!0);
    i.useEffect(() => {
        j.current && x.current?.scrollToBottom();
    }, [o]);
    let k = i.useCallback(() => {
            let e = g.current;
            if (null == e) return;
            let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                l = t ?? n[n.length - 1];
            if (null == l) return;
            let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
            l.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
        }, []),
        A = i.useCallback(() => {
            let e = x.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            j.current = t < 32;
            let n = t > 1;
            w((e) => (!n === e ? e : !n));
        }, []);
    (i.useLayoutEffect(() => {
        let e = g.current,
            t = b.current;
        if (null == e) return;
        let n = x.current?.getScrollerNode(),
            l = e.getBoundingClientRect().width,
            a = t?.getBoundingClientRect().height,
            i = n?.getBoundingClientRect().height,
            r = null;
        function s() {
            j.current &&
                (null != r && cancelAnimationFrame(r), (r = requestAnimationFrame(() => x.current?.scrollToBottom())));
        }
        let o = new ResizeObserver((t) => {
            for (let r of t)
                if (r.target === e) {
                    let e = r.contentRect.width;
                    if (e === l) continue;
                    ((l = e), s());
                } else if (r.target === n) {
                    let e = r.contentRect.height;
                    if (e === i) continue;
                    ((i = e), s());
                } else {
                    let e = r.contentRect.height;
                    if (e === a) continue;
                    ((a = e), s());
                }
        });
        return (
            o.observe(e),
            null != n && o.observe(n),
            null != t && o.observe(t),
            () => {
                (o.disconnect(), null != r && cancelAnimationFrame(r));
            }
        );
    }, []),
        i.useEffect(() => {
            (0, Q.Hc)(l);
        }, [l]),
        (0, e_.E1)(l),
        i.useEffect(
            () => () =>
                (function (e) {
                    if ((0, e2.jb)(e)) return;
                    let t = (0, e2.hl)(e);
                    t < e2.qu ||
                        (0, e2.Xi)(e) ||
                        ri.A.possiblyShowFeedbackModal(rr.MW.VIBEGRATIONS, () => {
                            ((0, e2.AH)(e),
                                (0, lm.openModalLazy)(async () => {
                                    let { default: l } = await Promise.all([
                                        n.e("312513"),
                                        n.e("218413"),
                                        n.e("137381"),
                                        n.e("847004"),
                                        n.e("965158"),
                                    ]).then(n.bind(n, 289989));
                                    return (n) => (0, a.jsx)(l, { ...n, projectId: e, promptCount: t });
                                }));
                        });
                })(l),
            [l],
        ));
    let N = eE(l),
        S = i.useCallback(
            (e, t) => {
                (0, Q.dv)(l, e, t);
            },
            [l],
        ),
        E = i.useCallback(
            (e, t) => {
                0 === N.annotations.length
                    ? S(e, t)
                    : (S(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  a = t.filter((e) => em(e.comment)),
                                  i = [];
                              if (
                                  (i.push(
                                      `My design feedback: ${1 === a.length ? "1 comment" : `${a.length} comments`} on the app.`,
                                  ),
                                  null != l)
                              ) {
                                  let e = l.title.trim(),
                                      t = "" !== e ? `${e} (${l.url})` : l.url;
                                  (i.push(`Page: ${t}, viewport ${l.viewport.width}x${l.viewport.height}.`),
                                      i.push(
                                          "Element coordinates below are viewport coordinates in that frame. The refs come from one snapshot taken when this feedback was collected, so re-snapshot before acting on them.",
                                      ));
                              }
                              a.forEach((e, t) => {
                                  let n;
                                  (i.push(""),
                                      i.push(`${t + 1}. ${ep(e.target)}`),
                                      i.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let r = n.trim();
                              return ("" !== r && (i.push(""), i.push(`Note for the whole batch: ${r}`)), i.join("\n"));
                          })({ annotations: N.annotations, metaComment: e, context: N.context }),
                          t,
                      ),
                      eC(l));
            },
            [N, S, l],
        ),
        I = i.useCallback(() => (0, Q.fu)(l), [l]),
        T = i.useCallback((e) => nn(l, e.implementation_prompt), [l]),
        [P, M] = (function (e) {
            let [t, n] = i.useState(() => nm(e)),
                [l, a] = i.useState(e),
                r = l !== e,
                s = r ? nm(e) : t;
            return (r && (a(e), n(s)), [s, n]);
        })(l),
        _ = i.useCallback(() => S(ee.intl.string(Z.default["t5CN3+"])), [S]),
        R = i.useCallback((e, t, n) => nn(l, e, { clarificationAnswers: t, attachments: n }), [l]),
        L = i.useCallback((e) => (0, Q.XZ)(l, e), [l]),
        D = i.useCallback((e) => (0, Q.vX)(l, e), [l]),
        O = i.useCallback((e) => ar(l, "chat", Array.from(e), D), [l, D]),
        F = i.useCallback(() => nn(l, ee.intl.string(Z.default.Zc7gML)), [l]),
        z = r?.status === "restoring",
        U = "open" === u && !d && !z,
        G = o[o.length - 1],
        q = null != G && "assistant" === G.role && null != G.proposal,
        [$, B] = i.useState(null),
        H = G?.clarification != null && G.clarification.id !== $ ? G.clarification : null,
        V = i.useCallback(() => {
            null != H && B(H.id);
        }, [H]),
        K = (0, c.bG)([Q.Ay], () => Q.Ay.getSettings(l), [l]),
        [W, X] = i.useState(null),
        Y =
            null != G &&
            "assistant" === G.role &&
            null != G.settingsRequest &&
            (0, eG.BL)(G) &&
            G.id !== W &&
            ((t = G.settingsRequest),
            null != K &&
                (t.keys ?? []).some((e) => {
                    let t = K.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return K.secrets.find((t) => t.name === e)?.set !== !0;
                    let n = K.values[e];
                    return null == n || "" === n;
                }))
                ? G
                : null,
        J = Y?.settingsRequest ?? null,
        et = i.useCallback(() => {
            null != Y && X(Y.id);
        }, [Y]),
        en = null != J,
        el = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, c.bG)([eG.Ay], () => eG.Ay.hasLoadedHistory(l), [l]),
            historyUnavailable: (0, c.bG)([eG.Ay], () => eG.Ay.isHistoryUnavailable(l), [l]),
            connState: u,
        }),
        ea = "loading" === el && 0 === o.length,
        ei = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < l.length; t++) e = (31 * e + l.charCodeAt(t)) % 0x7fffffff;
            return ru[e % ru.length];
        }, [l]),
        er = q ? ee.intl.string(Z.default.Zc7gML) : "greeting" === el && 0 === o.length ? ei : null,
        es = i.useMemo(() => {
            for (let e = o.length - 1; e >= 0; e--) {
                let t = o[e];
                if ("assistant" === t.role && !(0, eG.BL)(t)) return t;
            }
        }, [o]),
        eo = null != es,
        eu =
            null != es
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = tJ.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(es)
                : void 0,
        ed = q && U ? F : void 0,
        ec = i.useCallback(() => nn(l, ee.intl.string(Z.default.EMgIuY)), [l]),
        [ef, eh] = i.useState(null),
        [eg, ex] = i.useState(eo);
    (eg !== eo && (ex(eo), eo || eh(null)),
        i.useEffect(() => {
            if (!eo) return;
            let e = x.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? eh(null)
                        : eh(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [eo, es?.steps]));
    let eb = i.useMemo(() => (null != es ? (0, nf.b)(es.steps) : ""), [es]),
        ev = i.useMemo(() => (null != es ? ((0, tX.lt)(es.steps) ?? es.todos) : void 0), [es]),
        ej = es?.provisionalTodo,
        ey = null != es && tY(es),
        ew = i.useMemo(() => {
            var e;
            return null != es ? ((e = es.steps), lU((0, tX.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [es]);
    return (0, a.jsxs)("section", {
        ref: g,
        "data-conjure-chat": !0,
        className: ro.TE,
        children: [
            U
                ? (0, a.jsx)(tW.A, {
                      title: ee.intl.string(Z.default.gy7byi),
                      description: ee.intl.string(Z.default["dkv/WO"]),
                      icons: rs.ir,
                      onDrop: O,
                  })
                : null,
            (0, a.jsx)(ra, {
                onJumpToActivity: k,
                line: eb,
                placement: eo && "top" === ef ? "top" : null,
                todos: ev,
                todosLive: ey,
                provisionalTodo: ej,
                agents: ew,
            }),
            (0, a.jsxs)("div", {
                className: ro.JX,
                children: [
                    (0, a.jsx)(tK.Ch, {
                        ref: x,
                        onScroll: A,
                        scrollbarGutter: ea ? "both-edges" : "stable",
                        className: [ro.N$, y ? null : ro.hB, en ? ro.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(ig, {
                            ref: b,
                            projectId: l,
                            messages: o,
                            emptyState: el,
                            floatingSettingsMessageId: Y?.id,
                            onPickIdea: U ? T : void 0,
                            onAskForIdeas: U ? _ : void 0,
                            draftHasText: P,
                            onApprovePlan: U ? ec : void 0,
                            onRestoreVersion: z || eo ? void 0 : s,
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: ro.NJ,
                        children: (0, a.jsx)(iO, {
                            projectId: l,
                            thinking: eo,
                            turnStartedAt: eu,
                            restoring: z,
                            recalling: ea,
                            thinkingActivity: f,
                            compacting: h,
                            projectUsage: m,
                            connState: u,
                        }),
                    }),
                    null == H
                        ? null
                        : (0, a.jsx)("div", {
                              className: en ? `${ro.B5} ${ro.J9}` : ro.B5,
                              children: (0, a.jsx)(
                                  re,
                                  { projectId: l, clarification: H, onSubmit: U ? R : void 0, onDismiss: V },
                                  H.id,
                              ),
                          }),
                    null == J
                        ? null
                        : (0, a.jsx)("div", {
                              className: ro.B5,
                              children: (0, a.jsx)(lb, { projectId: l, request: J, onDismiss: et }, Y?.id),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: ro.Jx,
                children: [
                    (0, a.jsx)(ra, {
                        onJumpToActivity: k,
                        line: eb,
                        placement: eo && "bottom" === ef ? "bottom" : null,
                        todos: ev,
                        todosLive: ey,
                        provisionalTodo: ej,
                        agents: ew,
                    }),
                    0 === N.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: ro.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: ee.intl.formatToPlainString(Z.default["7b49dS"], {
                                          count: N.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: ee.intl.string(Z.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(C.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: ee.intl.string(Z.default["/zOv9+"]),
                                      onClick: () => eC(l),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(af, {
                        projectId: l,
                        canSend: U,
                        stopped: d,
                        running: eo,
                        restoring: z,
                        onSend: E,
                        hasPendingContext: N.annotations.length > 0,
                        onInterrupt: U ? I : void 0,
                        onUploadFile: D,
                        onApprove: ed,
                        suggestion: er,
                        questionOpen: null != H || null != J,
                        modelSettings: p,
                        onModelSettingsChange: L,
                        onDraftHasTextChange: M,
                    }),
                ],
            }),
        ],
    });
}
var rc = n(602853),
    rm = n(517461),
    rf = n(761929),
    rh = n(440416);
function rp(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: r } = e,
        s = (0, rc.r)(D.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [u, d] = (0, rm.V)("VibegrationsChatSidebarWidth", 460),
        [c, m] = i.useState(u ?? 460),
        f = (0, nl.clamp)(c, 360, n);
    i.useLayoutEffect(() => {
        l(t ? f + s : 0);
    }, [f, t, s, l]);
    let h = (0, rf.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: rf.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        p = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), h(e));
            },
            [h],
        );
    return (0, a.jsxs)("div", {
        className: rh.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: rh.Di, onPointerDown: p }),
            (0, a.jsx)("div", { ref: o, className: rh.kL, style: { width: f }, children: r }),
        ],
    });
}
var rg = n(624479),
    rx = n(761508),
    rb = n(540999),
    rv = n(957565);
let rj = [],
    ry = new Map(),
    rw = new Map(),
    rk = new Map(),
    rC = new Map(),
    rA = new Map(),
    rN = new Map(),
    rS = new Map();
class rE extends c.Ay.Store {
    getStatus(e) {
        return ry.get(e) ?? null;
    }
    getFetchState(e) {
        return rw.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return rC.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return rN.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return rA.get(e) ?? null;
    }
    getModelCalls(e) {
        return rS.get(e) ?? rj;
    }
    getForceCompactionState(e) {
        return rk.get(e) ?? "idle";
    }
}
let rI = new rE(eW.h, {
    LOGOUT: function () {
        if (
            0 === ry.size &&
            0 === rw.size &&
            0 === rk.size &&
            0 === rC.size &&
            0 === rA.size &&
            0 === rN.size &&
            0 === rS.size
        )
            return !1;
        (ry.clear(), rw.clear(), rk.clear(), rC.clear(), rA.clear(), rN.clear(), rS.clear());
    },
    CONJURE_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        rw.set(t, "loading");
    },
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("open" === n) return !1;
        let l = "pending" === rk.get(t);
        l &&
            rk.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === rw.get(t);
        if ((a && rw.set(t, "failed"), !l && !a)) return !1;
    },
    CONJURE_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: n, failed: l } = e;
        l || null == n ? rw.set(t, "failed") : (ry.set(t, n), rw.set(t, "loaded"));
    },
    CONJURE_DEBUG_COMPACTION_REPORT: function (e) {
        rC.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_COMPACTION_DECLINED: function (e) {
        rA.set(e.projectId, {
            promptCeiling: e.promptCeiling,
            threshold: e.threshold,
            projected: e.projected,
            headroom: e.headroom,
            retainedMessages: e.retainedMessages,
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_FORCE_COMPACTION_REQUESTED: function (e) {
        let { projectId: t } = e;
        rk.set(t, "pending");
    },
    CONJURE_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        rk.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_MODEL_CALL: function (e) {
        let t = rS.get(e.projectId);
        if (null != t && t.some((t) => t.id === e.id)) return !1;
        let n = {
                id: e.id,
                role: e.role,
                model: e.model,
                stopReason: e.stopReason,
                durationMs: e.durationMs,
                inputTokens: e.inputTokens,
                outputTokens: e.outputTokens,
                cacheReadTokens: e.cacheReadTokens,
                cacheWriteTokens: e.cacheWriteTokens,
                taskId: e.taskId,
                observedAt: e.observedAt,
            },
            l = null == t ? [n] : t.concat(n);
        rS.set(e.projectId, l.length > 200 ? l.slice(-200) : l);
    },
    CONJURE_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: n } = e;
        if (0 === (0, et.aM)(n.total)) return !1;
        rN.set(t, n);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (ry.delete(t), rw.delete(t), rk.delete(t), rC.delete(t), rA.delete(t), rN.delete(t), rS.delete(t));
    },
});
function rT(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function rP(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function rM(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function r_(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = String(t.getHours()).padStart(2, "0"),
        l = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${n}:${l}:${a}`;
}
function rR(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function rL(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function rD(e) {
    return ee.intl.string("preview" === e ? Z.default["2yLYlG"] : Z.default.eiAi57);
}
let rO = ["all", "preview", "stable", "web"],
    rF = new Set(["error", "aborted", "length"]);
function rz(e) {
    switch (e.reason) {
        case "local":
            return ee.intl.string(Z.default.mUeKML);
        case "unconfigured":
            return ee.intl.string(Z.default.bGefb5);
        case "unauthorized":
            return ee.intl.string(Z.default.KLx6Bb);
        default:
            return null != e.detail
                ? ee.intl.formatToPlainString(Z.default.t09Q6q, { detail: e.detail })
                : ee.intl.string(Z.default["t+tG59"]);
    }
}
function rU(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : ee.intl.formatToPlainString(Z.default["XO/bN4"], {
              p50: rT(e.memory_p50_bytes ?? 0),
              p999: rT(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let rG = {
    db: () => Z.default["7l+DFG"],
    db_preview: () => Z.default.FAuffi,
    runtime: () => Z.default["Gkl+ab"],
    runtime_preview: () => Z.default.ynpJzv,
    bot: () => Z.default["5/i0cj"],
    bot_preview: () => Z.default.m2jsnw,
};
var rq = n(911608),
    r$ = n(876219);
function rB(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: r$.KE,
        children: [
            (0, a.jsx)("div", {
                className: r$.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(k.y, { type: k.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: ee.intl.string(Z.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: ee.intl.formatToPlainString(Z.default.INVO50, { time: rR(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(C.$, { variant: "secondary", size: "sm", text: ee.intl.string(Z.default.oKEgiu), onClick: l }),
        ],
    });
}
function rH(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: r$.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: r$.Gf, children: t }),
            n,
        ],
    });
}
function rV(e) {
    let { label: t, value: n, hint: l, critical: i = !1 } = e;
    return (0, a.jsxs)("div", {
        className: r$.N8,
        children: [
            (0, a.jsxs)("div", {
                className: r$.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: i ? "text-feedback-critical" : "text-default",
                        children: n,
                    }),
                ],
            }),
            null != l && (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function rK(e) {
    let { label: t, used: n, max: l, formatValue: i } = e,
        r = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = r >= 0.9;
    return (0, a.jsxs)("div", {
        className: r$.N8,
        children: [
            (0, a.jsxs)("div", {
                className: r$.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${i(n)} / ${i(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(rq.z, {
                value: 100 * r,
                valueLabel: `${i(n)} of ${i(l)}`,
                "aria-label": t,
                className: s ? r$.dh : void 0,
            }),
        ],
    });
}
function rW(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(rV, {
            label: ee.intl.string(Z.default.SXP7pD),
            value: ee.intl.string(Z.default.E5hKVi),
            hint: rz(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(rV, {
            label: ee.intl.string(Z.default.SXP7pD),
            value: "\u2014",
            hint: ee.intl.string(Z.default.AGvoMJ),
        });
    let l = rU(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(rV, { label: ee.intl.string(Z.default["H/X+FI"]), value: rP(n.cpu_ms) }),
            null != l && (0, a.jsx)(rV, { label: ee.intl.string(Z.default.lmFmMO), value: l }),
        ],
    });
}
function rX(e) {
    let { analytics: t } = e,
        n = ee.intl.string(Z.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(rH, {
            title: n,
            children: (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: rz(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? rG[t] : null) ? ee.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(rH, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: ee.intl.string(Z.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          rV,
                          {
                              label: n,
                              value: ee.intl.formatToPlainString(Z.default["w/2voO"], { cpu: rP(t.cpu_ms) }),
                              hint: rU(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var rY = n(62386);
let rJ = [];
function rQ(e) {
    let t,
        { call: n } = e,
        { text: l, bad: i } =
            ((t = null != n.stopReason && rF.has(n.stopReason)),
            {
                text: [
                    null != n.durationMs ? rP(n.durationMs) : null,
                    `${rM(n.inputTokens + n.cacheReadTokens + n.cacheWriteTokens)} \u{2192} ${rM(n.outputTokens)}`,
                    t ? n.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, a.jsxs)("div", {
        className: rY.p5,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: rY.Q5,
                children: r_(n.observedAt),
            }),
            (0, a.jsxs)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: rY.qN,
                children: [n.role, " \xb7 ", n.model],
            }),
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: i ? "text-feedback-critical" : "text-muted",
                children: l,
            }),
        ],
    });
}
function rZ(e, t) {
    return (0, a.jsx)(rV, {
        label: e,
        value: ee.intl.formatToPlainString(Z.default.yHJxuP, { count: rM((0, et.aM)(t)) }),
        hint: `${rM(t.input_tokens)} in \xb7 ${rM(t.output_tokens)} out \xb7 ${rM(t.cache_read_input_tokens)} cache read`,
    });
}
function r0(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r, traceVisible: s = !1 } = e,
        o = (0, c.bG)([rI], () => rI.getLastTurnUsage(t), [t]),
        u = (0, c.bG)([rI], () => rI.getLastCompaction(t), [t]),
        d = (0, c.bG)([rI], () => rI.getLastCompactionDecline(t), [t]),
        m = (0, c.bG)([rI], () => rI.getForceCompactionState(t), [t]),
        f = i.useCallback(() => (0, Q.Lj)(t), [t]),
        h = i.useCallback(() => (0, Q.Lj)(t, !0), [t]),
        p = (0, c.bG)([rI], () => (s ? rJ : rI.getModelCalls(t)), [t, s]),
        g = n?.agent?.lifetime ?? null,
        x = n?.agent?.limits ?? null,
        b = n?.agent?.session ?? null,
        j = u?.promptCeiling ?? x?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: rY.Mf,
        children: [
            (0, a.jsx)(rB, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(rH, {
                title: ee.intl.string(Z.default.JghNal),
                children:
                    null == g
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: ee.intl.string(Z.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(rV, {
                                      label: ee.intl.string(Z.default["9nqym2"]),
                                      value: rM((0, et.a7)(g.cost_usd)),
                                      hint: ee.intl.formatToPlainString(Z.default.NCdUIh, { count: rM(g.turns) }),
                                  }),
                                  rZ(ee.intl.string(Z.default.xtxP0e), g.orchestrator),
                                  rZ(ee.intl.string(Z.default["9Sj3SX"]), g.codegen),
                                  rZ(ee.intl.string(Z.default.ANCEo3), (0, et.wU)(g.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(rV, {
                                          label: ee.intl.string(Z.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${rM(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(rH, {
                title: ee.intl.string(Z.default.dZHPE5),
                children:
                    null == o
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: ee.intl.string(Z.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  rZ(ee.intl.string(Z.default["7X3i9d"]), o.total),
                                  (0, a.jsx)(rV, {
                                      label: ee.intl.string(Z.default["8OUg09"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, et.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(rH, {
                title: ee.intl.string(Z.default.NbRk9a),
                children: [
                    null != u && null != j
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(rK, {
                                      label: ee.intl.string(Z.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: j,
                                      formatValue: rM,
                                  }),
                                  (0, a.jsx)(rV, {
                                      label: ee.intl.string(Z.default.mRbSns),
                                      value: `${rM(u.tokensBefore)} \u{2192} ${rM(u.tokensAfter)}`,
                                      hint: ee.intl.formatToPlainString(Z.default.Vq3skS, {
                                          count: rM(u.retainedMessages),
                                          time: rR(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != j
                                      ? ee.intl.formatToPlainString(Z.default.GMLCNv, { ceiling: rM(j) })
                                      : ee.intl.string(Z.default.s0U5Fv),
                          }),
                    null != d &&
                        (0, a.jsx)(rV, {
                            label: ee.intl.string(Z.default["4BX5KK"]),
                            value: `${rM(d.projected)} / ${rM(d.threshold)}`,
                            critical: !0,
                            hint: ee.intl.formatToPlainString(Z.default["6ngCax"], { time: rR(d.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: rY.Lj,
                        children: [
                            (0, a.jsx)(C.$, {
                                variant: "secondary",
                                size: "sm",
                                text: ee.intl.string(Z.default["1EiJeb"]),
                                disabled: "pending" === m,
                                onClick: f,
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof m && "compacted" !== m.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return ee.intl.string(Z.default.wox6Ev);
                                    if ("pending" === e) return ee.intl.string(Z.default.OcPHQ1);
                                    let t = rR(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return ee.intl.formatToPlainString(Z.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? Z.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? Z.default.YZb4hK
                                              : Z.default.ZoUSVK;
                                    return ee.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(m),
                            }),
                            "object" == typeof m &&
                                !0 === m.pendingTurn &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(C.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: ee.intl.string(Z.default.ZxG2AI),
                                            onClick: h,
                                        }),
                                        (0, a.jsx)(v.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: ee.intl.string(Z.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            !s &&
                (0, a.jsx)(rH, {
                    title: ee.intl.string(Z.default.TkTRdW),
                    children:
                        0 === p.length
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: ee.intl.string(Z.default["r3/FhI"]),
                              })
                            : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      p
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, a.jsx)(rQ, { call: e }, e.id)),
                                      p.length > 30 &&
                                          (0, a.jsx)(v.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: ee.intl.formatToPlainString(Z.default["uZ9P/O"], {
                                                  shown: 30,
                                                  total: p.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != b || n?.analytics != null) &&
                (0, a.jsxs)(rH, {
                    title: ee.intl.string(Z.default.EsSzCS),
                    children: [
                        null != b &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(rV, {
                                        label: ee.intl.string(Z.default.CLXHAs),
                                        value: rR(b.instance_since),
                                        hint: ee.intl.string(Z.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(rV, {
                                        label: ee.intl.string(Z.default["8V8e1Z"]),
                                        value: rM(b.sockets),
                                    }),
                                    (0, a.jsx)(rV, {
                                        label: ee.intl.string(Z.default["4pBzYW"]),
                                        value: b.turn_inflight
                                            ? ee.intl.string(Z.default.Wv025I)
                                            : ee.intl.string(Z.default["7/lsFY"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, a.jsx)(rV, {
                                            label: ee.intl.string(Z.default["3oUYnv"]),
                                            value: rM(b.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(rW, { analytics: n.analytics }),
                    ],
                }),
            null != x &&
                (0, a.jsxs)(rH, {
                    title: ee.intl.string(Z.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(rV, {
                            label: ee.intl.string(Z.default.IlDBN3),
                            value: rM(x.max_subagent_iterations),
                        }),
                        (0, a.jsx)(rV, {
                            label: ee.intl.string(Z.default["ZdzKR+"]),
                            value: ee.intl.formatToPlainString(Z.default.yHJxuP, {
                                count: rM(x.context_window_tokens),
                            }),
                        }),
                        (0, a.jsx)(rV, {
                            label: ee.intl.string(Z.default.cIhN2W),
                            value: ee.intl.formatToPlainString(Z.default.yHJxuP, {
                                count: rM(x.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(rV, {
                            label: ee.intl.string(Z.default["+fOn/q"]),
                            value: rM(x.max_user_message_chars),
                        }),
                        (0, a.jsx)(rV, { label: ee.intl.string(Z.default.kIHga0), value: rM(x.max_build_attempts) }),
                        (0, a.jsx)(rV, { label: ee.intl.string(Z.default.Iw03yW), value: rM(x.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var r2 = n(237528),
    r1 = n(629584),
    r6 = n(683438),
    r9 = n(275853);
function r5(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: r9.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: ee.intl.string(Z.default.h1SE6R),
              }),
          });
}
function r3(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: r9.qf,
              children: [
                  (0, a.jsx)(v.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: ee.intl.string(Z.default.h1SE6R),
                  }),
                  (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: ee.intl.string(Z.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: r9.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function r4(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: r9.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: ee.intl.string(Z.default.V7Ri8H),
              }),
          })
        : null;
}
var r8 = n(176335);
let r7 = i.memo(function (e) {
    var t;
    let { entry: n, showSource: l } = e,
        [r, s] = i.useState(!1),
        o = i.useId(),
        u = i.useMemo(
            () =>
                (function (e) {
                    let t;
                    if (e.length > 16e3) return null;
                    let n = e.indexOf("{"),
                        l = e.indexOf("["),
                        a = -1 === n ? l : -1 === l ? n : Math.min(n, l);
                    if (-1 === a) return null;
                    let i = e.slice(a).trim();
                    if (i.length < 2) return null;
                    try {
                        t = JSON.parse(i);
                    } catch {
                        return null;
                    }
                    if ("object" != typeof t || null == t) return null;
                    let r = e.slice(0, a).trim(),
                        s = JSON.stringify(t, null, 2);
                    return Array.isArray(t)
                        ? { prefix: r, pretty: s, marker: "[\u2026]", size: t.length }
                        : { prefix: r, pretty: s, marker: "{\u2026}", size: Object.keys(t).length };
                })(n.message),
            [n.message],
        ),
        d = "error" === n.level ? "text-feedback-critical" : "text-default";
    return (0, a.jsxs)("div", {
        className: r8.vK,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: r8.Mt,
                selectable: !0,
                children: r_(n.ts),
            }),
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: r8.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: r8.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: r8.Cq, children: (0, a.jsx)(r2.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: r8.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(r2.v, { text: ee.intl.string(Z.default.TrC9c8), variant: "redLight" }),
                        }),
                    null != u
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, a.jsxs)(v.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: d,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, a.jsxs)(j.D, {
                                      className: r8.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": ee.intl.string(Z.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(nR.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(nL._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, a.jsxs)(v.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  ee.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker ? Z.default.kUhyUv : Z.default["N+fphl"],
                                                      { count: u.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, a.jsx)(v.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: d,
                                          className: r8.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
                                      }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/normal",
                              color: d,
                              selectable: !0,
                              children: n.message,
                          }),
                ],
            }),
        ],
    });
});
function se(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([eR.Ay], () => eR.Ay.getLogs(t), [t]),
        l = (0, c.bG)([eR.Ay], () => eR.Ay.getHistoryState(t, "logs")),
        [r, s] = i.useState("all"),
        [o, u] = i.useState(""),
        d = i.useMemo(() => {
            let e = o.trim().toLowerCase();
            return n.filter((t) => {
                var n, l;
                return (
                    "string" == typeof (n = t.log).message &&
                    "string" == typeof n.level &&
                    "string" == typeof n.ts &&
                    ("all" === r ||
                        ("preview" === (l = t.log.source) || "stable" === l || "web" === l ? l : "other") === r) &&
                    ("" === e ||
                        t.log.message.toLowerCase().includes(e) ||
                        t.log.level.includes(e) ||
                        (t.log.source?.toLowerCase().includes(e) ?? !1))
                );
            });
        }, [n, r, o]),
        m = i.useRef(null),
        f = i.useRef(!0);
    i.useEffect(() => {
        f.current && m.current?.scrollToBottom();
    }, [d]);
    let h = i.useCallback(() => {
            let e = m.current;
            null != e && (f.current = 32 > e.getDistanceFromBottom());
        }, []),
        p = i.useMemo(
            () =>
                rO.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return rD(e);
                            case "web":
                                return ee.intl.string(Z.default.IVzfVV);
                            default:
                                return ee.intl.string(Z.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: r8.$F,
        children: [
            (0, a.jsxs)("div", {
                className: r8.y4,
                children: [
                    (0, a.jsx)(r1.I, {
                        look: "pill",
                        "aria-label": ee.intl.string(Z.default.MhvyUU),
                        options: p,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: r8.KT,
                        children: (0, a.jsx)(r6.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: ee.intl.string(Z.default["m2+37Y"]),
                            "aria-label": ee.intl.string(Z.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(r5, { state: l }),
            (0, a.jsxs)(tK.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: r8.sx,
                children: [
                    (0, a.jsx)(r4, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(r3, {
                              state: l,
                              emptyTitle: ee.intl.string(Z.default.S7qlPG),
                              emptyBody: ee.intl.string(Z.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: ee.intl.string(Z.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(r7, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function st(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(rH, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: ee.intl.string(Z.default.umcjif),
                      }),
        })
    );
}
function sn(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(rV, {
                      label: ee.intl.formatToPlainString(Z.default["01ZMS4"], { env: rD(n) }),
                      value: ((t = l.connected), ee.intl.string(t ? Z.default.Wv025I : Z.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(rV, {
                      label: ee.intl.string(Z.default["z1dh+F"]),
                      value: rM(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${rR(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(rV, { label: ee.intl.string(Z.default.Iz5GnJ), value: rM(l.guild_count) }),
                  (0, a.jsx)(rV, {
                      label: ee.intl.string(Z.default["7UqtNv"]),
                      value: rM(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? ee.intl.formatToPlainString(Z.default.MasSly, {
                                    code: l.last_close_code,
                                    time: rR(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(rV, {
                          label: ee.intl.string(Z.default["x3+JXJ"]),
                          value: rM(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(rV, { label: rD(n), value: ee.intl.string(Z.default.lTHQss) });
}
function sl(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(rV, {
        label: rD(t),
        value: ee.intl.formatToPlainString(Z.default["Xq+wHT"], {
            requests: rM(n.requests),
            failures: rM(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? ee.intl.formatToPlainString(Z.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: rR(n.last_failure.at),
                  })
                : ee.intl.formatToPlainString(Z.default["7KlGT6"], { time: rR(n.since) }),
    });
}
function sa(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(rV, {
                label: ee.intl.formatToPlainString(Z.default["92gVTm"], { env: rD(t) }),
                value: rM(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    rV,
                    {
                        label: ee.intl.formatToPlainString(Z.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? ee.intl.formatToPlainString(Z.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? ee.intl.formatToPlainString(Z.default.wxAWNv, { time: rR(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function si(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(rV, {
        label: rD(t),
        value: ee.intl.formatToPlainString(Z.default.suAOj9, { calls: rM(n.calls), errors: rM(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function sr(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(rH, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: ee.intl.string(Z.default["Noami/"]),
            }),
        });
    let i = n.cpu_ms_total / n.requests,
        r = n.cpu_ms_total > 0;
    return (0, a.jsxs)(rH, {
        title: t,
        children: [
            (0, a.jsx)(rV, {
                label: ee.intl.string(Z.default.xtD4Zp),
                value: rM(n.requests),
                hint: ee.intl.formatToPlainString(Z.default["7KlGT6"], { time: rR(n.since) }),
            }),
            (0, a.jsx)(rV, { label: ee.intl.string(Z.default.gfRhR3), value: rM(n.errors), critical: n.errors > 0 }),
            r
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(rK, {
                              label: ee.intl.string(Z.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: rP,
                          }),
                          (0, a.jsx)(rV, {
                              label: ee.intl.string(Z.default.mSKImM),
                              value: rP(i),
                              hint: ee.intl.formatToPlainString(Z.default.JqMU05, {
                                  total: rP(n.cpu_ms_total),
                                  wall: rP(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(rV, {
                      label: ee.intl.string(Z.default.LEJ5r3),
                      value: ee.intl.string(Z.default["2Ekb2b"]),
                      hint: ee.intl.string(Z.default.G0aq7i),
                  }),
            !r &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(rV, { label: ee.intl.string(Z.default.xvmL1D), value: rP(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(rV, { label: ee.intl.string(Z.default["4sQYwH"]), value: rM(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(rV, {
                label: ee.intl.string(Z.default.bQenOy),
                value: rM(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: ee.intl.formatToPlainString(Z.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(rV, { label: ee.intl.string(Z.default.xgpn4Y), value: rL(n.build) }),
        ],
    });
}
function ss(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: ee.intl.string(Z.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: ee.intl.string(Z.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: ee.intl.string(Z.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(rH, {
        title: ee.intl.string(Z.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(rV, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(rV, {
                                  label: ee.intl.formatToPlainString(Z.default.u7kJJ4, { env: n }),
                                  value: rT(l.r2_bytes),
                                  hint: ee.intl.formatToPlainString(
                                      l.r2_truncated ? Z.default.lH0oQw : Z.default.m9h02S,
                                      { count: rM(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(rK, {
                                      label: ee.intl.formatToPlainString(Z.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: rT,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function so(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: rY.Mf,
        children: [
            (0, a.jsx)(rB, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(sr, {
                            title: ee.intl.string(Z.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(sr, {
                            title: ee.intl.string(Z.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(ss, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(st, {
                                title: ee.intl.string(Z.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(sn, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(st, {
                                title: ee.intl.string(Z.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(sl, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(st, {
                                title: ee.intl.string(Z.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(sa, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(st, {
                                title: ee.intl.string(Z.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(si, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(rX, { analytics: t.analytics }),
                        (0, a.jsxs)(rH, {
                            title: ee.intl.string(Z.default.fQMpFp),
                            children: [
                                (0, a.jsx)(rV, {
                                    label: ee.intl.string(Z.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? rL(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(rV, {
                                    label: ee.intl.string(Z.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? rL(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
function su(e, t) {
    return String(e).padStart(t, "0");
}
function sd(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        a = `${su(l.getHours(), 2)}:${su(l.getMinutes(), 2)}:${su(l.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${su(l.getMilliseconds(), 3)}` : a;
}
var sc = n(811962);
let sm = new Map(),
    sf = new Map(),
    sh = 0,
    sp = 0;
async function sg(e, t, n) {
    let l = sh,
        a = sm.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < sp) return { status: "forbidden" };
    let i = sf.get(t);
    if (null != i) return i;
    let r = (async () => {
        try {
            let a,
                { ticket: i, baseUrl: r } = await (0, sc.d)(e),
                s = await fetch(
                    ((a = new URL(`${r}/agent/trace-detail`)).searchParams.set("ticket", i),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((sp = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let o = await s.json();
            if (!0 !== o.available || null == o.rich) return { status: "unavailable" };
            if (l !== sh) return { status: "failed" };
            var n = o.rich;
            for (sm.set(t, n); sm.size > 100;) {
                let e = sm.keys().next();
                if (!0 === e.done) break;
                sm.delete(e.value);
            }
            return { status: "loaded", rich: o.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    sf.set(t, r);
    let s = await r;
    return (sf.get(t) === r && sf.delete(t), n?.aborted === !0 ? { status: "failed" } : s);
}
function sx() {
    ((sh += 1), sm.clear(), sf.clear(), (sp = 0));
}
function sb(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function sv(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function sj(e) {
    switch (e) {
        case "subagent":
            return ee.intl.string(Z.default.PbKt9r);
        case "context":
            return ee.intl.string(Z.default["tNk/P2"]);
        case "tool":
            return ee.intl.string(Z.default.NBOJcw);
        case "delegated":
            return ee.intl.string(Z.default.QgrFdt);
        default:
            return ee.intl.string(Z.default.LsLVUy);
    }
}
function sy(e) {
    return "model" === e.kind
        ? "compaction" === e.agent
            ? "context"
            : "subagent" === e.agent
              ? "subagent"
              : "model"
        : "subagent" === e.agent
          ? "delegated"
          : "tool";
}
let sw = ["model", "tool", "subagent", "delegated", "context"];
function sk(e, t) {
    let n = t.trim().toLowerCase();
    return "" === n
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(sy(e)),
              t.join(" ").toLowerCase()).includes(n);
          });
}
function sC(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let sA = {
    model: "blurpleLight",
    subagent: "greenLight",
    context: "grayLight",
    tool: "grayMedium",
    delegated: "orangeLight",
};
function sN(e) {
    let { category: t } = e;
    return (0, a.jsx)(r2.v, { text: sj(t), variant: sA[t] });
}
var sS = n(28863);
let sE = ["arguments", "result", "usage", "diagnostics"];
var sI = n(39209);
let sT = { started: sI.Vf, ok: sI.mo, error: sI.Sr };
function sP(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: `${sI.Om} ${sT[t] ?? sI.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return ee.intl.string(Z.default["2wyRDK"]);
                case "error":
                    return ee.intl.string(Z.default["2Cu8n+"]);
                default:
                    return ee.intl.string(Z.default["6kgw6D"]);
            }
        })(t),
    });
}
function sM(e) {
    let { label: t, value: n } = e;
    return (0, a.jsxs)("div", {
        className: sI.wV,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", className: sI.D6, children: t }),
            (0, a.jsx)("div", { className: sI.zL, children: n }),
        ],
    });
}
function s_(e) {
    let { label: t, value: n } = e;
    return (0, a.jsx)(sM, {
        label: t,
        value: (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: n }),
    });
}
function sR(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: sI.WA, children: t });
}
function sL(e) {
    let { title: t, children: n } = e,
        l = i.useId();
    return (0, a.jsxs)("section", {
        "aria-labelledby": l,
        className: sI.xd,
        children: [
            (0, a.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: l,
                className: sI.Hm,
                children: t,
            }),
            n,
        ],
    });
}
function sD(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("details", {
        className: sI.XK,
        children: [
            (0, a.jsxs)("summary", {
                className: sI.It,
                children: [
                    (0, a.jsx)(nL._, { className: sI.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, a.jsx)("div", { className: sI.bG, children: n }),
        ],
    });
}
function sO(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, a.jsx)(sM, {
            label: t.key,
            value: (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-default",
                selectable: !0,
                children: t.value,
            }),
        });
    let n =
        null != t.chars
            ? ee.intl.formatToPlainString(Z.default.ib7All, { count: t.chars })
            : null != t.items
              ? ee.intl.formatToPlainString(Z.default.cIqKbA, { count: t.items })
              : null;
    return (0, a.jsx)(sM, {
        label: t.key,
        value: (0, a.jsxs)("div", {
            className: sI.Kv,
            children: [
                (0, a.jsx)(v.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return ee.intl.string(Z.default["6oDpz5"]);
                            case "content":
                                return ee.intl.string(Z.default.kSGhxQ);
                            default:
                                return ee.intl.string(Z.default.JwGtRz);
                        }
                    })(t.omitted ?? "content"),
                }),
                null == n
                    ? null
                    : (0, a.jsx)(v.E, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          tabularNumbers: !0,
                          children: n,
                      }),
            ],
        }),
    });
}
function sF(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)("div", {
                      className: sI.QR,
                      children: (0, a.jsx)(r2.v, { text: ee.intl.string(Z.default.LRIpHQ), variant: "orangeLight" }),
                  }),
                  t.map((e) =>
                      (0, a.jsx)(
                          sM,
                          {
                              label: e.key,
                              value: (0, a.jsxs)("div", {
                                  className: sI.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, a.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: sI.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, a.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: ee.intl.string(Z.default["+kQ+K3"]),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, a.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? ee.intl.string(Z.default.ijkkUh)
                                                        : ee.intl.formatToPlainString(Z.default.PRt8I0, {
                                                              count: e.chars,
                                                          }),
                                            }),
                                  ],
                              }),
                          },
                          e.key,
                      ),
                  ),
              ],
          });
}
function sz(e) {
    let { detail: t } = e,
        n =
            null == t || "loaded" === t.status || "forbidden" === t.status
                ? null
                : ee.intl.string(
                      "loading" === t.status
                          ? Z.default.SKbSyo
                          : "unavailable" === t.status
                            ? Z.default.tdq5Zn
                            : Z.default["Dw1JW/"],
                  );
    return null == n
        ? null
        : (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-subtle", className: sI.E7, children: n });
}
function sU(e) {
    let { projectId: t, entry: n, onClose: l, parent: r, onSelect: s, childCount: o } = e,
        u = (function (e) {
            let { childCount: t = 0, hasParent: n = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                l = new Set();
            if ("tool" === e.kind)
                (((null != e.fields && e.fields.length > 0) || null != e.detailId) && l.add("arguments"),
                    "started" !== e.status && l.add("result"));
            else
                (null != e.promptTokens ||
                    null != e.inputTokens ||
                    null != e.outputTokens ||
                    null != e.cacheReadTokens ||
                    null != e.costUsd ||
                    null != e.stopReason) &&
                    l.add("usage");
            return (
                (n || t > 0 || null != e.turnId || "" !== e.startedAt || "" !== e.id) && l.add("diagnostics"),
                sE.filter((e) => l.has(e))
            );
        })(n, { childCount: o, hasParent: null != r }),
        d = (function (e, t) {
            let [n, l] = i.useState(null);
            if (
                (i.useEffect(() => {
                    if (null == t || null != sm.get(t)) return;
                    let n = new AbortController();
                    return (
                        sg(e, t, n.signal).then((e) => {
                            n.signal.aborted || l({ detailId: t, detail: e });
                        }),
                        () => n.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let a = sm.get(t);
            return null != a ? { status: "loaded", rich: a } : n?.detailId === t ? n.detail : { status: "loading" };
        })(t, "tool" === n.kind ? n.detailId : void 0),
        c = "model" === n.kind ? n.model : n.tool,
        m = sd(n.startedAt, "millis"),
        f = sy(n),
        h = i.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), l());
            },
            [l],
        );
    return (0, a.jsxs)(tK.Ch, {
        className: sI._0,
        onKeyDown: h,
        role: "region",
        "aria-label": ee.intl.formatToPlainString(Z.default.Qiaeyz, { name: c }),
        children: [
            (0, a.jsx)("div", {
                className: sI.sy,
                children: (0, a.jsxs)("div", {
                    className: sI.HI,
                    children: [
                        (0, a.jsx)(sP, { status: n.status }),
                        (0, a.jsx)(sN, { category: f }),
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: sI.kc,
                            children: c,
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: sI.l5,
                            children: null == n.durationMs ? ee.intl.string(Z.default["2wyRDK"]) : sb(n.durationMs),
                        }),
                    ],
                }),
            }),
            null == n.error
                ? null
                : (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: sI.Um,
                      selectable: !0,
                      children: n.error,
                  }),
            u.includes("arguments") && "tool" === n.kind
                ? (0, a.jsxs)(sL, {
                      title: ee.intl.string(Z.default["G/4JST"]),
                      children: [
                          (n.fields ?? []).map((e) => (0, a.jsx)(sO, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, a.jsx)(sF, { entries: d.rich.args })
                              : null,
                          (0, a.jsx)(sz, { detail: d }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === n.kind
                ? (0, a.jsxs)(sL, {
                      title: ee.intl.string(Z.default.Dgg25Y),
                      children: [
                          (0, a.jsx)(s_, {
                              label: ee.intl.string(Z.default["U+OQCo"]),
                              value: ee.intl.formatToPlainString(Z.default.ib7All, { count: n.resultChars ?? 0 }),
                          }),
                          null == n.resultAdded
                              ? null
                              : (0, a.jsx)(s_, {
                                    label: ee.intl.string(Z.default["MQYS+n"]),
                                    value: `+${n.resultAdded} \u{2212}${n.resultRemoved ?? 0}`,
                                }),
                          !0 !== n.resultTruncated
                              ? null
                              : (0, a.jsx)(sM, {
                                    label: ee.intl.string(Z.default.t7GJFc),
                                    value: (0, a.jsx)(v.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: ee.intl.string(Z.default.ijkkUh),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, a.jsx)(sF, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            u.includes("usage") && "model" === n.kind
                ? (0, a.jsxs)(sL, {
                      title: ee.intl.string(Z.default.NXmRw1),
                      children: [
                          (0, a.jsxs)(sR, {
                              children: [
                                  null == n.promptTokens
                                      ? null
                                      : (0, a.jsx)(s_, {
                                            label: ee.intl.string(Z.default.iq3T1q),
                                            value: ee.intl.formatToPlainString(Z.default["6GQUgQ"], {
                                                tokens: sv(n.promptTokens),
                                            }),
                                        }),
                                  null == n.systemTokens
                                      ? null
                                      : (0, a.jsx)(s_, {
                                            label: ee.intl.string(Z.default.ZELAZn),
                                            value: ee.intl.formatToPlainString(Z.default.Te7mPn, {
                                                system: sv(n.systemTokens),
                                                tools: sv(n.toolsTokens ?? 0),
                                                toolCount: n.tools ?? 0,
                                                messages: sv(n.messagesTokens ?? 0),
                                                messageCount: n.messages ?? 0,
                                            }),
                                        }),
                                  null == n.inputTokens
                                      ? null
                                      : (0, a.jsx)(s_, {
                                            label: ee.intl.string(Z.default["LENc/T"]),
                                            value: String(n.inputTokens),
                                        }),
                                  null == n.outputTokens
                                      ? null
                                      : (0, a.jsx)(s_, {
                                            label: ee.intl.string(Z.default.ewRHwx),
                                            value: String(n.outputTokens),
                                        }),
                                  null == n.cacheReadTokens
                                      ? null
                                      : (0, a.jsx)(s_, {
                                            label: ee.intl.string(Z.default.heVFQD),
                                            value: ee.intl.formatToPlainString(Z.default.VO3gdd, {
                                                read: n.cacheReadTokens,
                                                write: n.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == n.costUsd
                                      ? null
                                      : (0, a.jsx)(s_, {
                                            label: ee.intl.string(Z.default.aBw2Vm),
                                            value: `$${n.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: sI.E7,
                              children: ee.intl.string(Z.default["foF/Bc"]),
                          }),
                      ],
                  })
                : null,
            u.includes("arguments") || u.includes("result")
                ? (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: sI.E7,
                      children: ee.intl.string(Z.default.o24IFK),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, a.jsx)(sD, {
                      title: ee.intl.string(Z.default["dix/W4"]),
                      children: (0, a.jsxs)(sR, {
                          children: [
                              null == r
                                  ? null
                                  : (0, a.jsx)(sM, {
                                        label: ee.intl.string(Z.default.soPsOJ),
                                        value: (0, a.jsx)(sS.Anchor, {
                                            onClick: () => s(r.id),
                                            children: (0, a.jsx)(v.E, {
                                                tag: "span",
                                                variant: "text-xs/normal",
                                                color: "none",
                                                children: "model" === r.kind ? r.model : r.tool,
                                            }),
                                        }),
                                    }),
                              0 === o
                                  ? null
                                  : (0, a.jsx)(s_, {
                                        label: ee.intl.string(Z.default.kNZBxr),
                                        value: ee.intl.formatToPlainString(Z.default["6LoCUh"], { count: o }),
                                    }),
                              null == n.turnId
                                  ? null
                                  : (0, a.jsx)(s_, { label: ee.intl.string(Z.default.bL1r5J), value: n.turnId }),
                              (0, a.jsx)(s_, { label: ee.intl.string(Z.default.Ndwr7X), value: n.id }),
                              null == m ? null : (0, a.jsx)(s_, { label: ee.intl.string(Z.default.sO8ghW), value: m }),
                              "model" !== n.kind || null == n.stopReason
                                  ? null
                                  : (0, a.jsx)(s_, { label: ee.intl.string(Z.default.VfYxPF), value: n.stopReason }),
                              "tool" !== n.kind || null == n.schema || 0 === n.schema.length
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(v.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: sI.Hm,
                                                children: ee.intl.string(Z.default.mSm8iy),
                                            }),
                                            n.schema.map((e) =>
                                                (0, a.jsx)(
                                                    s_,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? ee.intl.formatToPlainString(Z.default["6aSRPA"], {
                                                                  type: e.type,
                                                              })
                                                            : ee.intl.formatToPlainString(Z.default.q2B975, {
                                                                  type: e.type,
                                                              }),
                                                    },
                                                    e.name,
                                                ),
                                            ),
                                        ],
                                    }),
                          ],
                      }),
                  })
                : null,
            (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: sI.E7,
                children: ee.intl.string(Z.default.FloyTQ),
            }),
        ],
    });
}
let sG = { model: sI.WI, subagent: sI.uM, context: sI.eH, tool: sI.pw, delegated: sI.C8 };
function sq(e) {
    let { entries: t } = e,
        n = i.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        n = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let l of e) {
                        let e = sy(l);
                        ((t[e] += l.durationMs ?? 0), (n[e] += 1));
                    }
                    return sw.map((e) => ({ category: e, ms: t[e], calls: n[e] }));
                })(t),
            [t],
        ),
        l = n.reduce((e, t) => e + t.ms, 0);
    return (0, a.jsxs)("div", {
        className: sI.M0,
        children: [
            (0, a.jsx)("div", {
                className: sI.pZ,
                "aria-hidden": !0,
                children:
                    0 === l
                        ? null
                        : n.map((e) => {
                              let { category: t, ms: n } = e;
                              return 0 === n
                                  ? null
                                  : (0, a.jsx)(
                                        "div",
                                        {
                                            className: `${sI.dL} ${sG[t]}`,
                                            style: { "--custom-conjure-trace-segment-weight": String(n) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, a.jsx)("div", {
                className: sI.z4,
                role: "group",
                "aria-label": ee.intl.string(Z.default["Gioq+C"]),
                children: sw.map((e) => {
                    let t = n.find((t) => t.category === e),
                        i = t?.ms ?? 0,
                        r = t?.calls ?? 0,
                        s = 0 === l ? 0 : Math.round((i / l) * 100);
                    return (0, a.jsxs)(
                        "div",
                        {
                            className: sI.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${sI.A9} ${sG[e]}`, "aria-hidden": !0 }),
                                (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: sj(e) }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: ee.intl.formatToPlainString(Z.default["3dQ1ly"], { percent: s }),
                                }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: ee.intl.formatToPlainString(Z.default.Ow0k34, { count: r }),
                                }),
                                0 === i
                                    ? null
                                    : (0, a.jsx)(v.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: sb(i),
                                      }),
                            ],
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
function s$(e) {
    let { entry: t, selected: n, tabbable: l, onSelect: i, onKeyDown: r, nested: s } = e,
        o = sy(t),
        u = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? ee.intl.formatToPlainString(Z.default["6GQUgQ"], { tokens: sv(t.promptTokens) })
                : null != t.durationMs
                  ? sb(t.durationMs)
                  : null;
    return (0, a.jsxs)(j.D, {
        tag: "div",
        role: "option",
        "aria-selected": n,
        tabIndex: l ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${sI.nM} ${s ? sI.A5 : ""} ${"error" === t.status ? sI.Cr : ""} ${n ? sI.CZ : ""}`,
        onKeyDown: r,
        onClick: () => i(t.id),
        children: [
            (0, a.jsxs)("div", {
                className: sI.sU,
                children: [
                    (0, a.jsx)(sP, { status: t.status }),
                    (0, a.jsx)(sN, { category: o }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: sI.G9,
                        children: u,
                    }),
                    null == d
                        ? null
                        : (0, a.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: sI.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: sI.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: sI.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function sB(e) {
    var t;
    let { projectId: n, query: l } = e,
        r = (0, c.yK)([eR.Ay], () => eR.Ay.getTrace(n), [n]),
        s = (0, c.bG)([eR.Ay], () => eR.Ay.getHistoryState(n, "trace"));
    i.useEffect(() => sx, [n]);
    let [o, u] = i.useState(null),
        [d, m] = i.useState(40),
        [f, h] = i.useState(!1),
        p = i.useRef(null),
        g = i.useRef(null),
        x = i.useRef(null),
        b = i.useRef(null),
        j = i.useId(),
        y = i.useCallback((e) => {
            null != e && document.getElementById(`trace-${e}`)?.focus();
        }, []),
        w = i.useCallback((e) => u((t) => (t === e ? null : e)), []),
        k = i.useCallback((e) => {
            let t = p.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, nl.clamp)((e / t) * 100, 25, 75);
        }, []),
        C = i.useCallback((e) => {
            let t = p.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, nl.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        A = (0, rf.A)({
            resizableDomNodeRef: g,
            orientation: rf.R.VERTICAL_TOP,
            getClampedValue: C,
            onElementResize: (e) => m(k(e)),
            onElementResizeStart: () => h(!0),
            onElementResizeEnd: () => h(!1),
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        N = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), A(e));
            },
            [A],
        ),
        S = i.useCallback((e) => {
            let t =
                "ArrowUp" === e.key
                    ? 5
                    : "ArrowDown" === e.key
                      ? -5
                      : "Home" === e.key
                        ? 75
                        : "End" === e.key
                          ? -75
                          : null;
            null != t && (e.preventDefault(), m((e) => (0, nl.clamp)(e + t, 25, 75)));
        }, []),
        E = i.useCallback(() => {
            (u(null), y(o));
        }, [o, y]),
        I = i.useMemo(() => sk(r, l), [r, l]),
        T = i.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        n = null;
                    for (let l of e) {
                        let e = l.turnId ?? null;
                        ((null == n || n.turnId !== e) &&
                            ((n = { turnId: e, entries: [] }),
                            t.push({ turnId: e, entries: n.entries, startedAt: l.startedAt, spanMs: null })),
                            n.entries.push(l));
                    }
                    return t.map((e) => ({
                        ...e,
                        spanMs: (function (e) {
                            let t = 1 / 0,
                                n = -1 / 0;
                            for (let l of e) {
                                let e = Date.parse(l.startedAt);
                                Number.isNaN(e) ||
                                    ((t = Math.min(t, e)), null != l.durationMs && (n = Math.max(n, e + l.durationMs)));
                            }
                            return Number.isFinite(t) && Number.isFinite(n) ? Math.max(0, n - t) : null;
                        })(e.entries),
                    }));
                })(r)
                    .map((e, t) => ({ ...e, index: t, entries: sk(e.entries, l) }))
                    .filter((e) => e.entries.length > 0),
            [r, l],
        ),
        P = sC(I, o),
        M = P?.kind === "tool" ? sC(r, P.parentId ?? null) : null,
        _ = null == P ? 0 : ((t = P.id), r.filter((e) => "tool" === e.kind && e.parentId === t)).length,
        R = I[I.length - 1];
    i.useLayoutEffect(() => {
        if (null != o) return;
        let e = x.current?.getScrollerNode();
        null != e && (e.scrollTop = e.scrollHeight);
    }, [R, o]);
    let L = i.useCallback(
        (e) => {
            if (0 === I.length) return;
            let t = I.findIndex((e) => e.id === o);
            function n(t) {
                e.preventDefault();
                let n = Math.max(0, Math.min(I.length - 1, t));
                (u(I[n].id), document.getElementById(`trace-${I[n].id}`)?.scrollIntoView({ block: "nearest" }));
            }
            "ArrowDown" === e.key
                ? n(t + 1)
                : "ArrowUp" === e.key
                  ? n(-1 === t ? I.length - 1 : t - 1)
                  : "Home" === e.key
                    ? n(0)
                    : "End" === e.key
                      ? n(I.length - 1)
                      : "Escape" === e.key && null != o && (e.preventDefault(), u(null), y(o));
        },
        [I, o, y],
    );
    return 0 === r.length
        ? (0, a.jsx)("div", {
              className: sI.uP,
              ref: p,
              children: (0, a.jsx)(r3, {
                  state: s,
                  emptyTitle: ee.intl.string(Z.default["Tpvy/s"]),
                  emptyBody: ee.intl.string(Z.default.J0WcVA),
              }),
          })
        : (0, a.jsxs)("div", {
              className: `${sI.uP} ${f ? sI.F4 : ""}`,
              ref: p,
              children: [
                  (0, a.jsxs)("div", {
                      className: sI.DK,
                      children: [
                          (0, a.jsx)(sq, { entries: r }),
                          (0, a.jsx)(r5, { state: s }),
                          0 === I.length
                              ? (0, a.jsx)("div", {
                                    className: sI.Ie,
                                    children: (0, a.jsx)(v.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: ee.intl.string(Z.default.tDB4lC),
                                    }),
                                })
                              : (0, a.jsxs)(tK.Ch, {
                                    ref: x,
                                    className: sI.Ns,
                                    children: [
                                        (0, a.jsx)(r4, { state: s }),
                                        (0, a.jsx)("div", {
                                            ref: b,
                                            id: j,
                                            role: "listbox",
                                            "aria-label": ee.intl.string(Z.default.SGbiNE),
                                            className: sI.p_,
                                            children: T.map((e) => {
                                                let t = sd(e.startedAt),
                                                    n = ee.intl.formatToPlainString(Z.default.gPwGYA, {
                                                        number: e.index + 1,
                                                    });
                                                return (0, a.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, a.jsxs)("div", {
                                                                className: sI.mf,
                                                                children: [
                                                                    (0, a.jsx)(v.E, {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-muted",
                                                                        children: n,
                                                                    }),
                                                                    (0, a.jsx)(v.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-subtle",
                                                                        tabularNumbers: !0,
                                                                        children: t ?? "",
                                                                    }),
                                                                    null == e.spanMs
                                                                        ? null
                                                                        : (0, a.jsx)(v.E, {
                                                                              variant: "text-xs/normal",
                                                                              color: "text-subtle",
                                                                              tabularNumbers: !0,
                                                                              children: sb(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, a.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": n,
                                                                className: sI.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, a.jsx)(
                                                                        s$,
                                                                        {
                                                                            entry: e,
                                                                            selected: e.id === o,
                                                                            tabbable: e.id === (o ?? I[0]?.id),
                                                                            onSelect: w,
                                                                            onKeyDown: L,
                                                                            nested:
                                                                                "tool" === e.kind && null != e.parentId,
                                                                        },
                                                                        e.id,
                                                                    ),
                                                                ),
                                                            }),
                                                        ],
                                                    },
                                                    e.turnId ?? `ungrouped-${e.index}`,
                                                );
                                            }),
                                        }),
                                    ],
                                }),
                      ],
                  }),
                  null == P
                      ? null
                      : (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)("div", {
                                    role: "separator",
                                    "aria-orientation": "horizontal",
                                    "aria-label": ee.intl.string(Z.default.DtSORy),
                                    "aria-valuenow": Math.round(d),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: sI.b1,
                                    onPointerDown: N,
                                    onKeyDown: S,
                                }),
                                (0, a.jsx)("div", {
                                    ref: g,
                                    className: sI.Or,
                                    style: { "--custom-conjure-trace-detail-share": String(d) },
                                    children: (0, a.jsx)(sU, {
                                        projectId: n,
                                        entry: P,
                                        parent: M,
                                        childCount: _,
                                        onSelect: u,
                                        onClose: E,
                                    }),
                                }),
                            ],
                        }),
              ],
          });
}
var sH = n(77729),
    sV = n(723702),
    sK = n(264572).Buffer;
async function sW(e, t) {
    if (sV.isPlatformEmbedded) {
        let n = sK.from(await e.arrayBuffer());
        if ("function" == typeof sH.A.fileManager.saveWithDialog2) await sH.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await sH.A.fileManager.saveWithDialog(n, t);
            } catch {}
        return;
    }
    let n = URL.createObjectURL(e);
    try {
        let e = document.createElement("a");
        ((e.href = n), (e.download = t), (e.rel = "noopener"), e.click());
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(n), 0);
    }
}
function sX(e) {
    let { projectId: t, query: n, onQueryChange: l } = e,
        r = (0, c.yK)([eR.Ay], () => eR.Ay.getTrace(t), [t]),
        s = i.useRef(null),
        o = i.useCallback(() => {
            sW(
                new Blob(
                    [
                        JSON.stringify(
                            {
                                kind: "vibegrations.trace",
                                version: 1,
                                project_id: t,
                                exported_at: new Date().toISOString(),
                                note: 'Redacted developer trace. Tool arguments, results and prompts are reported as sizes and allowlisted technical values only; token counts marked "estimated" are a chars/4 heuristic measured before sending.',
                                entries: r,
                            },
                            null,
                            2,
                        ),
                    ],
                    { type: "application/json" },
                ),
                `vibegrations-trace-${t}.json`,
            ).catch((e) => {
                console.error("[vibegrations] trace export failed", t, e);
            });
        }, [r, t]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: sI.ED,
                children: (0, a.jsx)(r6.I, {
                    query: n,
                    onChange: l,
                    onClear: () => l(""),
                    size: "sm",
                    placeholder: ee.intl.string(Z.default["EY8/Mt"]),
                    "aria-label": ee.intl.string(Z.default["EY8/Mt"]),
                }),
            }),
            (0, a.jsx)(lK.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: lK.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(lW.W, {
                        "data-menu-migrated": !0,
                        navId: `conjure-trace-actions-${t}`,
                        "aria-label": ee.intl.string(ee.t.ogxXGq),
                        onClose: n,
                        onSelect: n,
                        children: (0, a.jsx)(lX.rX, {
                            children: (0, a.jsx)(lX.Dr, {
                                id: "export",
                                label: ee.intl.string(Z.default.WXrPRZ),
                                disabled: 0 === r.length,
                                action: o,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: n } = t;
                    return (0, a.jsx)(iG.K, {
                        ...e,
                        buttonRef: s,
                        icon: aW.MoreHorizontalIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": ee.intl.string(ee.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        "aria-expanded": n,
                    });
                },
            }),
        ],
    });
}
var sY = n(932761);
function sJ(e) {
    let { projectId: t, onClose: n } = e,
        [l, r] = i.useState("logs"),
        [s, o] = i.useState(""),
        u = (0, c.bG)([rb.A], () => rb.A.isDeveloper),
        d = (0, c.bG)([rI], () => rI.getStatus(t), [t]),
        m = (0, c.bG)([rI], () => rI.getFetchState(t), [t]);
    i.useEffect(() => {
        (0, Q.R7)(t);
    }, [t]);
    let f = i.useCallback(() => (0, Q.R7)(t), [t]),
        h = i.useCallback(() => {
            (0, rv.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: rI.getStatus(t),
                        last_turn_usage: rI.getLastTurnUsage(t),
                        last_compaction: rI.getLastCompaction(t),
                        last_compaction_decline: rI.getLastCompactionDecline(t),
                        model_calls: rI.getModelCalls(t),
                        logs: eR.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, g.P)((0, x.o)(ee.intl.string(Z.default.wI6fhl), b.Ck.SUCCESS)),
            );
        }, [t]),
        p = ee.intl.string(Z.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: sY.nd,
        "aria-label": p,
        children: [
            (0, a.jsxs)(tf.Ay, {
                "aria-label": p,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(tf.Ay.Icon, {
                            icon: rg.CopyIcon,
                            tooltip: ee.intl.string(Z.default.TkHqy2),
                            onClick: h,
                        }),
                        (0, a.jsx)(tf.Ay.Icon, { icon: R.P, tooltip: ee.intl.string(ee.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(tf.Ay.ChannelIcon, { icon: N.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(tf.Ay.Title, { children: p }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: sY.rf,
                children: [
                    (0, a.jsxs)(rx.V, {
                        selectedItem: l,
                        type: "top",
                        onItemSelect: (e) => r(e),
                        "aria-label": ee.intl.string(Z.default.RvvWIh),
                        className: sY.vR,
                        children: [
                            (0, a.jsx)(rx.V.Item, { id: "logs", children: ee.intl.string(Z.default["+VRYCm"]) }),
                            (0, a.jsx)(rx.V.Item, { id: "worker", children: ee.intl.string(Z.default["50D0FZ"]) }),
                            (0, a.jsx)(rx.V.Item, { id: "agent", children: ee.intl.string(Z.default.UkbTK1) }),
                            u
                                ? (0, a.jsx)(rx.V.Item, { id: "trace", children: ee.intl.string(Z.default.O6nNjP) })
                                : null,
                        ],
                    }),
                    "logs" === l
                        ? (0, a.jsx)(se, { projectId: t })
                        : "worker" === l
                          ? (0, a.jsx)(so, { status: d, fetchState: m, onRefresh: f })
                          : "trace" === l && u
                            ? (0, a.jsxs)("div", {
                                  className: sY.uP,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: sY.XH,
                                          children: (0, a.jsx)(sX, { projectId: t, query: s, onQueryChange: o }),
                                      }),
                                      (0, a.jsx)(sB, { projectId: t, query: s }),
                                  ],
                              })
                            : (0, a.jsx)(r0, { projectId: t, status: d, fetchState: m, onRefresh: f, traceVisible: u }),
                ],
            }),
        ],
    });
}
var sQ = n(333007),
    sZ = n(365912),
    s0 = n(775121),
    s2 = n(387707);
function s1(e) {
    let {
            projectId: t,
            at: n,
            bounds: l,
            kind: r,
            value: o,
            onChange: u,
            onSubmit: d,
            onDismiss: c,
            canSubmit: m,
            closing: f,
            onUploadFile: h,
        } = e,
        {
            drafts: p,
            addFiles: g,
            pasteFiles: x,
            removeDraft: b,
            settled: v,
            takeRefs: j,
        } = as({ projectId: t, surface: "design", onUploadFile: h }),
        w = i.useRef(null),
        k = (m || p.length > 0) && v && !f,
        C = i.useCallback(() => {
            if (!k) return;
            let e = j();
            d(e.length > 0 ? e : void 0);
        }, [k, j, d]),
        [A, N] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => N(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let S = i.useRef(null),
        [E, I] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = S.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => I({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let T = E?.height ?? 44,
        P = l.left + 8,
        M = l.top + 8,
        _ = Math.max(n.x, P),
        R = Math.min(Math.max(n.y + 32 + 4, M), Math.max(M, l.top + l.height - T - 8));
    return (0, a.jsxs)("div", {
        ref: S,
        className: s()(s2.M0, { [s2.ho]: A && !f, [s2.ET]: f }),
        style: { left: _, top: R },
        "data-testid": "conjure-design-compose-bar",
        children: [
            (0, a.jsx)("input", {
                ref: w,
                type: "file",
                multiple: !0,
                className: s2.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (g(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, a.jsx)(y.m, {
                position: "bottom",
                text: ee.intl.string(Z.default.lgvqSB),
                ariaHidden: !0,
                children: (0, a.jsx)("button", {
                    type: "button",
                    className: s2.tY,
                    onClick: () => w.current?.click(),
                    "aria-label": ee.intl.string(Z.default.lgvqSB),
                    children: (0, a.jsx)(lV.H, { size: "custom", color: "currentColor", className: s2.WW }),
                }),
            }),
            (0, a.jsx)(lQ.y, {
                autoFocus: !0,
                rows: 1,
                className: s2.hF,
                value: o,
                placeholder: "" === r ? ee.intl.string(Z.default.MPPV1Q) : `Edit ${r}`,
                "aria-label": ee.intl.string(Z.default.KCYqWL),
                onChange: (e) => u(e.target.value),
                onPaste: f ? void 0 : x,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), c());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), C());
                },
            }),
            p.length > 0
                ? (0, a.jsx)("div", {
                      className: s2.ZO,
                      children: p.map((e) => (0, a.jsx)(ao, { draft: e, onRemove: b }, e.localId)),
                  })
                : null,
        ],
    });
}
var s6 = n(556907);
function s9(e) {
    if (null == e || "string" != typeof e.ref || "string" != typeof e.tag) return null;
    let t = e.rect;
    if (
        null == t ||
        "number" != typeof t.x ||
        "number" != typeof t.y ||
        "number" != typeof t.width ||
        "number" != typeof t.height
    )
        return null;
    let n = {
        ref: e.ref,
        role: "string" == typeof e.role ? e.role : "",
        name: "string" == typeof e.name ? e.name : "",
        tag: e.tag,
        rect: { x: t.x, y: t.y, width: t.width, height: t.height },
    };
    return (
        "string" == typeof e.value && (n.value = e.value),
        "string" == typeof e.path && "" !== e.path && (n.path = e.path),
        n
    );
}
function s5(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = s9(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
n(389715);
var s3 = n(357585),
    s4 = n(381657);
let s8 = { x: 25, y: 21 };
function s7(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function oe(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function ot(e, t, n, l) {
    let a = oe(e, n, l);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function on(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function ol(e) {
    let t = e.snapshot ?? e.results.find((e) => null != e.snapshot)?.snapshot;
    if (null == t || !Array.isArray(t.elements)) return null;
    let n = t.viewport?.width,
        l = t.viewport?.height;
    return "number" != typeof n || "number" != typeof l || n < 1
        ? null
        : {
              elements: t.elements,
              viewport: { width: n, height: l },
              url: "string" == typeof t.url ? t.url : "",
              title: "string" == typeof t.title ? t.title : "",
          };
}
function oa(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        o = null != n && n === l ? t : null,
        { active: u, annotations: d } = eE(o),
        m = (0, eT.Zv)(o),
        f = (0, lm.useHasAnyModalOpen)(),
        h = (0, c.bG)([ez.default], () => ez.default.getCurrentUser()),
        p = h?.id ?? null,
        [g, x] = i.useState(null),
        [b, j] = i.useState(null),
        [y, w] = i.useState(!1),
        [k, A] = i.useState(!1),
        [N, S] = i.useState(null),
        [E, I] = i.useState(!1),
        T = i.useRef(null),
        M = i.useRef(null),
        _ = i.useRef(null),
        [R, L] = i.useState(null),
        [D, O] = i.useState(!1),
        [F, z] = i.useState(null),
        [U, G] = i.useState(null),
        q = i.useRef(!1),
        [$, B] = i.useState(!1),
        [H, V] = i.useState(null),
        K = u && !m && !f;
    null == F || (K && F.projectId === o) || z(null);
    let W = F?.projectId ?? null;
    (i.useEffect(() => {
        if (null != W) return () => ne(W, "design");
    }, [W]),
        i.useEffect(() => {
            if (!K) return;
            function e() {
                let e = (function (e) {
                    if (null == e) return null;
                    let t = e.getBoundingClientRect();
                    return t.width < 1 || t.height < 1
                        ? null
                        : { left: t.left, top: t.top, width: t.width, height: t.height };
                })(r());
                x((t) => (s7(t, e) ? t : e));
            }
            e();
            let t = window.setInterval(e, 250);
            return (
                window.addEventListener("resize", e),
                () => {
                    (window.clearInterval(t), window.removeEventListener("resize", e));
                }
            );
        }, [K, r]),
        i.useEffect(() => {
            if (!K || null == o) return;
            let e = !0,
                t = r();
            if (null == t) return void A(!0);
            (w(!0), A(!1));
            let n = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, s6.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        w(!1);
                        let n = "completed" === t.status ? ol(t.response) : null;
                        null == n ? A(!0) : (j(n), eA(o, { url: n.url, title: n.title, viewport: n.viewport }));
                    },
                    () => {
                        e && (w(!1), A(!0));
                    },
                ),
                () => {
                    e = !1;
                }
            );
        }, [K, r, o]));
    let X = i.useRef(null);
    (i.useEffect(() => {
        if (!K || null == g || null == o) return;
        if (null == b) {
            X.current = g;
            return;
        }
        if (s7(X.current, g)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            X.current = g;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, s6.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !en.current) return;
                        let l = ol(e.response);
                        null != l && (j(l), eA(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let a = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let i = s9(e.element);
                            null != i && a.set(l.id, i);
                        }),
                            (n = ew(o)).active &&
                                0 !== a.size &&
                                ek(o, {
                                    ...n,
                                    annotations: n.annotations.map((e) => {
                                        let t = a.get(e.id);
                                        return null == t ? e : { ...e, target: t };
                                    }),
                                }));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [K, g, b, d, o, r]),
        i.useEffect(() => {
            if (!K)
                return () => {
                    (S(null), z(null), V(null), j(null));
                };
        }, [K]));
    let Y = i.useRef(null),
        J = i.useRef(null),
        et = i.useRef(!1),
        en = i.useRef(!1);
    i.useEffect(() => {
        ((en.current = K), K || ((Y.current = null), (J.current = null), (_.current = null), I(!1)));
    }, [K]);
    let el = i.useCallback(
            function e() {
                if (et.current) return;
                let t = Y.current;
                if (null == t) return;
                Y.current = null;
                let n = r();
                null != n &&
                    ((et.current = !0),
                    (0, s3.W)(
                        n,
                        "control",
                        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
                        { timeoutMs: 5500, label: "inspect" },
                    )
                        .then(s5, () => ({ status: "failed" }))
                        .then((t) => {
                            if (((et.current = !1), en.current)) {
                                if ("picked" !== t.status || od(t.target, eo.current.rect, eo.current.scale))
                                    "picked" === t.status || "none" === t.status
                                        ? S(null)
                                        : "unsupported" === t.status && O(!0);
                                else {
                                    let e = ef(t.target);
                                    (L((t) => (ou(t, e) ? t : e)),
                                        S((e) => {
                                            var n;
                                            return ((n = t.target),
                                            null == e || null == n
                                                ? e === n
                                                : e.ref === n.ref &&
                                                  e.rect.x === n.rect.x &&
                                                  e.rect.y === n.rect.y &&
                                                  e.rect.width === n.rect.width &&
                                                  e.rect.height === n.rect.height)
                                                ? e
                                                : t.target;
                                        }));
                                }
                                e();
                            }
                        }));
            },
            [r],
        ),
        ea = i.useCallback(() => {
            if (null == F) return;
            let e = !q.current;
            (G({ at: F.at, label: F.label, draft: F.draft, instant: e }), B(e), z(null));
        }, [F]);
    (i.useEffect(() => {
        if (!$) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => B(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [$]),
        i.useEffect(() => {
            if (null == U) return;
            let e = setTimeout(() => G(null), os);
            return () => clearTimeout(e);
        }, [U]));
    let ei = null == b || null == g || b.viewport.width < 1 ? 1 : g.width / b.viewport.width,
        er = null != b || k,
        es = i.useMemo(() => b?.elements ?? [], [b]),
        eo = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        eo.current = { rect: g, scale: ei };
    }, [g, ei]);
    let eu = i.useCallback(
            (e, t, n) => {
                null != o &&
                    (ne(o, "design"),
                    V(null),
                    (q.current = !1),
                    z({ projectId: o, target: e, anchor: t, draft: "", at: n, label: ef(e) }));
            },
            [o],
        ),
        ed = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / ei, y: (e.clientY - t.top) / ei }), [ei]),
        eb = i.useCallback(() => {
            let e = _.current;
            if (null == e) return;
            let t = T.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = M.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(eb);
    let ev = i.useCallback(
            (e) => {
                if (null == g || null != H) return;
                if (((_.current = { x: e.clientX, y: e.clientY }), eb(), I(!0), null != F)) {
                    (Math.abs(e.clientX - F.at.x) > oo || Math.abs(e.clientY - F.at.y) > oo) && (q.current = !0);
                    return;
                }
                if (!er) return void S(null);
                let t = ed(e, g);
                if (D) {
                    let e = (function (e, t, n) {
                            let l = null,
                                a = 1 / 0;
                            for (let i of e) {
                                let { x: e, y: r, width: s, height: o } = i.rect;
                                if (s < 1 || o < 1 || t < e || n < r || t > e + s || n > r + o) continue;
                                let u = s * o;
                                u < a && ((l = i), (a = u));
                            }
                            return l;
                        })(es, t.x, t.y),
                        n = null != e && od(e, g, ei) ? null : e;
                    if (null != n) {
                        let e = ef(n);
                        L((t) => (ou(t, e) ? t : e));
                    }
                    S((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = J.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((J.current = n), (Y.current = n), el());
            },
            [g, ei, er, ed, D, es, F, H, eb, el],
        ),
        ej = i.useCallback(() => {
            (I(!1), S(null), (J.current = null), (Y.current = null));
        }, []);
    i.useEffect(() => {
        if (!K || !E || !er || D || null != F || null != H) return;
        let e = _.current,
            { rect: t, scale: n } = eo.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((J.current = l), (Y.current = l), el());
    }, [K, E, er, D, F, H, el]);
    let ey = i.useCallback(
            (e) => {
                if (null != F || null != H) {
                    (ea(), V(null));
                    return;
                }
                if (null == N || null == g) return;
                let t = ed(e, g);
                eu(
                    N,
                    (function (e, t, n) {
                        let { x: l, y: a, width: i, height: r } = e.rect;
                        return i < 1 || r < 1
                            ? ec
                            : { x: Math.min(1, Math.max(0, (t - l) / i)), y: Math.min(1, Math.max(0, (n - a) / r)) };
                    })(N, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [N, g, ed, F, H, eu, ea],
        ),
        eS = i.useCallback(() => {
            null != o && (S(null), eC(o));
        }, [o]),
        eI = i.useCallback(() => {
            null != o &&
                (null != F
                    ? ea()
                    : H?.confirmingRemove === !0
                      ? V({ ...H, confirmingRemove: !1 })
                      : null != H
                        ? V(null)
                        : eS());
        }, [o, F, H, ea, eS]),
        eP = i.useRef(eI),
        eM = i.useRef(eS);
    i.useLayoutEffect(() => {
        ((eP.current = eI), (eM.current = eS));
    });
    let e_ = i.useRef(null);
    i.useEffect(() => {
        if (K)
            return (
                s0.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        s0.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), eP.current());
        }
        function t(e) {
            let t = e.target;
            (0, iF.vq)(t) &&
                e_.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, sZ.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                eM.current();
        }
    }, [K, s]);
    let eR = i.useCallback(
            (e) => {
                if (null == o) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), eI());
                    return;
                }
                if (null != F || null != H || 0 === es.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == N ? -1 : es.findIndex((e) => e.ref === N.ref);
                    S(es[(n + (t ? 1 : -1) + es.length) % es.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != N &&
                    (e.preventDefault(),
                    eu(N, ec, { x: (g?.left ?? 0) + N.rect.x * ei, y: (g?.top ?? 0) + N.rect.y * ei }));
            },
            [o, F, H, es, N, eu, eI, g, ei],
        ),
        eL = i.useCallback(
            (e) => {
                null == o ||
                    null == F ||
                    ((em(F.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, Q.dv)(
                            o,
                            (function (e, t) {
                                let { kind: n, name: l } = ef(e),
                                    a = [n, l].filter((e) => "" !== e).join(": ");
                                return `${eg}${a}${ex}${ep(e)}
${t.trim()}`;
                            })(F.target, F.draft),
                            e,
                        ),
                        ea(),
                        S(null)));
            },
            [o, F, ea],
        ),
        eD = i.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, Q.vX)(o, e)), [o]),
        eO = i.useCallback(() => {
            if (null != o && null != H && null != p && em(H.draft)) {
                var e, t;
                let n, l;
                ((e = H.id),
                    (t = H.draft.trim()),
                    null != (l = (n = ew(o)).annotations.find((t) => t.id === e)) &&
                        eN(l, p) &&
                        ek(o, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    V({ ...H, editing: !1 }));
            }
        }, [o, H, p]),
        eF = i.useCallback(() => {
            if (null != o && null != H && null != p) {
                var e;
                let t, n;
                ((e = H.id),
                    null != (n = (t = ew(o)).annotations.find((t) => t.id === e)) &&
                        eN(n, p) &&
                        ek(o, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    V(null));
            }
        }, [o, H, p]),
        eU = u
            ? y
                ? ee.intl.string(Z.default["Eb/YV9"])
                : k
                  ? ee.intl.string(Z.default.FD30bh)
                  : ee.intl.formatToPlainString(Z.default.dTSqLF, { count: d.length })
            : "",
        eG = K && null != g,
        eq = E && null == H,
        e$ = null == H ? null : d.find((e) => e.id === H.id),
        eB = F?.target ?? e$?.target ?? null,
        eH = F ?? U,
        eV = F ?? (U?.instant === !0 ? null : U),
        eK =
            null != e$ && null != g
                ? (function (e, t) {
                      let { left: n, top: l } = on(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(ot(e$.target, e$.anchor, g, ei), g)
                : null;
    return (0, sQ.createPortal)(
        (0, a.jsxs)("div", {
            ref: e_,
            className: s4.Li,
            children: [
                (0, a.jsx)("div", {
                    className: s4.y4,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "conjure-design-announcer",
                    children: eU,
                }),
                eG
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: s4.MT,
                                  style: { left: g.left, top: g.top, width: g.width, height: g.height },
                                  "data-plain-cursor": eq ? void 0 : "",
                                  "data-testid": "conjure-design-surface",
                                  role: "application",
                                  "aria-label": ee.intl.string(Z.default["speb/9"]),
                                  tabIndex: 0,
                                  onMouseMove: ev,
                                  onMouseLeave: ej,
                                  onClick: ey,
                                  onKeyDown: eR,
                              }),
                              null != N && null == F && null == H ? (0, a.jsx)(oc, { box: oe(N, g, ei) }) : null,
                              (0, a.jsx)("div", {
                                  ref: T,
                                  className: s4.aZ,
                                  children: (0, a.jsx)("div", {
                                      className: s4.xz,
                                      "data-shown": null != N && null == H && null == F ? "" : void 0,
                                      "data-instant": $ ? "" : void 0,
                                      children: (0, a.jsxs)(v.E, {
                                          variant: "text-xs/medium",
                                          className: s4.Ux,
                                          children: [
                                              null == R
                                                  ? null
                                                  : (0, a.jsx)("span", { className: s4.Tl, children: R.kind }),
                                              null == R || "" === R.name
                                                  ? null
                                                  : (0, a.jsxs)("span", { className: s4.kh, children: [" ", R.name] }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, a.jsx)("div", {
                                  ref: M,
                                  className: s4.Y,
                                  children: eq ? (0, a.jsx)("div", { className: s4.u }) : null,
                              }),
                              null == eV
                                  ? null
                                  : (0, a.jsx)("div", {
                                        className: s4.aZ,
                                        style: { transform: `translate3d(${eV.at.x + 20}px, ${eV.at.y + 20}px, 0)` },
                                        children: (0, a.jsx)("div", {
                                            className: s4.xz,
                                            "data-shown": "",
                                            "data-locked": "",
                                            "data-closing": null == F ? "" : void 0,
                                            children: (0, a.jsxs)(v.E, {
                                                variant: "text-xs/medium",
                                                className: s4.Ux,
                                                children: [
                                                    (0, a.jsx)("span", { className: s4.Tl, children: eV.label.kind }),
                                                    "" === eV.label.name
                                                        ? null
                                                        : (0, a.jsxs)("span", {
                                                              className: s4.kh,
                                                              children: [" ", eV.label.name],
                                                          }),
                                                ],
                                            }),
                                        }),
                                    }),
                              null != eB
                                  ? (0, a.jsx)("div", { className: s4.D0, style: oe(eB, g, ei), "aria-hidden": !0 })
                                  : null,
                              d.map((e, t) => {
                                  let n = ot(e.target, e.anchor, g, ei),
                                      l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                  return (0, a.jsx)(
                                      "button",
                                      {
                                          type: "button",
                                          className: s4.xL,
                                          style: { ...on(n, g), width: 24, height: 24 },
                                          "aria-label": ee.intl.formatToPlainString(Z.default.SxaIQA, {
                                              index: t + 1,
                                              target: eh(e.target),
                                          }),
                                          "aria-expanded": H?.id === e.id,
                                          "data-testid": "conjure-design-marker",
                                          onMouseEnter: () => {
                                              null == F && V(l);
                                          },
                                          onFocus: () => {
                                              null == F && V(l);
                                          },
                                          onClick: (e) => {
                                              (e.stopPropagation(), ea(), V(l));
                                          },
                                          children: (0, a.jsx)(oi, { authorId: e.authorId }),
                                      },
                                      e.id,
                                  );
                              }),
                              null == eH || null == o
                                  ? null
                                  : (0, a.jsx)(s1, {
                                        projectId: o,
                                        at: { x: eH.at.x + 20, y: eH.at.y + 20 },
                                        bounds: g,
                                        kind: eH.label.kind,
                                        value: eH.draft,
                                        canSubmit: null != F && em(eH.draft),
                                        onChange: (e) => {
                                            null != F && z({ ...F, draft: e });
                                        },
                                        onSubmit: eL,
                                        onDismiss: ea,
                                        onUploadFile: eD,
                                        closing: null == F,
                                    }),
                              null != e$ && null != H && null != eK
                                  ? (0, a.jsxs)(or, {
                                        point: eK,
                                        frame: g,
                                        authorId: e$.authorId,
                                        title: eh(e$.target),
                                        testId: "conjure-design-popout",
                                        onDismiss: () => {
                                            H.confirmingRemove ? V({ ...H, confirmingRemove: !1 }) : V(null);
                                        },
                                        onMouseLeave: () => {
                                            H.editing || H.confirmingRemove || V(null);
                                        },
                                        children: [
                                            H.editing
                                                ? (0, a.jsx)(P.f, {
                                                      autoFocus: !0,
                                                      label: ee.intl.string(Z.default.KCYqWL),
                                                      hideLabel: !0,
                                                      value: H.draft,
                                                      maxLength: 1e3,
                                                      rows: 3,
                                                      onChange: (e) => V({ ...H, draft: e }),
                                                      onKeyDown: (e) => {
                                                          "Enter" !== e.key || e.shiftKey || (e.preventDefault(), eO());
                                                      },
                                                  })
                                                : (0, a.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-default",
                                                      className: s4.aC,
                                                      children: e$.comment,
                                                  }),
                                            eN(e$, p)
                                                ? (0, a.jsx)("div", {
                                                      className: s4.eB,
                                                      children: H.confirmingRemove
                                                          ? (0, a.jsxs)(a.Fragment, {
                                                                children: [
                                                                    (0, a.jsx)(v.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-muted",
                                                                        className: s4.nv,
                                                                        children: ee.intl.string(Z.default.wOHvts),
                                                                    }),
                                                                    (0, a.jsx)(C.$, {
                                                                        variant: "secondary",
                                                                        size: "sm",
                                                                        text: ee.intl.string(Z.default["W/HWvP"]),
                                                                        onClick: () =>
                                                                            V({ ...H, confirmingRemove: !1 }),
                                                                    }),
                                                                    (0, a.jsx)(C.$, {
                                                                        variant: "critical-primary",
                                                                        size: "sm",
                                                                        text: ee.intl.string(Z.default.friIzR),
                                                                        "data-testid": "conjure-design-remove-confirm",
                                                                        onClick: eF,
                                                                    }),
                                                                ],
                                                            })
                                                          : (0, a.jsxs)(a.Fragment, {
                                                                children: [
                                                                    (0, a.jsx)(C.$, {
                                                                        variant: "critical-secondary",
                                                                        size: "sm",
                                                                        text: ee.intl.string(Z.default.friIzR),
                                                                        onClick: () =>
                                                                            V({
                                                                                ...H,
                                                                                editing: !1,
                                                                                confirmingRemove: !0,
                                                                            }),
                                                                    }),
                                                                    H.editing
                                                                        ? (0, a.jsx)(C.$, {
                                                                              variant: "primary",
                                                                              size: "sm",
                                                                              disabled: !em(H.draft),
                                                                              text: ee.intl.string(Z.default.iicRP9),
                                                                              onClick: eO,
                                                                          })
                                                                        : (0, a.jsx)(C.$, {
                                                                              variant: "secondary",
                                                                              size: "sm",
                                                                              text: ee.intl.string(Z.default["6eW9lg"]),
                                                                              onClick: () =>
                                                                                  V({
                                                                                      ...H,
                                                                                      editing: !0,
                                                                                      draft: e$.comment,
                                                                                  }),
                                                                          }),
                                                                ],
                                                            }),
                                                  })
                                                : null,
                                        ],
                                    })
                                  : null,
                          ],
                      })
                    : null,
            ],
        }),
        document.body,
    );
}
function oi(e) {
    let { authorId: t } = e,
        n = (0, c.bG)([ez.default], () => ez.default.getUser(t), [t]);
    return (0, a.jsx)(nG.eu, {
        src: null == n ? null : nB.Ay.getUserAvatarURL(n),
        size: nq._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function or(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: d, authorId: c, title: m, testId: f, onDismiss: h, onMouseLeave: p, children: g } = e,
        x = i.useRef(null),
        b = i.useRef(null),
        [j, y] = i.useState(s8);
    i.useLayoutEffect(() => {
        let e = x.current?.getBoundingClientRect(),
            t = b.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: w,
            top: k,
            originX: C,
            originY: A,
        } = ((n = Math.max((t = d.left + 8), d.left + d.width - 300 - 8)),
        (r = Math.max((l = d.top + 8), d.top + d.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - j.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - j.y, l), r)), originX: u.x - s, originY: u.y - o }),
        N = { left: w, top: k, "--custom-conjure-card-origin-x": `${C}px`, "--custom-conjure-card-origin-y": `${A}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: s4.Nr,
        style: N,
        "data-testid": f,
        onMouseLeave: p,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: s4.MY,
                children: [
                    (0, a.jsx)("span", { ref: b, className: s4.ip, children: (0, a.jsx)(oi, { authorId: c }) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: s4.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: s4.zI, children: g }),
        ],
    });
}
let os = 300,
    oo = 2;
function ou(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function od(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        a = t.height / n;
    return !(l < 1) && !(a < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * a;
}
function oc(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: s4.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var om = n(693976),
    of = n(227076),
    oh = n(522854),
    op = n(506902),
    og = n(83963);
function ox(e) {
    let { progress: t } = e,
        { Component: n } = tC(1500),
        l = K.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: og.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: og.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function ob(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        o = (0, c.bG)([oh.A], () => (s ? oh.A.getLiveReload(t) : null), [s, t]),
        u = (0, q.A)(n, r)?.id ?? null,
        d = o?.phase ?? null,
        m = (function (e, t) {
            let n = (0, of.dv)(e),
                [l, a] = i.useState(null),
                [r, s] = i.useState(n);
            r !== n && (s(n), a(null == n ? (0, of.QP)(e, r) : null));
            let o = (0, c.bG)(
                    [tx.A],
                    () => {
                        let e = tx.A.getFrame(t);
                        return (0, e4.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [t],
                ),
                u = i.useRef(o),
                d = i.useRef(!1);
            return (
                i.useEffect(() => {
                    ((u.current = o), o && (d.current = !0));
                }, [o]),
                i.useEffect(() => {
                    if (null == l) return;
                    function e() {
                        return a(null);
                    }
                    function n(n) {
                        null != n.target && n.target === (0, op.o)(null, t) && e();
                    }
                    ((d.current = u.current), document.addEventListener("load", n, !0));
                    let i = window.setTimeout(() => {
                            d.current || e();
                        }, 4e3),
                        r = window.setTimeout(e, 15e3);
                    return () => {
                        (document.removeEventListener("load", n, !0), window.clearTimeout(i), window.clearTimeout(r));
                    };
                }, [l, t]),
                l
            );
        })(d, u),
        f = (0, of.h_)(d, o?.step ?? null, m);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(w.A, { tag: "div", role: "status", "aria-live": "polite", children: f?.title ?? "" }),
            null != f
                ? (0, a.jsx)("div", {
                      className: og.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(ox, { progress: f }),
                  })
                : null,
        ],
    });
}
var ov = n(175841),
    oj = n(259260),
    oy = n(475815);
function ow(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function ok(e) {
    let t;
    return (
        null != e &&
        ((t =
            document.fullscreenElement ??
            document.webkitFullscreenElement ??
            document.mozFullScreenElement ??
            document.msFullscreenElement ??
            null),
        ((0, iF.vq)(t, Element) ? t.getAttribute("data-frame-id") : null) === e)
    );
}
function oC(e) {
    return (0, oy.a3)(document, e);
}
function oA(e) {
    return i.useSyncExternalStore(oC, () => ok(e));
}
var oN = n(209205);
function oS(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function oE(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function oI(e) {
    let { phase: t, projectId: n, onOpenPublishedApp: l, compact: r } = e,
        { stop: o, stopping: u } = (function (e) {
            let t = (0, c.bG)([eG.Ay], () => null != e && eG.Ay.isThinking(e)),
                [n, l] = i.useState(!1),
                [a, r] = i.useState(t);
            (t !== a && (r(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, Q.fu)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        d = (0, eT.CU)(n),
        m = "controlling" === t,
        f = ee.intl.string(m ? (d ? Z.default["VJW/5P"] : Z.default["+hD2Iz"]) : Z.default["h+i1r9"]),
        h =
            null != l
                ? (0, a.jsx)(C.$, {
                      variant: "overlay-secondary",
                      size: "sm",
                      text: ee.intl.string(Z.default["1NcO7H"]),
                      onClick: l,
                  })
                : null,
        p =
            null != o
                ? (0, a.jsx)(C.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: ee.intl.string(Z.default.oU59sU),
                      loading: u,
                      onClick: o,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return r
        ? (0, a.jsxs)("div", {
              className: s()(oN.M0, oN.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  m
                      ? (0, a.jsx)(iy.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(ov.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "none", className: oN.ID, children: f }),
                  m ? (0, a.jsx)(w.A, { children: ee.intl.string(Z.default.fg1sor) }) : null,
                  m ? (0, a.jsxs)("div", { className: oN.lC, children: [h, p] }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: oN.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: oN.sp,
                      children: [
                          (0, a.jsx)(ov.SparklesIcon, { size: "sm", color: "currentColor" }),
                          m ? (0, a.jsx)(iy.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: oN.f4,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: oN.w9,
                                      children: f,
                                  }),
                                  m
                                      ? (0, a.jsx)(v.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: oN.Rb,
                                            children: ee.intl.string(Z.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  m ? (0, a.jsxs)("div", { className: oN.lC, children: [h, p] }) : null,
              ],
          });
}
function oT(e) {
    let {
            projectId: t,
            applicationId: n,
            previewApplicationId: l,
            resolveIframe: r,
            frameId: s,
            onOpenPublishedApp: o = null,
        } = e,
        u = (0, eT.Zv)(null != n && n === l ? t : null),
        d = (function (e) {
            let [t, n] = i.useState(e),
                [l, a] = i.useState(!1);
            return (e !== t && (n(e), a(!e)),
            i.useEffect(() => {
                if (!l) return;
                let e = setTimeout(() => a(!1), 2400);
                return () => clearTimeout(e);
            }, [l]),
            e)
                ? "controlling"
                : l
                  ? "handoff"
                  : "idle";
        })(u),
        c = (0, lm.useHasAnyModalOpen)(),
        m = oA(s);
    i.useEffect(() => {
        u &&
            m &&
            null != s &&
            (function (e) {
                if (!ok(e)) return;
                let t = ow(e);
                null != t && (0, oy.sP)(t);
            })(s);
    }, [u, m, s]);
    let [f, h] = i.useState(null),
        [p, g] = i.useState(null),
        [x, b] = i.useState(null),
        v = "idle" !== d;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = oS(r());
            h((t) => (oE(t, e) ? t : e));
            let t = null == p ? null : oS(p);
            (b((e) => (oE(e, t) ? e : t)), null != p && (0, oj.C)(p.getBoundingClientRect().height));
        }
        e();
        let t = window.setInterval(e, 250);
        window.addEventListener("resize", e);
        let n = null == p ? null : new ResizeObserver(e);
        return (
            null != p && n?.observe(p),
            () => {
                (window.clearInterval(t),
                    window.removeEventListener("resize", e),
                    n?.disconnect(),
                    null != p && (0, oj.C)(0));
            }
        );
    }, [v, r, p]);
    let j = "idle" !== d && null != f,
        y = j && "controlling" === d && !c,
        w = null != f && f.width < 420,
        k = null == f ? void 0 : { left: f.left, top: f.top, width: f.width, height: f.height },
        C =
            null == f
                ? void 0
                : (function (e, t) {
                      if (null == t) return { left: e.left, top: e.top, width: e.width, height: e.height };
                      let n = Math.min(e.left, t.left),
                          l = Math.min(e.top, t.top);
                      return {
                          left: n,
                          top: l,
                          width: Math.max(e.left + e.width, t.left + t.width) - n,
                          height: Math.max(e.top + e.height, t.top + t.height) - l,
                      };
                  })(f, x);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            j
                ? (0, a.jsx)("div", {
                      ref: g,
                      className: oN.D,
                      "data-phase": d,
                      children: (0, a.jsx)("div", {
                          className: oN.QF,
                          children: (0, a.jsx)(oI, { phase: d, projectId: t, onOpenPublishedApp: o, compact: w }),
                      }),
                  })
                : null,
            (0, sQ.createPortal)(
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)("div", {
                            className: oN.y4,
                            role: "status",
                            "aria-live": "polite",
                            "data-testid": "conjure-control-announcer",
                            children:
                                "controlling" === d
                                    ? ee.intl.string(Z.default.oWcemF)
                                    : "handoff" === d
                                      ? ee.intl.string(Z.default["h+i1r9"])
                                      : "",
                        }),
                        y
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: oN.ys,
                                          style: C,
                                          "data-testid": "conjure-control-glow",
                                          "aria-hidden": !0,
                                      }),
                                      (0, a.jsx)("div", {
                                          className: oN.om,
                                          style: k,
                                          "data-testid": "conjure-control-block",
                                          "aria-hidden": !0,
                                      }),
                                  ],
                              })
                            : null,
                    ],
                }),
                document.body,
            ),
        ],
    });
}
var oP = n(955117),
    oM = n(568986),
    o_ = n(149502),
    oR = n(873727),
    oL = n(147248),
    oD = n(418842),
    oO = n(363195),
    oF = n(467068);
function oz(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: o,
            header: u,
            mainClassName: d,
            content: m,
            sidebar: f,
            onOpenPublishedApp: h,
        } = e,
        [p, g] = i.useState(null),
        x = (0, q.A)(l, o),
        b = x?.id ?? null;
    (!(function (e, t) {
        let n = (0, c.bG)([oO.A], () => (0, oR.x4)(oO.A.theme)),
            l = (0, c.bG)([oL.A], () => oL.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: r,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, c.cf)([l2.Ay], () => ({
                reducedMotion: l2.Ay.useReducedMotion,
                fontScale: (0, oR.U0)(),
                highContrast: l2.Ay.isHighContrastModeEnabled,
                forcedColors: l2.Ay.useForcedColors,
                underlineLinks: l2.Ay.alwaysShowLinkDecorations,
            })),
            d = K.hH.useSetting(),
            m = (0, oD.C)(),
            f = i.useRef(!1),
            h = i.useRef(!1),
            p = i.useRef(0),
            g = i.useRef(null),
            x = i.useCallback(() => {
                let l = (0, op.o)(e, t);
                if (null == l) return;
                g.current = l;
                let i = {
                    revision: ++p.current,
                    baseTheme: n,
                    customTheme: (0, oR.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: r,
                    reducedMotion: a,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, s3.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, o, r, t, s, d, e, a, m, u]),
            b = i.useRef(x);
        i.useLayoutEffect(() => {
            b.current = x;
        });
        let v = i.useCallback(() => {
            f.current ||
                ((f.current = !0),
                queueMicrotask(() => {
                    ((f.current = !1), h.current || b.current());
                }));
        }, []);
        (i.useEffect(
            () => (
                (h.current = !1),
                () => {
                    h.current = !0;
                }
            ),
            [],
        ),
            i.useEffect(() => {
                v();
            }, [l, v]),
            i.useLayoutEffect(() => {
                (x(), v());
            }, [v, x]),
            i.useLayoutEffect(() => {
                let n = (0, op.o)(e, t);
                null != n && n !== g.current && v();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, op.o)(e, t) && ((g.current = null), v());
                }
                return (document.addEventListener("load", n, !0), () => document.removeEventListener("load", n, !0));
            }, [t, e, v]),
            i.useEffect(() => {
                let e = new MutationObserver(v);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [v]));
    })(p, b),
        i.useEffect(() => {
            if (null != t) return (0, oM.Ng)(t, () => (0, op.o)(p, b));
        }, [t, p, b]));
    let v = i.useCallback(() => (0, op.o)(p, b), [p, b]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: s()(oF.Mh, d),
                children: [
                    u,
                    (0, a.jsx)(oT, {
                        projectId: t ?? null,
                        applicationId: l,
                        previewApplicationId: r,
                        resolveIframe: v,
                        frameId: b,
                        onOpenPublishedApp: h,
                    }),
                    (0, a.jsx)("div", { ref: g, className: oF.fm, children: m }),
                ],
            }),
            f,
            (0, a.jsx)(oa, {
                projectId: t ?? null,
                applicationId: l,
                previewApplicationId: r,
                resolveIframe: v,
                toggleRef: n,
            }),
        ],
    });
}
function oU(e) {
    let {
        projectId: t,
        designFeedbackToggleRef: n,
        applicationId: l,
        previewApplicationId: r,
        surface: o,
        header: u,
        chatOpen: d,
        onCloseChat: c,
        chatHeaderAction: m,
        onRestoreVersion: f,
        debugOpen: h = !1,
        onCloseDebug: p,
        restoreState: g,
        previewReady: x,
        previewGate: b,
        availability: v,
        activeMode: j,
        widgetApplicationId: y,
        onOpenPublishedApp: w = null,
    } = e;
    (0, oP.k)(t, y);
    let k = i.useRef(null),
        [C, A] = i.useState(0);
    (i.useLayoutEffect(() => {
        if (o.type === tm.U.MAIN) return ((0, en.HV)(l), () => (0, en.HV)(null));
    }, [l, o.type]),
        i.useEffect(() => {
            null != t && ((0, Q.Hc)(t), (0, o_.$)());
        }, [t]),
        i.useLayoutEffect(() => {
            let e = k.current;
            if (null == e) return;
            function t() {
                null != e && A(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []),
        i.useLayoutEffect(() => () => (0, en.Zq)(0), []));
    let N = Math.max(360, C - 320),
        S = d || o.type === tm.U.MAIN;
    return (0, a.jsx)("div", {
        ref: k,
        className: oF.LB,
        children: (0, a.jsx)(oz, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: o,
            header: u,
            onOpenPublishedApp: w,
            mainClassName: null == u ? void 0 : s()(oF.ez, { [oF.zt]: d }),
            content: (0, a.jsx)(tV, {
                applicationId: l,
                previewApplicationId: r,
                surface: o,
                previewReady: x,
                previewGate: b,
                availability: v,
                activeMode: j,
                widgetApplicationId: y,
                frameOverlay: (0, a.jsx)(ob, { projectId: t, applicationId: l, previewApplicationId: r, surface: o }),
            }),
            sidebar:
                null != t && S
                    ? (0, a.jsx)(rp, {
                          open: d,
                          maxWidth: N,
                          onWidthChange: en.Zq,
                          children: (0, a.jsx)("div", {
                              className: oF.cO,
                              children: h
                                  ? (0, a.jsx)(sJ, { projectId: t, onClose: p ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(om.A, { projectId: t }),
                                            (0, a.jsx)(tf.Ay, {
                                                "aria-label": ee.intl.string(ee.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        m,
                                                        null == c
                                                            ? null
                                                            : (0, a.jsx)(tf.Ay.Icon, {
                                                                  icon: R.P,
                                                                  tooltip: ee.intl.string(Z.default.JD6Oit),
                                                                  onClick: c,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(tf.Ay.Title, {
                                                    children: ee.intl.string(ee.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: oF.cb,
                                                children: (0, a.jsx)(
                                                    rd,
                                                    { projectId: t, restoreState: g, onRestoreVersion: f },
                                                    t,
                                                ),
                                            }),
                                        ],
                                    }),
                          }),
                      })
                    : null,
        }),
    });
}
var oG = n(58703),
    oq = n(590957);
function o$() {
    (0, lm.openModalLazy)(
        async () => {
            let { default: e } = await n.e("994958").then(n.bind(n, 963549));
            return (t) => (0, a.jsx)(e, { ...t });
        },
        { modalKey: "conjure-changelog" },
    );
}
var oB = n(637061);
function oH() {
    let e = (0, oq.Kk)("desktop");
    if (0 === e.length) return null;
    let t = ee.intl.string(Z.default.bTBUeX);
    return (0, a.jsxs)("section", {
        className: oB.rN,
        "aria-label": t,
        children: [
            (0, a.jsxs)("div", {
                className: oB.bZ,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: ee.intl.string(Z.default["ZM/VB/"]),
                    }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: oB.V,
                children: e.map((e) =>
                    (0, a.jsxs)(
                        "li",
                        {
                            className: oB.S3,
                            children: [
                                (0, a.jsxs)(v.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: oB.VO,
                                    children: [
                                        (0, oG.i$)(u()(e.date, "YYYY-MM-DD"), "LL"),
                                        (0, oq.t9)(e) ? ` \xb7 ${ee.intl.string(Z.default.cW5XHD)}` : null,
                                    ],
                                }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: e.summary,
                                }),
                            ],
                        },
                        `${e.date}-${e.summary}`,
                    ),
                ),
            }),
            (0, oq.ug)("desktop")
                ? (0, a.jsx)(C.$, {
                      variant: "secondary",
                      size: "sm",
                      text: ee.intl.string(Z.default.EwU5zF),
                      onClick: o$,
                  })
                : null,
        ],
    });
}
function oV(e) {
    let { className: t, ariaLabel: n, disabled: l, onClick: i, children: r } = e;
    return (0, a.jsx)(j.D, { "aria-disabled": l, "aria-label": n, className: t, onClick: l ? void 0 : i, children: r });
}
var oK = n(865665),
    oW = n(744896);
let oX = { x: 5, y: 7 },
    oY = { x: 5, y: 4 };
function oJ(e) {
    let { listClassName: t, radius: n, children: l } = e,
        [r, s] = i.useState(!1);
    return (0, a.jsxs)("div", {
        className: oW.n,
        onMouseEnter: () => s(!0),
        onMouseLeave: () => s(!1),
        children: [
            (0, a.jsx)("ol", { className: t, children: l }),
            r ? (0, a.jsx)(oK.C, { area: 64, radius: n, color: D.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var oQ = n(86147),
    oZ = n(729475);
function o0(e) {
    let { frame: t, controlProjectId: n } = e,
        l = oA(t?.id ?? null),
        i = (0, eT.Zv)(n),
        r = (0, c.bG)(
            [tj.A, tx.A],
            () => null != t && tj.A.getWindowOpen(e3.MLl.ACTIVITY_POPOUT) && tx.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, e4.x1)(t) || r || i) return null;
    let s = ow(t.id);
    if (null == s || !(0, oy.Ub)(s)) return null;
    let o = ee.intl.string(l ? ee.t.Z7MyNB : ee.t.OIDkcp);
    return (0, a.jsx)(B.A.Icon, {
        tooltip: o,
        icon: l ? oQ.z : oZ.T,
        "aria-label": o,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => {
            var e;
            let n;
            null != (n = ow((e = t.id))) && (0, oy.Ub)(n) && (ok(e) ? (0, oy.sP)(n) : (0, oy.tl)(n));
        },
    });
}
var o2 = n(707554),
    o1 = n(770178),
    o6 = n(765548),
    o9 = n(595528),
    o5 = n(885576),
    o3 = n(495600);
let o4 = "heading-xxl/semibold",
    o8 = !1;
function o7() {
    let e = i.useRef(null),
        [t, n] = i.useState(!0),
        l = (0, o6.A)((e) => {
            n(e.target.clientWidth >= 500);
        }),
        r = (0, o1.w)(l, [], { fireOnMount: !0 }),
        s = (0, c.bG)([o9.A], () => o9.A.isConnected());
    i.useEffect(() => {
        if (!s || !t || o8) return;
        let n = !1,
            l = 0;
        function a() {
            n ||
                (l = window.setTimeout(() => {
                    ((o8 = !0), e.current?.play());
                }, 400));
        }
        let i = document.fonts;
        return (
            null == i ? a() : i.load("16px 'AI Visual Identity Glyphs'", "123456789ABC").then(a, a),
            () => {
                ((n = !0), window.clearTimeout(l));
            }
        );
    }, [s, t]);
    let o = (0, c.bG)([o5.A], () => o5.A.isIdle()),
        u = i.useRef(o);
    i.useEffect(() => {
        let t = u.current && !o;
        ((u.current = o), t && o8 && (e.current?.stop(), e.current?.play()));
    }, [o]);
    let d = ee.intl.string(Z.default["+5XyCR"]);
    return (0, a.jsx)("div", {
        ref: r,
        className: o3.x,
        children: t
            ? (0, a.jsx)(o2.H, { children: (0, a.jsx)(l$.o, { ref: e, text: d, variant: o4, delay: null }) })
            : (0, a.jsx)(E.D, { variant: o4, children: d }),
    });
}
async function ue(e, t, n) {
    (0, Q.Hc)(e);
    let l = await (0, Q.vX)(e, t);
    (0, Q.dv)(e, n, [l]);
}
function ut(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, et.Oq)(e.size, t)
        ? null
        : ee.intl.formatToPlainString(Z.default.ThxcOX, { size: (0, et.sM)((0, et.Ju)(t)) });
}
async function un(e, t) {
    let n,
        l =
            ((n = t
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === n ? "vibegration" : n}.zip`),
        a = await (0, Q.cS)(e, l);
    await sW(a, l);
}
function ul(e) {
    let t = i.useRef(null),
        n = i.useCallback(
            (t) => {
                let n = t.target.files?.[0] ?? null;
                ((t.target.value = ""), null != n && e(n));
            },
            [e],
        );
    return {
        open: () => t.current?.click(),
        input: (0, a.jsx)("input", {
            ref: t,
            type: "file",
            accept: ".zip,.tar,.tar.gz,.tgz,.tar.bz2,.tar.xz,application/zip,application/gzip,application/x-tar,application/x-bzip2,application/x-xz",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: n,
        }),
    };
}
var ua = n(950305),
    ui = n(664121);
let ur = [
    { value: "user", icon: ua.UserIcon, nameMessage: Z.default.s1TsXl },
    { value: "guild", icon: ui.R, nameMessage: Z.default.LlLIJw },
];
function us(e) {
    let { importing: t, onImport: n } = e,
        l = i.useRef(null),
        r = ul(i.useCallback((e) => n(e, "user"), [n])),
        s = ul(i.useCallback((e) => n(e, "guild"), [n])),
        o = { user: r.open, guild: s.open };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(lK.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: lK.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, a.jsx)(lW.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": ee.intl.string(Z.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(lX.rX, {
                            label: ee.intl.string(Z.default.NyVn6T),
                            children: ur
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: ee.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, a.jsx)(
                                        lX.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: i } = n;
                    return (0, a.jsx)(C.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: lV.H,
                        text: ee.intl.string(Z.default.NJGZA3),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": i,
                    });
                },
            }),
            r.input,
            s.input,
        ],
    });
}
var uo = n(962918);
function uu(e) {
    let { modes: t, mode: n, onChange: l, className: r } = e,
        o = i.useMemo(() => t.map((e) => ({ value: e, name: (0, tp.kZ)(e), "aria-controls": (0, tp.z3)(e) })), [t]),
        u = i.useCallback(
            (e) => {
                l(e.value);
            },
            [l],
        );
    return null == n
        ? null
        : (0, a.jsx)(r1.I, {
              role: "tablist",
              look: "pill",
              className: s()(uo.b, r),
              optionClassName: uo.u,
              options: o,
              value: n,
              onChange: u,
          });
}
var ud = n(780338),
    uc = n(663417),
    um = n(70688),
    uf = n(473935),
    uh = n(7437),
    up = n(147036),
    ug = n(845459),
    ux = n(911947),
    ub = n(123917);
let uv = new Set();
var uj = n(852784),
    uy = n(746080),
    uw = n(675718);
let uk = [];
function uC(e) {
    (0, g.P)((0, x.o)(e, b.Ck.FAILURE));
}
function uA(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: l,
            projectGuildId: r,
            isOwner: s,
            canRemix: o,
            onExport: u,
            onImport: d,
            onRemix: f,
            onConnectTool: h,
            onHistory: p,
            onRefresh: v,
            isRefreshing: j = !1,
            onClose: y,
            refreshApplicationId: w,
            previewProjectId: k,
            onCloseMenu: C,
        } = e,
        A = (0, ux.iI)(t),
        { pending: N, refresh: E } = (0, uh.A)(w ?? null),
        { pending: I, connect: T } = (function (e, t) {
            let [n, l] = i.useState(uv),
                a = i.useRef(uv),
                r = i.useCallback((e) => {
                    ((a.current = (0, ug.Q6)(a.current, e)), l(a.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, ug.K9)(a.current, n.type);
                        async function s() {
                            let l = await (0, Q.JI)(e, n.type);
                            (r(n.type), "url" === l.type)
                                ? (0, ub.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, ug.rq)(l.error)
                                          ? ee.intl.string(Z.default["jCQ/1B"])
                                          : ee.intl.string(Z.default.POxkSh),
                                  );
                        }
                        null != i && ((a.current = i), l(i), s().catch(() => r(n.type)));
                    },
                    [t, e, r],
                ),
            };
        })(k ?? null, uC),
        P = (0, c.bG)([Q.Ay], () => (null == k ? uk : Q.Ay.getDeclaredConnections(k))),
        M = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: a } = e,
                i = [];
            for (let { connection: e, offer: r } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: ee.intl.string(Z.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                i.push(
                    "authorize" === r
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: ee.intl.formatToPlainString(Z.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: a.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: ee.intl.formatToPlainString(Z.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({
            canRefresh: null != w,
            refreshPending: N,
            offers: i.useMemo(() => (0, ug.Xl)(P), [P]),
            connectPending: I,
        }),
        _ = i.useMemo(() => new Map(P.map((e) => [e.type, e])), [P]),
        R = null != f && o,
        L = s && null != d,
        D = R || null != u || L || null != h || null != p,
        O = rv.p5 && null != l,
        F = rv.p5,
        z = A ? nz.BellIcon : ud.BellSlashIcon;
    return (0, a.jsxs)(lW.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": ee.intl.string(ee.t.ogxXGq),
        onClose: C,
        onSelect: C,
        children: [
            null != v || null != y
                ? (0, a.jsxs)(lX.rX, {
                      children: [
                          null != v
                              ? (0, a.jsx)(lX.Dr, {
                                    id: "refresh",
                                    icon: uc.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: uc.RefreshIcon },
                                    label: ee.intl.string(Z.default["p4B/7M"]),
                                    disabled: j,
                                    action: v,
                                })
                              : null,
                          null != y
                              ? (0, a.jsx)(lX.Dr, {
                                    id: "close",
                                    icon: um.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: um.DoorExitIcon },
                                    label: ee.intl.string(Z.default["/TlGcK"]),
                                    action: y,
                                })
                              : null,
                      ],
                  })
                : null,
            M.length > 0
                ? (0, a.jsx)(lX.rX, {
                      children: M.map((e) =>
                          (0, a.jsx)(
                              lX.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void E();
                                      let t = null == e.connectionType ? null : _.get(e.connectionType);
                                      null != t && T(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, a.jsx)(lX.rX, {
                children: (0, a.jsx)(lX.Dr, {
                    id: "mute",
                    label: ee.intl.string(A ? Z.default.s9rCuH : Z.default["a+i/As"]),
                    icon: z,
                    leadingAccessory: { type: "icon", icon: z },
                    action: () => (0, ux.$L)(t, !A),
                }),
            }),
            D
                ? (0, a.jsxs)(lX.rX, {
                      children: [
                          R
                              ? (0, a.jsx)(lX.Dr, { id: "remix", label: ee.intl.string(Z.default.XWgAfc), action: f })
                              : null,
                          null != u
                              ? (0, a.jsx)(lX.Dr, { id: "export", label: ee.intl.string(Z.default.WsEEP7), action: u })
                              : null,
                          L
                              ? (0, a.jsx)(lX.Dr, { id: "import", label: ee.intl.string(Z.default.rWGY3e), action: d })
                              : null,
                          null != h
                              ? (0, a.jsx)(lX.Dr, {
                                    id: "connect-tool",
                                    label: ee.intl.string(Z.default.yOIql5),
                                    action: h,
                                })
                              : null,
                          null != p
                              ? (0, a.jsx)(lX.Dr, {
                                    id: "history",
                                    label: ee.intl.string(Z.default["3hIVou"]),
                                    action: p,
                                })
                              : null,
                      ],
                  })
                : null,
            F
                ? (0, a.jsxs)(lX.rX, {
                      children: [
                          O
                              ? (0, a.jsx)(lX.Dr, {
                                    id: "copy-link",
                                    label: ee.intl.string(ee.t.WqhZss),
                                    icon: iQ.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: iQ.LinkIcon },
                                    action: () =>
                                        (0, rv.C)((0, up.n)(l, uy.VV.CONJURE, t), () =>
                                            (0, g.P)((0, x.o)(ee.intl.string(ee.t["L/PwZf"]), b.Ck.SUCCESS)),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(lX.Dr, {
                              id: "copy-project-id",
                              label: ee.intl.string(Z.default["nm/zuU"]),
                              icon: uf.L,
                              leadingAccessory: { type: "icon", icon: uf.L },
                              action: () =>
                                  (0, rv.C)(t, () =>
                                      (0, g.P)((0, x.o)(ee.intl.string(Z.default.CmfaZG), b.Ck.SUCCESS)),
                                  ),
                          }),
                      ],
                  })
                : null,
            s
                ? (0, a.jsxs)(lX.rX, {
                      children: [
                          (0, a.jsx)(lX.Dr, {
                              id: "settings",
                              label: ee.intl.string(Z.default.FzfmQ8),
                              icon: S.SettingsIcon,
                              leadingAccessory: { type: "icon", icon: S.SettingsIcon },
                              action: () => (0, uj.A)(t, { guildId: r ?? l, initialTab: "project", isPreview: !0 }),
                          }),
                          (0, a.jsx)(lX.Dr, {
                              id: "delete",
                              label: ee.intl.string(ee.t.oyYWHE),
                              color: "danger",
                              action: () => {
                                  (0, m.A)({
                                      title: ee.intl.formatToPlainString(Z.default.CJBhb2, { name: n }),
                                      subtitle: ee.intl.string(Z.default["0OmrVn"]),
                                      confirmText: ee.intl.string(ee.t.oyYWHE),
                                      variant: "critical",
                                      onConfirm: () => {
                                          (0, en.K)(t, () =>
                                              (0, g.P)((0, x.o)(ee.intl.string(Z.default["0XDHob"]), b.Ck.FAILURE)),
                                          );
                                      },
                                  });
                              },
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function uN(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(lK.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: lK.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(uA, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: i } = e,
                { isShown: r } = n;
            return (0, a.jsx)("div", {
                ref: l,
                className: uw.h,
                children:
                    "iconButton" === t
                        ? (0, a.jsx)(y.m, {
                              text: ee.intl.string(ee.t["UKOtz+"]),
                              children: (0, a.jsx)(iG.K, {
                                  icon: aW.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": ee.intl.string(ee.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": r,
                                  onClick: i,
                              }),
                          })
                        : (0, a.jsx)(B.A.Icon, {
                              icon: aW.MoreHorizontalIcon,
                              tooltip: ee.intl.string(ee.t["UKOtz+"]),
                              "aria-label": ee.intl.string(ee.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": r,
                              selected: r,
                              onClick: i,
                          }),
            });
        },
    });
}
var uS = n(542938),
    uE = n(104171),
    uI = n(996056);
function uT(e) {
    let { creator: t, className: n } = e;
    return (0, a.jsx)("div", {
        className: s()(uI.c, n),
        "aria-hidden": !0,
        children: (0, a.jsx)(uE.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: uE.DN.SIZE_16 }),
    });
}
var uP = n(330049);
function uM(e) {
    let { title: t, actions: n, breadcrumb: l } = e;
    return (0, a.jsx)(B.A, {
        hideSearch: !0,
        toolbar: n,
        className: uP.wx,
        "aria-label": t,
        children: (0, a.jsxs)("div", {
            className: uP.QF,
            children: [
                (0, a.jsx)(L.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: D.A.colors.TEXT_STRONG,
                    className: uP.Kk,
                }),
                null != l
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(B.A.Title, { onClick: l.onClick, children: l.title }),
                              (0, a.jsx)(B.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, a.jsx)(B.A.Title, { className: uP.Qw, wrapperClassName: uP.DD, children: t }),
            ],
        }),
    });
}
var u_ = n(683071);
let uR = "conjuring-help";
var uL = n(777986);
function uD() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, c.cf)([ez.default, Y.A, eJ.Ay, aO.A], () => {
                let e = ez.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of Y.A.getGuildsArray()) {
                    if (!t.features.has(e3.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = eJ.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, z.m1)(t, ez.default, aO.A) === uR;
                    });
                    if (null != n) return { isStaff: e, guildId: t.id, channelId: n.channel.id };
                }
                return { isStaff: e, guildId: null, channelId: null };
            });
            return e
                ? null != t && null != n
                    ? { kind: "channel", guildId: t, channelId: n }
                    : { kind: "url", url: "https://i.dis.gd/conjuring-access" }
                : null;
        })(),
        t = i.useCallback(() => {
            null != e &&
                ("channel" === e.kind
                    ? (0, H.pX)(e3.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, ub.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, a.jsx)("div", {
              className: uL.l,
              children: (0, a.jsx)(u_.w, {
                  type: "info",
                  iconAlign: "center",
                  children: ee.intl.format(Z.default["6anmu1"], { channel: uR, onNavigate: t }),
              }),
          });
}
var uO = n(594211);
let uF = "user",
    uz = "no-server",
    uU = new Map();
function uG(e) {
    return uU.get(e) ?? null;
}
function uq(e) {
    switch (e) {
        case "all":
        case uF:
        case uz:
            return null;
        default:
            return e;
    }
}
function u$(e, t) {
    switch (t) {
        case "all":
            return !0;
        case uF:
            return "user" === e.install_scope;
        case uz:
            return null == (0, ea.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
let uB = "VibegrationsProjectsPanelOpen";
function uH() {
    return ni.w.get(uB) ?? null;
}
function uV(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
let uK = "user";
var uW = n(192357),
    uX = n(189213);
function uY(e) {
    let { reason: t, transitionState: n, onClose: l } = e,
        i = t === e6.PERMISSIONS;
    return (0, a.jsx)(uX.a, {
        transitionState: n,
        onClose: l,
        title: ee.intl.string(i ? Z.default.wQ4UyJ : Z.default.ZNGLFE),
        subtitle: ee.intl.string(i ? Z.default.Agqmbt : Z.default.ffxKGK),
        size: "sm",
        actions: [{ text: ee.intl.string(i ? ee.t.BddRzS : Z.default["/omTNx"]), variant: "primary", onClick: l }],
    });
}
var uJ = n(549469),
    uQ = n(852162),
    uZ = n(408700);
function u0(e) {
    return (0, a.jsx)(f.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function u2(e) {
    return (0, a.jsx)(h.u, { ...e, size: "custom", width: 20, height: 20 });
}
function u1(e) {
    return (0, a.jsx)(p.k, { ...e, size: "custom", width: 20, height: 20 });
}
let u6 = {
    showPublishBlocked: function (e) {
        (0, lm.openModal)((t) => (0, a.jsx)(uY, { ...t, reason: e }));
    },
    openPublishNotes: uJ.A,
    showError: (e) => (0, g.P)((0, x.o)(e, b.Ck.FAILURE)),
    openProfile: (e) => {
        (0, V.openUserProfileModal)({ userId: e });
    },
    openAutomodSettings: (e) => {
        Promise.resolve()
            .then(n.bind(n, 468689))
            .then((t) => {
                let { default: n } = t;
                return n.open(e, e3.BEX.GUILD_AUTOMOD);
            })
            .catch(() => {});
    },
};
function u9(e) {
    var t;
    let n,
        l,
        r,
        o,
        f,
        h,
        p,
        C,
        A,
        N,
        { project: S, guildId: E, onSelect: I, onRemix: T, shared: P = !1 } = e,
        M =
            ((n = S.id),
            (l = S.name),
            (r = i.useRef(!1)),
            (o = i.useCallback(() => {
                r.current ||
                    ((r.current = !0),
                    (0, g.P)((0, x.o)(ee.intl.formatToPlainString(Z.default.aN2JdD, { name: l }), b.Ck.MESSAGE)),
                    un(n, l)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", n, e),
                                (0, g.P)(
                                    (0, x.o)(
                                        409 === (t = e instanceof Q.xE ? e.status : null)
                                            ? ee.intl.string(Z.default["9oqbEw"])
                                            : 404 === t
                                              ? ee.intl.string(Z.default["0W8uLq"])
                                              : ee.intl.string(Z.default.N8753A),
                                        b.Ck.FAILURE,
                                    ),
                                ));
                        })
                        .finally(() => {
                            r.current = !1;
                        }));
            }, [n, l])),
            {
                onExport: o,
                onImport: (f = ul(
                    i.useCallback(
                        (e) => {
                            let t = ut(e);
                            null != t
                                ? (0, g.P)((0, x.o)(t, b.Ck.FAILURE))
                                : (0, m.A)({
                                      title: ee.intl.formatToPlainString(Z.default["Gm+u1+"], { name: l }),
                                      subtitle: ee.intl.string(Z.default.M7H3sJ),
                                      confirmText: ee.intl.string(Z.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, H.pX)(e3.BVt.CHANNEL(E, uy.VV.CONJURE, n));
                                          try {
                                              await ue(n, e, ee.intl.string(Z.default.Owerd3));
                                          } catch {
                                              (0, g.P)((0, x.o)(ee.intl.string(Z.default["Q+l4Hv"]), b.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [n, l, E],
                    ),
                )).open,
                importInput: f.input,
            }),
        _ =
            null == S.updated_at
                ? null
                : ee.intl.formatToPlainString(Z.default.AXydi3, { time: u()(S.updated_at).fromNow() }),
        R = (0, ea.wu)(S),
        L =
            (0, c.bG)([Y.A], () => (null == R ? null : (Y.A.getGuild(R)?.name ?? null)), [R]) ??
            ee.intl.string(Z.default["3QFps8"]),
        D = (0, c.bG)([eR.Ay], () => eR.Ay.isProjectDeleting(S.id), [S.id]),
        F =
            ((t = P ? S : null),
            (h = t?.id),
            (p = t?.owner_user_id),
            (C = (0, c.yK)(
                [eG.Ay],
                () =>
                    null == h
                        ? []
                        : [
                              ...new Set(
                                  eG.Ay.getMessages(h)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== p ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [h, p],
            )),
            i.useEffect(() => {
                null != p && (eV(p), C.forEach(eV));
            }, [p, C]),
            (A = (0, c.bG)([ez.default], () => (null == p ? null : ez.default.getUser(p)), [p])),
            (N = (0, c.yK)([ez.default], () => C.map((e) => ez.default.getUser(e)).filter((e) => null != e), [C])),
            i.useMemo(
                () =>
                    null == A
                        ? null
                        : {
                              creator: A,
                              collaborators: N,
                              label: (function (e, t) {
                                  let n;
                                  return 0 === t.length
                                      ? ee.intl.formatToPlainString(Z.default.t5RWBS, { creator: e })
                                      : ee.intl.formatToPlainString(Z.default["b5uCe/"], {
                                            creator: e,
                                            collaborators:
                                                0 === (n = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === n
                                                      ? ee.intl.formatToPlainString(ee.t["8s9z8P"], { first: t[0] })
                                                      : 2 === n
                                                        ? ee.intl.formatToPlainString(ee.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === n
                                                          ? ee.intl.formatToPlainString(ee.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : ee.intl.formatToPlainString(ee.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: n - 3,
                                                            }),
                                        });
                              })(
                                  (0, eU.mG)(A),
                                  N.map((e) => (0, eU.mG)(e)),
                              ),
                          },
                [A, N],
            )),
        z = i.useId(),
        U = (0, a.jsx)(v.E, { variant: "text-md/semibold", color: "text-strong", className: uZ.j1, children: S.name }),
        G = (0, e_.oF)(S.id),
        q = {
            projectId: S.id,
            projectName: S.name,
            guildId: E,
            projectGuildId: S.guild_id,
            isOwner: (0, eR.PV)(S),
            canRemix: (0, eR.H_)(S),
            onRemix: T,
            onExport: M.onExport,
            onImport: M.onImport,
        };
    return (0, a.jsxs)("div", {
        className: s()(uZ.OY, { [uZ.Wy]: D }),
        "aria-busy": D,
        children: [
            (0, a.jsx)(uO.Ay, { projectId: S.id }),
            null == G || D ? null : (0, a.jsx)("div", { className: uZ.SB, "aria-hidden": !0 }),
            (0, a.jsxs)(j.D, {
                className: uZ.W6,
                onClick: D ? void 0 : I,
                onContextMenu: function (e) {
                    D || (0, O.jA)(e, () => (0, a.jsx)(uA, { ...q, onCloseMenu: O.Z_ }));
                },
                tabIndex: D ? -1 : void 0,
                "aria-describedby": null != F ? z : void 0,
                children: [
                    (0, a.jsx)(uS.A, { project: S, size: "md", className: uZ.VJ }),
                    (0, a.jsxs)("div", {
                        className: uZ.MM,
                        children: [
                            (0, a.jsxs)("div", {
                                className: uZ.Ub,
                                children: [
                                    null != F ? (0, a.jsx)(y.m, { text: F.label, ariaHidden: !0, children: U }) : U,
                                    null == F || D ? null : (0, a.jsx)(uT, { creator: F, className: uZ.rb }),
                                    G !== d.I.NEEDS_INPUT || D
                                        ? null
                                        : (0, a.jsxs)("div", {
                                              className: uZ.fs,
                                              children: [
                                                  (0, a.jsx)($.A, { mentionsCount: 1 }),
                                                  (0, a.jsx)(w.A, { children: ee.intl.string(Z.default.hfIuc7) }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: uZ.h3,
                                children: [
                                    (0, a.jsx)(v.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: uZ.Wb,
                                        children: D ? ee.intl.string(Z.default.Yh5pAc) : L,
                                    }),
                                    null == _ || D
                                        ? null
                                        : (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)("span", {
                                                      className: uZ.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, a.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: uZ.zM,
                                                      children: _,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != F ? (0, a.jsx)(w.A, { id: z, children: F.label }) : null,
            (0, a.jsx)("div", {
                className: uZ.M2,
                children: D
                    ? (0, a.jsx)(k.y, { type: k.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, a.jsxs)("div", {
                          className: uZ.Pl,
                          children: [(0, a.jsx)(uN, { ...q, trigger: "iconButton" }), M.importInput],
                      }),
            }),
        ],
    });
}
function u5(e) {
    var t;
    let { project: l, projectsLoaded: r, onBack: s, guildId: o } = e,
        [u, d] = i.useState(!0),
        [f, h] = i.useState(!1),
        p = K.Q_.useSetting(),
        [j, w] = i.useState(null),
        [k, I] = i.useState(null),
        T = l?.id ?? null,
        P = i.useRef(T),
        M = i.useRef(!0),
        _ = i.useRef(!1),
        R = i.useRef(null);
    ((P.current = T),
        i.useEffect(
            () => (
                (M.current = !0),
                () => {
                    M.current = !1;
                }
            ),
            [],
        ));
    let L = (0, c.bG)([eR.Ay], () => (null == T ? null : eR.Ay.getIntegrationStatus(T)), [T]),
        { data: D, isLoading: O } = (0, F.YY)(l?.preview_application_id ?? void 0),
        $ = null != T && k !== T,
        V = L?.preview_ready === !0,
        X = L?.has_activity === !0,
        {
            availability: Y,
            activeMode: J,
            setMode: et,
            widgetApplicationId: el,
        } = (function (e) {
            let {
                    applicationId: t,
                    previewApplicationId: n,
                    declaredActivity: l,
                    installScope: a,
                    ownerAuthorizationRevoked: r,
                    mainCardOnly: s = !1,
                } = e,
                [o, u] = i.useState(null),
                [d, m] = i.useState(t);
            d !== t && (m(t), u(null));
            let f = null != n && n === t ? n : null,
                h = (0, c.bG)([eF.default], () => eF.default.getId()),
                { applicationWidgetConfig: p } = (0, eD.A)(h, f ?? void 0),
                g = p?.surfaces,
                x = (0, eM.yZ)({
                    widgetTop: g?.[eL.m.WIDGET_TOP] != null,
                    widgetBottom: g?.[eL.m.WIDGET_BOTTOM] != null,
                    miniProfile: g?.[eL.m.MINI_PROFILE] != null,
                }),
                b = null != f && (s ? x.hasMainCard : x.hasAny),
                { data: v } = (0, F.YY)(n ?? void 0),
                j = null != n && v?.bot?.id != null,
                { data: y, isLoading: w } = (0, F.YY)(t ?? void 0),
                k = l || (0, eO.X)(y),
                C = null != t && w && null == y,
                A = (0, eM.Xm)({
                    installScope: a,
                    hasFrame: k,
                    hasProfileWidget: b,
                    hasBotDm: j,
                    ownerAuthorizationRevoked: r,
                });
            return {
                availability: A,
                isResolving: C,
                activeMode: C ? null : (0, eM.Qs)(o, A),
                setMode: u,
                widgetApplicationId: f,
            };
        })({
            applicationId: l?.preview_application_id ?? null,
            previewApplicationId: l?.preview_application_id ?? null,
            declaredActivity: X,
            installScope: l?.install_scope ?? null,
            ownerAuthorizationRevoked: L?.owner_authorization_revoked === !0,
        });
    (0, eP.x)(T, (e) => {
        Y.modes.includes(e) && et(e);
    });
    let ea = (0, eM.Qg)({
            installScope: l?.install_scope ?? null,
            previewReady: V,
            integrationInstalled: L?.integration_installed ?? null,
            botPermissionsChanged: L?.bot_permissions_changed === !0,
        }),
        ei = u && !f,
        eu = ee.intl.string(ei ? Z.default.JD6Oit : Z.default.xjJAQm),
        ed = i.useCallback(() => {
            if (f) {
                (h(!1), d(!0));
                return;
            }
            d((e) => !e);
        }, [f]),
        ec = i.useCallback(() => d(!1), []),
        { active: em } = eE(T),
        ef = i.useRef(null),
        eh = (0, eT.Zv)(T),
        ep = ee.intl.string(eh ? Z.default.Sme0T0 : em ? Z.default.vn5Rzu : Z.default["cl/Jyl"]),
        eg = i.useCallback(() => {
            if (null != T) {
                let e;
                if (em) return void eC(T);
                (h(!1), d(!0), (e = ew(T)).active || ek(T, { ...e, active: !0 }));
            }
        }, [T, em]),
        ex = i.useCallback(() => {
            h((e) => !e && (d(!0), !0));
        }, []),
        eb = i.useCallback(() => h(!1), []),
        ev = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (null == l || _.current) return;
                let a = l.id;
                function i() {
                    return M.current && P.current === a;
                }
                ((_.current = !0),
                    h(!1),
                    d(!0),
                    w({ entry: e, status: "restoring" }),
                    (0, Q.oB)(a, e.sha)
                        .then(
                            async () => {
                                if (
                                    (n &&
                                        i() &&
                                        (0, g.P)(
                                            (0, x.o)(
                                                ee.intl.formatToPlainString(Z.default.Z4n6LX, {
                                                    title: (0, er.T4)(e.subject).short,
                                                }),
                                                b.Ck.SUCCESS,
                                            ),
                                        ),
                                    null != t)
                                ) {
                                    let e = await (0, eI.c)(a, t);
                                    null != e && (0, g.P)((0, x.o)(e, b.Ck.FAILURE));
                                }
                                i() && w({ entry: e, status: "restored" });
                            },
                            (t) => {
                                i() &&
                                    (w({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", a, t),
                                    (0, g.P)((0, x.o)(ee.intl.string(Z.default["PSdo+w"]), b.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            i() && (_.current = !1);
                        }));
            },
            [l],
        ),
        ej = (0, c.bG)([tc.A], () => tc.A.isBuilderPreviewMobile()),
        ey = ee.intl.string(ej ? Z.default.tKGF0Q : Z.default.peqEOY),
        eA = i.useCallback(() => (0, en.GG)(!ej), [ej]),
        eN = (0, q.A)(l?.preview_application_id ?? null, e4.sd),
        eS = (0, e4.x1)(eN) && eN.data.proxyTicketRefreshing,
        e_ = i.useCallback(() => {
            null == eN || eS || G.A.refreshProxyTicket(eN.id);
        }, [eN, eS]),
        ez = i.useCallback(() => {
            var e, t;
            (null != l && ((e = l.id), (t = eN?.id), (0, Q.Bn)(e), (0, th.A)().leaveFrame(t)), s());
        }, [l, eN?.id, s]),
        eU = i.useCallback(() => {
            null != l && (d(!0), (0, Q.dv)(l.id, ee.intl.string(Z.default.oU20rd)));
        }, [l]),
        eG = ul(
            i.useCallback(
                (e) => {
                    if (null == l) return;
                    let t = l.id,
                        n = ut(e);
                    null != n
                        ? (0, g.P)((0, x.o)(n, b.Ck.FAILURE))
                        : (0, m.A)({
                              title: ee.intl.formatToPlainString(Z.default["Gm+u1+"], { name: l.name }),
                              subtitle: ee.intl.string(Z.default.M7H3sJ),
                              confirmText: ee.intl.string(Z.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  d(!0);
                                  try {
                                      await ue(t, e, ee.intl.string(Z.default.Owerd3));
                                  } catch {
                                      (0, g.P)((0, x.o)(ee.intl.string(Z.default["Q+l4Hv"]), b.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [l],
            ),
        ),
        eq = i.useCallback(() => {
            null != l && (0, uQ.A)(l, o);
        }, [l, o]),
        e$ = i.useCallback(async () => {
            if (null == T || P.current !== T) return;
            R.current?.abort();
            let e = new AbortController();
            ((R.current = e), I(null));
            try {
                await (0, en.U1)(T, e.signal);
            } catch {
            } finally {
                e.signal.aborted || R.current !== e || P.current !== T || I(T);
            }
        }, [T]);
    i.useEffect(
        () => (
            e$(),
            () => {
                (R.current?.abort(), (R.current = null));
            }
        ),
        [e$],
    );
    let eB = es(l ?? null, L ?? null, o),
        eH = ((t = l?.application_id ?? null), (0, c.bG)([eJ.Ay], () => (null == t ? null : (0, e0.i8)(o, t)), [o, t])),
        eV = i.useMemo(() => (null == eH ? null : () => (0, H.pX)(e3.BVt.CHANNEL(o, eH))), [o, eH]),
        eK = i.useCallback(async () => {
            null != l && (await eo(l, eB));
        }, [eB, l]),
        eW = i.useCallback(async () => {
            try {
                await eK();
            } catch {}
            await e$();
        }, [e$, eK]),
        eX = i.useMemo(() => {
            let e = l?.preview_application_id;
            return null == e || O || $
                ? null
                : {
                      ...(0, uW.i)({ applicationId: e, application: D ?? null, guildId: eB }),
                      onClose: () => {
                          eW();
                      },
                  };
        }, [$, eW, eB, O, D, l?.preview_application_id]),
        eY = ea ? { type: "permissions", authorizeProps: eX } : $ && null == L ? { type: "checking" } : void 0,
        eQ = (0, c.bG)([eR.Ay], () => null != T && eR.Ay.isProjectDeleting(T), [T]);
    i.useEffect(() => {
        ((null == l && r) || eQ) && (0, H.bG)(e3.BVt.CHANNEL(o, uy.VV.CONJURE));
    }, [o, l, r, eQ]);
    let eZ = i.useMemo(() => ({ guildId: o, platform: u6, busy: $ || O }), [o, $, O]),
        e2 = td(T, eZ),
        e1 = e2?.intent === "open" && "channel" === e2.destination ? e2.appChannelId : null,
        e6 = (0, c.bG)([W.A], () => (null == e1 ? null : W.A.getChannel(e1)), [e1]),
        e9 = (0, z.Ay)(e6),
        e5 = (0, U.gU)(e6),
        e7 =
            null != e9 && null != e5
                ? ee.intl.format(Z.default.gR7PUV, {
                      channel: e9,
                      channelIconHook: (e, t) =>
                          (0, a.jsx)(e5, { size: "xs", color: "currentColor", className: uZ.Y2 }, t),
                  })
                : e2?.label,
        te = e2?.upToDate === !0 ? ee.intl.string(Z.default.X0kGp2) : (e2?.disabledReason ?? null),
        tt =
            null == e2
                ? null
                : (0, a.jsx)("div", {
                      className: uZ.As,
                      children: (0, a.jsx)(y.m, {
                          text: te,
                          asContainer: !0,
                          children: (0, a.jsx)(C.$, {
                              size: "sm",
                              variant: e2.upToDate ? "secondary" : "primary",
                              loading: e2.publishing,
                              disabled: e2.disabled,
                              onClick: () => e2.run("header"),
                              text: e7,
                          }),
                      }),
                  }),
        tn = (0, a.jsx)(uM, {
            title: l?.name ?? ee.intl.string(Z.default.G1WwgK),
            breadcrumb: { title: ee.intl.string(Z.default.uk6jhJ), onClick: s },
            actions:
                null == l
                    ? null
                    : (0, a.jsxs)("div", {
                          className: uZ.FO,
                          children: [
                              Y.showModeSwitch ? (0, a.jsx)(uu, { modes: Y.modes, mode: J, onChange: et }) : null,
                              (0, a.jsx)(B.A.Icon, {
                                  icon: ej ? u1 : u2,
                                  tooltip: ey,
                                  "aria-label": ey,
                                  selected: ej,
                                  onClick: eA,
                              }),
                              (0, a.jsx)(B.A.Icon, {
                                  ref: ef,
                                  icon: A.x,
                                  iconClassName: uZ.D8,
                                  tooltip: ep,
                                  "aria-label": ep,
                                  selected: em,
                                  disabled: eh,
                                  onClick: eg,
                              }),
                              "frame" === J ? (0, a.jsx)(o0, { frame: eN, controlProjectId: l.id }) : null,
                              (0, a.jsx)("div", { className: uZ.YJ }),
                              p
                                  ? (0, a.jsx)(B.A.Icon, {
                                        icon: N.BugIcon,
                                        tooltip: ee.intl.string(Z.default.Mt5k9d),
                                        "aria-label": ee.intl.string(Z.default.Mt5k9d),
                                        selected: f,
                                        onClick: ex,
                                    })
                                  : null,
                              (0, a.jsx)(B.A.Icon, {
                                  icon: S.SettingsIcon,
                                  tooltip: ee.intl.string(Z.default.I2XSKe),
                                  "aria-label": ee.intl.string(Z.default.I2XSKe),
                                  onClick: () => (0, uj.A)(l.id, { guildId: o, isPreview: !0 }),
                              }),
                              (0, a.jsx)(uN, {
                                  projectId: l.id,
                                  projectName: l.name,
                                  guildId: o,
                                  projectGuildId: l.guild_id,
                                  isOwner: (0, eR.PV)(l),
                                  canRemix: (0, eR.H_)(l),
                                  onRefresh: (0, e4.x1)(eN) ? e_ : void 0,
                                  isRefreshing: eS,
                                  onClose: ez,
                                  onExport: eU,
                                  onImport: eG.open,
                                  onRemix: eq,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = l.id),
                                          void (0, lm.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("53394"),
                                                  n.e("796973"),
                                              ]).then(n.bind(n, 223100));
                                              return (n) => (0, a.jsx)(t, { ...n, projectId: e });
                                          })
                                      );
                                  },
                                  onHistory: () => {
                                      var e;
                                      return (
                                          (e = {
                                              projectId: l.id,
                                              installScope: l.install_scope,
                                              restoreDisabled: j?.status === "restoring",
                                              onRestoreVersion: (e, t) => ev(e, t, !0),
                                          }),
                                          void (0, lm.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("323079"),
                                                  n.e("437655"),
                                                  n.e("524454"),
                                                  n.e("586467"),
                                                  n.e("231782"),
                                                  n.e("502636"),
                                              ]).then(n.bind(n, 86823));
                                              return (n) => (0, a.jsx)(t, { ...n, ...e });
                                          })
                                      );
                                  },
                                  refreshApplicationId:
                                      Y.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== Y.profileState
                                          ? el
                                          : null,
                                  previewProjectId: l.id,
                              }),
                              ei
                                  ? null
                                  : (0, a.jsx)(B.A.Icon, { icon: u0, tooltip: eu, "aria-label": eu, onClick: ed }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: uZ.nj,
        children: [
            eG.input,
            (0, a.jsx)("main", {
                className: uZ.JX,
                children:
                    null == l
                        ? (0, a.jsxs)("div", {
                              className: uZ.j5,
                              children: [
                                  tn,
                                  (0, a.jsxs)("div", {
                                      className: uZ.sD,
                                      children: [
                                          (0, a.jsx)(E.D, {
                                              variant: "heading-lg/semibold",
                                              children: ee.intl.string(Z.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(v.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: ee.intl.string(Z.default.fINulo),
                                          }),
                                          (0, a.jsx)(C.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: ee.intl.string(Z.default["WFJ/vb"]),
                                              onClick: () => (0, en.hF)(o),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(e8.Provider, {
                              value: eZ,
                              children: (0, a.jsx)(
                                  oU,
                                  {
                                      projectId: l.id,
                                      designFeedbackToggleRef: ef,
                                      applicationId: l.preview_application_id,
                                      previewApplicationId: l.preview_application_id,
                                      surface: e4.sd,
                                      header: tn,
                                      chatOpen: u,
                                      onCloseChat: ec,
                                      chatHeaderAction: tt,
                                      debugOpen: p && f,
                                      onCloseDebug: eb,
                                      onRestoreVersion: ev,
                                      restoreState: j,
                                      previewReady: V,
                                      previewGate: eY,
                                      availability: Y,
                                      activeMode: J,
                                      widgetApplicationId: el,
                                      onOpenPublishedApp: eV,
                                  },
                                  l.id,
                              ),
                          }),
            }),
        ],
    });
}
function u3(e) {
    let {
            projects: t,
            idea: l,
            guildId: r,
            submitting: o,
            createError: u,
            createDisabled: d,
            conjureTarget: m,
            onConjureTargetChange: f,
            nativeAppChannels: h,
            onNativeAppChannelsChange: p,
            eligibleGuilds: j,
            modelSettings: y,
            onModelSettingsChange: w,
            onSelectProject: A,
            onIdeaChange: N,
            onCreate: S,
            onCreateFromTemplate: E,
            onStartTemplate: O,
            onSubmitTemplate: F,
            onCancelTemplate: z,
            onSkipTemplate: U,
            onImportNewProject: G,
            importing: q,
        } = e,
        [$, H] = i.useState(() => ({ guildId: r, filter: uG(r) })),
        V = ($.guildId === r ? $.filter : uG(r)) ?? r,
        K = i.useCallback(
            (e) => {
                (uU.set(r, e), H({ guildId: r, filter: e }));
            },
            [r],
        ),
        W = (0, c.yK)(
            [Y.A],
            () =>
                (function (e, t) {
                    let n = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && n.add(t.guild_id),
                            null != t.preview_guild_id && n.add(t.preview_guild_id));
                    let l = [];
                    for (let e of n) {
                        let t = Y.A.getGuild(e);
                        null != t && l.push(t);
                    }
                    return l.sort((e, t) => e.name.localeCompare(t.name));
                })(t, r),
            [t, r],
        ),
        X = i.useMemo(
            () => [
                { id: "conjure-filter-all", value: "all", leading: L.D, label: ee.intl.string(Z.default["Xi/oIC"]) },
                { id: "conjure-filter-user", value: uF, leading: ua.UserIcon, label: ee.intl.string(Z.default.kCSgmG) },
                {
                    id: "conjure-filter-no-server",
                    value: uz,
                    leading: ui.R,
                    label: ee.intl.string(Z.default["3QFps8"]),
                },
                ...W.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, a.jsx)(ll.Ay, { guild: e, size: ll.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [W],
        ),
        J = (0, c.yK)(
            [eR.Ay, Y.A],
            () => {
                let e = uq(V);
                if (null != e) return eR.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(Y.A.getGuilds()))
                    eR.Ay.hasFetchedGuildProjects(e.id) && t.push(...eR.Ay.getSharedProjects(e.id));
                return t;
            },
            [V],
        );
    i.useEffect(() => {
        let e = uq(V);
        null == e || eR.Ay.hasFetchedGuildProjects(e) || (0, en.hF)(e);
    }, [V]);
    let Q = i.useMemo(
            () =>
                J.filter((e) => u$(e, V)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [J, V],
        ),
        el = i.useMemo(
            () => [
                {
                    label: ee.intl.string(Z.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: uK,
                            label: ee.intl.string(Z.default.UPLaGM),
                            leading: ua.UserIcon,
                        },
                        ...j.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, a.jsx)(ll.Ay, { guild: e, size: ll.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [j],
        ),
        ea = i.useMemo(
            () =>
                t
                    .filter((e) => u$(e, V))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, V],
        ),
        ei = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, e0.Ot)(e, r)
                    ? A(e.id)
                    : (0, g.P)((0, x.o)(ee.intl.string(Z.default["XUl/cs"]), b.Ck.MESSAGE));
            },
            [r, A],
        ),
        er = ee.intl.string(Z.default.ab1sMf),
        es = [
            ee.intl.string(Z.default["9w+Chc"]),
            ee.intl.string(Z.default["9B/zQ2"]),
            ee.intl.string(Z.default.SKsrzl),
        ],
        eo = [
            {
                id: "moderation-bot",
                name: ee.intl.string(Z.default.lGLnE8),
                description: ee.intl.string(Z.default["pAC6k/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: ee.intl.string(Z.default.uJKQTs),
                description: ee.intl.string(Z.default["+dKy/B"]),
            },
            {
                id: "collaborative-whiteboard",
                name: ee.intl.string(Z.default.Eo4gWN),
                description: ee.intl.string(Z.default["5ufpHn"]),
            },
            {
                id: "rust-sphere",
                name: ee.intl.string(Z.default.iF5Oru),
                description: ee.intl.string(Z.default.NbDDO6),
            },
        ],
        ed = i.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: r,
                        eligibleGuilds: j,
                        onStart: (t) => O(e.name, t),
                        onSubmit: (t, n, l) => F(e, t, n, l),
                        onCancel: z,
                        onSkip: U,
                    }),
                    (0, lm.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("246865"), n.e("545473")]).then(
                                n.bind(n, 803032),
                            );
                            return (n) => (0, a.jsx)(e, { ...n, ...t });
                        },
                        { modalKey: "ConjureTemplateWizardModal" },
                    ));
                }
                E(e);
            },
            [j, r, z, E, U, O, F],
        ),
        ec = ee.intl.string(Z.default.zzYLlW),
        em =
            (i.useEffect(() => {
                (0, en.b8)();
            }, []),
            (0, c.bG)([eR.Ay], () => {
                let e = eR.Ay.getMaxProjects();
                return null != e && eR.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - eR.Ay.getOwnedProjects().length)
                    : null;
            })),
        ef = ee.intl.string(Z.default["2XcV3x"]),
        eh = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), d || S());
            },
            [d, S],
        ),
        ep = uq(V) ?? r,
        eg = (0, c.bG)([eR.Ay], () => eR.Ay.getGuildProjectsFetchState(ep), [ep]),
        ex = (0, c.bG)([eR.Ay], () => eR.Ay.getGuildProjectsFetchState(r), [r]),
        [eb, ev] = i.useState(uH),
        ej = i.useMemo(() => ni.w.get(uV(r)) ?? !1, [r]),
        ey = "success" === ex,
        ew = (0, c.yK)([eR.Ay], () => eR.Ay.getSharedProjects(r), [r]).length > 0 || t.some((e) => u$(e, r)),
        ek = eb ?? (!!ew || "error" === ex || (!ey && ej));
    i.useEffect(() => {
        ey && ni.w.set(uV(r), ew);
    }, [ey, ew, r]);
    let eC = i.useCallback((e) => {
            (ni.w.set(uB, e), ev(e));
        }, []),
        eA = i.useCallback(() => eC(!ek), [eC, ek]),
        eN = i.useCallback(() => eC(!1), [eC]),
        eS = ee.intl.string(Z.default.kar7jh),
        eE = ek ? eS : ee.intl.string(Z.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: s()(uZ.nj, uZ.a0),
        children: (0, a.jsxs)("div", {
            className: uZ.Yo,
            children: [
                (0, a.jsxs)("main", {
                    className: uZ.ps,
                    children: [
                        (0, a.jsx)(uM, {
                            title: ee.intl.string(Z.default.uk6jhJ),
                            actions: (0, a.jsx)(B.A.Icon, {
                                icon: I.Z,
                                tooltip: eE,
                                "aria-label": eE,
                                selected: ek,
                                onClick: eA,
                            }),
                        }),
                        (0, a.jsx)(T.Ip, {
                            className: uZ.Yy,
                            children: (0, a.jsx)("div", {
                                className: uZ.Mo,
                                children: (0, a.jsxs)("section", {
                                    className: s()(uZ.Qs, uZ.Ix),
                                    children: [
                                        (0, a.jsx)(uD, {}),
                                        (0, a.jsx)(o7, {}),
                                        (0, a.jsxs)("section", {
                                            className: uZ.WI,
                                            "aria-label": ec,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: uZ.G9,
                                                    children: [
                                                        (0, a.jsx)(v.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ec,
                                                        }),
                                                        (0, a.jsx)(v.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: ee.intl.string(Z.default["N88+Ld"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(oJ, {
                                                    listClassName: uZ.Aw,
                                                    radius: oX,
                                                    children: eo.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: uZ.EA,
                                                                children: (0, a.jsxs)(oV, {
                                                                    disabled: o,
                                                                    ariaLabel: ee.intl.formatToPlainString(
                                                                        Z.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: s()(uZ.nx, uZ.rz),
                                                                    onClick: () => ed(e),
                                                                    children: [
                                                                        (0, a.jsx)(v.E, {
                                                                            className: uZ.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, a.jsx)(v.E, {
                                                                            className: uZ.BK,
                                                                            variant: "text-sm/normal",
                                                                            color: "text-subtle",
                                                                            children: e.description,
                                                                        }),
                                                                    ],
                                                                }),
                                                            },
                                                            e.id,
                                                        ),
                                                    ),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsxs)("section", {
                                            className: uZ.WI,
                                            "aria-label": ef,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: uZ.G9,
                                                    children: [
                                                        (0, a.jsx)(v.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ef,
                                                        }),
                                                        (0, a.jsx)(v.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: ee.intl.string(Z.default.JnJOAn),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(oJ, {
                                                    listClassName: uZ.Aw,
                                                    radius: oY,
                                                    children: es.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: uZ.EA,
                                                                children: (0, a.jsx)(oV, {
                                                                    disabled: o,
                                                                    className: uZ.nx,
                                                                    onClick: () => S(e),
                                                                    children: (0, a.jsx)(v.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: uZ.un,
                                                                        children: e,
                                                                    }),
                                                                }),
                                                            },
                                                            e,
                                                        ),
                                                    ),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(oH, {}),
                                    ],
                                }),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: uZ.Yl,
                            children: (0, a.jsxs)("div", {
                                className: s()(uZ.Qs, uZ.DA),
                                children: [
                                    (0, a.jsx)(P.f, {
                                        label: er,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: l,
                                        placeholder: er,
                                        error: u,
                                        onChange: N,
                                        onKeyDown: eh,
                                    }),
                                    null != h
                                        ? (0, a.jsx)(M.S, {
                                              checked: h,
                                              disabled: o,
                                              onChange: () => p(!h),
                                              label: ee.intl.string(Z.default.qfAk5B),
                                              description: ee.intl.string(Z.default["mq+Pml"]),
                                          })
                                        : null,
                                    (0, a.jsxs)("div", {
                                        className: uZ.VP,
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: uZ.gH,
                                                children: (0, a.jsx)(_.l, {
                                                    selectionMode: "single",
                                                    label: ee.intl.string(Z.default.NyVn6T),
                                                    hideLabel: !0,
                                                    placeholder: ee.intl.string(Z.default.NyVn6T),
                                                    options: el,
                                                    value: m,
                                                    onSelectionChange: f,
                                                    disabled: o,
                                                }),
                                            }),
                                            null != em
                                                ? (0, a.jsx)(v.E, {
                                                      variant: "text-sm/medium",
                                                      color: 0 === em ? "text-feedback-warning" : "text-subtle",
                                                      children:
                                                          0 === em
                                                              ? ee.intl.string(Z.default.s28pGG)
                                                              : ee.intl.formatToPlainString(Z.default.Wy5aK4, {
                                                                    count: em,
                                                                }),
                                                  })
                                                : null,
                                            (0, a.jsx)(at, {
                                                settings: y ?? et.A4,
                                                tiers: et.lO,
                                                choices: (0, eu.b)()
                                                    ? {
                                                          main: [...et.vC.main, ...et.XE.main],
                                                          subagent: [...et.vC.subagent, ...et.XE.subagent],
                                                          thinking: et.vC.thinking,
                                                      }
                                                    : et.vC,
                                                disabled: o,
                                                onChange: w,
                                            }),
                                            (0, a.jsx)(C.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: ee.intl.string(ee.t.CumH4u),
                                                disabled: d,
                                                loading: o,
                                                onClick: () => S(),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("aside", {
                    className: uZ.pA,
                    hidden: !ek,
                    "aria-label": ee.intl.string(Z.default.dWgSAa),
                    children: [
                        (0, a.jsxs)("div", {
                            className: uZ.IR,
                            children: [
                                (0, a.jsx)(v.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: uZ.RM,
                                    children: ee.intl.string(Z.default.dWgSAa),
                                }),
                                (0, a.jsxs)("div", {
                                    className: uZ.Ss,
                                    children: [
                                        (0, a.jsx)(us, { importing: q, onImport: G }),
                                        (0, a.jsx)(B.A.Icon, { icon: R.P, tooltip: eS, "aria-label": eS, onClick: eN }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)(T.Ip, {
                            className: uZ.xe,
                            children: [
                                (0, a.jsx)("div", {
                                    className: uZ.Vw,
                                    children: (0, a.jsx)(_.l, {
                                        selectionMode: "single",
                                        label: ee.intl.string(Z.default.U6TqU9),
                                        hideLabel: !0,
                                        options: X,
                                        value: V,
                                        onSelectionChange: K,
                                    }),
                                }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: uZ.wE,
                                    children: ee.intl.string(Z.default.JQpNkh),
                                }),
                                ("unattempted" === eg || "loading" === eg) && 0 === ea.length
                                    ? (0, a.jsx)("div", { className: uZ.E8, children: (0, a.jsx)(k.y, {}) })
                                    : "error" === eg && 0 === ea.length
                                      ? (0, a.jsxs)("div", {
                                            className: uZ.E8,
                                            children: [
                                                (0, a.jsx)(v.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: uZ.JS,
                                                    children: ee.intl.string(Z.default.DJAPMO),
                                                }),
                                                (0, a.jsx)(C.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: ee.intl.string(Z.default["WFJ/vb"]),
                                                    onClick: () => (0, en.hF)(ep),
                                                }),
                                            ],
                                        })
                                      : 0 === ea.length
                                        ? (0, a.jsx)("div", {
                                              className: uZ.D1,
                                              children: (0, a.jsxs)("div", {
                                                  className: uZ.ST,
                                                  children: [
                                                      (0, a.jsx)(L.D, { size: "lg", color: D.A.colors.TEXT_SUBTLE }),
                                                      (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: uZ.sI,
                                                          children: ee.intl.string(Z.default["9/5sLV"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, a.jsx)("div", {
                                              className: uZ.Dq,
                                              children: ea.map((e) =>
                                                  (0, a.jsx)(
                                                      u9,
                                                      {
                                                          project: e,
                                                          guildId: r,
                                                          onSelect: () => ei(e),
                                                          onRemix: () => (0, uQ.A)(e, r),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                Q.length > 0
                                    ? (0, a.jsxs)("div", {
                                          className: uZ.qx,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: uZ.uc,
                                                  children: [
                                                      (0, a.jsx)(v.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: ee.intl.string(Z.default["wFi8+o"]),
                                                      }),
                                                      (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: ee.intl.string(Z.default.dQ3U1J),
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: uZ.Dq,
                                                  children: Q.map((e) =>
                                                      (0, a.jsx)(
                                                          u9,
                                                          {
                                                              project: e,
                                                              guildId: r,
                                                              onSelect: () => ei(e),
                                                              onRemix: () => (0, uQ.A)(e, r),
                                                              shared: !0,
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function u4(e) {
    let t,
        { guildId: n, projectId: l } = e,
        r = (0, c.yK)([eR.Ay], () => eR.Ay.getOwnedProjects()),
        s = (0, c.yK)([X.Ay], () => X.Ay.getSelfMember(n)?.roles ?? [], [n]),
        o = (0, c.bG)(
            [Y.A, J.A],
            () => {
                let e = Y.A.getGuild(n);
                return null != e && J.A.can(e3.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [u, d] = i.useState(""),
        m = l ?? null,
        [f, h] = i.useState(!1),
        [p, v] = i.useState(null),
        j = (0, eK.z)("VibegrationsScreen"),
        [y, w] = i.useState(null);
    i.useEffect(() => {
        w(null);
    }, [n]);
    let k = i.useMemo(() => (j.some((e) => e.id === n) ? n : uK), [j, n]),
        C = y ?? k,
        A = C === uK ? "user" : "guild",
        N = C === uK ? n : C,
        [S, E] = i.useState(!0),
        [I, T] = i.useState(null);
    (i.useEffect(() => {
        (0, en.hF)(n);
    }, [n, s, o]),
        i.useEffect(() => {
            (0, en.dm)(n, m);
        }, [n, m]));
    let P = i.useCallback(
            async (e, t, n) => {
                let l = await (0, en.gA)({ guild_id: t, install_scope: n, flags: (0, et.wo)("guild" === n && S) });
                ((0, Q.Hc)(l),
                    (0, Q.r2)(l, I ?? et.A4),
                    e(l),
                    (0, H.pX)(e3.BVt.CHANNEL(t, uy.VV.CONJURE, l)),
                    d(""),
                    T(null));
            },
            [S, I],
        ),
        M = i.useCallback(
            async (e) => {
                let t = (e ?? u).trim(),
                    n = el({ idea: t, installScope: A, submitting: f });
                if ("idea" !== n && "submitting" !== n) {
                    (null != e && d(e), h(!0), v(null));
                    try {
                        await P((e) => (0, Q.dv)(e, t), N, A);
                    } catch (e) {
                        v((0, ei.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [P, A, N, u, f],
        ),
        _ = i.useCallback(
            async (e) => {
                if (!f) {
                    (h(!0), v(null));
                    try {
                        await P(
                            (t) => {
                                var n;
                                (0, Q.dv)(
                                    t,
                                    ((n = e.name),
                                    ee.intl.formatToPlainString(Z.default["0PQip6"], { templateName: n })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            N,
                            A,
                        );
                    } catch (e) {
                        v((0, ei.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [P, A, N, f],
        ),
        R = i.useCallback(
            async (e, t) => {
                let n = await (0, en.gA)({ guild_id: t, install_scope: "guild", flags: (0, et.wo)(S) });
                return ((0, Q.Hc)(n), (0, Q.r2)(n, I ?? et.A4), (0, Q.dv)(n, (0, ed.Wl)(e)), n);
            },
            [S, I],
        ),
        L = i.useCallback(async (e, t, n, l) => {
            if (eR.Ay.getProject(t)?.guild_id !== n) {
                let e = await (0, en.M7)(t, { guild_id: n, preview_guild_id: n });
                if (!e.ok) throw new ei.DS((0, ei.hj)(e), e.status);
            }
            ((0, Q.dv)(t, l, void 0, { templateId: e.id }), (0, H.pX)(e3.BVt.CHANNEL(n, uy.VV.CONJURE, t)), T(null));
        }, []),
        D = i.useCallback((e) => {
            (0, en.xx)(e).catch(() => void 0);
        }, []),
        O = i.useCallback(
            (e) => {
                let t = eR.Ay.getProject(e)?.guild_id ?? n;
                ((0, H.pX)(e3.BVt.CHANNEL(t, uy.VV.CONJURE, e)), T(null));
            },
            [n],
        ),
        [F, z] = i.useState(!1),
        U = i.useCallback(
            async (e, t) => {
                let l = ut(e);
                if (null != l) return void (0, g.P)((0, x.o)(l, b.Ck.FAILURE));
                z(!0);
                let a = null;
                try {
                    ((a = await (0, en.gA)({ guild_id: n, install_scope: t, flags: (0, et.wo)("guild" === t && S) })),
                        (0, Q.Hc)(a),
                        (0, Q.r2)(a, I ?? et.A4),
                        await ue(a, e, ee.intl.string(Z.default["LUc7/5"])),
                        (0, H.pX)(e3.BVt.CHANNEL(n, uy.VV.CONJURE, a)),
                        T(null));
                } catch {
                    (null != a && (await (0, en.xx)(a).catch(() => void 0)),
                        (0, g.P)((0, x.o)(ee.intl.string(Z.default["Q+l4Hv"]), b.Ck.FAILURE)));
                } finally {
                    z(!1);
                }
            },
            [n, S, I],
        ),
        G = i.useCallback(
            (e) => {
                (0, H.pX)(e3.BVt.CHANNEL(n, uy.VV.CONJURE, e));
            },
            [n],
        ),
        q = i.useCallback(() => {
            (0, H.pX)(e3.BVt.CHANNEL(n, uy.VV.CONJURE));
        }, [n]),
        $ = i.useCallback((e) => {
            (d(e), v(null));
        }, []),
        B = (0, c.bG)(
            [eR.Ay],
            () => {
                if (null == m) return null;
                let e = eR.Ay.getProject(m);
                return null == e || (0, eR.PV)(e) || e.guild_id === n ? e : null;
            },
            [m, n],
        ),
        V = (0, c.bG)([eR.Ay], () => eR.Ay.hasFetchedGuildProjects(n), [n]);
    return null != m
        ? (0, a.jsx)(u5, { project: B, projectsLoaded: V, onBack: q, guildId: n }, m)
        : (0, a.jsx)(u3, {
              projects: r,
              modelSettings: I,
              onModelSettingsChange: T,
              idea: u,
              guildId: n,
              submitting: f,
              createError: p,
              createDisabled: "idea" === (t = el({ idea: u, installScope: A, submitting: f })) || "submitting" === t,
              onSelectProject: G,
              onIdeaChange: $,
              onCreate: M,
              onCreateFromTemplate: _,
              onStartTemplate: R,
              onSubmitTemplate: L,
              onCancelTemplate: D,
              onSkipTemplate: O,
              onImportNewProject: U,
              importing: F,
              conjureTarget: C,
              onConjureTargetChange: w,
              nativeAppChannels: "guild" === A ? S : null,
              onNativeAppChannelsChange: E,
              eligibleGuilds: j,
          });
}
