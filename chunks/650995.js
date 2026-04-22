l.d(t, { A: () => P });
var n = l(627968),
    a = l(64700),
    i = l(503698),
    s = l.n(i),
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
let D = a.memo(function (e) {
        let { allClips: t } = e,
            { query: l, setQuery: i } = (0, S.P)(),
            s = (0, r.bG)([w.Ay], () => w.Ay.getKeybindForAction(L.hCu.SAVE_CLIP)),
            g = (0, S.P)(
                (e) =>
                    +(e.selectedUserIds.size > 0) +
                    +(null != e.selectedActivity) +
                    +(null != e.selectedGuildId) +
                    +(null != e.selectedYear),
            ),
            x = a.useCallback(() => {
                (0, E.openUserSettings)(N.X.CLIPS_PANEL);
            }, []),
            j = a.useCallback(() => i(""), [i]),
            b = null != s ? k.dI(s.shortcut, !0) : null,
            C = a.useRef(null);
        return (0, n.jsxs)("div", {
            className: T.aN,
            children: [
                (0, n.jsxs)("div", {
                    className: T.Nr,
                    children: [
                        (0, n.jsxs)("div", {
                            className: T.Pe,
                            children: [
                                (0, n.jsx)(o.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: R.intl.string(R.t.z2jK6X),
                                }),
                                null != b && (0, n.jsx)(c.e, { className: T.P, shortcut: b }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: T.$s,
                            children: [
                                (0, n.jsx)(d.m, {
                                    text: R.intl.string(R.t.X7yRDm),
                                    children: (0, n.jsx)(u.Y, {
                                        position: "bottom",
                                        targetElementRef: C,
                                        renderPopout: (e) => (0, n.jsx)(I.A, { ...e, allClips: t }),
                                        children: (e) =>
                                            (0, n.jsx)("div", {
                                                ref: C,
                                                children:
                                                    g > 0
                                                        ? (0, n.jsx)(m.$, {
                                                              size: "sm",
                                                              variant: "secondary",
                                                              ...e,
                                                              text: R.intl.formatToPlainString(M.default.JbyR1U, {
                                                                  count: g,
                                                              }),
                                                              icon: h.R,
                                                              iconPosition: "end",
                                                          })
                                                        : (0, n.jsx)(p.K, {
                                                              icon: h.R,
                                                              ...e,
                                                              size: "sm",
                                                              variant: "icon-only",
                                                              "aria-label": R.intl.string(R.t.X7yRDm),
                                                          }),
                                            }),
                                    }),
                                }),
                                (0, n.jsx)(d.m, {
                                    text: R.intl.string(R.t["3D5yo/"]),
                                    children: (0, n.jsx)(p.K, {
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
                (0, n.jsx)("div", {
                    className: T.MT,
                    children: (0, n.jsx)(v.I, {
                        placeholder: R.intl.string(R.t["5h0QOP"]),
                        query: l,
                        onChange: i,
                        onClear: j,
                        size: "md",
                    }),
                }),
            ],
        });
    }),
    O = a.memo(function (e) {
        let { name: t, count: l, icon: a, isSelected: i, onClick: r } = e;
        return (0, n.jsxs)(g.D, {
            className: s()(T.MV, { [T.wH]: i }),
            onClick: r,
            children: [
                (0, n.jsxs)("div", {
                    className: T.tk,
                    children: [
                        a,
                        (0, n.jsx)(x.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: T.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: T.z2,
                    children: (0, n.jsx)(x.E, { variant: "text-xs/semibold", color: "currentColor", children: l }),
                }),
            ],
        });
    });
function P(e) {
    let { clipsByGame: t, filteredClips: l, favoriteClips: i, allClips: s } = e,
        r = (0, S.P)((e) => e.selectedGameId),
        d = (0, S.P)((e) => e.setSelectedGameId),
        c = a.useMemo(() => t.map((e) => e.applicationId), [t]),
        u = (0, y.A)(c),
        m = a.useCallback(() => d(null), [d]),
        h = a.useCallback(() => d("favorites"), [d]),
        p = a.useMemo(() => new Map(u.map((e) => [e?.id, e])), [u]);
    return (0, n.jsxs)("div", {
        className: T.pz,
        children: [
            (0, n.jsx)(D, { allClips: s }),
            (0, n.jsxs)("div", {
                className: T.wp,
                children: [
                    (0, n.jsx)("div", {
                        className: T.om,
                        children: (0, n.jsxs)("div", {
                            className: T.Ep,
                            children: [
                                (0, n.jsx)(O, {
                                    name: R.intl.string(R.t.dPVrEv),
                                    count: l.length,
                                    icon: (0, n.jsx)(j.x, {}),
                                    isSelected: null === r,
                                    onClick: m,
                                }),
                                (0, n.jsx)(O, {
                                    name: R.intl.string(R.t["9rlCk1"]),
                                    count: i.length,
                                    icon: (0, n.jsx)(b.G, {}),
                                    isSelected: "favorites" === r,
                                    onClick: h,
                                }),
                            ],
                        }),
                    }),
                    t.length > 0 &&
                        (0, n.jsxs)(C.Ip, {
                            className: T.om,
                            fade: !0,
                            children: [
                                (0, n.jsx)(o.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: T.a9,
                                    children: R.intl.string(R.t.URyqtP),
                                }),
                                (0, n.jsx)("div", {
                                    className: T.Ep,
                                    children: t.map((e) => {
                                        let { name: t, count: l, applicationId: a } = e;
                                        return (0, n.jsx)(
                                            O,
                                            {
                                                name: t,
                                                count: l,
                                                icon: (0, n.jsx)(A.A, { game: p.get(a), size: A.M.XSMALL }),
                                                isSelected: r === a,
                                                onClick: () => d(a),
                                            },
                                            a,
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
