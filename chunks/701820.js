a.d(i, { default: () => m });
var e = a(255367),
    n = a(73800),
    s = a(82659),
    r = a(481060),
    c = a(86419),
    l = a(817053),
    o = a(388032),
    d = a(713620);
function m(t) {
    let { game: i, widgetType: a, userId: m, onClose: x, transitionState: p } = t,
        u = n.useCallback(() => {
            (0, c.$b)(a, i.applicationId), x();
        }, [x, a, i.applicationId]);
    return (0, e.jsxs)(s.Modal, {
        transitionState: p,
        onClose: x,
        title: o.intl.string(o.t.HUvyDQ),
        subtitle: o.intl.string(o.t.ILbCi4),
        actions: [
            {
                variant: "secondary",
                text: o.intl.string(o.t["ETE/oK"]),
                onClick: x,
            },
            {
                variant: "critical-primary",
                text: o.intl.string(o.t.HUvyDQ),
                onClick: u,
            },
        ],
        children: [
            (0, e.jsxs)("div", {
                className: d.gameInfo,
                children: [
                    (0, e.jsx)(l.Z, {
                        applicationId: i.applicationId,
                        userId: m,
                        imageSrc: i.imageSrc,
                        gameName: i.gameName,
                        disableInteraction: !0,
                    }),
                    (0, e.jsx)(r.Text, {
                        color: "text-default",
                        variant: "text-md/medium",
                        children: i.gameName,
                    }),
                ],
            }),
            (0, e.jsx)("div", {
                className: d.hintText,
                children: (0, e.jsx)(r.Text, {
                    color: "text-secondary",
                    variant: "text-sm/normal",
                    children: o.intl.string(o.t.bQNGeX),
                }),
            }),
        ],
    });
}
