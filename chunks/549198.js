"use strict";
e.exports = function (e, t) {
    if ((" " + t.className + " ").indexOf(" combokeys ") > -1) return !1;
    var r = t.tagName.toLowerCase();
    return "input" === r || "select" === r || "textarea" === r || t.isContentEditable;
};
