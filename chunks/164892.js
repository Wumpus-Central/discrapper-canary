(n.d(t, {
    A4: () => D,
    CA: () => h,
    Hn: () => s,
    IU: () => c,
    Ju: () => g,
    KQ: () => o,
    Oq: () => S,
    PY: () => C,
    RX: () => u,
    XB: () => p,
    XE: () => y,
    Zh: () => a,
    a7: () => _,
    aM: () => E,
    lN: () => T,
    lO: () => v,
    o2: () => m,
    sM: () => N,
    sj: () => A,
    sq: () => r,
    tr: () => l,
    vC: () => R,
    wU: () => f,
    wV: () => I,
    wo: () => d,
}),
    n(938796));
let i = Object.freeze({
        APP_CHANNEL: 1,
        VOICE_CHANNEL: 2,
        PROFILE_WIDGET: 3,
        AUTOMOD: 4,
        BOT: 5,
        APPLICATION_COMMANDS: 6,
    }),
    r = 25,
    a = Object.freeze({ PUBLIC: 1, SHAREABLE: 2, NATIVE_APP_CHANNELS: 4 });
function s(e) {
    return ((e.flags ?? 0) & a.PUBLIC) != 0;
}
function l(e) {
    return ((e.flags ?? 0) & a.SHAREABLE) != 0;
}
function o(e) {
    return e.supported_surfaces?.includes(i.APP_CHANNEL) === !0 || ((e.flags ?? 0) & a.NATIVE_APP_CHANNELS) != 0;
}
function d(e) {
    return a.PUBLIC | (e ? a.NATIVE_APP_CHANNELS : 0);
}
function c(e) {
    return null != e.flags;
}
function u(e) {
    return null != e.collaborator_role_ids;
}
function _(e) {
    return Math.floor(100 * e);
}
function E(e) {
    return e.input_tokens + e.output_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function A(e) {
    return e.input_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function h(e) {
    let t = A(e);
    return 0 === t ? 0 : e.cache_read_input_tokens / t;
}
function f(e) {
    return e ?? { input_tokens: 0, output_tokens: 0, cache_creation_input_tokens: 0, cache_read_input_tokens: 0 };
}
function I(e, t) {
    return {
        input_tokens: e.input_tokens + t.input_tokens,
        output_tokens: e.output_tokens + t.output_tokens,
        cache_creation_input_tokens: e.cache_creation_input_tokens + t.cache_creation_input_tokens,
        cache_read_input_tokens: e.cache_read_input_tokens + t.cache_read_input_tokens,
    };
}
let p = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]),
    T = 10,
    m = 36e5;
function g(e) {
    return p.has(e) ? 5242880 : 0x3200000;
}
function S(e, t) {
    return e <= g(t);
}
function N(e) {
    return `${Math.round(e / 1048576)} MB`;
}
let C = ["simple", "balanced", "complex"],
    O = [
        { id: "claude-fable-5-1", label: "Claude Fable 5.1", provider: "anthropic" },
        { id: "claude-opus-5-5", label: "Claude Opus 5.5", provider: "anthropic" },
        { id: "claude-sonnet-5-5", label: "Claude Sonnet 5.5", provider: "anthropic" },
        { id: "claude-haiku-4-5", label: "Claude Haiku 4.5", provider: "anthropic" },
        { id: "gpt-6-astra", label: "GPT-6 Astra", provider: "openai", supports_fast: !0 },
        { id: "gpt-6.1-sol", label: "GPT-6.1 Sol", provider: "openai", supports_fast: !0 },
        { id: "gpt-6-luna", label: "GPT-6 Luna", provider: "openai", supports_fast: !0 },
        { id: "xai/grok-4.7", label: "Grok 4.7", provider: "xai" },
    ],
    R = { main: O, subagent: O, thinking: ["low", "medium", "high", "xhigh", "max"] },
    L = [
        { id: "deepseek/deepseek-flash", label: "DeepSeek V4.1 Flash", provider: "deepseek" },
        { id: "moonshotai/kimi-k3", label: "Kimi K3", provider: "moonshotai" },
    ],
    y = { main: L, subagent: L, thinking: R.thinking },
    D = { tier: "balanced", provider: "openai" },
    v = {
        simple: { model: "gpt-6-luna", thinking: "high" },
        balanced: { model: "claude-sonnet-5-5", thinking: "high" },
        complex: { model: "claude-opus-5-5", thinking: "high" },
    };
