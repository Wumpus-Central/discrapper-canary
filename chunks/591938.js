let r;
t.d(n, { qS: () => a });
let i = new URL(t(140006), t.b);
var o = t(841167);
async function _() {
    return r || (r = await WebAssembly.compileStreaming(fetch(i))), r;
}
async function a() {
    var e;
    return (e = await _()), (0, o.Ay)({ module_or_path: e });
}
