"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    a = n(353640),
    s = n(110259),
    o = n(554146),
    l = n(342494),
    u = n(397927),
    c = n(359549),
    d = n(793574),
    _ = n(688810),
    f = n(139286),
    p = n(627363),
    h = n(826673),
    m = n(379848),
    g = n(49999),
    E = n(985018),
    A = n(529071);
let I = (0, a.v)((e) => ({ activeEntryId: null, setActiveEntryId: (t) => e({ activeEntryId: t }) })),
    T = (e) => {
        let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: a } = e,
            { data: T } = (0, p.YY)(t.extra.application_id),
            { analyticsLocations: y } = (0, _.Ay)(d.A.CLOUD_PLAY_POPOVER),
            S = (0, c.A)({ application: T, analyticsLocations: y }),
            v = (0, h.JZ)(o.M.CLOUD_PLAY_NEW_BADGE),
            C = null != S && !v && n,
            { activeEntryId: b, setActiveEntryId: N } = I(),
            R = b === t.id,
            O = C && R ? [o.M.CLOUD_PLAY_POPOVER] : [],
            [D, L] = (0, m.kn)(O),
            w = D === o.M.CLOUD_PLAY_POPOVER;
        i.useEffect(() => {
            C && null === b && N(t.id);
        }, [b, C, t.id, N]);
        let x = () => {
            S?.();
        };
        i.useEffect(
            () => () => {
                w && (L(g.i.USER_DISMISS), N(null));
            },
            [w, L, N],
        );
        let [P, M] = i.useState(!1);
        i.useEffect(() => {
            w && !P && M(!0);
        }, [w, P]),
            (0, f.A)(
                {
                    name: s.ImpressionNames.CLOUD_PLAY_CTA,
                    type: s.ImpressionTypes.VIEW,
                    properties: { location_stack: y },
                },
                { disableTrack: !P },
                [P],
            );
        let k = () => {
            L(g.i.USER_DISMISS), N(null);
        };
        return (0, r.jsx)(l.AM, {
            title: E.intl.string(E.t["+WNDtV"]),
            body: E.intl.string(E.t["5QKxGI"]),
            targetElementRef: a,
            shouldShow: w,
            position: "left",
            caretConfig: { align: "center" },
            gradientColor: "pink",
            graphic: { type: "image", src: A.A },
            actions: [{ icon: u.hpF, text: E.intl.string(E.t["jaYS/h"]), onClick: x }],
            onRequestClose: k,
        });
    },
    y = (e) => {
        let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: i } = e;
        return (0, r.jsx)(T, { entry: t, targetElementRef: i, isFirstApplicationOccurrence: n });
    };
