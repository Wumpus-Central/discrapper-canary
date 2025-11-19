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
    _ = n(443663),
    p = n(430864),
    h = n(413097);
function m(e, t, n) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
let E = 84;
function b(e) {
    let { application: t, onSelect: n } = e,
        c = (0, d.X)(),
        { iconURL: p } = i.useMemo(
            () =>
                (0, s.sl)(t, {
                    fakeAppIconURL: h,
                    size: E,
                }),
            [t],
        ),
        m = i.useMemo(
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
        className: _.container,
        children: [
            (0, r.jsxs)("header", {
                id: c,
                className: _.header,
                children: [
                    (0, r.jsx)(l.Z, {
                        src: p,
                        className: _.appIcon,
                        rendersPlaceholder: !0,
                    }),
                    (0, r.jsx)(O, { application: t }),
                    (0, r.jsx)(y, { application: t }),
                ],
            }),
            (0, r.jsx)("ul", {
                className: _.rows,
                children: m.map((e) =>
                    (0, r.jsxs)(
                        o.P3F,
                        {
                            tag: "li",
                            className: _.row,
                            onClick: () => n(e.type),
                            children: [
                                (0, r.jsx)(e.icon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: _.leftIcon,
                                }),
                                (0, r.jsxs)("div", {
                                    className: _.rowInner,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: _.rowDetails,
                                            children: [
                                                (0, r.jsx)(o.Text, {
                                                    variant: "text-md/medium",
                                                    color: "interactive-active",
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
                                            className: _.rightIcon,
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
              className: _.detailsContainer,
              children: (0, r.jsx)("div", {
                  className: _.overviewContainerNoVideo,
                  children: null != n && n.length > 0 ? (0, r.jsx)(I, { description: n }) : null,
              }),
          });
}
function O(e) {
    let { application: t } = e,
        n = t.name,
        i = (0, s.vJ)(t);
    return (0, r.jsxs)("div", {
        className: _.titleContainer,
        children: [
            (0, r.jsx)(o.Heading, {
                variant: "heading-xl/extrabold",
                lineClamp: 1,
                children: n,
            }),
            i
                ? (0, r.jsx)("div", {
                      className: _.partnerLabelContainer,
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
function I(e) {
    let { description: t } = e,
        [a, s] = i.useState(!0);
    i.useLayoutEffect(() => s(!1), []);
    let l = i.useMemo(() => {
            let { parseBioReact: e } = n(240991);
            return e(t);
        }, [t]),
        { ref: u, lineHeight: d, lineCount: h } = T(),
        m = i.useMemo(() => {
            if (null == d || null == h) return { key: 0 };
            let e = d * h;
            return {
                key: 1,
                minHeightOverride: Math.min(e, v * d),
                maxHeightOverride: e,
            };
        }, [h, d]),
        { ref: E, isTransitioning: b, onTransitionEnd: y } = (0, c.Z)(g({ isExpanded: a }, m)),
        O = a || b;
    return (0, r.jsxs)("div", {
        className: _.descriptionContainer,
        children: [
            (0, r.jsx)("div", {
                ref: E,
                className: _.overflowHidden,
                onTransitionEnd: y,
                children: (0, r.jsx)(o.Text, {
                    ref: u,
                    className: p.markup,
                    variant: "text-sm/medium",
                    lineClamp: O ? void 0 : v,
                    style: { maxHeight: O ? void 0 : m.minHeightOverride },
                    children: l,
                }),
            }),
            null != h && h > v
                ? (0, r.jsxs)(o.P3F, {
                      className: _.expandableDescriptionClickable,
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
function T() {
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
