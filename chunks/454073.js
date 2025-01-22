var i = r(67867),
    a = r(804104).filter;
i(
    {
        target: 'Array',
        proto: !0,
        forced: !r(469624)('filter')
    },
    {
        filter: function (e) {
            return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
    }
);
