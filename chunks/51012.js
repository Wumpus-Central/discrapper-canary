var i = n(67867),
    r = n(804104).every;
i(
    {
        target: 'Array',
        proto: !0,
        forced: !n(54659)('every')
    },
    {
        every: function (e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
    }
);
