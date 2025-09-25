r.d(t, { default: () => h }), r(388685), r(781311);
var a = r(951288),
    n = r(647438),
    i = r(442837),
    l = r(82659),
    o = r(481060),
    s = r(794433),
    c = r(881052),
    u = r(974339),
    d = r(892880),
    b = r(51144),
    m = r(480608),
    g = r(434404),
    w = r(103576),
    x = r(130341),
    _ = r(494831),
    f = r(71080),
    p = r(388032),
    R = r(657966);
function h(e) {
    let { transitionState: t, onClose: r, roleId: h, guildId: y } = e,
        k = (0, i.e7)([w.Z], () => w.Z.getRole(h), [h]),
        [T, C] = n.useState(""),
        [M, v] = n.useState({}),
        [E, Z] = n.useState(!1),
        [S, H] = n.useState(null),
        B = n.useRef(null);
    n.useEffect(() => {
        d.Z.requestMembers(y, T.trim().toLowerCase(), x._4);
    }, [y, T]);
    let L = n.useCallback((e) => !e.roles.includes(h), [h]),
        O = (0, x.lJ)(y, L),
        j = n.useMemo(() => O.filter((e) => (0, x.eg)(T, e)), [T, O]),
        P = n.useCallback(async () => {
            let e = Object.values(M).map((e) => e.row.id);
            Z(!0);
            try {
                await g.Z.bulkAddMemberRoles(y, h, e), (0, m.H)(y, h, !1), r();
            } catch (t) {
                let e = new c.Hx(t);
                Z(!1), H(e);
            }
        }, [y, h, M, r]),
        A = n.useMemo(
            () =>
                j.map((e) => {
                    var t;
                    let r = b.ZP.getUserTag(e.user);
                    return {
                        rowType: f.aC.MEMBER,
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
        N = u.Z.useSections({ members: A }),
        U = n.useCallback(
            (e) =>
                e.rowType === f.aC.MEMBER || e.rowType === f.aC.OWNER
                    ? {
                          type: s.F.MEMBER,
                          label: e.name,
                          avatar: e.avatarURL,
                      }
                    : null,
            [],
        ),
        q = n.useMemo(() => Object.keys(M).length, [M]);
    return (0, a.jsx)(u.Z.Provider, {
        listRef: B,
        query: T,
        setQuery: C,
        pendingAdditions: M,
        setPendingAdditions: v,
        members: A,
        getRichTag: U,
        maxPendingRows: _.ey,
        children: (0, a.jsx)(l.Modal, {
            onClose: r,
            transitionState: t,
            title: p.intl.string(p.t["ZYOK4+"]),
            subtitle:
                null != k
                    ? p.intl.format(p.t["qP+nub"], {
                          numMembers: _.ey,
                          roleName: k.name,
                      })
                    : p.intl.format(p.t["3OxP4u"], { numMembers: _.ey }),
            input: (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(u.Z.SearchBox, { placeholderText: p.intl.string(p.t.vMiCaW) }),
                    null != S
                        ? (0, a.jsx)(o.Text, {
                              className: R.errorText,
                              variant: "text-xs/normal",
                              color: "text-danger",
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
                sections: N,
            },
            actions: [
                {
                    text: p.intl.string(p.t["ETE/oK"]),
                    variant: "secondary",
                    onClick: r,
                },
                {
                    text: p.intl.string(p.t.OYkgVl),
                    variant: "primary",
                    onClick: P,
                    loading: E,
                    disabled: 0 === q || q > _.ey,
                },
            ],
        }),
    });
}
