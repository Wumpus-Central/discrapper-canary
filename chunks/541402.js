var r = n(220159),
    o = n(764908),
    a = n(198856),
    i = n(717130),
    s = n(565130),
    c = n(317043),
    l = o(''.indexOf);
r(
    {
        target: 'String',
        proto: !0,
        forced: !c('includes')
    },
    {
        includes: function (e) {
            return !!~l(s(i(this)), s(a(e)), arguments.length > 1 ? arguments[1] : void 0);
        }
    }
);
