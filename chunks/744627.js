l.d(t, { b: () => o, c: () => u });
var n = l(712808),
    a = l(395592),
    r = l(261425),
    i = l(660183);
let s = { ok: !1, code: "failed", message: "" };
async function o(e, t) {
    return (await (0, a.x)(e, () => t().catch(() => s))) ?? s;
}
function u(e, t) {
    return o(e, () => (0, n.$D)(e, t.id)).then((e) =>
        e.ok ? null : i.intl.string("unconfirmed" === e.code ? r.default.iqN7YA : r.default.Npmmnp),
    );
}
