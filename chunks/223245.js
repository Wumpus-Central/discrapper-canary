n.d(t, { Z: () => i }), n(47120);
var r = n(570140);
let i = {
    setEnabled(e) {
        this.update({ enabled: e });
    },
    update(e) {
        for (let t of Object.keys(e))
            r.Z.dispatch({
                type: 'STREAMER_MODE_UPDATE',
                key: t,
                value: e[t]
            });
    }
};
