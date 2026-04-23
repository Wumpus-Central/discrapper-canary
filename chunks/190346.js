"use strict";
var n = r(387739),
    i = r(116740).List;
t.exports = function (t, e) {
    return i(
        t.map(function (t, r) {
            var i = e[r];
            return n.create({ style: t, entity: i });
        }),
    );
};
