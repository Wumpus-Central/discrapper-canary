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
    E = a(512031),
    R = a(719366),
    h = a(375708),
    A = a(698013);
function M(e) {
    let { transitionState: t, onClose: a, roleId: M, guildId: S } = e,
        f = (0, i.bG)([p.A], () => p.A.getRole(M), [M]),
        [v, x] = n.useState(""),
        [y, w] = n.useState({}),
        [T, C] = n.useState(!1),
        [O, j] = n.useState(null),
        B = n.useRef(null);
    n.useEffect(() => {
        c.A.requestMembers(S, v.trim().toLowerCase(), k.uc);
    }, [S, v]);
    let H = n.useCallback((e) => !e.roles.includes(M), [M]),
        P = (0, k.SB)(S, H),
        L = n.useMemo(() => P.filter((e) => (0, k.EF)(v, e)), [v, P]),
        _ = n.useCallback(async () => {
            let e = Object.values(y).map((e) => e.row.id);
            C(!0);
            try {
                (await g.default.bulkAddMemberRoles(S, M, e), (0, b.a)(S, M, !1), a());
            } catch (t) {
                let e = new u.LG(t);
                (C(!1), j(e));
            }
        }, [S, M, y, a]),
        q = n.useMemo(
            () =>
                L.map((e) => {
                    let t = m.Ay.getUserTag(e.user);
                    return {
                        rowType: R.T6.MEMBER,
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
                e.rowType === R.T6.MEMBER || e.rowType === R.T6.OWNER
                    ? { type: o._.MEMBER, label: e.name, avatar: e.avatarURL }
                    : null,
            [],
        ),
        U = n.useMemo(() => Object.keys(y).length, [y]);
    return (0, r.jsx)(d.A.Provider, {
        listRef: B,
        query: v,
        setQuery: x,
        pendingAdditions: y,
        setPendingAdditions: w,
        members: q,
        getRichTag: N,
        maxPendingRows: E.$S,
        children: (0, r.jsx)(s.a, {
            onClose: a,
            transitionState: t,
            title: h.intl.string(h.t.ZYOK46),
            subtitle:
                null != f
                    ? h.intl.format(h.t["qP+nuZ"], { numMembers: E.$S, roleName: f.name })
                    : h.intl.format(h.t["3OxP4q"], { numMembers: E.$S }),
            input: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(d.A.SearchBox, { placeholderText: h.intl.string(h.t.vMiCaQ) }),
                    null != O
                        ? (0, r.jsx)(l.E, {
                              className: A.k,
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
                { text: h.intl.string(h.t["ETE/oC"]), variant: "secondary", onClick: a },
                {
                    text: h.intl.string(h.t.OYkgVk),
                    variant: "primary",
                    onClick: _,
                    loading: T,
                    disabled: 0 === U || U > E.$S,
                },
            ],
        }),
    });
}
