let i = n(4144),
    r = n(481558);
e.exports = (e, t, n) => {
    let s = [],
        a = null,
        o = null,
        l = e.sort((e, t) => r(e, t, n));
    for (let e of l) i(e, t, n) ? ((o = e), a || (a = e)) : (o && s.push([a, o]), (o = null), (a = null));
    a && s.push([a, null]);
    let u = [];
    for (let [e, t] of s)
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
        d = "string" == typeof t.raw ? t.raw : String(t);
    return c.length < d.length ? c : t;
};
