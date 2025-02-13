n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(570140),
    c = n(100527),
    d = n(313201),
    f = n(540059),
    _ = n(98278),
    p = n(311476),
    h = n(587446),
    m = n(996073),
    g = n(327943),
    E = n(997945),
    v = n(401460),
    y = n(441319),
    I = n(981631),
    T = n(526761),
    b = n(388032),
    S = n(85337),
    A = n(4823);
function N(e) {
    let { className: t, disabled: a, isEditor: N, renderCTAButtons: C } = e,
        [R, O] = (0, o.Wu)([g.Z], () => [g.Z.getCurrentDesktopIcon(), g.Z.isUpsellPreview]),
        { enabled: D } = p.Z.getCurrentConfig(
            { location: 'UserSettingsAppearanceInAppIcon' },
            {
                autoTrackExposure: O,
                disable: !O
            }
        ),
        L = r.useRef(null);
    (0, m.Z)(L, T.h1.CUSTOM_APP_ICONS);
    let x = (0, d.Dt)(),
        P = (0, l.arW)({
            orientation: 'horizontal',
            labelledBy: x
        }),
        w = (0, f.Q3)('AppIconSelectionGroup'),
        M = (e) => {
            if (D && !N && e !== E.aH.DEFAULT) {
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e('69052').then(n.bind(n, 184250));
                    return (t) =>
                        (0, i.jsx)(e, {
                            analyticsSource: c.Z.APP_ICON_SELECTOR,
                            analyticsLocation: {
                                section: I.jXE.SETTINGS_APPEARANCE_APP_ICON_PICKER,
                                object: I.qAy.BUTTON_ICON
                            },
                            ...t
                        });
                });
                return;
            }
            u.Z.dispatch({
                type: 'APP_ICON_UPDATED',
                id: e
            });
        };
    return (0, i.jsx)('div', {
        ref: L,
        children: (0, i.jsx)('div', {
            ...P,
            className: S.__invalid_container,
            children: (0, i.jsxs)('div', {
                className: t,
                children: [
                    (0, i.jsxs)('div', {
                        className: S.header,
                        children: [
                            (0, i.jsxs)('div', {
                                className: S.headings,
                                children: [
                                    !N &&
                                        (0, i.jsxs)('div', {
                                            className: S.title,
                                            children: [
                                                (0, i.jsx)(l.X6q, {
                                                    className: S.titleText,
                                                    variant: w ? 'text-lg/medium' : 'text-md/medium',
                                                    children: b.intl.string(b.t.NThqT0)
                                                }),
                                                !D && (0, i.jsx)(h.Z, { className: S.premiumIcon })
                                            ]
                                        }),
                                    D
                                        ? N
                                            ? null
                                            : (0, i.jsxs)('div', {
                                                  className: S.description,
                                                  children: [
                                                      (0, i.jsx)(l.SrA, {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: S.nitroWheel
                                                      }),
                                                      (0, i.jsx)(l.X6q, {
                                                          variant: 'text-sm/normal',
                                                          children: b.intl.format(b.t.x2dQxM, {
                                                              onClick: () => {
                                                                  (0, _.$)();
                                                              }
                                                          })
                                                      })
                                                  ]
                                              })
                                        : (0, i.jsx)(l.X6q, {
                                              variant: 'text-sm/normal',
                                              className: s()({ [A.subtext]: w }),
                                              children: b.intl.string(b.t.IgENJi)
                                          })
                                ]
                            }),
                            null == C ? void 0 : C()
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: s()(S.presets, { [S.presetsJustified]: D && N }),
                        children: (0, y.wu)()
                            .filter((e) => {
                                let { isHidden: t } = e;
                                return !t;
                            })
                            .map((e, t) =>
                                (0, i.jsx)(
                                    v.Z,
                                    {
                                        icon: e,
                                        isSelected: R === e.id,
                                        onSelect: (e) => M(e),
                                        disabled: a,
                                        tabIndex: 0 !== t || a ? void 0 : 0,
                                        locked: D && !N && e.id !== E.aH.DEFAULT
                                    },
                                    e.id
                                )
                            )
                    })
                ]
            })
        })
    });
}
