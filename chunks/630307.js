"use strict";
var n = r(14665);
e.exports = function (e, t) {
    return (
        n(t) && "[[Enumerable]]" in t && "[[Configurable]]" in t && (e.IsAccessorDescriptor(t) || e.IsDataDescriptor(t))
    );
};
