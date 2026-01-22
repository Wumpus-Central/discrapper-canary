n.d(t, { A: () => A }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(353640),
    s = n(110259),
    o = n(554146),
    l = n(342494),
    c = n(397927),
    u = n(359549),
    d = n(793574),
    f = n(688810),
    p = n(139286),
    _ = n(627363),
    h = n(826673),
    m = n(379848),
    g = n(49999),
    E = n(985018),
    b = n(529071);
let y = (0, a.v)((e) => ({
        activeEntryId: null,
        setActiveEntryId: (t) => e({ activeEntryId: t }),
    })),
    O = (e) => {
        let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: a } = e,
            { data: O } = (0, _.YY)(t.extra.application_id),
            { analyticsLocations: A } = (0, f.Ay)(d.A.CLOUD_PLAY_POPOVER),
            v = (0, u.A)({
                application: O,
                analyticsLocations: A,
            }),
            S = (0, h.JZ)(o.M.CLOUD_PLAY_NEW_BADGE),
            I = null != v && !S && n,
            { activeEntryId: T, setActiveEntryId: C } = y(),
            N = T === t.id,
            R = I && N ? [o.M.CLOUD_PLAY_POPOVER] : [],
            [w, P] = (0, m.kn)(R),
            D = w === o.M.CLOUD_PLAY_POPOVER;
        i.useEffect(() => {
            I && null === T && C(t.id);
        }, [T, I, t.id, C]);
        let x = () => {
            null == v || v();
        };
        i.useEffect(
            () => () => {
                D && (P(g.i.USER_DISMISS), C(null));
            },
            [D, P, C],
        );
        let [L, j] = i.useState(!1);
        i.useEffect(() => {
            D && !L && j(!0);
        }, [D, L]),
            (0, p.A)(
                {
                    name: s.ImpressionNames.CLOUD_PLAY_CTA,
                    type: s.ImpressionTypes.VIEW,
                    properties: { location_stack: A },
                },
                { disableTrack: !L },
                [L],
            );
        let M = () => {
            P(g.i.USER_DISMISS), C(null);
        };
        return (0, r.jsx)(l.AM, {
            title: E.intl.string(E.t["+WNDtV"]),
            body: E.intl.string(E.t["5QKxGI"]),
            targetElementRef: a,
            shouldShow: D,
            position: "left",
            caretConfig: { align: "center" },
            gradientColor: "pink",
            graphic: {
                type: "image",
                src: b.A,
            },
            actions: [
                {
                    icon: c.hpF,
                    text: E.intl.string(E.t["jaYS/h"]),
                    onClick: x,
                },
            ],
            onRequestClose: M,
        });
    },
    A = (e) => {
        let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: i } = e;
        return (0, r.jsx)(O, {
            entry: t,
            targetElementRef: i,
            isFirstApplicationOccurrence: n,
        });
    };
