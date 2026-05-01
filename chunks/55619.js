l.d(t, { A: () => i });
var n = l(228366);
let i = {
    setEnabled(e) {
        this.update({ enabled: e });
    },
    update(e) {
        for (let t of Object.keys(e)) n.h.dispatch({ type: "STREAMER_MODE_UPDATE", key: t, value: e[t] });
    },
};
