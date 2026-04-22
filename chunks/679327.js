"use strict";
e.exports = function () {
    this.instances.forEach(function (e) {
        e.reset();
    });
};
