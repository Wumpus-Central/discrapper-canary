"use strict";
n.d(t, { A: () => T });
var i = n(627968),
    r = n(64700),
    s = n(353640),
    a = n(110259),
    o = n(554146),
    l = n(43105),
    d = n(414499),
    _ = n(737393),
    u = n(793574),
    c = n(688810),
    E = n(139286),
    h = n(627363),
    m = n(826673),
    f = n(932001),
    g = n(49999),
    p = n(985018);
let A = (0, s.v)((e) => ({ activeEntryId: null, setActiveEntryId: (t) => e({ activeEntryId: t }) })),
    I = (e) => {
        let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: s } = e,
            { data: I } = (0, h.YY)(t.extra.application_id),
            { analyticsLocations: T } = (0, c.Ay)(u.A.CLOUD_PLAY_POPOVER),
            S = (0, _.A)({ application: I, analyticsLocations: T }),
            N = (0, m.JZ)(o.M.CLOUD_PLAY_NEW_BADGE),
            C = null != S && !N && n,
            { activeEntryId: R, setActiveEntryId: O } = A(),
            y = R === t.id,
            v = C && y ? [o.M.CLOUD_PLAY_POPOVER] : [],
            [D, L] = (0, f.kn)(v),
            b = D === o.M.CLOUD_PLAY_POPOVER;
        r.useEffect(() => {
            C && null === R && O(t.id);
        }, [R, C, t.id, O]),
            r.useEffect(
                () => () => {
                    b && (L(g.i.USER_DISMISS), O(null));
                },
                [b, L, O],
            );
        let [w, P] = r.useState(!1);
        return (
            r.useEffect(() => {
                b && !w && P(!0);
            }, [b, w]),
            (0, E.A)(
                {
                    name: a.ImpressionNames.CLOUD_PLAY_CTA,
                    type: a.ImpressionTypes.VIEW,
                    properties: { location_stack: T },
                },
                { disableTrack: !w },
                [w],
            ),
            (0, i.jsx)(l.A, {
                title: p.intl.string(p.t["+WNDtV"]),
                body: p.intl.string(p.t["5QKxGI"]),
                targetElementRef: s,
                shouldShow: b,
                position: "left",
                caretConfig: { align: "center" },
                gradientColor: "pink",
                graphic: {
                    type: "image",
                    src: "https://cdn.discordapp.com/assets/content/438a409c3a1f739514e0b26faa0e4d6c41a8fa108be0d4ef6f79e0eed01d24b5.svg",
                },
                actions: [
                    {
                        icon: d.h,
                        text: p.intl.string(p.t["jaYS/h"]),
                        onClick: () => {
                            S?.();
                        },
                    },
                ],
                onRequestClose: () => {
                    L(g.i.USER_DISMISS), O(null);
                },
            })
        );
    },
    T = (e) => {
        let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: r } = e;
        return (0, i.jsx)(I, { entry: t, targetElementRef: r, isFirstApplicationOccurrence: n });
    };
