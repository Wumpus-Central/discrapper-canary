_.d(e, {
    EZ: () => E,
    Gf: () => o,
});
let a = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
function r(...t) {
    let e = "",
        _ = !1;
    for (let a = t.length - 1; a >= -1 && !_; a--) {
        let r = a >= 0 ? t[a] : "/";
        r && ((e = `${r}/${e}`), (_ = "/" === r.charAt(0)));
    }
    return (
        (e = (function (t, e) {
            let _ = 0;
            for (let e = t.length - 1; e >= 0; e--) {
                let a = t[e];
                "." === a ? t.splice(e, 1) : ".." === a ? (t.splice(e, 1), _++) : _ && (t.splice(e, 1), _--);
            }
            if (e) for (; _--; ) t.unshift("..");
            return t;
        })(
            e.split("/").filter((t) => !!t),
            !_,
        ).join("/")),
        (_ ? "/" : "") + e || "."
    );
}
function n(t) {
    let e = 0;
    for (; e < t.length && "" === t[e]; e++);
    let _ = t.length - 1;
    for (; _ >= 0 && "" === t[_]; _--);
    return e > _ ? [] : t.slice(e, _ - e + 1);
}
function o(t, e) {
    (t = r(t).slice(1)), (e = r(e).slice(1));
    let _ = n(t.split("/")),
        a = n(e.split("/")),
        o = Math.min(_.length, a.length),
        E = o;
    for (let t = 0; t < o; t++)
        if (_[t] !== a[t]) {
            E = t;
            break;
        }
    let i = [];
    for (let t = E; t < _.length; t++) i.push("..");
    return (i = i.concat(a.slice(E))).join("/");
}
function E(t, e) {
    let _ =
        (function (t) {
            let e = t.length > 1024 ? `<truncated>${t.slice(-1024)}` : t,
                _ = a.exec(e);
            return _ ? _.slice(1) : [];
        })(t)[2] || "";
    return e && _.slice(-1 * e.length) === e && (_ = _.slice(0, _.length - e.length)), _;
}
