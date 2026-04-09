n.d(t, { default: () => S }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(158954),
    a = n(311907),
    r = n(397927),
    o = n(702805),
    c = n(198982),
    d = n(47167),
    u = n(95701),
    h = n(734057),
    m = n(71393),
    A = n(954571),
    g = n(147036),
    p = n(845202),
    f = n(86944),
    _ = n(737045),
    E = n(652215),
    x = n(985018),
    C = n(959214);
function S(e) {
    let { channelId: t, ...n } = e,
        s = (0, a.bG)([h.A], () => h.A.getChannel(t), [t]),
        r = (0, a.bG)([m.A], () => m.A.getGuild(s?.getGuildId()));
    return (l.useEffect(() => {
        A.default.track(E.HAw.OPEN_MODAL, { type: "Grant Channel Access" });
    }, []),
    null == s || null == r)
        ? null
        : (0, i.jsx)(T, { guild: r, channel: s, ...n });
}
function T(e) {
    let { guild: t, channel: n, onClose: a, newChannel: h, inSettings: m, ...A } = e,
        [E, S] = l.useState(""),
        [T, N] = l.useState({}),
        [I, v] = l.useState(!1),
        [y, b] = l.useState(null),
        j = l.useRef(null),
        R = (0, d.Ay)(n),
        { roles: M, members: D, getRichTag: O } = (0, f.K)(t, n, n.accessPermissions, E),
        L = p.A.useSections({ roles: M, members: D }),
        P = h && 0 === Object.keys(T).length;
    async function k() {
        if (null == n || 0 === Object.keys(T).length) return void a();
        v(!0);
        try {
            var e, t, i;
            let l;
            await ((e = n),
            (t = T),
            (i = m),
            (l = []),
            Object.values(t).forEach((t) => {
                let { row: n } = t;
                null != n.id &&
                    "" !== n.id &&
                    (n.rowType === _.T6.ROLE
                        ? l.push((0, g.we)(n.id, e.type))
                        : n.rowType === _.T6.MEMBER && l.push((0, g.n3)(n.id, e.type)));
            }),
            (0, o.R$)(e.id, l, i)),
                a(),
                v(!1);
        } catch (t) {
            let e = new c.LG(t);
            v(!1), b(e);
        }
    }
    let w = (0, u.ke)(n.type) ? r.I$d : r.trU;
    return (0, i.jsx)(p.A.Provider, {
        listRef: j,
        query: E,
        setQuery: S,
        pendingAdditions: T,
        setPendingAdditions: N,
        roles: M,
        members: D,
        getRichTag: O,
        children: (0, i.jsx)(s.Modal, {
            ...A,
            title: x.intl.string(x.t.dMJ3Y6),
            onClose: a,
            input: (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)(r.Text, {
                        className: C.HA,
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: [(0, i.jsx)(w, { className: C.p, size: "sm", color: "currentColor" }), R],
                    }),
                    n.isGuildStageVoice() &&
                        (0, i.jsx)(r.Text, {
                            color: "text-default",
                            className: C.h_,
                            variant: "text-sm/normal",
                            children: x.intl.string(x.t.f7VbhF),
                        }),
                    (0, i.jsx)(p.A.SearchBox, { placeholderText: x.intl.string(x.t.iezLLn) }),
                    (0, i.jsx)(r.Text, {
                        className: C.W$,
                        variant: "text-xs/normal",
                        children: x.intl.string(x.t.rwFx85),
                    }),
                    null != y
                        ? (0, i.jsx)(r.Text, {
                              className: C.W$,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: y.getAnyErrorMessage(),
                          })
                        : null,
                ],
            }),
            listProps: {
                ref: j,
                sectionHeight: p.A.SECTION_HEIGHT,
                renderSection: p.A.renderSection,
                rowHeight: p.A.ROW_HEIGHT,
                renderRow: p.A.renderRow,
                sections: L,
            },
            actions: P
                ? [{ variant: "secondary", text: x.intl.string(x.t.u46sxe), onClick: a }]
                : [
                      { variant: "secondary", text: x.intl.string(x.t["ETE/oC"]), onClick: a },
                      { variant: "primary", text: x.intl.string(x.t.i4jeWR), onClick: k, loading: I },
                  ],
        }),
    });
}
