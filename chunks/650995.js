l.d(t, { A: () => A });
var n = l(627968),
    a = l(64700),
    i = l(503698),
    s = l.n(i),
    r = l(417597),
    d = l(990078),
    o = l(397927),
    c = l(429913),
    u = l(769015),
    m = l(780964),
    h = l(858897),
    p = l(532624),
    x = l(350535),
    f = l(726574),
    g = l(792852),
    v = l(652215),
    j = l(16590),
    b = l(985018),
    C = l(174726);
let y = a.memo(function (e) {
        let { allClips: t } = e,
            { query: l, setQuery: i } = (0, g.P)(),
            s = (0, r.bG)([p.Ay], () => p.Ay.getKeybindForAction(v.hCu.SAVE_CLIP)),
            c = (0, g.P)(
                (e) =>
                    +(e.selectedUserIds.size > 0) +
                    +(null != e.selectedActivity) +
                    +(null != e.selectedGuildId) +
                    +(null != e.selectedYear),
            ),
            u = a.useCallback(() => {
                (0, h.openUserSettings)(m.X.CLIPS_PANEL);
            }, []),
            y = a.useCallback(() => i(""), [i]),
            N = null != s ? x.dI(s.shortcut, !0) : null,
            A = a.useRef(null);
        return (0, n.jsxs)("div", {
            className: C.aN,
            children: [
                (0, n.jsxs)("div", {
                    className: C.Nr,
                    children: [
                        (0, n.jsxs)("div", {
                            className: C.Pe,
                            children: [
                                (0, n.jsx)(o.Heading, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: b.intl.string(b.t.z2jK6X),
                                }),
                                null != N && (0, n.jsx)(o.e7I, { className: C.P, shortcut: N }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: C.$s,
                            children: [
                                (0, n.jsx)(d.m, {
                                    text: b.intl.string(b.t.X7yRDm),
                                    children: (0, n.jsx)(o.YNO, {
                                        position: "bottom",
                                        targetElementRef: A,
                                        renderPopout: (e) => (0, n.jsx)(f.A, { ...e, allClips: t }),
                                        children: (e) =>
                                            (0, n.jsx)("div", {
                                                ref: A,
                                                children:
                                                    c > 0
                                                        ? (0, n.jsx)(o.Button, {
                                                              size: "sm",
                                                              variant: "secondary",
                                                              ...e,
                                                              text: b.intl.formatToPlainString(j.default.JbyR1U, {
                                                                  count: c,
                                                              }),
                                                              icon: o.RgP,
                                                              iconPosition: "end",
                                                          })
                                                        : (0, n.jsx)(o.K0, {
                                                              icon: o.RgP,
                                                              ...e,
                                                              size: "sm",
                                                              variant: "icon-only",
                                                              "aria-label": b.intl.string(b.t.X7yRDm),
                                                          }),
                                            }),
                                    }),
                                }),
                                (0, n.jsx)(d.m, {
                                    text: b.intl.string(b.t["3D5yo/"]),
                                    children: (0, n.jsx)(o.K0, {
                                        onClick: u,
                                        icon: o.Zes,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": b.intl.string(b.t["3D5yo/"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: C.MT,
                    children: (0, n.jsx)(o.IWV, {
                        placeholder: b.intl.string(b.t["5h0QOP"]),
                        query: l,
                        onChange: i,
                        onClear: y,
                        size: "md",
                    }),
                }),
            ],
        });
    }),
    N = a.memo(function (e) {
        let { name: t, count: l, icon: a, isSelected: i, onClick: r } = e;
        return (0, n.jsxs)(o.DUT, {
            className: s()(C.MV, { [C.wH]: i }),
            onClick: r,
            children: [
                (0, n.jsxs)("div", {
                    className: C.tk,
                    children: [
                        a,
                        (0, n.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: C.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: C.z2,
                    children: (0, n.jsx)(o.Text, { variant: "text-xs/semibold", color: "currentColor", children: l }),
                }),
            ],
        });
    });
function A(e) {
    let { clipsByGame: t, filteredClips: l, favoriteClips: i, allClips: s } = e,
        r = (0, g.P)((e) => e.selectedGameId),
        d = (0, g.P)((e) => e.setSelectedGameId),
        m = a.useMemo(() => t.map((e) => e.applicationId), [t]),
        h = (0, c.A)(m),
        p = a.useCallback(() => d(null), [d]),
        x = a.useCallback(() => d("favorites"), [d]),
        f = a.useMemo(() => new Map(h.map((e) => [e?.id, e])), [h]);
    return (0, n.jsxs)("div", {
        className: C.pz,
        children: [
            (0, n.jsx)(y, { allClips: s }),
            (0, n.jsxs)("div", {
                className: C.wp,
                children: [
                    (0, n.jsx)("div", {
                        className: C.om,
                        children: (0, n.jsxs)("div", {
                            className: C.Ep,
                            children: [
                                (0, n.jsx)(N, {
                                    name: b.intl.string(b.t.dPVrEv),
                                    count: l.length,
                                    icon: (0, n.jsx)(o.xgA, {}),
                                    isSelected: null === r,
                                    onClick: p,
                                }),
                                (0, n.jsx)(N, {
                                    name: b.intl.string(b.t["9rlCk1"]),
                                    count: i.length,
                                    icon: (0, n.jsx)(o.Gg5, {}),
                                    isSelected: "favorites" === r,
                                    onClick: x,
                                }),
                            ],
                        }),
                    }),
                    t.length > 0 &&
                        (0, n.jsxs)(o.IpV, {
                            className: C.om,
                            fade: !0,
                            children: [
                                (0, n.jsx)(o.Heading, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: C.a9,
                                    children: b.intl.string(b.t.URyqtP),
                                }),
                                (0, n.jsx)("div", {
                                    className: C.Ep,
                                    children: t.map((e) => {
                                        let { name: t, count: l, applicationId: a } = e;
                                        return (0, n.jsx)(
                                            N,
                                            {
                                                name: t,
                                                count: l,
                                                icon: (0, n.jsx)(u.A, { game: f.get(a), size: u.M.XSMALL }),
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
