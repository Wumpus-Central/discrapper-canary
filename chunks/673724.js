(n.d(t, {
    $f: () => f,
    A2: () => r,
    CA: () => _,
    IU: () => l,
    Is: () => I,
    RX: () => o,
    S8: () => N,
    Wb: () => h,
    XE: () => a,
    ZJ: () => m,
    a7: () => d,
    aM: () => c,
    ks: () => g,
    qf: () => L,
    sj: () => u,
    sq: () => i,
    tr: () => s,
    v0: () => R,
    wF: () => O,
    wU: () => E,
    wV: () => A,
    x5: () => T,
    yr: () => p,
}),
    n(938796));
let i = 25,
    r = Object.freeze({ PUBLIC: 1, SHAREABLE: 2 });
function a(e) {
    return ((e.flags ?? 0) & r.PUBLIC) != 0;
}
function s(e) {
    return ((e.flags ?? 0) & r.SHAREABLE) != 0;
}
function l(e) {
    return null != e.flags;
}
function o(e) {
    return null != e.collaborator_role_ids;
}
function d(e) {
    return Math.floor(100 * e);
}
function c(e) {
    return e.input_tokens + e.output_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function u(e) {
    return e.input_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function _(e) {
    let t = u(e);
    return 0 === t ? 0 : e.cache_read_input_tokens / t;
}
function E(e) {
    return e ?? { input_tokens: 0, output_tokens: 0, cache_creation_input_tokens: 0, cache_read_input_tokens: 0 };
}
function A(e, t) {
    return {
        input_tokens: e.input_tokens + t.input_tokens,
        output_tokens: e.output_tokens + t.output_tokens,
        cache_creation_input_tokens: e.cache_creation_input_tokens + t.cache_creation_input_tokens,
        cache_read_input_tokens: e.cache_read_input_tokens + t.cache_read_input_tokens,
    };
}
let h = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]),
    I = 10,
    f = 36e5;
function p(e) {
    return h.has(e) ? 5242880 : 0x3200000;
}
function T(e, t) {
    return e <= p(t);
}
function m(e) {
    return `${Math.round(e / 1048576)} MB`;
}
let g = ["simple", "balanced", "complex"],
    S = [
        { id: "claude-fable-5-1", label: "Claude Fable 5.1", provider: "anthropic" },
        { id: "claude-opus-5-5", label: "Claude Opus 5.5", provider: "anthropic" },
        { id: "claude-sonnet-5", label: "Claude Sonnet 5", provider: "anthropic" },
        { id: "claude-haiku-4-5", label: "Claude Haiku 4.5", provider: "anthropic" },
        { id: "gpt-6-astra", label: "GPT-6 Astra", provider: "openai", supports_fast: !0 },
        { id: "gpt-6-sol", label: "GPT-6 Sol", provider: "openai", supports_fast: !0 },
        { id: "gpt-6-luna", label: "GPT-6 Luna", provider: "openai", supports_fast: !0 },
        { id: "xai/grok-4.7", label: "Grok 4.7", provider: "xai" },
    ],
    N = { main: S, subagent: S, thinking: ["low", "medium", "high", "xhigh", "max"] },
    C = [
        { id: "deepseek/deepseek-flash", label: "DeepSeek V4.1 Flash", provider: "deepseek" },
        { id: "moonshotai/kimi-k3", label: "Kimi K3", provider: "moonshotai" },
    ],
    O = { main: C, subagent: C, thinking: N.thinking },
    R = { tier: "balanced", provider: "openai" },
    L = {
        simple: { model: "gpt-6-luna", thinking: "high" },
        balanced: { model: "gpt-6-sol", thinking: "high" },
        complex: { model: "gpt-6-astra", thinking: "high" },
    };
