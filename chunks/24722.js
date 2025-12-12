a.d(t, { default: () => h }), a(388685), a(781311);
var r = a(54381),
    n = a(473749),
    i = a(793030),
    l = a(442837),
    o = a(481060),
    s = a(794433),
    c = a(881052),
    d = a(974339),
    u = a(892880),
    f = a(51144),
    b = a(480608),
    m = a(434404),
    w = a(103576),
    x = a(130341),
    g = a(494831),
    k = a(71080),
    p = a(388032),
    R = a(379291);
function h(e) {
    let { transitionState: t, onClose: a, roleId: h, guildId: y } = e,
        T = (0, l.e7)([w.Z], () => w.Z.getRole(h), [h]),
        [C, M] = n.useState(""),
        [v, _] = n.useState({}),
        [E, Z] = n.useState(!1),
        [S, H] = n.useState(null),
        B = n.useRef(null);
    n.useEffect(() => {
        u.Z.requestMembers(y, C.trim().toLowerCase(), x._4);
    }, [y, C]);
    let L = n.useCallback((e) => !e.roles.includes(h), [h]),
        O = (0, x.lJ)(y, L),
        j = n.useMemo(() => O.filter((e) => (0, x.eg)(C, e)), [C, O]),
        P = n.useCallback(async () => {
            let e = Object.values(v).map((e) => e.row.id);
            Z(!0);
            try {
                await m.Z.bulkAddMemberRoles(y, h, e), (0, b.H)(y, h, !1), a();
            } catch (t) {
                let e = new c.Hx(t);
                Z(!1), H(e);
            }
        }, [y, h, v, a]),
        q = n.useMemo(
            () =>
                j.map((e) => {
                    var t;
                    let a = f.ZP.getUserTag(e.user);
                    return {
                        rowType: k.aC.MEMBER,
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
            [j],
        ),
        A = d.Z.useSections({ members: q }),
        N = n.useCallback(
            (e) =>
                e.rowType === k.aC.MEMBER || e.rowType === k.aC.OWNER
                    ? {
                          type: s.F.MEMBER,
                          label: e.name,
                          avatar: e.avatarURL,
                      }
                    : null,
            [],
        ),
        U = n.useMemo(() => Object.keys(v).length, [v]);
    return (0, r.jsx)(d.Z.Provider, {
        listRef: B,
        query: C,
        setQuery: M,
        pendingAdditions: v,
        setPendingAdditions: _,
        members: q,
        getRichTag: N,
        maxPendingRows: g.ey,
        children: (0, r.jsx)(i.Modal, {
            onClose: a,
            transitionState: t,
            title: p.intl.string(p.t.ZYOK46),
            subtitle:
                null != T
                    ? p.intl.format(p.t["qP+nuZ"], {
                          numMembers: g.ey,
                          roleName: T.name,
                      })
                    : p.intl.format(p.t["3OxP4q"], { numMembers: g.ey }),
            input: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(d.Z.SearchBox, { placeholderText: p.intl.string(p.t.vMiCaQ) }),
                    null != S
                        ? (0, r.jsx)(o.Text, {
                              className: R.errorText,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: S.getAnyErrorMessage(),
                          })
                        : null,
                ],
            }),
            listProps: {
                ref: B,
                sectionHeight: d.Z.SECTION_HEIGHT,
                renderSection: d.Z.renderSection,
                rowHeight: d.Z.ROW_HEIGHT,
                renderRow: d.Z.renderRow,
                sections: A,
            },
            actions: [
                {
                    text: p.intl.string(p.t["ETE/oC"]),
                    variant: "secondary",
                    onClick: a,
                },
                {
                    text: p.intl.string(p.t.OYkgVk),
                    variant: "primary",
                    onClick: P,
                    loading: E,
                    disabled: 0 === U || U > g.ey,
                },
            ],
        }),
    });
}
