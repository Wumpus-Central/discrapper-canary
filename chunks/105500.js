t.exports = (function (t) {
    function e() {
        return t.apply(this, arguments) || this;
    }
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
    var r = e.prototype;
    return (
        (r.serialize = function () {
            return 'Anchor: ' + this.getAnchorKey() + ':' + this.getAnchorOffset() + ', Focus: ' + this.getFocusKey() + ':' + this.getFocusOffset() + ', Is Backward: ' + String(this.getIsBackward()) + ', Has Focus: ' + String(this.getHasFocus());
        }),
        (r.getAnchorKey = function () {
            return this.get('anchorKey');
        }),
        (r.getAnchorOffset = function () {
            return this.get('anchorOffset');
        }),
        (r.getFocusKey = function () {
            return this.get('focusKey');
        }),
        (r.getFocusOffset = function () {
            return this.get('focusOffset');
        }),
        (r.getIsBackward = function () {
            return this.get('isBackward');
        }),
        (r.getHasFocus = function () {
            return this.get('hasFocus');
        }),
        (r.hasEdgeWithin = function (t, e, r) {
            var n = this.getAnchorKey(),
                i = this.getFocusKey();
            if (n === i && n === t) {
                var o = this.getStartOffset(),
                    a = this.getEndOffset();
                return (e <= o && o <= r) || (e <= a && a <= r);
            }
            if (t !== n && t !== i) return !1;
            var u = t === n ? this.getAnchorOffset() : this.getFocusOffset();
            return e <= u && r >= u;
        }),
        (r.isCollapsed = function () {
            return this.getAnchorKey() === this.getFocusKey() && this.getAnchorOffset() === this.getFocusOffset();
        }),
        (r.getStartKey = function () {
            return this.getIsBackward() ? this.getFocusKey() : this.getAnchorKey();
        }),
        (r.getStartOffset = function () {
            return this.getIsBackward() ? this.getFocusOffset() : this.getAnchorOffset();
        }),
        (r.getEndKey = function () {
            return this.getIsBackward() ? this.getAnchorKey() : this.getFocusKey();
        }),
        (r.getEndOffset = function () {
            return this.getIsBackward() ? this.getAnchorOffset() : this.getFocusOffset();
        }),
        (e.createEmpty = function (t) {
            return new e({
                anchorKey: t,
                anchorOffset: 0,
                focusKey: t,
                focusOffset: 0,
                isBackward: !1,
                hasFocus: !1
            });
        }),
        e
    );
})(
    (0, r(65183).Record)({
        anchorKey: '',
        anchorOffset: 0,
        focusKey: '',
        focusOffset: 0,
        isBackward: !1,
        hasFocus: !1
    })
);
