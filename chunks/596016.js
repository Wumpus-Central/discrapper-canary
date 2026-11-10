var n = i(477900),
    s = i(582128),
    r = i(613412),
    l = i(855986),
    a = i(189213),
    o = i(858899),
    c = i(139286),
    d = i(871162),
    u = i(415299),
    p = i(897661),
    f = i(30925),
    A = i(287809),
    v = i(659373),
    I = i(455207),
    m = i(211824),
    y = i(701256),
    C = i(792996),
    g = i(292560);
let h = { overrideSettings: !0 };
function k() {
    (0, o.P0)({ text: C.intl.string(C.t.F8FvUy), variant: "critical" });
}
function x(t) {
    let { user: e, transitionState: i, onClose: l } = t,
        o = (0, p.b)(e),
        { isEnrolling: A, applyCampaignDisplayNameStyle: x } = (0, v.K)(e, k);
    (0, c.A)(
        {
            type: r.ImpressionTypes.POPOUT,
            name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL,
            properties: { entry_point: u.b.PROFILE_EDITOR },
        },
        { trackOnInitialLoad: !0 },
    );
    let b = s.useCallback(async () => {
        (await x()) && l();
    }, [x, l]);
    return (0, n.jsx)(d.l.Provider, {
        value: h,
        children: (0, n.jsx)(a.a, {
            transitionState: i,
            onClose: l,
            title: C.intl.string(y.default.LyorKl),
            subtitle: (0, I.R)(),
            actions: [
                { text: C.intl.string(C.t["ETE/oC"]), variant: "secondary", onClick: l },
                { text: C.intl.string(C.t["1Qm822"]), variant: "primary", onClick: b, loading: A },
            ],
            children: (0, n.jsx)("div", {
                className: g.Q,
                children: (0, n.jsx)(f.A, {
                    user: e,
                    guild: void 0,
                    displayName: o,
                    selectedFontId: m.AA.fontId,
                    selectedEffectId: m.AA.effectId,
                    selectedColors: m.AA.colors,
                    compact: !0,
                }),
            }),
        }),
    });
}
i.d(
    e,
    {},
    {
        default: function (t) {
            let e = (0, l.bG)([A.default], () => A.default.getCurrentUser());
            return null == e ? null : (0, n.jsx)(x, { ...t, user: e });
        },
    },
);
