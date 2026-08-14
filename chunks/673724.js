n.d(t, {
    CA: () => s,
    Hz: () => l,
    S8: () => d,
    Wb: () => c,
    a7: () => a,
    aM: () => r,
    hk: () => u,
    sj: () => i,
    wF: () => m,
    wV: () => o,
});
let l = "Untitled App";
function a(e) {
    return Math.floor(100 * e);
}
function r(e) {
    return e.input_tokens + e.output_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function i(e) {
    return e.input_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function s(e) {
    let t = i(e);
    return 0 === t ? 0 : e.cache_read_input_tokens / t;
}
function o(e, t) {
    return {
        input_tokens: e.input_tokens + t.input_tokens,
        output_tokens: e.output_tokens + t.output_tokens,
        cache_creation_input_tokens: e.cache_creation_input_tokens + t.cache_creation_input_tokens,
        cache_read_input_tokens: e.cache_read_input_tokens + t.cache_read_input_tokens,
    };
}
let c = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]),
    d = {
        main: [
            { id: "claude-fable-5", label: "Claude Fable 5", provider: "anthropic" },
            { id: "claude-opus-5", label: "Claude Opus 5", provider: "anthropic" },
            { id: "claude-sonnet-5", label: "Claude Sonnet 5", provider: "anthropic" },
            { id: "gpt-5.6-sol", label: "GPT-5.6 Sol", provider: "openai" },
            { id: "gpt-5.6-terra", label: "GPT-5.6 Terra", provider: "openai" },
        ],
        subagent: [
            { id: "claude-opus-5", label: "Claude Opus 5", provider: "anthropic" },
            { id: "claude-sonnet-5", label: "Claude Sonnet 5", provider: "anthropic" },
            { id: "claude-haiku-4-5", label: "Claude Haiku 4.5", provider: "anthropic" },
            { id: "gpt-5.6-sol", label: "GPT-5.6 Sol", provider: "openai" },
            { id: "gpt-5.6-terra", label: "GPT-5.6 Terra", provider: "openai" },
            { id: "gpt-5.6-luna", label: "GPT-5.6 Luna", provider: "openai" },
        ],
        thinking: ["low", "medium", "high", "xhigh", "max"],
    },
    u = {
        main: { model: "claude-opus-5", thinking: "high" },
        subagent: { model: "claude-sonnet-5", thinking: "medium" },
    },
    m = {
        main: [
            { id: "workers-ai/@cf/moonshotai/kimi-k2.6", label: "Kimi K2.6", provider: "workers-ai" },
            { id: "workers-ai/@cf/zai-org/glm-5.2", label: "GLM 5.2", provider: "workers-ai" },
            {
                id: "workers-ai/@cf/nvidia/nemotron-3-120b-a12b",
                label: "Nemotron 3 Super 120B",
                provider: "workers-ai",
            },
            { id: "moonshotai/kimi-k3", label: "Kimi K3", provider: "moonshotai" },
            { id: "xai/grok-4.6", label: "Grok 4.6", provider: "xai" },
        ],
        subagent: [
            { id: "workers-ai/@cf/moonshotai/kimi-k2.6", label: "Kimi K2.6", provider: "workers-ai" },
            { id: "workers-ai/@cf/zai-org/glm-5.2", label: "GLM 5.2", provider: "workers-ai" },
            {
                id: "workers-ai/@cf/nvidia/nemotron-3-120b-a12b",
                label: "Nemotron 3 Super 120B",
                provider: "workers-ai",
            },
            { id: "moonshotai/kimi-k3", label: "Kimi K3", provider: "moonshotai" },
            { id: "xai/grok-4.6", label: "Grok 4.6", provider: "xai" },
            { id: "workers-ai/@cf/zai-org/glm-4.7-flash", label: "GLM 4.7 Flash", provider: "workers-ai" },
        ],
        thinking: d.thinking,
    };
