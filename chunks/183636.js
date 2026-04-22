"use strict";
n.d(t, { A: () => i });
var r = n(531685);
let i = {
    canUIRequestGatewaySocket: function () {
        return !0;
    },
    getState: function () {
        return r.A.isAppFocused() ? "focused" : "unfocused";
    },
    useCanUIRequestGatewaySocket: function () {
        return !0;
    },
};
