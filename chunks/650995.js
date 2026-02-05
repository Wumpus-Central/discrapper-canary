l.d(t, { A: () => I });
var i = l(627968),
    s = l(64700),
    a = l(503698),
    n = l.n(a),
    r = l(417597),
    d = l(990078),
    c = l(397927),
    o = l(442433),
    u = l(429913),
    m = l(769015),
    p = l(780964),
    h = l(840065),
    x = l(532624),
    C = l(350535),
    v = l(792852),
    g = l(652215),
    f = l(985018),
    j = l(410387);
let y = s.memo(function (e) {
        let { allClips: t } = e,
            { query: a, setQuery: n } = (0, v.P)(),
            u = (0, r.bG)([x.Ay], () => x.Ay.getKeybindForAction(g.hCu.SAVE_CLIP)),
            m = (0, v.P)(
                (e) =>
                    e.selectedUserIds.size > 0 ||
                    null != e.selectedActivity ||
                    null != e.selectedGuildId ||
                    null != e.selectedYear,
            ),
            y = s.useCallback(() => {
                (0, h.openUserSettings)(p.X.CLIPS_PANEL);
            }, []),
            A = s.useCallback(
                (e) => {
                    (0, o.L3)(e, async () => {
                        let { default: e } = await l.e("8067").then(l.bind(l, 726574));
                        return (l) => (0, i.jsx)(e, { ...l, allClips: t });
                    });
                },
                [t],
            ),
            I = s.useCallback(() => n(""), [n]),
            N = null != u ? C.dI(u.shortcut, !0) : null;
        return (0, i.jsxs)("div", {
            className: j.aN,
            children: [
                (0, i.jsxs)("div", {
                    className: j.Nr,
                    children: [
                        (0, i.jsxs)("div", {
                            className: j.Pe,
                            children: [
                                (0, i.jsx)(c.Heading, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: f.intl.string(f.t.z2jK6X),
                                }),
                                null != N && (0, i.jsx)(c.e7I, { className: j.P, shortcut: N }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: j.$s,
                            children: [
                                (0, i.jsx)(d.m, {
                                    text: f.intl.string(f.t.X7yRDm),
                                    children: (0, i.jsx)(c.K0, {
                                        onClick: A,
                                        icon: c.RgP,
                                        size: "sm",
                                        variant: m ? "active" : "icon-only",
                                        "aria-label": f.intl.string(f.t.X7yRDm),
                                    }),
                                }),
                                (0, i.jsx)(d.m, {
                                    text: f.intl.string(f.t["3D5yo/"]),
                                    children: (0, i.jsx)(c.K0, {
                                        onClick: y,
                                        icon: c.Zes,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": f.intl.string(f.t["3D5yo/"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: j.MT,
                    children: (0, i.jsx)(c.IWV, {
                        placeholder: f.intl.string(f.t["5h0QOP"]),
                        query: a,
                        onChange: n,
                        onClear: I,
                        size: "md",
                    }),
                }),
            ],
        });
    }),
    A = s.memo(function (e) {
        let { name: t, count: l, icon: s, isSelected: a, onClick: r } = e;
        return (0, i.jsxs)(c.DUT, {
            className: n()(j.MV, { [j.wH]: a }),
            onClick: r,
            children: [
                (0, i.jsxs)("div", {
                    className: j.tk,
                    children: [
                        s,
                        (0, i.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: j.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: j.z2,
                    children: (0, i.jsx)(c.Text, { variant: "text-xs/semibold", color: "currentColor", children: l }),
                }),
            ],
        });
    });
function I(e) {
    let { clipsByGame: t, filteredClips: l, favoriteClips: a, allClips: n } = e,
        r = (0, v.P)((e) => e.selectedGameId),
        d = (0, v.P)((e) => e.setSelectedGameId),
        o = s.useMemo(() => t.map((e) => e.applicationId), [t]),
        p = (0, u.A)(o),
        h = s.useCallback(() => d(null), [d]),
        x = s.useCallback(() => d("favorites"), [d]),
        C = s.useMemo(() => new Map(p.map((e) => [e?.id, e])), [p]);
    return (0, i.jsxs)("div", {
        className: j.pz,
        children: [
            (0, i.jsx)(y, { allClips: n }),
            (0, i.jsxs)(c.IpV, {
                className: j.wp,
                fade: !0,
                children: [
                    (0, i.jsx)("div", {
                        className: j.om,
                        children: (0, i.jsxs)("div", {
                            className: j.CW,
                            children: [
                                (0, i.jsx)(A, {
                                    name: f.intl.string(f.t.dPVrEv),
                                    count: l.length,
                                    icon: (0, i.jsx)(c.xgA, {}),
                                    isSelected: null === r,
                                    onClick: h,
                                }),
                                (0, i.jsx)(A, {
                                    name: f.intl.string(f.t["9rlCk1"]),
                                    count: a.length,
                                    icon: (0, i.jsx)(c.C3E, {}),
                                    isSelected: "favorites" === r,
                                    onClick: x,
                                }),
                            ],
                        }),
                    }),
                    t.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: j.om,
                            children: [
                                (0, i.jsx)(c.Heading, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: j.a9,
                                    children: f.intl.string(f.t.URyqtP),
                                }),
                                (0, i.jsx)("div", {
                                    className: j.CW,
                                    children: t.map((e) => {
                                        let { name: t, count: l, applicationId: s } = e;
                                        return (0, i.jsx)(
                                            A,
                                            {
                                                name: t,
                                                count: l,
                                                icon: (0, i.jsx)(m.A, { game: C.get(s), size: m.M.XSMALL }),
                                                isSelected: r === s,
                                                onClick: () => d(s),
                                            },
                                            s,
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
