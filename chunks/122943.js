n.d(t, { A: () => N });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(311907),
    o = n(397927),
    d = n(863439),
    c = n(465364),
    u = n(448368),
    A = n(302031),
    h = n(253932),
    _ = n(576705),
    m = n(994500),
    p = n(978914),
    g = n(652215),
    E = n(838541),
    f = n(985018),
    I = n(536791),
    C = n(206314);
let N = r.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: a, message: N } = (0, p.I)(t),
        { isBlocked: T, isIgnored: S } = (0, s.cf)(
            [m.A],
            () => ({
                isBlocked: null != N && m.A.isBlockedForMessage(N),
                isIgnored: null != N && m.A.isIgnoredForMessage(N),
            }),
            [N],
        ),
        x = (0, s.bG)([_.A], () => _.A.can(g.xBc.MANAGE_MESSAGES, t)),
        v = h.gs.useSetting(),
        { content: b } = r.useMemo(
            () =>
                N?.content != null && "" !== N.content
                    ? (0, c.Ay)(N, { formatInline: !0, noStyleAndInteraction: !0 })
                    : { content: null },
            [N],
        ),
        y = null;
    if (a)
        y = (0, i.jsx)(o.Text, {
            className: I.G4,
            variant: "text-sm/normal",
            color: "text-muted",
            children: f.intl.string(f.t.BZHld2),
        });
    else if (n)
        if (null != N && T)
            y = (0, i.jsx)(o.Text, {
                className: I.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: f.intl.string(f.t["WPe+xL"]),
            });
        else if (null != N && S)
            y = (0, i.jsx)(o.Text, {
                className: I.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: f.intl.string(f.t.uxrh1O),
            });
        else if (null != N) {
            let { contentPlaceholder: e, renderedContent: t } = (0, u.o)(N, b, T, S, l()(I.BK, C.tZ), {
                leadingIconClass: I.AF,
                trailingIconClass: I.AF,
                iconSize: E.eJ,
            });
            y =
                null != t
                    ? (0, i.jsx)(o.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: I.BK,
                          children: t,
                      })
                    : (0, i.jsx)(o.Text, {
                          tag: "span",
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: I.G4,
                          children: e,
                      });
        } else
            y = (0, i.jsx)(o.Text, {
                className: I.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: f.intl.string(f.t["0KfDxM"]),
            });
    else y = null;
    return (0, i.jsx)(A.Bs.Provider, {
        value: (0, d.A)(v, x),
        children: (0, i.jsx)(o.M1G, { className: I.JY, children: y }),
    });
});
