function n(e, t, r = "\\s{0,5},?\\s{0,5}") {
    let s = t.replace(/\((?!\?)/g, "(?:");
    return `${e}${s}(?:${r}${s}){0,10}`;
}
function s(e) {
    let t = (e instanceof Array ? [...e] : e instanceof Map ? Array.from(e.keys()) : Object.keys(e))
        .sort((e, t) => t.length - e.length)
        .join("|")
        .replace(/\./g, "\\.");
    return `(?:${t})`;
}
r.d(t, { mb: () => n, uJ: () => s });
