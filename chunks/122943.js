n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    c = n(863439),
    u = n(465364),
    d = n(448368),
    p = n(302031),
    f = n(253932),
    h = n(576705),
    A = n(994500),
    g = n(978914),
    m = n(652215),
    b = n(838541),
    _ = n(985018),
    E = n(536791),
    O = n(206314);
let y = i.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: l, message: y } = (0, g.I)(t),
        { isBlocked: I, isIgnored: v } = (0, s.cf)(
            [A.A],
            () => ({
                isBlocked: null != y && A.A.isBlockedForMessage(y),
                isIgnored: null != y && A.A.isIgnoredForMessage(y),
            }),
            [y],
        ),
        S = (0, s.bG)([h.A], () => h.A.can(m.xBc.MANAGE_MESSAGES, t)),
        C = f.gs.useSetting(),
        { content: N } = i.useMemo(
            () =>
                (null == y ? void 0 : y.content) != null && "" !== y.content
                    ? (0, u.Ay)(y, {
                          formatInline: !0,
                          noStyleAndInteraction: !0,
                      })
                    : { content: null },
            [y],
        ),
        T = null;
    if (l)
        T = (0, r.jsx)(o.Text, {
            className: E.G4,
            variant: "text-sm/normal",
            color: "text-muted",
            children: _.intl.string(_.t.BZHld2),
        });
    else if (n)
        if (null != y && I)
            T = (0, r.jsx)(o.Text, {
                className: E.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: _.intl.string(_.t["WPe+xL"]),
            });
        else if (null != y && v)
            T = (0, r.jsx)(o.Text, {
                className: E.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: _.intl.string(_.t.uxrh1O),
            });
        else if (null != y) {
            let { contentPlaceholder: e, renderedContent: t } = (0, d.o)(y, N, I, v, a()(E.BK, O.tZ), {
                leadingIconClass: E.AF,
                trailingIconClass: E.AF,
                iconSize: b.eJ,
            });
            T =
                null != t
                    ? (0, r.jsx)(o.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: E.BK,
                          children: t,
                      })
                    : (0, r.jsx)(o.Text, {
                          tag: "span",
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: E.G4,
                          children: e,
                      });
        } else
            T = (0, r.jsx)(o.Text, {
                className: E.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: _.intl.string(_.t["0KfDxM"]),
            });
    else T = null;
    return (0, r.jsx)(p.Bs.Provider, {
        value: (0, c.A)(C, S),
        children: (0, r.jsx)(o.M1G, {
            className: E.JY,
            children: T,
        }),
    });
});
