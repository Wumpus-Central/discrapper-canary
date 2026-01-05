n.d(t, { Z: () => O }), n(388685);
var r = n(54381),
    i = n(636977),
    a = n(704215),
    o = n(692547),
    s = n(481060),
    l = n(206074),
    c = n(100527),
    u = n(906732),
    d = n(728345),
    f = n(243778),
    p = n(633181),
    _ = n(584057),
    m = n(483517),
    h = n(652853),
    g = n(994102),
    E = n(671955),
    b = n(388032),
    y = n(693155);
function O(e) {
    var t;
    let { applicationId: n, onAction: O, onClose: v, activity: S } = e,
        { analyticsLocations: I } = (0, u.ZP)(c.Z.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION),
        { data: T } = (0, d.IX)(n),
        C = (0, l.q)(T),
        { themeType: A } = (0, h.z)(),
        N = A === E.l.MODAL || A === E.l.MODAL_V2,
        P = (0, _.L)(null != (t = null == S ? void 0 : S.application_id) ? t : n),
        R = C && N && null != T && !P,
        w = R ? [a.z.CLOUD_PLAY_NEW_BADGE] : [],
        [D] = (0, f.US)(w);
    if (!R) return null;
    let x = (e) =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(m.Z, { className: y.cloudPlayDivider }),
                (0, r.jsxs)("div", {
                    ref: (t) => {
                        e.current = t;
                    },
                    className: y.cloudPlaySection,
                    children: [
                        (0, r.jsxs)("div", {
                            className: y.cloudPlaySectionTextContainer,
                            children: [
                                D === a.z.CLOUD_PLAY_NEW_BADGE &&
                                    (0, r.jsx)(s.IGR, {
                                        text: b.intl.string(b.t.y2b7CA),
                                        color: o.Z.colors.BACKGROUND_BRAND.css,
                                    }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-xs/medium",
                                    children: b.intl.string(b.t.IQjdmV),
                                }),
                            ],
                        }),
                        (0, r.jsx)(g.Z, {
                            application: T,
                            onAction: O,
                            onClose: v,
                            analyticsLocations: I,
                        }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)(p.Z, {
        applicationId: n,
        questContent: i.j.USER_PROFILE_ACTIVITY,
        children: x,
    });
}
