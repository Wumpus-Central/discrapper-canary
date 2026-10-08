a.d(e, { default: () => T, O: () => y });
var i = a(477900),
    l = a(582128),
    r = a(189213),
    n = a(834730),
    s = a(150934),
    c = a(503852);
a(321073);
var o = a(512750),
    d = a(17928),
    u = a(386784),
    m = a(498642),
    x = a(317525),
    p = a(71393),
    k = a(356863),
    f = a(660183),
    b = a(898190),
    g = a(72377),
    h = a(503698),
    v = a.n(h),
    j = a(309326),
    C = a(337322),
    E = a(870247);
function A(t) {
    let { powerup: e } = t,
        a = (0, C.A)(e);
    return (0, i.jsx)("div", {
        className: E.I1,
        children: a.map((t) => {
            let { Icon: e, className: a } = (0, j.a)(t.perkIcon, !1);
            return (0, i.jsxs)(
                "div",
                {
                    className: E.Ab,
                    children: [
                        (0, i.jsx)(e, { color: "currentColor", className: v()(E.kf, a) }),
                        (0, i.jsx)(n.E, {
                            className: E.uL,
                            color: "text-default",
                            variant: "text-sm/medium",
                            children: t.description,
                        }),
                    ],
                },
                `perk-${t.perkIcon}`,
            );
        }),
    });
}
var N = a(568065),
    S = a(721721);
function y(t) {
    let {
            size: e,
            title: a,
            body: c,
            warningText: o,
            acknowledgementText: d,
            error: u,
            isLoading: m,
            onDeactivate: x,
            ...p
        } = t,
        [b, g] = l.useState(!1);
    return (0, i.jsxs)(r.a, {
        ...p,
        size: e,
        title: f.intl.formatToPlainString(k.default.iEBw1M, { perk: a }),
        subtitle: f.intl.formatToPlainString(k.default["7o0K+2"], { perk: a }),
        actions: [
            { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: p.onClose },
            {
                variant: "critical-primary",
                text: f.intl.string(k.default.PYPdl4),
                loading: m,
                onClick: x,
                disabled: null != d && !b,
            },
        ],
        children: [
            c,
            (0, i.jsxs)("div", {
                className: S.UW,
                children: [
                    (0, i.jsx)(n.E, {
                        color: "text-feedback-critical",
                        variant: "eyebrow",
                        children: f.intl.string(k.default.OVt5CC),
                    }),
                    (0, i.jsx)(n.E, { className: S.i4, tag: "span", variant: "text-sm/medium", children: o }),
                ],
            }),
            null != u &&
                (0, i.jsx)(n.E, {
                    className: S.kc,
                    color: "text-feedback-critical",
                    variant: "text-sm/semibold",
                    children: u,
                }),
            null != d &&
                (0, i.jsx)("div", {
                    className: S.ud,
                    children: (0, i.jsx)(s.S, { checked: b, onChange: g, label: d, labelType: "secondary" }),
                }),
        ],
    });
}
function T(t) {
    let e,
        a,
        r,
        s,
        h,
        { guildId: v, powerup: j, ...C } = t,
        { onDeactivate: E, error: T, isLoading: w } = (0, b.A)(v, j),
        { onClose: I } = C,
        P = l.useCallback(
            (t) => {
                (t.stopPropagation(),
                    E().then(() => {
                        I?.();
                    }));
            },
            [I, E],
        ),
        L =
            ((e = (0, d.bG)([m.A], () => m.A.getMemberCount(v))),
            (a = (0, u.A)(v)),
            (r = (0, d.bG)([p.A], () => p.A.getGuild(v)?.vanityURLCode != null)),
            (s = (0, d.bG)(
                [x.A],
                () =>
                    j.skuId !== o.aN || null == a
                        ? 0
                        : x.A.getSortedRoles(v).reduce(
                              (t, e) => (e.colorStrings?.secondaryColor == null ? t : t + (a[e.id] ?? 0)),
                              0,
                          ),
                [v, j.skuId, a],
            )),
            (h = l.useMemo(() => {
                let t;
                switch (j.skuId) {
                    case o.aN:
                        t =
                            s > 0
                                ? f.intl.formatToPlainString(k.default["4jSvr1"], { perk: j.title, memberCount: s })
                                : f.intl.formatToPlainString(k.default.cavtEo, { perk: j.title });
                        break;
                    case o.FB:
                        t = r ? f.intl.string(k.default.hN75yb) : f.intl.string(k.default.Du91Rb);
                        break;
                    case o.OJ:
                    case o.jF:
                    case o.Ht:
                    case o.tv:
                        t = f.intl.string(k.default.Vf2ZcR);
                        break;
                    default:
                        t = f.intl.formatToPlainString(k.default["4jSvr1"], { perk: j.title, memberCount: e ?? 0 });
                }
                let a = [{ text: t, critical: j.skuId === o.FB }];
                return (r && j.skuId === o.YG && a.push({ text: f.intl.string(k.default.M4XL5n), critical: !0 }), a);
            }, [j, s, e, r])),
            l.useMemo(
                () =>
                    (0, i.jsx)(i.Fragment, {
                        children: h.map((t, e) =>
                            t.critical
                                ? (0, i.jsx)(
                                      n.E,
                                      {
                                          color: "text-feedback-critical",
                                          variant: "text-sm/semibold",
                                          children: t.text,
                                      },
                                      e,
                                  )
                                : (0, i.jsx)(l.Fragment, { children: t.text }, e),
                        ),
                    }),
                [h],
            ));
    return (
        (0, c.Z)(v, j, c.q.DEACTIVATE),
        (0, i.jsx)(y, {
            size: j.type === N.o9.LEVEL ? "md" : "sm",
            title: j.title,
            body: (function () {
                switch (j.type) {
                    case N.o9.LEVEL:
                        return (0, i.jsx)(A, { powerup: j });
                    case N.o9.PERK:
                        return (0, i.jsx)(g.l, { className: S.Sl, powerup: j });
                }
            })(),
            warningText: L,
            error: T,
            isLoading: w,
            onDeactivate: P,
            ...C,
        })
    );
}
