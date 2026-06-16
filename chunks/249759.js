"use strict";
e.exports = function () {
    if ("function" != typeof Promise) throw TypeError("`Promise.allSettled` requires a global `Promise` be available.");
};
