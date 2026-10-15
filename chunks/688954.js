(n.d(t, { h: () => o }), n(323874), n(14289), n(35956));
var r = n(382541);
async function o(e, t) {
    let { query: n, json: o, headers: a, ...i } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: c, baseUrl: l } = await (0, r.d)(e),
        s = `${l}${t}?${new URLSearchParams({ ticket: c, ...n })}`;
    return void 0 === o
        ? fetch(s, { ...i, headers: a })
        : fetch(s, { ...i, headers: { ...a, "content-type": "application/json" }, body: JSON.stringify(o) });
}
