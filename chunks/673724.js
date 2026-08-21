i.d(t, {
    A2: () => r,
    CA: () => c,
    Hz: () => n,
    IU: () => o,
    Is: () => s,
    S8: () => R,
    Wb: () => d,
    XE: () => a,
    ZJ: () => A,
    a7: () => l,
    aM: () => u,
    hk: () => T,
    sj: () => _,
    wF: () => S,
    wV: () => p,
    x5: () => h,
    yr: () => E,
}),
    i(938796);
let n = "Untitled App",
    r = Object.freeze({ PUBLIC: 1, SHAREABLE: 2 });
function a(e) {
    return ((e.flags ?? 0) & r.PUBLIC) != 0;
}
function o(e) {
    return null != e.flags;
}
function l(e) {
    return Math.floor(100 * e);
}
function u(e) {
    return e.input_tokens + e.output_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function _(e) {
    return e.input_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function c(e) {
    let t = _(e);
    return 0 === t ? 0 : e.cache_read_input_tokens / t;
}
function p(e, t) {
    return {
        input_tokens: e.input_tokens + t.input_tokens,
        output_tokens: e.output_tokens + t.output_tokens,
        cache_creation_input_tokens: e.cache_creation_input_tokens + t.cache_creation_input_tokens,
        cache_read_input_tokens: e.cache_read_input_tokens + t.cache_read_input_tokens,
    };
}
let d = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]),
    s = 10;
function E(e) {
    return d.has(e) ? 5242880 : 0x3200000;
}
function h(e, t) {
    return e <= E(t);
}
function A(e) {
    return `${Math.round(e / 1048576)} MB`;
}
let I = [
        { id: "claude-fable-5", label: "Claude Fable 5", provider: "anthropic" },
        { id: "claude-opus-5", label: "Claude Opus 5", provider: "anthropic" },
        { id: "claude-sonnet-5", label: "Claude Sonnet 5", provider: "anthropic" },
        { id: "claude-haiku-4-5", label: "Claude Haiku 4.5", provider: "anthropic" },
        { id: "gpt-5.6-sol", label: "GPT-5.6 Sol", provider: "openai" },
        { id: "gpt-5.6-terra", label: "GPT-5.6 Terra", provider: "openai" },
        { id: "gpt-5.6-luna", label: "GPT-5.6 Luna", provider: "openai" },
    ],
    R = { main: I, subagent: I, thinking: ["low", "medium", "high", "xhigh", "max"] },
    T = {
        main: { model: "claude-opus-5", thinking: "high" },
        subagent: { model: "claude-sonnet-5", thinking: "medium" },
    },
    f = [
        { id: "workers-ai/@cf/moonshotai/kimi-k2.6", label: "Kimi K2.6", provider: "workers-ai" },
        { id: "workers-ai/@cf/zai-org/glm-5.2", label: "GLM 5.2", provider: "workers-ai" },
        { id: "workers-ai/@cf/nvidia/nemotron-3-120b-a12b", label: "Nemotron 3 Super 120B", provider: "workers-ai" },
        { id: "moonshotai/kimi-k3", label: "Kimi K3", provider: "moonshotai" },
        { id: "xai/grok-4.6", label: "Grok 4.6", provider: "xai" },
        { id: "workers-ai/@cf/zai-org/glm-4.7-flash", label: "GLM 4.7 Flash", provider: "workers-ai" },
    ],
    S = { main: f, subagent: f, thinking: R.thinking };
