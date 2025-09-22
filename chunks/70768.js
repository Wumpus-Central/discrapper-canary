n.d(t, { E: () => a });
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
function a(e) {
    return e.matches(i);
}
r.push('[tabindex]:not([tabindex="-1"]):not([disabled])'), r.join(':not([hidden]):not([tabindex="-1"]),');
