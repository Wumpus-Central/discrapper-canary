var n = function () {
    (this.head = null), (this.tail = null);
};
(n.prototype = {
    add: function (e) {
        var n = {
                item: e,
                next: null
            },
            _ = this.tail;
        _ ? (_.next = n) : (this.head = n), (this.tail = n);
    },
    get: function () {
        var e = this.head;
        if (e) return null === (this.head = e.next) && (this.tail = null), e.item;
    }
}),
    (e.exports = n);
