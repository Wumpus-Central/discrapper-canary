e.d(n, { Fz: () => h, Hy: () => d, gw: () => A, hV: () => p, xf: () => r, yJ: () => E });
var i = e(666860),
    l = e(723702),
    _ = e(260498),
    u = e(246338),
    o = e(652215);
let r = {
    BUILD_FAILED: "BUILD_FAILED",
    HEALTHCHECK_FAILED: "HEALTHCHECK_FAILED",
    AGENT_ERROR: "AGENT_ERROR",
    PUBLISH_FAILED: "PUBLISH_FAILED",
    WS_OPEN_FAILED: "WS_OPEN_FAILED",
    SEND_FAILED: "SEND_FAILED",
    RUNTIME_FRAME_ERROR: "RUNTIME_FRAME_ERROR",
    RUNTIME_WORKER_ERROR: "RUNTIME_WORKER_ERROR",
};
function a(t) {
    return null == t || "" === t ? null : t.slice(0, 256);
}
function s(t) {
    let n = _.Ay.getProject(t);
    return {
        project_id: t,
        project_name: a(n?.name),
        application_id: n?.application_id ?? null,
        preview_application_id: n?.preview_application_id ?? null,
        install_scope: n?.install_scope ?? null,
    };
}
function c(t, n) {
    let e = _.Ay.getProject(t),
        i = (n ? e?.preview_guild_id : e?.guild_id) ?? null,
        l = (n ? e?.preview_application_id : e?.application_id) ?? null;
    return { guild_id: i, channel_id: null != i && null != l ? (0, u.i8)(i, l) : null };
}
function p(t, n) {
    var e;
    (0, i.zV)(o.HAw.CONJURE_TURN_RESULTED, {
        ...s(t),
        ...c(t, !0),
        turn_id: n.turn_id ?? null,
        turn_result: n.result ?? null,
        turn_summary: a(n.detail ?? n.summary),
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
                      e.input_tokens + e.output_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens,
              }),
    });
}
function d(t, n) {
    let { location: e, code: l, message: _, details: u, isPreview: r = !0, turnId: p } = n;
    (0, i.zV)(o.HAw.CONJURE_ERRORED, {
        ...s(t),
        is_preview: r,
        ...c(t, r),
        turn_id: p ?? null,
        error_location: e,
        error_code: l,
        error_message: a(_),
        error_details: a(u),
    });
}
function E(t, n) {
    let { entryPoint: e, publishState: l, surface: u, installScope: r, action: a } = n,
        s = _.Ay.getProject(t);
    (0, i.zV)(o.HAw.CONJURE_PUBLISH_ACTION_CLICKED, {
        project_id: t,
        application_id: s?.application_id ?? null,
        ...("user" === r ? { guild_id: null, channel_id: null } : c(t, !1)),
        entry_point: e,
        publish_state:
            null == l
                ? null
                : "nothing_built" === l || "not_live" === l
                  ? "unpublished"
                  : "live_outdated" === l
                    ? "changes"
                    : "up_to_date",
        surface: u,
        install_scope: r,
        action: a,
    });
}
function R(t) {
    let { projectId: n, turnId: e, rating: i, publishReason: _, surface: u } = t;
    return {
        ...s(n),
        ...c(n, !0),
        turn_id: e,
        rating: i,
        publish_reason: _,
        surface: u,
        client_platform: (0, l.isAndroid)()
            ? "android"
            : (0, l.isIOS)()
              ? "ios"
              : (0, l.isDesktop)()
                ? "desktop"
                : "web",
    };
}
function A(t) {
    (0, i.zV)(o.HAw.CONJURE_RATING_SUBMITTED, R(t));
}
function h(t, n) {
    (0, i.zV)(o.HAw.CONJURE_RATING_FEEDBACK_SUBMITTED, { ...R(t), feedback_text: n });
}
