(n.d(t, { default: () => k }), n(321073));
var i = n(477900),
    s = n(582128),
    l = n(17928),
    r = n(770880),
    a = n(146151),
    c = n(834730),
    o = n(702805),
    d = n(913122),
    u = n(47167),
    h = n(95701),
    x = n(734057),
    g = n(71393),
    p = n(174459),
    A = n(147036),
    y = n(517622),
    E = n(86944),
    f = n(719366),
    m = n(652215),
    j = n(105292),
    v = n(496434);
function k(e) {
    let { channelId: t, ...n } = e,
        r = (0, l.bG)([x.A], () => x.A.getChannel(t), [t]),
        a = (0, l.bG)([g.A], () => g.A.getGuild(r?.getGuildId()));
    return (s.useEffect(() => {
        p.default.track(m.HAw.OPEN_MODAL, { type: "Grant Channel Access" });
    }, []),
    null == r || null == a)
        ? null
        : (0, i.jsx)(w, { guild: a, channel: r, ...n });
}
function w(e) {
    let { guild: t, channel: n, onClose: l, newChannel: x, inSettings: g, ...p } = e,
        [m, k] = s.useState(""),
        [w, C] = s.useState({}),
        [b, R] = s.useState(!1),
        [S, T] = s.useState(null),
        G = s.useRef(null),
        H = (0, u.Ay)(n),
        { roles: O, members: N, getRichTag: M } = (0, E.K)(t, n, n.accessPermissions, m),
        _ = y.A.useSections({ roles: O, members: N }),
        I = x && 0 === Object.keys(w).length;
    async function L() {
        if (null == n || 0 === Object.keys(w).length) return void l();
        R(!0);
        try {
            var e, t, i;
            let s;
            (await ((e = n),
            (t = w),
            (i = g),
            (s = []),
            Object.values(t).forEach((t) => {
                let { row: n } = t;
                null != n.id &&
                    "" !== n.id &&
                    (n.rowType === f.T6.ROLE
                        ? s.push((0, A.we)(n.id, e.type))
                        : n.rowType === f.T6.MEMBER && s.push((0, A.n3)(n.id, e.type)));
            }),
            (0, o.R$)(e.id, s, i)),
                l(),
                R(!1));
        } catch (t) {
            let e = new d.LG(t);
            (R(!1), T(e));
        }
    }
    let P = (0, h.ke)(n.type) ? r.I : a.t;
    return (0, i.jsx)(y.A.Provider, {
        listRef: G,
        query: m,
        setQuery: k,
        pendingAdditions: w,
        setPendingAdditions: C,
        roles: O,
        members: N,
        getRichTag: M,
        children: (0, i.jsx)(y.A.Modal, {
            ...p,
            title: j.intl.string(j.t.dMJ3Y6),
            onClose: l,
            input: (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)(c.E, {
                        className: v.HA,
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: [(0, i.jsx)(P, { className: v.p, size: "sm", color: "currentColor" }), H],
                    }),
                    n.isGuildStageVoice() &&
                        (0, i.jsx)(c.E, {
                            color: "text-default",
                            className: v.h_,
                            variant: "text-sm/normal",
                            children: j.intl.string(j.t.f7VbhF),
                        }),
                    (0, i.jsx)(y.A.SearchBox, { placeholderText: j.intl.string(j.t.iezLLn) }),
                    (0, i.jsx)(c.E, {
                        className: v.W$,
                        variant: "text-xs/normal",
                        children: j.intl.string(j.t.rwFx85),
                    }),
                    null != S
                        ? (0, i.jsx)(c.E, {
                              className: v.W$,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: S.getAnyErrorMessage(),
                          })
                        : null,
                ],
            }),
            listProps: {
                sectionHeight: y.A.SECTION_HEIGHT,
                renderSection: y.A.renderSection,
                rowHeight: y.A.ROW_HEIGHT,
                renderRow: y.A.renderRow,
                sections: _,
            },
            actions: I
                ? [{ variant: "secondary", text: j.intl.string(j.t.u46sxe), onClick: l }]
                : [
                      { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: l },
                      { variant: "primary", text: j.intl.string(j.t.i4jeWR), onClick: L, loading: b },
                  ],
        }),
    });
}
