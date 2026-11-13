n.d(t, {
    DP: () => R,
    AA: () => P,
    Vu: () => D,
    b5: () => b,
    Bo: () => y,
    PP: () => M,
    Tr: () => v,
    eE: () => L,
    tE: () => C,
});
var i = n(582128),
    r = n(855986),
    a = n(554146),
    s = n(590209),
    l = n(617617),
    o = n(967198),
    d = n(129230),
    c = n(460288),
    u = n(811091),
    _ = n(825272),
    E = n(543862),
    A = n(68656);
function f(e, t, n) {
    return null == e ? n : 1 === u.default.compare(t, e);
}
function h(e, t, n, i) {
    let r = null != e ? (Number.isNaN(Number(e)) ? void 0 : Number(e)) : void 0,
        a = void 0 === r ? 0 : r + n.cooldownDurationMs,
        s = Date.now(),
        l = null == n.showAfterTimestamp || (s >= n.showAfterTimestamp && (r ?? 0) <= n.showAfterTimestamp),
        o = null == n.numTimesToRecur || 0 === n.numTimesToRecur || null == t || t < n.numTimesToRecur;
    return (i || (null != r && null != t)) && l && (null == r || s >= a) && o;
}
var I = n(199773),
    p = n(517057),
    m = n(826673),
    g = n(652215),
    T = n(355097);
let S = {};
function N(e) {
    return "single_use" === e.kind || "single_use_guild" === e.kind;
}
function C(e, t, n) {
    let u = e.filter((e) => "snowflake_bound_guild" !== e.kind || "" !== e.scope.snowflakeId),
        C = (function (e) {
            let t = e.some((e) => {
                    let { kind: t } = e;
                    return "single_use" === t;
                }),
                n = e.some(_.hM),
                i = [...new Set(e.flatMap((e) => ((0, _.vv)(e) ? [e.scope.guildId] : [])))],
                { dismissedContents: a, recurringStates: s } = (0, r.cf)([l.A], () => {
                    let e = l.A.settings.userContent;
                    return {
                        dismissedContents: t ? e?.dismissedContents : void 0,
                        recurringStates: n ? e?.recurringDismissibleContentStates : void 0,
                    };
                }),
                o = (0, r.yK)([l.A], () => i.map((e) => l.A.getGuildDismissedContentState(e)));
            return { dismissedContents: a, recurringStates: s, guildStates: new Map(i.map((e, t) => [e, o[t]])) };
        })(u),
        O = (0, A.Sg)(
            u.filter(N).map((e) => {
                let { content: t } = e;
                return t;
            }),
        ),
        R = (0, r.bG)([l.A], () => l.A.hasLoaded(T.oD.PRELOADED_USER_SETTINGS)),
        L =
            u.find(
                (e) =>
                    (!N(e) || O.includes(e.content)) &&
                    (function (e, t, n) {
                        var i, r, a, s;
                        let { dismissedContents: l, recurringStates: o, guildStates: d } = t,
                            u = o?.[e.content],
                            I = (0, _.vv)(e) ? d?.get(e.scope.guildId) : void 0;
                        switch (e.kind) {
                            case "single_use":
                                return ((i = e.content), null == l ? n : !(0, c.c0)(l, i));
                            case "single_use_guild":
                                return ((r = e.content), null == I ? n : null == I[r] || !1 === I[r].dismissed);
                            case "versioned":
                                return (
                                    !(0, A.P3)(e.content) &&
                                    ((a = u?.lastDismissedVersion), (s = e.scope.version), null == a ? n : a < s)
                                );
                            case "time_recurring":
                                return (
                                    !(0, A.P3)(e.content) &&
                                    h(u?.lastDismissedAtMs, u?.numTimesDismissed, e.scope.timeRecurringConfig, n)
                                );
                            case "time_recurring_guild": {
                                let t = I?.[e.content];
                                return (
                                    !(0, A.P3)(e.content) &&
                                    h(t?.lastDismissedAtMs, t?.numTimesDismissed, e.scope.timeRecurringConfig, n)
                                );
                            }
                            case "snowflake_bound":
                                return !(0, A.P3)(e.content) && f(u?.lastDismissedObjectId, e.scope.snowflakeId, n);
                            case "snowflake_bound_guild":
                                return (
                                    !(0, A.P3)(e.content) &&
                                    f(I?.[e.content]?.lastDismissedObjectId, e.scope.snowflakeId, n)
                                );
                            case "time_recurring_snowflake_bound":
                                return !(0, E.j6)(e.content, e.scope.snowflakeId, e.scope.timeRecurringConfig);
                        }
                    })(e, C, R),
            ) ?? null,
        { version: y, snowflakeId: D } = null != L ? (0, _.JK)(L) : S,
        b = u.some((e) => !(0, _.vv)(e)),
        v = (0, r.bG)([o.A], () => (b ? o.A.getGuildId() : null)),
        P = null != L && (0, _.vv)(L) ? L.scope.guildId : v,
        M = L?.content ?? null,
        U = (function (e, t, n, o) {
            let { version: c, snowflakeId: u, deduplicateImpressions: _ } = o,
                A = (0, p.Ay)((t) => null != e && t.currentlyShown.has(e)),
                [f, h] = (0, s.eK)(),
                m = null != e && (0, E.NZ)(e, f, h),
                S = (0, r.bG)([I.A], () => null != e && I.A.hasUserHitDCCap(e, t)),
                N = i.useRef(t);
            return (
                (N.current = t),
                i.useEffect(() => {
                    if (null != e) {
                        var t;
                        return (
                            l.A.hasLoaded(T.oD.PRELOADED_USER_SETTINGS) ||
                                ((t = N.current),
                                d.default.track(g.HAw.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, {
                                    content_type: a.M[e],
                                    group_name: n ?? null,
                                    latest_version: c ?? null,
                                    guild_id: t ?? null,
                                    snowflake_id: u ?? null,
                                })),
                            (0, E.Vh)(
                                e,
                                {
                                    groupName: n,
                                    guildId: N.current,
                                    version: c,
                                    snowflakeId: u,
                                    deduplicateImpressions: _,
                                },
                                f,
                                h,
                            ),
                            () => {
                                if (null == e) return;
                                let t = !I.A.hasUserHitDCCap();
                                (0, p.pd)({ content: e, groupName: n }, t);
                            }
                        );
                    }
                }, [e, n, S, m, c, u, _]),
                A && null != e ? e : null
            );
        })(M, P, t, { version: y, snowflakeId: D, deduplicateImpressions: n }),
        w = i.useCallback(
            (e, n) => {
                null != L &&
                    (function (e, t) {
                        switch (e.kind) {
                            case "single_use":
                                return (0, m.Dr)(e.content, t);
                            case "single_use_guild":
                                return (0, m.dX)(e.content, e.scope.guildId, t);
                            case "versioned":
                                return (0, E.$l)(e.content, e.scope.version, { ...t, version: e.scope.version });
                            case "time_recurring":
                                return (0, E.uh)(e.content, t);
                            case "time_recurring_guild":
                                return (0, m.KO)(e.content, e.scope.guildId, t);
                            case "snowflake_bound":
                            case "time_recurring_snowflake_bound":
                                return (0, E.qr)(e.content, e.scope.snowflakeId, t);
                            case "snowflake_bound_guild":
                                return (0, m.in)(e.content, e.scope.snowflakeId, e.scope.guildId, t);
                        }
                    })(L, { dismissAction: e, groupName: t, guildId: P, forceTrack: n });
            },
            [M, t, P, y, D],
        );
    return { candidate: L, visibleContent: U, markAsDismissed: w };
}
function O(e, t) {
    let { visibleContent: n, markAsDismissed: i } = C(e, t);
    return [n, i];
}
function R(e, t) {
    let [n, i] = O(
        e.flatMap((e) => (0, _.qd)(e) ?? []),
        t,
    );
    return [n, i];
}
function L(e, t, n) {
    return O(null != e ? [{ kind: "versioned", content: e, scope: { version: t } }] : [], n);
}
function y(e, t, n) {
    return O(null != e ? [{ kind: "time_recurring", content: e, scope: { timeRecurringConfig: t } }] : [], n);
}
function D(e, t, n) {
    return O(null != e ? [{ kind: "snowflake_bound", content: e, scope: { snowflakeId: t } }] : [], n);
}
function b(e, t, n, i) {
    return O(
        null != e ? [{ kind: "snowflake_bound_guild", content: e, scope: { snowflakeId: t, guildId: n } }] : [],
        i,
    );
}
function v(e, t, n, i) {
    return O(
        null != e
            ? [
                  {
                      kind: "time_recurring_snowflake_bound",
                      content: e,
                      scope: { snowflakeId: n, timeRecurringConfig: t },
                  },
              ]
            : [],
        i,
    );
}
function P(e, t, n) {
    return O(
        e.map((e) => ({ kind: "single_use_guild", content: e, scope: { guildId: t } })),
        n,
    );
}
function M(e, t, n, i) {
    return O(
        null != e ? [{ kind: "time_recurring_guild", content: e, scope: { timeRecurringConfig: n, guildId: t } }] : [],
        i,
    );
}
