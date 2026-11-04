var n = t(582128),
    l = t(855986),
    s = t(87664),
    r = t(517164),
    a = t(20805),
    u = t(83971),
    o = t(583846),
    d = t(718197),
    c = t(290863),
    A = t(343129),
    h = t(731854);
let p = [],
    g = [];
t.d(
    i,
    {},
    {
        A: function (e) {
            let i = (0, l.bG)([d.Ay], () => d.Ay.supports(h.O5.VIDEO)),
                t = (0, s.A)(e),
                m = (0, l.bG)([c.A], () => c.A.getActivities(e)),
                v = (0, l.bG)([r.A], () => r.A.getUserOutbox(e)),
                { live: f, recent: M } = (0, n.useMemo)(() => {
                    let e = (0, A.U)(m),
                        i = v?.entries.filter(
                            (i) =>
                                !(0, o.Hd)(i) &&
                                ((0, a.Tq)(i)
                                    ? i.extra.entries.length > 0 && !e.some((e) => null != e && (0, u.qb)(i, e))
                                    : (0, a.Lf)(i)
                                      ? !e.some((e) => null != e && (0, u.SU)(i, e))
                                      : (0, a.$R)(i)),
                        );
                    return { live: 0 === e.length ? p : e, recent: null == i || 0 === i.length ? g : i };
                }, [m, v?.entries]);
            return { live: f, recent: M, stream: i ? t : null, outbox: v };
        },
    },
);
