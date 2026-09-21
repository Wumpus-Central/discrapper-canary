n.d(t, { Q7: () => s, hW: () => i, oU: () => r });
var l = n(50617),
    a = n(375708);
function s(e, t) {
    let n = (function (e) {
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
    })(t);
    return null != n ? { title: e, body: a.intl.string(n) } : { body: e };
}
let i = { low: "Low", medium: "Medium", high: "High", xhigh: "Extra high", max: "Max" },
    r = {
        anthropic: "Anthropic",
        openai: "OpenAI",
        "workers-ai": "Workers AI (dev)",
        xai: "xAI (dev)",
        moonshotai: "Moonshot AI (dev)",
    };
