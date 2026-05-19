i.d(t, { YG: () => r, xk: () => d });
var l = i(353640);
let r = "0",
    s = { selectedGuildId: r },
    d = (0, l.v)((e) => ({
        ...s,
        setSelectedGuildId: (t) => {
            e({ selectedGuildId: t });
        },
        reset: () => {
            e(s);
        },
    }));
