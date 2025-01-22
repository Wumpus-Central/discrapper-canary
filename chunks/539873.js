r.d(n, {
    Z: function () {
        return C;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(442837),
    c = r(481060),
    d = r(570140),
    f = r(100527),
    p = r(313201),
    h = r(98278),
    _ = r(311476),
    m = r(587446),
    g = r(996073),
    E = r(327943),
    v = r(997945),
    y = r(401460),
    b = r(441319),
    I = r(981631),
    T = r(526761),
    S = r(388032),
    A = r(337910);
function C(e) {
    let { className: n, disabled: i, isEditor: s, renderCTAButtons: C } = e,
        [N, R] = (0, u.Wu)([E.Z], () => [E.Z.getCurrentDesktopIcon(), E.Z.isUpsellPreview]),
        { enabled: O } = _.Z.getCurrentConfig(
            { location: 'UserSettingsAppearanceInAppIcon' },
            {
                autoTrackExposure: R,
                disable: !R
            }
        ),
        D = o.useRef(null);
    (0, g.Z)(D, T.h1.CUSTOM_APP_ICONS);
    let L = (0, p.Dt)(),
        x = (0, c.useRadioGroup)({
            orientation: 'horizontal',
            labelledBy: L
        }),
        w = (e) => {
            if (O && !s && e !== v.aH.DEFAULT) {
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await r.e('69052').then(r.bind(r, 184250));
                    return (n) =>
                        (0, a.jsx)(e, {
                            analyticsSource: f.Z.APP_ICON_SELECTOR,
                            analyticsLocation: {
                                section: I.jXE.SETTINGS_APPEARANCE_APP_ICON_PICKER,
                                object: I.qAy.BUTTON_ICON
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
                                    !s &&
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
                                        ? s
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
                            null == C ? void 0 : C()
                        ]
                    }),
                    (0, a.jsx)('div', {
                        className: l()(A.presets, { [A.presetsJustified]: O && s }),
                        children: (0, b.wu)()
                            .filter((e) => {
                                let { isHidden: n } = e;
                                return !n;
                            })
                            .map((e, n) =>
                                (0, a.jsx)(
                                    y.Z,
                                    {
                                        icon: e,
                                        isSelected: N === e.id,
                                        onSelect: (e) => w(e),
                                        disabled: i,
                                        tabIndex: 0 !== n || i ? void 0 : 0,
                                        locked: O && !s && e.id !== v.aH.DEFAULT
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
