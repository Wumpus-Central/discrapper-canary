let r;
t.d(n, { qS: () => a });
let i = new URL(t(607921), t.b);
var o = t(102022);
async function _() {
    return r || (r = await WebAssembly.compileStreaming(fetch(i))), r;
}
async function a() {
    var e;
    return (e = await _()), (0, o.Ay)({ module_or_path: e });
}
