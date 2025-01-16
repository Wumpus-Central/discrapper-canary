r.d(n, {
    Z: function () {
        return E;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(373793),
    l = r(481060),
    u = r(783097),
    c = r(753972),
    d = r(520315),
    f = r(688465),
    _ = r(388032),
    h = r(147750),
    p = r(665162),
    m = r(413097);
let g = 84;
function E(e) {
    let { application: n, onSelect: r, onClose: i } = e,
        { iconURL: d } = s.useMemo(
            () =>
                (0, u.sl)(n, {
                    fakeAppIconURL: m,
                    size: g
                }),
            [n]
        ),
        p = s.useMemo(
            () =>
                [
                    {
                        type: o.Y.USER_INSTALL,
                        icon: l.UserPlusIcon,
                        title: _.intl.string(_.t.aCg60N),
                        subtitle: _.intl.string(_.t.YeiIUV),
                        beta: !1
                    },
                    {
                        type: o.Y.GUILD_INSTALL,
                        icon: l.ServerIcon,
                        title: _.intl.string(_.t.E64YCw),
                        subtitle: _.intl.string(_.t.bbtoKi),
                        beta: !1
                    }
                ].filter((e) => {
                    var r, i;
                    return (null === (i = n.integrationTypesConfig) || void 0 === i ? void 0 : null === (r = i[e.type]) || void 0 === r ? void 0 : r.oauth2InstallParams) != null;
                }),
            [n.integrationTypesConfig]
        );
    return (0, a.jsxs)('div', {
        className: h.container,
        children: [
            (0, a.jsxs)('div', {
                className: h.header,
                children: [
                    null != i
                        ? (0, a.jsx)(l.Clickable, {
                              onClick: i,
                              className: h.closeButton,
                              'aria-label': _.intl.string(_.t.cpT0Cg),
                              children: (0, a.jsx)(l.XSmallIcon, {
                                  size: 'md',
                                  color: 'currentColor'
                              })
                          })
                        : null,
                    (0, a.jsx)(c.Z, {
                        src: d,
                        className: h.appIcon,
                        rendersPlaceholder: !0
                    }),
                    (0, a.jsx)(I, { application: n }),
                    (0, a.jsx)(v, { application: n })
                ]
            }),
            (0, a.jsx)('ul', {
                className: h.rows,
                children: p.map((e) =>
                    (0, a.jsxs)(
                        l.Clickable,
                        {
                            tag: 'li',
                            className: h.row,
                            onClick: () => r(e.type),
                            children: [
                                (0, a.jsx)(e.icon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: h.leftIcon
                                }),
                                (0, a.jsxs)('div', {
                                    className: h.rowInner,
                                    children: [
                                        (0, a.jsxs)('div', {
                                            className: h.rowDetails,
                                            children: [
                                                (0, a.jsx)(l.Text, {
                                                    variant: 'text-md/medium',
                                                    color: 'interactive-active',
                                                    children: e.title
                                                }),
                                                (0, a.jsx)(l.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    children: e.subtitle
                                                })
                                            ]
                                        }),
                                        e.beta && (0, a.jsx)(f.Z, {}),
                                        (0, a.jsx)(l.ChevronSmallRightIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: h.rightIcon
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
function v(e) {
    let { application: n } = e,
        r = n.description;
    return null == r || 0 === r.length
        ? null
        : (0, a.jsx)('div', {
              className: h.detailsContainer,
              children: (0, a.jsx)('div', {
                  className: h.overviewContainerNoVideo,
                  children: null != r && r.length > 0 ? (0, a.jsx)(b, { description: r }) : null
              })
          });
}
function I(e) {
    let { application: n } = e,
        r = n.name,
        i = (0, u.vJ)(n);
    return (0, a.jsxs)('div', {
        className: h.titleContainer,
        children: [
            (0, a.jsx)(l.Heading, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: r
            }),
            i
                ? (0, a.jsx)('div', {
                      className: h.partnerLabelContainer,
                      children: (0, a.jsx)(l.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: _.intl.string(_.t.LO4f0N)
                      })
                  })
                : null
        ]
    });
}
let T = 3;
function b(e) {
    let { description: n } = e,
        [i, o] = s.useState(!0);
    s.useLayoutEffect(() => o(!1), []);
    let u = s.useMemo(() => {
            let { parseBioReact: e } = r(240991);
            return e(n);
        }, [n]),
        { ref: c, lineHeight: f, lineCount: m } = y(),
        g = s.useMemo(() => {
            if (null == f || null == m) return { key: 0 };
            let e = f * m;
            return {
                key: 1,
                minHeightOverride: Math.min(e, T * f),
                maxHeightOverride: e
            };
        }, [m, f]),
        {
            ref: E,
            isTransitioning: v,
            onTransitionEnd: I
        } = (0, d.Z)({
            isExpanded: i,
            ...g
        }),
        b = i || v;
    return (0, a.jsxs)('div', {
        className: h.descriptionContainer,
        children: [
            (0, a.jsx)('div', {
                ref: E,
                className: h.overflowHidden,
                onTransitionEnd: I,
                children: (0, a.jsx)(l.Text, {
                    ref: c,
                    className: p.markup,
                    variant: 'text-sm/medium',
                    lineClamp: b ? void 0 : T,
                    style: { maxHeight: b ? void 0 : g.minHeightOverride },
                    children: u
                })
            }),
            null != m && m > T
                ? (0, a.jsxs)(l.Clickable, {
                      className: h.expandableDescriptionClickable,
                      onClick: () => o((e) => !e),
                      children: [
                          (0, a.jsx)(l.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: b ? _.intl.string(_.t.u4YJ8v) : _.intl.string(_.t['N/tajI'])
                          }),
                          b
                              ? (0, a.jsx)(l.ChevronSmallUpIcon, {
                                    size: 'sm',
                                    color: l.tokens.colors.TEXT_BRAND
                                })
                              : (0, a.jsx)(l.ChevronSmallDownIcon, {
                                    size: 'sm',
                                    color: l.tokens.colors.TEXT_BRAND
                                })
                      ]
                  })
                : null
        ]
    });
}
function y() {
    let e = s.useRef(null),
        [n, r] = s.useState(null),
        [i, a] = s.useState(null);
    return (
        s.useLayoutEffect(() => {
            let n = e.current;
            if (null === n || 0 === n.clientHeight) return;
            let i = parseInt(getComputedStyle(n).lineHeight);
            if (!isNaN(i)) r(i), a(Math.floor(n.clientHeight / i));
        }, []),
        {
            ref: e,
            lineHeight: n,
            lineCount: i
        }
    );
}
