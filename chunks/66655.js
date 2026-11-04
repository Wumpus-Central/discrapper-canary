var r = a(477900),
    n = a(582128),
    i = a(855986),
    s = a(834730),
    l = a(39255),
    o = a(627784),
    d = a(904630),
    u = a(695184),
    c = a(427262),
    m = a(545868),
    b = a(727419),
    g = a(396816),
    p = a(856644);
a(512031);
var k = a(290261),
    A = a(792996),
    E = a(698013);
a.d(
    t,
    {},
    {
        default: function (e) {
            let { transitionState: t, onClose: a, roleId: M, guildId: R } = e,
                h = (0, i.bG)([g.A], () => g.A.getRole(M), [M]),
                [v, y] = n.useState(""),
                [w, x] = n.useState({}),
                [T, f] = n.useState(!1),
                [C, S] = n.useState(null),
                O = n.useRef(null);
            n.useEffect(() => {
                u.A.requestMembers(R, v.trim().toLowerCase(), 50);
            }, [R, v]);
            let j = n.useCallback((e) => !e.roles.includes(M), [M]),
                B = (0, p.SB)(R, j),
                H = n.useMemo(() => B.filter((e) => (0, p.EF)(v, e)), [v, B]),
                P = n.useCallback(async () => {
                    let e = Object.values(w).map((e) => e.row.id);
                    f(!0);
                    try {
                        (await b.A.bulkAddMemberRoles(R, M, e), (0, m.a)(R, M, !1), a());
                    } catch (t) {
                        let e = new o.LG(t);
                        (f(!1), S(e));
                    }
                }, [R, M, w, a]),
                L = n.useMemo(
                    () =>
                        H.map((e) => {
                            let t = c.Ay.getUserTag(e.user);
                            return {
                                rowType: k.T6.MEMBER,
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
                    [H],
                ),
                _ = d.A.useSections({ members: L }),
                q = n.useCallback(
                    (e) =>
                        e.rowType === k.T6.MEMBER || e.rowType === k.T6.OWNER
                            ? { type: l._.MEMBER, label: e.name, avatar: e.avatarURL }
                            : null,
                    [],
                ),
                G = n.useMemo(() => Object.keys(w).length, [w]);
            return (0, r.jsx)(d.A.Provider, {
                listRef: O,
                query: v,
                setQuery: y,
                pendingAdditions: w,
                setPendingAdditions: x,
                members: L,
                getRichTag: q,
                maxPendingRows: 30,
                children: (0, r.jsx)(d.A.Modal, {
                    onClose: a,
                    transitionState: t,
                    title: A.intl.string(A.t.ZYOK46),
                    subtitle:
                        null != h
                            ? A.intl.format(A.t["qP+nuZ"], { numMembers: 30, roleName: h.name })
                            : A.intl.format(A.t["3OxP4q"], { numMembers: 30 }),
                    input: (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(d.A.SearchBox, { placeholderText: A.intl.string(A.t.vMiCaQ) }),
                            null != C
                                ? (0, r.jsx)(s.E, {
                                      className: E.k,
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
                        sections: _,
                    },
                    actions: [
                        { text: A.intl.string(A.t["ETE/oC"]), variant: "secondary", onClick: a },
                        {
                            text: A.intl.string(A.t.OYkgVk),
                            variant: "primary",
                            onClick: P,
                            loading: T,
                            disabled: 0 === G || G > 30,
                        },
                    ],
                }),
            });
        },
    },
);
