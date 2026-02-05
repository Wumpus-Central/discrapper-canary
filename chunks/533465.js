"use strict";
e.exports = function (e) {
    e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
};
