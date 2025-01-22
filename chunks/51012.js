var i = r(67867),
    a = r(804104).every;
i(
    {
        target: 'Array',
        proto: !0,
        forced: !r(54659)('every')
    },
    {
        every: function (e) {
            return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
    }
);
