var n = function () {
    (this.head = null), (this.tail = null);
};
(n.prototype = {
    add: function (t) {
        var n = {
                item: t,
                next: null
            },
            r = this.tail;
        r ? (r.next = n) : (this.head = n), (this.tail = n);
    },
    get: function () {
        var t = this.head;
        if (t) return null === (this.head = t.next) && (this.tail = null), t.item;
    }
}),
    (t.exports = n);
