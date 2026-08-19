"use strict";
e.exports = function (e, t, r) {
    return (
        r || (r = this.getReverseMap()[e] ? "keydown" : "keypress"), "keypress" === r && t.length && (r = "keydown"), r
    );
};
