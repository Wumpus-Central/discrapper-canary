(n.d(t, {
    A4: () => U,
    CA: () => p,
    Fl: () => c,
    HR: () => s,
    Hn: () => d,
    Hv: () => _,
    IU: () => E,
    Ju: () => R,
    Oq: () => L,
    PY: () => D,
    RX: () => A,
    XB: () => g,
    XE: () => P,
    Zh: () => o,
    a7: () => h,
    aI: () => S,
    aM: () => f,
    c6: () => r,
    eq: () => a,
    km: () => N,
    lN: () => C,
    lO: () => w,
    o2: () => O,
    q7: () => i,
    sM: () => y,
    sj: () => I,
    sq: () => l,
    tr: () => u,
    vC: () => b,
    wU: () => T,
    wV: () => m,
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
    s = 400,
    l = 25,
    o = Object.freeze({ PUBLIC: 1, SHAREABLE: 2 });
function d(e) {
    return ((e.flags ?? 0) & o.PUBLIC) != 0;
}
function c(e) {
    return null != e.preview_application_id && e.preview_application_id === e.application_id;
}
function u(e) {
    return ((e.flags ?? 0) & o.SHAREABLE) != 0;
}
function _(e) {
    let t = e.supported_surfaces ?? [];
    return t.includes(i.APP_CHANNEL) || ("guild" === e.install_scope && 0 === t.length);
}
function E(e) {
    return null != e.flags;
}
function A(e) {
    return null != e.collaborator_role_ids;
}
function h(e) {
    return Math.floor(100 * e);
}
function f(e) {
    return e.input_tokens + e.output_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function I(e) {
    return e.input_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function p(e) {
    let t = I(e);
    return 0 === t ? 0 : e.cache_read_input_tokens / t;
}
function T(e) {
    return e ?? { input_tokens: 0, output_tokens: 0, cache_creation_input_tokens: 0, cache_read_input_tokens: 0 };
}
function m(e, t) {
    return {
        input_tokens: e.input_tokens + t.input_tokens,
        output_tokens: e.output_tokens + t.output_tokens,
        cache_creation_input_tokens: e.cache_creation_input_tokens + t.cache_creation_input_tokens,
        cache_read_input_tokens: e.cache_read_input_tokens + t.cache_read_input_tokens,
    };
}
let g = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]),
    S = 5242880,
    N = 0x3200000,
    C = 10,
    O = 36e5;
function R(e) {
    return g.has(e) ? S : N;
}
function L(e, t) {
    return e <= R(t);
}
function y(e) {
    return `${Math.round(e / 1048576)} MB`;
}
let D = ["simple", "balanced", "complex"],
    v = [
        { id: "claude-fable-5-1", label: "Claude Fable 5.1", provider: "anthropic" },
        { id: "claude-opus-5-5", label: "Claude Opus 5.5", provider: "anthropic" },
        { id: "claude-sonnet-5-5", label: "Claude Sonnet 5.5", provider: "anthropic" },
        { id: "claude-haiku-5-5", label: "Claude Haiku 5.5", provider: "anthropic" },
        { id: "gpt-6-astra", label: "GPT-6 Astra", provider: "openai", supports_fast: !0 },
        { id: "gpt-6.1-sol", label: "GPT-6.1 Sol", provider: "openai", supports_fast: !0 },
        { id: "gpt-6-luna", label: "GPT-6 Luna", provider: "openai", supports_fast: !0 },
        { id: "xai/grok-4.7", label: "Grok 4.7", provider: "xai" },
    ],
    b = { main: v, subagent: v, thinking: ["low", "medium", "high", "xhigh", "max"] },
    M = [
        { id: "deepseek/deepseek-flash", label: "DeepSeek V4.1 Flash", provider: "deepseek" },
        { id: "moonshotai/kimi-k3", label: "Kimi K3", provider: "moonshotai" },
    ],
    P = { main: M, subagent: M, thinking: b.thinking },
    U = { tier: "balanced", provider: "openai" },
    w = {
        simple: { model: "gpt-6-luna", thinking: "high" },
        balanced: { model: "claude-sonnet-5-5", thinking: "high" },
        complex: { model: "claude-opus-5-5", thinking: "high" },
    };
