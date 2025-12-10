n.d(t, { Z: () => v }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(663042),
    o = n(990547),
    s = n(704215),
    l = n(907862),
    c = n(481060),
    u = n(206074),
    d = n(100527),
    f = n(906732),
    p = n(213609),
    _ = n(728345),
    m = n(266454),
    h = n(243778),
    g = n(921944),
    E = n(388032),
    b = n(627261);
let y = (0, a.U)((e) => ({
        activeEntryId: null,
        setActiveEntryId: (t) => e({ activeEntryId: t }),
    })),
    O = (e) => {
        let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: a } = e,
            { data: O } = (0, _.IX)(t.extra.application_id),
            { analyticsLocations: v } = (0, f.ZP)(d.Z.CLOUD_PLAY_POPOVER),
            S = (0, u.Z)({
                application: O,
                analyticsLocations: v,
            }),
            I = (0, m.Nj)(s.z.CLOUD_PLAY_NEW_BADGE),
            T = null != S && !I && n,
            { activeEntryId: C, setActiveEntryId: A } = y(),
            N = C === t.id,
            P = T && N ? [s.z.CLOUD_PLAY_POPOVER] : [],
            [R, D] = (0, h.US)(P),
            w = R === s.z.CLOUD_PLAY_POPOVER;
        i.useEffect(() => {
            T && null === C && A(t.id);
        }, [C, T, t.id, A]);
        let x = () => {
            null == S || S();
        };
        i.useEffect(
            () => () => {
                w && (D(g.L.USER_DISMISS), A(null));
            },
            [w, D, A],
        );
        let [L, j] = i.useState(!1);
        i.useEffect(() => {
            w && !L && j(!0);
        }, [w, L]),
            (0, p.Z)(
                {
                    name: o.ImpressionNames.CLOUD_PLAY_CTA,
                    type: o.ImpressionTypes.VIEW,
                    properties: { location_stack: v },
                },
                { disableTrack: !L },
                [L],
            );
        let M = () => {
            D(g.L.USER_DISMISS), A(null);
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
            onRequestClose: M,
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
