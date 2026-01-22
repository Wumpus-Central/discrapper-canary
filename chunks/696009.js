var r = n(63996);
e.exports = function (e) {
    return (
        e.which === r.RETURN &&
        (e.getModifierState("Shift") || e.getModifierState("Alt") || e.getModifierState("Control"))
    );
};
