n.d(t, { A: () => T });
var a = n(627968),
    l = n(64700),
    r = n(97808),
    i = n(778712),
    s = n(179866),
    o = n(950305),
    d = n(297413),
    c = n(376304),
    u = n(201275),
    m = n(386784),
    _ = n(657048),
    p = n(734057),
    h = n(317525),
    A = n(71393),
    C = n(290863),
    x = n(287809),
    f = n(207963),
    E = n(489414),
    I = n(289770),
    N = n(247818),
    g = n(652215),
    v = n(167483);
function T(e) {
    let t = (0, f.jc)(),
        n = t?.channelId,
        T = p.A.getChannel(n),
        b = A.A.getGuild(T?.getGuildId()),
        S = (0, m.A)(b?.id, I.S$),
        j = l.useMemo(() => (0, I.iA)(e.defaultValues, b?.id), [e.defaultValues, b]);
    return (0, a.jsx)(N.Ay, {
        selectActionComponent: e,
        queryOptions: (t) => (0, I.YV)(e.type, t, n),
        renderIcon: (e, t) => {
            let n = t === N.p6.PILL_ICON_SIZE;
            if (e?.type === E.iw.USER) {
                let l = x.default.getUser(e.value);
                if (null == l) return;
                return (0, a.jsx)(r.eu, {
                    size: n ? i._3.SIZE_16 : i._3.SIZE_24,
                    src: l.getAvatarURL(b?.id, t),
                    status: n ? null : C.A.getStatus(l.id),
                    "aria-hidden": !0,
                });
            }
            if (e?.type === E.iw.ROLE) {
                let n = null != b ? h.A.getRole(b.id, e.value) : void 0;
                if (null == n || null == b) return;
                let l = (0, c.fm)(b, n) ? (0, u.ox)(n, t) : null;
                return null != l
                    ? (0, a.jsx)(_.A, { ...l })
                    : (0, a.jsx)(s.i, { size: "custom", color: n.colorString ?? g.TpD, height: t, width: t });
            }
        },
        renderOptionLabel: (e) => {
            let t = null;
            if (e.type === E.iw.USER) {
                let n = x.default.getUser(e.value);
                null != n &&
                    (t = (0, a.jsx)(d.A, {
                        className: v.Tc,
                        usernameClass: v.Xh,
                        discriminatorClass: v.D2,
                        botClass: v.Od,
                        user: n,
                        forceUsername: !0,
                    }));
            } else if (e.type === E.iw.ROLE) {
                let n = null != b ? h.A.getRole(b.id, e.value) : void 0,
                    l = null == n ? null : S?.[n.id];
                null != l &&
                    (t = (0, a.jsxs)("div", {
                        className: v.Ly,
                        children: [
                            (0, a.jsx)(o.n, { size: "sm", color: "currentColor", className: v.jh }),
                            (0, a.jsx)("span", { className: v.NT, children: l }),
                        ],
                    }));
            }
            return (0, a.jsxs)("span", {
                className: v.Pf,
                children: [(0, a.jsx)("span", { className: v.QK, children: e.label }), t],
            });
        },
        defaultValues: j,
    });
}
