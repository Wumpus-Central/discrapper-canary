"use strict";
n.d(t, { A: () => r });
var i = n(228366);
let r = {
    setEnabled(e) {
        this.update({ enabled: e });
    },
    update(e) {
        for (let t of Object.keys(e)) i.h.dispatch({ type: "STREAMER_MODE_UPDATE", key: t, value: e[t] });
    },
};
