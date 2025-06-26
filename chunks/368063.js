var n = r(98405),
    i = r(580983);
n(
    {
        target: 'URL',
        proto: !0,
        enumerable: !0
    },
    {
        toJSON: function () {
            return i(URL.prototype.toString, this);
        }
    }
);
