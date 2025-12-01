n.d(t, { ZP: () => G }), n(781311), n(642613), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(793030),
    o = n(442837),
    c = n(28664),
    d = n(481060),
    u = n(239091),
    g = n(479531),
    m = n(616780),
    p = n(100527),
    f = n(906732),
    h = n(670188),
    b = n(594174),
    x = n(626135),
    j = n(243730),
    _ = n(434404),
    v = n(103576),
    O = n(130341),
    C = n(95242),
    y = n(420966),
    N = n(566476),
    E = n(203377),
    I = n(981631),
    S = n(388032),
    T = n(472039),
    P = n(21321);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function R(e, t, n) {
    let i = e.roles.filter((e) => e !== n);
    try {
        await _.Z.updateMemberRoles(t, e.id, i, [], [n]);
    } catch (t) {
        let e = new g.Z(t);
        (0, d.h7j)((t) =>
            (0, r.jsx)(
                s.Modal,
                Z(w({}, t), {
                    title: S.intl.string(S.t.R0RpRX),
                    actions: [
                        {
                            text: S.intl.string(S.t.BddRzS),
                            variant: "primary",
                            onClick: t.onClose,
                        },
                    ],
                    children: (0, r.jsx)(d.Text, {
                        color: "text-default",
                        variant: "text-md/normal",
                        children: e.getAnyErrorMessage(),
                    }),
                }),
            ),
        );
    }
}
function D(e) {
    let { member: t, guildId: l, roleId: o, locked: g } = e,
        p = i.useRef(null),
        f = i.useMemo(() => ({ [l]: [t.id] }), [l, t.id]);
    function x(e) {
        if ((e.stopPropagation(), !g)) {
            if (e.shiftKey) return void R(t, l, o);
            let n = v.Z.getRole(o);
            (0, d.h7j)((e) =>
                (0, r.jsx)(
                    s.Modal,
                    Z(w({}, e), {
                        title: S.intl.string(S.t["7sFNfW"]),
                        subtitle: S.intl.format(S.t.scORUv, {
                            username: t.name,
                            roleName: null == n ? void 0 : n.name,
                        }),
                        actions: [
                            {
                                text: S.intl.string(S.t["ETE/oC"]),
                                variant: "secondary",
                                onClick: e.onClose,
                            },
                            {
                                text: S.intl.string(S.t.N86XcP),
                                variant: "critical-primary",
                                onClick: () => {
                                    R(t, l, o), e.onClose();
                                },
                            },
                        ],
                        children: (0, r.jsx)(d.Text, {
                            className: T.removeTip,
                            color: "text-muted",
                            variant: "text-md/normal",
                            children: S.intl.string(S.t.jxIxJL),
                        }),
                    }),
                ),
            );
        }
    }
    function j(e) {
        let i = b.default.getUser(t.id);
        null != i &&
            (0, u.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e("79695"), n.e("26976"), n.e("97445")]).then(
                    n.bind(n, 415118),
                );
                return (t) =>
                    (0, r.jsx)(
                        e,
                        Z(w({}, t), {
                            user: i,
                            guildId: l,
                            showChatItems: !1,
                        }),
                    );
            });
    }
    return (
        (0, m.$)(f, "GuildSettingsRolesEditMembers"),
        (0, r.jsx)("div", {
            className: P.contentWidth,
            children: (0, r.jsx)(h.Z, {
                targetElementRef: p,
                userId: t.id,
                guildId: l,
                roleId: o,
                position: "left",
                children: (e) =>
                    (0, r.jsxs)(
                        d.P3F,
                        Z(w({}, e), {
                            innerRef: p,
                            className: T.memberRow,
                            onContextMenu: j,
                            children: [
                                (0, r.jsx)(N.Z, {
                                    className: T.memberDetails,
                                    avatarURL: t.avatarURL,
                                    name: t.name,
                                    bot: t.bot,
                                    verifiedBot: t.verifiedBot,
                                    userTag: t.userTag,
                                }),
                                (0, r.jsx)("div", {
                                    className: T.removeButtonContainer,
                                    children: (0, r.jsx)(c.u, {
                                        text: g ? S.intl.string(S.t.wkrQaK) : S.intl.string(S.t["7sFNfW"]),
                                        position: "top",
                                        children: (0, r.jsx)(d.P3F, {
                                            className: a()(T.removeButton, { [T.removeButtonDisabled]: g }),
                                            onClick: x,
                                            children: (0, r.jsx)(d.k$p, {
                                                size: "xs",
                                                color: "currentColor",
                                            }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    ),
            }),
        })
    );
}
function A(e) {
    let { handleAddClick: t, locked: n } = e;
    return (0, r.jsx)("div", {
        className: P.contentWidth,
        children: (0, r.jsxs)("div", {
            className: a()(T.memberRow, T.emptyRowContainer),
            children: [
                (0, r.jsx)(d.BFJ, {
                    size: "md",
                    color: "currentColor",
                }),
                (0, r.jsx)(d.Text, {
                    className: T.emptyRowText,
                    variant: "text-sm/semibold",
                    color: "text-muted",
                    children: S.intl.format(S.t.P9pZOW, {
                        addMembersHook: function (e, i) {
                            return n
                                ? null
                                : (0, r.jsx)(
                                      d.Anchor,
                                      {
                                          onClick: t,
                                          children: e,
                                      },
                                      i,
                                  );
                        },
                    }),
                }),
            ],
        }),
    });
}
function L(e) {
    let {
            guildId: t,
            roleId: n,
            query: l,
            headerHeight: a,
            locked: s,
            onScroll: o,
            roleMembers: c,
            handleAddClick: u,
        } = e,
        { analyticsLocations: g } = (0, f.ZP)(p.Z.MEMBER_LIST),
        m = i.useMemo(() => l.trim().toLowerCase(), [l]);
    (0, O.rY)(t, m);
    let h = i.useMemo(() => c.filter((e) => (0, O.eg)(m, e)), [c, m]),
        b = i.useMemo(() => h.sort((e, t) => e.name.localeCompare(t.name)), [h]);
    return (0, r.jsx)(f.Gt, {
        value: g,
        children: (0, r.jsx)(d._2F, {
            className: T.list,
            sections: [Math.max(h.length, 1)],
            sectionHeight: a,
            renderSection: () => (0, r.jsx)("div", { style: { height: a } }, "section"),
            style: { scrollPaddingTop: a },
            rowHeight: 40,
            renderRow: function (e) {
                let { row: i } = e;
                if (0 === b.length)
                    return (0, r.jsx)(
                        A,
                        {
                            handleAddClick: u,
                            locked: s,
                        },
                        "empty",
                    );
                let l = b[i];
                return (0, r.jsx)(
                    D,
                    {
                        member: l,
                        guildId: t,
                        roleId: n,
                        locked: s,
                    },
                    l.id,
                );
            },
            onScroll: o,
        }),
    });
}
function k(e) {
    let { query: t, setQuery: n, locked: i, handleAddClick: l } = e;
    return (0, r.jsxs)("div", {
        className: T.searchContainer,
        children: [
            (0, r.jsx)(d.E1j, {
                query: t,
                onChange: n,
                onClear: () => n(""),
                placeholder: S.intl.string(S.t.pYHobK),
                "aria-label": S.intl.string(S.t.pYHobK),
            }),
            (0, r.jsx)(d.Button, {
                onClick: l,
                variant: "primary",
                size: "sm",
                disabled: i,
                text: S.intl.string(S.t.cHszXg),
            }),
        ],
    });
}
function G(e) {
    let { guild: t, role: l, locked: s, setSelectedSection: c } = e,
        [u, g] = i.useState(""),
        { headerHeight: m, headerRef: p } = (0, C.Z)(0),
        { scrolledToTop: f, handleScroll: h } = (0, y.V)(),
        b = l.managed || s,
        _ = (0, O.e)(t.id, l.id),
        v =
            (0, o.e7)([j.Z], () => {
                var e, n;
                return null != (n = null == (e = j.Z.getRoleMemberCount(t.id)) ? void 0 : e[l.id]) ? n : 0;
            }) > _.length,
        N = () => {
            x.default.track(I.rMx.OPEN_MODAL, {
                type: "Add Role Members",
                location_page: "Role Settings",
                location_section: "Members",
            }),
                (0, d.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("33285"), n.e("3291")]).then(n.bind(n, 24722));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            Z(w({}, n), {
                                roleId: l.id,
                                guildId: t.id,
                            }),
                        );
                });
        };
    return (0, r.jsxs)("div", {
        className: T.container,
        children: [
            (0, r.jsx)("div", {
                className: T.headerContainer,
                ref: p,
                children: (0, r.jsx)("div", {
                    className: P.contentWidth,
                    children: (0, r.jsxs)("div", {
                        className: a()(P.header, { [P.stickyHeaderElevated]: !f }),
                        children: [
                            (0, r.jsx)(y.Z, {
                                guild: t,
                                role: l,
                                selectedSection: E.ZI.MEMBERS,
                                setSelectedSection: c,
                            }),
                            (0, r.jsx)(k, {
                                query: u,
                                setQuery: g,
                                locked: b,
                                handleAddClick: N,
                            }),
                            v
                                ? (0, r.jsx)(d.Wn, {
                                      className: T.searchWarning,
                                      messageType: d.QYI.INFO,
                                      children: S.intl.string(S.t.RQxHZ8),
                                  })
                                : null,
                        ],
                    }),
                }),
            }),
            (0, r.jsx)(L, {
                headerHeight: m + 8,
                query: u,
                guildId: t.id,
                roleId: l.id,
                locked: b,
                onScroll: h,
                roleMembers: _,
                handleAddClick: N,
            }),
        ],
    });
}
