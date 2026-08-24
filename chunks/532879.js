let n = r(4144),
    i = r(481558);
e.exports = (e, t, r) => {
    let o = [],
        a = null,
        s = null,
        l = e.sort((e, t) => i(e, t, r));
    for (let e of l) n(e, t, r) ? ((s = e), a || (a = e)) : (s && o.push([a, s]), (s = null), (a = null));
    a && o.push([a, null]);
    let u = [];
    for (let [e, t] of o)
        e === t
            ? u.push(e)
            : t || e !== l[0]
              ? t
                  ? e === l[0]
                      ? u.push(`<=${t}`)
                      : u.push(`${e} - ${t}`)
                  : u.push(`>=${e}`)
              : u.push("*");
    let c = u.join(" || "),
        f = "string" == typeof t.raw ? t.raw : String(t);
    return c.length < f.length ? c : t;
};
