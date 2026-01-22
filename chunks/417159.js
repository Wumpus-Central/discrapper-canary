function r(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
}
var i = n(64700),
    a = n(550835);
e.exports = (function (e) {
    function t() {
        return e.apply(this, arguments) || this;
    }
    r(t, e);
    var n = t.prototype;
    return (
        (n.shouldComponentUpdate = function (e) {
            return (
                this.props.text !== e.text ||
                this.props.editorState.getSelection().getHasFocus() !== e.editorState.getSelection().getHasFocus()
            );
        }),
        (n.render = function () {
            var e = a({
                    "public/DraftEditorPlaceholder/root": !0,
                    "public/DraftEditorPlaceholder/hasFocus": this.props.editorState.getSelection().getHasFocus(),
                }),
                t = { whiteSpace: "pre-wrap" };
            return i.createElement(
                "div",
                { className: e },
                i.createElement(
                    "div",
                    {
                        className: a("public/DraftEditorPlaceholder/inner"),
                        id: this.props.accessibilityID,
                        style: t,
                    },
                    this.props.text,
                ),
            );
        }),
        t
    );
})(i.Component);
