n.d(t, { Ar: () => g, Xv: () => f, Z0: () => p, qs: () => h, xA: () => s });
var i = n(587895),
    r = n(174459),
    l = n(26278),
    a = n(870440),
    o = n(652215);
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
function u(e) {
    return null == e || "" === e ? null : e.slice(0, 256);
}
function d(e) {
    let t = l.Ay.getProject(e);
    return {
        project_id: e,
        project_name: u(t?.name),
        application_id: t?.application_id ?? null,
        preview_application_id: t?.preview_application_id ?? null,
    };
}
function c(e, t) {
    let n = l.Ay.getProject(e),
        i = (t ? n?.preview_guild_id : n?.guild_id) ?? null,
        r = (t ? n?.preview_application_id : n?.application_id) ?? null;
    return { guild_id: i, channel_id: null != i && null != r ? (0, a.SH)(i, r) : null };
}
function f(e, t) {
    var n;
    r.default.track(o.HAw.VIBEGRATION_TURN_RESULTED, {
        ...d(e),
        turn_result: t.result ?? null,
        turn_summary: u(t.detail ?? t.summary),
        turn_cost: t.cost_usd ?? null,
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
function h(e, t) {
    let { isPreview: n } = t,
        l = d(e),
        a = n ? l.preview_application_id : l.application_id,
        s = null != a ? i.A.getApplication(a) : null;
    r.default.track(o.HAw.VIBEGRATION_DEPLOYED, {
        ...l,
        project_summary: u(s?.description),
        is_preview: n,
        ...c(e, n),
    });
}
function p(e, t) {
    let { location: n, code: i, message: l, details: a, isPreview: s = !0 } = t;
    r.default.track(o.HAw.VIBEGRATION_ERRORED, {
        ...d(e),
        is_preview: s,
        ...c(e, s),
        error_location: n,
        error_code: i,
        error_message: u(l),
        error_details: u(a),
    });
}
function g(e, t) {
    let { entryPoint: n, publishState: i, surface: a, installScope: s, action: u } = t,
        d = l.Ay.getProject(e);
    r.default.track(o.HAw.VIBEGRATION_PUBLISH_ACTION_CLICKED, {
        project_id: e,
        application_id: d?.application_id ?? null,
        guild_id: "user" === s ? null : (d?.guild_id ?? null),
        entry_point: n,
        publish_state: i,
        surface: a,
        install_scope: s,
        action: u,
    });
}
