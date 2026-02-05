"use strict";
var n = r(63996);
t.exports = function (t) {
    return (
        t.which === n.RETURN &&
        (t.getModifierState("Shift") || t.getModifierState("Alt") || t.getModifierState("Control"))
    );
};
