n.d(t, { A: () => x }), n(321073);
var i = n(627968),
    a = n(64700),
    l = n(477782),
    s = n(861672),
    r = n(265872),
    o = n(939249),
    c = n(834730),
    d = n(183555),
    u = n(735321),
    _ = n(394245),
    g = n(985018),
    f = n(767070);
let m = a.memo(function (e) {
    let { currentTags: t, onTagSelect: n, onNoneSelect: a, onClose: r } = e;
    return (0, i.jsx)(s.W, {
        "data-menu-migrated-auto": !0,
        navId: "widget-game-tags",
        "aria-label": g.intl.string(g.t.r6EJOu),
        onClose: r,
        onSelect: () => {},
        className: f.VS,
        children: Object.entries(_.Pb).map((e) => {
            let s,
                [r, o] = e,
                c =
                    ((s = []),
                    o.type === _.me.RADIO &&
                        s.push(
                            (0, i.jsx)(
                                l.iD,
                                {
                                    id: `${r}-none`,
                                    group: r,
                                    label: g.intl.string(g.t.PoWNfe),
                                    checked: !o.tags.some((e) => t.includes(e)),
                                    action: () => a(o.tags),
                                },
                                "none",
                            ),
                        ),
                    o.tags.forEach((e) => {
                        let a = _.PT[e];
                        null != a &&
                            (o.type === _.me.RADIO
                                ? s.push(
                                      (0, i.jsx)(
                                          l.iD,
                                          {
                                              id: e,
                                              group: r,
                                              label: a.getText(),
                                              checked: t.includes(e),
                                              action: () => n(e, !0),
                                          },
                                          e,
                                      ),
                                  )
                                : s.push(
                                      (0, i.jsx)(
                                          l.sL,
                                          { id: e, label: a.getText(), checked: t.includes(e), action: () => n(e, !1) },
                                          e,
                                      ),
                                  ));
                    }),
                    s);
            return (0, i.jsx)(l.rX, { label: o.getLabel(), children: c }, r);
        }),
    });
});
function x(e) {
    let { tags: t, widgetType: n, applicationId: l, ref: s } = e,
        x = (0, a.useRef)(null),
        { trackUserProfileEditAction: p } = (0, d.NJ)(),
        I = (0, a.useMemo)(() => (null != t ? t : []), [t]),
        A = (0, a.useCallback)(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = new Set(I);
                if (t) {
                    let t = Object.values(_.Pb).find((t) => t.tags.includes(e));
                    null != t &&
                        (t.tags.forEach((e) => {
                            i.delete(e);
                        }),
                        i.add(e),
                        p({ action: "TAG_ADDED", widgetEdited: n, gameId: l }));
                } else
                    i.has(e)
                        ? (i.delete(e), p({ action: "TAG_REMOVED", widgetEdited: n, gameId: l }))
                        : (i.add(e), p({ action: "TAG_ADDED", widgetEdited: n, gameId: l }));
                (0, u.s1)(n, l, Array.from(i));
            },
            [I, p, n, l],
        ),
        h = (0, a.useCallback)(
            (e) => {
                let t = new Set(I);
                e.forEach((e) => {
                    t.delete(e);
                }),
                    p({ action: "TAG_REMOVED", widgetEdited: n, gameId: l }),
                    (0, u.s1)(n, l, Array.from(t));
            },
            [I, p, n, l],
        );
    return (0, i.jsx)(r.Y, {
        targetElementRef: x,
        position: "right",
        align: "top",
        onRequestOpen: () => {
            p({ action: "PRESS_ADD_TAG", widgetEdited: n });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(m, { currentTags: I, onTagSelect: A, onNoneSelect: h, onClose: t });
        },
        children: (e) =>
            (0, i.jsx)("div", {
                ref: (e) => (
                    null != e && ((x.current = e), (s.current = e)),
                    () => {
                        (x.current = null), (s.current = null);
                    }
                ),
                children: (0, i.jsx)(o.D, {
                    ...e,
                    className: f.c9,
                    "aria-label": g.intl.string(g.t.r6EJOu),
                    children: (0, i.jsx)(c.E, {
                        variant: "text-xxs/medium",
                        color: "none",
                        children: g.intl.string(g.t.fZSejy),
                    }),
                }),
            }),
    });
}
