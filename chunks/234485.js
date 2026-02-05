"use strict";
var n = r(954055),
    i = r(869639);
t.exports = function (t) {
    var e = n.splitBlock(t.getCurrentContent(), t.getSelection());
    return i.push(t, e, "split-block");
};
