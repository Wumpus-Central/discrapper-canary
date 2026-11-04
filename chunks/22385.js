var u = _(196765);
let i = { selectedGuildId: "0" },
    s = (0, u.v)((e) => ({
        ...i,
        setSelectedGuildId: (t) => {
            e({ selectedGuildId: t });
        },
        reset: () => {
            e(i);
        },
    }));
_.d(t, {}, { xk: s });
