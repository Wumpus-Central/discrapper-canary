r.d(t, { default: () => R }), r(388685), r(781311);
var a = r(54381),
    n = r(473749),
    i = r(793030),
    l = r(442837),
    o = r(481060),
    s = r(794433),
    c = r(881052),
    u = r(974339),
    d = r(892880),
    b = r(51144),
    m = r(480608),
    f = r(434404),
    w = r(103576),
    x = r(130341),
    _ = r(494831),
    g = r(71080),
    k = r(388032),
    p = r(98678);
function R(e) {
    let { transitionState: t, onClose: r, roleId: R, guildId: h } = e,
        y = (0, l.e7)([w.Z], () => w.Z.getRole(R), [R]),
        [T, C] = n.useState(""),
        [M, v] = n.useState({}),
        [E, Z] = n.useState(!1),
        [S, H] = n.useState(null),
        B = n.useRef(null);
    n.useEffect(() => {
        d.Z.requestMembers(h, T.trim().toLowerCase(), x._4);
    }, [h, T]);
    let L = n.useCallback((e) => !e.roles.includes(R), [R]),
        O = (0, x.lJ)(h, L),
        j = n.useMemo(() => O.filter((e) => (0, x.eg)(T, e)), [T, O]),
        P = n.useCallback(async () => {
            let e = Object.values(M).map((e) => e.row.id);
            Z(!0);
            try {
                await f.Z.bulkAddMemberRoles(h, R, e), (0, m.H)(h, R, !1), r();
            } catch (t) {
                let e = new c.Hx(t);
                Z(!1), H(e);
            }
        }, [h, R, M, r]),
        q = n.useMemo(
            () =>
                j.map((e) => {
                    var t;
                    let r = b.ZP.getUserTag(e.user);
                    return {
                        rowType: g.aC.MEMBER,
                        name: null != (t = e.name) ? t : r,
                        nickname: e.name,
                        username: r,
                        id: e.id,
                        avatarURL: e.avatarURL,
                        bot: e.bot,
                        verifiedBot: e.verifiedBot,
                        disabled: !1,
                        key: e.id,
                    };
                }),
            [j],
        ),
        A = u.Z.useSections({ members: q }),
        N = n.useCallback(
            (e) =>
                e.rowType === g.aC.MEMBER || e.rowType === g.aC.OWNER
                    ? {
                          type: s.F.MEMBER,
                          label: e.name,
                          avatar: e.avatarURL,
                      }
                    : null,
            [],
        ),
        U = n.useMemo(() => Object.keys(M).length, [M]);
    return (0, a.jsx)(u.Z.Provider, {
        listRef: B,
        query: T,
        setQuery: C,
        pendingAdditions: M,
        setPendingAdditions: v,
        members: q,
        getRichTag: N,
        maxPendingRows: _.ey,
        children: (0, a.jsx)(i.Modal, {
            onClose: r,
            transitionState: t,
            title: k.intl.string(k.t.ZYOK46),
            subtitle:
                null != y
                    ? k.intl.format(k.t["qP+nuZ"], {
                          numMembers: _.ey,
                          roleName: y.name,
                      })
                    : k.intl.format(k.t["3OxP4q"], { numMembers: _.ey }),
            input: (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(u.Z.SearchBox, { placeholderText: k.intl.string(k.t.vMiCaQ) }),
                    null != S
                        ? (0, a.jsx)(o.Text, {
                              className: p.errorText,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: S.getAnyErrorMessage(),
                          })
                        : null,
                ],
            }),
            listProps: {
                ref: B,
                sectionHeight: u.Z.SECTION_HEIGHT,
                renderSection: u.Z.renderSection,
                rowHeight: u.Z.ROW_HEIGHT,
                renderRow: u.Z.renderRow,
                sections: A,
            },
            actions: [
                {
                    text: k.intl.string(k.t["ETE/oC"]),
                    variant: "secondary",
                    onClick: r,
                },
                {
                    text: k.intl.string(k.t.OYkgVk),
                    variant: "primary",
                    onClick: P,
                    loading: E,
                    disabled: 0 === U || U > _.ey,
                },
            ],
        }),
    });
}
