n.d(t, {
    A2: () => r,
    CA: () => _,
    IU: () => l,
    Is: () => I,
    RX: () => o,
    S8: () => g,
    Wb: () => h,
    XE: () => a,
    ZJ: () => T,
    a7: () => d,
    aM: () => c,
    sj: () => u,
    sq: () => i,
    tr: () => s,
    wF: () => N,
    wU: () => E,
    wV: () => A,
    x5: () => p,
    yr: () => f,
}),
    n(938796);
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
    I = 10;
function f(e) {
    return h.has(e) ? 5242880 : 0x3200000;
}
function p(e, t) {
    return e <= f(t);
}
function T(e) {
    return `${Math.round(e / 1048576)} MB`;
}
let m = [
        { id: "claude-fable-5-1", label: "Claude Fable 5.1", provider: "anthropic" },
        { id: "claude-opus-5", label: "Claude Opus 5", provider: "anthropic" },
        { id: "claude-sonnet-5", label: "Claude Sonnet 5", provider: "anthropic" },
        { id: "claude-haiku-4-5", label: "Claude Haiku 4.5", provider: "anthropic" },
        { id: "gpt-5.6-sol", label: "GPT-5.6 Sol", provider: "openai" },
        { id: "gpt-5.6-terra", label: "GPT-5.6 Terra", provider: "openai" },
        { id: "gpt-5.6-luna", label: "GPT-5.6 Luna", provider: "openai" },
    ],
    g = { main: m, subagent: m, thinking: ["low", "medium", "high", "xhigh", "max"] },
    S = [
        { id: "workers-ai/@cf/moonshotai/kimi-k2.6", label: "Kimi K2.6", provider: "workers-ai" },
        { id: "workers-ai/@cf/zai-org/glm-5.2", label: "GLM 5.2", provider: "workers-ai" },
        { id: "workers-ai/@cf/nvidia/nemotron-3-120b-a12b", label: "Nemotron 3 Super 120B", provider: "workers-ai" },
        { id: "moonshotai/kimi-k3", label: "Kimi K3", provider: "moonshotai" },
        { id: "xai/grok-4.6", label: "Grok 4.6", provider: "xai" },
        { id: "workers-ai/@cf/zai-org/glm-4.7-flash", label: "GLM 4.7 Flash", provider: "workers-ai" },
    ],
    N = { main: S, subagent: S, thinking: g.thinking };
