l.d(t, { A: () => h });
var a = l(64700),
    n = l(17928),
    i = l(594061),
    r = l(967198),
    o = l(927813),
    s = l(935208),
    u = l(541689),
    d = l(256787),
    c = l(826673),
    p = l(367727),
    m = l(853735);
function b(e, t, l) {
    (0, u.IR)(t ? null : e, l);
}
function h(e) {
    let t = (0, n.bG)([r.A], () => r.A.getGuildId()),
        l = (0, c.JZ)(e, { cooldownDurationMs: o.A.Millis.WEEK, guildId: t }),
        u = (0, a.useCallback)(() => {
            if ((0, d.L0)(e)) {
                let t, a;
                return (
                    (t = (0, m.c)(e)),
                    (a = (0, p.J8)(e, {})),
                    (b(e, l), l) ? ((0, i._N)(e), !1) : ((0, p.bQ)(e, t, a), !0)
                );
            }
            if ((0, d.IL)(e)) {
                let t;
                return (
                    (t = (0, p.J8)(e, {})),
                    (b(e, l), l)
                        ? ((0, i._N)(e), !1)
                        : ((0, p.Uu)(e, s.default.fromTimestamp(Date.now() + p.rw), t), !0)
                );
            }
            if ((0, d.ki)(e)) return (b(e, l), l) ? ((0, i._N)(e), !1) : ((0, p.ss)(e, (0, p.J8)(e, {})), !0);
            if ((0, d.ef)(e)) {
                if (null == t) return !1;
                let a = null != t ? (0, p.Sx)(e, t) : 1;
                return (b(e, l, t), l) ? ((0, p.R2)(e, t, a - 1), !1) : ((0, p.wH)(e, t, a), !0);
            }
            if ((0, d.XQ)(e)) {
                if (null == t) return !1;
                let a = null != t ? (0, p.Sx)(e, t) : 1;
                return (b(e, l, t), l) ? ((0, p.rZ)(e, t, a - 1), !1) : ((0, p.gG)(e, t, a), !0);
            } else {
                if (!(0, d.PN)(e)) return (b(e, l), l) ? ((0, i.xB)(e), !1) : ((0, i.o_)(e), !0);
                if (null == t) return !1;
                let a = null != t ? (0, p.Sx)(e, t) : 1;
                return (b(e, l, t), l)
                    ? ((0, p.fb)(e, t, a - 1), !1)
                    : ((0, p.G4)(e, s.default.fromTimestamp(Date.now() + p.rw), t, a), !0);
            }
        }, [e, t, l]);
    return { isDismissed: l, handleToggleDismissState: u };
}
