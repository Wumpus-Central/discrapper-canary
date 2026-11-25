(l.d(n, { bI: () => R, t8: () => k, Ay: () => W, qF: () => x, KL: () => L, vL: () => B, FZ: () => V, T3: () => J }),
    l(321073));
var e = l(582128),
    i = l(855986),
    u = l(73153),
    a = l(803306),
    r = l(627363),
    s = l(587895),
    o = l(851767),
    d = l(734057),
    c = l(808728),
    p = l(71393),
    f = l(576705),
    g = l(233470),
    h = l(260498),
    A = l(951178),
    b = l(426035),
    _ = l(890698),
    P = l(385081),
    S = l(519325),
    m = l(246338),
    w = l(664619),
    E = l(722701),
    I = l(811587),
    C = l(238490),
    v = l(191850),
    y = l(792996);
function M(t) {
    let { installScope: n, integrationStatus: l } = t,
        e = t.status ?? { publishState: "not_live", surface: null, previewAppChannels: [] },
        i = "live_current" === e.publishState && t.liveNameOutdated ? { ...e, publishState: "live_outdated" } : e,
        u = (function (t) {
            let {
                installScope: n,
                status: l,
                appChannelName: e,
                appChannelPending: i,
                usesAppChannels: u,
                botInGuild: a,
            } = t;
            return (
                "guild" === n &&
                null != l &&
                !!(0, I.l)(l.publishState) &&
                (!1 === a || ("activity" === l.surface && u && null == e && !0 !== i))
            );
        })({ ...t, status: i }),
        a = (function (t) {
            let { installScope: n, guildName: l, canManageGuild: e } = t;
            return "guild" !== n || !1 !== e ? null : y.intl.format(v.default.N4NkyR, { server: l ?? "" });
        })(t),
        r = (0, C.Qg)({
            installScope: n,
            previewReady: l?.preview_ready === !0,
            integrationInstalled: l?.integration_installed ?? null,
            botPermissionsChanged: l?.bot_permissions_changed === !0,
        });
    return {
        label: y.intl.string(v.default["120EFN"]),
        intent: r ? "consent_then_publish" : "publish",
        permissionsChanged: r && l?.bot_permissions_changed === !0,
        isUpdate: "live_outdated" === i.publishState && !u,
        upToDate: ("live_current" === i.publishState || "live_auto_synced" === i.publishState) && !u,
        disabledReason: a,
        confirmReason:
            null == a
                ? (function (t) {
                      let { installScope: n, guildName: l, canManageChannels: e, usesAppChannels: i } = t;
                      return "guild" === n && i && !1 === e
                          ? y.intl.format(v.default.eHYXFg, { server: l ?? "" })
                          : null;
                  })(t)
                : null,
        missingSurface: u ? ("activity" === i.surface && !1 !== t.botInGuild ? "channel" : "bot") : null,
    };
}
var N = l(516288),
    T = l(962998),
    U = l(868193),
    G = l(615839);
let j = {
    preparing: v.default.GQeas1,
    approval: v.default["TkHHD+"],
    approved_by_grant: v.default["9+kNt8"],
    setup: v.default["F+AxgM"],
    build: v.default.oQeMIy,
    deploy: v.default.LqZvZ2,
    discord: v.default.LFcGAT,
    activating: v.default.ff1Fq1,
};
var D = l(652215);
let R = e.createContext(null);
function L(t, n) {
    return "guild" === t.install_scope ? (t.guild_id ?? n) : null;
}
function x(t) {
    if (!(0, A._7)(t)) return !1;
    let n = s.A.getApplication(t.application_id)?.name;
    return null != n && n !== t.name;
}
function k(t) {
    if (null == E.A.getPublishApprovalUrl(t)) return !1;
    let n = E.A.getPublishProgress(t)?.stage;
    return null == n || "preparing" === n || "approval" === n;
}
function O(t, n) {
    let l = h.Ay.getProject(t);
    if (null == l) return null;
    let e = L(l, n),
        i = null == e ? null : (0, m.i8)(e, l.application_id),
        u = null == e ? null : p.A.getGuild(e);
    return {
        project: l,
        guildId: e,
        appChannelId: i,
        ownerInstallMissing:
            "user" === l.install_scope &&
            (0, h.PV)(l) &&
            h.Ay.getIntegrationStatus(t)?.owner_authorization_revoked === !0,
        input: {
            installScope: l.install_scope,
            status: E.A.getPublishStatus(t),
            integrationStatus: h.Ay.getIntegrationStatus(t),
            guildName: u?.name ?? null,
            appChannelName: null == i ? null : (d.A.getChannel(i)?.name ?? null),
            appChannelPending: E.A.isAppChannelPending(t),
            canManageGuild:
                null == u
                    ? null
                    : !!f.A.can(D.xBc.MANAGE_GUILD, u) ||
                      (!!(0, h.PV)(l) &&
                          (0, A.Jr)(l).some((t) => {
                              let n = p.A.getGuild(t);
                              return null != n && f.A.can(D.xBc.MANAGE_GUILD, n);
                          })),
            canManageChannels: null == u ? null : f.A.can(D.xBc.MANAGE_CHANNELS, u),
            usesAppChannels: (0, A.Hv)(l),
            botInGuild: (0, b.AS)(l, e),
            liveNameOutdated: x(l),
        },
    };
}
async function B(t, n) {
    let l,
        e = h.Ay.getProject(t),
        i = e?.preview_application_id;
    if (null == e || null == i) return "failed";
    let u = e?.install_scope === "guild" && null != e.guild_id ? e.guild_id : n,
        a = [];
    function o(t) {
        a.push(t);
    }
    await (0, r.TA)(i).catch(o);
    let d = () => {},
        c = new Promise((t) => {
            d = t;
        });
    try {
        (await S.A.openConjureAppInstallModal({
            applicationId: i,
            application: s.A.getApplication(i) ?? null,
            guildId: u,
            onClose: d,
        }),
            (l = await c));
    } catch {
        return "failed";
    }
    return (await (async function (t, n) {
        "guild" === t.install_scope &&
            (null == t.guild_id
                ? await (0, g.xo)(t.id, n)
                : t.preview_guild_id !== n && (await (0, g.CW)(t.id, { preview_guild_id: n })));
    })(e, u).catch(o),
    await (0, g.U1)(t).catch(o),
    l)
        ? a.length > 0
            ? "failed"
            : "approved"
        : "cancelled";
}
function H(t, n) {
    u.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: t, pending: n });
}
async function J(t, n) {
    let l = Date.now() + 5e3,
        e = O(t, n)?.appChannelId ?? null;
    for (; null == e && Date.now() < l;)
        (await new Promise((t) => setTimeout(t, 250)), (e = O(t, n)?.appChannelId ?? null));
    return e;
}
function q(t) {
    (0, a.eO)((0, b.Du)(t), { withMutualGuilds: !0 }).catch(() => {});
}
let F = new Set();
async function V(t, n, e) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { guildId: u, platform: a } = e;
    if (!0 === e.busy || F.has(t)) return;
    let r = O(t, u),
        s = r?.input.status?.publishState;
    if (r?.ownerInstallMissing === !0) {
        F.add(t);
        try {
            await (0, g.lZ)(t);
        } catch {
            a.showError(y.intl.string(v.default.gMWZeG));
            return;
        } finally {
            F.delete(t);
        }
    }
    if (null == r || null == s || "nothing_built" === s) return;
    if (r.input.status?.safetyHold === !0) return void a.showSafetyHold(t);
    let o = k(t) ? E.A.getPublishApprovalUrl(t) : null;
    if (null != o && (0, h.PV)(r.project)) {
        let { promptPublishApproval: t } = await Promise.all([l.e(241989), l.e(574246)]).then(l.bind(l, 200389));
        t(o);
        return;
    }
    if (E.A.isProjectPublishing(t) || r.input.status?.publishing === !0) return;
    let d = M(r.input);
    ((0, P.yJ)(t, {
        entryPoint: n,
        publishState: s,
        surface: r.input.status?.surface ?? null,
        installScope: r.project.install_scope,
    }),
    null != d.disabledReason)
        ? a.showPublishBlocked(N.k.MISSING_MANAGE_SERVER, d.disabledReason)
        : ((0, T.dx)(t), null != d.confirmReason)
          ? a.showPublishBlocked(N.k.MISSING_MANAGE_CHANNELS, d.confirmReason, () => {
                Z(t, d, e, i).catch(() => {});
            })
          : await Z(t, d, e, i);
}
async function Z(t, n, l, e) {
    let { guildId: i, platform: a } = l;
    if (E.A.isProjectPublishing(t)) return;
    if ("consent_then_publish" === n.intent) {
        let n,
            l = a.requestConsent ?? ((t) => B(t, i));
        F.add(t);
        try {
            n = await l(t);
        } catch {
            n = "failed";
        } finally {
            F.delete(t);
        }
        if ("failed" === n) return void a.showError(y.intl.string(v.default.gMWZeG));
        if ("cancelled" === n || E.A.isProjectPublishing(t)) return;
    }
    let r = O(t, i);
    null != r &&
        (await (async function (t, n, l, e) {
            let i,
                { project: a } = t,
                { platform: r, guildId: s } = l,
                o = a.id;
            F.add(o);
            try {
                let t = await (0, T.xQ)(o);
                i = 1 === t.destinations.length ? t.selected_destination_id : await r.promptPublishDestination(t);
            } catch (t) {
                r.showError(t instanceof Error ? t.message : y.intl.string(v.default.gMWZeG));
                return;
            } finally {
                F.delete(o);
            }
            if (null == i) return;
            if (E.A.isProjectPublishing(o) || E.A.getPublishStatus(o)?.publishing === !0)
                return void r.showError(y.intl.string(v.default["TD/ze/"]));
            let d =
                null != t.guildId && t.input.status?.surface === "activity" && null == t.appChannelId && !n.isUpdate;
            (d && H(o, !0),
                (0, T.TV)(o, i, e)
                    .then((t) => {
                        if (!0 === t.ok) return t;
                        throw (20088 === t.code && (0, g.U1)(o).catch(() => {}), Error((0, U.A)(t)));
                    })
                    .then(
                        (n) => {
                            (r.showConfirmation(y.intl.string(v.default.S6Px3n)),
                                (0, _.$w)(o),
                                null != t.guildId && q(a),
                                (0, w.tZ)(o, { isPreview: !1 })
                                    .catch((t) => {
                                        console.error("[conjure] post-publish refresh failed", o, t);
                                    })
                                    .then(() => (d && !0 !== n.channel_skipped ? J(o, s) : void 0))
                                    .finally(() => H(o, !1))
                                    .catch(() => {}));
                        },
                        (t) => {
                            H(o, !1);
                            let n = t instanceof Error ? t.message : y.intl.string(v.default.gMWZeG);
                            (u.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_FAILED", projectId: o, message: n }),
                                r.showError(n));
                        },
                    ));
        })(r, n, l, e));
}
function W(t, n) {
    let l = e.useContext(R),
        u = n ?? l,
        a = u?.guildId ?? null,
        {
            viewerCanPublish: g,
            ownerInstallMissing: A,
            publishing: b,
            failure: _,
            approvalUrl: P,
            project: S,
            guildId: m,
            appChannelId: w,
            installScope: C,
            status: N,
            integrationStatus: T,
            guildName: U,
            appChannelName: D,
            appChannelPending: L,
            canManageGuild: x,
            canManageChannels: B,
            usesAppChannels: H,
            botInGuild: J,
            liveNameOutdated: F,
        } = (0, i.cf)(
            [h.Ay, E.A, p.A, c.A, d.A, f.A, o.A, s.A],
            () => {
                let n = null == t || null == a ? null : O(t, a);
                return {
                    viewerCanPublish: null != n && (0, h.jf)(n.project),
                    ownerInstallMissing: n?.ownerInstallMissing === !0,
                    project: n?.project ?? null,
                    guildId: n?.guildId ?? null,
                    appChannelId: n?.appChannelId ?? null,
                    publishing:
                        null != t &&
                        !1 === k(t) &&
                        (E.A.isProjectPublishing(t) || E.A.getPublishStatus(t)?.publishing === !0),
                    failure: null == t ? null : E.A.getPublishFailure(t),
                    approvalUrl: null != t && k(t) ? E.A.getPublishApprovalUrl(t) : null,
                    installScope: n?.input.installScope ?? null,
                    status: n?.input.status ?? null,
                    integrationStatus: n?.input.integrationStatus ?? null,
                    guildName: n?.input.guildName ?? null,
                    appChannelName: n?.input.appChannelName ?? null,
                    appChannelPending: n?.input.appChannelPending ?? !1,
                    canManageGuild: n?.input.canManageGuild ?? null,
                    canManageChannels: n?.input.canManageChannels ?? null,
                    usesAppChannels: n?.input.usesAppChannels ?? !1,
                    botInGuild: n?.input.botInGuild ?? null,
                    liveNameOutdated: n?.input.liveNameOutdated ?? !1,
                };
            },
            [t, a],
        ),
        Z = e.useMemo(
            () =>
                null == S
                    ? null
                    : {
                          installScope: C,
                          status: N,
                          integrationStatus: T,
                          guildName: U,
                          appChannelName: D,
                          appChannelPending: L,
                          canManageGuild: x,
                          canManageChannels: B,
                          usesAppChannels: H,
                          botInGuild: J,
                          liveNameOutdated: F,
                      },
            [S, C, N, T, U, D, L, x, B, H, J, F],
        ),
        W = Z?.status?.publishState ?? null,
        $ = Z?.installScope === "guild" && Z.status?.surface === "bot";
    e.useEffect(() => {
        null != S && null != m && $ && null != W && (0, I.l)(W) && q(S);
    }, [S?.id, m, $, W]);
    let z = S?.application_id ?? null,
        K = null != W && (0, I.l)(W);
    e.useEffect(() => {
        null != z &&
            K &&
            null == s.A.getApplication(z) &&
            !s.A.isFetchingApplication(z) &&
            (0, r.TA)(z).catch(() => {});
    }, [z, K]);
    let Q = e.useMemo(() => (null == Z ? null : M(Z)), [Z]),
        X = (function (t) {
            let n = (0, i.bG)([E.A], () => (null == t ? null : E.A.getPublishProgress(t))),
                [l, u] = e.useState(() => Date.now());
            return (e.useEffect(() => {
                if (null == n) return;
                u(Date.now());
                let t = setInterval(() => u(Date.now()), 1e3);
                return () => clearInterval(t);
            }, [n]),
            null == n)
                ? null
                : y.intl.formatToPlainString(v.default["ndkR+x"], {
                      action: y.intl.string(j[n.stage]),
                      detail: (0, G.C7)(l - n.stageStartedAt),
                  });
        })(b ? t : null),
        Y = e.useCallback(
            (n, l) => {
                null != t &&
                    null != u &&
                    V(t, n, u, l).catch((n) => {
                        console.error("[conjure] publish action failed", t, n);
                    });
            },
            [t, u],
        );
    if (null == u || null == Z || null == Q) return null;
    let tt = (function (t, n) {
        let l = t.status?.publishState;
        if (!n.canPublish || null == t.installScope || null == l || "nothing_built" === l) return "hidden";
        if (n.publishing) return "publishing";
        let { upToDate: e, permissionsChanged: i } = M(t);
        return !e || i || n.awaitingApproval || n.ownerInstallMissing
            ? "action_needed"
            : "live_auto_synced" === l
              ? "auto_synced"
              : "up_to_date";
    })(Z, { canPublish: g, publishing: b, awaitingApproval: null != P, ownerInstallMissing: A });
    if ("hidden" === tt) return null;
    let tn = null == P ? Q.label : y.intl.string(v.default.qru9M5);
    return {
        ...Q,
        state: tt,
        status: Z.status,
        guildId: m,
        appChannelId: w,
        failure: b ? null : _,
        showsProgress: null != X,
        label: b ? (X ?? y.intl.string(v.default.Rhx0rn)) : tn,
        disabled: b || !0 === u.busy,
        run: Y,
    };
}
