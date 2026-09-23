n.d(t, { Q7: () => i, bF: () => s, hW: () => r, oU: () => u });
var l = n(50617),
    a = n(375708);
function s(e) {
    switch (e) {
        case "simple":
            return l.default["5DOL2g"];
        case "balanced":
            return l.default["5I6PKl"];
        case "complex":
            return l.default.OJIfkn;
        default:
            return null;
    }
}
function i(e, t) {
    let n = s(t);
    return null != n ? { title: e, body: a.intl.string(n) } : { body: e };
}
let r = { low: "Low", medium: "Medium", high: "High", xhigh: "Extra high", max: "Max" },
    u = { anthropic: "Anthropic", openai: "OpenAI", deepseek: "DeepSeek", xai: "xAI", moonshotai: "Moonshot AI" };
