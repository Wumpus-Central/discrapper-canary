var i = n(582128),
    r = n(672929),
    a = n(165610);
let s = new Set();
n.d(
    t,
    {},
    {
        A: function (e) {
            let { applicationId: t, surface: n, shouldStartClosed: l } = e,
                o = (0, a.VA)(t, n),
                d = (0, r.A)(t, n),
                [c, u] = i.useState(null);
            return (
                c?.frameId !== o
                    ? u({ frameId: o, hasLaunched: !1, isClosed: null == d && (s.has(o) || l()) })
                    : (0, a.x1)(d) && !c.hasLaunched
                      ? u({ ...c, hasLaunched: !0 })
                      : null == d && c.hasLaunched && !c.isClosed && u({ ...c, isClosed: !0 }),
                i.useEffect(() => {
                    c?.hasLaunched === !0 && (c.isClosed ? s.add(c.frameId) : s.delete(c.frameId));
                }, [c]),
                {
                    isClosed: c?.frameId === o && c.isClosed,
                    launch: function () {
                        u((e) => (null != e ? { ...e, hasLaunched: !1, isClosed: !1 } : e));
                    },
                }
            );
        },
        z: function (e) {
            return s.has(e);
        },
    },
);
