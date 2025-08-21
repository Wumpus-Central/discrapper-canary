n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(879690),
    o = n(704215),
    s = n(907862),
    l = n(481060),
    c = n(206074),
    u = n(728345),
    d = n(266454),
    f = n(243778),
    _ = n(921944),
    p = n(388032),
    h = n(204794);
let m = (0, a.U)((e) => ({
        activeEntryId: null,
        setActiveEntryId: (t) => e({ activeEntryId: t }),
    })),
    g = (e) => {
        let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: a } = e,
            { data: g } = (0, u.IX)(t.extra.application_id),
            E = (0, c.q)(g, "CloudPlayPopover"),
            b = (0, d.Nj)(o.z.CLOUD_PLAY_NEW_BADGE),
            y = E && !b && n,
            { activeEntryId: O, setActiveEntryId: v } = m(),
            I = O === t.id,
            T = y && I ? [o.z.CLOUD_PLAY_POPOVER] : [],
            [S, A] = (0, f.US)(T),
            C = S === o.z.CLOUD_PLAY_POPOVER,
            N = (0, c.Z)({
                application: g,
                location: "CloudPlayDismissibleContentPopover",
            });
        i.useEffect(() => {
            y && null === O && v(t.id);
        }, [O, y, t.id, v]);
        let R = () => {
            null == N || N();
        };
        i.useEffect(
            () => () => {
                C && (A(_.L.USER_DISMISS), v(null));
            },
            [C, A, v],
        );
        let P = () => {
            A(_.L.USER_DISMISS), v(null);
        };
        return (0, r.jsx)(s.J2, {
            title: p.intl.string(p.t["+WNDtb"]),
            body: "",
            targetElementRef: a,
            shouldShow: C,
            position: "left",
            caretConfig: {
                position: "right",
                align: "center",
            },
            gradientColor: "pink",
            graphic: {
                type: "image",
                src: h.Z,
            },
            actions: [
                {
                    icon: l.v3n,
                    text: p.intl.string(p.t["jaYS/v"]),
                    onClick: R,
                },
            ],
            onRequestClose: P,
        });
    },
    E = (e) => {
        let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: i } = e;
        return (0, r.jsx)(g, {
            entry: t,
            targetElementRef: i,
            isFirstApplicationOccurrence: n,
        });
    };
