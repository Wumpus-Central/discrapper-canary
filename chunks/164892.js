(n.d(t, {
    A4: () => y,
    CA: () => A,
    Hn: () => s,
    IU: () => d,
    Ju: () => m,
    KQ: () => o,
    Oq: () => g,
    PY: () => N,
    RX: () => c,
    XB: () => I,
    XE: () => L,
    Zh: () => a,
    a7: () => u,
    aM: () => _,
    lN: () => p,
    lO: () => D,
    o2: () => T,
    sM: () => S,
    sj: () => E,
    sq: () => r,
    tr: () => l,
    vC: () => O,
    wU: () => h,
    wV: () => f,
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
    return null != e.flags;
}
function c(e) {
    return null != e.collaborator_role_ids;
}
function u(e) {
    return Math.floor(100 * e);
}
function _(e) {
    return e.input_tokens + e.output_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function E(e) {
    return e.input_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function A(e) {
    let t = E(e);
    return 0 === t ? 0 : e.cache_read_input_tokens / t;
}
function h(e) {
    return e ?? { input_tokens: 0, output_tokens: 0, cache_creation_input_tokens: 0, cache_read_input_tokens: 0 };
}
function f(e, t) {
    return {
        input_tokens: e.input_tokens + t.input_tokens,
        output_tokens: e.output_tokens + t.output_tokens,
        cache_creation_input_tokens: e.cache_creation_input_tokens + t.cache_creation_input_tokens,
        cache_read_input_tokens: e.cache_read_input_tokens + t.cache_read_input_tokens,
    };
}
let I = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]),
    p = 10,
    T = 36e5;
function m(e) {
    return I.has(e) ? 5242880 : 0x3200000;
}
function g(e, t) {
    return e <= m(t);
}
function S(e) {
    return `${Math.round(e / 1048576)} MB`;
}
let N = ["simple", "balanced", "complex"],
    C = [
        { id: "claude-fable-5-1", label: "Claude Fable 5.1", provider: "anthropic" },
        { id: "claude-opus-5-5", label: "Claude Opus 5.5", provider: "anthropic" },
        { id: "claude-sonnet-5-5", label: "Claude Sonnet 5.5", provider: "anthropic" },
        { id: "claude-haiku-4-5", label: "Claude Haiku 4.5", provider: "anthropic" },
        { id: "gpt-6-astra", label: "GPT-6 Astra", provider: "openai", supports_fast: !0 },
        { id: "gpt-6.1-sol", label: "GPT-6.1 Sol", provider: "openai", supports_fast: !0 },
        { id: "gpt-6-luna", label: "GPT-6 Luna", provider: "openai", supports_fast: !0 },
        { id: "xai/grok-4.7", label: "Grok 4.7", provider: "xai" },
    ],
    O = { main: C, subagent: C, thinking: ["low", "medium", "high", "xhigh", "max"] },
    R = [
        { id: "deepseek/deepseek-flash", label: "DeepSeek V4.1 Flash", provider: "deepseek" },
        { id: "moonshotai/kimi-k3", label: "Kimi K3", provider: "moonshotai" },
    ],
    L = { main: R, subagent: R, thinking: O.thinking },
    y = { tier: "balanced", provider: "openai" },
    D = {
        simple: { model: "gpt-6-luna", thinking: "high" },
        balanced: { model: "claude-sonnet-5-5", thinking: "high" },
        complex: { model: "claude-opus-5-5", thinking: "high" },
    };
