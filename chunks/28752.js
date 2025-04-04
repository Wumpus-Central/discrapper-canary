n.d(t, { Z: () => E }), n(266796), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(373793),
    a = n(481060),
    s = n(783097),
    l = n(753972),
    c = n(520315),
    u = n(688465),
    d = n(388032),
    f = n(639746),
    _ = n(73433),
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
        { iconURL: _ } = i.useMemo(
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
                        type: o.Y.USER_INSTALL,
                        icon: a.oLu,
                        title: d.NW.string(d.t.aCg60N),
                        subtitle: d.NW.string(d.t.YeiIUV),
                        beta: !1
                    },
                    {
                        type: o.Y.GUILD_INSTALL,
                        icon: a.QTo,
                        title: d.NW.string(d.t.E64YCw),
                        subtitle: d.NW.string(d.t.bbtoKi),
                        beta: !1
                    }
                ].filter((e) => {
                    var n, r;
                    return (null == (r = t.integrationTypesConfig) || null == (n = r[e.type]) ? void 0 : n.oauth2InstallParams) != null;
                }),
            [t.integrationTypesConfig]
        );
    return (0, r.jsxs)('div', {
        className: f.container,
        children: [
            (0, r.jsxs)('div', {
                className: f.header,
                children: [
                    null != c
                        ? (0, r.jsx)(a.P3F, {
                              onClick: c,
                              className: f.closeButton,
                              'aria-label': d.NW.string(d.t.cpT0Cg),
                              children: (0, r.jsx)(a.Dio, {
                                  size: 'md',
                                  color: 'currentColor'
                              })
                          })
                        : null,
                    (0, r.jsx)(l.Z, {
                        src: _,
                        className: f.appIcon,
                        rendersPlaceholder: !0
                    }),
                    (0, r.jsx)(y, { application: t }),
                    (0, r.jsx)(b, { application: t })
                ]
            }),
            (0, r.jsx)('ul', {
                className: f.rows,
                children: h.map((e) =>
                    (0, r.jsxs)(
                        a.P3F,
                        {
                            tag: 'li',
                            className: f.row,
                            onClick: () => n(e.type),
                            children: [
                                (0, r.jsx)(e.icon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: f.leftIcon
                                }),
                                (0, r.jsxs)('div', {
                                    className: f.rowInner,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: f.rowDetails,
                                            children: [
                                                (0, r.jsx)(a.Text, {
                                                    variant: 'text-md/medium',
                                                    color: 'interactive-active',
                                                    children: e.title
                                                }),
                                                (0, r.jsx)(a.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    children: e.subtitle
                                                })
                                            ]
                                        }),
                                        e.beta && (0, r.jsx)(u.Z, {}),
                                        (0, r.jsx)(a.Fbu, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: f.rightIcon
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
              className: f.detailsContainer,
              children: (0, r.jsx)('div', {
                  className: f.overviewContainerNoVideo,
                  children: null != n && n.length > 0 ? (0, r.jsx)(O, { description: n }) : null
              })
          });
}
function y(e) {
    let { application: t } = e,
        n = t.name,
        i = (0, s.vJ)(t);
    return (0, r.jsxs)('div', {
        className: f.titleContainer,
        children: [
            (0, r.jsx)(a.X6q, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: n
            }),
            i
                ? (0, r.jsx)('div', {
                      className: f.partnerLabelContainer,
                      children: (0, r.jsx)(a.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: d.NW.string(d.t.LO4f0N)
                      })
                  })
                : null
        ]
    });
}
let v = 3;
function O(e) {
    let { description: t } = e,
        [o, s] = i.useState(!0);
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
                minHeightOverride: Math.min(e, v * p),
                maxHeightOverride: e
            };
        }, [h, p]),
        { ref: E, isTransitioning: b, onTransitionEnd: y } = (0, c.Z)(m({ isExpanded: o }, g)),
        O = o || b;
    return (0, r.jsxs)('div', {
        className: f.descriptionContainer,
        children: [
            (0, r.jsx)('div', {
                ref: E,
                className: f.overflowHidden,
                onTransitionEnd: y,
                children: (0, r.jsx)(a.Text, {
                    ref: u,
                    className: _.markup,
                    variant: 'text-sm/medium',
                    lineClamp: O ? void 0 : v,
                    style: { maxHeight: O ? void 0 : g.minHeightOverride },
                    children: l
                })
            }),
            null != h && h > v
                ? (0, r.jsxs)(a.P3F, {
                      className: f.expandableDescriptionClickable,
                      onClick: () => s((e) => !e),
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: O ? d.NW.string(d.t.u4YJ8v) : d.NW.string(d.t['N/tajI'])
                          }),
                          O
                              ? (0, r.jsx)(a.u04, {
                                    size: 'sm',
                                    color: a.TVs.colors.TEXT_BRAND
                                })
                              : (0, r.jsx)(a.CJ0, {
                                    size: 'sm',
                                    color: a.TVs.colors.TEXT_BRAND
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
        [r, o] = i.useState(null);
    return (
        i.useLayoutEffect(() => {
            let t = e.current;
            if (null === t || 0 === t.clientHeight) return;
            let r = parseInt(getComputedStyle(t).lineHeight);
            isNaN(r) || (n(r), o(Math.floor(t.clientHeight / r)));
        }, []),
        {
            ref: e,
            lineHeight: t,
            lineCount: r
        }
    );
}
