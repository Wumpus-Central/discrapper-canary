n.d(t, { A: () => p });
var s = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    r = n(311907),
    c = n(834730),
    d = n(247928),
    o = n(863439),
    u = n(465364),
    A = n(448368),
    h = n(302031),
    m = n(253932),
    g = n(576705),
    x = n(994500),
    S = n(978914),
    E = n(652215),
    f = n(838541),
    _ = n(985018),
    b = n(571882),
    j = n(992595);
let p = l.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: a, message: p } = (0, S.I)(t),
        { isBlocked: v, isIgnored: C } = (0, r.cf)(
            [x.A],
            () => ({
                isBlocked: null != p && x.A.isBlockedForMessage(p),
                isIgnored: null != p && x.A.isIgnoredForMessage(p),
            }),
            [p],
        ),
        I = (0, r.bG)([g.A], () => g.A.can(E.xBc.MANAGE_MESSAGES, t)),
        N = m.gs.useSetting(),
        { content: R } = l.useMemo(
            () =>
                p?.content != null && "" !== p.content
                    ? (0, u.Ay)(p, { formatInline: !0, noStyleAndInteraction: !0 })
                    : { content: null },
            [p],
        ),
        M = null;
    if (a)
        M = (0, s.jsx)(c.E, {
            className: b.G4,
            variant: "text-sm/normal",
            color: "text-muted",
            children: _.intl.string(_.t.BZHld2),
        });
    else if (n)
        if (null != p && v)
            M = (0, s.jsx)(c.E, {
                className: b.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: _.intl.string(_.t["WPe+xL"]),
            });
        else if (null != p && C)
            M = (0, s.jsx)(c.E, {
                className: b.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: _.intl.string(_.t.uxrh1O),
            });
        else if (null != p) {
            let { contentPlaceholder: e, renderedContent: t } = (0, A.o)(p, R, v, C, i()(b.BK, j.tZ), {
                leadingIconClass: b.AF,
                trailingIconClass: b.AF,
                iconSize: f.eJ,
            });
            M =
                null != t
                    ? (0, s.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", className: b.BK, children: t })
                    : (0, s.jsx)(c.E, {
                          tag: "span",
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: b.G4,
                          children: e,
                      });
        } else
            M = (0, s.jsx)(c.E, {
                className: b.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: _.intl.string(_.t["0KfDxM"]),
            });
    else M = null;
    return (0, s.jsx)(h.Bs.Provider, {
        value: (0, o.A)(N, I),
        children: (0, s.jsx)(d.M, { className: b.JY, children: M }),
    });
});
