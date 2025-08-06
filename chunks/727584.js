var r = n(574369);
e.exports = function (e) {
    return (
        e.which === r.RETURN &&
        (e.getModifierState("Shift") || e.getModifierState("Alt") || e.getModifierState("Control"))
    );
};
