a.d(t, { default: () => R });
var r = a(477900),
    n = a(582128),
    i = a(17928),
    s = a(834730),
    l = a(39255),
    o = a(913122),
    d = a(517622),
    u = a(695184),
    c = a(427262),
    m = a(545868),
    b = a(468689),
    g = a(396816),
    p = a(856644),
    k = a(512031),
    A = a(719366),
    E = a(105292),
    M = a(698013);
function R(e) {
    let { transitionState: t, onClose: a, roleId: R, guildId: h } = e,
        y = (0, i.bG)([g.A], () => g.A.getRole(R), [R]),
        [S, v] = n.useState(""),
        [w, x] = n.useState({}),
        [T, f] = n.useState(!1),
        [C, O] = n.useState(null),
        j = n.useRef(null);
    n.useEffect(() => {
        u.A.requestMembers(h, S.trim().toLowerCase(), p.uc);
    }, [h, S]);
    let B = n.useCallback((e) => !e.roles.includes(R), [R]),
        H = (0, p.SB)(h, B),
        P = n.useMemo(() => H.filter((e) => (0, p.EF)(S, e)), [S, H]),
        L = n.useCallback(async () => {
            let e = Object.values(w).map((e) => e.row.id);
            f(!0);
            try {
                (await b.A.bulkAddMemberRoles(h, R, e), (0, m.a)(h, R, !1), a());
            } catch (t) {
                let e = new o.LG(t);
                (f(!1), O(e));
            }
        }, [h, R, w, a]),
        _ = n.useMemo(
            () =>
                P.map((e) => {
                    let t = c.Ay.getUserTag(e.user);
                    return {
                        rowType: A.T6.MEMBER,
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
            [P],
        ),
        q = d.A.useSections({ members: _ }),
        G = n.useCallback(
            (e) =>
                e.rowType === A.T6.MEMBER || e.rowType === A.T6.OWNER
                    ? { type: l._.MEMBER, label: e.name, avatar: e.avatarURL }
                    : null,
            [],
        ),
        N = n.useMemo(() => Object.keys(w).length, [w]);
    return (0, r.jsx)(d.A.Provider, {
        listRef: j,
        query: S,
        setQuery: v,
        pendingAdditions: w,
        setPendingAdditions: x,
        members: _,
        getRichTag: G,
        maxPendingRows: k.$S,
        children: (0, r.jsx)(d.A.Modal, {
            onClose: a,
            transitionState: t,
            title: E.intl.string(E.t.ZYOK46),
            subtitle:
                null != y
                    ? E.intl.format(E.t["qP+nuZ"], { numMembers: k.$S, roleName: y.name })
                    : E.intl.format(E.t["3OxP4q"], { numMembers: k.$S }),
            input: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(d.A.SearchBox, { placeholderText: E.intl.string(E.t.vMiCaQ) }),
                    null != C
                        ? (0, r.jsx)(s.E, {
                              className: M.k,
                              variant: "body-xs/normal",
                              color: "text-feedback-critical",
                              children: C.getAnyErrorMessage(),
                          })
                        : null,
                ],
            }),
            listProps: {
                sectionHeight: d.A.SECTION_HEIGHT,
                renderSection: d.A.renderSection,
                rowHeight: d.A.ROW_HEIGHT,
                renderRow: d.A.renderRow,
                sections: q,
            },
            actions: [
                { text: E.intl.string(E.t["ETE/oC"]), variant: "secondary", onClick: a },
                {
                    text: E.intl.string(E.t.OYkgVk),
                    variant: "primary",
                    onClick: L,
                    loading: T,
                    disabled: 0 === N || N > k.$S,
                },
            ],
        }),
    });
}
