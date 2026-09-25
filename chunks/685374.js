(n.d(t, { default: () => w }), n(321073));
var i = n(477900),
    s = n(582128),
    l = n(17928),
    r = n(189213),
    a = n(770880),
    c = n(146151),
    o = n(834730),
    d = n(702805),
    u = n(913122),
    h = n(47167),
    x = n(95701),
    g = n(734057),
    p = n(71393),
    A = n(174459),
    y = n(147036),
    f = n(517622),
    E = n(86944),
    m = n(719366),
    j = n(652215),
    v = n(375708),
    k = n(496434);
function w(e) {
    let { channelId: t, ...n } = e,
        r = (0, l.bG)([g.A], () => g.A.getChannel(t), [t]),
        a = (0, l.bG)([p.A], () => p.A.getGuild(r?.getGuildId()));
    return (s.useEffect(() => {
        A.default.track(j.HAw.OPEN_MODAL, { type: "Grant Channel Access" });
    }, []),
    null == r || null == a)
        ? null
        : (0, i.jsx)(C, { guild: a, channel: r, ...n });
}
function C(e) {
    let { guild: t, channel: n, onClose: l, newChannel: g, inSettings: p, ...A } = e,
        [j, w] = s.useState(""),
        [C, b] = s.useState({}),
        [R, S] = s.useState(!1),
        [T, G] = s.useState(null),
        H = s.useRef(null),
        O = (0, h.Ay)(n),
        { roles: N, members: _, getRichTag: I } = (0, E.K)(t, n, n.accessPermissions, j),
        L = f.A.useSections({ roles: N, members: _ }),
        M = g && 0 === Object.keys(C).length;
    async function P() {
        if (null == n || 0 === Object.keys(C).length) return void l();
        S(!0);
        try {
            var e, t, i;
            let s;
            (await ((e = n),
            (t = C),
            (i = p),
            (s = []),
            Object.values(t).forEach((t) => {
                let { row: n } = t;
                null != n.id &&
                    "" !== n.id &&
                    (n.rowType === m.T6.ROLE
                        ? s.push((0, y.we)(n.id, e.type))
                        : n.rowType === m.T6.MEMBER && s.push((0, y.n3)(n.id, e.type)));
            }),
            (0, d.R$)(e.id, s, i)),
                l(),
                S(!1));
        } catch (t) {
            let e = new u.LG(t);
            (S(!1), G(e));
        }
    }
    let W = (0, x.ke)(n.type) ? a.I : c.t;
    return (0, i.jsx)(f.A.Provider, {
        listRef: H,
        query: j,
        setQuery: w,
        pendingAdditions: C,
        setPendingAdditions: b,
        roles: N,
        members: _,
        getRichTag: I,
        children: (0, i.jsx)(r.a, {
            ...A,
            title: v.intl.string(v.t.dMJ3Y6),
            onClose: l,
            input: (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)(o.E, {
                        className: k.HA,
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: [(0, i.jsx)(W, { className: k.p, size: "sm", color: "currentColor" }), O],
                    }),
                    n.isGuildStageVoice() &&
                        (0, i.jsx)(o.E, {
                            color: "text-default",
                            className: k.h_,
                            variant: "text-sm/normal",
                            children: v.intl.string(v.t.f7VbhF),
                        }),
                    (0, i.jsx)(f.A.SearchBox, { placeholderText: v.intl.string(v.t.iezLLn) }),
                    (0, i.jsx)(o.E, {
                        className: k.W$,
                        variant: "text-xs/normal",
                        children: v.intl.string(v.t.rwFx85),
                    }),
                    null != T
                        ? (0, i.jsx)(o.E, {
                              className: k.W$,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: T.getAnyErrorMessage(),
                          })
                        : null,
                ],
            }),
            listProps: {
                ref: H,
                sectionHeight: f.A.SECTION_HEIGHT,
                renderSection: f.A.renderSection,
                rowHeight: f.A.ROW_HEIGHT,
                renderRow: f.A.renderRow,
                sections: L,
            },
            actions: M
                ? [{ variant: "secondary", text: v.intl.string(v.t.u46sxe), onClick: l }]
                : [
                      { variant: "secondary", text: v.intl.string(v.t["ETE/oC"]), onClick: l },
                      { variant: "primary", text: v.intl.string(v.t.i4jeWR), onClick: P, loading: R },
                  ],
        }),
    });
}
