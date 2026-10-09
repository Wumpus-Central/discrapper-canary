(n.d(t, {
    A4: () => M,
    CA: () => I,
    Fl: () => d,
    Hn: () => o,
    Hv: () => u,
    IU: () => _,
    Ju: () => C,
    Oq: () => O,
    PY: () => L,
    RX: () => E,
    XB: () => m,
    XE: () => b,
    Zh: () => l,
    a7: () => A,
    aM: () => h,
    c6: () => r,
    eq: () => a,
    km: () => g,
    lN: () => S,
    lO: () => P,
    o2: () => N,
    q7: () => i,
    sM: () => R,
    sj: () => f,
    sq: () => s,
    tr: () => c,
    vC: () => D,
    wU: () => p,
    wV: () => T,
}),
    n(938796));
let i = Object.freeze({
        APP_CHANNEL: 1,
        VOICE_CHANNEL: 2,
        PROFILE_WIDGET: 3,
        AUTOMOD: 4,
        BOT: 5,
        APPLICATION_COMMANDS: 6,
        OVERLAY: 7,
        ACTIVITY: 8,
    }),
    r = 2,
    a = 128,
    s = 25,
    l = Object.freeze({ PUBLIC: 1, SHAREABLE: 2 });
function o(e) {
    return ((e.flags ?? 0) & l.PUBLIC) != 0;
}
function d(e) {
    return null != e.preview_application_id && e.preview_application_id === e.application_id;
}
function c(e) {
    return ((e.flags ?? 0) & l.SHAREABLE) != 0;
}
function u(e) {
    let t = e.supported_surfaces ?? [];
    return t.includes(i.APP_CHANNEL) || ("guild" === e.install_scope && 0 === t.length);
}
function _(e) {
    return null != e.flags;
}
function E(e) {
    return null != e.collaborator_role_ids;
}
function A(e) {
    return Math.floor(100 * e);
}
function h(e) {
    return e.input_tokens + e.output_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function f(e) {
    return e.input_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function I(e) {
    let t = f(e);
    return 0 === t ? 0 : e.cache_read_input_tokens / t;
}
function p(e) {
    return e ?? { input_tokens: 0, output_tokens: 0, cache_creation_input_tokens: 0, cache_read_input_tokens: 0 };
}
function T(e, t) {
    return {
        input_tokens: e.input_tokens + t.input_tokens,
        output_tokens: e.output_tokens + t.output_tokens,
        cache_creation_input_tokens: e.cache_creation_input_tokens + t.cache_creation_input_tokens,
        cache_read_input_tokens: e.cache_read_input_tokens + t.cache_read_input_tokens,
    };
}
let m = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]),
    g = 0x3200000,
    S = 10,
    N = 36e5;
function C(e) {
    return m.has(e) ? 5242880 : g;
}
function O(e, t) {
    return e <= C(t);
}
function R(e) {
    return `${Math.round(e / 1048576)} MB`;
}
let L = ["simple", "balanced", "complex"],
    y = [
        { id: "claude-fable-5-1", label: "Claude Fable 5.1", provider: "anthropic" },
        { id: "claude-opus-5-5", label: "Claude Opus 5.5", provider: "anthropic" },
        { id: "claude-sonnet-5-5", label: "Claude Sonnet 5.5", provider: "anthropic" },
        { id: "claude-haiku-5-5", label: "Claude Haiku 5.5", provider: "anthropic" },
        { id: "gpt-6-astra", label: "GPT-6 Astra", provider: "openai", supports_fast: !0 },
        { id: "gpt-6.1-sol", label: "GPT-6.1 Sol", provider: "openai", supports_fast: !0 },
        { id: "gpt-6-luna", label: "GPT-6 Luna", provider: "openai", supports_fast: !0 },
        { id: "xai/grok-4.7", label: "Grok 4.7", provider: "xai" },
    ],
    D = { main: y, subagent: y, thinking: ["low", "medium", "high", "xhigh", "max"] },
    v = [
        { id: "deepseek/deepseek-flash", label: "DeepSeek V4.1 Flash", provider: "deepseek" },
        { id: "moonshotai/kimi-k3", label: "Kimi K3", provider: "moonshotai" },
    ],
    b = { main: v, subagent: v, thinking: D.thinking },
    M = { tier: "balanced", provider: "openai" },
    P = {
        simple: { model: "gpt-6-luna", thinking: "high" },
        balanced: { model: "claude-sonnet-5-5", thinking: "high" },
        complex: { model: "claude-opus-5-5", thinking: "high" },
    };
