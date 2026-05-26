l.d(t, { A: () => tj });
var n,
    i = l(627968),
    C = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(812729),
    d = l.n(r),
    o = l(702841),
    c = l(192308),
    u = l(866323),
    m = l(683071),
    H = l(775602),
    x = l(688810),
    h = l(996439),
    g = l(218394),
    f = l(879408),
    j = l(504049),
    p = l(151781),
    V = l(221950),
    v = l(470348),
    M = l(834730),
    A = l(159083),
    L = l(189552),
    b = l(636670),
    D = l(375708),
    R = l(865588);
function E(e) {
    let { searchState: t } = e,
        l = C.useMemo(
            () => ({
                [L.IY.LOADING]: null,
                [L.IY.SUCCESS_STILL_INDEXING]: { icon: (0, i.jsx)(A.A, {}), message: D.intl.string(D.t.AXPbZr) },
                [L.IY.SUCCESS_EMPTY]: { icon: (0, i.jsx)(b.A, {}), message: D.intl.string(D.t.wdyR52) },
                [L.IY.SUCCESS_FULL]: null,
            }),
            [],
        )[t];
    return null == l
        ? null
        : (0, i.jsxs)("div", {
              className: R.p,
              children: [
                  (0, i.jsx)("div", { className: R.__invalid_noResultsIconContainer, children: l.icon }),
                  (0, i.jsx)(M.E, { variant: "text-md/normal", color: "text-muted", children: l.message }),
              ],
          });
}
var N = l(33851),
    S = l.n(N),
    Z = l(990078),
    I = l(939249),
    y = l(783977),
    _ = l(661531),
    w = l(658675),
    U = l(922016),
    T = l(71393),
    k = l(576705),
    O = l(70738),
    F = l(587426),
    G = l(134413),
    B = l(989349),
    P = l.n(B),
    q = l(156828),
    z = l(980707),
    Y = l(477782),
    K = l(320448),
    $ = l(921853),
    Q = l(282054),
    X = l(652215),
    W = l(623959);
let J = "MMM Do, YYYY",
    ee = P()("2015-05-15").local(),
    et = (0, q.Fe)({
        createPromise: () => Promise.all([l.e("6898"), l.e("61156")]).then(l.bind(l, 939538)),
        webpackId: 939538,
    });
var el =
    (((n = {})[(n.ALL = 0)] = "ALL"),
    (n[(n["1_HOUR"] = 1)] = "1_HOUR"),
    (n[(n["24_HOURS"] = 2)] = "24_HOURS"),
    (n[(n["7_DAYS"] = 3)] = "7_DAYS"),
    (n[(n["2_WEEKS"] = 4)] = "2_WEEKS"),
    (n[(n["4_WEEKS"] = 5)] = "4_WEEKS"),
    (n[(n["3_MONTHS"] = 6)] = "3_MONTHS"),
    (n[(n.CUSTOM = 7)] = "CUSTOM"),
    n);
function en(e) {
    let {
            startDateLabel: t,
            endDateLabel: l,
            afterDate: n,
            beforeDate: s,
            selectedOption: r,
            isCustomDateRange: d,
            menuName: o,
            onClose: c,
            onSelectDateOption: u,
            onToggleCustomDateRange: m,
            onSelectStartDate: H,
            onSelectEndDate: x,
        } = e,
        h = [
            { id: 0, option: null, label: D.intl.string(D.t.jelCib) },
            { id: 1, option: { input: 1, unit: "h" }, label: D.intl.string(D.t["91RDqi"]) },
            { id: 2, option: { input: 24, unit: "h" }, label: D.intl.string(D.t["Lj/1Tq"]) },
            { id: 3, option: { input: 7, unit: "d" }, label: D.intl.string(D.t.NnUMSZ) },
            { id: 4, option: { input: 2, unit: "w" }, label: D.intl.string(D.t.hY3XWH) },
            { id: 5, option: { input: 4, unit: "w" }, label: D.intl.string(D.t.kQTwT0) },
            { id: 6, option: { input: 3, unit: "M" }, label: D.intl.string(D.t.EPuP0s) },
        ],
        [g, f] = C.useState(!1),
        j =
            7 !== r
                ? null
                : null != t && null != l
                  ? `${t} - ${l}`
                  : null != t
                    ? D.intl.formatToPlainString(D.t.ClmSzd, { date: t })
                    : null != l
                      ? D.intl.formatToPlainString(D.t.YvNhsd, { date: l })
                      : null,
        p = C.useCallback(() => {
            f(!0), m();
        }, [m]),
        V = C.useCallback(
            (e) => {
                H(e);
            },
            [H],
        ),
        v = C.useCallback(
            (e) => {
                x(e);
            },
            [x],
        ),
        A = C.useCallback(() => {
            null == s && null == n && u(0, null), f(!1);
        }, [n, s, u]);
    return (0, i.jsx)(z.W, {
        "data-menu-needs-migration": !0,
        navId: `member-safety-guild-member-${o}-menu`,
        onClose: c,
        "aria-label": D.intl.string(D.t.k9m8Rg),
        onSelect: X.tEg,
        children: (0, i.jsx)(Y.rX, {
            children: g
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(Y.Dr, {
                              id: "back",
                              action: A,
                              render: (e) =>
                                  (0, i.jsxs)("span", {
                                      ...e,
                                      className: W.W6,
                                      children: [
                                          (0, i.jsx)($.n, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: 16,
                                              height: 16,
                                          }),
                                          (0, i.jsx)(M.E, {
                                              variant: "eyebrow",
                                              color: "text-strong",
                                              children: D.intl.string(D.t.BTfN6g),
                                          }),
                                      ],
                                  }),
                          }),
                          (0, i.jsx)(Y.Dr, {
                              id: "after-date-menu-item",
                              label: D.intl.string(D.t.RDqVOD),
                              subtext: t,
                              subMenuClassName: W.aD,
                              children: (0, i.jsx)(Y.Dr, {
                                  id: "after-date-picker",
                                  render: (e) =>
                                      (0, i.jsx)(et, {
                                          ...e,
                                          calendarClassName: W.BJ,
                                          value: d && null != n ? P()(n) : void 0,
                                          onSelect: V,
                                          maxDate: P()().local(),
                                          minDate: ee,
                                      }),
                              }),
                          }),
                          (0, i.jsx)(Y.Dr, {
                              id: "before-date-menu-item",
                              label: D.intl.string(D.t.jF54hQ),
                              subtext: l,
                              subMenuClassName: W.aD,
                              children: (0, i.jsx)(Y.Dr, {
                                  id: "before-date-picker",
                                  render: (e) =>
                                      (0, i.jsx)(et, {
                                          ...e,
                                          calendarClassName: W.BJ,
                                          value: d && null != s ? P()(s) : void 0,
                                          onSelect: v,
                                          maxDate: P()().local(),
                                          minDate: d && null != n ? P()(n) : ee,
                                      }),
                              }),
                          }),
                      ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          h.map((e) => {
                              let { id: t, option: l, label: n } = e;
                              return (0, i.jsx)(
                                  Y.iD,
                                  {
                                      group: `member-safety-guild-member-${o}-menu`,
                                      id: `guild-member-${o}-option-${t}`,
                                      label: n,
                                      action: () => u(t, l),
                                      checked: t === r,
                                  },
                                  `option-${t}`,
                              );
                          }),
                          (0, i.jsx)(Y.bX, {}),
                          (0, i.jsx)(Y.Dr, {
                              id: `guild-member-${o}-custom-option}`,
                              action: p,
                              render: (e) =>
                                  (0, i.jsxs)("div", {
                                      className: a()(W.Dh, { [W.in]: e.isFocused }),
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: W.jA,
                                              children: [
                                                  (0, i.jsx)(M.E, {
                                                      className: a()(W.ty, { [W.in]: e.isFocused }),
                                                      variant: "text-sm/medium",
                                                      children: D.intl.string(D.t.BTfN6g),
                                                  }),
                                                  null != j &&
                                                      (0, i.jsx)(M.E, {
                                                          className: a()(W.ty, { [W.in]: e.isFocused }),
                                                          color: "text-muted",
                                                          variant: "text-xxs/medium",
                                                          children: j,
                                                      }),
                                              ],
                                          }),
                                          7 === r
                                              ? (0, i.jsx)(Q.A, { foreground: W.QE, width: 18, height: 18 })
                                              : (0, i.jsx)(K._, {
                                                    size: "custom",
                                                    color: "currentColor",
                                                    width: 16,
                                                    height: 16,
                                                    className: a()(W.ty, { [W.in]: e.isFocused }),
                                                }),
                                      ],
                                  }),
                          }),
                      ],
                  }),
        }),
    });
}
function ei(e) {
    let { guildId: t, onClose: l } = e,
        n = (0, o.bG)([p.A], () => p.A.getSearchStateByGuildId(t), [t], S()),
        { selectedAccountAgeOption: C } = n,
        { afterDate: s, beforeDate: a, optionId: r } = C,
        d = r === el.CUSTOM,
        c = d && null != s ? P()(s).format(J) : null,
        u = d && null != a ? P()(a).format(J) : null;
    return (0, i.jsx)(en, {
        startDateLabel: c,
        endDateLabel: u,
        afterDate: s,
        beforeDate: a,
        selectedOption: r,
        isCustomDateRange: d,
        menuName: "account-age",
        accessibilityLabel: D.intl.string(D.t["D++Tgf"]),
        onClose: l,
        onSelectDateOption: function (e, l) {
            let i = null != l ? P()().subtract(l.input, l.unit).valueOf() : null;
            (0, V.Ld)(t, { ...n, selectedAccountAgeOption: { optionId: e, afterDate: i, beforeDate: null } });
        },
        onToggleCustomDateRange: function () {
            (0, V.Ld)(t, {
                ...n,
                selectedAccountAgeOption: { optionId: el.CUSTOM, afterDate: d ? s : null, beforeDate: d ? a : null },
            });
        },
        onSelectStartDate: function (e) {
            (0, V.Ld)(t, {
                ...n,
                selectedAccountAgeOption: { optionId: el.CUSTOM, afterDate: e.valueOf(), beforeDate: a },
            });
        },
        onSelectEndDate: function (e) {
            (0, V.Ld)(t, {
                ...n,
                selectedAccountAgeOption: { optionId: el.CUSTOM, afterDate: s, beforeDate: e.valueOf() },
            });
        },
    });
}
var eC = l(565787),
    es = l(953822),
    ea = l(60270),
    er = l(353182),
    ed = l(953727);
function eo(e) {
    let { width: t = 24, height: l = 24, color: n = "currentColor", ...C } = e;
    return (0, i.jsxs)("svg", {
        ...(0, ed.A)(C),
        width: t,
        height: l,
        viewBox: "0 0 23 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, i.jsx)("path", {
                d: "M11 8C13.2092 8 15 6.20914 15 4C15 1.79086 13.2092 0 11 0C8.7909 0 7.00004 1.79086 7.00004 4C7.00004 6.20914 8.7909 8 11 8Z",
                fill: n,
            }),
            (0, i.jsx)("path", {
                d: "M10.4819 9C5.21683 9 0.948608 13.2682 0.948608 18.5333C0.948608 19.3434 1.60526 20 2.41528 20H2.63597C2.87577 20 3.08011 19.8292 3.13966 19.597C3.42499 18.4841 3.98016 17.4277 4.45873 16.6878C4.59397 16.4787 4.88927 16.5934 4.86449 16.8412L4.60358 19.4502C4.57415 19.7446 4.80529 20 5.1011 20H10.9805C10.9805 19 11.4727 18.4453 11.9844 17.5L14 13.9961C14 13.9961 15.1133 11.9805 15.5195 11.3672C15.8512 10.9263 16.315 10.5651 16.5 10.5C15.5 9.5 13.2847 9 11.4153 9H10.4819Z",
                fill: n,
            }),
            (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18.9108 12.6271C18.5159 11.9391 17.4841 11.9391 17.0892 12.6271L13.1302 19.524C12.7491 20.1878 13.2503 20.9999 14.041 20.9999L21.9591 21C22.7497 21 23.2509 20.1878 22.8699 19.5241L18.9108 12.6271ZM18.4457 14.5H17.5543C17.2579 14.5 17.0265 14.7565 17.057 15.0514L17.2654 17.0683C17.2819 17.2279 17.4424 17.3297 17.5993 17.296C17.726 17.2687 17.863 17.25 18 17.25C18.137 17.25 18.274 17.2687 18.4007 17.296C18.5576 17.3297 18.7182 17.2279 18.7347 17.0683L18.943 15.0514C18.9735 14.7565 18.7422 14.5 18.4457 14.5ZM19 19C19 19.5523 18.5523 20 18 20C17.4477 20 17 19.5523 17 19C17 18.4477 17.4477 18 18 18C18.5523 18 19 18.4477 19 19Z",
                fill: n,
            }),
        ],
    });
}
let ec = (0, eC.k)(eo);
function eu(e) {
    let { guildId: t, onClose: l } = e,
        n = (0, o.bG)([p.A], () => p.A.getSearchStateByGuildId(t), [t], S()),
        s = (0, j.Tj)(t),
        a = C.useCallback(() => {
            n.requireUnusualDmActivity || s(j.Zp.UNUSUAL_DM_ACTIVITY),
                (0, V.Ld)(t, { ...n, requireUnusualDmActivity: !n.requireUnusualDmActivity });
        }, [t, n, s]),
        r = C.useCallback(() => {
            n.requireCommunicationDisabled || s(j.Zp.COMMUNICATION_DISABLED),
                (0, V.Ld)(t, { ...n, requireCommunicationDisabled: !n.requireCommunicationDisabled });
        }, [t, n, s]),
        d = C.useCallback(() => {
            n.requireUnusualAccountActivity || s(j.Zp.UNUSUAL_ACCOUNT_ACTIVITY),
                (0, V.Ld)(t, { ...n, requireUnusualAccountActivity: !n.requireUnusualAccountActivity });
        }, [t, n, s]),
        c = C.useCallback(() => {
            n.requireUsernameQuarantined || s(j.Zp.USERNAME_QUARANTINED),
                (0, V.Ld)(t, { ...n, requireUsernameQuarantined: !n.requireUsernameQuarantined });
        }, [t, n, s]);
    return (0, i.jsx)(z.W, {
        "data-menu-migrated": !0,
        navId: "member-safety-flags",
        onClose: l,
        "aria-label": D.intl.string(D.t.k9m8Rg),
        onSelect: X.tEg,
        children: (0, i.jsxs)(Y.rX, {
            children: [
                (0, i.jsx)(Y.sL, {
                    id: "toggle-require-unusual-dm-activity",
                    label: D.intl.string(D.t.ZRnON3),
                    leftIcon: es.E,
                    leadingAccessory: { type: "icon", icon: es.E },
                    action: a,
                    checked: n.requireUnusualDmActivity,
                }),
                (0, i.jsx)(Y.sL, {
                    id: "toggle-require-communication-disabled",
                    label: D.intl.string(D.t.z3wbj8),
                    leftIcon: ea.g,
                    leadingAccessory: { type: "icon", icon: ea.g },
                    action: r,
                    checked: n.requireCommunicationDisabled,
                }),
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(Y.sL, {
                            id: "toggle-require-unusual-account-activity",
                            label: D.intl.string(D.t.DIQsD9),
                            leftIcon: ec,
                            leadingAccessory: { type: "icon", icon: ec },
                            action: d,
                            checked: n.requireUnusualAccountActivity,
                        }),
                        (0, i.jsx)(Y.sL, {
                            id: "toggle-require-username-quarantined",
                            label: D.intl.string(D.t.Jloklk),
                            leftIcon: er._,
                            leadingAccessory: { type: "icon", icon: er._ },
                            action: c,
                            checked: n.requireUsernameQuarantined,
                        }),
                    ],
                }),
            ],
        }),
    });
}
function em(e) {
    let { guildId: t, onClose: l } = e,
        n = (0, o.bG)([p.A], () => p.A.getSearchStateByGuildId(t), [t], S()),
        { selectedJoinDateOption: C } = n,
        { afterDate: s, beforeDate: a, optionId: r } = C,
        d = r === el.CUSTOM,
        c = d && null != s ? P()(s).format(J) : null,
        u = d && null != a ? P()(a).format(J) : null;
    return (0, i.jsx)(en, {
        startDateLabel: c,
        endDateLabel: u,
        afterDate: s,
        beforeDate: a,
        selectedOption: r,
        isCustomDateRange: d,
        menuName: "joined-date",
        accessibilityLabel: D.intl.string(D.t.XMVinX),
        onClose: l,
        onSelectDateOption: function (e, l) {
            let i = null != l ? P()().subtract(l.input, l.unit).valueOf() : null;
            (0, V.Ld)(t, { ...n, selectedJoinDateOption: { optionId: e, afterDate: i, beforeDate: null } });
        },
        onToggleCustomDateRange: function () {
            (0, V.Ld)(t, {
                ...n,
                selectedJoinDateOption: { optionId: el.CUSTOM, afterDate: d ? s : null, beforeDate: d ? a : null },
            });
        },
        onSelectStartDate: function (e) {
            (0, V.Ld)(t, {
                ...n,
                selectedJoinDateOption: { optionId: el.CUSTOM, afterDate: e.valueOf(), beforeDate: a },
            });
        },
        onSelectEndDate: function (e) {
            (0, V.Ld)(t, {
                ...n,
                selectedJoinDateOption: { optionId: el.CUSTOM, afterDate: s, beforeDate: e.valueOf() },
            });
        },
    });
}
var eH = l(316173),
    ex = l(91871),
    eh = l.n(ex),
    eg = l(17928),
    ef = l(602853),
    ej = l(583650),
    ep = l(676608),
    eV = l(34457),
    ev = l(317525);
function eM(e) {
    let { guildId: t, onClose: l } = e,
        n = (0, j.hs)(t),
        [s, a] = C.useState(""),
        r = (0, o.bG)([p.A], () => p.A.getSearchStateByGuildId(t), [t], S()),
        d = (0, o.bG)([H.A], () => H.A.roleStyle),
        c = (0, ef.r)(_.A.unsafe_rawColors.PRIMARY_300).hex(),
        u = (0, ep.jV)(t, null),
        m = (0, eg.yK)([ev.A], () => ev.A.getSortedRoles(t).filter((e) => !(0, eV.Oy)(e)), [t]),
        x = C.useMemo(() => ("" === s ? m : m.filter((e) => eh()(s.toLowerCase(), e.name.toLowerCase()))), [m, s]),
        h = C.useCallback(
            (e) => {
                let l = new Set(r.selectedRoleIds);
                l.has(e) ? l.delete(e) : l.add(e), (0, V.Ld)(t, { selectedRoleIds: l }), n(l);
            },
            [t, r.selectedRoleIds, n],
        );
    return (0, i.jsx)(z.W, {
        "data-menu-migrated": !0,
        navId: "member-safety-roles",
        onClose: l,
        "aria-label": D.intl.string(D.t.ZveC7e),
        onSelect: X.tEg,
        children: (0, i.jsxs)(Y.rX, {
            children: [
                (0, i.jsx)(Y.aK, {
                    id: "members-table-role-search",
                    control: (e, t) =>
                        (0, i.jsx)(ej.V, {
                            ...e,
                            query: s,
                            onChange: a,
                            ref: t,
                            placeholder: D.intl.string(D.t.ZveC7e),
                        }),
                }),
                (0, i.jsx)(Y.bX, {}),
                x.map((e) => {
                    let t = e.colorString ?? c,
                        l =
                            u && e.colorStrings?.primaryColor != null && e.colorStrings?.secondaryColor != null
                                ? e.colorStrings
                                : null;
                    return (0, i.jsx)(
                        Y.sL,
                        {
                            id: `role-${e.id}`,
                            label: e.name,
                            leadingAccessory: {
                                type: "roleDot",
                                variant: "dot" === d ? "dot" : "circle",
                                color: t,
                                colors: l,
                            },
                            checked: r.selectedRoleIds.has(e.id),
                            action: () => h(e.id),
                        },
                        e.id,
                    );
                }),
            ],
        }),
    });
}
var eA = l(358522),
    eL = l(239023);
let eb = C.forwardRef(function (e, t) {
    let { label: l, onFilter: n, isFiltered: C, isSorted: s, className: r, ...d } = e,
        o = C ? "text-strong" : "text-default";
    return (
        s && (o = "text-brand"),
        (0, i.jsx)("th", {
            className: a()(eA.P1, r),
            children: (0, i.jsxs)(I.D, {
                ...d,
                innerRef: t,
                onClick: n,
                className: a()(eA.WV, { [eA.o1]: null != n }),
                children: [
                    (0, i.jsx)(M.E, { variant: "eyebrow", color: o, children: l }),
                    null != n &&
                        (0, i.jsx)("div", {
                            className: eA.IO,
                            children: (0, i.jsx)(y.R, {
                                size: "custom",
                                className: eA.Sj,
                                color: C ? _.A.colors.CONTROL_BRAND_FOREGROUND.css : _.A.colors.TEXT_MUTED.css,
                                width: 16,
                                height: 16,
                            }),
                        }),
                ],
            }),
        })
    );
});
function eD(e) {
    let { guildId: t, currentPagedMembers: l } = e,
        n = C.useRef(null),
        s = C.useRef(null),
        r = C.useRef(null),
        d = C.useRef(null),
        c = C.useRef(null),
        u = (0, o.bG)([p.A], () => p.A.getSearchStateByGuildId(t), [t], S()),
        m = (0, o.bG)([k.A, T.A], () => k.A.can(X.xBc.MANAGE_GUILD, T.A.getGuild(t)), [t]),
        { selectedUserIds: H, addUsers: x, clearSelection: h } = (0, F.A)(t),
        g =
            u.requireUnusualDmActivity ||
            u.requireCommunicationDisabled ||
            u.requireUnusualAccountActivity ||
            u.requireUsernameQuarantined,
        f = u.selectedRoleIds.size > 0,
        j = null != u.selectedJoinDateOption.afterDate,
        V = u.selectedSort === O.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
        v = null != u.selectedAccountAgeOption.afterDate,
        M = u.selectedSort === O.mF.ORDER_BY_USER_ID_ASC || u.selectedSort === O.mF.ORDER_BY_USER_ID_DESC,
        A = null != u.selectedSourceInviteCode && "" !== u.selectedSourceInviteCode,
        L = null != u.selectedJoinSourceType,
        b = A || L,
        R = (0, G.vA)(t),
        E = C.useMemo(() => l.filter((e) => (0, G.Ph)(t, R, e)), [R, l, t]),
        N = E.length > 0,
        y = 0 === E.filter((e) => !H.has(e)).length,
        _ = C.useCallback(() => {
            N && (y ? h() : x(E));
        }, [N, y, h, x, E]);
    return (0, i.jsx)("thead", {
        children: (0, i.jsxs)("tr", {
            className: eA.Yk,
            children: [
                R &&
                    (0, i.jsx)("th", {
                        className: a()(eA.P1, eL.y2),
                        children: (0, i.jsx)(Z.m, {
                            shouldShow: !N,
                            text: D.intl.string(D.t.tJEY0G),
                            children: (0, i.jsx)(I.D, {
                                onClick: _,
                                className: eA.WV,
                                children: (0, i.jsx)(w.P, { checked: y, disabled: !N }),
                            }),
                        }),
                    }),
                (0, i.jsx)(eb, { label: D.intl.string(D.t.Es7n9c) }),
                m
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(U.Y, {
                                  targetElementRef: n,
                                  animation: U.Y.Animation.FADE,
                                  position: "bottom",
                                  spacing: 4,
                                  align: "left",
                                  renderPopout: () => (0, i.jsx)(em, { guildId: t, onClose: X.tEg }),
                                  children: (e) => {
                                      let { onClick: t, ...l } = e;
                                      return (0, i.jsx)(eb, {
                                          ref: n,
                                          label: D.intl.string(D.t.xcKP1P),
                                          onFilter: t,
                                          isFiltered: j,
                                          isSorted: V,
                                          className: eL.qp,
                                          ...l,
                                      });
                                  },
                              }),
                              (0, i.jsx)(U.Y, {
                                  targetElementRef: s,
                                  animation: U.Y.Animation.FADE,
                                  position: "bottom",
                                  spacing: 4,
                                  align: "left",
                                  renderPopout: () => (0, i.jsx)(ei, { guildId: t, onClose: X.tEg }),
                                  children: (e) => {
                                      let { onClick: t, ...l } = e;
                                      return (0, i.jsx)(eb, {
                                          ref: s,
                                          label: D.intl.string(D.t.sPph4O),
                                          onFilter: t,
                                          isFiltered: v,
                                          isSorted: M,
                                          className: eL.qp,
                                          ...l,
                                      });
                                  },
                              }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(eb, { label: D.intl.string(D.t.xcKP1P), className: eL.qp }),
                              (0, i.jsx)(eb, { label: D.intl.string(D.t.sPph4O), className: eL.qp }),
                          ],
                      }),
                m
                    ? (0, i.jsx)(U.Y, {
                          targetElementRef: r,
                          animation: U.Y.Animation.FADE,
                          position: "bottom",
                          spacing: 4,
                          align: "left",
                          renderPopout: () => (0, i.jsx)(eH.default, { guildId: t, onClose: X.tEg }),
                          children: (e) => {
                              let { onClick: t, ...l } = e;
                              return (0, i.jsx)(eb, {
                                  ref: r,
                                  label: D.intl.string(D.t["yn0w1+"]),
                                  onFilter: t,
                                  isFiltered: b,
                                  className: eL.qp,
                                  ...l,
                              });
                          },
                      })
                    : null,
                (0, i.jsx)(U.Y, {
                    targetElementRef: d,
                    animation: U.Y.Animation.FADE,
                    position: "bottom",
                    spacing: 4,
                    align: "left",
                    renderPopout: (e) => {
                        let { closePopout: l } = e;
                        return (0, i.jsx)(eM, { guildId: t, onClose: l });
                    },
                    children: (e) => {
                        let { onClick: t, ...l } = e;
                        return (0, i.jsx)(eb, {
                            ref: d,
                            label: D.intl.string(D.t["2SZsWX"]),
                            onFilter: t,
                            isFiltered: f,
                            className: eL.QB,
                            ...l,
                        });
                    },
                }),
                (0, i.jsx)(Z.m, {
                    text: D.intl.string(D.t["2cRO3R"]),
                    position: "top",
                    align: "left",
                    shouldShow: !0,
                    children: (0, i.jsx)(U.Y, {
                        targetElementRef: c,
                        animation: U.Y.Animation.FADE,
                        position: "bottom",
                        spacing: 4,
                        align: "left",
                        renderPopout: (e) => {
                            let { closePopout: l } = e;
                            return (0, i.jsx)(eu, { guildId: t, onClose: l });
                        },
                        children: (e) =>
                            (0, i.jsx)(eb, {
                                ref: c,
                                label: D.intl.string(D.t["7V3759"]),
                                "aria-label": D.intl.string(D.t["2cRO3R"]),
                                onFilter: (t) => {
                                    e.onClick?.(t);
                                },
                                isFiltered: g,
                                className: eL.qp,
                                onMouseEnter: () => {
                                    e.onMouseEnter?.();
                                },
                                onMouseDown: e.onMouseDown,
                                onKeyDown: e.onKeyDown,
                                "aria-controls": e["aria-controls"],
                                "aria-expanded": e["aria-expanded"],
                            }),
                    }),
                }),
                (0, i.jsx)(eb, { label: D.intl.string(D.t["5Q9xGr"]), className: eL.qp }),
            ],
        }),
    });
}
var eR = l(735438),
    eE = l(307301),
    eN = l(463930),
    eS = l(950305),
    eZ = l(530005),
    eI = l(966327),
    ey = l(396583),
    e_ = l(576470),
    ew = l(229527),
    eU = l(316031),
    eT = l(901472),
    ek = l(985925),
    eO = l(534400),
    eF = l(694318),
    eG = l(967144),
    eB = l(761640),
    eP = l(287809),
    eq = l(881548),
    ez = l(562153),
    eY = l(935208),
    eK = l(427262),
    e$ = l(157347),
    eQ = l(873174),
    eX = l(615300),
    eW = l(717421),
    eJ = l(475743);
let e1 = { duration: 100, easing: eX.A.Easing.inOut(eX.A.Easing.back()), clamp: !0 },
    e3 = { duration: 2e3, easing: eX.A.Easing.quad, clamp: !0 };
function e8(e) {
    let { value: t, children: l, equalityFn: n = S(), style: s, ...a } = e,
        r = (0, eJ.A)(t),
        [{ spring: d }, o] = (0, eW.z)(() => ({ spring: 0 }), "animate-always"),
        c = (0, ef.r)(_.A.colors.BACKGROUND_BASE_LOW).hex(),
        u = (0, ef.r)(_.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
        m = C.useCallback(() => {
            o({ spring: 1, config: e1 }), o({ spring: 0, config: e3, delay: 300 });
        }, [o]);
    C.useEffect(() => {
        null == t || null == r || n(t, r) || m();
    }, [m, t, r, n]);
    let H = d?.to({ range: [0, 1], output: [`${c}00`, `${u}27`] }),
        x = null != s ? { ...s, backgroundColor: H } : { backgroundColor: H };
    return (0, i.jsx)(eQ.animated.tr, { ...a, style: x, children: l });
}
var e4 = l(589935),
    e5 = l(950072),
    e2 = l(746080),
    e9 = l(486974);
let e7 = C.memo(function (e) {
        let { member: t } = e,
            l = C.useMemo(() => (0, eU.n)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
            n = C.useMemo(
                () => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)),
                [t.communicationDisabledUntil],
            );
        return (0, i.jsxs)("div", {
            className: eL.Ak,
            children: [
                t.hasUnusualDmActivity &&
                    (0, i.jsx)(Z.m, {
                        text: D.intl.string(D.t.QrfVTp),
                        children: (0, i.jsx)(es.E, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: _.A.colors.TEXT_MUTED.css,
                        }),
                    }),
                l &&
                    (0, i.jsx)(Z.m, {
                        "aria-label": D.intl.string(D.t["xfJP+u"]),
                        __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
                            className: eL.CN,
                            children: [
                                (0, i.jsx)("div", { children: D.intl.string(D.t["xfJP+u"]) }),
                                (0, i.jsx)(e_.A, { deadline: n, showUnits: !0, stopAtOneSec: !0 }),
                            ],
                        }),
                        children: (0, i.jsx)(ea.g, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: _.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                        }),
                    }),
                (0, eF.cx)(t.userId) &&
                    (0, i.jsx)(Z.m, {
                        text: D.intl.string(D.t.PK9FQ2),
                        children: (0, i.jsx)(eo, {
                            width: 20,
                            height: 20,
                            color: _.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                        }),
                    }),
                (0, ew.TR)(t) &&
                    (0, i.jsx)(Z.m, {
                        text: D.intl.string(D.t.qOVbaX),
                        children: (0, i.jsx)(er._, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: _.A.colors.TEXT_MUTED.css,
                        }),
                    }),
            ],
        });
    }),
    e6 = C.memo(function (e) {
        let { member: t, highestRole: l } = e,
            n = (0, o.bG)([T.A], () => T.A.getGuild(t.guildId), [t.guildId]),
            s = t.roles.length - 1,
            r = C.useMemo(() => new Intl.NumberFormat(D.intl.currentLocale).format(s), [s]),
            d = (0, L.Cy)(t),
            c = (0, L.Cy)(t, !0),
            u = (0, o.bG)([k.A], () => k.A.can(X.xBc.MANAGE_ROLES, n), [n]);
        return null == n
            ? null
            : (0, i.jsxs)("div", {
                  className: eL.yk,
                  children: [
                      null != l && (0, i.jsx)(e5.A, { className: a()(eL.Zf, eL.Lc), role: l, guildId: t.guildId }),
                      s > 0 &&
                          (0, i.jsx)(I.D, {
                              className: eL.yt,
                              onClick: (e) => c(e),
                              children: (0, i.jsx)(Z.m, {
                                  text: D.intl.string(D.t.DY6n4q),
                                  children: (0, i.jsxs)(M.E, {
                                      variant: "text-xs/medium",
                                      color: "text-strong",
                                      children: ["+", r],
                                  }),
                              }),
                          }),
                      u &&
                          (0, i.jsx)(Z.m, {
                              text: D.intl.string(D.t.h3pSLR),
                              children: (0, i.jsx)(I.D, {
                                  onClick: d,
                                  className: a()(eL.yt, eL.$g),
                                  children: (0, i.jsx)(eE.j, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: eL.fd,
                                      width: 16,
                                      height: 16,
                                  }),
                              }),
                          }),
                  ],
              });
    }),
    e0 = C.memo(function (e) {
        let { member: t, user: l } = e,
            n = (0, eG.gn)(t?.guildId, t?.userId, t?.colorStrings ?? null);
        return null == l || null == t
            ? null
            : (0, i.jsxs)("div", {
                  className: eL.FD,
                  children: [
                      (0, i.jsx)("div", { className: eL.Wn, children: (0, i.jsx)(eI.A, { user: l }) }),
                      (0, i.jsx)("div", {
                          className: eL.eg,
                          children: (0, i.jsx)(M.E, {
                              variant: "text-sm/medium",
                              children: (0, i.jsxs)("div", {
                                  className: eL.VW,
                                  children: [
                                      (0, i.jsx)(eN.g, {
                                          name: ez.Ay.getName(t.guildId, null, l),
                                          colorString: t.colorString ?? null,
                                          colorStrings: n,
                                          className: eL.bc,
                                      }),
                                      (0, i.jsx)(eO.Ay, {
                                          primaryGuild: l?.primaryGuild,
                                          userId: l?.id,
                                          contextGuildId: t.guildId,
                                          containerClassName: eL.Dz,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: eL.Br,
                          children: (0, i.jsx)(M.E, {
                              variant: "text-xs/normal",
                              color: "text-default",
                              tag: "span",
                              children: eK.Ay.getUserTag(l),
                          }),
                      }),
                  ],
              });
    });
function te(e) {
    return {
        short: null == e ? null : (0, e$.hL)(e, e$.wN.JOINED_AT),
        long: new Date(e ?? 0).toLocaleDateString(D.intl.currentLocale, e$.wp),
    };
}
function tt(e) {
    let { member: t, showLongDate: l, isSortedBy: n } = e,
        [s, a] = C.useState(null);
    C.useEffect(() => {
        a(te(t.joinedAtTimestamp));
    }, [t.joinedAtTimestamp]),
        (0, ey.A)(() => {
            a(te(t.joinedAtTimestamp));
        }, 1e4);
    let r = n ? "text-brand" : "text-default";
    return s?.short == null
        ? null
        : l
          ? (0, i.jsx)("div", {
                className: eL.__invalid_joinedAtContainer,
                children: (0, i.jsx)(M.E, { variant: "text-sm/medium", color: r, children: s.long }),
            })
          : (0, i.jsx)("div", {
                className: eL.__invalid_joinedAtContainer,
                children: (0, i.jsx)(Z.m, {
                    align: "left",
                    __unsupportedReactNodeAsText: s.long,
                    children: (0, i.jsx)(M.E, { variant: "text-sm/medium", color: r, children: s.short }),
                }),
            });
}
let tl = C.memo(function (e) {
        let { member: t, showLongDate: l, isSortedBy: n } = e,
            { accountCreationDateShort: s, accountCreationDateLong: a } = C.useMemo(() => {
                let e = eY.default.extractTimestamp(t.userId);
                return {
                    accountCreationDateShort: (0, e$.hL)(e, e$.wN.ACCOUNT_AGE),
                    accountCreationDateLong: new Date(e).toLocaleDateString(D.intl.currentLocale, e$.OA),
                };
            }, [t.userId]),
            r = n ? "text-brand" : "text-default";
        return l
            ? (0, i.jsx)(M.E, { variant: "text-sm/medium", color: r, children: a })
            : (0, i.jsx)(Z.m, {
                  align: "left",
                  __unsupportedReactNodeAsText: a,
                  children: (0, i.jsx)(M.E, { variant: "text-sm/medium", color: r, children: s }),
              });
    }),
    tn = C.memo(function (e) {
        let {
                member: t,
                user: l,
                highestRole: n,
                isHoldingAdvancedInfoKey: s,
                onOpenModerationMenu: r,
                onOpenMemberView: d,
                compact: c,
                hasModViewPanelAccess: u,
            } = e,
            m = (0, o.bG)([k.A, T.A], () => k.A.can(X.xBc.MANAGE_GUILD, T.A.getGuild(t.guildId)), [t.guildId]),
            { selectedUserIds: H, addUsers: x, removeUser: h } = (0, F.A)(t.guildId),
            g = (0, G.vA)(t.guildId),
            f = (0, G.O6)(t.guildId, g, t.userId),
            j = (0, o.bG)(
                [p.A],
                () => p.A.getSearchStateByGuildId(t.guildId).selectedSort ?? O.mF.ORDER_BY_UNSPECIFIED,
                [t.guildId],
                S(),
            ),
            V = C.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        null != t && f && (H.has(t.userId) ? h(t.userId) : x([t.userId]));
                },
                [x, f, t, h, H],
            ),
            v = j === O.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
            M = j === O.mF.ORDER_BY_USER_ID_ASC || j === O.mF.ORDER_BY_USER_ID_DESC;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                g &&
                    (0, i.jsx)("td", {
                        children: (0, i.jsx)(Z.m, {
                            shouldShow: !f,
                            ariaHidden: f,
                            text: D.intl.string(D.t["Se4c7+"]),
                            children: (0, i.jsx)(I.D, {
                                onClick: V,
                                children: (0, i.jsx)(w.P, { checked: H.has(t.userId), disabled: !f }),
                            }),
                        }),
                    }),
                (0, i.jsx)("td", {
                    className: a()(eL.QB, { [eL.oE]: c }),
                    children: (0, i.jsx)(e0, { member: t, user: l }),
                }),
                (0, i.jsx)("td", {
                    className: a()(eL.qp, { [eL.oE]: c }),
                    children: (0, i.jsx)(tt, { showLongDate: s, member: t, isSortedBy: v }),
                }),
                (0, i.jsx)("td", {
                    className: a()(eL.qp, { [eL.oE]: c }),
                    children: (0, i.jsx)(tl, { showLongDate: s, member: t, isSortedBy: M }),
                }),
                m &&
                    (0, i.jsx)("td", {
                        className: a()(eL.qp, { [eL.oE]: c }),
                        children: (0, i.jsx)(e4.Ay, { userId: t.userId, guildId: t.guildId }),
                    }),
                (0, i.jsx)("td", {
                    className: a()(eL.QB, { [eL.oE]: c }),
                    children: (0, i.jsx)(e6, { member: t, highestRole: n }),
                }),
                (0, i.jsx)("td", { className: a()(eL.qp, { [eL.oE]: c }), children: (0, i.jsx)(e7, { member: t }) }),
                (0, i.jsx)("td", {
                    className: a()(eL.OL, { [eL.oE]: c }),
                    children: (0, i.jsxs)("div", {
                        className: eL.$E,
                        children: [
                            (0, i.jsx)(Z.m, {
                                asContainer: !0,
                                text: u ? D.intl.string(D.t.nHfkf4) : D.intl.string(D.t.uTre2y),
                                children: (0, i.jsx)(I.D, {
                                    onClick: d,
                                    className: eL.x6,
                                    children: u
                                        ? (0, i.jsx)(eq.A, { width: ti, height: ti })
                                        : (0, i.jsx)(eS.n, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: ti,
                                              height: ti,
                                          }),
                                }),
                            }),
                            (0, i.jsx)(Z.m, {
                                asContainer: !0,
                                text: D.intl.string(D.t.x8Nn4M),
                                children: (0, i.jsx)(I.D, {
                                    onClick: r,
                                    className: eL.x6,
                                    children: (0, i.jsx)(eZ.F, {
                                        size: "custom",
                                        color: "currentColor",
                                        width: ti,
                                        height: ti,
                                    }),
                                }),
                            }),
                        ],
                    }),
                }),
            ],
        });
    }),
    ti = 18,
    tC = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"],
    ts = C.memo(function (e) {
        let {
                userId: t,
                guildId: l,
                style: n,
                rowSelected: s,
                isLoading: r = !1,
                isHoldingAdvancedInfoKey: d = !1,
                compact: c = !1,
            } = e,
            { analyticsLocations: u } = (0, x.Ay)(),
            m = (0, o.bG)([eB.Ay], () => eB.Ay.getGuildSidebarState(l), [l]),
            H = m?.details.userId === t,
            h = (0, o.bG)([p.A], () => p.A.getEnhancedMember(l, t), [l, t]),
            g = (0, L.YH)(h),
            f = (0, o.bG)([eP.default], () => eP.default.getUser(t), [t]),
            j = (0, ek.q)(l),
            V = (0, L.UY)(h ?? void 0),
            v = C.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), V(e);
                },
                [V],
            ),
            M = C.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), null != h && (0, L.Ko)(h, u);
                },
                [h, u],
            ),
            A = C.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        null != h &&
                            (j
                                ? (0, eT.z)(h.guildId, h.userId, e2.VV.MEMBER_SAFETY, { modViewPanel: e9.g.INFO })
                                : (0, L.Ko)(h, u));
                },
                [h, u, j],
            ),
            b = C.useCallback((e, t) => S()((0, eR.omit)(e, tC), (0, eR.omit)(t, tC)), []);
        return null == h
            ? null
            : (0, i.jsx)(e8, {
                  role: "row",
                  value: h,
                  style: n,
                  className: a()(eL.yF, eL.iA, s && eL.wH, H && eL.qb, r && eL.Lq),
                  equalityFn: b,
                  onClick: M,
                  onContextMenu: v,
                  children: (0, i.jsx)(tn, {
                      member: h,
                      user: f,
                      highestRole: g,
                      isHoldingAdvancedInfoKey: d,
                      onOpenModerationMenu: v,
                      onOpenMemberView: A,
                      compact: c,
                      hasModViewPanelAccess: j,
                  }),
              });
    });
var ta = l(551816),
    tr = l(528735);
function td(e) {
    let { guild: t, onSubmit: n } = e,
        s = (0, o.bG)([p.A], () => p.A.getMembersCountByGuildId(t.id, ta.Tu.NEW_GUILD_MEMBER), [t.id]),
        a = (0, o.bG)([p.A], () => {
            let e = p.A.getNewMemberTimestamp(t.id);
            return P()(e).format("h:mm A");
        }, [t.id]),
        r = (0, o.bG)([p.A], () => p.A.hasDefaultSearchStateByGuildId(t.id), [t.id]),
        d = C.useCallback(() => {
            (0, V.UD)(t.id), n?.();
        }, [t.id, n]),
        u = C.useCallback(() => {
            r
                ? d()
                : (0, c.openModalLazy)(async () => {
                      let { default: e } = await l.e("56562").then(l.bind(l, 470857));
                      return (t) => (0, i.jsx)(e, { ...t, onConfirm: d });
                  });
        }, [d, r]),
        m = new Intl.NumberFormat(D.intl.currentLocale).format(s),
        H = (0, G.Y0)(t.id),
        x = (0, G.vA)(t.id),
        h = C.useMemo(() => 1 + +!!H + +!!x, [H, x]);
    return 0 === s
        ? null
        : (0, i.jsxs)("tr", {
              className: tr.iS,
              onClick: u,
              children: [
                  (0, i.jsx)("td", {
                      colSpan: 3,
                      children: (0, i.jsx)(M.E, {
                          variant: "text-sm/normal",
                          color: "always-white",
                          children: D.intl.format(D.t["/i5uJ1"], { count: m, date: a }),
                      }),
                  }),
                  (0, i.jsx)("td", { colSpan: h }),
                  (0, i.jsx)("td", {
                      colSpan: 2,
                      children: (0, i.jsx)("div", {
                          className: eL.$E,
                          children: (0, i.jsx)(I.D, {
                              onClick: u,
                              className: tr.Fu,
                              children: (0, i.jsxs)(M.E, {
                                  variant: "text-sm/normal",
                                  color: "always-white",
                                  className: tr.Lb,
                                  children: [
                                      (0, i.jsx)("div", { children: D.intl.string(D.t.rkyOzK) }),
                                      (0, i.jsx)(eS.n, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 16,
                                          height: 16,
                                          className: tr.Ke,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                  }),
              ],
          });
}
var to = l(650583),
    tc = l(300059);
let tu = { transform: "translate3d(15%, 0, 0)", opacity: 0.3 },
    tm = { transform: "translate3d(5%, 0, 0)", opacity: 0.5 },
    tH = { transform: "translate3d(0, 0, 0)", opacity: 1 },
    tx = { mass: 1.1, friction: 24, tension: 260 },
    th = (e) => e.shiftKey || e.key === to.dh.SHIFT,
    tg = (e) => e.metaKey || e.ctrlKey || ["Meta", "Control"].includes(e.key),
    tf = C.memo(
        function (e) {
            let {
                    members: t,
                    guild: l,
                    className: n,
                    searchState: s,
                    compact: r,
                    onSelectRow: d,
                    onResetForNewMembers: x,
                } = e,
                h = (0, o.bG)([H.A], () => H.A.useReducedMotion),
                { usePubSub: j } = (0, v.r)({ location: "MembersTable" }),
                M = (0, o.bG)([f.A], () => f.A.hasPendingBulkBan(l.id), [l.id]),
                A = j && M,
                b = (0, c.useHasAnyModalOpen)(),
                R = (0, g.j)(),
                [N, S] = C.useState(!1),
                [Z, I] = C.useState(!1),
                y = !b && N && Z;
            C.useEffect(() => {
                R || (S(!1), I(!1));
            }, [R]),
                C.useLayoutEffect(() => {
                    let e = (e) => {
                            th(e) && S(!0), tg(e) && I(!0);
                        },
                        t = (e) => {
                            th(e) && S(!1), tg(e) && I(!1);
                        };
                    return (
                        window.addEventListener("keydown", e),
                        window.addEventListener("keyup", t),
                        () => {
                            window.removeEventListener("keydown", e), window.removeEventListener("keyup", t);
                        }
                    );
                }, []),
                C.useEffect(() => {
                    (0, V.jo)(l.id, t);
                }, [l.id, t]);
            let _ = t.length > 30,
                w = (0, u.p)(t, {
                    key: (e) => e,
                    trail: _ ? 5 : 15,
                    from(e) {
                        let t = p.A.getEnhancedMember(l.id, e),
                            n = p.A.getLastRefreshTimestamp(l.id),
                            i = null == t || 0 === n,
                            C = null != t && t.refreshTimestamp === n;
                        return i || !C ? tH : _ ? tm : tu;
                    },
                    enter: tH,
                    config: tx,
                }),
                U = !h && s === L.IY.LOADING;
            return (0, i.jsxs)("table", {
                className: a()(tc.tp, n),
                children: [
                    (0, i.jsx)(eD, { guildId: l.id, currentPagedMembers: t }),
                    A &&
                        (0, i.jsx)("tbody", {
                            children: (0, i.jsx)("tr", {
                                children: (0, i.jsx)("td", {
                                    colSpan: 99,
                                    className: tc.cg,
                                    children: (0, i.jsxs)("div", {
                                        className: tc.pZ,
                                        children: [
                                            (0, i.jsx)("div", {
                                                className: tc.sj,
                                                children: (0, i.jsx)("div", { className: tc.S0 }),
                                            }),
                                            (0, i.jsx)(m.w, { type: "info", children: D.intl.string(D.t["UP+9QZ"]) }),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                    (0, i.jsx)("tbody", {
                        className: a()({ [tc.u6]: A }),
                        children:
                            s === L.IY.SUCCESS_FULL || s === L.IY.LOADING
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(td, { guild: l, onSubmit: x }),
                                          w((e, t) =>
                                              (0, i.jsx)(
                                                  ts,
                                                  {
                                                      userId: t,
                                                      guildId: l.id,
                                                      style: e,
                                                      onSelect: d,
                                                      isHoldingAdvancedInfoKey: y,
                                                      compact: r,
                                                      isLoading: U,
                                                  },
                                                  t,
                                              ),
                                          ),
                                      ],
                                  })
                                : (0, i.jsx)("td", { colSpan: 7, children: (0, i.jsx)(E, { searchState: s }) }),
                    }),
                ],
            });
        },
        function (e, t) {
            let l = d()(e.members, t.members),
                n = e.guild.id === t.guild.id,
                i = e.searchState === t.searchState,
                C = e.compact === t.compact;
            return l && n && i && C;
        },
    ),
    tj = function (e) {
        let { guild: t, className: l, searchState: n, compact: s, onSelectRow: a, onResetForNewMembers: r } = e,
            d = (0, o.cf)([p.A], () => p.A.getPaginationStateByGuildId(t.id), [t.id]),
            [c] = (0, o.bG)([p.A], () => p.A.getPagedMembersByGuildId(t.id), [t.id], h.D);
        C.useEffect(() => {
            (0, V.uO)(t.id);
        }, [t.id]);
        let u = C.useDeferredValue(c[d.currentPage] ?? []),
            { analyticsLocations: m } = (0, x.Ay)(),
            H = m?.[0] ?? null;
        return (
            C.useEffect(() => {
                (0, j.KW)(t.id, H);
            }, [t.id, H]),
            (0, i.jsx)(tf, {
                members: u,
                guild: t,
                className: l,
                searchState: n,
                compact: s,
                onSelectRow: a,
                onResetForNewMembers: r,
            })
        );
    };
