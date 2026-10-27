(n.d(t, { h: () => i }), n(323874), n(14289), n(35956));
var r = n(649121);
async function i(e, t) {
    let { query: n, json: i, headers: s, ...l } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    function a(e) {
        let { ticket: r, baseUrl: a } = e,
            u = `${a}${t}?${new URLSearchParams({ ticket: r, ...n })}`;
        return void 0 === i
            ? fetch(u, { ...l, headers: s })
            : fetch(u, { ...l, headers: { ...s, "content-type": "application/json" }, body: JSON.stringify(i) });
    }
    let u = await a(await (0, r.BK)(e));
    return 401 !== u.status ? u : ((0, r.yn)(e), a(await (0, r.BK)(e)));
}
