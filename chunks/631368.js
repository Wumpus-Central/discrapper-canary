var C,
    E = e(721157),
    r = e(555393),
    I = e(325499),
    _ =
        (((C = {})[(C.NONE = 0)] = "NONE"),
        (C[(C.NO_ACCESS = 1)] = "NO_ACCESS"),
        (C[(C.HAS_ACCESS = 2)] = "HAS_ACCESS"),
        (C[(C.BLOCK_CLAIM = 3)] = "BLOCK_CLAIM"),
        C);
e.d(
    A,
    {},
    {
        $: function () {
            let t = (0, I.b)("userSettings.connections"),
                A = (0, r.N)();
            return t && null != A ? (A.state === E.zE.CAN_CLAIM ? 2 : A.state === E.zE.BLOCK_CLAIM ? 3 : 1) : 0;
        },
        C: _,
    },
);
