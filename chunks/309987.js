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
    p = {
        parent: null,
        characterList: s(),
        data: l(),
        depth: 0,
        key: "",
        text: "",
        type: "unstyled",
        children: s(),
        prevSibling: null,
        nextSibling: null,
    },
    _ = function (e, t) {
        return e.getStyle() === t.getStyle();
    },
    m = function (e, t) {
        return e.getEntity() === t.getEntity();
    },
    h = function (e) {
        if (!e) return e;
        var t = e.characterList,
            n = e.text;
        return n && !t && (e.characterList = s(d(i.EMPTY, n.length))), e;
    };
e.exports = (function (e) {
    function t() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p;
        return e.call(this, h(t)) || this;
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
            a(this.getCharacterList(), m, e, t);
        }),
        t
    );
})(u(p));
