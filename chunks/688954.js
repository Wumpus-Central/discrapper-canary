(n.d(t, { h: () => i }), n(323874), n(14289), n(35956));
var r = n(382541);
async function i(e, t) {
    let { query: n, json: i, headers: a, ...o } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: c, baseUrl: l } = await (0, r.d)(e),
        s = `${l}${t}?${new URLSearchParams({ ticket: c, ...n })}`;
    return void 0 === i
        ? fetch(s, { ...o, headers: a })
        : fetch(s, { ...o, headers: { ...a, "content-type": "application/json" }, body: JSON.stringify(i) });
}
