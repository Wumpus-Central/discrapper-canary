n.d(t, {
    E: () => o,
    W: () => s,
});
let r = [
        "input:not([disabled]):not([type=hidden])",
        "select:not([disabled])",
        "textarea:not([disabled])",
        "button:not([disabled])",
        "a[href]",
        "area[href]",
        "summary",
        "iframe",
        "object",
        "embed",
        "audio[controls]",
        "video[controls]",
        '[contenteditable]:not([contenteditable^="false"])',
    ],
    i = r.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
r.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
let a = r.join(':not([hidden]):not([tabindex="-1"]),');
function o(e) {
    return e.matches(i);
}
function s(e) {
    return e.matches(a);
}
