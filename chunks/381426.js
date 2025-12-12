n.d(t, {
    EZ: () => _,
    Gf: () => o,
});
let r = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
function i(...e) {
    let t = "",
        n = !1;
    for (let r = e.length - 1; r >= -1 && !n; r--) {
        let i = r >= 0 ? e[r] : "/";
        i && ((t = `${i}/${t}`), (n = "/" === i.charAt(0)));
    }
    return (
        (t = (function (e, t) {
            let n = 0;
            for (let t = e.length - 1; t >= 0; t--) {
                let r = e[t];
                "." === r ? e.splice(t, 1) : ".." === r ? (e.splice(t, 1), n++) : n && (e.splice(t, 1), n--);
            }
            if (t) for (; n--; ) e.unshift("..");
            return e;
        })(
            t.split("/").filter((e) => !!e),
            !n,
        ).join("/")),
        (n ? "/" : "") + t || "."
    );
}
function a(e) {
    let t = 0;
    for (; t < e.length && "" === e[t]; t++);
    let n = e.length - 1;
    for (; n >= 0 && "" === e[n]; n--);
    return t > n ? [] : e.slice(t, n - t + 1);
}
function o(e, t) {
    (e = i(e).slice(1)), (t = i(t).slice(1));
    let n = a(e.split("/")),
        r = a(t.split("/")),
        o = Math.min(n.length, r.length),
        _ = o;
    for (let e = 0; e < o; e++)
        if (n[e] !== r[e]) {
            _ = e;
            break;
        }
    let s = [];
    for (let e = _; e < n.length; e++) s.push("..");
    return (s = s.concat(r.slice(_))).join("/");
}
function _(e, t) {
    let n =
        (function (e) {
            let t = e.length > 1024 ? `<truncated>${e.slice(-1024)}` : e,
                n = r.exec(t);
            return n ? n.slice(1) : [];
        })(e)[2] || "";
    return t && n.slice(-1 * t.length) === t && (n = n.slice(0, n.length - t.length)), n;
}
