l.d(t, { A: () => P });
var a = l(627968),
    n = l(64700),
    s = l(503698),
    i = l.n(s),
    r = l(417597),
    d = l(990078),
    o = l(534514),
    c = l(475358),
    u = l(265872),
    m = l(821609),
    h = l(783977),
    p = l(408278),
    f = l(625903),
    v = l(892547),
    g = l(939249),
    x = l(834730),
    j = l(176781),
    b = l(27232),
    C = l(573613),
    y = l(429913),
    A = l(769015),
    N = l(780964),
    E = l(858897),
    w = l(532624),
    k = l(350535),
    I = l(726574),
    S = l(792852),
    L = l(652215),
    M = l(16590),
    R = l(985018),
    T = l(174726);
let D = n.memo(function (e) {
        let { allClips: t } = e,
            { query: l, setQuery: s } = (0, S.P)(),
            i = (0, r.bG)([w.Ay], () => w.Ay.getKeybindForAction(L.hCu.SAVE_CLIP)),
            g = (0, S.P)(
                (e) =>
                    +(e.selectedUserIds.size > 0) +
                    +(null != e.selectedActivity) +
                    +(null != e.selectedGuildId) +
                    +(null != e.selectedYear),
            ),
            x = n.useCallback(() => {
                (0, E.openUserSettings)(N.X.CLIPS_PANEL);
            }, []),
            j = n.useCallback(() => s(""), [s]),
            b = null != i ? k.dI(i.shortcut, !0) : null,
            C = n.useRef(null);
        return (0, a.jsxs)("div", {
            className: T.aN,
            children: [
                (0, a.jsxs)("div", {
                    className: T.Nr,
                    children: [
                        (0, a.jsxs)("div", {
                            className: T.Pe,
                            children: [
                                (0, a.jsx)(o.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: R.intl.string(R.t.z2jK6X),
                                }),
                                null != b && (0, a.jsx)(c.e, { className: T.P, shortcut: b }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: T.$s,
                            children: [
                                (0, a.jsx)(d.m, {
                                    text: R.intl.string(R.t.X7yRDm),
                                    children: (0, a.jsx)(u.Y, {
                                        position: "bottom",
                                        targetElementRef: C,
                                        renderPopout: (e) => (0, a.jsx)(I.A, { ...e, allClips: t }),
                                        children: (e) =>
                                            (0, a.jsx)("div", {
                                                ref: C,
                                                children:
                                                    g > 0
                                                        ? (0, a.jsx)(m.$, {
                                                              size: "sm",
                                                              variant: "secondary",
                                                              ...e,
                                                              text: R.intl.formatToPlainString(M.default.JbyR1U, {
                                                                  count: g,
                                                              }),
                                                              icon: h.R,
                                                              iconPosition: "end",
                                                          })
                                                        : (0, a.jsx)(p.K, {
                                                              icon: h.R,
                                                              ...e,
                                                              size: "sm",
                                                              variant: "icon-only",
                                                              "aria-label": R.intl.string(R.t.X7yRDm),
                                                          }),
                                            }),
                                    }),
                                }),
                                (0, a.jsx)(d.m, {
                                    text: R.intl.string(R.t["3D5yo/"]),
                                    children: (0, a.jsx)(p.K, {
                                        onClick: x,
                                        icon: f.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": R.intl.string(R.t["3D5yo/"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: T.MT,
                    children: (0, a.jsx)(v.I, {
                        placeholder: R.intl.string(R.t["5h0QOP"]),
                        query: l,
                        onChange: s,
                        onClear: j,
                        size: "md",
                    }),
                }),
            ],
        });
    }),
    O = n.memo(function (e) {
        let { name: t, count: l, icon: n, isSelected: s, onClick: r } = e;
        return (0, a.jsxs)(g.D, {
            className: i()(T.MV, { [T.wH]: s }),
            onClick: r,
            children: [
                (0, a.jsxs)("div", {
                    className: T.tk,
                    children: [
                        n,
                        (0, a.jsx)(x.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: T.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: T.z2,
                    children: (0, a.jsx)(x.E, { variant: "text-xs/semibold", color: "currentColor", children: l }),
                }),
            ],
        });
    });
function P(e) {
    let { clipsByGame: t, filteredClips: l, favoriteClips: s, allClips: i } = e,
        r = (0, S.P)((e) => e.selectedGameId),
        d = (0, S.P)((e) => e.setSelectedGameId),
        c = n.useMemo(() => t.map((e) => e.applicationId), [t]),
        u = (0, y.A)(c),
        m = n.useCallback(() => d(null), [d]),
        h = n.useCallback(() => d("favorites"), [d]),
        p = n.useMemo(() => new Map(u.map((e) => [e?.id, e])), [u]);
    return (0, a.jsxs)("div", {
        className: T.pz,
        children: [
            (0, a.jsx)(D, { allClips: i }),
            (0, a.jsxs)("div", {
                className: T.wp,
                children: [
                    (0, a.jsx)("div", {
                        className: T.om,
                        children: (0, a.jsxs)("div", {
                            className: T.Ep,
                            children: [
                                (0, a.jsx)(O, {
                                    name: R.intl.string(R.t.dPVrEv),
                                    count: l.length,
                                    icon: (0, a.jsx)(j.x, {}),
                                    isSelected: null === r,
                                    onClick: m,
                                }),
                                (0, a.jsx)(O, {
                                    name: R.intl.string(R.t["9rlCk1"]),
                                    count: s.length,
                                    icon: (0, a.jsx)(b.G, {}),
                                    isSelected: "favorites" === r,
                                    onClick: h,
                                }),
                            ],
                        }),
                    }),
                    t.length > 0 &&
                        (0, a.jsxs)(C.Ip, {
                            className: T.om,
                            fade: !0,
                            children: [
                                (0, a.jsx)(o.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: T.a9,
                                    children: R.intl.string(R.t.URyqtP),
                                }),
                                (0, a.jsx)("div", {
                                    className: T.Ep,
                                    children: t.map((e) => {
                                        let { name: t, count: l, applicationId: n } = e;
                                        return (0, a.jsx)(
                                            O,
                                            {
                                                name: t,
                                                count: l,
                                                icon: (0, a.jsx)(A.A, { game: p.get(n), size: A.M.XSMALL }),
                                                isSelected: r === n,
                                                onClick: () => d(n),
                                            },
                                            n,
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
