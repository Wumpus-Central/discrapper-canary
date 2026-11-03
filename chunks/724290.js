let r;
t.d(n, { qg: () => l, Ts: () => b, IS: () => d });
var _ = t(882498),
    i = t(451076),
    o = t(971673);
async function a() {
    return (r || (r = await (0, _.i)()), r);
}
async function c() {
    var e;
    return ((e = await a()), (0, o.Ay)({ module_or_path: e }));
}
t(849324);
let u = !1,
    f = null;
function b() {
    return u
        ? Promise.resolve()
        : (f ??= c().then(
              () => {
                  u = !0;
              },
              (e) => {
                  throw ((f = null), e);
              },
          ));
}
function s() {
    if (u) return;
    let e = (r || (r = (0, i.J)()), r);
    if (!e)
        throw Error(
            "@discord/markdown-wasm is not initialised. Await init() once before parsing, or hand already-compiled wasm to initSync().",
        );
    ((0, o.QR)({ module: e }), (u = !0));
}
function l(e, n) {
    return (s(), (0, o.qg)(e, n));
}
function d(e, n) {
    return (s(), (0, o.IS)(e, n));
}
