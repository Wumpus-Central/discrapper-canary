n.d(t, { Fz: () => A, Hy: () => E, gw: () => h, hV: () => p, xf: () => s, yJ: () => d });
var i = n(666860),
    l = n(723702),
    _ = n(260498),
    u = n(246338),
    r = n(652215);
let s = {
    BUILD_FAILED: "BUILD_FAILED",
    HEALTHCHECK_FAILED: "HEALTHCHECK_FAILED",
    AGENT_ERROR: "AGENT_ERROR",
    PUBLISH_FAILED: "PUBLISH_FAILED",
    WS_OPEN_FAILED: "WS_OPEN_FAILED",
    SEND_FAILED: "SEND_FAILED",
    RUNTIME_FRAME_ERROR: "RUNTIME_FRAME_ERROR",
    RUNTIME_WORKER_ERROR: "RUNTIME_WORKER_ERROR",
};
function a(e) {
    return null == e || "" === e ? null : e.slice(0, 256);
}
function o(e) {
    let t = _.Ay.getProject(e);
    return {
        project_id: e,
        project_name: a(t?.name),
        application_id: t?.application_id ?? null,
        preview_application_id: t?.preview_application_id ?? null,
        install_scope: t?.install_scope ?? null,
    };
}
function c(e, t) {
    let n = _.Ay.getProject(e),
        i = (t ? n?.preview_guild_id : n?.guild_id) ?? null,
        l = (t ? n?.preview_application_id : n?.application_id) ?? null;
    return { guild_id: i, channel_id: null != i && null != l ? (0, u.i8)(i, l) : null };
}
function p(e, t) {
    var n;
    (0, i.zV)(r.HAw.CONJURE_TURN_RESULTED, {
        ...o(e),
        ...c(e, !0),
        turn_id: t.turn_id ?? null,
        turn_result: t.result ?? null,
        turn_summary: a(t.detail ?? t.summary),
        turn_cost: t.cost_usd ?? null,
        turn_duration_ms: t.duration_ms ?? null,
        model_tier: t.model_tier ?? null,
        ...(null == (n = t.tokens)
            ? {
                  turn_input_tokens: null,
                  turn_output_tokens: null,
                  turn_cache_write_tokens: null,
                  turn_cache_read_tokens: null,
                  turn_total_tokens: null,
              }
            : {
                  turn_input_tokens: n.input_tokens,
                  turn_output_tokens: n.output_tokens,
                  turn_cache_write_tokens: n.cache_creation_input_tokens,
                  turn_cache_read_tokens: n.cache_read_input_tokens,
                  turn_total_tokens:
                      n.input_tokens + n.output_tokens + n.cache_creation_input_tokens + n.cache_read_input_tokens,
              }),
    });
}
function E(e, t) {
    let { location: n, code: l, message: _, details: u, isPreview: s = !0, turnId: p } = t;
    (0, i.zV)(r.HAw.CONJURE_ERRORED, {
        ...o(e),
        is_preview: s,
        ...c(e, s),
        turn_id: p ?? null,
        error_location: n,
        error_code: l,
        error_message: a(_),
        error_details: a(u),
    });
}
function d(e, t) {
    let { entryPoint: n, publishState: l, surface: u, installScope: s, action: a } = t,
        o = _.Ay.getProject(e);
    (0, i.zV)(r.HAw.CONJURE_PUBLISH_ACTION_CLICKED, {
        project_id: e,
        application_id: o?.application_id ?? null,
        ...("user" === s ? { guild_id: null, channel_id: null } : c(e, !1)),
        entry_point: n,
        publish_state:
            null == l
                ? null
                : "nothing_built" === l || "not_live" === l
                  ? "unpublished"
                  : "live_outdated" === l
                    ? "changes"
                    : "up_to_date",
        surface: u,
        install_scope: s,
        action: a,
    });
}
function R(e) {
    let { projectId: t, turnId: n, rating: i, publishReason: _, surface: u } = e;
    return {
        ...o(t),
        ...c(t, !0),
        turn_id: n,
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
function h(e) {
    (0, i.zV)(r.HAw.CONJURE_RATING_SUBMITTED, R(e));
}
function A(e, t) {
    (0, i.zV)(r.HAw.CONJURE_RATING_FEEDBACK_SUBMITTED, { ...R(e), feedback_text: t });
}
