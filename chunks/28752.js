n.d(t, { Z: () => E }), n(953529), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(373793),
    o = n(481060),
    s = n(783097),
    l = n(753972),
    c = n(520315),
    u = n(688465),
    d = n(388032),
    _ = n(639746),
    f = n(73433),
    p = n(413097);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
let g = 84;
function E(e) {
    let { application: t, onSelect: n, onClose: c } = e,
        { iconURL: f } = i.useMemo(
            () =>
                (0, s.sl)(t, {
                    fakeAppIconURL: p,
                    size: g
                }),
            [t]
        ),
        h = i.useMemo(
            () =>
                [
                    {
                        type: a.Y.USER_INSTALL,
                        icon: o.oLu,
                        title: d.intl.string(d.t.aCg60N),
                        subtitle: d.intl.string(d.t.YeiIUV),
                        beta: !1
                    },
                    {
                        type: a.Y.GUILD_INSTALL,
                        icon: o.QTo,
                        title: d.intl.string(d.t.E64YCw),
                        subtitle: d.intl.string(d.t.bbtoKi),
                        beta: !1
                    }
                ].filter((e) => {
                    var n, r;
                    return (null == (r = t.integrationTypesConfig) || null == (n = r[e.type]) ? void 0 : n.oauth2InstallParams) != null;
                }),
            [t.integrationTypesConfig]
        );
    return (0, r.jsxs)('div', {
        className: _.container,
        children: [
            (0, r.jsxs)('div', {
                className: _.header,
                children: [
                    null != c
                        ? (0, r.jsx)(o.P3F, {
                              onClick: c,
                              className: _.closeButton,
                              'aria-label': d.intl.string(d.t.cpT0Cg),
                              children: (0, r.jsx)(o.Dio, {
                                  size: 'md',
                                  color: 'currentColor'
                              })
                          })
                        : null,
                    (0, r.jsx)(l.Z, {
                        src: f,
                        className: _.appIcon,
                        rendersPlaceholder: !0
                    }),
                    (0, r.jsx)(y, { application: t }),
                    (0, r.jsx)(b, { application: t })
                ]
            }),
            (0, r.jsx)('ul', {
                className: _.rows,
                children: h.map((e) =>
                    (0, r.jsxs)(
                        o.P3F,
                        {
                            tag: 'li',
                            className: _.row,
                            onClick: () => n(e.type),
                            children: [
                                (0, r.jsx)(e.icon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: _.leftIcon
                                }),
                                (0, r.jsxs)('div', {
                                    className: _.rowInner,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: _.rowDetails,
                                            children: [
                                                (0, r.jsx)(o.Text, {
                                                    variant: 'text-md/medium',
                                                    color: 'interactive-active',
                                                    children: e.title
                                                }),
                                                (0, r.jsx)(o.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    children: e.subtitle
                                                })
                                            ]
                                        }),
                                        e.beta && (0, r.jsx)(u.Z, {}),
                                        (0, r.jsx)(o.Fbu, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: _.rightIcon
                                        })
                                    ]
                                })
                            ]
                        },
                        e.type
                    )
                )
            })
        ]
    });
}
function b(e) {
    let { application: t } = e,
        n = t.description;
    return null == n || 0 === n.length
        ? null
        : (0, r.jsx)('div', {
              className: _.detailsContainer,
              children: (0, r.jsx)('div', {
                  className: _.overviewContainerNoVideo,
                  children: null != n && n.length > 0 ? (0, r.jsx)(v, { description: n }) : null
              })
          });
}
function y(e) {
    let { application: t } = e,
        n = t.name,
        i = (0, s.vJ)(t);
    return (0, r.jsxs)('div', {
        className: _.titleContainer,
        children: [
            (0, r.jsx)(o.X6q, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: n
            }),
            i
                ? (0, r.jsx)('div', {
                      className: _.partnerLabelContainer,
                      children: (0, r.jsx)(o.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: d.intl.string(d.t.LO4f0N)
                      })
                  })
                : null
        ]
    });
}
let O = 3;
function v(e) {
    let { description: t } = e,
        [a, s] = i.useState(!0);
    i.useLayoutEffect(() => s(!1), []);
    let l = i.useMemo(() => {
            let { parseBioReact: e } = n(240991);
            return e(t);
        }, [t]),
        { ref: u, lineHeight: p, lineCount: h } = I(),
        g = i.useMemo(() => {
            if (null == p || null == h) return { key: 0 };
            let e = p * h;
            return {
                key: 1,
                minHeightOverride: Math.min(e, O * p),
                maxHeightOverride: e
            };
        }, [h, p]),
        { ref: E, isTransitioning: b, onTransitionEnd: y } = (0, c.Z)(m({ isExpanded: a }, g)),
        v = a || b;
    return (0, r.jsxs)('div', {
        className: _.descriptionContainer,
        children: [
            (0, r.jsx)('div', {
                ref: E,
                className: _.overflowHidden,
                onTransitionEnd: y,
                children: (0, r.jsx)(o.Text, {
                    ref: u,
                    className: f.markup,
                    variant: 'text-sm/medium',
                    lineClamp: v ? void 0 : O,
                    style: { maxHeight: v ? void 0 : g.minHeightOverride },
                    children: l
                })
            }),
            null != h && h > O
                ? (0, r.jsxs)(o.P3F, {
                      className: _.expandableDescriptionClickable,
                      onClick: () => s((e) => !e),
                      children: [
                          (0, r.jsx)(o.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: v ? d.intl.string(d.t.u4YJ8v) : d.intl.string(d.t['N/tajI'])
                          }),
                          v
                              ? (0, r.jsx)(o.u04, {
                                    size: 'sm',
                                    color: o.TVs.colors.TEXT_BRAND
                                })
                              : (0, r.jsx)(o.CJ0, {
                                    size: 'sm',
                                    color: o.TVs.colors.TEXT_BRAND
                                })
                      ]
                  })
                : null
        ]
    });
}
function I() {
    let e = i.useRef(null),
        [t, n] = i.useState(null),
        [r, a] = i.useState(null);
    return (
        i.useLayoutEffect(() => {
            let t = e.current;
            if (null === t || 0 === t.clientHeight) return;
            let r = parseInt(getComputedStyle(t).lineHeight);
            isNaN(r) || (n(r), a(Math.floor(t.clientHeight / r)));
        }, []),
        {
            ref: e,
            lineHeight: t,
            lineCount: r
        }
    );
}
