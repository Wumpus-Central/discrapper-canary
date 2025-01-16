r.d(n, {
    Z: function () {
        return N;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(442837),
    c = r(481060),
    d = r(570140),
    f = r(100527),
    _ = r(313201),
    h = r(98278),
    p = r(311476),
    m = r(587446),
    g = r(996073),
    E = r(327943),
    v = r(997945),
    I = r(401460),
    T = r(441319),
    b = r(981631),
    y = r(526761),
    S = r(388032),
    A = r(337910);
function N(e) {
    let { className: n, disabled: i, isEditor: o, renderCTAButtons: N } = e,
        [C, R] = (0, u.Wu)([E.Z], () => [E.Z.getCurrentDesktopIcon(), E.Z.isUpsellPreview]),
        { enabled: O } = p.Z.getCurrentConfig(
            { location: 'UserSettingsAppearanceInAppIcon' },
            {
                autoTrackExposure: R,
                disable: !R
            }
        ),
        D = s.useRef(null);
    (0, g.Z)(D, y.h1.CUSTOM_APP_ICONS);
    let L = (0, _.Dt)(),
        x = (0, c.useRadioGroup)({
            orientation: 'horizontal',
            labelledBy: L
        }),
        w = (e) => {
            if (O && !o && e !== v.aH.DEFAULT) {
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await r.e('69052').then(r.bind(r, 184250));
                    return (n) =>
                        (0, a.jsx)(e, {
                            analyticsSource: f.Z.APP_ICON_SELECTOR,
                            analyticsLocation: {
                                section: b.jXE.SETTINGS_APPEARANCE_APP_ICON_PICKER,
                                object: b.qAy.BUTTON_ICON
                            },
                            ...n
                        });
                });
                return;
            }
            d.Z.dispatch({
                type: 'APP_ICON_UPDATED',
                id: e
            });
        };
    return (0, a.jsx)('div', {
        ref: D,
        children: (0, a.jsx)('div', {
            ...x,
            className: A.__invalid_container,
            children: (0, a.jsxs)('div', {
                className: n,
                children: [
                    (0, a.jsxs)('div', {
                        className: A.header,
                        children: [
                            (0, a.jsxs)('div', {
                                className: A.headings,
                                children: [
                                    !o &&
                                        (0, a.jsxs)('div', {
                                            className: A.title,
                                            children: [
                                                (0, a.jsx)(c.Heading, {
                                                    variant: 'text-md/medium',
                                                    children: S.intl.string(S.t.NThqT0)
                                                }),
                                                !O && (0, a.jsx)(m.Z, { className: A.premiumIcon })
                                            ]
                                        }),
                                    O
                                        ? o
                                            ? null
                                            : (0, a.jsxs)('div', {
                                                  className: A.description,
                                                  children: [
                                                      (0, a.jsx)(c.NitroWheelIcon, {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: A.nitroWheel
                                                      }),
                                                      (0, a.jsx)(c.Heading, {
                                                          variant: 'text-sm/normal',
                                                          children: S.intl.format(S.t.x2dQxM, {
                                                              onClick: () => {
                                                                  (0, h.$)();
                                                              }
                                                          })
                                                      })
                                                  ]
                                              })
                                        : (0, a.jsx)(c.Heading, {
                                              variant: 'text-sm/normal',
                                              children: S.intl.string(S.t.IgENJi)
                                          })
                                ]
                            }),
                            null == N ? void 0 : N()
                        ]
                    }),
                    (0, a.jsx)('div', {
                        className: l()(A.presets, { [A.presetsJustified]: O && o }),
                        children: (0, T.wu)()
                            .filter((e) => {
                                let { isHidden: n } = e;
                                return !n;
                            })
                            .map((e, n) =>
                                (0, a.jsx)(
                                    I.Z,
                                    {
                                        icon: e,
                                        isSelected: C === e.id,
                                        onSelect: (e) => w(e),
                                        disabled: i,
                                        tabIndex: 0 !== n || i ? void 0 : 0,
                                        locked: O && !o && e.id !== v.aH.DEFAULT
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
