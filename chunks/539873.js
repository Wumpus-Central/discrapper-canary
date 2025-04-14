n.d(t, { Z: () => D }), n(388685), n(953529);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(570140),
    u = n(100527),
    d = n(313201),
    f = n(540059),
    _ = n(98278),
    p = n(311476),
    h = n(587446),
    m = n(996073),
    g = n(327943),
    E = n(997945),
    b = n(401460),
    y = n(441319),
    v = n(981631),
    O = n(526761),
    I = n(388032),
    S = n(888090),
    T = n(716827);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = w(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function D(e) {
    let { className: t, disabled: o, isEditor: N, renderCTAButtons: C } = e,
        [w, D] = (0, s.Wu)([g.Z], () => [g.Z.getCurrentDesktopIcon(), g.Z.isUpsellPreview]),
        { enabled: L } = p.Z.getCurrentConfig(
            { location: 'UserSettingsAppearanceInAppIcon' },
            {
                autoTrackExposure: D,
                disable: !D
            }
        ),
        x = i.useRef(null);
    (0, m.Z)(x, O.h1.CUSTOM_APP_ICONS);
    let M = (0, d.Dt)(),
        k = (0, l.arW)({
            orientation: 'horizontal',
            labelledBy: M
        }),
        { ref: j } = k,
        U = P(k, ['ref']),
        G = (0, f.Q3)('AppIconSelectionGroup'),
        B = (e) => {
            if (L && !N && e !== E.aH.DEFAULT)
                return void (0, l.ZDy)(async () => {
                    let { default: e } = await n.e('69052').then(n.bind(n, 184250));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            A(
                                {
                                    analyticsSource: u.Z.APP_ICON_SELECTOR,
                                    analyticsLocation: {
                                        section: v.jXE.SETTINGS_APPEARANCE_APP_ICON_PICKER,
                                        object: v.qAy.BUTTON_ICON
                                    }
                                },
                                t
                            )
                        );
                });
            c.Z.dispatch({
                type: 'APP_ICON_UPDATED',
                id: e
            });
        };
    return (0, r.jsx)('div', {
        ref: x,
        children: (0, r.jsx)(
            'div',
            R(A({}, U), {
                ref: j,
                className: S.__invalid_container,
                children: (0, r.jsxs)('div', {
                    className: t,
                    children: [
                        (0, r.jsxs)('div', {
                            className: S.header,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: S.headings,
                                    children: [
                                        !N &&
                                            (0, r.jsxs)('div', {
                                                className: S.title,
                                                children: [
                                                    (0, r.jsx)(l.X6q, {
                                                        className: S.titleText,
                                                        variant: G ? 'text-lg/medium' : 'text-md/medium',
                                                        children: I.NW.string(I.t.NThqT0)
                                                    }),
                                                    !L && (0, r.jsx)(h.Z, { className: S.premiumIcon })
                                                ]
                                            }),
                                        L
                                            ? N
                                                ? null
                                                : (0, r.jsxs)('div', {
                                                      className: S.description,
                                                      children: [
                                                          (0, r.jsx)(l.SrA, {
                                                              size: 'md',
                                                              color: 'currentColor',
                                                              className: S.nitroWheel
                                                          }),
                                                          (0, r.jsx)(l.X6q, {
                                                              variant: 'text-sm/normal',
                                                              children: I.NW.format(I.t.x2dQxM, {
                                                                  onClick: () => {
                                                                      (0, _.$)();
                                                                  }
                                                              })
                                                          })
                                                      ]
                                                  })
                                            : (0, r.jsx)(l.X6q, {
                                                  variant: 'text-sm/normal',
                                                  className: a()({ [T.subtext]: G }),
                                                  children: I.NW.string(I.t.IgENJi)
                                              })
                                    ]
                                }),
                                null == C ? void 0 : C()
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: a()(S.presets, { [S.presetsJustified]: L && N }),
                            children: (0, y.wu)()
                                .filter((e) => {
                                    let { isHidden: t } = e;
                                    return !t;
                                })
                                .map((e, t) =>
                                    (0, r.jsx)(
                                        b.Z,
                                        {
                                            icon: e,
                                            isSelected: w === e.id,
                                            onSelect: (e) => B(e),
                                            disabled: o,
                                            tabIndex: 0 !== t || o ? void 0 : 0,
                                            locked: L && !N && e.id !== E.aH.DEFAULT
                                        },
                                        e.id
                                    )
                                )
                        })
                    ]
                })
            })
        )
    });
}
