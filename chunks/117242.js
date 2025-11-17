function r(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
}
var i = n(50153),
    a = n(257469),
    o = n(65183),
    s = o.List,
    l = o.Map,
    c = o.OrderedSet,
    u = o.Record,
    d = o.Repeat,
    f = c(),
    _ = u({
        key: "",
        type: "unstyled",
        text: "",
        characterList: s(),
        depth: 0,
        data: l(),
    }),
    p = function (e) {
        if (!e) return e;
        var t = e.characterList,
            n = e.text;
        return n && !t && (e.characterList = s(d(i.EMPTY, n.length))), e;
    };
function h(e, t) {
    return e.getStyle() === t.getStyle();
}
function m(e, t) {
    return e.getEntity() === t.getEntity();
}
e.exports = (function (e) {
    function t(t) {
        return e.call(this, p(t)) || this;
    }
    r(t, e);
    var n = t.prototype;
    return (
        (n.getKey = function () {
            return this.get("key");
        }),
        (n.getType = function () {
            return this.get("type");
        }),
        (n.getText = function () {
            return this.get("text");
        }),
        (n.getCharacterList = function () {
            return this.get("characterList");
        }),
        (n.getLength = function () {
            return this.getText().length;
        }),
        (n.getDepth = function () {
            return this.get("depth");
        }),
        (n.getData = function () {
            return this.get("data");
        }),
        (n.getInlineStyleAt = function (e) {
            var t = this.getCharacterList().get(e);
            return t ? t.getStyle() : f;
        }),
        (n.getEntityAt = function (e) {
            var t = this.getCharacterList().get(e);
            return t ? t.getEntity() : null;
        }),
        (n.findStyleRanges = function (e, t) {
            a(this.getCharacterList(), h, e, t);
        }),
        (n.findEntityRanges = function (e, t) {
            a(this.getCharacterList(), m, e, t);
        }),
        t
    );
})(_);
