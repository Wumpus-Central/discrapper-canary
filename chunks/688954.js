(n.d(t, { h: () => r }), n(323874), n(14289), n(35956));
var i = n(649121);
async function r(e, t) {
    let { query: n, json: r, headers: s, ...a } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    function l(e) {
        let { ticket: i, baseUrl: l } = e,
            c = `${l}${t}?${new URLSearchParams({ ticket: i, ...n })}`;
        return void 0 === r
            ? fetch(c, { ...a, headers: s })
            : fetch(c, { ...a, headers: { ...s, "content-type": "application/json" }, body: JSON.stringify(r) });
    }
    let c = await l(await (0, i.BK)(e));
    return 401 !== c.status ? c : ((0, i.yn)(e), l(await (0, i.BK)(e)));
}
