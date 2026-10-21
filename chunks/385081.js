n.d(t, { Fz: () => h, Hy: () => p, gw: () => R, hV: () => c, xf: () => r, yJ: () => E });
var i = n(666860),
    l = n(260498),
    _ = n(246338),
    u = n(652215);
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
function s(e) {
    return null == e || "" === e ? null : e.slice(0, 256);
}
function a(e) {
    let t = l.Ay.getProject(e);
    return {
        project_id: e,
        project_name: s(t?.name),
        application_id: t?.application_id ?? null,
        preview_application_id: t?.preview_application_id ?? null,
        install_scope: t?.install_scope ?? null,
    };
}
function o(e, t) {
    let n = l.Ay.getProject(e),
        i = (t ? n?.preview_guild_id : n?.guild_id) ?? null,
        u = (t ? n?.preview_application_id : n?.application_id) ?? null;
    return { guild_id: i, channel_id: null != i && null != u ? (0, _.i8)(i, u) : null };
}
function c(e, t) {
    var n;
    (0, i.zV)(u.HAw.CONJURE_TURN_RESULTED, {
        ...a(e),
        ...o(e, !0),
        turn_id: t.turn_id ?? null,
        turn_result: t.result ?? null,
        turn_summary: s(t.detail ?? t.summary),
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
function p(e, t) {
    let { location: n, code: l, message: _, details: r, isPreview: c = !0, turnId: p } = t;
    (0, i.zV)(u.HAw.CONJURE_ERRORED, {
        ...a(e),
        is_preview: c,
        ...o(e, c),
        turn_id: p ?? null,
        error_location: n,
        error_code: l,
        error_message: s(_),
        error_details: s(r),
    });
}
function E(e, t) {
    let { entryPoint: n, publishState: _, surface: r, installScope: s, action: a } = t,
        c = l.Ay.getProject(e);
    (0, i.zV)(u.HAw.CONJURE_PUBLISH_ACTION_CLICKED, {
        project_id: e,
        application_id: c?.application_id ?? null,
        ...("user" === s ? { guild_id: null, channel_id: null } : o(e, !1)),
        entry_point: n,
        publish_state: _,
        surface: r,
        install_scope: s,
        action: a,
    });
}
function d(e) {
    let { projectId: t, turnId: n, rating: i, publishReason: l, surface: _ } = e;
    return { ...a(t), ...o(t, !0), turn_id: n, rating: i, publish_reason: l, surface: _ };
}
function R(e) {
    (0, i.zV)(u.HAw.CONJURE_RATING_SUBMITTED, d(e));
}
function h(e, t) {
    (0, i.zV)(u.HAw.CONJURE_RATING_FEEDBACK_SUBMITTED, { ...d(e), feedback_text: t });
}
