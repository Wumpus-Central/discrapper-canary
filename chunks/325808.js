n.d(t, {
    Z: function () {
        return v;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(442837),
    o = n(481060),
    c = n(846027),
    d = n(230711),
    u = n(825209),
    m = n(906732),
    g = n(600164),
    h = n(313201),
    p = n(131951),
    x = n(358085),
    f = n(962100),
    _ = n(981631),
    E = n(388032),
    C = n(973936),
    T = n(232186);
let S = !x.isPlatformEmbedded,
    b = (0, h.hQ)();
function I(e) {
    return e >= 1000 ? ((e /= 1000), ''.concat(e.toFixed(2), 's')) : ''.concat(e.toFixed(0), ' ms');
}
function N(e) {
    let t,
        { inputMode: n } = e,
        { shortcut: s, delay: r } = (0, l.cj)([p.Z], () => p.Z.getModeOptions());
    return (
        (t =
            x.isPlatformEmbedded || n !== _.pM4.PUSH_TO_TALK
                ? (0, i.jsx)(o.FormText, {
                      type: o.FormText.Types.DESCRIPTION,
                      className: a()(C.pttToolsMessage, T.marginBottom8),
                      children: E.intl.format(E.t.HVvn5e, { onClick: () => d.Z.setSection(_.oAB.KEYBINDS) })
                  })
                : (0, i.jsx)(o.FormText, {
                      type: o.FormText.Types.DESCRIPTION,
                      className: a()(C.pttToolsMessage, C.pttToolsWarning, T.marginBottom8),
                      children: E.intl.format(E.t.zvMPOT, { onDownloadClick: () => (0, f.y)('Help Text PTT') })
                  })),
        (0, i.jsxs)('div', {
            className: C.pttTools,
            children: [
                (0, i.jsxs)(g.Z, {
                    children: [
                        (0, i.jsx)(g.Z.Child, {
                            basis: '50%',
                            children: (0, i.jsx)(o.FormItem, {
                                title: E.intl.string(E.t.YkDjVF),
                                children: (0, i.jsx)(u.Z, {
                                    defaultValue: s,
                                    onChange: (e) => c.Z.setMode(n, { shortcut: e })
                                })
                            })
                        }),
                        (0, i.jsx)(g.Z.Child, {
                            basis: '50%',
                            children: (0, i.jsxs)(o.FormItem, {
                                children: [
                                    (0, i.jsx)(o.FormTitle, {
                                        id: b,
                                        tag: o.FormTitleTags.H5,
                                        className: T.marginBottom8,
                                        children: E.intl.string(E.t.y0ShVl)
                                    }),
                                    (0, i.jsx)(o.Slider, {
                                        initialValue: r,
                                        onValueChange: (e) => c.Z.setMode(n, { delay: e }),
                                        onValueRender: I,
                                        maxValue: _.qhL,
                                        'aria-labelledby': b
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
function v() {
    let { analyticsLocations: e } = (0, m.ZP)(),
        t = (0, l.e7)([p.Z], () => p.Z.getMode()),
        r = [
            {
                value: _.pM4.VOICE_ACTIVITY,
                name: E.intl.string(E.t.cHCEOD)
            },
            {
                value: _.pM4.PUSH_TO_TALK,
                name: S ? E.intl.string(E.t['1AINrK']) : E.intl.string(E.t.Q8gkVF)
            }
        ],
        a = s.useCallback(
            (t) => {
                let { value: s } = t;
                s === _.pM4.PUSH_TO_TALK &&
                    S &&
                    (0, o.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 468026));
                        return (t) =>
                            (0, i.jsx)(e, {
                                title: E.intl.string(E.t.Kdt0GR),
                                confirmText: E.intl.string(E.t['1WjMbG']),
                                cancelText: E.intl.string(E.t.BddRzc),
                                onConfirm: () => (0, f.y)('PTT Limited Modal'),
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
            (0, i.jsx)(o.FormItem, {
                title: E.intl.string(E.t['pS+K2N']),
                className: T.marginBottom20,
                children: (0, i.jsx)(o.RadioGroup, {
                    onChange: a,
                    options: r,
                    value: t
                })
            }),
            t === _.pM4.PUSH_TO_TALK && (0, i.jsx)(N, { inputMode: t })
        ]
    });
}
