var n = r(310958),
    i = r(181676),
    o = r(65183),
    a = o.List,
    u = o.Map,
    s = o.OrderedSet,
    c = o.Record,
    l = o.Repeat,
    f = s(),
    p = c({
        key: '',
        type: 'unstyled',
        text: '',
        characterList: a(),
        depth: 0,
        data: u()
    }),
    h = function (t) {
        if (!t) return t;
        var e = t.characterList,
            r = t.text;
        return r && !e && (t.characterList = a(l(n.EMPTY, r.length))), t;
    };
function d(t, e) {
    return t.getStyle() === e.getStyle();
}
function g(t, e) {
    return t.getEntity() === e.getEntity();
}
t.exports = (function (t) {
    function e(e) {
        return t.call(this, h(e)) || this;
    }
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
    var r = e.prototype;
    return (
        (r.getKey = function () {
            return this.get('key');
        }),
        (r.getType = function () {
            return this.get('type');
        }),
        (r.getText = function () {
            return this.get('text');
        }),
        (r.getCharacterList = function () {
            return this.get('characterList');
        }),
        (r.getLength = function () {
            return this.getText().length;
        }),
        (r.getDepth = function () {
            return this.get('depth');
        }),
        (r.getData = function () {
            return this.get('data');
        }),
        (r.getInlineStyleAt = function (t) {
            var e = this.getCharacterList().get(t);
            return e ? e.getStyle() : f;
        }),
        (r.getEntityAt = function (t) {
            var e = this.getCharacterList().get(t);
            return e ? e.getEntity() : null;
        }),
        (r.findStyleRanges = function (t, e) {
            i(this.getCharacterList(), d, t, e);
        }),
        (r.findEntityRanges = function (t, e) {
            i(this.getCharacterList(), g, t, e);
        }),
        e
    );
})(p);
