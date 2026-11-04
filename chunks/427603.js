var i = n(228342);
n.d(
    t,
    {},
    {
        A: function () {
            let e = i.default.getFocusedPID();
            return null != e && (i.default.isReady(e) || i.default.isCrashed(e)) ? e : null;
        },
    },
);
