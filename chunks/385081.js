e.d(n, { Fz: () => f, Hy: () => E, gw: () => I, hV: () => d, wQ: () => w, xf: () => a, yJ: () => R });
var i = e(666860),
    l = e(174459),
    _ = e(723702),
    u = e(260498),
    o = e(246338),
    r = e(652215);
let a = {
    BUILD_FAILED: "BUILD_FAILED",
    HEALTHCHECK_FAILED: "HEALTHCHECK_FAILED",
    AGENT_ERROR: "AGENT_ERROR",
    PUBLISH_FAILED: "PUBLISH_FAILED",
    WS_OPEN_FAILED: "WS_OPEN_FAILED",
    SEND_FAILED: "SEND_FAILED",
    RUNTIME_FRAME_ERROR: "RUNTIME_FRAME_ERROR",
    RUNTIME_WORKER_ERROR: "RUNTIME_WORKER_ERROR",
};
function c(t) {
    return null == t || "" === t ? null : t.slice(0, 256);
}
function s(t) {
    let n = u.Ay.getProject(t);
    return {
        project_id: t,
        project_name: c(n?.name),
        application_id: n?.application_id ?? null,
        preview_application_id: n?.preview_application_id ?? null,
        install_scope: n?.install_scope ?? null,
    };
}
function p(t, n) {
    let e = u.Ay.getProject(t),
        i = (n ? e?.preview_guild_id : e?.guild_id) ?? null,
        l = (n ? e?.preview_application_id : e?.application_id) ?? null;
    return { guild_id: i, channel_id: null != i && null != l ? (0, o.i8)(i, l) : null };
}
function d(t, n) {
    var e;
    (0, i.zV)(r.HAw.CONJURE_TURN_RESULTED, {
        ...s(t),
        ...p(t, !0),
        turn_id: n.turn_id ?? null,
        turn_result: n.result ?? null,
        turn_summary: c(n.detail ?? n.summary),
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
function E(t, n) {
    let { location: e, code: l, message: _, details: u, isPreview: o = !0, turnId: a } = n;
    (0, i.zV)(r.HAw.CONJURE_ERRORED, {
        ...s(t),
        is_preview: o,
        ...p(t, o),
        turn_id: a ?? null,
        error_location: e,
        error_code: l,
        error_message: c(_),
        error_details: c(u),
    });
}
function R(t, n) {
    let { entryPoint: e, publishState: l, surface: _, installScope: o, action: a } = n,
        c = u.Ay.getProject(t);
    (0, i.zV)(r.HAw.CONJURE_PUBLISH_ACTION_CLICKED, {
        project_id: t,
        application_id: c?.application_id ?? null,
        ...("user" === o ? { guild_id: null, channel_id: null } : p(t, !1)),
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
        install_scope: o,
        action: a,
    });
}
function A() {
    return (0, _.isAndroid)() ? "android" : (0, _.isIOS)() ? "ios" : (0, _.isDesktop)() ? "desktop" : "web";
}
function h(t) {
    let { projectId: n, turnId: e, rating: i, publishReason: l, surface: _ } = t;
    return { ...s(n), ...p(n, !0), turn_id: e, rating: i, publish_reason: l, surface: _, client_platform: A() };
}
function I(t) {
    (0, i.zV)(r.HAw.CONJURE_RATING_SUBMITTED, h(t));
}
function f(t, n) {
    (0, i.zV)(r.HAw.CONJURE_RATING_FEEDBACK_SUBMITTED, { ...h(t), feedback_text: n });
}
function w(t, n) {
    let e = u.Ay.getProject(t);
    l.default.track(r.HAw.CONJURE_BUILDER_OPENED, {
        project_id: t,
        entry_point: n,
        is_owner: null != e ? (0, u.PV)(e) : null,
        install_scope: e?.install_scope ?? null,
        client_platform: A(),
    });
}
