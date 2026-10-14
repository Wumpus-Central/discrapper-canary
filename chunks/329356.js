n.d(t, { bI: () => _, $l: () => G, Ay: () => $, KL: () => I, qF: () => R, FZ: () => U });
var l = n(582128),
    i = n(17928),
    r = n(73153),
    a = n(803306),
    u = n(627363),
    s = n(587895),
    o = n(321191),
    d = n(734057),
    c = n(808728),
    f = n(71393),
    p = n(576705),
    h = n(238490),
    m = n(371169),
    g = n(260498),
    b = n(951178),
    v = n(426035),
    x = n(385081),
    y = n(1371),
    A = n(246338),
    j = n(803101),
    S = n(664619),
    C = n(722701),
    w = n(949616),
    k = n(516288),
    M = n(962998),
    E = n(248675),
    N = n(660183),
    P = n(652215);
let _ = 221552 == n.j ? l.createContext(null) : null;
function I(e, t) {
    return "user" === e.install_scope ? null : (e.guild_id ?? t);
}
function R(e) {
    if ((0, b.Fl)(e)) return !1;
    let t = s.A.getApplication(e.application_id)?.name;
    return null != t && t !== e.name;
}
function L(e, t) {
    let n = g.Ay.getProject(e);
    if (null == n) return null;
    let l = I(n, t),
        i = null == l ? null : (0, A.i8)(l, n.application_id),
        r = null == l ? null : f.A.getGuild(l);
    return {
        project: n,
        guildId: l,
        appChannelId: i,
        input: {
            installScope: n.install_scope,
            status: C.A.getPublishStatus(e),
            integrationStatus: g.Ay.getIntegrationStatus(e),
            guildName: r?.name ?? null,
            appChannelName: null == i ? null : (d.A.getChannel(i)?.name ?? null),
            appChannelPending: C.A.isAppChannelPending(e),
            canManageGuild: null == r ? null : p.A.can(P.xBc.MANAGE_GUILD, r),
            canManageChannels: null == r ? null : p.A.can(P.xBc.MANAGE_CHANNELS, r),
            usesAppChannels: (0, b.Hv)(n),
            botInGuild: (0, v.AS)(n, l),
            liveNameOutdated: R(n),
        },
    };
}
async function T(e, t) {
    let n = g.Ay.getProject(e),
        l = n?.preview_application_id;
    if (null == n || null == l) return;
    let i = (0, j.a)(n, g.Ay.getIntegrationStatus(e), t);
    (null == s.A.getApplication(l) && (await (0, u.TA)(l).catch(() => {})),
        await new Promise((e) => {
            y.A.openConjureAppInstallModal({
                applicationId: l,
                application: s.A.getApplication(l) ?? null,
                guildId: i,
                onClose: e,
            });
        }),
        await (0, j.$)(n, i).catch(() => {}),
        await (0, m.U1)(e).catch(() => {}));
}
async function G(e, t, n) {
    let { name: l, icon: i, description: r } = t,
        a = {};
    if (
        (l !== n.name && (a.name = l),
        null != i && (a.icon = i),
        r.trim() !== n.description.trim() && (a.description = r.trim()),
        0 === Object.keys(a).length)
    )
        return !0;
    try {
        let { ok: t } = await (0, m.CW)(e, a);
        return t;
    } catch {
        return !1;
    }
}
async function F(e) {
    var t;
    let n,
        l = e.preview_application_id;
    return (
        null == l || s.A.isHydrated(l) || (await (0, u.TA)(l).catch(() => {})),
        (t = e.id),
        null == (n = g.Ay.getProject(t)?.preview_application_id) ? "" : (s.A.getApplication(n)?.description ?? "")
    );
}
function D(e, t, n) {
    let { project: l } = e,
        { platform: i, guildId: r } = n,
        a = l.id,
        u = null != e.guildId && e.input.status?.surface === "activity" && null == e.appChannelId && !t.isUpdate;
    (u && W(a, !0),
        (0, M.TV)(a)
            .then((e) => {
                if (!0 === e.ok) return e;
                throw (
                    20088 === e.code && (0, m.U1)(a).catch(() => {}),
                    Error(20088 === e.code ? N.intl.string(E.default.UXEDPw) : N.intl.string(E.default.gMWZeG))
                );
            })
            .then(
                (t) => {
                    (i.showConfirmation(N.intl.string(E.default.S6Px3n)),
                        null != e.guildId && q(l),
                        (0, S.tZ)(a, { isPreview: !1 })
                            .catch((e) => {
                                console.error("[vibegrations] post-publish refresh failed", a, e);
                            })
                            .then(() => (u && !0 !== t.channel_skipped ? O(a, r) : void 0))
                            .finally(() => W(a, !1))
                            .catch(() => {}));
                },
                (e) => {
                    (W(a, !1), i.showError(e instanceof Error ? e.message : N.intl.string(E.default.gMWZeG)));
                },
            ));
}
function W(e, t) {
    r.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: e, pending: t });
}
async function O(e, t) {
    let n = Date.now() + 5e3;
    for (; L(e, t)?.appChannelId == null && Date.now() < n;) await new Promise((e) => setTimeout(e, 250));
}
function q(e) {
    (0, a.eO)((0, v.Du)(e), { withMutualGuilds: !0 }).catch(() => {});
}
let B = new Set();
async function U(e, t, n) {
    let { guildId: l, platform: i } = n;
    if (!0 === n.busy || B.has(e)) return;
    let r = L(e, l);
    if (null == r || C.A.isProjectPublishing(e) || r.input.status?.publishing === !0) return;
    let a = (0, w.U)(r.input);
    ((0, x.yJ)(e, {
        entryPoint: t,
        publishState: r.input.status?.state ?? null,
        surface: r.input.status?.surface ?? null,
        installScope: r.project.install_scope,
        action: a.action,
    }),
    null != a.disabledReason)
        ? i.showPublishBlocked(k.k.MISSING_MANAGE_SERVER, a.disabledReason)
        : null != a.confirmReason
          ? i.showPublishBlocked(k.k.MISSING_MANAGE_CHANNELS, a.confirmReason, () => {
                z(e, a, n).catch(() => {});
            })
          : await z(e, a, n);
}
async function z(e, t, n) {
    let { guildId: l, platform: i } = n,
        r = L(e, l);
    if (!(null == r || C.A.isProjectPublishing(e))) {
        if (null != i.promptFirstPublish && r.input.status?.state === "unpublished" && (0, g.PV)(r.project)) {
            let t;
            B.add(e);
            try {
                t = await i.promptFirstPublish({ projectId: e, name: r.project.name, description: await F(r.project) });
            } finally {
                B.delete(e);
            }
            if (!t || C.A.isProjectPublishing(e)) return;
            r = L(e, l) ?? r;
        }
        if ("consent_then_publish" === t.intent) {
            B.add(e);
            try {
                await (i.requestConsent ?? ((e) => T(e, l)))(e);
            } finally {
                B.delete(e);
            }
            if (C.A.isProjectPublishing(e)) return;
            let r = L(e, l),
                a = r?.input.integrationStatus ?? null;
            if (
                null == r ||
                (0, h.Qg)({
                    installScope: r.project.install_scope,
                    previewReady: a?.preview_ready === !0,
                    integrationInstalled: a?.integration_installed ?? null,
                    botPermissionsChanged: a?.bot_permissions_changed === !0,
                })
            )
                return;
            D(r, t, n);
            return;
        }
        D(r, t, n);
    }
}
function $(e, t) {
    let n = l.useContext(_),
        r = t ?? n,
        a = r?.guildId ?? null,
        {
            canPublish: h,
            publishing: m,
            project: b,
            guildId: v,
            appChannelId: x,
            installScope: y,
            status: A,
            integrationStatus: j,
            guildName: S,
            appChannelName: k,
            appChannelPending: M,
            canManageGuild: P,
            canManageChannels: I,
            usesAppChannels: R,
            botInGuild: T,
            liveNameOutdated: G,
        } = (0, i.cf)(
            [g.Ay, C.A, f.A, c.Ay, d.A, p.A, o.A, s.A],
            () => {
                let t = null == e || null == a ? null : L(e, a);
                return {
                    canPublish: null != t && (0, g.jf)(t.project),
                    project: t?.project ?? null,
                    guildId: t?.guildId ?? null,
                    appChannelId: t?.appChannelId ?? null,
                    publishing: null != e && (C.A.isProjectPublishing(e) || C.A.getPublishStatus(e)?.publishing === !0),
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
            [e, a],
        ),
        F = l.useMemo(
            () =>
                null == b
                    ? null
                    : {
                          installScope: y,
                          status: A,
                          integrationStatus: j,
                          guildName: S,
                          appChannelName: k,
                          appChannelPending: M,
                          canManageGuild: P,
                          canManageChannels: I,
                          usesAppChannels: R,
                          botInGuild: T,
                          liveNameOutdated: G,
                      },
            [b, y, A, j, S, k, M, P, I, R, T, G],
        ),
        D = F?.status?.state ?? null,
        W = F?.installScope === "guild" && F.status?.surface === "bot";
    l.useEffect(() => {
        null != b && null != v && W && null != D && "unpublished" !== D && q(b);
    }, [b?.id, v, W, D]);
    let O = b?.application_id ?? null,
        B = null != D && "unpublished" !== D;
    l.useEffect(() => {
        null != O &&
            B &&
            null == s.A.getApplication(O) &&
            !s.A.isFetchingApplication(O) &&
            (0, u.TA)(O).catch(() => {});
    }, [O, B]);
    let z = l.useMemo(() => (null == F ? null : (0, w.U)(F)), [F]),
        $ = l.useCallback(
            (t) => {
                null != e &&
                    null != r &&
                    U(e, t, r).catch((t) => {
                        console.error("[vibegrations] publish action failed", e, t);
                    });
            },
            [e, r],
        );
    return null != r && h && null != z
        ? {
              ...z,
              status: F?.status ?? null,
              guildId: v,
              appChannelId: x,
              publishing: m,
              label: m ? N.intl.string(E.default.Rhx0rn) : z.label,
              disabled: m || !0 === r.busy,
              run: $,
          }
        : null;
}
