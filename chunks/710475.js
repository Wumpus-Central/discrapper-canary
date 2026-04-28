"use strict";
n.d(t, { A: () => E });
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
    _ = n(49999),
    x = n(985018);
let C = (0, s.v)((e) => ({ activeEntryId: null, setActiveEntryId: (t) => e({ activeEntryId: t }) })),
    A = (e) => {
        let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: s } = e,
            { data: A } = (0, p.YY)(t.extra.application_id),
            { analyticsLocations: E } = (0, h.Ay)(d.A.CLOUD_PLAY_POPOVER),
            I = (0, u.A)({ application: A, analyticsLocations: E }),
            v = (0, f.JZ)(r.M.CLOUD_PLAY_NEW_BADGE),
            y = null != I && !v && n,
            { activeEntryId: b, setActiveEntryId: S } = C(),
            N = b === t.id,
            j = y && N ? [r.M.CLOUD_PLAY_POPOVER] : [],
            [T, w] = (0, g.kn)(j),
            R = T === r.M.CLOUD_PLAY_POPOVER;
        i.useEffect(() => {
            y && null === b && S(t.id);
        }, [b, y, t.id, S]),
            i.useEffect(
                () => () => {
                    R && (w(_.i.USER_DISMISS), S(null));
                },
                [R, w, S],
            );
        let [L, k] = i.useState(!1);
        return (
            i.useEffect(() => {
                R && !L && k(!0);
            }, [R, L]),
            (0, m.A)(
                {
                    name: a.ImpressionNames.CLOUD_PLAY_CTA,
                    type: a.ImpressionTypes.VIEW,
                    properties: { location_stack: E },
                },
                { disableTrack: !L },
                [L],
            ),
            (0, l.jsx)(o.A, {
                title: x.intl.string(x.t["+WNDtV"]),
                body: x.intl.string(x.t["5QKxGI"]),
                targetElementRef: s,
                shouldShow: R,
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
                        text: x.intl.string(x.t["jaYS/h"]),
                        onClick: () => {
                            I?.();
                        },
                    },
                ],
                onRequestClose: () => {
                    w(_.i.USER_DISMISS), S(null);
                },
            })
        );
    },
    E = (e) => {
        let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: i } = e;
        return (0, l.jsx)(A, { entry: t, targetElementRef: i, isFirstApplicationOccurrence: n });
    };
