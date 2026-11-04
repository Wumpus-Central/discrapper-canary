var i = e(149468),
    l = e(129230),
    _ = e(723702),
    u = e(260498),
    r = e(951178),
    o = e(811587),
    a = e(246338),
    c = e(652215);
function p(t) {
    return null == t || "" === t ? null : t.slice(0, 256);
}
function s(t) {
    let n = u.Ay.getProject(t);
    return {
        project_id: t,
        project_name: p(n?.name),
        application_id: n?.application_id ?? null,
        preview_application_id: n?.preview_application_id ?? null,
        install_scope: n?.install_scope ?? null,
    };
}
function d(t, n) {
    let e = u.Ay.getProject(t),
        i = (n ? e?.preview_guild_id : e?.guild_id) ?? null,
        l = (n ? e?.preview_application_id : e?.application_id) ?? null;
    return { guild_id: i, channel_id: null != i && null != l ? (0, a.i8)(i, l) : null };
}
function E() {
    return (0, _.m0)() ? "android" : (0, _.un)() ? "ios" : (0, _.xl)() ? "desktop" : "web";
}
let A = {
    [r.q7.APP_CHANNEL]: "app_channel",
    [r.q7.VOICE_CHANNEL]: "voice_channel",
    [r.q7.PROFILE_WIDGET]: "profile_widget",
    [r.q7.AUTOMOD]: "automod",
    [r.q7.BOT]: "bot",
    [r.q7.APPLICATION_COMMANDS]: "application_commands",
    [r.q7.OVERLAY]: "overlay",
    [r.q7.ACTIVITY]: "activity",
};
function R(t) {
    let { projectId: n, turnId: e, publishReason: i, surface: l } = t;
    return { ...s(n), ...d(n, !0), turn_id: e, publish_reason: i, surface: l, client_platform: E() };
}
function I(t) {
    var n, e, i;
    let l;
    return {
        ...R(t),
        placement: t.placement,
        project_kinds:
            ((n = t.projectId),
            (l = u.Ay.getProject(n)),
            [
                ...new Set(
                    [...(l?.supported_surfaces ?? []), ...(l?.preview_supported_surfaces ?? [])]
                        .map((t) => A[t])
                        .filter((t) => null != t),
                ),
            ].sort()),
        is_new_project:
            ((e = t.projectId),
            !(null != (i = t.publishState) && (0, o.lE)(i)) &&
                0 === (u.Ay.getProject(e)?.supported_surfaces ?? []).length),
    };
}
e.d(
    n,
    {},
    {
        Fz: function (t, n) {
            (0, i.zV)(c.HAw.CONJURE_RATING_FEEDBACK_SUBMITTED, { ...R(t), rating: t.rating, feedback_text: n });
        },
        Hy: function (t, n) {
            let { location: e, code: l, message: _, details: u, isPreview: r = !0, turnId: o } = n;
            (0, i.zV)(c.HAw.CONJURE_ERRORED, {
                ...s(t),
                is_preview: r,
                ...d(t, r),
                turn_id: o ?? null,
                error_location: e,
                error_code: l,
                error_message: p(_),
                error_details: p(u),
            });
        },
        gw: function (t) {
            (0, i.zV)(c.HAw.CONJURE_RATING_SUBMITTED, { ...I(t), rating: t.rating });
        },
        hV: function (t, n) {
            var e;
            (0, i.zV)(c.HAw.CONJURE_TURN_RESULTED, {
                ...s(t),
                ...d(t, !0),
                turn_id: n.turn_id ?? null,
                turn_result: n.result ?? null,
                turn_summary: p(n.detail ?? n.summary),
                turn_cost: n.cost_usd ?? null,
                turn_duration_ms: n.duration_ms ?? null,
                model_tier: n.model_tier ?? null,
                ...(null == (e = n.tokens)
                    ? {
                          turn_input_tokens: null,
                          turn_output_tokens: null,
                          turn_cache_write_tokens: null,
                          turn_cache_read_tokens: null,
                          turn_total_tokens: null,
                      }
                    : {
                          turn_input_tokens: e.input_tokens,
                          turn_output_tokens: e.output_tokens,
                          turn_cache_write_tokens: e.cache_creation_input_tokens,
                          turn_cache_read_tokens: e.cache_read_input_tokens,
                          turn_total_tokens:
                              e.input_tokens +
                              e.output_tokens +
                              e.cache_creation_input_tokens +
                              e.cache_read_input_tokens,
                      }),
            });
        },
        rv: function (t) {
            (0, i.zV)(c.HAw.CONJURE_RATING_VIEWED, I(t));
        },
        wQ: function (t, n) {
            let e = u.Ay.getProject(t);
            l.default.track(c.HAw.CONJURE_BUILDER_OPENED, {
                project_id: t,
                entry_point: n,
                is_owner: null != e ? (0, u.PV)(e) : null,
                install_scope: e?.install_scope ?? null,
                client_platform: E(),
            });
        },
        xf: {
            BUILD_FAILED: "BUILD_FAILED",
            HEALTHCHECK_FAILED: "HEALTHCHECK_FAILED",
            AGENT_ERROR: "AGENT_ERROR",
            PUBLISH_FAILED: "PUBLISH_FAILED",
            WS_OPEN_FAILED: "WS_OPEN_FAILED",
            SEND_FAILED: "SEND_FAILED",
            RUNTIME_FRAME_ERROR: "RUNTIME_FRAME_ERROR",
            RUNTIME_WORKER_ERROR: "RUNTIME_WORKER_ERROR",
        },
        yJ: function (t, n) {
            let { entryPoint: e, publishState: l, surface: _, installScope: r, action: o } = n,
                a = u.Ay.getProject(t);
            (0, i.zV)(c.HAw.CONJURE_PUBLISH_ACTION_CLICKED, {
                project_id: t,
                application_id: a?.application_id ?? null,
                ...("user" === r ? { guild_id: null, channel_id: null } : d(t, !1)),
                entry_point: e,
                publish_state:
                    null == l
                        ? null
                        : "nothing_built" === l || "not_live" === l
                          ? "unpublished"
                          : "live_outdated" === l
                            ? "changes"
                            : "up_to_date",
                surface: _,
                install_scope: r,
                action: o,
            });
        },
    },
);
