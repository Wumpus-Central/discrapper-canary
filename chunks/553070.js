var r = n(861538),
    i = n(900624),
    a = n(117973);
e.exports = function () {
    (this.size = 0),
        (this.__data__ = {
            hash: new r(),
            map: new (a || i)(),
            string: new r()
        });
};
