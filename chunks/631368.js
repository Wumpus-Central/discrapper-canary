var C,
    r = e(721157),
    a = e(555393),
    E = e(325499),
    I =
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
            let t = (0, E.b)("userSettings.connections"),
                A = (0, a.N)();
            return t && null != A ? (A.state === r.zE.CAN_CLAIM ? 2 : A.state === r.zE.BLOCK_CLAIM ? 3 : 1) : 0;
        },
        C: I,
    },
);
