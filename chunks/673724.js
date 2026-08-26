n.d(t, {
    A2: () => r,
    CA: () => d,
    Hz: () => i,
    IU: () => l,
    Is: () => I,
    S8: () => g,
    Wb: () => E,
    XE: () => o,
    ZJ: () => f,
    a7: () => u,
    aM: () => c,
    hk: () => O,
    sj: () => _,
    tr: () => a,
    wF: () => w,
    wU: () => s,
    wV: () => p,
    x5: () => R,
    yr: () => T,
}),
    n(938796);
let i = "Untitled App",
    r = Object.freeze({ PUBLIC: 1, SHAREABLE: 2 });
function o(e) {
    return ((e.flags ?? 0) & r.PUBLIC) != 0;
}
function a(e) {
    return ((e.flags ?? 0) & r.SHAREABLE) != 0;
}
function l(e) {
    return null != e.flags;
}
function u(e) {
    return Math.floor(100 * e);
}
function c(e) {
    return e.input_tokens + e.output_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function _(e) {
    return e.input_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function d(e) {
    let t = _(e);
    return 0 === t ? 0 : e.cache_read_input_tokens / t;
}
function s(e) {
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
let E = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]),
    h = 221552 == n.j ? 5242880 : null,
    A = 221552 == n.j ? 0x3200000 : null,
    I = 10;
function T(e) {
    return E.has(e) ? h : A;
}
function R(e, t) {
    return e <= T(t);
}
function f(e) {
    return `${Math.round(e / 1048576)} MB`;
}
let S = [
        { id: "claude-fable-5", label: "Claude Fable 5", provider: "anthropic" },
        { id: "claude-opus-5", label: "Claude Opus 5", provider: "anthropic" },
        { id: "claude-sonnet-5", label: "Claude Sonnet 5", provider: "anthropic" },
        { id: "claude-haiku-4-5", label: "Claude Haiku 4.5", provider: "anthropic" },
        { id: "gpt-5.6-sol", label: "GPT-5.6 Sol", provider: "openai" },
        { id: "gpt-5.6-terra", label: "GPT-5.6 Terra", provider: "openai" },
        { id: "gpt-5.6-luna", label: "GPT-5.6 Luna", provider: "openai" },
    ],
    g = { main: S, subagent: S, thinking: ["low", "medium", "high", "xhigh", "max"] },
    O =
        221552 == n.j
            ? {
                  main: { model: "claude-opus-5", thinking: "high" },
                  subagent: { model: "claude-sonnet-5", thinking: "medium" },
              }
            : null,
    C = [
        { id: "workers-ai/@cf/moonshotai/kimi-k2.6", label: "Kimi K2.6", provider: "workers-ai" },
        { id: "workers-ai/@cf/zai-org/glm-5.2", label: "GLM 5.2", provider: "workers-ai" },
        { id: "workers-ai/@cf/nvidia/nemotron-3-120b-a12b", label: "Nemotron 3 Super 120B", provider: "workers-ai" },
        { id: "moonshotai/kimi-k3", label: "Kimi K3", provider: "moonshotai" },
        { id: "xai/grok-4.6", label: "Grok 4.6", provider: "xai" },
        { id: "workers-ai/@cf/zai-org/glm-4.7-flash", label: "GLM 4.7 Flash", provider: "workers-ai" },
    ],
    w = { main: C, subagent: C, thinking: g.thinking };
