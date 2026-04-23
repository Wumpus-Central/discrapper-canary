n.d(t, { default: () => R });
var r = n(627968),
    l = n(64700),
    s = n(189213),
    i = n(17928),
    o = n(834730),
    a = n(39255),
    c = n(845584),
    d = n(517622),
    u = n(695184),
    x = n(427262),
    h = n(545868),
    m = n(997509),
    w = n(396816),
    g = n(856644),
    f = n(512031),
    S = n(719366),
    b = n(985018),
    E = n(468878);
function R(e) {
    let { transitionState: t, onClose: n, roleId: R, guildId: v } = e,
        j = (0, i.bG)([w.A], () => w.A.getRole(R), [R]),
        [y, p] = l.useState(""),
        [T, k] = l.useState({}),
        [C, O] = l.useState(!1),
        [A, M] = l.useState(null),
        _ = l.useRef(null);
    l.useEffect(() => {
        u.A.requestMembers(v, y.trim().toLowerCase(), g.uc);
    }, [v, y]);
    let L = l.useCallback((e) => !e.roles.includes(R), [R]),
        I = (0, g.SB)(v, L),
        N = l.useMemo(() => I.filter((e) => (0, g.EF)(y, e)), [y, I]),
        B = l.useCallback(async () => {
            let e = Object.values(T).map((e) => e.row.id);
            O(!0);
            try {
                await m.A.bulkAddMemberRoles(v, R, e), (0, h.a)(v, R, !1), n();
            } catch (t) {
                let e = new c.LG(t);
                O(!1), M(e);
            }
        }, [v, R, T, n]),
        P = l.useMemo(
            () =>
                N.map((e) => {
                    let t = x.Ay.getUserTag(e.user);
                    return {
                        rowType: S.T6.MEMBER,
                        name: e.name ?? t,
                        nickname: e.name,
                        username: t,
                        id: e.id,
                        avatarURL: e.avatarURL,
                        bot: e.bot,
                        verifiedBot: e.verifiedBot,
                        disabled: !1,
                        key: e.id,
                    };
                }),
            [N],
        ),
        U = d.A.useSections({ members: P }),
        G = l.useCallback(
            (e) =>
                e.rowType === S.T6.MEMBER || e.rowType === S.T6.OWNER
                    ? { type: a._.MEMBER, label: e.name, avatar: e.avatarURL }
                    : null,
            [],
        ),
        H = l.useMemo(() => Object.keys(T).length, [T]);
    return (0, r.jsx)(d.A.Provider, {
        listRef: _,
        query: y,
        setQuery: p,
        pendingAdditions: T,
        setPendingAdditions: k,
        members: P,
        getRichTag: G,
        maxPendingRows: f.$S,
        children: (0, r.jsx)(s.Modal, {
            onClose: n,
            transitionState: t,
            title: b.intl.string(b.t.ZYOK46),
            subtitle:
                null != j
                    ? b.intl.format(b.t["qP+nuZ"], { numMembers: f.$S, roleName: j.name })
                    : b.intl.format(b.t["3OxP4q"], { numMembers: f.$S }),
            input: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(d.A.SearchBox, { placeholderText: b.intl.string(b.t.vMiCaQ) }),
                    null != A
                        ? (0, r.jsx)(o.E, {
                              className: E.k,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: A.getAnyErrorMessage(),
                          })
                        : null,
                ],
            }),
            listProps: {
                ref: _,
                sectionHeight: d.A.SECTION_HEIGHT,
                renderSection: d.A.renderSection,
                rowHeight: d.A.ROW_HEIGHT,
                renderRow: d.A.renderRow,
                sections: U,
            },
            actions: [
                { text: b.intl.string(b.t["ETE/oC"]), variant: "secondary", onClick: n },
                {
                    text: b.intl.string(b.t.OYkgVk),
                    variant: "primary",
                    onClick: B,
                    loading: C,
                    disabled: 0 === H || H > f.$S,
                },
            ],
        }),
    });
}
