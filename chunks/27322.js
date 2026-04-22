"use strict";
n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(353640),
    r = n(110259),
    a = n(554146),
    o = n(265486),
    c = n(414499),
    u = n(359549),
    d = n(793574),
    h = n(688810),
    m = n(139286),
    p = n(627363),
    f = n(826673),
    g = n(932001),
    _ = n(49999),
    x = n(985018),
    A = n(529071);
let C = (0, s.v)((e) => ({ activeEntryId: null, setActiveEntryId: (t) => e({ activeEntryId: t }) })),
    E = (e) => {
        let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: s } = e,
            { data: E } = (0, p.YY)(t.extra.application_id),
            { analyticsLocations: I } = (0, h.Ay)(d.A.CLOUD_PLAY_POPOVER),
            v = (0, u.A)({ application: E, analyticsLocations: I }),
            y = (0, f.JZ)(a.M.CLOUD_PLAY_NEW_BADGE),
            S = null != v && !y && n,
            { activeEntryId: b, setActiveEntryId: N } = C(),
            T = b === t.id,
            j = S && T ? [a.M.CLOUD_PLAY_POPOVER] : [],
            [R, w] = (0, g.kn)(j),
            L = R === a.M.CLOUD_PLAY_POPOVER;
        l.useEffect(() => {
            S && null === b && N(t.id);
        }, [b, S, t.id, N]),
            l.useEffect(
                () => () => {
                    L && (w(_.i.USER_DISMISS), N(null));
                },
                [L, w, N],
            );
        let [M, k] = l.useState(!1);
        return (
            l.useEffect(() => {
                L && !M && k(!0);
            }, [L, M]),
            (0, m.A)(
                {
                    name: r.ImpressionNames.CLOUD_PLAY_CTA,
                    type: r.ImpressionTypes.VIEW,
                    properties: { location_stack: I },
                },
                { disableTrack: !M },
                [M],
            ),
            (0, i.jsx)(o.A, {
                title: x.intl.string(x.t["+WNDtV"]),
                body: x.intl.string(x.t["5QKxGI"]),
                targetElementRef: s,
                shouldShow: L,
                position: "left",
                caretConfig: { align: "center" },
                gradientColor: "pink",
                graphic: { type: "image", src: A.A },
                actions: [
                    {
                        icon: c.h,
                        text: x.intl.string(x.t["jaYS/h"]),
                        onClick: () => {
                            v?.();
                        },
                    },
                ],
                onRequestClose: () => {
                    w(_.i.USER_DISMISS), N(null);
                },
            })
        );
    },
    I = (e) => {
        let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: l } = e;
        return (0, i.jsx)(E, { entry: t, targetElementRef: l, isFirstApplicationOccurrence: n });
    };
