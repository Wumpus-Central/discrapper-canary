var i = r(147018),
    a = r(161581),
    o = r(112285).set,
    s = r(602932),
    l = a.setImmediate ? s(o, !1) : o;
i(
    {
        global: !0,
        bind: !0,
        enumerable: !0,
        forced: a.setImmediate !== l
    },
    { setImmediate: l }
);
