var r = n(220159),
    o = n(674554).includes,
    a = n(779688),
    i = n(855802);
r(
    {
        target: 'Array',
        proto: !0,
        forced: a(function () {
            return ![,].includes();
        })
    },
    {
        includes: function (e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
    }
),
    i('includes');
