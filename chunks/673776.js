var n = r(868361),
    o = r(63996),
    a = r(573750),
    c = a.isPlatform("Mac OS X"),
    s = c && a.isBrowser("Firefox < 29"),
    u = n.hasCommandModifier,
    l = n.isCtrlKeyCommand;
function f(e) {
    return (c && e.altKey) || l(e);
}
e.exports = function (e) {
    switch (e.keyCode) {
        case 66:
            return u(e) ? "bold" : null;
        case 68:
            return l(e) ? "delete" : null;
        case 72:
            return l(e) ? "backspace" : null;
        case 73:
            return u(e) ? "italic" : null;
        case 74:
            return u(e) ? "code" : null;
        case 75:
            return c && l(e) ? "secondary-cut" : null;
        case 77:
        case 79:
            return l(e) ? "split-block" : null;
        case 84:
            return c && l(e) ? "transpose-characters" : null;
        case 85:
            return u(e) ? "underline" : null;
        case 87:
            return c && l(e) ? "backspace-word" : null;
        case 89:
            if (l(e)) return c ? "secondary-paste" : "redo";
            return null;
        case 90:
            return (u(e) ? (e.shiftKey ? "redo" : "undo") : null) || null;
        case o.RETURN:
            return "split-block";
        case o.DELETE:
            return !c && e.shiftKey ? null : f(e) ? "delete-word" : "delete";
        case o.BACKSPACE:
            return u(e) && c ? "backspace-to-start-of-line" : f(e) ? "backspace-word" : "backspace";
        case o.LEFT:
            return s && u(e) ? "move-selection-to-start-of-block" : null;
        case o.RIGHT:
            return s && u(e) ? "move-selection-to-end-of-block" : null;
        default:
            return null;
    }
};
