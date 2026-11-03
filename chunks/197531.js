t.d(n, { DW: () => i, ID: () => s, NA: () => u });
var l = t(582128),
    r = t(465632),
    a = t(307731);
let u = l.createContext(!1);
function i() {
    return l.useContext(u);
}
function s(e) {
    let n = 0;
    for (let t of (0, r.tJ)(e))
        switch (t.type) {
            case "emoji":
                n += 1;
                break;
            case "paragraph":
            case "empty":
                break;
            case "text":
                if ("" !== t.value.trim()) return !1;
                break;
            default:
                return !1;
        }
    return n <= a.MAX_EMOJI_TO_BE_JUMBO;
}
