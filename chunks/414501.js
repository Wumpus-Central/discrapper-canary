"use strict";
var n = r(116740).OrderedMap;
t.exports = {
    createFromArray: function (t) {
        return n(
            t.map(function (t) {
                return [t.getKey(), t];
            }),
        );
    },
};
