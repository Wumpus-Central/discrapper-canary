n.d(t, { default: () => x }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(158954),
    s = n(311907),
    r = n(397927),
    o = n(702805),
    c = n(198982),
    d = n(95701),
    u = n(734057),
    h = n(71393),
    m = n(954571),
    A = n(147036),
    p = n(845202),
    g = n(86944),
    f = n(737045),
    _ = n(652215),
    E = n(985018),
    C = n(695244);
function x(e) {
    let { channelId: t, ...n } = e,
        a = (0, s.bG)([u.A], () => u.A.getChannel(t), [t]),
        r = (0, s.bG)([h.A], () => h.A.getGuild(a?.getGuildId()));
    return (l.useEffect(() => {
        m.default.track(_.HAw.OPEN_MODAL, { type: "Grant Channel Access" });
    }, []),
    null == a || null == r)
        ? null
        : (0, i.jsx)(S, { guild: r, channel: a, ...n });
}
function S(e) {
    let { guild: t, channel: n, onClose: s, newChannel: u, inSettings: h, ...m } = e,
        [_, x] = l.useState(""),
        [S, T] = l.useState({}),
        [I, N] = l.useState(!1),
        [v, y] = l.useState(null),
        b = l.useRef(null),
        { roles: R, members: j, getRichTag: M } = (0, g.K)(t, n, n.accessPermissions, _),
        D = p.A.useSections({ roles: R, members: j }),
        O = u && 0 === Object.keys(S).length;
    async function L() {
        if (null == n || 0 === Object.keys(S).length) return void s();
        N(!0);
        try {
            var e, t, i;
            let l;
            await ((e = n),
            (t = S),
            (i = h),
            (l = []),
            Object.values(t).forEach((t) => {
                let { row: n } = t;
                null != n.id &&
                    "" !== n.id &&
                    (n.rowType === f.T6.ROLE
                        ? l.push((0, A.we)(n.id, e.type))
                        : n.rowType === f.T6.MEMBER && l.push((0, A.n3)(n.id, e.type)));
            }),
            (0, o.R$)(e.id, l, i)),
                s(),
                N(!1);
        } catch (t) {
            let e = new c.LG(t);
            N(!1), y(e);
        }
    }
    let P = (0, d.ke)(n.type) ? r.I$d : r.trU;
    return (0, i.jsx)(p.A.Provider, {
        listRef: b,
        query: _,
        setQuery: x,
        pendingAdditions: S,
        setPendingAdditions: T,
        roles: R,
        members: j,
        getRichTag: M,
        children: (0, i.jsx)(a.Modal, {
            ...m,
            title: E.intl.string(E.t.dMJ3Y6),
            onClose: s,
            input: (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)(r.Text, {
                        className: C.HA,
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: [(0, i.jsx)(P, { className: C.p, size: "sm", color: "currentColor" }), n.name],
                    }),
                    n.isGuildStageVoice() &&
                        (0, i.jsx)(r.Text, {
                            color: "text-default",
                            className: C.h_,
                            variant: "text-sm/normal",
                            children: E.intl.string(E.t.f7VbhF),
                        }),
                    (0, i.jsx)(p.A.SearchBox, { placeholderText: E.intl.string(E.t.iezLLn) }),
                    (0, i.jsx)(r.Text, {
                        className: C.W$,
                        variant: "text-xs/normal",
                        children: E.intl.string(E.t.rwFx85),
                    }),
                    null != v
                        ? (0, i.jsx)(r.Text, {
                              className: C.W$,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: v.getAnyErrorMessage(),
                          })
                        : null,
                ],
            }),
            listProps: {
                ref: b,
                sectionHeight: p.A.SECTION_HEIGHT,
                renderSection: p.A.renderSection,
                rowHeight: p.A.ROW_HEIGHT,
                renderRow: p.A.renderRow,
                sections: D,
            },
            actions: O
                ? [{ variant: "secondary", text: E.intl.string(E.t.u46sxe), onClick: s }]
                : [
                      { variant: "secondary", text: E.intl.string(E.t["ETE/oC"]), onClick: s },
                      { variant: "primary", text: E.intl.string(E.t.i4jeWR), onClick: L, loading: I },
                  ],
        }),
    });
}
