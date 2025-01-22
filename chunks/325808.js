n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(846027),
    d = n(230711),
    u = n(825209),
    m = n(906732),
    g = n(313201),
    h = n(131951),
    p = n(358085),
    x = n(962100),
    f = n(981631),
    _ = n(388032),
    E = n(973936),
    C = n(232186);
let T = !p.isPlatformEmbedded,
    S = (0, g.hQ)();
function b(e) {
    return e >= 1000 ? ((e /= 1000), ''.concat(e.toFixed(2), 's')) : ''.concat(e.toFixed(0), ' ms');
}
function I(e) {
    let t,
        { inputMode: n } = e,
        { shortcut: r, delay: s } = (0, l.cj)([h.Z], () => h.Z.getModeOptions());
    return (
        (t =
            p.isPlatformEmbedded || n !== f.pM4.PUSH_TO_TALK
                ? (0, i.jsx)(o.FormText, {
                      type: o.FormText.Types.DESCRIPTION,
                      className: a()(E.pttToolsMessage, C.marginBottom8),
                      children: _.intl.format(_.t.HVvn5e, { onClick: () => d.Z.setSection(f.oAB.KEYBINDS) })
                  })
                : (0, i.jsx)(o.FormText, {
                      type: o.FormText.Types.DESCRIPTION,
                      className: a()(E.pttToolsMessage, E.pttToolsWarning, C.marginBottom8),
                      children: _.intl.format(_.t.zvMPOT, { onDownloadClick: () => (0, x.y)('Help Text PTT') })
                  })),
        (0, i.jsxs)('div', {
            className: E.pttTools,
            children: [
                (0, i.jsxs)('div', {
                    className: E.pttToolsFlex,
                    children: [
                        (0, i.jsx)('div', {
                            className: E.column,
                            children: (0, i.jsx)(o.FormItem, {
                                title: _.intl.string(_.t.YkDjVF),
                                children: (0, i.jsx)(u.Z, {
                                    defaultValue: r,
                                    onChange: (e) => c.Z.setMode(n, { shortcut: e })
                                })
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: E.column,
                            children: (0, i.jsxs)(o.FormItem, {
                                children: [
                                    (0, i.jsx)(o.FormTitle, {
                                        id: S,
                                        tag: o.FormTitleTags.H5,
                                        className: C.marginBottom8,
                                        children: _.intl.string(_.t.y0ShVl)
                                    }),
                                    (0, i.jsx)(o.Slider, {
                                        initialValue: s,
                                        onValueChange: (e) => c.Z.setMode(n, { delay: e }),
                                        onValueRender: b,
                                        maxValue: f.qhL,
                                        'aria-labelledby': S
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
function N() {
    let { analyticsLocations: e } = (0, m.ZP)(),
        t = (0, l.e7)([h.Z], () => h.Z.getMode()),
        s = [
            {
                value: f.pM4.VOICE_ACTIVITY,
                name: _.intl.string(_.t.cHCEOD)
            },
            {
                value: f.pM4.PUSH_TO_TALK,
                name: T ? _.intl.string(_.t['1AINrK']) : _.intl.string(_.t.Q8gkVF)
            }
        ],
        a = r.useCallback(
            (t) => {
                let { value: r } = t;
                r === f.pM4.PUSH_TO_TALK &&
                    T &&
                    (0, o.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 468026));
                        return (t) =>
                            (0, i.jsx)(e, {
                                title: _.intl.string(_.t.Kdt0GR),
                                confirmText: _.intl.string(_.t['1WjMbG']),
                                cancelText: _.intl.string(_.t.BddRzc),
                                onConfirm: () => (0, x.y)('PTT Limited Modal'),
                                body: _.intl.string(_.t.NIozvr),
                                ...t
                            });
                    }),
                    c.Z.setMode(r, void 0, void 0, { analyticsLocations: e });
            },
            [e]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.FormItem, {
                title: _.intl.string(_.t['pS+K2N']),
                className: C.marginBottom20,
                children: (0, i.jsx)(o.RadioGroup, {
                    onChange: a,
                    options: s,
                    value: t
                })
            }),
            t === f.pM4.PUSH_TO_TALK && (0, i.jsx)(I, { inputMode: t })
        ]
    });
}
