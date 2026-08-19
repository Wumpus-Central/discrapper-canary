"use strict";
var n = {
    current: function (e) {
        return r.g.requestAnimationFrame(e);
    },
    inject: function (e) {
        n.current = e;
    },
};
e.exports = n;
