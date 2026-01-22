function r(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
}
e.exports = (function (e) {
    function t() {
        return e.apply(this, arguments) || this;
    }
    r(t, e);
    var n = t.prototype;
    return (
        (n.serialize = function () {
            return (
                "Anchor: " +
                this.getAnchorKey() +
                ":" +
                this.getAnchorOffset() +
                ", Focus: " +
                this.getFocusKey() +
                ":" +
                this.getFocusOffset() +
                ", Is Backward: " +
                String(this.getIsBackward()) +
                ", Has Focus: " +
                String(this.getHasFocus())
            );
        }),
        (n.getAnchorKey = function () {
            return this.get("anchorKey");
        }),
        (n.getAnchorOffset = function () {
            return this.get("anchorOffset");
        }),
        (n.getFocusKey = function () {
            return this.get("focusKey");
        }),
        (n.getFocusOffset = function () {
            return this.get("focusOffset");
        }),
        (n.getIsBackward = function () {
            return this.get("isBackward");
        }),
        (n.getHasFocus = function () {
            return this.get("hasFocus");
        }),
        (n.hasEdgeWithin = function (e, t, n) {
            var r = this.getAnchorKey(),
                i = this.getFocusKey();
            if (r === i && r === e) {
                var a = this.getStartOffset(),
                    s = this.getEndOffset();
                return (t <= a && a <= n) || (t <= s && s <= n);
            }
            if (e !== r && e !== i) return !1;
            var o = e === r ? this.getAnchorOffset() : this.getFocusOffset();
            return t <= o && n >= o;
        }),
        (n.isCollapsed = function () {
            return this.getAnchorKey() === this.getFocusKey() && this.getAnchorOffset() === this.getFocusOffset();
        }),
        (n.getStartKey = function () {
            return this.getIsBackward() ? this.getFocusKey() : this.getAnchorKey();
        }),
        (n.getStartOffset = function () {
            return this.getIsBackward() ? this.getFocusOffset() : this.getAnchorOffset();
        }),
        (n.getEndKey = function () {
            return this.getIsBackward() ? this.getAnchorKey() : this.getFocusKey();
        }),
        (n.getEndOffset = function () {
            return this.getIsBackward() ? this.getAnchorOffset() : this.getFocusOffset();
        }),
        (t.createEmpty = function (e) {
            return new t({
                anchorKey: e,
                anchorOffset: 0,
                focusKey: e,
                focusOffset: 0,
                isBackward: !1,
                hasFocus: !1,
            });
        }),
        t
    );
})(
    (0, n(116740).Record)({
        anchorKey: "",
        anchorOffset: 0,
        focusKey: "",
        focusOffset: 0,
        isBackward: !1,
        hasFocus: !1,
    }),
);
