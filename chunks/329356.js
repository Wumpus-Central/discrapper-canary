n.d(t, { bI: () => P, $l: () => L, Ay: () => U, qF: () => I, FZ: () => q });
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
    m = n(245179),
    g = n(712808),
    b = n(238490),
    x = n(371169),
    v = n(42766),
    y = n(426035),
    A = n(385081),
    j = n(28480),
    C = n(246338),
    S = n(803101),
    w = n(949616),
    k = n(516288),
    M = n(248675),
    E = n(660183),
    N = n(652215);
let P = 221552 == n.j ? l.createContext(null) : null;
function I(e) {
    if ((0, h.Fl)(e)) return !1;
    let t = s.A.getApplication(e.application_id)?.name;
    return null != t && t !== e.name;
}
function _(e, t) {
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
            canManageGuild: null == a ? null : p.A.can(N.xBc.MANAGE_GUILD, a),
            canManageChannels: null == a ? null : p.A.can(N.xBc.MANAGE_CHANNELS, a),
            usesAppChannels: (0, h.Hv)(n),
            botInGuild: (0, y.AS)(n, l),
            liveNameOutdated: I(n),
        },
    };
}
async function R(e, t) {
    let n = v.Ay.getProject(e),
        l = n?.preview_application_id;
    if (null == n || null == l) return;
    let i = (0, S.a)(n, v.Ay.getIntegrationStatus(e), t);
    (null == s.A.getApplication(l) && (await (0, u.TA)(l).catch(() => {})),
        await new Promise((e) => {
            j.A.openConjureAppInstallModal({
                applicationId: l,
                application: s.A.getApplication(l) ?? null,
                guildId: i,
                onClose: e,
            });
        }),
        await (0, S.$)(n, i).catch(() => {}),
        await (0, x.U1)(e).catch(() => {}));
}
async function L(e, t, n) {
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
        let { ok: t } = await (0, x.CW)(e, r);
        return t;
    } catch {
        return !1;
    }
}
async function T(e) {
    var t;
    let n,
        l = e.preview_application_id;
    return (
        null == l || s.A.isHydrated(l) || (await (0, u.TA)(l).catch(() => {})),
        (t = e.id),
        null == (n = v.Ay.getProject(t)?.preview_application_id) ? "" : (s.A.getApplication(n)?.description ?? "")
    );
}
function G(e, t, n) {
    let { project: l } = e,
        { platform: i, guildId: a } = n,
        r = l.id,
        u = null != e.guildId && e.input.status?.surface === "activity" && null == e.appChannelId && !t.isUpdate,
        s = null != e.guildId && "user" !== l.install_scope && t.isUpdate && !m.Ay.isThinking(r) ? (0, g.$C)(r) : null;
    (s?.catch(() => {}), u && F(r, !0));
    let o = (0, g.TV)(r).then((e) => {
        if (!0 === e.ok) return e;
        throw (
            20088 === e.code && (0, x.U1)(r).catch(() => {}),
            Error(20088 === e.code ? E.intl.string(M.default.UXEDPw) : E.intl.string(M.default.gMWZeG))
        );
    });
    if (
        (o.then(
            (t) => {
                (i.showConfirmation(E.intl.string(M.default.S6Px3n)),
                    null != e.guildId && B(l),
                    (0, x.tZ)(r, { isPreview: !1 })
                        .catch((e) => {
                            console.error("[vibegrations] post-publish refresh failed", r, e);
                        })
                        .then(() => (u && !0 !== t.channel_skipped ? D(r, a) : void 0))
                        .finally(() => F(r, !1))
                        .catch(() => {}));
            },
            (e) => {
                (F(r, !1), i.showError(e instanceof Error ? e.message : E.intl.string(M.default.gMWZeG)));
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
function F(e, t) {
    a.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: e, pending: t });
}
async function D(e, t) {
    let n = Date.now() + 5e3;
    for (; _(e, t)?.appChannelId == null && Date.now() < n;) await new Promise((e) => setTimeout(e, 250));
}
function B(e) {
    (0, r.eO)((0, y.Du)(e), { withMutualGuilds: !0 }).catch(() => {});
}
let W = new Set();
async function q(e, t, n) {
    let { guildId: l, platform: i } = n;
    if (!0 === n.busy || W.has(e)) return;
    let a = _(e, l);
    if (null == a || v.Ay.isProjectPublishing(e) || a.input.status?.publishing === !0) return;
    let r = (0, w.U)(a.input);
    ((0, A.yJ)(e, {
        entryPoint: t,
        publishState: a.input.status?.state ?? null,
        surface: a.input.status?.surface ?? null,
        installScope: a.project.install_scope,
        action: r.action,
    }),
    null != r.disabledReason)
        ? i.showPublishBlocked(k.k.MISSING_MANAGE_SERVER, r.disabledReason)
        : null != r.confirmReason
          ? i.showPublishBlocked(k.k.MISSING_MANAGE_CHANNELS, r.confirmReason, () => {
                O(e, r, n).catch(() => {});
            })
          : await O(e, r, n);
}
async function O(e, t, n) {
    let { guildId: l, platform: i } = n,
        a = _(e, l);
    if (!(null == a || v.Ay.isProjectPublishing(e))) {
        if (null != i.promptFirstPublish && a.input.status?.state === "unpublished" && (0, v.PV)(a.project)) {
            let t;
            W.add(e);
            try {
                t = await i.promptFirstPublish({ projectId: e, name: a.project.name, description: await T(a.project) });
            } finally {
                W.delete(e);
            }
            if (!t || v.Ay.isProjectPublishing(e)) return;
            a = _(e, l) ?? a;
        }
        if ("consent_then_publish" === t.intent) {
            W.add(e);
            try {
                await (i.requestConsent ?? ((e) => R(e, l)))(e);
            } finally {
                W.delete(e);
            }
            if (v.Ay.isProjectPublishing(e)) return;
            let a = _(e, l),
                r = a?.input.integrationStatus ?? null;
            if (
                null == a ||
                (0, b.Qg)({
                    installScope: a.project.install_scope,
                    previewReady: r?.preview_ready === !0,
                    integrationInstalled: r?.integration_installed ?? null,
                    botPermissionsChanged: r?.bot_permissions_changed === !0,
                })
            )
                return;
            G(a, t, n);
            return;
        }
        G(a, t, n);
    }
}
function U(e, t) {
    let n = l.useContext(P),
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
            integrationStatus: j,
            guildName: C,
            appChannelName: S,
            appChannelPending: k,
            canManageGuild: N,
            canManageChannels: I,
            usesAppChannels: R,
            botInGuild: L,
            liveNameOutdated: T,
        } = (0, i.cf)(
            [v.Ay, f.A, c.Ay, d.A, p.A, o.A, s.A],
            () => {
                let t = null == e || null == r ? null : _(e, r);
                return {
                    canPublish: null != t && (0, v.jf)(t.project),
                    project: t?.project ?? null,
                    guildId: t?.guildId ?? null,
                    appChannelId: t?.appChannelId ?? null,
                    publishing:
                        null != e && (v.Ay.isProjectPublishing(e) || v.Ay.getPublishStatus(e)?.publishing === !0),
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
        G = l.useMemo(
            () =>
                null == g
                    ? null
                    : {
                          installScope: y,
                          status: A,
                          integrationStatus: j,
                          guildName: C,
                          appChannelName: S,
                          appChannelPending: k,
                          canManageGuild: N,
                          canManageChannels: I,
                          usesAppChannels: R,
                          botInGuild: L,
                          liveNameOutdated: T,
                      },
            [g, y, A, j, C, S, k, N, I, R, L, T],
        ),
        F = G?.status?.state ?? null,
        D = G?.installScope === "guild" && G.status?.surface === "bot";
    l.useEffect(() => {
        null != g && null != b && D && null != F && "unpublished" !== F && B(g);
    }, [g?.id, b, D, F]);
    let W = g?.application_id ?? null,
        O = null != F && "unpublished" !== F;
    l.useEffect(() => {
        null != W &&
            O &&
            null == s.A.getApplication(W) &&
            !s.A.isFetchingApplication(W) &&
            (0, u.TA)(W).catch(() => {});
    }, [W, O]);
    let U = l.useMemo(() => (null == G ? null : (0, w.U)(G)), [G]),
        z = l.useCallback(
            (t) => {
                null != e &&
                    null != a &&
                    q(e, t, a).catch((t) => {
                        console.error("[vibegrations] publish action failed", e, t);
                    });
            },
            [e, a],
        );
    return null != a && h && null != U
        ? {
              ...U,
              status: G?.status ?? null,
              guildId: b,
              appChannelId: x,
              publishing: m,
              label: m ? E.intl.string(M.default.Rhx0rn) : U.label,
              disabled: m || !0 === a.busy,
              run: z,
          }
        : null;
}
