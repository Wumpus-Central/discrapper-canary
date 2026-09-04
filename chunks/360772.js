let r;
t.d(n, { qS: () => u });
let i = new URL(t(424932), t.b);
var o = t(349513);
async function _() {
    return r || (r = await WebAssembly.compileStreaming(fetch(i))), r;
}
async function u() {
    var e;
    return (e = await _()), (0, o.Ay)({ module_or_path: e });
}
