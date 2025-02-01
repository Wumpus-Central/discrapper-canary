var r = a(147018),
    n = a(926515);
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
