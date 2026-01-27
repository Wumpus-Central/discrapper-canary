n.d(t, {
    A: () => f,
    v: () => h,
}),
    n(667532);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(444550),
    c = n(263063),
    d = n(128450),
    u = n(71393),
    _ = n(711014),
    p = n(403362),
    m = n(833336),
    g = n(985018),
    A = n(306505);

function f(e) {
    let { guildId: t, className: n, globalOption: i, hideDivider: l = !1, onChange: a, renderOptionSuffix: o } = e;
    return (0, r.jsx)(d.A, {
        className: s()(A.u, n),
        title: g.intl.string(g.t.ref7Ki),
        hideDivider: l,
        forcedDivider: !0,
        children: (0, r.jsx)(h, {
            guildId: t,
            onChange: a,
            renderOptionSuffix: o,
            globalOption: i,
        }),
    });
}

function h(e) {
    let { guildId: t, globalOption: n, onChange: l, renderOptionSuffix: s } = e,
        d = (0, a.bG)([m.A], () => m.A.showNotice()),
        f = (0, a.bG)([_.Ay], () => _.Ay.getFlattenedGuildIds()),
        h = (0, a.bG)([u.A], () => u.A.getGuilds()),
        b = i.useMemo(() => {
            let e = f
                .map((e) => {
                    let t = h[e];
                    return null == t
                        ? null
                        : {
                              label: t.name,
                              value: t.id,
                          };
                })
                .filter(p.Vq);
            return null != n && e.unshift(n), e;
        }, [f, h, n]),
        E = i.useCallback(
            (e) => {
                let t =
                    (null == e ? void 0 : e.label) === (null == n ? void 0 : n.label) &&
                    (null == e ? void 0 : e.value) === (null == n ? void 0 : n.value);
                return null == e || "" === e.value || t
                    ? null
                    : (0, r.jsx)(c.A, {
                          className: A.c,
                          guild: h[e.value],
                          size: c.A.Sizes.SMOL,
                          active: !0,
                      });
            },
            [h, n],
        );
    return (0, r.jsx)(o.p, {
        isDisabled: d,
        onChange: (e) => {
            if ("" === e || e === (null == n ? void 0 : n.value)) return void l(null);
            let t = h[e];
            null != t && l(t);
        },
        value: t,
        options: b,
        renderOptionPrefix: E,
        renderOptionSuffix: s,
        placeholder: g.intl.string(g.t["kMgj+e"]),
        "data-migration-pending": !0,
    });
}
