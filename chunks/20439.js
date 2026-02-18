l.d(t, { A: () => x });
var a = l(64700),
    n = l(311907),
    r = l(594061),
    i = l(967198),
    s = l(927813),
    o = l(661191),
    u = l(541689),
    c = l(256787),
    d = l(826673),
    p = l(367727),
    m = l(357186);
function h(e, t, l) {
    (0, u.IR)(t ? null : e, l ?? null);
}
function x(e) {
    let t = (0, n.bG)([i.A], () => i.A.getGuildId()),
        l = (0, d.JZ)(e, { cooldownDurationMs: s.A.Millis.WEEK, guildId: t }),
        u = (0, a.useCallback)(() => {
            if ((0, c.L0)(e)) {
                let t, a;
                return (
                    (t = (0, m.c)(e)),
                    (a = (0, p.J8)(e, {})),
                    (h(e, l, null), l) ? ((0, r._N)(e), !1) : ((0, p.bQ)(e, t, a), !0)
                );
            }
            if ((0, c.IL)(e)) {
                let t;
                return (
                    (t = (0, p.J8)(e, {})),
                    (h(e, l, null), l)
                        ? ((0, r._N)(e), !1)
                        : ((0, p.Uu)(e, o.default.fromTimestamp(Date.now() + p.rw), t), !0)
                );
            }
            if ((0, c.ki)(e)) return (h(e, l, null), l) ? ((0, r._N)(e), !1) : ((0, p.ss)(e, (0, p.J8)(e, {})), !0);
            if ((0, c.ef)(e)) {
                if (null == t) return !1;
                let a = null != t ? (0, p.Sx)(e, t) : 1;
                return (h(e, l, t), l) ? ((0, p.R2)(e, t, a - 1), !1) : ((0, p.wH)(e, t, a), !0);
            }
            if ((0, c.XQ)(e)) {
                if (null == t) return !1;
                let a = null != t ? (0, p.Sx)(e, t) : 1;
                return (h(e, l, t), l) ? ((0, p.rZ)(e, t, a - 1), !1) : ((0, p.gG)(e, t, a), !0);
            } else {
                if (!(0, c.PN)(e)) return (h(e, l, null), l) ? ((0, r.xB)(e), !1) : ((0, r.o_)(e), !0);
                if (null == t) return !1;
                let a = null != t ? (0, p.Sx)(e, t) : 1;
                return (h(e, l, t), l)
                    ? ((0, p.fb)(e, t, a - 1), !1)
                    : ((0, p.G4)(e, o.default.fromTimestamp(Date.now() + p.rw), t, a), !0);
            }
        }, [e, t, l]);
    return { isDismissed: l, handleToggleDismissState: u };
}
