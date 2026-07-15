d.d(t, { n: () => a });
var i = d(768672),
    e = d(288052),
    c = d(769308);
let a = async (l, t) => {
    let d = `${e.t.finishStatus}${l ? `?flowId=${l}` : ""}`;
    try {
        return { ...(await i.t.get(d, { signal: t })).data, endScreenTitle: null, endScreenText: null };
    } catch (l) {
        (0, c.n)(e.t.finishStatus, l);
    }
};
