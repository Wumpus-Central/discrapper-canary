a.d(t, { O: () => S, default: () => T });
var i = a(477900),
    l = a(582128),
    r = a(189213),
    n = a(834730),
    s = a(150934),
    c = a(503852);
a(321073);
var o = a(512750),
    d = a(855986),
    u = a(386784),
    m = a(498642),
    b = a(317525),
    p = a(71393),
    k = a(586428),
    f = a(792996),
    x = a(898190),
    g = a(652242),
    h = a(503698),
    v = a.n(h),
    j = a(309326),
    C = a(337322),
    E = a(870247);
function y(e) {
    let { powerup: t } = e,
        a = (0, C.A)(t);
    return (0, i.jsx)("div", {
        className: E.I1,
        children: a.map((e) => {
            let { Icon: t, className: a } = (0, j.a)(e.perkIcon, !1);
            return (0, i.jsxs)(
                "div",
                {
                    className: E.Ab,
                    children: [
                        (0, i.jsx)(t, { color: "currentColor", className: v()(E.kf, a) }),
                        (0, i.jsx)(n.E, {
                            className: E.uL,
                            color: "text-default",
                            variant: "body-sm/medium",
                            children: e.description,
                        }),
                    ],
                },
                `perk-${e.perkIcon}`,
            );
        }),
    });
}
var A = a(568065),
    N = a(721721);
function S(e) {
    let {
            size: t,
            title: a,
            body: c,
            warningText: o,
            acknowledgementText: d,
            error: u,
            isLoading: m,
            onDeactivate: b,
            ...p
        } = e,
        [x, g] = l.useState(!1);
    return (0, i.jsxs)(r.a, {
        ...p,
        size: t,
        title: f.intl.formatToPlainString(k.default.iEBw1M, { perk: a }),
        subtitle: f.intl.formatToPlainString(k.default["7o0K+2"], { perk: a }),
        actions: [
            { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: p.onClose },
            {
                variant: "critical-primary",
                text: f.intl.string(k.default.PYPdl4),
                loading: m,
                onClick: b,
                disabled: null != d && !x,
            },
        ],
        children: [
            c,
            (0, i.jsxs)("div", {
                className: N.UW,
                children: [
                    (0, i.jsx)(n.E, {
                        color: "text-feedback-critical",
                        variant: "body-sm/medium",
                        children: f.intl.string(k.default.OVt5CC),
                    }),
                    (0, i.jsx)(n.E, { className: N.i4, tag: "span", variant: "body-sm/medium", children: o }),
                ],
            }),
            null != u &&
                (0, i.jsx)(n.E, {
                    className: N.kc,
                    color: "text-feedback-critical",
                    variant: "body-sm/semibold",
                    children: u,
                }),
            null != d &&
                (0, i.jsx)("div", {
                    className: N.ud,
                    children: (0, i.jsx)(s.S, { checked: x, onChange: g, label: d, labelType: "secondary" }),
                }),
        ],
    });
}
function T(e) {
    let t,
        a,
        r,
        s,
        h,
        { guildId: v, powerup: j, ...C } = e,
        { onDeactivate: E, error: T, isLoading: I } = (0, x.A)(v, j),
        { onClose: P } = C,
        w = l.useCallback(
            (e) => {
                (e.stopPropagation(),
                    E().then(() => {
                        P?.();
                    }));
            },
            [P, E],
        ),
        L =
            ((t = (0, d.bG)([m.A], () => m.A.getMemberCount(v))),
            (a = (0, u.A)(v)),
            (r = (0, d.bG)([p.A], () => p.A.getGuild(v)?.vanityURLCode != null)),
            (s = (0, d.bG)(
                [b.A],
                () =>
                    j.skuId !== o.aN || null == a
                        ? 0
                        : b.A.getSortedRoles(v).reduce(
                              (e, t) => (t.colorStrings?.secondaryColor == null ? e : e + (a[t.id] ?? 0)),
                              0,
                          ),
                [v, j.skuId, a],
            )),
            (h = l.useMemo(() => {
                let e;
                switch (j.skuId) {
                    case o.aN:
                        e =
                            s > 0
                                ? f.intl.formatToPlainString(k.default["4jSvr1"], { perk: j.title, memberCount: s })
                                : f.intl.formatToPlainString(k.default.cavtEo, { perk: j.title });
                        break;
                    case o.FB:
                        e = r ? f.intl.string(k.default.hN75yb) : f.intl.string(k.default.Du91Rb);
                        break;
                    case o.OJ:
                    case o.jF:
                    case o.Ht:
                    case o.tv:
                        e = f.intl.string(k.default.Vf2ZcR);
                        break;
                    default:
                        e = f.intl.formatToPlainString(k.default["4jSvr1"], { perk: j.title, memberCount: t ?? 0 });
                }
                let a = [{ text: e, critical: j.skuId === o.FB }];
                return (r && j.skuId === o.YG && a.push({ text: f.intl.string(k.default.M4XL5n), critical: !0 }), a);
            }, [j, s, t, r])),
            l.useMemo(
                () =>
                    (0, i.jsx)(i.Fragment, {
                        children: h.map((e, t) =>
                            e.critical
                                ? (0, i.jsx)(
                                      n.E,
                                      {
                                          color: "text-feedback-critical",
                                          variant: "body-sm/semibold",
                                          children: e.text,
                                      },
                                      t,
                                  )
                                : (0, i.jsx)(l.Fragment, { children: e.text }, t),
                        ),
                    }),
                [h],
            ));
    return (
        (0, c.Z)(v, j, c.q.DEACTIVATE),
        (0, i.jsx)(S, {
            size: j.type === A.o9.LEVEL ? "md" : "sm",
            title: j.title,
            body: (function () {
                switch (j.type) {
                    case A.o9.LEVEL:
                        return (0, i.jsx)(y, { powerup: j });
                    case A.o9.PERK:
                        return (0, i.jsx)(g.l, { className: N.Sl, powerup: j });
                }
            })(),
            warningText: L,
            error: T,
            isLoading: I,
            onDeactivate: w,
            ...C,
        })
    );
}
