"use strict";
var n = r(954055),
    i = r(869639),
    o = r(868361),
    a = r(63996),
    s = r(278089),
    u = r(573750),
    c = r(4323),
    l = r(768260),
    f = r(589834),
    p = r(288598),
    h = r(234485),
    d = r(832368),
    g = r(692807),
    y = r(907014),
    v = r(70986),
    m = r(1214),
    _ = r(631735),
    b = o.isOptionKeyCommand,
    S = u.isBrowser("Chrome");
t.exports = function (t, e) {
    var r = e.which,
        o = t._latestEditorState;
    function u(r) {
        var n = t.props[r];
        return !!n && (n(e), !0);
    }
    switch (r) {
        case a.RETURN:
            if ((e.preventDefault(), t.props.handleReturn && c(t.props.handleReturn(e, o)))) return;
            break;
        case a.ESC:
            if ((e.preventDefault(), u("onEscape"))) return;
            break;
        case a.TAB:
            if (u("onTab")) return;
            break;
        case a.UP:
            if (u("onUpArrow")) return;
            break;
        case a.RIGHT:
            if (u("onRightArrow")) return;
            break;
        case a.DOWN:
            if (u("onDownArrow")) return;
            break;
        case a.LEFT:
            if (u("onLeftArrow")) return;
            break;
        case a.SPACE:
            S && b(e) && e.preventDefault();
    }
    var w = t.props.keyBindingFn(e);
    if (null == w || "" === w) {
        if (r === a.SPACE && S && b(e)) {
            var k = n.replaceText(o.getCurrentContent(), o.getSelection(), "\xa0");
            t.update(i.push(o, k, "insert-characters"));
        }
        return;
    }
    if ("undo" === w) return void _(e, o, t.update);
    if ((e.preventDefault(), !(t.props.handleKeyCommand && c(t.props.handleKeyCommand(w, o, e.timeStamp))))) {
        var x = (function (t, e, r) {
            switch (t) {
                case "redo":
                    return i.redo(e);
                case "delete":
                    return v(e);
                case "delete-word":
                    return p(e);
                case "backspace":
                    return y(e);
                case "backspace-word":
                    return f(e);
                case "backspace-to-start-of-line":
                    return l(e, r);
                case "split-block":
                    return h(e);
                case "transpose-characters":
                    return m(e);
                case "move-selection-to-start-of-block":
                    return g(e);
                case "move-selection-to-end-of-block":
                    return d(e);
                case "secondary-cut":
                    return s.cut(e);
                case "secondary-paste":
                    return s.paste(e);
                default:
                    return e;
            }
        })(w, o, e);
        x !== o && t.update(x);
    }
};
