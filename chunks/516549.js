"use strict";
var i = n(257943),
    r = n(503628);
e.exports =
    i &&
    r(function () {
        return 42 !== Object.defineProperty(function () {}, "prototype", { value: 42, writable: !1 }).prototype;
    });
