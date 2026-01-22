var r = n(954055),
    i = n(869639),
    a = n(868361),
    s = n(63996),
    o = n(278089),
    l = n(573750),
    c = n(4323),
    u = n(768260),
    d = n(589834),
    f = n(288598),
    p = n(234485),
    _ = n(832368),
    h = n(692807),
    m = n(907014),
    g = n(70986),
    E = n(1214),
    b = n(631735),
    y = a.isOptionKeyCommand,
    O = l.isBrowser("Chrome");

function A(e, t, n) {
    switch (e) {
        case "redo":
            return i.redo(t);
        case "delete":
            return g(t);
        case "delete-word":
            return f(t);
        case "backspace":
            return m(t);
        case "backspace-word":
            return d(t);
        case "backspace-to-start-of-line":
            return u(t, n);
        case "split-block":
            return p(t);
        case "transpose-characters":
            return E(t);
        case "move-selection-to-start-of-block":
            return h(t);
        case "move-selection-to-end-of-block":
            return _(t);
        case "secondary-cut":
            return o.cut(t);
        case "secondary-paste":
            return o.paste(t);
        default:
            return t;
    }
}
e.exports = function (e, t) {
    var n = t.which,
        a = e._latestEditorState;

    function o(n) {
        var r = e.props[n];
        return !!r && (r(t), !0);
    }
    switch (n) {
        case s.RETURN:
            if ((t.preventDefault(), e.props.handleReturn && c(e.props.handleReturn(t, a)))) return;
            break;
        case s.ESC:
            if ((t.preventDefault(), o("onEscape"))) return;
            break;
        case s.TAB:
            if (o("onTab")) return;
            break;
        case s.UP:
            if (o("onUpArrow")) return;
            break;
        case s.RIGHT:
            if (o("onRightArrow")) return;
            break;
        case s.DOWN:
            if (o("onDownArrow")) return;
            break;
        case s.LEFT:
            if (o("onLeftArrow")) return;
            break;
        case s.SPACE:
            O && y(t) && t.preventDefault();
    }
    var l = e.props.keyBindingFn(t);
    if (null == l || "" === l) {
        if (n === s.SPACE && O && y(t)) {
            var u = r.replaceText(a.getCurrentContent(), a.getSelection(), "\xa0");
            e.update(i.push(a, u, "insert-characters"));
        }
        return;
    }
    if ("undo" === l) return void b(t, a, e.update);
    if ((t.preventDefault(), !(e.props.handleKeyCommand && c(e.props.handleKeyCommand(l, a, t.timeStamp))))) {
        var d = A(l, a, t);
        d !== a && e.update(d);
    }
};
