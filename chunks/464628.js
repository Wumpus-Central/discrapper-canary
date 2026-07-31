d.d(t, { n: () => a });
var i = d(41851),
    e = d(528239),
    c = d(761969);
let a = async (l, t) => {
    let d = `${e.t.finishStatus}${l ? `?flowId=${l}` : ""}`;
    try {
        return { ...(await i.t.get(d, { signal: t })).data, endScreenTitle: null, endScreenText: null };
    } catch (l) {
        (0, c.n)(e.t.finishStatus, l);
    }
};
