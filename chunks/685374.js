n.d(t, { default: () => v }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(189213),
    s = n(311907),
    r = n(770880),
    o = n(146151),
    c = n(834730),
    d = n(702805),
    u = n(198982),
    h = n(47167),
    m = n(95701),
    A = n(734057),
    g = n(71393),
    _ = n(954571),
    p = n(147036),
    f = n(845202),
    E = n(86944),
    C = n(737045),
    x = n(652215),
    S = n(985018),
    I = n(142483);
function v(e) {
    let { channelId: t, ...n } = e,
        a = (0, s.bG)([A.A], () => A.A.getChannel(t), [t]),
        r = (0, s.bG)([g.A], () => g.A.getGuild(a?.getGuildId()));
    return (l.useEffect(() => {
        _.default.track(x.HAw.OPEN_MODAL, { type: "Grant Channel Access" });
    }, []),
    null == a || null == r)
        ? null
        : (0, i.jsx)(N, { guild: r, channel: a, ...n });
}
function N(e) {
    let { guild: t, channel: n, onClose: s, newChannel: A, inSettings: g, ..._ } = e,
        [x, v] = l.useState(""),
        [N, T] = l.useState({}),
        [y, b] = l.useState(!1),
        [j, R] = l.useState(null),
        M = l.useRef(null),
        L = (0, h.Ay)(n),
        { roles: D, members: P, getRichTag: O } = (0, E.K)(t, n, n.accessPermissions, x),
        w = f.A.useSections({ roles: D, members: P }),
        U = A && 0 === Object.keys(N).length;
    async function k() {
        if (null == n || 0 === Object.keys(N).length) return void s();
        b(!0);
        try {
            var e, t, i;
            let l;
            await ((e = n),
            (t = N),
            (i = g),
            (l = []),
            Object.values(t).forEach((t) => {
                let { row: n } = t;
                null != n.id &&
                    "" !== n.id &&
                    (n.rowType === C.T6.ROLE
                        ? l.push((0, p.we)(n.id, e.type))
                        : n.rowType === C.T6.MEMBER && l.push((0, p.n3)(n.id, e.type)));
            }),
            (0, d.R$)(e.id, l, i)),
                s(),
                b(!1);
        } catch (t) {
            let e = new u.LG(t);
            b(!1), R(e);
        }
    }
    let G = (0, m.ke)(n.type) ? r.I : o.t;
    return (0, i.jsx)(f.A.Provider, {
        listRef: M,
        query: x,
        setQuery: v,
        pendingAdditions: N,
        setPendingAdditions: T,
        roles: D,
        members: P,
        getRichTag: O,
        children: (0, i.jsx)(a.Modal, {
            ..._,
            title: S.intl.string(S.t.dMJ3Y6),
            onClose: s,
            input: (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)(c.E, {
                        className: I.HA,
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: [(0, i.jsx)(G, { className: I.p, size: "sm", color: "currentColor" }), L],
                    }),
                    n.isGuildStageVoice() &&
                        (0, i.jsx)(c.E, {
                            color: "text-default",
                            className: I.h_,
                            variant: "text-sm/normal",
                            children: S.intl.string(S.t.f7VbhF),
                        }),
                    (0, i.jsx)(f.A.SearchBox, { placeholderText: S.intl.string(S.t.iezLLn) }),
                    (0, i.jsx)(c.E, {
                        className: I.W$,
                        variant: "text-xs/normal",
                        children: S.intl.string(S.t.rwFx85),
                    }),
                    null != j
                        ? (0, i.jsx)(c.E, {
                              className: I.W$,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: j.getAnyErrorMessage(),
                          })
                        : null,
                ],
            }),
            listProps: {
                ref: M,
                sectionHeight: f.A.SECTION_HEIGHT,
                renderSection: f.A.renderSection,
                rowHeight: f.A.ROW_HEIGHT,
                renderRow: f.A.renderRow,
                sections: w,
            },
            actions: U
                ? [{ variant: "secondary", text: S.intl.string(S.t.u46sxe), onClick: s }]
                : [
                      { variant: "secondary", text: S.intl.string(S.t["ETE/oC"]), onClick: s },
                      { variant: "primary", text: S.intl.string(S.t.i4jeWR), onClick: k, loading: y },
                  ],
        }),
    });
}
