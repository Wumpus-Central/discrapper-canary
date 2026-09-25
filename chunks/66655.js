a.d(t, { default: () => M });
var r = a(477900),
    n = a(582128),
    i = a(17928),
    s = a(189213),
    l = a(834730),
    o = a(39255),
    u = a(913122),
    d = a(517622),
    c = a(695184),
    m = a(427262),
    b = a(545868),
    g = a(468689),
    p = a(396816),
    k = a(856644),
    A = a(512031),
    E = a(719366),
    R = a(375708),
    h = a(698013);
function M(e) {
    let { transitionState: t, onClose: a, roleId: M, guildId: S } = e,
        v = (0, i.bG)([p.A], () => p.A.getRole(M), [M]),
        [x, y] = n.useState(""),
        [f, w] = n.useState({}),
        [T, C] = n.useState(!1),
        [O, j] = n.useState(null),
        B = n.useRef(null);
    n.useEffect(() => {
        c.A.requestMembers(S, x.trim().toLowerCase(), k.uc);
    }, [S, x]);
    let H = n.useCallback((e) => !e.roles.includes(M), [M]),
        P = (0, k.SB)(S, H),
        L = n.useMemo(() => P.filter((e) => (0, k.EF)(x, e)), [x, P]),
        _ = n.useCallback(async () => {
            let e = Object.values(f).map((e) => e.row.id);
            C(!0);
            try {
                (await g.A.bulkAddMemberRoles(S, M, e), (0, b.a)(S, M, !1), a());
            } catch (t) {
                let e = new u.LG(t);
                (C(!1), j(e));
            }
        }, [S, M, f, a]),
        q = n.useMemo(
            () =>
                L.map((e) => {
                    let t = m.Ay.getUserTag(e.user);
                    return {
                        rowType: E.T6.MEMBER,
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
            [L],
        ),
        G = d.A.useSections({ members: q }),
        N = n.useCallback(
            (e) =>
                e.rowType === E.T6.MEMBER || e.rowType === E.T6.OWNER
                    ? { type: o._.MEMBER, label: e.name, avatar: e.avatarURL }
                    : null,
            [],
        ),
        U = n.useMemo(() => Object.keys(f).length, [f]);
    return (0, r.jsx)(d.A.Provider, {
        listRef: B,
        query: x,
        setQuery: y,
        pendingAdditions: f,
        setPendingAdditions: w,
        members: q,
        getRichTag: N,
        maxPendingRows: A.$S,
        children: (0, r.jsx)(s.a, {
            onClose: a,
            transitionState: t,
            title: R.intl.string(R.t.ZYOK46),
            subtitle:
                null != v
                    ? R.intl.format(R.t["qP+nuZ"], { numMembers: A.$S, roleName: v.name })
                    : R.intl.format(R.t["3OxP4q"], { numMembers: A.$S }),
            input: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(d.A.SearchBox, { placeholderText: R.intl.string(R.t.vMiCaQ) }),
                    null != O
                        ? (0, r.jsx)(l.E, {
                              className: h.k,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: O.getAnyErrorMessage(),
                          })
                        : null,
                ],
            }),
            listProps: {
                ref: B,
                sectionHeight: d.A.SECTION_HEIGHT,
                renderSection: d.A.renderSection,
                rowHeight: d.A.ROW_HEIGHT,
                renderRow: d.A.renderRow,
                sections: G,
            },
            actions: [
                { text: R.intl.string(R.t["ETE/oC"]), variant: "secondary", onClick: a },
                {
                    text: R.intl.string(R.t.OYkgVk),
                    variant: "primary",
                    onClick: _,
                    loading: T,
                    disabled: 0 === U || U > A.$S,
                },
            ],
        }),
    });
}
