n.d(t, { bI: () => G, Ay: () => X, vL: () => B, ub: () => V, qF: () => T, FZ: () => Z });
var l = n(582128),
    i = n(17928),
    a = n(73153),
    r = n(803306),
    u = n(627363),
    s = n(587895),
    o = n(321191),
    d = n(734057),
    c = n(808728),
    f = n(71393),
    p = n(576705),
    h = n(164892),
    m = n(712808),
    g = n(238490),
    b = n(371169),
    v = n(42766),
    x = n(426035),
    y = n(385081),
    A = n(28480),
    C = n(246338),
    j = n(803101),
    M = n(248675),
    w = n(660183);
function S(e) {
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
                                    update: w.intl.string(M.default.JpDnbE),
                                    open: w.intl.string(M.default.NNIwRu),
                                    destination: "dm",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: w.intl.string(M.default.QesMDC),
                                    open: w.intl.string(M.default.iyQTsb),
                                    destination: "launch",
                                    navigatesOnFirstPublish: !1,
                                    navigatesOnUpdate: !1,
                                };
                            case "widget":
                                return {
                                    update: w.intl.string(M.default["LUi/55"]),
                                    open: w.intl.string(M.default.TXUK1g),
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
                        let l = w.intl.formatToPlainString(M.default.fTgw6C, { server: t });
                        switch (e) {
                            case "bot":
                                return {
                                    update: w.intl.string(M.default.JpDnbE),
                                    open: l,
                                    destination: "guild",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: w.intl.string(M.default.QesMDC),
                                    open: null == n ? l : w.intl.formatToPlainString(M.default.l9xGQD, { channel: n }),
                                    destination: "channel",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "automod":
                                return {
                                    update: w.intl.string(M.default.bwBMMn),
                                    open: w.intl.string(M.default.KjbLum),
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
            confirmReason: null,
        };
    let o = (function (e) {
            let { installScope: t, guildName: n, canManageGuild: l } = e;
            return "guild" !== t || !1 !== l ? null : w.intl.format(M.default.N4NkyR, { server: n ?? "" });
        })(e),
        d = (0, g.Qg)({
            installScope: t,
            previewReady: n?.preview_ready === !0,
            integrationInstalled: n?.integration_installed ?? null,
            botPermissionsChanged: n?.bot_permissions_changed === !0,
        }),
        c = "changes" === a.state && !s,
        f = {
            intent: d ? "consent_then_publish" : "publish",
            destination: u?.destination ?? null,
            upToDate: !1,
            isUpdate: c,
            disabledReason: o,
            confirmReason:
                null == o
                    ? (function (e) {
                          let { installScope: t, guildName: n, canManageChannels: l, usesAppChannels: i } = e;
                          return "guild" === t && i && !1 === l
                              ? w.intl.format(M.default.eHYXFg, { server: n ?? "" })
                              : null;
                      })(e)
                    : null,
        },
        p = null != u && (c ? u.navigatesOnUpdate : u.navigatesOnFirstPublish);
    if (d && n?.bot_permissions_changed === !0)
        return { ...f, label: w.intl.string(M.default["tUeY/h"]), action: "review_permissions", navigatesOnPublish: p };
    let h = u?.update ?? w.intl.string(M.default.QesMDC);
    return { ...f, label: c ? h : w.intl.string(M.default["120EFN"]), action: "publish", navigatesOnPublish: p };
}
var P = n(516288),
    k = n(308528),
    N = n(625180),
    E = n(25451),
    I = n(976860),
    _ = n(345942),
    R = n(287809),
    L = n(652215),
    O = n(165610);
let G = 221552 == n.j ? l.createContext(null) : null;
function T(e) {
    if ((0, h.Fl)(e)) return !1;
    let t = s.A.getApplication(e.application_id)?.name;
    return null != t && t !== e.name;
}
function F(e, t) {
    let n = v.Ay.getProject(e);
    if (null == n) return null;
    let l = "user" === n.install_scope ? null : (n.guild_id ?? t),
        i = null == l ? null : (0, C.i8)(l, n.application_id),
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
            liveNameOutdated: T(n),
        },
    };
}
function W(e, t, n) {
    return (function e(t, n) {
        let l,
            { applicationId: i, guildId: a, appChannelId: r, openProfile: u, openAutomodSettings: o } = n;
        switch (t) {
            case "launch":
                if (null != a) return e("channel", { applicationId: i, guildId: a, appChannelId: r, openProfile: u });
                if ((0, E.X)(s.A.getApplication(i)))
                    return (N.A.launchFrame({ applicationId: i, surface: O.sd }).catch(() => {}), Promise.resolve());
                break;
            case "profile": {
                let e = R.default.getCurrentUser()?.id;
                if (null != e) return (u(e), Promise.resolve());
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
        return ((l = s.A.getApplication(i)?.bot?.id ?? i), k.A.openPrivateChannel({ recipientIds: l }));
    })(t, {
        applicationId: e.project.application_id,
        guildId: e.guildId,
        appChannelId: e.appChannelId,
        openProfile: n.openProfile,
        openAutomodSettings: n.openAutomodSettings,
    });
}
async function B(e, t) {
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
function q(e, t, n) {
    let { project: l } = e,
        { platform: i, guildId: a } = n,
        r = l.id,
        u = t.navigatesOnPublish ? t.destination : null,
        s = "user" === l.install_scope || null != u ? null : (0, m.$C)(r);
    (s?.catch(() => {}), "channel" === u && U(r, !0));
    let o = (0, m.TV)(r).then((e) => {
            let t;
            if (!0 === e.ok) return e;
            throw (
                20088 === e.code && (0, b.U1)(r).catch(() => {}),
                Error(
                    null != (t = e.detail?.trim()) && "" !== t
                        ? w.intl.formatToPlainString(M.default["7ZsIF1"], { reason: t })
                        : w.intl.string(M.default.gMWZeG),
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
            () => {
                (null != e.guildId && $(l),
                    null != u &&
                        d
                            .then(() => ("channel" === u ? D(r, a) : void 0))
                            .finally(() => U(r, !1))
                            .then(() => W(F(r, a) ?? e, u, i))
                            .catch(() => {}));
            },
            (e) => {
                (U(r, !1), i.showError(e instanceof Error ? e.message : w.intl.string(M.default.gMWZeG)));
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
async function D(e, t) {
    let n = Date.now() + 5e3;
    for (; F(e, t)?.appChannelId == null && Date.now() < n;) await new Promise((e) => setTimeout(e, 250));
}
function $(e) {
    (0, r.eO)((0, x.Du)(e), { withMutualGuilds: !0 }).catch(() => {});
}
function V(e, t) {
    let n = F(e, t.guildId);
    if (null == n) return;
    let l = S({
        ...n.input,
        status: null == n.input.status ? null : { ...n.input.status, state: "up_to_date" },
    })?.destination;
    null != l && W(n, l, t.platform).catch(() => {});
}
let Q = new Set();
async function Z(e, t, n) {
    let { guildId: l, platform: i } = n;
    if (!0 === n.busy || Q.has(e)) return;
    let a = F(e, l);
    if (null == a || v.Ay.isProjectPublishing(e)) return;
    let r = S(a.input);
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
            null != r.destination && W(a, r.destination, i).catch(() => {});
            return;
        }
        if (null != r.disabledReason) return void i.showPublishBlocked(P.k.MISSING_MANAGE_SERVER, r.disabledReason);
        if (a.input.integrationStatus?.preview_ready !== !0) return void i.showPublishBlocked(P.k.NO_PREVIEW);
        if (null != r.confirmReason)
            return void i.showPublishBlocked(P.k.MISSING_MANAGE_CHANNELS, r.confirmReason, () => {
                z(e, r, n).catch(() => {});
            });
        await z(e, r, n);
    }
}
async function z(e, t, n) {
    let { guildId: l, platform: i } = n,
        a = F(e, l);
    if (!(null == a || v.Ay.isProjectPublishing(e))) {
        if ("consent_then_publish" === t.intent) {
            Q.add(e);
            try {
                await (i.requestConsent ?? ((e) => B(e, l)))(e);
            } finally {
                Q.delete(e);
            }
            if (v.Ay.isProjectPublishing(e)) return;
            let a = F(e, l),
                r = a?.input.integrationStatus ?? null;
            if (
                null == a ||
                (0, g.Qg)({
                    installScope: a.project.install_scope,
                    previewReady: r?.preview_ready === !0,
                    integrationInstalled: r?.integration_installed ?? null,
                    botPermissionsChanged: r?.bot_permissions_changed === !0,
                })
            )
                return;
            q(a, t, n);
            return;
        }
        q(a, t, n);
    }
}
function X(e, t) {
    let n = l.useContext(G),
        a = t ?? n,
        r = a?.guildId ?? null,
        {
            canPublish: h,
            publishing: m,
            project: g,
            guildId: b,
            appChannelId: x,
            installScope: y,
            status: A,
            integrationStatus: C,
            guildName: j,
            appChannelName: M,
            appChannelPending: w,
            canManageGuild: P,
            canManageChannels: k,
            usesAppChannels: N,
            botInGuild: E,
            liveNameOutdated: I,
        } = (0, i.cf)(
            [v.Ay, f.A, c.Ay, d.A, p.A, o.A, s.A],
            () => {
                let t = null == e || null == r ? null : F(e, r);
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
                null == g
                    ? null
                    : {
                          installScope: y,
                          status: A,
                          integrationStatus: C,
                          guildName: j,
                          appChannelName: M,
                          appChannelPending: w,
                          canManageGuild: P,
                          canManageChannels: k,
                          usesAppChannels: N,
                          botInGuild: E,
                          liveNameOutdated: I,
                      },
            [g, y, A, C, j, M, w, P, k, N, E, I],
        ),
        R = _?.status?.state ?? null,
        L = _?.installScope === "guild" && _.status?.surface === "bot";
    l.useEffect(() => {
        null != g && null != b && L && null != R && "unpublished" !== R && $(g);
    }, [g?.id, b, L, R]);
    let O = g?.application_id ?? null,
        T = null != R && "unpublished" !== R;
    l.useEffect(() => {
        null != O &&
            T &&
            null == s.A.getApplication(O) &&
            !s.A.isFetchingApplication(O) &&
            (0, u.TA)(O).catch(() => {});
    }, [O, T]);
    let W = l.useMemo(() => (null == _ ? null : S(_)), [_]),
        B = l.useCallback(
            (t) => {
                null != e &&
                    null != a &&
                    Z(e, t, a).catch((t) => {
                        console.error("[vibegrations] publish action failed", e, t);
                    });
            },
            [e, a],
        );
    return null != a && h && null != W
        ? {
              ...W,
              status: _?.status ?? null,
              guildId: b,
              appChannelId: x,
              publishing: m,
              disabled: m || !0 === a.busy,
              run: B,
          }
        : null;
}
