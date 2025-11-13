n.d(t, { Z: () => v }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(191336),
    o = n(990547),
    s = n(704215),
    l = n(907862),
    c = n(481060),
    u = n(206074),
    d = n(100527),
    f = n(906732),
    _ = n(213609),
    p = n(728345),
    h = n(266454),
    m = n(243778),
    g = n(921944),
    E = n(388032),
    b = n(427760);
let y = (0, a.U)((e) => ({
        activeEntryId: null,
        setActiveEntryId: (t) => e({ activeEntryId: t }),
    })),
    O = (e) => {
        let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: a } = e,
            { data: O } = (0, p.IX)(t.extra.application_id),
            { analyticsLocations: v } = (0, f.ZP)(d.Z.CLOUD_PLAY_POPOVER),
            I = (0, u.Z)({
                application: O,
                analyticsLocations: v,
            }),
            T = (0, h.Nj)(s.z.CLOUD_PLAY_NEW_BADGE),
            S = null != I && !T && n,
            { activeEntryId: A, setActiveEntryId: C } = y(),
            N = A === t.id,
            R = S && N ? [s.z.CLOUD_PLAY_POPOVER] : [],
            [P, D] = (0, m.US)(R),
            w = P === s.z.CLOUD_PLAY_POPOVER;
        i.useEffect(() => {
            S && null === A && C(t.id);
        }, [A, S, t.id, C]);
        let x = () => {
            null == I || I();
        };
        i.useEffect(
            () => () => {
                w && (D(g.L.USER_DISMISS), C(null));
            },
            [w, D, C],
        );
        let [L, M] = i.useState(!1);
        i.useEffect(() => {
            w && !L && M(!0);
        }, [w, L]),
            (0, _.Z)(
                {
                    name: o.ImpressionNames.CLOUD_PLAY_CTA,
                    type: o.ImpressionTypes.VIEW,
                    properties: { location_stack: v },
                },
                { disableTrack: !L },
                [L],
            );
        let j = () => {
            D(g.L.USER_DISMISS), C(null);
        };
        return (0, r.jsx)(l.J2, {
            title: E.intl.string(E.t["+WNDtV"]),
            body: E.intl.string(E.t["5QKxGI"]),
            targetElementRef: a,
            shouldShow: w,
            position: "left",
            caretConfig: { align: "center" },
            gradientColor: "pink",
            graphic: {
                type: "image",
                src: b.Z,
            },
            actions: [
                {
                    icon: c.v3n,
                    text: E.intl.string(E.t["jaYS/h"]),
                    onClick: x,
                },
            ],
            onRequestClose: j,
        });
    },
    v = (e) => {
        let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: i } = e;
        return (0, r.jsx)(O, {
            entry: t,
            targetElementRef: i,
            isFirstApplicationOccurrence: n,
        });
    };
