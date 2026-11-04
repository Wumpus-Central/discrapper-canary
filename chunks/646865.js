var i = n(73153),
    r = n(293432),
    a = n(574172),
    s = n(652215);
n.d(
    t,
    {},
    {
        f: function () {
            return !1;
        },
        w: async function (e, t) {
            let n,
                l = r.A.getWindowOpen(s.MLl.ACTIVITY_POPOUT);
            e && !l && i.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
            try {
                n = await t();
            } catch {
                n = !1;
            }
            return (!n && e && a.close(s.MLl.ACTIVITY_POPOUT), n);
        },
    },
);
