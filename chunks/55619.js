n.d(t, {
    A: () => i,
}),
    n(896048);
var r = n(73153);
let i = {
    setEnabled(e) {
        this.update({
            enabled: e,
        });
    },
    update(e) {
        for (let t of Object.keys(e))
            r.h.dispatch({
                type: "STREAMER_MODE_UPDATE",
                key: t,
                value: e[t],
            });
    },
};
