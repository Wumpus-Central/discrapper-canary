n.d(t, { Z: () => b }), n(953529), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(373793),
    o = n(481060),
    s = n(783097),
    l = n(753972),
    c = n(520315),
    u = n(688465),
    d = n(314583),
    f = n(388032),
    p = n(443663),
    _ = n(430864),
    m = n(413097);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
let E = 84;
function b(e) {
    let { application: t, onSelect: n } = e,
        c = (0, d.X)(),
        { iconURL: _ } = i.useMemo(
            () =>
                (0, s.sl)(t, {
                    fakeAppIconURL: m,
                    size: E,
                }),
            [t],
        ),
        h = i.useMemo(
            () =>
                [
                    {
                        type: a.Y.USER_INSTALL,
                        icon: o.oLu,
                        title: f.intl.string(f.t.aCg60P),
                        subtitle: f.intl.string(f.t.YeiIUZ),
                        beta: !1,
                    },
                    {
                        type: a.Y.GUILD_INSTALL,
                        icon: o.QTo,
                        title: f.intl.string(f.t.E64YCz),
                        subtitle: f.intl.string(f.t.bbtoKm),
                        beta: !1,
                    },
                ].filter((e) => {
                    var n, r;
                    return (
                        (null == (r = t.integrationTypesConfig) || null == (n = r[e.type])
                            ? void 0
                            : n.oauth2InstallParams) != null
                    );
                }),
            [t.integrationTypesConfig],
        );
    return (0, r.jsxs)("div", {
        className: p.container,
        children: [
            (0, r.jsxs)("header", {
                id: c,
                className: p.header,
                children: [
                    (0, r.jsx)(l.Z, {
                        src: _,
                        className: p.appIcon,
                        rendersPlaceholder: !0,
                    }),
                    (0, r.jsx)(O, { application: t }),
                    (0, r.jsx)(y, { application: t }),
                ],
            }),
            (0, r.jsx)("ul", {
                className: p.rows,
                children: h.map((e) =>
                    (0, r.jsxs)(
                        o.P3F,
                        {
                            tag: "li",
                            className: p.row,
                            onClick: () => n(e.type),
                            children: [
                                (0, r.jsx)(e.icon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: p.leftIcon,
                                }),
                                (0, r.jsxs)("div", {
                                    className: p.rowInner,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: p.rowDetails,
                                            children: [
                                                (0, r.jsx)(o.Text, {
                                                    variant: "text-md/medium",
                                                    color: "interactive-text-active",
                                                    children: e.title,
                                                }),
                                                (0, r.jsx)(o.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "text-muted",
                                                    children: e.subtitle,
                                                }),
                                            ],
                                        }),
                                        e.beta && (0, r.jsx)(u.Z, {}),
                                        (0, r.jsx)(o.Fbu, {
                                            size: "md",
                                            color: "currentColor",
                                            className: p.rightIcon,
                                        }),
                                    ],
                                }),
                            ],
                        },
                        e.type,
                    ),
                ),
            }),
        ],
    });
}
function y(e) {
    let { application: t } = e,
        n = t.description;
    return null == n || 0 === n.length
        ? null
        : (0, r.jsx)("div", {
              className: p.detailsContainer,
              children: (0, r.jsx)("div", {
                  className: p.overviewContainerNoVideo,
                  children: null != n && n.length > 0 ? (0, r.jsx)(S, { description: n }) : null,
              }),
          });
}
function O(e) {
    let { application: t } = e,
        n = t.name,
        i = (0, s.vJ)(t);
    return (0, r.jsxs)("div", {
        className: p.titleContainer,
        children: [
            (0, r.jsx)(o.Heading, {
                variant: "heading-xl/extrabold",
                lineClamp: 1,
                children: n,
            }),
            i
                ? (0, r.jsx)("div", {
                      className: p.partnerLabelContainer,
                      children: (0, r.jsx)(o.Text, {
                          variant: "text-xs/medium",
                          color: "text-default",
                          children: f.intl.string(f.t.LO4f0P),
                      }),
                  })
                : null,
        ],
    });
}
let v = 3;
function S(e) {
    let { description: t } = e,
        [a, s] = i.useState(!0);
    i.useLayoutEffect(() => s(!1), []);
    let l = i.useMemo(() => {
            let { parseBioReact: e } = n(240991);
            return e(t);
        }, [t]),
        { ref: u, lineHeight: d, lineCount: m } = I(),
        h = i.useMemo(() => {
            if (null == d || null == m) return { key: 0 };
            let e = d * m;
            return {
                key: 1,
                minHeightOverride: Math.min(e, v * d),
                maxHeightOverride: e,
            };
        }, [m, d]),
        { ref: E, isTransitioning: b, onTransitionEnd: y } = (0, c.Z)(g({ isExpanded: a }, h)),
        O = a || b;
    return (0, r.jsxs)("div", {
        className: p.descriptionContainer,
        children: [
            (0, r.jsx)("div", {
                ref: E,
                className: p.overflowHidden,
                onTransitionEnd: y,
                children: (0, r.jsx)(o.Text, {
                    ref: u,
                    className: _.markup,
                    variant: "text-sm/medium",
                    lineClamp: O ? void 0 : v,
                    style: { maxHeight: O ? void 0 : h.minHeightOverride },
                    children: l,
                }),
            }),
            null != m && m > v
                ? (0, r.jsxs)(o.P3F, {
                      className: p.expandableDescriptionClickable,
                      onClick: () => s((e) => !e),
                      children: [
                          (0, r.jsx)(o.Text, {
                              variant: "text-sm/semibold",
                              color: "text-brand",
                              children: O ? f.intl.string(f.t.u4YJ8g) : f.intl.string(f.t["N/tajD"]),
                          }),
                          O
                              ? (0, r.jsx)(o.u04, {
                                    size: "sm",
                                    color: o.TVs.colors.TEXT_BRAND,
                                })
                              : (0, r.jsx)(o.CJ0, {
                                    size: "sm",
                                    color: o.TVs.colors.TEXT_BRAND,
                                }),
                      ],
                  })
                : null,
        ],
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
            lineCount: r,
        }
    );
}
