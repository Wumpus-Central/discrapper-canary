(n.d(t, { Z: () => r }), n(388685));
var i = n(570140);
let r = {
    setEnabled(e) {
        this.update({ enabled: e });
    },
    update(e) {
        for (let t of Object.keys(e))
            i.Z.dispatch({
                type: 'STREAMER_MODE_UPDATE',
                key: t,
                value: e[t]
            });
    }
};
