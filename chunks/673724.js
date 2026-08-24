"use strict";
n.d(t, {
    A2: () => r,
    CA: () => c,
    Hz: () => i,
    IU: () => s,
    Is: () => A,
    S8: () => T,
    Wb: () => E,
    XE: () => a,
    ZJ: () => f,
    a7: () => l,
    aM: () => o,
    hk: () => m,
    sj: () => d,
    wF: () => S,
    wU: () => u,
    wV: () => _,
    x5: () => I,
    yr: () => h,
}),
    n(938796);
let i = "Untitled App",
    r = Object.freeze({ PUBLIC: 1, SHAREABLE: 2 });
function a(e) {
    return ((e.flags ?? 0) & r.PUBLIC) != 0;
}
function s(e) {
    return null != e.flags;
}
function l(e) {
    return Math.floor(100 * e);
}
function o(e) {
    return e.input_tokens + e.output_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function d(e) {
    return e.input_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function c(e) {
    let t = d(e);
    return 0 === t ? 0 : e.cache_read_input_tokens / t;
}
function u(e) {
    return e ?? { input_tokens: 0, output_tokens: 0, cache_creation_input_tokens: 0, cache_read_input_tokens: 0 };
}
function _(e, t) {
    return {
        input_tokens: e.input_tokens + t.input_tokens,
        output_tokens: e.output_tokens + t.output_tokens,
        cache_creation_input_tokens: e.cache_creation_input_tokens + t.cache_creation_input_tokens,
        cache_read_input_tokens: e.cache_read_input_tokens + t.cache_read_input_tokens,
    };
}
let E = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]),
    A = 10;
function h(e) {
    return E.has(e) ? 5242880 : 0x3200000;
}
function I(e, t) {
    return e <= h(t);
}
function f(e) {
    return `${Math.round(e / 1048576)} MB`;
}
let p = [
        { id: "claude-fable-5", label: "Claude Fable 5", provider: "anthropic" },
        { id: "claude-opus-5", label: "Claude Opus 5", provider: "anthropic" },
        { id: "claude-sonnet-5", label: "Claude Sonnet 5", provider: "anthropic" },
        { id: "claude-haiku-4-5", label: "Claude Haiku 4.5", provider: "anthropic" },
        { id: "gpt-5.6-sol", label: "GPT-5.6 Sol", provider: "openai" },
        { id: "gpt-5.6-terra", label: "GPT-5.6 Terra", provider: "openai" },
        { id: "gpt-5.6-luna", label: "GPT-5.6 Luna", provider: "openai" },
    ],
    T = { main: p, subagent: p, thinking: ["low", "medium", "high", "xhigh", "max"] },
    m = {
        main: { model: "claude-opus-5", thinking: "high" },
        subagent: { model: "claude-sonnet-5", thinking: "medium" },
    },
    g = [
        { id: "workers-ai/@cf/moonshotai/kimi-k2.6", label: "Kimi K2.6", provider: "workers-ai" },
        { id: "workers-ai/@cf/zai-org/glm-5.2", label: "GLM 5.2", provider: "workers-ai" },
        { id: "workers-ai/@cf/nvidia/nemotron-3-120b-a12b", label: "Nemotron 3 Super 120B", provider: "workers-ai" },
        { id: "moonshotai/kimi-k3", label: "Kimi K3", provider: "moonshotai" },
        { id: "xai/grok-4.6", label: "Grok 4.6", provider: "xai" },
        { id: "workers-ai/@cf/zai-org/glm-4.7-flash", label: "GLM 4.7 Flash", provider: "workers-ai" },
    ],
    S = { main: g, subagent: g, thinking: T.thinking };
