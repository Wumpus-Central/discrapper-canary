r.d(t, {
    EZ: () => _,
    Gf: () => o,
});
let n = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
function a(...e) {
    let t = "",
        r = !1;
    for (let n = e.length - 1; n >= -1 && !r; n--) {
        let a = n >= 0 ? e[n] : "/";
        a && ((t = `${a}/${t}`), (r = "/" === a.charAt(0)));
    }
    return (
        (t = (function (e, t) {
            let r = 0;
            for (let t = e.length - 1; t >= 0; t--) {
                let n = e[t];
                "." === n ? e.splice(t, 1) : ".." === n ? (e.splice(t, 1), r++) : r && (e.splice(t, 1), r--);
            }
            if (t) for (; r--; ) e.unshift("..");
            return e;
        })(
            t.split("/").filter((e) => !!e),
            !r,
        ).join("/")),
        (r ? "/" : "") + t || "."
    );
}
function i(e) {
    let t = 0;
    for (; t < e.length && "" === e[t]; t++);
    let r = e.length - 1;
    for (; r >= 0 && "" === e[r]; r--);
    return t > r ? [] : e.slice(t, r - t + 1);
}
function o(e, t) {
    (e = a(e).slice(1)), (t = a(t).slice(1));
    let r = i(e.split("/")),
        n = i(t.split("/")),
        o = Math.min(r.length, n.length),
        _ = o;
    for (let e = 0; e < o; e++)
        if (r[e] !== n[e]) {
            _ = e;
            break;
        }
    let s = [];
    for (let e = _; e < r.length; e++) s.push("..");
    return (s = s.concat(n.slice(_))).join("/");
}
function _(e, t) {
    let r =
        (function (e) {
            let t = e.length > 1024 ? `<truncated>${e.slice(-1024)}` : e,
                r = n.exec(t);
            return r ? r.slice(1) : [];
        })(e)[2] || "";
    return t && r.slice(-1 * t.length) === t && (r = r.slice(0, r.length - t.length)), r;
}
