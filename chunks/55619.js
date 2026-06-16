p.d(t, { A: () => a });
var s = p(228366);
let a = {
    setEnabled(e) {
        this.update({ enabled: e });
    },
    update(e) {
        for (let t of Object.keys(e)) s.h.dispatch({ type: "STREAMER_MODE_UPDATE", key: t, value: e[t] });
    },
};
