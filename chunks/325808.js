n.d(t, { Z: () => j });
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(846027),
    d = n(230711),
    u = n(825209),
    h = n(906732),
    m = n(313201),
    g = n(131951),
    x = n(358085),
    _ = n(962100),
    p = n(981631),
    E = n(388032),
    C = n(453526),
    N = n(483938);
let f = !x.isPlatformEmbedded,
    I = (0, m.hQ)();
function T(e) {
    return e >= 1000 ? ((e /= 1000), ''.concat(e.toFixed(2), 's')) : ''.concat(e.toFixed(0), ' ms');
}
function S(e) {
    let t,
        { inputMode: n } = e,
        { shortcut: s, delay: l } = (0, a.cj)([g.Z], () => g.Z.getModeOptions());
    return (
        (t =
            x.isPlatformEmbedded || n !== p.pM4.PUSH_TO_TALK
                ? (0, i.jsx)(o.R94, {
                      type: o.R94.Types.DESCRIPTION,
                      className: r()(C.pttToolsMessage, N.marginBottom8),
                      children: E.intl.format(E.t.HVvn5e, { onClick: () => d.Z.setSection(p.oAB.KEYBINDS) })
                  })
                : (0, i.jsx)(o.R94, {
                      type: o.R94.Types.DESCRIPTION,
                      className: r()(C.pttToolsMessage, C.pttToolsWarning, N.marginBottom8),
                      children: E.intl.format(E.t.zvMPOT, { onDownloadClick: () => (0, _.y)('Help Text PTT') })
                  })),
        (0, i.jsxs)('div', {
            className: C.pttTools,
            children: [
                (0, i.jsxs)('div', {
                    className: C.pttToolsFlex,
                    children: [
                        (0, i.jsx)('div', {
                            className: C.column,
                            children: (0, i.jsx)(o.xJW, {
                                title: E.intl.string(E.t.YkDjVF),
                                children: (0, i.jsx)(u.Z, {
                                    defaultValue: s,
                                    onChange: (e) => c.Z.setMode(n, { shortcut: e })
                                })
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: C.column,
                            children: (0, i.jsxs)(o.xJW, {
                                children: [
                                    (0, i.jsx)(o.vwX, {
                                        id: I,
                                        tag: o.RB0.H5,
                                        className: N.marginBottom8,
                                        children: E.intl.string(E.t.y0ShVl)
                                    }),
                                    (0, i.jsx)(o.iRW, {
                                        initialValue: l,
                                        onValueChange: (e) => c.Z.setMode(n, { delay: e }),
                                        onValueRender: T,
                                        maxValue: p.qhL,
                                        'aria-labelledby': I
                                    })
                                ]
                            })
                        })
                    ]
                }),
                t
            ]
        })
    );
}
function j() {
    let { analyticsLocations: e } = (0, h.ZP)(),
        t = (0, a.e7)([g.Z], () => g.Z.getMode()),
        l = [
            {
                value: p.pM4.VOICE_ACTIVITY,
                name: E.intl.string(E.t.cHCEOD)
            },
            {
                value: p.pM4.PUSH_TO_TALK,
                name: f ? E.intl.string(E.t['1AINrK']) : E.intl.string(E.t.Q8gkVF)
            }
        ],
        r = s.useCallback(
            (t) => {
                let { value: s } = t;
                s === p.pM4.PUSH_TO_TALK &&
                    f &&
                    (0, o.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 468026));
                        return (t) =>
                            (0, i.jsx)(e, {
                                title: E.intl.string(E.t.Kdt0GR),
                                confirmText: E.intl.string(E.t['1WjMbG']),
                                cancelText: E.intl.string(E.t.BddRzc),
                                onConfirm: () => (0, _.y)('PTT Limited Modal'),
                                body: E.intl.string(E.t.NIozvr),
                                ...t
                            });
                    }),
                    c.Z.setMode(s, void 0, void 0, { analyticsLocations: e });
            },
            [e]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.xJW, {
                title: E.intl.string(E.t['pS+K2N']),
                className: N.marginBottom20,
                children: (0, i.jsx)(o.FXm, {
                    onChange: r,
                    options: l,
                    value: t
                })
            }),
            t === p.pM4.PUSH_TO_TALK && (0, i.jsx)(S, { inputMode: t })
        ]
    });
}
