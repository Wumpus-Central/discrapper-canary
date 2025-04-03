var t = _(147018),
    r = _(161581),
    c = _(172262),
    i = _(526988),
    a = _(202934),
    o = _(391673),
    u = r.process;
t(
    {
        global: !0,
        enumerable: !0,
        dontCallGetSet: !0
    },
    {
        queueMicrotask: function (e) {
            a(arguments.length, 1), i(e);
            var n = o && u.domain;
            c(n ? n.bind(e) : e);
        }
    }
);
