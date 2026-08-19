i.d(e, { YG: () => r, xk: () => l });
var n = i(196765);
let r = "0",
    s = { selectedGuildId: r },
    l = (0, n.v)((t) => ({
        ...s,
        setSelectedGuildId: (e) => {
            t({ selectedGuildId: e });
        },
        reset: () => {
            t(s);
        },
    }));
