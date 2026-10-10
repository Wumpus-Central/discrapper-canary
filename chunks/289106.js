n.d(t, { bI: () => F, $l: () => U, Ay: () => Y, ub: () => $, qF: () => G, FZ: () => Z });
var l = n(582128),
    i = n(17928),
    a = n(73153),
    r = n(803306),
    s = n(627363),
    u = n(587895),
    o = n(321191),
    d = n(734057),
    c = n(808728),
    f = n(71393),
    p = n(576705),
    h = n(164892),
    g = n(712808),
    m = n(238490),
    b = n(371169),
    v = n(42766),
    x = n(426035),
    y = n(385081),
    A = n(28480),
    j = n(246338),
    C = n(803101),
    S = n(248675),
    k = n(660183);
function w(e) {
    let { installScope: t, integrationStatus: n, guildName: l, appChannelName: i } = e;
    if (null == e.status) return null;
    let a = "up_to_date" === e.status.state && e.liveNameOutdated ? { ...e.status, state: "changes" } : e.status,
        r = a.surface;
    if ("unpublished" === a.state && null == r && n?.preview_ready !== !0) return null;
    let s =
            null == r
                ? null
                : "user" === t
                  ? (function (e) {
                        switch (e) {
                            case "bot":
                                return {
                                    update: k.intl.string(S.default.JpDnbE),
                                    open: k.intl.string(S.default.NNIwRu),
                                    destination: "dm",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: k.intl.string(S.default.QesMDC),
                                    open: k.intl.string(S.default.iyQTsb),
                                    destination: "launch",
                                    navigatesOnFirstPublish: !1,
                                    navigatesOnUpdate: !1,
                                };
                            case "widget":
                                return {
                                    update: k.intl.string(S.default["LUi/55"]),
                                    open: k.intl.string(S.default.TXUK1g),
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
                        let l = k.intl.formatToPlainString(S.default.fTgw6C, { server: t });
                        switch (e) {
                            case "bot":
                                return {
                                    update: k.intl.string(S.default.JpDnbE),
                                    open: l,
                                    destination: "guild",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: k.intl.string(S.default.QesMDC),
                                    open: null == n ? l : k.intl.formatToPlainString(S.default.l9xGQD, { channel: n }),
                                    destination: "channel",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "automod":
                                return {
                                    update: k.intl.string(S.default.bwBMMn),
                                    open: k.intl.string(S.default.KjbLum),
                                    destination: "automod",
                                    navigatesOnFirstPublish: !1,
                                    navigatesOnUpdate: !1,
                                };
                            case "widget":
                                return null;
                        }
                    })(r, l, i),
        u = (function (e) {
            let { installScope: t, status: n, appChannelName: l, appChannelPending: i, botInGuild: a } = e;
            return (
                "guild" === t &&
                null != n &&
                "unpublished" !== n.state &&
                ("activity" === n.surface ? null == l && !0 !== i : "bot" === n.surface && !1 === a)
            );
        })(e);
    if (null != s && "up_to_date" === a.state && !u)
        return {
            label: s.open,
            intent: "open",
            action: "open",
            destination: s.destination,
            navigatesOnPublish: !1,
            upToDate: !0,
            isUpdate: !1,
            disabledReason: null,
            confirmReason: null,
            missingSurface: null,
        };
    let o = (function (e) {
            let { installScope: t, guildName: n, canManageGuild: l } = e;
            return "guild" !== t || !1 !== l ? null : k.intl.format(S.default.N4NkyR, { server: n ?? "" });
        })(e),
        d = (0, m.Qg)({
            installScope: t,
            previewReady: n?.preview_ready === !0,
            integrationInstalled: n?.integration_installed ?? null,
            botPermissionsChanged: n?.bot_permissions_changed === !0,
        }),
        c = "changes" === a.state && !u,
        f = {
            intent: d ? "consent_then_publish" : "publish",
            destination: s?.destination ?? null,
            upToDate: !1,
            isUpdate: c,
            disabledReason: o,
            confirmReason:
                null == o
                    ? (function (e) {
                          let { installScope: t, guildName: n, canManageChannels: l, usesAppChannels: i } = e;
                          return "guild" === t && i && !1 === l
                              ? k.intl.format(S.default.eHYXFg, { server: n ?? "" })
                              : null;
                      })(e)
                    : null,
            missingSurface: u ? ("activity" === r ? "channel" : "bot") : null,
        },
        p = null != s && (c ? s.navigatesOnUpdate : s.navigatesOnFirstPublish);
    if (d && n?.bot_permissions_changed === !0)
        return { ...f, label: k.intl.string(S.default["tUeY/h"]), action: "review_permissions", navigatesOnPublish: p };
    let h = s?.update ?? k.intl.string(S.default.QesMDC);
    return { ...f, label: c ? h : k.intl.string(S.default["120EFN"]), action: "publish", navigatesOnPublish: p };
}
var M = n(516288),
    P = n(308528),
    N = n(625180),
    E = n(25451),
    I = n(976860),
    _ = n(345942),
    R = n(287809),
    L = n(652215),
    O = n(165610);
let F = 221552 == n.j ? l.createContext(null) : null;
function G(e) {
    if ((0, h.Fl)(e)) return !1;
    let t = u.A.getApplication(e.application_id)?.name;
    return null != t && t !== e.name;
}
function B(e, t) {
    let n = v.Ay.getProject(e);
    if (null == n) return null;
    let l = "user" === n.install_scope ? null : (n.guild_id ?? t),
        i = null == l ? null : (0, j.i8)(l, n.application_id),
        a = null == l ? null : f.A.getGuild(l);
    return {
        project: n,
        guildId: l,
        appChannelId: i,
        input: {
            installScope: n.install_scope,
            status: v.Ay.getPublishStatus(e),
            integrationStatus: v.Ay.getIntegrationStatus(e),
            guildName: a?.name ?? null,
            appChannelName: null == i ? null : (d.A.getChannel(i)?.name ?? null),
            appChannelPending: v.Ay.isAppChannelPending(e),
            canManageGuild: null == a ? null : p.A.can(L.xBc.MANAGE_GUILD, a),
            canManageChannels: null == a ? null : p.A.can(L.xBc.MANAGE_CHANNELS, a),
            usesAppChannels: (0, h.Hv)(n),
            botInGuild: (0, x.AS)(n, l),
            liveNameOutdated: G(n),
        },
    };
}
function T(e, t, n) {
    return (function e(t, n) {
        let l,
            { applicationId: i, guildId: a, appChannelId: r, openProfile: s, openAutomodSettings: o } = n;
        switch (t) {
            case "launch":
                if (null != a) return e("channel", { applicationId: i, guildId: a, appChannelId: r, openProfile: s });
                if ((0, E.X)(u.A.getApplication(i)))
                    return (N.A.launchFrame({ applicationId: i, surface: O.sd }).catch(() => {}), Promise.resolve());
                break;
            case "profile": {
                let e = R.default.getCurrentUser()?.id;
                if (null != e) return (s(e), Promise.resolve());
                break;
            }
            case "channel":
                if (null != a && null != r) return ((0, I.pX)(L.BVt.CHANNEL(a, r)), Promise.resolve());
                break;
            case "automod":
                if (null != a && null != o) return (o(a), Promise.resolve());
        }
        if ("dm" !== t && null != a) {
            let e;
            return (
                null != (e = c.Ay.getDefaultChannel(a)?.id) ? (0, I.pX)(L.BVt.CHANNEL(a, e)) : (0, _.u)(a),
                Promise.resolve()
            );
        }
        return ((l = u.A.getApplication(i)?.bot?.id ?? i), P.A.openPrivateChannel({ recipientIds: l }));
    })(t, {
        applicationId: e.project.application_id,
        guildId: e.guildId,
        appChannelId: e.appChannelId,
        openProfile: n.openProfile,
        openAutomodSettings: n.openAutomodSettings,
    });
}
async function W(e, t) {
    let n = v.Ay.getProject(e),
        l = n?.preview_application_id;
    if (null == n || null == l) return;
    let i = (0, C.a)(n, v.Ay.getIntegrationStatus(e), t);
    (null == u.A.getApplication(l) && (await (0, s.TA)(l).catch(() => {})),
        await new Promise((e) => {
            A.A.openConjureAppInstallModal({
                applicationId: l,
                application: u.A.getApplication(l) ?? null,
                guildId: i,
                onClose: e,
            });
        }),
        await (0, C.$)(n, i).catch(() => {}),
        await (0, b.U1)(e).catch(() => {}));
}
async function U(e, t, n) {
    let { name: l, icon: i, description: a } = t,
        r = {};
    if (
        (l !== n.name && (r.name = l),
        null != i && (r.icon = i),
        a.trim() !== n.description.trim() && (r.description = a.trim()),
        0 === Object.keys(r).length)
    )
        return !0;
    try {
        let { ok: t } = await (0, b.CW)(e, r);
        return t;
    } catch {
        return !1;
    }
}
async function q(e) {
    var t;
    let n,
        l = e.preview_application_id;
    return (
        null == l || u.A.isHydrated(l) || (await (0, s.TA)(l).catch(() => {})),
        (t = e.id),
        null == (n = v.Ay.getProject(t)?.preview_application_id) ? "" : (u.A.getApplication(n)?.description ?? "")
    );
}
function D(e, t, n) {
    let { project: l } = e,
        { platform: i, guildId: a } = n,
        r = l.id,
        s = t.navigatesOnPublish ? t.destination : null,
        u = "user" === l.install_scope || null != s ? null : (0, g.$C)(r);
    (u?.catch(() => {}), "channel" === s && z(r, !0));
    let o = (0, g.TV)(r).then((e) => {
            let t;
            if (!0 === e.ok) return e;
            throw (
                20088 === e.code && (0, b.U1)(r).catch(() => {}),
                Error(
                    null != (t = e.detail?.trim()) && "" !== t
                        ? k.intl.formatToPlainString(S.default["7ZsIF1"], { reason: t })
                        : k.intl.string(S.default.gMWZeG),
                )
            );
        }),
        d = o.then(
            () =>
                (0, b.tZ)(r, { isPreview: !1 }).catch((e) => {
                    console.error("[vibegrations] post-publish refresh failed", r, e);
                }),
            () => {},
        );
    if (
        (o.then(
            (t) => {
                (null != e.guildId && V(l),
                    !0 === t.channel_skipped && z(r, !1),
                    null != s &&
                        !0 !== t.channel_skipped &&
                        d
                            .then(() => ("channel" === s ? Q(r, a) : void 0))
                            .finally(() => z(r, !1))
                            .then(() => T(B(r, a) ?? e, s, i))
                            .catch(() => {}));
            },
            (e) => {
                (z(r, !1), i.showError(e instanceof Error ? e.message : k.intl.string(S.default.gMWZeG)));
            },
        ),
        null != u && null != e.guildId)
    ) {
        let t = o.then(() => {});
        (t.catch(() => {}),
            i.openPublishNotes({
                projectId: r,
                guildId: e.guildId,
                applicationId: l.application_id,
                projectName: l.name,
                publish: t,
                initialDraft: u,
            }));
    }
}
function z(e, t) {
    a.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: e, pending: t });
}
async function Q(e, t) {
    let n = Date.now() + 5e3;
    for (; B(e, t)?.appChannelId == null && Date.now() < n;) await new Promise((e) => setTimeout(e, 250));
}
function V(e) {
    (0, r.eO)((0, x.Du)(e), { withMutualGuilds: !0 }).catch(() => {});
}
function $(e, t) {
    let n = B(e, t.guildId);
    if (null == n) return;
    let l = w({
        ...n.input,
        status: null == n.input.status ? null : { ...n.input.status, state: "up_to_date" },
    })?.destination;
    null != l && T(n, l, t.platform).catch(() => {});
}
let X = new Set();
async function Z(e, t, n) {
    let { guildId: l, platform: i } = n;
    if (!0 === n.busy || X.has(e)) return;
    let a = B(e, l);
    if (null == a || v.Ay.isProjectPublishing(e)) return;
    let r = w(a.input);
    if (null != r) {
        if (
            ((0, y.yJ)(e, {
                entryPoint: t,
                publishState: a.input.status?.state ?? null,
                surface: a.input.status?.surface ?? null,
                installScope: a.project.install_scope,
                action: r.action,
            }),
            "open" === r.intent)
        ) {
            null != r.destination && T(a, r.destination, i).catch(() => {});
            return;
        }
        if (null != r.disabledReason) return void i.showPublishBlocked(M.k.MISSING_MANAGE_SERVER, r.disabledReason);
        if (a.input.integrationStatus?.preview_ready !== !0) return void i.showPublishBlocked(M.k.NO_PREVIEW);
        if (null != r.confirmReason)
            return void i.showPublishBlocked(M.k.MISSING_MANAGE_CHANNELS, r.confirmReason, () => {
                H(e, r, n).catch(() => {});
            });
        await H(e, r, n);
    }
}
async function H(e, t, n) {
    let { guildId: l, platform: i } = n,
        a = B(e, l);
    if (!(null == a || v.Ay.isProjectPublishing(e))) {
        if (null != i.promptFirstPublish && a.input.status?.state === "unpublished" && (0, v.PV)(a.project)) {
            let t;
            X.add(e);
            try {
                t = await i.promptFirstPublish({ projectId: e, name: a.project.name, description: await q(a.project) });
            } finally {
                X.delete(e);
            }
            if (!t || v.Ay.isProjectPublishing(e)) return;
            a = B(e, l) ?? a;
        }
        if ("consent_then_publish" === t.intent) {
            X.add(e);
            try {
                await (i.requestConsent ?? ((e) => W(e, l)))(e);
            } finally {
                X.delete(e);
            }
            if (v.Ay.isProjectPublishing(e)) return;
            let a = B(e, l),
                r = a?.input.integrationStatus ?? null;
            if (
                null == a ||
                (0, m.Qg)({
                    installScope: a.project.install_scope,
                    previewReady: r?.preview_ready === !0,
                    integrationInstalled: r?.integration_installed ?? null,
                    botPermissionsChanged: r?.bot_permissions_changed === !0,
                })
            )
                return;
            D(a, t, n);
            return;
        }
        D(a, t, n);
    }
}
function Y(e, t) {
    let n = l.useContext(F),
        a = t ?? n,
        r = a?.guildId ?? null,
        {
            canPublish: h,
            publishing: g,
            project: m,
            guildId: b,
            appChannelId: x,
            installScope: y,
            status: A,
            integrationStatus: j,
            guildName: C,
            appChannelName: S,
            appChannelPending: k,
            canManageGuild: M,
            canManageChannels: P,
            usesAppChannels: N,
            botInGuild: E,
            liveNameOutdated: I,
        } = (0, i.cf)(
            [v.Ay, f.A, c.Ay, d.A, p.A, o.A, u.A],
            () => {
                let t = null == e || null == r ? null : B(e, r);
                return {
                    canPublish: null != t && (0, v.jf)(t.project),
                    project: t?.project ?? null,
                    guildId: t?.guildId ?? null,
                    appChannelId: t?.appChannelId ?? null,
                    publishing: null != e && v.Ay.isProjectPublishing(e),
                    installScope: t?.input.installScope ?? null,
                    status: t?.input.status ?? null,
                    integrationStatus: t?.input.integrationStatus ?? null,
                    guildName: t?.input.guildName ?? null,
                    appChannelName: t?.input.appChannelName ?? null,
                    appChannelPending: t?.input.appChannelPending ?? !1,
                    canManageGuild: t?.input.canManageGuild ?? null,
                    canManageChannels: t?.input.canManageChannels ?? null,
                    usesAppChannels: t?.input.usesAppChannels ?? !1,
                    botInGuild: t?.input.botInGuild ?? null,
                    liveNameOutdated: t?.input.liveNameOutdated ?? !1,
                };
            },
            [e, r],
        ),
        _ = l.useMemo(
            () =>
                null == m
                    ? null
                    : {
                          installScope: y,
                          status: A,
                          integrationStatus: j,
                          guildName: C,
                          appChannelName: S,
                          appChannelPending: k,
                          canManageGuild: M,
                          canManageChannels: P,
                          usesAppChannels: N,
                          botInGuild: E,
                          liveNameOutdated: I,
                      },
            [m, y, A, j, C, S, k, M, P, N, E, I],
        ),
        R = _?.status?.state ?? null,
        L = _?.installScope === "guild" && _.status?.surface === "bot";
    l.useEffect(() => {
        null != m && null != b && L && null != R && "unpublished" !== R && V(m);
    }, [m?.id, b, L, R]);
    let O = m?.application_id ?? null,
        G = null != R && "unpublished" !== R;
    l.useEffect(() => {
        null != O &&
            G &&
            null == u.A.getApplication(O) &&
            !u.A.isFetchingApplication(O) &&
            (0, s.TA)(O).catch(() => {});
    }, [O, G]);
    let T = l.useMemo(() => (null == _ ? null : w(_)), [_]),
        W = l.useCallback(
            (t) => {
                null != e &&
                    null != a &&
                    Z(e, t, a).catch((t) => {
                        console.error("[vibegrations] publish action failed", e, t);
                    });
            },
            [e, a],
        );
    return null != a && h && null != T
        ? {
              ...T,
              status: _?.status ?? null,
              guildId: b,
              appChannelId: x,
              publishing: g,
              disabled: g || !0 === a.busy,
              run: W,
          }
        : null;
}
