"use strict";
t.exports = e(486816)(function () {
    if ("function" == typeof ArrayBuffer) {
        var t = new ArrayBuffer(8);
        Object.isExtensible(t) && Object.defineProperty(t, "a", { value: 8 });
    }
});
