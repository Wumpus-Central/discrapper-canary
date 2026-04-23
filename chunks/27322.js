"use strict";
n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    s = n(353640),
    a = n(110259),
    o = n(554146),
    l = n(265486),
    u = n(414499),
    c = n(359549),
    d = n(793574),
    _ = n(688810),
    f = n(139286),
    p = n(627363),
    h = n(826673),
    E = n(932001),
    m = n(49999),
    g = n(985018),
    A = n(529071);
let I = (0, s.v)((e) => ({ activeEntryId: null, setActiveEntryId: (t) => e({ activeEntryId: t }) })),
    T = (e) => {
        let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: s } = e,
            { data: T } = (0, p.YY)(t.extra.application_id),
            { analyticsLocations: S } = (0, _.Ay)(d.A.CLOUD_PLAY_POPOVER),
            y = (0, c.A)({ application: T, analyticsLocations: S }),
            N = (0, h.JZ)(o.M.CLOUD_PLAY_NEW_BADGE),
            v = null != y && !N && n,
            { activeEntryId: C, setActiveEntryId: O } = I(),
            R = C === t.id,
            b = v && R ? [o.M.CLOUD_PLAY_POPOVER] : [],
            [D, L] = (0, E.kn)(b),
            w = D === o.M.CLOUD_PLAY_POPOVER;
        i.useEffect(() => {
            v && null === C && O(t.id);
        }, [C, v, t.id, O]),
            i.useEffect(
                () => () => {
                    w && (L(m.i.USER_DISMISS), O(null));
                },
                [w, L, O],
            );
        let [M, P] = i.useState(!1);
        return (
            i.useEffect(() => {
                w && !M && P(!0);
            }, [w, M]),
            (0, f.A)(
                {
                    name: a.ImpressionNames.CLOUD_PLAY_CTA,
                    type: a.ImpressionTypes.VIEW,
                    properties: { location_stack: S },
                },
                { disableTrack: !M },
                [M],
            ),
            (0, r.jsx)(l.A, {
                title: g.intl.string(g.t["+WNDtV"]),
                body: g.intl.string(g.t["5QKxGI"]),
                targetElementRef: s,
                shouldShow: w,
                position: "left",
                caretConfig: { align: "center" },
                gradientColor: "pink",
                graphic: { type: "image", src: A.A },
                actions: [
                    {
                        icon: u.h,
                        text: g.intl.string(g.t["jaYS/h"]),
                        onClick: () => {
                            y?.();
                        },
                    },
                ],
                onRequestClose: () => {
                    L(m.i.USER_DISMISS), O(null);
                },
            })
        );
    },
    S = (e) => {
        let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: i } = e;
        return (0, r.jsx)(T, { entry: t, targetElementRef: i, isFirstApplicationOccurrence: n });
    };
