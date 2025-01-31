n.d(t, { Z: () => m }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(373793),
    s = n(481060),
    o = n(783097),
    l = n(753972),
    u = n(520315),
    c = n(688465),
    d = n(388032),
    f = n(147750),
    _ = n(665162),
    p = n(413097);
let h = 84;
function m(e) {
    let { application: t, onSelect: n, onClose: u } = e,
        { iconURL: _ } = r.useMemo(
            () =>
                (0, o.sl)(t, {
                    fakeAppIconURL: p,
                    size: h
                }),
            [t]
        ),
        m = r.useMemo(
            () =>
                [
                    {
                        type: a.Y.USER_INSTALL,
                        icon: s.oLu,
                        title: d.intl.string(d.t.aCg60N),
                        subtitle: d.intl.string(d.t.YeiIUV),
                        beta: !1
                    },
                    {
                        type: a.Y.GUILD_INSTALL,
                        icon: s.QTo,
                        title: d.intl.string(d.t.E64YCw),
                        subtitle: d.intl.string(d.t.bbtoKi),
                        beta: !1
                    }
                ].filter((e) => {
                    var n, i;
                    return (null === (i = t.integrationTypesConfig) || void 0 === i ? void 0 : null === (n = i[e.type]) || void 0 === n ? void 0 : n.oauth2InstallParams) != null;
                }),
            [t.integrationTypesConfig]
        );
    return (0, i.jsxs)('div', {
        className: f.container,
        children: [
            (0, i.jsxs)('div', {
                className: f.header,
                children: [
                    null != u
                        ? (0, i.jsx)(s.P3F, {
                              onClick: u,
                              className: f.closeButton,
                              'aria-label': d.intl.string(d.t.cpT0Cg),
                              children: (0, i.jsx)(s.Dio, {
                                  size: 'md',
                                  color: 'currentColor'
                              })
                          })
                        : null,
                    (0, i.jsx)(l.Z, {
                        src: _,
                        className: f.appIcon,
                        rendersPlaceholder: !0
                    }),
                    (0, i.jsx)(E, { application: t }),
                    (0, i.jsx)(g, { application: t })
                ]
            }),
            (0, i.jsx)('ul', {
                className: f.rows,
                children: m.map((e) =>
                    (0, i.jsxs)(
                        s.P3F,
                        {
                            tag: 'li',
                            className: f.row,
                            onClick: () => n(e.type),
                            children: [
                                (0, i.jsx)(e.icon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: f.leftIcon
                                }),
                                (0, i.jsxs)('div', {
                                    className: f.rowInner,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: f.rowDetails,
                                            children: [
                                                (0, i.jsx)(s.Text, {
                                                    variant: 'text-md/medium',
                                                    color: 'interactive-active',
                                                    children: e.title
                                                }),
                                                (0, i.jsx)(s.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    children: e.subtitle
                                                })
                                            ]
                                        }),
                                        e.beta && (0, i.jsx)(c.Z, {}),
                                        (0, i.jsx)(s.Fbu, {
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
function g(e) {
    let { application: t } = e,
        n = t.description;
    return null == n || 0 === n.length
        ? null
        : (0, i.jsx)('div', {
              className: f.detailsContainer,
              children: (0, i.jsx)('div', {
                  className: f.overviewContainerNoVideo,
                  children: null != n && n.length > 0 ? (0, i.jsx)(y, { description: n }) : null
              })
          });
}
function E(e) {
    let { application: t } = e,
        n = t.name,
        r = (0, o.vJ)(t);
    return (0, i.jsxs)('div', {
        className: f.titleContainer,
        children: [
            (0, i.jsx)(s.X6q, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: n
            }),
            r
                ? (0, i.jsx)('div', {
                      className: f.partnerLabelContainer,
                      children: (0, i.jsx)(s.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: d.intl.string(d.t.LO4f0N)
                      })
                  })
                : null
        ]
    });
}
let v = 3;
function y(e) {
    let { description: t } = e,
        [a, o] = r.useState(!0);
    r.useLayoutEffect(() => o(!1), []);
    let l = r.useMemo(() => {
            let { parseBioReact: e } = n(240991);
            return e(t);
        }, [t]),
        { ref: c, lineHeight: p, lineCount: h } = I(),
        m = r.useMemo(() => {
            if (null == p || null == h) return { key: 0 };
            let e = p * h;
            return {
                key: 1,
                minHeightOverride: Math.min(e, v * p),
                maxHeightOverride: e
            };
        }, [h, p]),
        {
            ref: g,
            isTransitioning: E,
            onTransitionEnd: y
        } = (0, u.Z)({
            isExpanded: a,
            ...m
        }),
        b = a || E;
    return (0, i.jsxs)('div', {
        className: f.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: g,
                className: f.overflowHidden,
                onTransitionEnd: y,
                children: (0, i.jsx)(s.Text, {
                    ref: c,
                    className: _.markup,
                    variant: 'text-sm/medium',
                    lineClamp: b ? void 0 : v,
                    style: { maxHeight: b ? void 0 : m.minHeightOverride },
                    children: l
                })
            }),
            null != h && h > v
                ? (0, i.jsxs)(s.P3F, {
                      className: f.expandableDescriptionClickable,
                      onClick: () => o((e) => !e),
                      children: [
                          (0, i.jsx)(s.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: b ? d.intl.string(d.t.u4YJ8v) : d.intl.string(d.t['N/tajI'])
                          }),
                          b
                              ? (0, i.jsx)(s.u04, {
                                    size: 'sm',
                                    color: s.TVs.colors.TEXT_BRAND
                                })
                              : (0, i.jsx)(s.CJ0, {
                                    size: 'sm',
                                    color: s.TVs.colors.TEXT_BRAND
                                })
                      ]
                  })
                : null
        ]
    });
}
function I() {
    let e = r.useRef(null),
        [t, n] = r.useState(null),
        [i, a] = r.useState(null);
    return (
        r.useLayoutEffect(() => {
            let t = e.current;
            if (null === t || 0 === t.clientHeight) return;
            let i = parseInt(getComputedStyle(t).lineHeight);
            !isNaN(i) && (n(i), a(Math.floor(t.clientHeight / i)));
        }, []),
        {
            ref: e,
            lineHeight: t,
            lineCount: i
        }
    );
}
