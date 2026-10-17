(n.d(t, { h: () => a }), n(323874), n(14289), n(35956));
var r = n(649121);
async function a(e, t) {
    let { query: n, json: a, headers: o, ...i } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    function l(e) {
        let { ticket: r, baseUrl: l } = e,
            c = `${l}${t}?${new URLSearchParams({ ticket: r, ...n })}`;
        return void 0 === a
            ? fetch(c, { ...i, headers: o })
            : fetch(c, { ...i, headers: { ...o, "content-type": "application/json" }, body: JSON.stringify(a) });
    }
    let c = await l(await (0, r.BK)(e));
    return 401 !== c.status ? c : ((0, r.yn)(e), l(await (0, r.BK)(e)));
}
