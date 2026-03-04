n.d(t, { A: () => l });
var i = n(73153);
let l = {
    setEnabled(e) {
        this.update({ enabled: e });
    },
    update(e) {
        for (let t of Object.keys(e)) i.h.dispatch({ type: "STREAMER_MODE_UPDATE", key: t, value: e[t] });
    },
};
