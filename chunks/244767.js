function r(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
}
var i = n(414501),
    a = n(387739),
    s = n(68055),
    o = n(617179),
    l = n(45069),
    c = n(225758),
    u = n(279998),
    d = n(661551),
    f = n(116740),
    p = n(396276),
    _ = f.List,
    h = f.Record,
    m = f.Repeat;
e.exports = (function (e) {
    function t() {
        return e.apply(this, arguments) || this;
    }
    r(t, e);
    var n = t.prototype;
    return (
        (n.getEntityMap = function () {
            return l;
        }),
        (n.getBlockMap = function () {
            return this.get("blockMap");
        }),
        (n.getSelectionBefore = function () {
            return this.get("selectionBefore");
        }),
        (n.getSelectionAfter = function () {
            return this.get("selectionAfter");
        }),
        (n.getBlockForKey = function (e) {
            return this.getBlockMap().get(e);
        }),
        (n.getKeyBefore = function (e) {
            return this.getBlockMap()
                .reverse()
                .keySeq()
                .skipUntil(function (t) {
                    return t === e;
                })
                .skip(1)
                .first();
        }),
        (n.getKeyAfter = function (e) {
            return this.getBlockMap()
                .keySeq()
                .skipUntil(function (t) {
                    return t === e;
                })
                .skip(1)
                .first();
        }),
        (n.getBlockAfter = function (e) {
            return this.getBlockMap()
                .skipUntil(function (t, n) {
                    return n === e;
                })
                .skip(1)
                .first();
        }),
        (n.getBlockBefore = function (e) {
            return this.getBlockMap()
                .reverse()
                .skipUntil(function (t, n) {
                    return n === e;
                })
                .skip(1)
                .first();
        }),
        (n.getBlocksAsArray = function () {
            return this.getBlockMap().toArray();
        }),
        (n.getFirstBlock = function () {
            return this.getBlockMap().first();
        }),
        (n.getLastBlock = function () {
            return this.getBlockMap().last();
        }),
        (n.getPlainText = function (e) {
            return this.getBlockMap()
                .map(function (e) {
                    return e ? e.getText() : "";
                })
                .join(e || "\n");
        }),
        (n.getLastCreatedEntityKey = function () {
            return l.__getLastCreatedEntityKey();
        }),
        (n.hasText = function () {
            var e = this.getBlockMap();
            return e.size > 1 || escape(e.first().getText()).replace(/%u200B/g, "").length > 0;
        }),
        (n.createEntity = function (e, t, n) {
            return l.__create(e, t, n), this;
        }),
        (n.mergeEntityData = function (e, t) {
            return l.__mergeData(e, t), this;
        }),
        (n.replaceEntityData = function (e, t) {
            return l.__replaceData(e, t), this;
        }),
        (n.addEntity = function (e) {
            return l.__add(e), this;
        }),
        (n.getEntity = function (e) {
            return l.__get(e);
        }),
        (t.createFromBlockArray = function (e, n) {
            var r = Array.isArray(e) ? e : e.contentBlocks,
                a = i.createFromArray(r),
                s = a.isEmpty() ? new c() : c.createEmpty(a.first().getKey());
            return new t({
                blockMap: a,
                entityMap: n || l,
                selectionBefore: s,
                selectionAfter: s,
            });
        }),
        (t.createFromText = function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /\r\n?|\n/g,
                r = e.split(n).map(function (e) {
                    return (
                        (e = p(e)),
                        new (d("draft_tree_data_support") ? o : s)({
                            key: u(),
                            text: e,
                            type: "unstyled",
                            characterList: _(m(a.EMPTY, e.length)),
                        })
                    );
                });
            return t.createFromBlockArray(r);
        }),
        t
    );
})(
    h({
        entityMap: null,
        blockMap: null,
        selectionBefore: null,
        selectionAfter: null,
    }),
);
