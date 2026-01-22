a.d(t, {
    default: () => M,
}),
    a(896048),
    a(733351);
var r = a(627968),
    n = a(64700),
    i = a(158954),
    s = a(311907),
    l = a(397927),
    d = a(39255),
    o = a(198982),
    c = a(845202),
    u = a(695184),
    b = a(427262),
    m = a(545868),
    f = a(997509),
    p = a(396816),
    g = a(856644),
    k = a(512031),
    x = a(737045),
    A = a(985018),
    v = a(489715);

function M(e) {
    let { transitionState: t, onClose: a, roleId: M, guildId: R } = e,
        h = (0, s.bG)([p.A], () => p.A.getRole(M), [M]),
        [w, E] = n.useState(""),
        [S, y] = n.useState({}),
        [T, C] = n.useState(!1),
        [_, O] = n.useState(null),
        j = n.useRef(null);
    n.useEffect(() => {
        u.A.requestMembers(R, w.trim().toLowerCase(), g.uc);
    }, [R, w]);
    let B = n.useCallback((e) => !e.roles.includes(M), [M]),
        H = (0, g.SB)(R, B),
        G = n.useMemo(() => H.filter((e) => (0, g.EF)(w, e)), [w, H]),
        P = n.useCallback(async () => {
            let e = Object.values(S).map((e) => e.row.id);
            C(!0);
            try {
                await f.A.bulkAddMemberRoles(R, M, e), (0, m.a)(R, M, !1), a();
            } catch (t) {
                let e = new o.LG(t);
                C(!1), O(e);
            }
        }, [R, M, S, a]),
        q = n.useMemo(
            () =>
                G.map((e) => {
                    var t;
                    let a = b.Ay.getUserTag(e.user);
                    return {
                        rowType: x.T6.MEMBER,
                        name: null != (t = e.name) ? t : a,
                        nickname: e.name,
                        username: a,
                        id: e.id,
                        avatarURL: e.avatarURL,
                        bot: e.bot,
                        verifiedBot: e.verifiedBot,
                        disabled: !1,
                        key: e.id,
                    };
                }),
            [G],
        ),
        L = c.A.useSections({
            members: q,
        }),
        N = n.useCallback(
            (e) =>
                e.rowType === x.T6.MEMBER || e.rowType === x.T6.OWNER
                    ? {
                          type: d._.MEMBER,
                          label: e.name,
                          avatar: e.avatarURL,
                      }
                    : null,
            [],
        ),
        U = n.useMemo(() => Object.keys(S).length, [S]);
    return (0, r.jsx)(c.A.Provider, {
        listRef: j,
        query: w,
        setQuery: E,
        pendingAdditions: S,
        setPendingAdditions: y,
        members: q,
        getRichTag: N,
        maxPendingRows: k.$S,
        children: (0, r.jsx)(i.Modal, {
            onClose: a,
            transitionState: t,
            title: A.intl.string(A.t.ZYOK46),
            subtitle:
                null != h
                    ? A.intl.format(A.t["qP+nuZ"], {
                          numMembers: k.$S,
                          roleName: h.name,
                      })
                    : A.intl.format(A.t["3OxP4q"], {
                          numMembers: k.$S,
                      }),
            input: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(c.A.SearchBox, {
                        placeholderText: A.intl.string(A.t.vMiCaQ),
                    }),
                    null != _
                        ? (0, r.jsx)(l.Text, {
                              className: v.k,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: _.getAnyErrorMessage(),
                          })
                        : null,
                ],
            }),
            listProps: {
                ref: j,
                sectionHeight: c.A.SECTION_HEIGHT,
                renderSection: c.A.renderSection,
                rowHeight: c.A.ROW_HEIGHT,
                renderRow: c.A.renderRow,
                sections: L,
            },
            actions: [
                {
                    text: A.intl.string(A.t["ETE/oC"]),
                    variant: "secondary",
                    onClick: a,
                },
                {
                    text: A.intl.string(A.t.OYkgVk),
                    variant: "primary",
                    onClick: P,
                    loading: T,
                    disabled: 0 === U || U > k.$S,
                },
            ],
        }),
    });
}
