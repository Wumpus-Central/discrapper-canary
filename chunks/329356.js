n.d(t, { bI: () => _, $l: () => F, Ay: () => $, qF: () => R, FZ: () => U });
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
    h = n(245179),
    g = n(238490),
    m = n(371169),
    b = n(260498),
    x = n(951178),
    v = n(426035),
    y = n(385081),
    A = n(649162),
    j = n(246338),
    C = n(803101),
    S = n(664619),
    w = n(722701),
    k = n(949616),
    M = n(516288),
    E = n(962998),
    N = n(248675),
    P = n(660183),
    I = n(652215);
let _ = 221552 == n.j ? l.createContext(null) : null;
function R(e) {
    if ((0, x.Fl)(e)) return !1;
    let t = s.A.getApplication(e.application_id)?.name;
    return null != t && t !== e.name;
}
function L(e, t) {
    let n = b.Ay.getProject(e);
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
            status: w.A.getPublishStatus(e),
            integrationStatus: b.Ay.getIntegrationStatus(e),
            guildName: a?.name ?? null,
            appChannelName: null == i ? null : (d.A.getChannel(i)?.name ?? null),
            appChannelPending: w.A.isAppChannelPending(e),
            canManageGuild: null == a ? null : p.A.can(I.xBc.MANAGE_GUILD, a),
            canManageChannels: null == a ? null : p.A.can(I.xBc.MANAGE_CHANNELS, a),
            usesAppChannels: (0, x.Hv)(n),
            botInGuild: (0, v.AS)(n, l),
            liveNameOutdated: R(n),
        },
    };
}
async function T(e, t) {
    let n = b.Ay.getProject(e),
        l = n?.preview_application_id;
    if (null == n || null == l) return;
    let i = (0, C.a)(n, b.Ay.getIntegrationStatus(e), t);
    (null == s.A.getApplication(l) && (await (0, u.TA)(l).catch(() => {})),
        await new Promise((e) => {
            A.A.openConjureAppInstallModal({
                applicationId: l,
                application: s.A.getApplication(l) ?? null,
                guildId: i,
                onClose: e,
            });
        }),
        await (0, C.$)(n, i).catch(() => {}),
        await (0, m.U1)(e).catch(() => {}));
}
async function F(e, t, n) {
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
        let { ok: t } = await (0, m.CW)(e, r);
        return t;
    } catch {
        return !1;
    }
}
async function G(e) {
    var t;
    let n,
        l = e.preview_application_id;
    return (
        null == l || s.A.isHydrated(l) || (await (0, u.TA)(l).catch(() => {})),
        (t = e.id),
        null == (n = b.Ay.getProject(t)?.preview_application_id) ? "" : (s.A.getApplication(n)?.description ?? "")
    );
}
function D(e, t, n) {
    let { project: l } = e,
        { platform: i, guildId: a } = n,
        r = l.id,
        u = null != e.guildId && e.input.status?.surface === "activity" && null == e.appChannelId && !t.isUpdate,
        s = null != e.guildId && "user" !== l.install_scope && t.isUpdate && !h.A.isThinking(r) ? (0, E.$C)(r) : null;
    (s?.catch(() => {}), u && B(r, !0));
    let o = (0, E.TV)(r).then((e) => {
        if (!0 === e.ok) return e;
        throw (
            20088 === e.code && (0, m.U1)(r).catch(() => {}),
            Error(20088 === e.code ? P.intl.string(N.default.UXEDPw) : P.intl.string(N.default.gMWZeG))
        );
    });
    if (
        (o.then(
            (t) => {
                (i.showConfirmation(P.intl.string(N.default.S6Px3n)),
                    null != e.guildId && O(l),
                    (0, S.tZ)(r, { isPreview: !1 })
                        .catch((e) => {
                            console.error("[vibegrations] post-publish refresh failed", r, e);
                        })
                        .then(() => (u && !0 !== t.channel_skipped ? W(r, a) : void 0))
                        .finally(() => B(r, !1))
                        .catch(() => {}));
            },
            (e) => {
                (B(r, !1), i.showError(e instanceof Error ? e.message : P.intl.string(N.default.gMWZeG)));
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
function B(e, t) {
    a.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: e, pending: t });
}
async function W(e, t) {
    let n = Date.now() + 5e3;
    for (; L(e, t)?.appChannelId == null && Date.now() < n;) await new Promise((e) => setTimeout(e, 250));
}
function O(e) {
    (0, r.eO)((0, v.Du)(e), { withMutualGuilds: !0 }).catch(() => {});
}
let q = new Set();
async function U(e, t, n) {
    let { guildId: l, platform: i } = n;
    if (!0 === n.busy || q.has(e)) return;
    let a = L(e, l);
    if (null == a || w.A.isProjectPublishing(e) || a.input.status?.publishing === !0) return;
    let r = (0, k.U)(a.input);
    ((0, y.yJ)(e, {
        entryPoint: t,
        publishState: a.input.status?.state ?? null,
        surface: a.input.status?.surface ?? null,
        installScope: a.project.install_scope,
        action: r.action,
    }),
    null != r.disabledReason)
        ? i.showPublishBlocked(M.k.MISSING_MANAGE_SERVER, r.disabledReason)
        : null != r.confirmReason
          ? i.showPublishBlocked(M.k.MISSING_MANAGE_CHANNELS, r.confirmReason, () => {
                z(e, r, n).catch(() => {});
            })
          : await z(e, r, n);
}
async function z(e, t, n) {
    let { guildId: l, platform: i } = n,
        a = L(e, l);
    if (!(null == a || w.A.isProjectPublishing(e))) {
        if (null != i.promptFirstPublish && a.input.status?.state === "unpublished" && (0, b.PV)(a.project)) {
            let t;
            q.add(e);
            try {
                t = await i.promptFirstPublish({ projectId: e, name: a.project.name, description: await G(a.project) });
            } finally {
                q.delete(e);
            }
            if (!t || w.A.isProjectPublishing(e)) return;
            a = L(e, l) ?? a;
        }
        if ("consent_then_publish" === t.intent) {
            q.add(e);
            try {
                await (i.requestConsent ?? ((e) => T(e, l)))(e);
            } finally {
                q.delete(e);
            }
            if (w.A.isProjectPublishing(e)) return;
            let a = L(e, l),
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
            D(a, t, n);
            return;
        }
        D(a, t, n);
    }
}
function $(e, t) {
    let n = l.useContext(_),
        a = t ?? n,
        r = a?.guildId ?? null,
        {
            canPublish: h,
            publishing: g,
            project: m,
            guildId: x,
            appChannelId: v,
            installScope: y,
            status: A,
            integrationStatus: j,
            guildName: C,
            appChannelName: S,
            appChannelPending: M,
            canManageGuild: E,
            canManageChannels: I,
            usesAppChannels: R,
            botInGuild: T,
            liveNameOutdated: F,
        } = (0, i.cf)(
            [b.Ay, w.A, f.A, c.Ay, d.A, p.A, o.A, s.A],
            () => {
                let t = null == e || null == r ? null : L(e, r);
                return {
                    canPublish: null != t && (0, b.jf)(t.project),
                    project: t?.project ?? null,
                    guildId: t?.guildId ?? null,
                    appChannelId: t?.appChannelId ?? null,
                    publishing: null != e && (w.A.isProjectPublishing(e) || w.A.getPublishStatus(e)?.publishing === !0),
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
                null == m
                    ? null
                    : {
                          installScope: y,
                          status: A,
                          integrationStatus: j,
                          guildName: C,
                          appChannelName: S,
                          appChannelPending: M,
                          canManageGuild: E,
                          canManageChannels: I,
                          usesAppChannels: R,
                          botInGuild: T,
                          liveNameOutdated: F,
                      },
            [m, y, A, j, C, S, M, E, I, R, T, F],
        ),
        D = G?.status?.state ?? null,
        B = G?.installScope === "guild" && G.status?.surface === "bot";
    l.useEffect(() => {
        null != m && null != x && B && null != D && "unpublished" !== D && O(m);
    }, [m?.id, x, B, D]);
    let W = m?.application_id ?? null,
        q = null != D && "unpublished" !== D;
    l.useEffect(() => {
        null != W &&
            q &&
            null == s.A.getApplication(W) &&
            !s.A.isFetchingApplication(W) &&
            (0, u.TA)(W).catch(() => {});
    }, [W, q]);
    let z = l.useMemo(() => (null == G ? null : (0, k.U)(G)), [G]),
        $ = l.useCallback(
            (t) => {
                null != e &&
                    null != a &&
                    U(e, t, a).catch((t) => {
                        console.error("[vibegrations] publish action failed", e, t);
                    });
            },
            [e, a],
        );
    return null != a && h && null != z
        ? {
              ...z,
              status: G?.status ?? null,
              guildId: x,
              appChannelId: v,
              publishing: g,
              label: g ? P.intl.string(N.default.Rhx0rn) : z.label,
              disabled: g || !0 === a.busy,
              run: $,
          }
        : null;
}
