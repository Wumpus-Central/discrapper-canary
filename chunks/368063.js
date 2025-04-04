var r = a(98405),
    n = a(580983);
r(
    {
        target: 'URL',
        proto: !0,
        enumerable: !0
    },
    {
        toJSON: function () {
            return n(URL.prototype.toString, this);
        }
    }
);
