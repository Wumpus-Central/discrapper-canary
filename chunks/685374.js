n.d(t, { default: () => y }), n(321073);
var l = n(627968),
    s = n(64700),
    a = n(189213),
    r = n(17928),
    i = n(770880),
    o = n(146151),
    c = n(834730),
    h = n(702805),
    u = n(845584),
    d = n(47167),
    p = n(95701),
    g = n(734057),
    f = n(71393),
    _ = n(954571),
    R = n(147036),
    v = n(517622),
    E = n(86944),
    x = n(719366),
    b = n(652215),
    A = n(985018),
    m = n(142483);
function y(e) {
    let { channelId: t, ...n } = e,
        a = (0, r.bG)([g.A], () => g.A.getChannel(t), [t]),
        i = (0, r.bG)([f.A], () => f.A.getGuild(a?.getGuildId()));
    return (s.useEffect(() => {
        _.default.track(b.HAw.OPEN_MODAL, { type: "Grant Channel Access" });
    }, []),
    null == a || null == i)
        ? null
        : (0, l.jsx)(k, { guild: i, channel: a, ...n });
}
function k(e) {
    let { guild: t, channel: n, onClose: r, newChannel: g, inSettings: f, ..._ } = e,
        [b, y] = s.useState(""),
        [k, C] = s.useState({}),
        [N, P] = s.useState(!1),
        [w, T] = s.useState(null),
        j = s.useRef(null),
        D = (0, d.Ay)(n),
        { roles: H, members: L, getRichTag: S } = (0, E.K)(t, n, n.accessPermissions, b),
        M = v.A.useSections({ roles: H, members: L }),
        O = g && 0 === Object.keys(k).length;
    async function G() {
        if (null == n || 0 === Object.keys(k).length) return void r();
        P(!0);
        try {
            var e, t, l;
            let s;
            await ((e = n),
            (t = k),
            (l = f),
            (s = []),
            Object.values(t).forEach((t) => {
                let { row: n } = t;
                null != n.id &&
                    "" !== n.id &&
                    (n.rowType === x.T6.ROLE
                        ? s.push((0, R.we)(n.id, e.type))
                        : n.rowType === x.T6.MEMBER && s.push((0, R.n3)(n.id, e.type)));
            }),
            (0, h.R$)(e.id, s, l)),
                r(),
                P(!1);
        } catch (t) {
            let e = new u.LG(t);
            P(!1), T(e);
        }
    }
    let W = (0, p.ke)(n.type) ? i.I : o.t;
    return (0, l.jsx)(v.A.Provider, {
        listRef: j,
        query: b,
        setQuery: y,
        pendingAdditions: k,
        setPendingAdditions: C,
        roles: H,
        members: L,
        getRichTag: S,
        children: (0, l.jsx)(a.Modal, {
            ..._,
            title: A.intl.string(A.t.dMJ3Y6),
            onClose: r,
            input: (0, l.jsxs)("div", {
                children: [
                    (0, l.jsxs)(c.E, {
                        className: m.HA,
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: [(0, l.jsx)(W, { className: m.p, size: "sm", color: "currentColor" }), D],
                    }),
                    n.isGuildStageVoice() &&
                        (0, l.jsx)(c.E, {
                            color: "text-default",
                            className: m.h_,
                            variant: "text-sm/normal",
                            children: A.intl.string(A.t.f7VbhF),
                        }),
                    (0, l.jsx)(v.A.SearchBox, { placeholderText: A.intl.string(A.t.iezLLn) }),
                    (0, l.jsx)(c.E, {
                        className: m.W$,
                        variant: "text-xs/normal",
                        children: A.intl.string(A.t.rwFx85),
                    }),
                    null != w
                        ? (0, l.jsx)(c.E, {
                              className: m.W$,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: w.getAnyErrorMessage(),
                          })
                        : null,
                ],
            }),
            listProps: {
                ref: j,
                sectionHeight: v.A.SECTION_HEIGHT,
                renderSection: v.A.renderSection,
                rowHeight: v.A.ROW_HEIGHT,
                renderRow: v.A.renderRow,
                sections: M,
            },
            actions: O
                ? [{ variant: "secondary", text: A.intl.string(A.t.u46sxe), onClick: r }]
                : [
                      { variant: "secondary", text: A.intl.string(A.t["ETE/oC"]), onClick: r },
                      { variant: "primary", text: A.intl.string(A.t.i4jeWR), onClick: G, loading: N },
                  ],
        }),
    });
}
