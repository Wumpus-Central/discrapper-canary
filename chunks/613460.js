"use strict";
e.exports = function (e, t, n) {
    return (
        n || (n = this.getReverseMap()[e] ? "keydown" : "keypress"), "keypress" === n && t.length && (n = "keydown"), n
    );
};
