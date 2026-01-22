n.d(t, {
    A: () => g,
    v: () => E,
}),
    n(667532);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(444550),
    c = n(263063),
    u = n(128450),
    d = n(71393),
    f = n(711014),
    p = n(403362),
    _ = n(833336),
    h = n(985018),
    m = n(306505);
function g(e) {
    let { guildId: t, className: n, globalOption: i, hideDivider: a = !1, onChange: o, renderOptionSuffix: l } = e;
    return (0, r.jsx)(u.A, {
        className: s()(m.u, n),
        title: h.intl.string(h.t.ref7Ki),
        hideDivider: a,
        forcedDivider: !0,
        children: (0, r.jsx)(E, {
            guildId: t,
            onChange: o,
            renderOptionSuffix: l,
            globalOption: i,
        }),
    });
}
function E(e) {
    let { guildId: t, globalOption: n, onChange: a, renderOptionSuffix: s } = e,
        u = (0, o.bG)([_.A], () => _.A.showNotice()),
        g = (0, o.bG)([f.Ay], () => f.Ay.getFlattenedGuildIds()),
        E = (0, o.bG)([d.A], () => d.A.getGuilds()),
        b = i.useMemo(() => {
            let e = g
                .map((e) => {
                    let t = E[e];
                    return null == t
                        ? null
                        : {
                              label: t.name,
                              value: t.id,
                          };
                })
                .filter(p.Vq);
            return null != n && e.unshift(n), e;
        }, [g, E, n]),
        y = i.useCallback(
            (e) => {
                let t =
                    (null == e ? void 0 : e.label) === (null == n ? void 0 : n.label) &&
                    (null == e ? void 0 : e.value) === (null == n ? void 0 : n.value);
                return null == e || "" === e.value || t
                    ? null
                    : (0, r.jsx)(c.A, {
                          className: m.c,
                          guild: E[e.value],
                          size: c.A.Sizes.SMOL,
                          active: !0,
                      });
            },
            [E, n],
        ),
        O = (e) => {
            if ("" === e || e === (null == n ? void 0 : n.value)) return void a(null);
            let t = E[e];
            null != t && a(t);
        };
    return (0, r.jsx)(l.p, {
        isDisabled: u,
        onChange: O,
        value: t,
        options: b,
        renderOptionPrefix: y,
        renderOptionSuffix: s,
        placeholder: h.intl.string(h.t["kMgj+e"]),
        "data-migration-pending": !0,
    });
}
