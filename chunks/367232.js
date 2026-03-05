n.d(t, { A: () => f });
var l = n(627968),
    a = n(64700),
    r = n(397927),
    s = n(297413),
    i = n(376304),
    o = n(201275),
    c = n(386784),
    d = n(657048),
    u = n(734057),
    m = n(317525),
    p = n(71393),
    A = n(290863),
    h = n(287809),
    C = n(207963),
    E = n(489414),
    x = n(289770),
    N = n(247818),
    I = n(652215),
    _ = n(53156);
function f(e) {
    let t = (0, C.jc)(),
        n = t?.channelId,
        f = u.A.getChannel(n),
        g = p.A.getGuild(f?.getGuildId()),
        T = (0, c.A)(g?.id, x.S$),
        v = a.useMemo(() => (0, x.iA)(e.defaultValues, g?.id), [e.defaultValues, g]);
    return (0, l.jsx)(N.Ay, {
        selectActionComponent: e,
        queryOptions: (t) => (0, x.YV)(e.type, t, n),
        renderIcon: (e, t) => {
            let n = t === N.p6.PILL_ICON_SIZE;
            if (e?.type === E.iw.USER) {
                let a = h.default.getUser(e.value);
                if (null == a) return;
                return (0, l.jsx)(r.euF, {
                    size: n ? r._3J.SIZE_16 : r._3J.SIZE_24,
                    src: a.getAvatarURL(g?.id, t),
                    status: n ? null : A.A.getStatus(a.id),
                    "aria-hidden": !0,
                });
            }
            if (e?.type === E.iw.ROLE) {
                let n = null != g ? m.A.getRole(g.id, e.value) : void 0;
                if (null == n || null == g) return;
                let a = (0, i.fm)(g, n) ? (0, o.ox)(n, t) : null;
                return null != a
                    ? (0, l.jsx)(d.A, { ...a })
                    : (0, l.jsx)(r.iTF, { size: "custom", color: n.colorString ?? I.TpD, height: t, width: t });
            }
        },
        renderOptionLabel: (e) => {
            let t = null;
            if (e.type === E.iw.USER) {
                let n = h.default.getUser(e.value);
                null != n &&
                    (t = (0, l.jsx)(s.A, {
                        className: _.Tc,
                        usernameClass: _.Xh,
                        discriminatorClass: _.D2,
                        botClass: _.Od,
                        user: n,
                        forceUsername: !0,
                    }));
            } else if (e.type === E.iw.ROLE) {
                let n = null != g ? m.A.getRole(g.id, e.value) : void 0,
                    a = null == n ? null : T?.[n.id];
                null != a &&
                    (t = (0, l.jsxs)("div", {
                        className: _.Ly,
                        children: [
                            (0, l.jsx)(r.nys, { size: "sm", color: "currentColor", className: _.jh }),
                            (0, l.jsx)("span", { className: _.NT, children: a }),
                        ],
                    }));
            }
            return (0, l.jsxs)("span", {
                className: _.Pf,
                children: [(0, l.jsx)("span", { className: _.QK, children: e.label }), t],
            });
        },
        defaultValues: v,
    });
}
