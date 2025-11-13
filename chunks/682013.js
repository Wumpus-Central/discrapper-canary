n.d(a, { default: () => h });
var e = n(951288),
    s = n(647438),
    c = n(990547),
    i = n(793030),
    r = n(481060),
    o = n(37234),
    d = n(809206),
    p = n(410030),
    u = n(100527),
    l = n(906732),
    _ = n(213609),
    L = n(1585),
    f = n(300284),
    E = n(626135),
    C = n(335131),
    b = n(981631),
    k = n(388032),
    y = n(890767),
    g = n(480443);
function h(t) {
    let { transitionState: a, onClose: n, skuId: h } = t,
        { analyticsLocations: m } = (0, l.ZP)(u.Z.COLLECTIBLES_EXPIRY_MODAL),
        I = (0, r.wjy)((0, p.ZP)()),
        O = (0, f.Z)({ analyticsLocations: m }),
        Z = s.useRef(null);
    s.useEffect(
        () => (
            (0, d.Mn)({ avatarDecoration: null }),
            () => {
                E.default.track(b.rMx.COLLECTIBLES_EXPIRY_MODAL_CLOSED, {
                    reason: Z.current,
                    sku_id: h,
                });
            }
        ),
        [h],
    ),
        (0, _.Z)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.COLLECTIBLES_EXPIRY_MODAL,
            properties: {
                location_stack: m,
                sku_id: h,
            },
        });
    let M = async () => {
            (Z.current = "change_avatar_decoration"), await n(), (0, o.xf)(), O(), (0, L.ps)({ analyticsLocations: m });
        },
        x = async () => {
            (Z.current = "go_to_shop"),
                await n(),
                (0, C.mK)({
                    analyticsLocations: m,
                    analyticsSource: u.Z.COLLECTIBLES_EXPIRY_MODAL,
                });
        },
        D = async () => {
            (Z.current = "tap_close_button"), await n();
        },
        S = [
            {
                text: k.intl.string(k.t["x8T+k9"]),
                variant: "secondary",
                onClick: M,
            },
            {
                text: k.intl.string(k.t.fmqMEd),
                variant: "primary",
                onClick: x,
            },
        ];
    return (0, e.jsx)(i.ExpressiveModal, {
        graphic: {
            type: "image",
            src: I ? y.Z : g.Z,
        },
        title: k.intl.string(k.t.xz81oy),
        subtitle: k.intl.string(k.t.Vrbnnu),
        onClose: D,
        transitionState: a,
        actions: S,
    });
}
