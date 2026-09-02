A.d(e, { $: () => a, C: () => _ });
var C,
    E = A(721157),
    r = A(815987),
    I = A(325499),
    _ =
        (((C = {})[(C.NONE = 0)] = "NONE"),
        (C[(C.NO_ACCESS = 1)] = "NO_ACCESS"),
        (C[(C.HAS_ACCESS = 2)] = "HAS_ACCESS"),
        (C[(C.BLOCK_CLAIM = 3)] = "BLOCK_CLAIM"),
        C);
function a() {
    let t = (0, I.b)("userSettings.connections"),
        e = (0, r.N)();
    return t && null != e ? (e.state === E.zE.CAN_CLAIM ? 2 : e.state === E.zE.BLOCK_CLAIM ? 3 : 1) : 0;
}
