n.d(e, { $: () => a, C: () => r });
var i,
    A = n(721157),
    C = n(815987),
    d = n(325499),
    r =
        (((i = {})[(i.NONE = 0)] = "NONE"),
        (i[(i.NO_ACCESS = 1)] = "NO_ACCESS"),
        (i[(i.HAS_ACCESS = 2)] = "HAS_ACCESS"),
        (i[(i.BLOCK_CLAIM = 3)] = "BLOCK_CLAIM"),
        i);
function a() {
    let t = (0, d.b)("userSettings.connections"),
        e = (0, C.N)();
    return t && null != e ? (e.state === A.zE.CAN_CLAIM ? 2 : e.state === A.zE.BLOCK_CLAIM ? 3 : 1) : 0;
}
