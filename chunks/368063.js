var r = n(98405),
    i = n(580983);
r(
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
