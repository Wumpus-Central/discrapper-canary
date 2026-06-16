"use strict";
n.d(t, { A: () => r });
var i = n(531685);
let r = {
    canUIRequestGatewaySocket: function () {
        return !0;
    },
    getState: function () {
        return i.A.isAppFocused() ? "focused" : "unfocused";
    },
    useCanUIRequestGatewaySocket: function () {
        return !0;
    },
};
