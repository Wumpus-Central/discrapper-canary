(n.d(t, { default: () => v }), n(321073));
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
    g = n(734057),
    x = n(71393),
    p = n(174459),
    y = n(147036),
    A = n(517622),
    E = n(86944),
    f = n(719366),
    m = n(652215),
    b = n(105292),
    j = n(496434);
function v(e) {
    let { channelId: t, ...n } = e,
        r = (0, l.bG)([g.A], () => g.A.getChannel(t), [t]),
        a = (0, l.bG)([x.A], () => x.A.getGuild(r?.getGuildId()));
    return (s.useEffect(() => {
        p.default.track(m.HAw.OPEN_MODAL, { type: "Grant Channel Access" });
    }, []),
    null == r || null == a)
        ? null
        : (0, i.jsx)(k, { guild: a, channel: r, ...n });
}
function k(e) {
    let { guild: t, channel: n, onClose: l, newChannel: g, inSettings: x, ...p } = e,
        [m, v] = s.useState(""),
        [k, w] = s.useState({}),
        [C, R] = s.useState(!1),
        [S, T] = s.useState(null),
        G = s.useRef(null),
        H = (0, u.Ay)(n),
        { roles: O, members: N, getRichTag: M } = (0, E.K)(t, n, n.accessPermissions, m),
        _ = A.A.useSections({ roles: O, members: N }),
        I = g && 0 === Object.keys(k).length;
    async function L() {
        if (null == n || 0 === Object.keys(k).length) return void l();
        R(!0);
        try {
            var e, t, i;
            let s;
            (await ((e = n),
            (t = k),
            (i = x),
            (s = []),
            Object.values(t).forEach((t) => {
                let { row: n } = t;
                null != n.id &&
                    "" !== n.id &&
                    (n.rowType === f.T6.ROLE
                        ? s.push((0, y.we)(n.id, e.type))
                        : n.rowType === f.T6.MEMBER && s.push((0, y.n3)(n.id, e.type)));
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
    return (0, i.jsx)(A.A.Provider, {
        listRef: G,
        query: m,
        setQuery: v,
        pendingAdditions: k,
        setPendingAdditions: w,
        roles: O,
        members: N,
        getRichTag: M,
        children: (0, i.jsx)(A.A.Modal, {
            ...p,
            title: b.intl.string(b.t.dMJ3Y6),
            onClose: l,
            input: (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)(c.E, {
                        className: j.HA,
                        variant: "body-lg/normal",
                        color: "text-default",
                        children: [(0, i.jsx)(P, { className: j.p, size: "sm", color: "currentColor" }), H],
                    }),
                    n.isGuildStageVoice() &&
                        (0, i.jsx)(c.E, {
                            color: "text-default",
                            className: j.h_,
                            variant: "body-sm/normal",
                            children: b.intl.string(b.t.f7VbhF),
                        }),
                    (0, i.jsx)(A.A.SearchBox, { placeholderText: b.intl.string(b.t.iezLLn) }),
                    (0, i.jsx)(c.E, {
                        className: j.W$,
                        variant: "body-xs/normal",
                        children: b.intl.string(b.t.rwFx85),
                    }),
                    null != S
                        ? (0, i.jsx)(c.E, {
                              className: j.W$,
                              variant: "body-xs/normal",
                              color: "text-feedback-critical",
                              children: S.getAnyErrorMessage(),
                          })
                        : null,
                ],
            }),
            listProps: {
                sectionHeight: A.A.SECTION_HEIGHT,
                renderSection: A.A.renderSection,
                rowHeight: A.A.ROW_HEIGHT,
                renderRow: A.A.renderRow,
                sections: _,
            },
            actions: I
                ? [{ variant: "secondary", text: b.intl.string(b.t.u46sxe), onClick: l }]
                : [
                      { variant: "secondary", text: b.intl.string(b.t["ETE/oC"]), onClick: l },
                      { variant: "primary", text: b.intl.string(b.t.i4jeWR), onClick: L, loading: C },
                  ],
        }),
    });
}
