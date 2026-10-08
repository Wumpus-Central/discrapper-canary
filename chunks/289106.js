n.d(t, { bI: () => W, Ay: () => J, ub: () => $, qF: () => F, FZ: () => z });
var l = n(582128),
    i = n(17928),
    a = n(73153),
    r = n(803306),
    u = n(627363),
    s = n(587895),
    o = n(321191),
    d = n(734057),
    c = n(808728),
    p = n(71393),
    f = n(576705),
    h = n(164892),
    g = n(712808),
    m = n(238490),
    b = n(371169),
    v = n(260498),
    x = n(426035),
    y = n(385081),
    A = n(868695),
    C = n(246338),
    j = n(803101),
    w = n(248675),
    M = n(660183);
function P(e) {
    let { installScope: t, integrationStatus: n, guildName: l, appChannelName: i } = e;
    if (null == e.status) return null;
    let a = "up_to_date" === e.status.state && e.liveNameOutdated ? { ...e.status, state: "changes" } : e.status,
        r = a.surface;
    if ("unpublished" === a.state && null == r && n?.preview_ready !== !0) return null;
    let u =
            null == r
                ? null
                : "user" === t
                  ? (function (e) {
                        switch (e) {
                            case "bot":
                                return {
                                    update: M.intl.string(w.default.JpDnbE),
                                    open: M.intl.string(w.default.NNIwRu),
                                    destination: "dm",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: M.intl.string(w.default.QesMDC),
                                    open: M.intl.string(w.default.iyQTsb),
                                    destination: "launch",
                                    navigatesOnFirstPublish: !1,
                                    navigatesOnUpdate: !1,
                                };
                            case "widget":
                                return {
                                    update: M.intl.string(w.default["LUi/55"]),
                                    open: M.intl.string(w.default.TXUK1g),
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
                        let l = M.intl.formatToPlainString(w.default.fTgw6C, { server: t });
                        switch (e) {
                            case "bot":
                                return {
                                    update: M.intl.string(w.default.JpDnbE),
                                    open: l,
                                    destination: "guild",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: M.intl.string(w.default.QesMDC),
                                    open: null == n ? l : M.intl.formatToPlainString(w.default.l9xGQD, { channel: n }),
                                    destination: "channel",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "automod":
                                return {
                                    update: M.intl.string(w.default.bwBMMn),
                                    open: M.intl.string(w.default.KjbLum),
                                    destination: "automod",
                                    navigatesOnFirstPublish: !1,
                                    navigatesOnUpdate: !1,
                                };
                            case "widget":
                                return null;
                        }
                    })(r, l, i),
        s = (function (e) {
            let { installScope: t, status: n, appChannelName: l, appChannelPending: i, botInGuild: a } = e;
            return (
                "guild" === t &&
                null != n &&
                "unpublished" !== n.state &&
                ("activity" === n.surface ? null == l && !0 !== i : "bot" === n.surface && !1 === a)
            );
        })(e);
    if (null != u && "up_to_date" === a.state && !s)
        return {
            label: u.open,
            intent: "open",
            action: "open",
            destination: u.destination,
            navigatesOnPublish: !1,
            upToDate: !0,
            isUpdate: !1,
            disabledReason: null,
            notice: null,
        };
    let o = (function (e) {
            let { installScope: t, guildName: n, canManageGuild: l } = e;
            return "guild" !== t || !1 !== l ? null : M.intl.formatToPlainString(w.default.N4NkyR, { server: n ?? "" });
        })(e),
        d = (0, m.Qg)({
            installScope: t,
            previewReady: n?.preview_ready === !0,
            integrationInstalled: n?.integration_installed ?? null,
            botPermissionsChanged: n?.bot_permissions_changed === !0,
        }),
        c = "changes" === a.state && !s,
        p = {
            intent: d ? "consent_then_publish" : "publish",
            destination: u?.destination ?? null,
            upToDate: !1,
            isUpdate: c,
            disabledReason: o,
            notice:
                null == o
                    ? (function (e) {
                          let { installScope: t, guildName: n, canManageChannels: l, usesAppChannels: i } = e;
                          return "guild" === t && i && !1 === l
                              ? M.intl.formatToPlainString(w.default.eHYXFg, { server: n ?? "" })
                              : null;
                      })(e)
                    : null,
        },
        f = null != u && (c ? u.navigatesOnUpdate : u.navigatesOnFirstPublish);
    if (d && n?.bot_permissions_changed === !0)
        return { ...p, label: M.intl.string(w.default["tUeY/h"]), action: "review_permissions", navigatesOnPublish: f };
    let h = u?.update ?? M.intl.string(w.default.QesMDC);
    return { ...p, label: c ? h : M.intl.string(w.default["120EFN"]), action: "publish", navigatesOnPublish: f };
}
var k = n(516288),
    S = n(308528),
    I = n(625180),
    N = n(25451),
    E = n(976860),
    _ = n(345942),
    O = n(287809),
    R = n(652215),
    L = n(165610);
let W = 221552 == n.j ? l.createContext(null) : null;
function F(e) {
    let t = s.A.getApplication(e.application_id)?.name;
    return null != t && t !== e.name;
}
function T(e, t) {
    let n = v.Ay.getProject(e);
    if (null == n) return null;
    let l = "user" === n.install_scope ? null : (n.guild_id ?? t),
        i = null == l ? null : (0, C.i8)(l, n.application_id),
        a = null == l ? null : p.A.getGuild(l);
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
            canManageGuild: null == a ? null : f.A.can(R.xBc.MANAGE_GUILD, a),
            canManageChannels: null == a ? null : f.A.can(R.xBc.MANAGE_CHANNELS, a),
            usesAppChannels: (0, h.Hv)(n),
            botInGuild: (0, x.AS)(n, l),
            liveNameOutdated: F(n),
        },
    };
}
function G(e, t, n) {
    return (function e(t, n) {
        let l,
            { applicationId: i, guildId: a, appChannelId: r, openProfile: u, openAutomodSettings: o } = n;
        switch (t) {
            case "launch":
                if (null != a) return e("channel", { applicationId: i, guildId: a, appChannelId: r, openProfile: u });
                if ((0, N.X)(s.A.getApplication(i)))
                    return (I.A.launchFrame({ applicationId: i, surface: L.sd }).catch(() => {}), Promise.resolve());
                break;
            case "profile": {
                let e = O.default.getCurrentUser()?.id;
                if (null != e) return (u(e), Promise.resolve());
                break;
            }
            case "channel":
                if (null != a && null != r) return ((0, E.pX)(R.BVt.CHANNEL(a, r)), Promise.resolve());
                break;
            case "automod":
                if (null != a && null != o) return (o(a), Promise.resolve());
        }
        if ("dm" !== t && null != a) {
            let e;
            return (
                null != (e = c.Ay.getDefaultChannel(a)?.id) ? (0, E.pX)(R.BVt.CHANNEL(a, e)) : (0, _.u)(a),
                Promise.resolve()
            );
        }
        return ((l = s.A.getApplication(i)?.bot?.id ?? i), S.A.openPrivateChannel({ recipientIds: l }));
    })(t, {
        applicationId: e.project.application_id,
        guildId: e.guildId,
        appChannelId: e.appChannelId,
        openProfile: n.openProfile,
        openAutomodSettings: n.openAutomodSettings,
    });
}
async function D(e, t) {
    let n = v.Ay.getProject(e),
        l = n?.preview_application_id;
    if (null == n || null == l) return;
    let i = (0, j.a)(n, v.Ay.getIntegrationStatus(e), t);
    (null == s.A.getApplication(l) && (await (0, u.TA)(l).catch(() => {})),
        await new Promise((e) => {
            A.A.openConjureAppInstallModal({
                applicationId: l,
                application: s.A.getApplication(l) ?? null,
                guildId: i,
                onClose: e,
            });
        }),
        await (0, j.$)(n, i).catch(() => {}),
        await (0, b.U1)(e).catch(() => {}));
}
function B(e, t, n) {
    let { project: l } = e,
        { platform: i, guildId: a } = n,
        r = l.id,
        u = t.navigatesOnPublish ? t.destination : null,
        s = "user" === l.install_scope || null != u ? null : (0, g.$C)(r);
    (s?.catch(() => {}), "channel" === u && U(r, !0));
    let o = (0, g.TV)(r).then((e) => {
            if (!0 !== e.ok) {
                let t;
                throw Error(
                    null != (t = e.detail?.trim()) && "" !== t
                        ? M.intl.formatToPlainString(w.default["7ZsIF1"], { reason: t })
                        : M.intl.string(w.default.gMWZeG),
                );
            }
            return e;
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
            () => {
                (null != e.guildId && Z(l),
                    null != u &&
                        d
                            .then(() => ("channel" === u ? q(r, a) : void 0))
                            .finally(() => U(r, !1))
                            .then(() => G(T(r, a) ?? e, u, i))
                            .catch(() => {}));
            },
            (e) => {
                (U(r, !1), i.showError(e instanceof Error ? e.message : M.intl.string(w.default.gMWZeG)));
            },
        ),
        null != s && null != e.guildId)
    ) {
        let t = o.then(() => {});
        (t.catch(() => {}),
            i.openPublishNotes({
                projectId: r,
                guildId: e.guildId,
                applicationId: l.application_id,
                projectName: l.name,
                publish: t,
                initialDraft: s,
            }));
    }
}
function U(e, t) {
    a.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: e, pending: t });
}
async function q(e, t) {
    let n = Date.now() + 5e3;
    for (; T(e, t)?.appChannelId == null && Date.now() < n;) await new Promise((e) => setTimeout(e, 250));
}
function Z(e) {
    (0, r.eO)((0, x.Du)(e), { withMutualGuilds: !0 }).catch(() => {});
}
function $(e, t) {
    let n = T(e, t.guildId);
    if (null == n) return;
    let l = P({
        ...n.input,
        status: null == n.input.status ? null : { ...n.input.status, state: "up_to_date" },
    })?.destination;
    null != l && G(n, l, t.platform).catch(() => {});
}
let X = new Set();
async function z(e, t, n) {
    let { guildId: l, platform: i } = n;
    if (!0 === n.busy || X.has(e)) return;
    let a = T(e, l);
    if (null == a || v.Ay.isProjectPublishing(e)) return;
    let r = P(a.input);
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
            null != r.destination && G(a, r.destination, i).catch(() => {});
            return;
        }
        if (null == r.disabledReason) {
            if (a.input.integrationStatus?.preview_ready !== !0) return void i.showPublishBlocked(k.k.NO_PREVIEW);
            if ("consent_then_publish" === r.intent) {
                X.add(e);
                try {
                    await (i.requestConsent ?? ((e) => D(e, l)))(e);
                } finally {
                    X.delete(e);
                }
                if (v.Ay.isProjectPublishing(e)) return;
                let t = T(e, l),
                    a = t?.input.integrationStatus ?? null;
                if (
                    null == t ||
                    (0, m.Qg)({
                        installScope: t.project.install_scope,
                        previewReady: a?.preview_ready === !0,
                        integrationInstalled: a?.integration_installed ?? null,
                        botPermissionsChanged: a?.bot_permissions_changed === !0,
                    })
                )
                    return;
                B(t, r, n);
                return;
            }
            B(a, r, n);
        }
    }
}
function J(e, t) {
    let n = l.useContext(W),
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
            integrationStatus: C,
            guildName: j,
            appChannelName: w,
            appChannelPending: M,
            canManageGuild: k,
            canManageChannels: S,
            usesAppChannels: I,
            botInGuild: N,
            liveNameOutdated: E,
        } = (0, i.cf)(
            [v.Ay, p.A, c.Ay, d.A, f.A, o.A, s.A],
            () => {
                let t = null == e || null == r ? null : T(e, r);
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
                          integrationStatus: C,
                          guildName: j,
                          appChannelName: w,
                          appChannelPending: M,
                          canManageGuild: k,
                          canManageChannels: S,
                          usesAppChannels: I,
                          botInGuild: N,
                          liveNameOutdated: E,
                      },
            [m, y, A, C, j, w, M, k, S, I, N, E],
        ),
        O = _?.status?.state ?? null,
        R = _?.installScope === "guild" && _.status?.surface === "bot";
    l.useEffect(() => {
        null != m && null != b && R && null != O && "unpublished" !== O && Z(m);
    }, [m?.id, b, R, O]);
    let L = m?.application_id ?? null,
        F = null != O && "unpublished" !== O;
    l.useEffect(() => {
        null != L &&
            F &&
            null == s.A.getApplication(L) &&
            !s.A.isFetchingApplication(L) &&
            (0, u.TA)(L).catch(() => {});
    }, [L, F]);
    let G = l.useMemo(() => (null == _ ? null : P(_)), [_]),
        D = l.useCallback(
            (t) => {
                null != e &&
                    null != a &&
                    z(e, t, a).catch((t) => {
                        console.error("[vibegrations] publish action failed", e, t);
                    });
            },
            [e, a],
        );
    return null != a && h && null != G
        ? {
              ...G,
              status: _?.status ?? null,
              guildId: b,
              appChannelId: x,
              publishing: g,
              disabled: g || !0 === a.busy || null != G.disabledReason,
              run: D,
          }
        : null;
}
