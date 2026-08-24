"use strict";
n.d(t, {
    A2: () => r,
    CA: () => u,
    Hz: () => i,
    IU: () => l,
    Is: () => h,
    S8: () => m,
    Wb: () => A,
    XE: () => a,
    ZJ: () => p,
    a7: () => o,
    aM: () => d,
    hk: () => g,
    sj: () => c,
    tr: () => s,
    wF: () => N,
    wU: () => _,
    wV: () => E,
    x5: () => f,
    yr: () => I,
}),
    n(938796);
let i = "Untitled App",
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
    return Math.floor(100 * e);
}
function d(e) {
    return e.input_tokens + e.output_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function c(e) {
    return e.input_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function u(e) {
    let t = c(e);
    return 0 === t ? 0 : e.cache_read_input_tokens / t;
}
function _(e) {
    return e ?? { input_tokens: 0, output_tokens: 0, cache_creation_input_tokens: 0, cache_read_input_tokens: 0 };
}
function E(e, t) {
    return {
        input_tokens: e.input_tokens + t.input_tokens,
        output_tokens: e.output_tokens + t.output_tokens,
        cache_creation_input_tokens: e.cache_creation_input_tokens + t.cache_creation_input_tokens,
        cache_read_input_tokens: e.cache_read_input_tokens + t.cache_read_input_tokens,
    };
}
let A = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]),
    h = 10;
function I(e) {
    return A.has(e) ? 5242880 : 0x3200000;
}
function f(e, t) {
    return e <= I(t);
}
function p(e) {
    return `${Math.round(e / 1048576)} MB`;
}
let T = [
        { id: "claude-fable-5", label: "Claude Fable 5", provider: "anthropic" },
        { id: "claude-opus-5", label: "Claude Opus 5", provider: "anthropic" },
        { id: "claude-sonnet-5", label: "Claude Sonnet 5", provider: "anthropic" },
        { id: "claude-haiku-4-5", label: "Claude Haiku 4.5", provider: "anthropic" },
        { id: "gpt-5.6-sol", label: "GPT-5.6 Sol", provider: "openai" },
        { id: "gpt-5.6-terra", label: "GPT-5.6 Terra", provider: "openai" },
        { id: "gpt-5.6-luna", label: "GPT-5.6 Luna", provider: "openai" },
    ],
    m = { main: T, subagent: T, thinking: ["low", "medium", "high", "xhigh", "max"] },
    g = {
        main: { model: "claude-opus-5", thinking: "high" },
        subagent: { model: "claude-sonnet-5", thinking: "medium" },
    },
    S = [
        { id: "workers-ai/@cf/moonshotai/kimi-k2.6", label: "Kimi K2.6", provider: "workers-ai" },
        { id: "workers-ai/@cf/zai-org/glm-5.2", label: "GLM 5.2", provider: "workers-ai" },
        { id: "workers-ai/@cf/nvidia/nemotron-3-120b-a12b", label: "Nemotron 3 Super 120B", provider: "workers-ai" },
        { id: "moonshotai/kimi-k3", label: "Kimi K3", provider: "moonshotai" },
        { id: "xai/grok-4.6", label: "Grok 4.6", provider: "xai" },
        { id: "workers-ai/@cf/zai-org/glm-4.7-flash", label: "GLM 4.7 Flash", provider: "workers-ai" },
    ],
    N = { main: S, subagent: S, thinking: m.thinking };
