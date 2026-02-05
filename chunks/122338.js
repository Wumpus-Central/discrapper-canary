n.d(t, { A: () => g }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(183555),
    s = n(735321),
    o = n(394245),
    d = n(985018),
    c = n(542467);
let u = l.memo(function (e) {
    let { currentTags: t, onTagSelect: n, onNoneSelect: l, onClose: r } = e;
    return (0, i.jsx)(a.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "widget-game-tags",
        "aria-label": d.intl.string(d.t.r6EJOu),
        onClose: r,
        onSelect: () => {},
        className: c.VS,
        children: Object.entries(o.Pb).map((e) => {
            let r,
                [s, c] = e,
                u =
                    ((r = []),
                    c.type === o.me.RADIO &&
                        r.push(
                            (0, i.jsx)(
                                a.iDA,
                                {
                                    id: `${s}-none`,
                                    group: s,
                                    label: d.intl.string(d.t.PoWNfe),
                                    checked: !c.tags.some((e) => t.includes(e)),
                                    action: () => l(c.tags),
                                },
                                "none",
                            ),
                        ),
                    c.tags.forEach((e) => {
                        let l = o.PT[e];
                        null != l &&
                            (c.type === o.me.RADIO
                                ? r.push(
                                      (0, i.jsx)(
                                          a.iDA,
                                          {
                                              id: e,
                                              group: s,
                                              label: l.getText(),
                                              checked: t.includes(e),
                                              action: () => n(e, !0),
                                          },
                                          e,
                                      ),
                                  )
                                : r.push(
                                      (0, i.jsx)(
                                          a.sLh,
                                          { id: e, label: l.getText(), checked: t.includes(e), action: () => n(e, !1) },
                                          e,
                                      ),
                                  ));
                    }),
                    r);
            return (0, i.jsx)(a.rXV, { label: c.getLabel(), children: u }, s);
        }),
    });
});
function g(e) {
    let { tags: t, widgetType: n, applicationId: g, ref: m } = e,
        x = (0, l.useRef)(null),
        { trackUserProfileEditAction: f } = (0, r.NJ)(),
        h = (0, l.useMemo)(() => (null != t ? t : []), [t]),
        p = (0, l.useCallback)(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = new Set(h);
                if (t) {
                    let t = Object.values(o.Pb).find((t) => t.tags.includes(e));
                    null != t &&
                        (t.tags.forEach((e) => {
                            i.delete(e);
                        }),
                        i.add(e),
                        f({ action: "TAG_ADDED", widgetEdited: n, gameId: g }));
                } else
                    i.has(e)
                        ? (i.delete(e), f({ action: "TAG_REMOVED", widgetEdited: n, gameId: g }))
                        : (i.add(e), f({ action: "TAG_ADDED", widgetEdited: n, gameId: g }));
                (0, s.s1)(n, g, Array.from(i));
            },
            [h, f, n, g],
        ),
        _ = (0, l.useCallback)(
            (e) => {
                let t = new Set(h);
                e.forEach((e) => {
                    t.delete(e);
                }),
                    f({ action: "TAG_REMOVED", widgetEdited: n, gameId: g }),
                    (0, s.s1)(n, g, Array.from(t));
            },
            [h, f, n, g],
        );
    return (0, i.jsx)(a.YNO, {
        targetElementRef: x,
        position: "right",
        align: "top",
        onRequestOpen: () => {
            f({ action: "PRESS_ADD_TAG", widgetEdited: n });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(u, { currentTags: h, onTagSelect: p, onNoneSelect: _, onClose: t });
        },
        children: (e) =>
            (0, i.jsx)("div", {
                ref: (e) => (
                    null != e && ((x.current = e), (m.current = e)),
                    () => {
                        (x.current = null), (m.current = null);
                    }
                ),
                children: (0, i.jsx)(a.DUT, {
                    ...e,
                    className: c.c9,
                    "aria-label": d.intl.string(d.t.r6EJOu),
                    children: (0, i.jsx)(a.Text, {
                        variant: "text-xxs/medium",
                        color: "none",
                        children: d.intl.string(d.t.fZSejy),
                    }),
                }),
            }),
    });
}
