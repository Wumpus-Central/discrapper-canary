"use strict";
n.d(t, { A: () => I });
var l = n(627968),
    i = n(64700),
    s = n(353640),
    a = n(110259),
    r = n(554146),
    o = n(43105),
    c = n(414499),
    u = n(737393),
    d = n(793574),
    h = n(688810),
    m = n(139286),
    p = n(627363),
    f = n(826673),
    g = n(932001),
    x = n(49999),
    C = n(985018);
let A = (0, s.v)((e) => ({ activeEntryId: null, setActiveEntryId: (t) => e({ activeEntryId: t }) })),
    E = (e) => {
        let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: s } = e,
            { data: E } = (0, p.YY)(t.extra.application_id),
            { analyticsLocations: I } = (0, h.Ay)(d.A.CLOUD_PLAY_POPOVER),
            y = (0, u.A)({ application: E, analyticsLocations: I }),
            v = (0, f.JZ)(r.M.CLOUD_PLAY_NEW_BADGE),
            S = null != y && !v && n,
            { activeEntryId: N, setActiveEntryId: j } = A(),
            _ = N === t.id,
            T = S && _ ? [r.M.CLOUD_PLAY_POPOVER] : [],
            [b, R] = (0, g.kn)(T),
            O = b === r.M.CLOUD_PLAY_POPOVER;
        i.useEffect(() => {
            S && null === N && j(t.id);
        }, [N, S, t.id, j]),
            i.useEffect(
                () => () => {
                    O && (R(x.i.USER_DISMISS), j(null));
                },
                [O, R, j],
            );
        let [L, w] = i.useState(!1);
        return (
            i.useEffect(() => {
                O && !L && w(!0);
            }, [O, L]),
            (0, m.A)(
                {
                    name: a.ImpressionNames.CLOUD_PLAY_CTA,
                    type: a.ImpressionTypes.VIEW,
                    properties: { location_stack: I },
                },
                { disableTrack: !L },
                [L],
            ),
            (0, l.jsx)(o.A, {
                title: C.intl.string(C.t["+WNDtV"]),
                body: C.intl.string(C.t["5QKxGI"]),
                targetElementRef: s,
                shouldShow: O,
                position: "left",
                caretConfig: { align: "center" },
                gradientColor: "pink",
                graphic: {
                    type: "image",
                    src: "https://cdn.discordapp.com/assets/content/438a409c3a1f739514e0b26faa0e4d6c41a8fa108be0d4ef6f79e0eed01d24b5.svg",
                },
                actions: [
                    {
                        icon: c.h,
                        text: C.intl.string(C.t["jaYS/h"]),
                        onClick: () => {
                            y?.();
                        },
                    },
                ],
                onRequestClose: () => {
                    R(x.i.USER_DISMISS), j(null);
                },
            })
        );
    },
    I = (e) => {
        let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: i } = e;
        return (0, l.jsx)(E, { entry: t, targetElementRef: i, isFirstApplicationOccurrence: n });
    };
