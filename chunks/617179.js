function r(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
}
var i = n(387739),
    a = n(265930),
    s = n(116740),
    o = s.List,
    l = s.Map,
    c = s.OrderedSet,
    u = s.Record,
    d = s.Repeat,
    f = c(),
    p = {
        parent: null,
        characterList: o(),
        data: l(),
        depth: 0,
        key: "",
        text: "",
        type: "unstyled",
        children: o(),
        prevSibling: null,
        nextSibling: null,
    },
    _ = function (e, t) {
        return e.getStyle() === t.getStyle();
    },
    h = function (e, t) {
        return e.getEntity() === t.getEntity();
    },
    m = function (e) {
        if (!e) return e;
        var t = e.characterList,
            n = e.text;
        return n && !t && (e.characterList = o(d(i.EMPTY, n.length))), e;
    };
e.exports = (function (e) {
    function t() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p;
        return e.call(this, m(t)) || this;
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
        (n.getChildKeys = function () {
            return this.get("children");
        }),
        (n.getParentKey = function () {
            return this.get("parent");
        }),
        (n.getPrevSiblingKey = function () {
            return this.get("prevSibling");
        }),
        (n.getNextSiblingKey = function () {
            return this.get("nextSibling");
        }),
        (n.findStyleRanges = function (e, t) {
            a(this.getCharacterList(), _, e, t);
        }),
        (n.findEntityRanges = function (e, t) {
            a(this.getCharacterList(), h, e, t);
        }),
        t
    );
})(u(p));
