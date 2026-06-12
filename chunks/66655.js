a.d(t, { default: () => h });
var r = a(627968),
    n = a(64700),
    i = a(189213),
    s = a(17928),
    l = a(834730),
    o = a(39255),
    d = a(913122),
    u = a(517622),
    c = a(695184),
    m = a(427262),
    b = a(545868),
    g = a(468689),
    p = a(396816),
    k = a(856644),
    A = a(512031),
    E = a(719366),
    M = a(375708),
    R = a(468878);
function h(e) {
    let { transitionState: t, onClose: a, roleId: h, guildId: S } = e,
        v = (0, s.bG)([p.A], () => p.A.getRole(h), [h]),
        [x, y] = n.useState(""),
        [f, w] = n.useState({}),
        [T, C] = n.useState(!1),
        [O, j] = n.useState(null),
        B = n.useRef(null);
    n.useEffect(() => {
        c.A.requestMembers(S, x.trim().toLowerCase(), k.uc);
    }, [S, x]);
    let H = n.useCallback((e) => !e.roles.includes(h), [h]),
        P = (0, k.SB)(S, H),
        L = n.useMemo(() => P.filter((e) => (0, k.EF)(x, e)), [x, P]),
        _ = n.useCallback(async () => {
            let e = Object.values(f).map((e) => e.row.id);
            C(!0);
            try {
                await g.A.bulkAddMemberRoles(S, h, e), (0, b.a)(S, h, !1), a();
            } catch (t) {
                let e = new d.LG(t);
                C(!1), j(e);
            }
        }, [S, h, f, a]),
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
        G = u.A.useSections({ members: q }),
        N = n.useCallback(
            (e) =>
                e.rowType === E.T6.MEMBER || e.rowType === E.T6.OWNER
                    ? { type: o._.MEMBER, label: e.name, avatar: e.avatarURL }
                    : null,
            [],
        ),
        U = n.useMemo(() => Object.keys(f).length, [f]);
    return (0, r.jsx)(u.A.Provider, {
        listRef: B,
        query: x,
        setQuery: y,
        pendingAdditions: f,
        setPendingAdditions: w,
        members: q,
        getRichTag: N,
        maxPendingRows: A.$S,
        children: (0, r.jsx)(i.Modal, {
            onClose: a,
            transitionState: t,
            title: M.intl.string(M.t.ZYOK46),
            subtitle:
                null != v
                    ? M.intl.format(M.t["qP+nuZ"], { numMembers: A.$S, roleName: v.name })
                    : M.intl.format(M.t["3OxP4q"], { numMembers: A.$S }),
            input: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(u.A.SearchBox, { placeholderText: M.intl.string(M.t.vMiCaQ) }),
                    null != O
                        ? (0, r.jsx)(l.E, {
                              className: R.k,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: O.getAnyErrorMessage(),
                          })
                        : null,
                ],
            }),
            listProps: {
                ref: B,
                sectionHeight: u.A.SECTION_HEIGHT,
                renderSection: u.A.renderSection,
                rowHeight: u.A.ROW_HEIGHT,
                renderRow: u.A.renderRow,
                sections: G,
            },
            actions: [
                { text: M.intl.string(M.t["ETE/oC"]), variant: "secondary", onClick: a },
                {
                    text: M.intl.string(M.t.OYkgVk),
                    variant: "primary",
                    onClick: _,
                    loading: T,
                    disabled: 0 === U || U > A.$S,
                },
            ],
        }),
    });
}
