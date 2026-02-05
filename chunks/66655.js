n.d(t, { default: () => T });
var r = n(627968),
    l = n(64700),
    s = n(158954),
    i = n(311907),
    o = n(397927),
    a = n(39255),
    c = n(198982),
    d = n(845202),
    u = n(695184),
    x = n(427262),
    h = n(545868),
    m = n(997509),
    w = n(396816),
    g = n(856644),
    f = n(512031),
    S = n(737045),
    b = n(985018),
    R = n(489715);
function T(e) {
    let { transitionState: t, onClose: n, roleId: T, guildId: v } = e,
        E = (0, i.bG)([w.A], () => w.A.getRole(T), [T]),
        [j, y] = l.useState(""),
        [p, k] = l.useState({}),
        [C, A] = l.useState(!1),
        [M, O] = l.useState(null),
        _ = l.useRef(null);
    l.useEffect(() => {
        u.A.requestMembers(v, j.trim().toLowerCase(), g.uc);
    }, [v, j]);
    let L = l.useCallback((e) => !e.roles.includes(T), [T]),
        I = (0, g.SB)(v, L),
        N = l.useMemo(() => I.filter((e) => (0, g.EF)(j, e)), [j, I]),
        U = l.useCallback(async () => {
            let e = Object.values(p).map((e) => e.row.id);
            A(!0);
            try {
                await m.A.bulkAddMemberRoles(v, T, e), (0, h.a)(v, T, !1), n();
            } catch (t) {
                let e = new c.LG(t);
                A(!1), O(e);
            }
        }, [v, T, p, n]),
        B = l.useMemo(
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
        P = d.A.useSections({ members: B }),
        H = l.useCallback(
            (e) =>
                e.rowType === S.T6.MEMBER || e.rowType === S.T6.OWNER
                    ? { type: a._.MEMBER, label: e.name, avatar: e.avatarURL }
                    : null,
            [],
        ),
        G = l.useMemo(() => Object.keys(p).length, [p]);
    return (0, r.jsx)(d.A.Provider, {
        listRef: _,
        query: j,
        setQuery: y,
        pendingAdditions: p,
        setPendingAdditions: k,
        members: B,
        getRichTag: H,
        maxPendingRows: f.$S,
        children: (0, r.jsx)(s.Modal, {
            onClose: n,
            transitionState: t,
            title: b.intl.string(b.t.ZYOK46),
            subtitle:
                null != E
                    ? b.intl.format(b.t["qP+nuZ"], { numMembers: f.$S, roleName: E.name })
                    : b.intl.format(b.t["3OxP4q"], { numMembers: f.$S }),
            input: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(d.A.SearchBox, { placeholderText: b.intl.string(b.t.vMiCaQ) }),
                    null != M
                        ? (0, r.jsx)(o.Text, {
                              className: R.k,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: M.getAnyErrorMessage(),
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
                sections: P,
            },
            actions: [
                { text: b.intl.string(b.t["ETE/oC"]), variant: "secondary", onClick: n },
                {
                    text: b.intl.string(b.t.OYkgVk),
                    variant: "primary",
                    onClick: U,
                    loading: C,
                    disabled: 0 === G || G > f.$S,
                },
            ],
        }),
    });
}
