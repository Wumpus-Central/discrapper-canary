l.d(t, {
    A: () => C,
}),
    l(896048);
var n = l(627968),
    r = l(64700),
    i = l(503698),
    a = l.n(i),
    s = l(417597),
    c = l(990078),
    o = l(397927),
    u = l(442433),
    d = l(429913),
    p = l(769015),
    m = l(780964),
    f = l(840065),
    y = l(532624),
    b = l(350535),
    v = l(792852),
    j = l(652215),
    h = l(985018),
    g = l(410387);
let O = r.memo(function (e) {
        let { allClips: t } = e,
            { query: i, setQuery: a } = (0, v.P)(),
            d = (0, s.bG)([y.Ay], () => y.Ay.getKeybindForAction(j.hCu.SAVE_CLIP)),
            p = (0, v.P)(
                (e) =>
                    e.selectedUserIds.size > 0 ||
                    null != e.selectedActivity ||
                    null != e.selectedGuildId ||
                    null != e.selectedYear,
            ),
            O = r.useCallback(() => {
                (0, f.openUserSettings)(m.X.CLIPS_PANEL);
            }, []),
            x = r.useCallback(
                (e) => {
                    (0, u.L3)(e, async () => {
                        let { default: e } = await l.e("8067").then(l.bind(l, 726574));
                        return (l) => {
                            var r, i;
                            return (0, n.jsx)(
                                e,
                                ((r = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var l = null != arguments[t] ? arguments[t] : {},
                                            n = Object.keys(l);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (n = n.concat(
                                                Object.getOwnPropertySymbols(l).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                                }),
                                            )),
                                            n.forEach(function (t) {
                                                var n;
                                                (n = l[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: n,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = n);
                                            });
                                    }
                                    return e;
                                })({}, l)),
                                (i = i =
                                    {
                                        allClips: t,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var l = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var n = Object.getOwnPropertySymbols(e);
                                              l.push.apply(l, n);
                                          }
                                          return l;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                                      }),
                                r),
                            );
                        };
                    });
                },
                [t],
            ),
            C = r.useCallback(() => a(""), [a]),
            w = null != d ? b.dI(d.shortcut, !0) : null;
        return (0, n.jsxs)("div", {
            className: g.aN,
            children: [
                (0, n.jsxs)("div", {
                    className: g.Nr,
                    children: [
                        (0, n.jsxs)("div", {
                            className: g.Pe,
                            children: [
                                (0, n.jsx)(o.Heading, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: h.intl.string(h.t.z2jK6X),
                                }),
                                null != w &&
                                    (0, n.jsx)(o.e7I, {
                                        className: g.P,
                                        shortcut: w,
                                    }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: g.$s,
                            children: [
                                (0, n.jsx)(c.m, {
                                    text: h.intl.string(h.t.X7yRDm),
                                    children: (0, n.jsx)(o.K0, {
                                        onClick: x,
                                        icon: o.RgP,
                                        size: "sm",
                                        variant: p ? "active" : "icon-only",
                                        "aria-label": h.intl.string(h.t.X7yRDm),
                                    }),
                                }),
                                (0, n.jsx)(c.m, {
                                    text: h.intl.string(h.t["3D5yo/"]),
                                    children: (0, n.jsx)(o.K0, {
                                        onClick: O,
                                        icon: o.Zes,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": h.intl.string(h.t["3D5yo/"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: g.MT,
                    children: (0, n.jsx)(o.IWV, {
                        placeholder: h.intl.string(h.t["5h0QOP"]),
                        query: i,
                        onChange: a,
                        onClear: C,
                        size: "md",
                    }),
                }),
            ],
        });
    }),
    x = r.memo(function (e) {
        let { name: t, count: l, icon: r, isSelected: i, onClick: s } = e;
        return (0, n.jsxs)(o.DUT, {
            className: a()(g.MV, {
                [g.wH]: i,
            }),
            onClick: s,
            children: [
                (0, n.jsxs)("div", {
                    className: g.tk,
                    children: [
                        r,
                        (0, n.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: g.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: g.z2,
                    children: (0, n.jsx)(o.Text, {
                        variant: "text-xs/semibold",
                        color: "currentColor",
                        children: l,
                    }),
                }),
            ],
        });
    });

function C(e) {
    let { clipsByGame: t, filteredClips: l, favoriteClips: i, allClips: a } = e,
        s = (0, v.P)((e) => e.selectedGameId),
        c = (0, v.P)((e) => e.setSelectedGameId),
        u = r.useMemo(() => t.map((e) => e.applicationId), [t]),
        m = (0, d.A)(u),
        f = r.useCallback(() => c(null), [c]),
        y = r.useCallback(() => c("favorites"), [c]),
        b = r.useMemo(() => new Map(m.map((e) => [null == e ? void 0 : e.id, e])), [m]);
    return (0, n.jsxs)("div", {
        className: g.pz,
        children: [
            (0, n.jsx)(O, {
                allClips: a,
            }),
            (0, n.jsxs)(o.IpV, {
                className: g.wp,
                fade: !0,
                children: [
                    (0, n.jsx)("div", {
                        className: g.om,
                        children: (0, n.jsxs)("div", {
                            className: g.CW,
                            children: [
                                (0, n.jsx)(x, {
                                    name: h.intl.string(h.t.dPVrEv),
                                    count: l.length,
                                    icon: (0, n.jsx)(o.xgA, {}),
                                    isSelected: null === s,
                                    onClick: f,
                                }),
                                (0, n.jsx)(x, {
                                    name: h.intl.string(h.t["9rlCk1"]),
                                    count: i.length,
                                    icon: (0, n.jsx)(o.C3E, {}),
                                    isSelected: "favorites" === s,
                                    onClick: y,
                                }),
                            ],
                        }),
                    }),
                    t.length > 0 &&
                        (0, n.jsxs)("div", {
                            className: g.om,
                            children: [
                                (0, n.jsx)(o.Heading, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: g.a9,
                                    children: h.intl.string(h.t.URyqtP),
                                }),
                                (0, n.jsx)("div", {
                                    className: g.CW,
                                    children: t.map((e) => {
                                        let { name: t, count: l, applicationId: r } = e;
                                        return (0, n.jsx)(
                                            x,
                                            {
                                                name: t,
                                                count: l,
                                                icon: (0, n.jsx)(p.A, {
                                                    game: b.get(r),
                                                    size: p.M.XSMALL,
                                                }),
                                                isSelected: s === r,
                                                onClick: () => c(r),
                                            },
                                            r,
                                        );
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
