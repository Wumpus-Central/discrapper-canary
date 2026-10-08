(n.d(t, {
    A4: () => b,
    CA: () => f,
    Hn: () => o,
    IU: () => u,
    Ju: () => N,
    KQ: () => c,
    Oq: () => C,
    PY: () => R,
    RX: () => _,
    XB: () => T,
    XE: () => v,
    Zh: () => l,
    a7: () => E,
    aM: () => A,
    c6: () => r,
    eq: () => a,
    km: () => m,
    lN: () => g,
    lO: () => M,
    o2: () => S,
    q7: () => i,
    sM: () => O,
    sj: () => h,
    sq: () => s,
    tr: () => d,
    vC: () => y,
    wU: () => I,
    wV: () => p,
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
    }),
    r = 2,
    a = 128,
    s = 25,
    l = Object.freeze({ PUBLIC: 1, SHAREABLE: 2, NATIVE_APP_CHANNELS: 4 });
function o(e) {
    return ((e.flags ?? 0) & l.PUBLIC) != 0;
}
function d(e) {
    return ((e.flags ?? 0) & l.SHAREABLE) != 0;
}
function c(e) {
    return e.supported_surfaces?.includes(i.APP_CHANNEL) === !0 || ((e.flags ?? 0) & l.NATIVE_APP_CHANNELS) != 0;
}
function u(e) {
    return null != e.flags;
}
function _(e) {
    return null != e.collaborator_role_ids;
}
function E(e) {
    return Math.floor(100 * e);
}
function A(e) {
    return e.input_tokens + e.output_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function h(e) {
    return e.input_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function f(e) {
    let t = h(e);
    return 0 === t ? 0 : e.cache_read_input_tokens / t;
}
function I(e) {
    return e ?? { input_tokens: 0, output_tokens: 0, cache_creation_input_tokens: 0, cache_read_input_tokens: 0 };
}
function p(e, t) {
    return {
        input_tokens: e.input_tokens + t.input_tokens,
        output_tokens: e.output_tokens + t.output_tokens,
        cache_creation_input_tokens: e.cache_creation_input_tokens + t.cache_creation_input_tokens,
        cache_read_input_tokens: e.cache_read_input_tokens + t.cache_read_input_tokens,
    };
}
let T = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]),
    m = 0x3200000,
    g = 10,
    S = 36e5;
function N(e) {
    return T.has(e) ? 5242880 : m;
}
function C(e, t) {
    return e <= N(t);
}
function O(e) {
    return `${Math.round(e / 1048576)} MB`;
}
let R = ["simple", "balanced", "complex"],
    L = [
        { id: "claude-fable-5-1", label: "Claude Fable 5.1", provider: "anthropic" },
        { id: "claude-opus-5-5", label: "Claude Opus 5.5", provider: "anthropic" },
        { id: "claude-sonnet-5-5", label: "Claude Sonnet 5.5", provider: "anthropic" },
        { id: "claude-haiku-5-5", label: "Claude Haiku 5.5", provider: "anthropic" },
        { id: "gpt-6-astra", label: "GPT-6 Astra", provider: "openai", supports_fast: !0 },
        { id: "gpt-6.1-sol", label: "GPT-6.1 Sol", provider: "openai", supports_fast: !0 },
        { id: "gpt-6-luna", label: "GPT-6 Luna", provider: "openai", supports_fast: !0 },
        { id: "xai/grok-4.7", label: "Grok 4.7", provider: "xai" },
    ],
    y = { main: L, subagent: L, thinking: ["low", "medium", "high", "xhigh", "max"] },
    D = [
        { id: "deepseek/deepseek-flash", label: "DeepSeek V4.1 Flash", provider: "deepseek" },
        { id: "moonshotai/kimi-k3", label: "Kimi K3", provider: "moonshotai" },
    ],
    v = { main: D, subagent: D, thinking: y.thinking },
    b = { tier: "balanced", provider: "openai" },
    M = {
        simple: { model: "gpt-6-luna", thinking: "high" },
        balanced: { model: "claude-sonnet-5-5", thinking: "high" },
        complex: { model: "claude-opus-5-5", thinking: "high" },
    };
