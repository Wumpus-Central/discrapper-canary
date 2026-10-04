i.d(t, { Q7: () => u, bF: () => o, hW: () => h, oU: () => r });
var n = i(248675),
    a = i(375708);
function o(e) {
    switch (e) {
        case "simple":
            return n.default["/tlOR5"];
        case "balanced":
            return n.default.wNhuGQ;
        case "complex":
            return n.default.FxoUwB;
        default:
            return null;
    }
}
function u(e, t) {
    let i = o(t);
    return null != i ? { title: e, body: a.intl.string(i) } : { body: e };
}
let h = { low: "Low", medium: "Medium", high: "High", xhigh: "Extra high", max: "Max" },
    r = { anthropic: "Anthropic", openai: "OpenAI", deepseek: "DeepSeek", xai: "xAI", moonshotai: "Moonshot AI" };
