l.d(t, { A: () => tj });
var n,
    i = l(627968),
    a = l(64700),
    s = l(503698),
    C = l.n(s),
    r = l(812729),
    o = l.n(r),
    d = l(702841),
    c = l(192308),
    u = l(866323),
    m = l(683071),
    h = l(775602),
    x = l(688810),
    g = l(996439),
    H = l(218394),
    p = l(879408),
    j = l(504049),
    _ = l(151781),
    f = l(221950),
    b = l(470348),
    v = l(834730),
    A = l(159083),
    V = l(189552),
    L = l(636670),
    D = l(985018),
    R = l(570804);
function M(e) {
    let { searchState: t } = e,
        l = a.useMemo(
            () => ({
                [V.IY.LOADING]: null,
                [V.IY.SUCCESS_STILL_INDEXING]: { icon: (0, i.jsx)(A.A, {}), message: D.intl.string(D.t.AXPbZr) },
                [V.IY.SUCCESS_EMPTY]: { icon: (0, i.jsx)(L.A, {}), message: D.intl.string(D.t.wdyR52) },
                [V.IY.SUCCESS_FULL]: null,
            }),
            [],
        )[t];
    return null == l
        ? null
        : (0, i.jsxs)("div", {
              className: R.p,
              children: [
                  (0, i.jsx)("div", { className: R.__invalid_noResultsIconContainer, children: l.icon }),
                  (0, i.jsx)(v.E, { variant: "text-md/normal", color: "text-muted", children: l.message }),
              ],
          });
}
var E = l(33851),
    N = l.n(E),
    I = l(990078),
    S = l(939249),
    y = l(783977),
    Z = l(661531),
    w = l(658675),
    U = l(922016),
    T = l(71393),
    k = l(576705),
    O = l(70738),
    F = l(587426),
    B = l(134413),
    G = l(989349),
    P = l.n(G),
    Y = l(156828),
    z = l(550079),
    q = l(477782),
    K = l(320448),
    $ = l(921853),
    Q = l(282054),
    X = l(652215),
    J = l(550551);
let W = "MMM Do, YYYY",
    ee = P()("2015-05-15").local(),
    et = (0, Y.Fe)({
        createPromise: () => Promise.all([l.e("68883"), l.e("61156")]).then(l.bind(l, 939538)),
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
            isCustomDateRange: o,
            menuName: d,
            onClose: c,
            onSelectDateOption: u,
            onToggleCustomDateRange: m,
            onSelectStartDate: h,
            onSelectEndDate: x,
        } = e,
        g = [
            { id: 0, option: null, label: D.intl.string(D.t.jelCib) },
            { id: 1, option: { input: 1, unit: "h" }, label: D.intl.string(D.t["91RDqi"]) },
            { id: 2, option: { input: 24, unit: "h" }, label: D.intl.string(D.t["Lj/1Tq"]) },
            { id: 3, option: { input: 7, unit: "d" }, label: D.intl.string(D.t.NnUMSZ) },
            { id: 4, option: { input: 2, unit: "w" }, label: D.intl.string(D.t.hY3XWH) },
            { id: 5, option: { input: 4, unit: "w" }, label: D.intl.string(D.t.kQTwT0) },
            { id: 6, option: { input: 3, unit: "M" }, label: D.intl.string(D.t.EPuP0s) },
        ],
        [H, p] = a.useState(!1),
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
        _ = a.useCallback(() => {
            p(!0), m();
        }, [m]),
        f = a.useCallback(
            (e) => {
                h(e);
            },
            [h],
        ),
        b = a.useCallback(
            (e) => {
                x(e);
            },
            [x],
        ),
        A = a.useCallback(() => {
            null == s && null == n && u(0, null), p(!1);
        }, [n, s, u]);
    return (0, i.jsx)(z.W, {
        "data-menu-needs-migration": !0,
        navId: `member-safety-guild-member-${d}-menu`,
        onClose: c,
        "aria-label": D.intl.string(D.t.k9m8Rg),
        onSelect: X.tEg,
        children: (0, i.jsx)(q.rX, {
            children: H
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(q.Dr, {
                              id: "back",
                              action: A,
                              render: (e) =>
                                  (0, i.jsxs)("span", {
                                      ...e,
                                      className: J.W6,
                                      children: [
                                          (0, i.jsx)($.n, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: 16,
                                              height: 16,
                                          }),
                                          (0, i.jsx)(v.E, {
                                              variant: "eyebrow",
                                              color: "text-strong",
                                              children: D.intl.string(D.t.BTfN6g),
                                          }),
                                      ],
                                  }),
                          }),
                          (0, i.jsx)(q.Dr, {
                              id: "after-date-menu-item",
                              label: D.intl.string(D.t.RDqVOD),
                              subtext: t,
                              subMenuClassName: J.aD,
                              children: (0, i.jsx)(q.Dr, {
                                  id: "after-date-picker",
                                  render: (e) =>
                                      (0, i.jsx)(et, {
                                          ...e,
                                          calendarClassName: J.BJ,
                                          value: o && null != n ? P()(n) : void 0,
                                          onSelect: f,
                                          maxDate: P()().local(),
                                          minDate: ee,
                                      }),
                              }),
                          }),
                          (0, i.jsx)(q.Dr, {
                              id: "before-date-menu-item",
                              label: D.intl.string(D.t.jF54hQ),
                              subtext: l,
                              subMenuClassName: J.aD,
                              children: (0, i.jsx)(q.Dr, {
                                  id: "before-date-picker",
                                  render: (e) =>
                                      (0, i.jsx)(et, {
                                          ...e,
                                          calendarClassName: J.BJ,
                                          value: o && null != s ? P()(s) : void 0,
                                          onSelect: b,
                                          maxDate: P()().local(),
                                          minDate: o && null != n ? P()(n) : ee,
                                      }),
                              }),
                          }),
                      ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          g.map((e) => {
                              let { id: t, option: l, label: n } = e;
                              return (0, i.jsx)(
                                  q.iD,
                                  {
                                      group: `member-safety-guild-member-${d}-menu`,
                                      id: `guild-member-${d}-option-${t}`,
                                      label: n,
                                      action: () => u(t, l),
                                      checked: t === r,
                                  },
                                  `option-${t}`,
                              );
                          }),
                          (0, i.jsx)(q.bX, {}),
                          (0, i.jsx)(q.Dr, {
                              id: `guild-member-${d}-custom-option}`,
                              action: _,
                              render: (e) =>
                                  (0, i.jsxs)("div", {
                                      className: C()(J.Dh, { [J.in]: e.isFocused }),
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: J.jA,
                                              children: [
                                                  (0, i.jsx)(v.E, {
                                                      className: C()(J.ty, { [J.in]: e.isFocused }),
                                                      variant: "text-sm/medium",
                                                      children: D.intl.string(D.t.BTfN6g),
                                                  }),
                                                  null != j &&
                                                      (0, i.jsx)(v.E, {
                                                          className: C()(J.ty, { [J.in]: e.isFocused }),
                                                          color: "text-muted",
                                                          variant: "text-xxs/medium",
                                                          children: j,
                                                      }),
                                              ],
                                          }),
                                          7 === r
                                              ? (0, i.jsx)(Q.A, { foreground: J.QE, width: 18, height: 18 })
                                              : (0, i.jsx)(K._, {
                                                    size: "custom",
                                                    color: "currentColor",
                                                    width: 16,
                                                    height: 16,
                                                    className: C()(J.ty, { [J.in]: e.isFocused }),
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
        n = (0, d.bG)([_.A], () => _.A.getSearchStateByGuildId(t), [t], N()),
        { selectedAccountAgeOption: a } = n,
        { afterDate: s, beforeDate: C, optionId: r } = a,
        o = r === el.CUSTOM,
        c = o && null != s ? P()(s).format(W) : null,
        u = o && null != C ? P()(C).format(W) : null;
    return (0, i.jsx)(en, {
        startDateLabel: c,
        endDateLabel: u,
        afterDate: s,
        beforeDate: C,
        selectedOption: r,
        isCustomDateRange: o,
        menuName: "account-age",
        accessibilityLabel: D.intl.string(D.t["D++Tgf"]),
        onClose: l,
        onSelectDateOption: function (e, l) {
            let i = null != l ? P()().subtract(l.input, l.unit).valueOf() : null;
            (0, f.Ld)(t, { ...n, selectedAccountAgeOption: { optionId: e, afterDate: i, beforeDate: null } });
        },
        onToggleCustomDateRange: function () {
            (0, f.Ld)(t, {
                ...n,
                selectedAccountAgeOption: { optionId: el.CUSTOM, afterDate: o ? s : null, beforeDate: o ? C : null },
            });
        },
        onSelectStartDate: function (e) {
            (0, f.Ld)(t, {
                ...n,
                selectedAccountAgeOption: { optionId: el.CUSTOM, afterDate: e.valueOf(), beforeDate: C },
            });
        },
        onSelectEndDate: function (e) {
            (0, f.Ld)(t, {
                ...n,
                selectedAccountAgeOption: { optionId: el.CUSTOM, afterDate: s, beforeDate: e.valueOf() },
            });
        },
    });
}
var ea = l(565787),
    es = l(953822),
    eC = l(60270),
    er = l(353182),
    eo = l(953727);
function ed(e) {
    let { width: t = 24, height: l = 24, color: n = "currentColor", ...a } = e;
    return (0, i.jsxs)("svg", {
        ...(0, eo.A)(a),
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
let ec = (0, ea.k)(ed);
function eu(e) {
    let { guildId: t, onClose: l } = e,
        n = (0, d.bG)([_.A], () => _.A.getSearchStateByGuildId(t), [t], N()),
        s = (0, j.Tj)(t),
        C = a.useCallback(() => {
            n.requireUnusualDmActivity || s(j.Zp.UNUSUAL_DM_ACTIVITY),
                (0, f.Ld)(t, { ...n, requireUnusualDmActivity: !n.requireUnusualDmActivity });
        }, [t, n, s]),
        r = a.useCallback(() => {
            n.requireCommunicationDisabled || s(j.Zp.COMMUNICATION_DISABLED),
                (0, f.Ld)(t, { ...n, requireCommunicationDisabled: !n.requireCommunicationDisabled });
        }, [t, n, s]),
        o = a.useCallback(() => {
            n.requireUnusualAccountActivity || s(j.Zp.UNUSUAL_ACCOUNT_ACTIVITY),
                (0, f.Ld)(t, { ...n, requireUnusualAccountActivity: !n.requireUnusualAccountActivity });
        }, [t, n, s]),
        c = a.useCallback(() => {
            n.requireUsernameQuarantined || s(j.Zp.USERNAME_QUARANTINED),
                (0, f.Ld)(t, { ...n, requireUsernameQuarantined: !n.requireUsernameQuarantined });
        }, [t, n, s]);
    return (0, i.jsx)(z.W, {
        "data-menu-migrated": !0,
        navId: "member-safety-flags",
        onClose: l,
        "aria-label": D.intl.string(D.t.k9m8Rg),
        onSelect: X.tEg,
        children: (0, i.jsxs)(q.rX, {
            children: [
                (0, i.jsx)(q.sL, {
                    id: "toggle-require-unusual-dm-activity",
                    label: D.intl.string(D.t.ZRnON3),
                    leftIcon: es.E,
                    leadingAccessory: { type: "icon", icon: es.E },
                    action: C,
                    checked: n.requireUnusualDmActivity,
                }),
                (0, i.jsx)(q.sL, {
                    id: "toggle-require-communication-disabled",
                    label: D.intl.string(D.t.z3wbj8),
                    leftIcon: eC.g,
                    leadingAccessory: { type: "icon", icon: eC.g },
                    action: r,
                    checked: n.requireCommunicationDisabled,
                }),
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(q.sL, {
                            id: "toggle-require-unusual-account-activity",
                            label: D.intl.string(D.t.DIQsD9),
                            leftIcon: ec,
                            leadingAccessory: { type: "icon", icon: ec },
                            action: o,
                            checked: n.requireUnusualAccountActivity,
                        }),
                        (0, i.jsx)(q.sL, {
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
        n = (0, d.bG)([_.A], () => _.A.getSearchStateByGuildId(t), [t], N()),
        { selectedJoinDateOption: a } = n,
        { afterDate: s, beforeDate: C, optionId: r } = a,
        o = r === el.CUSTOM,
        c = o && null != s ? P()(s).format(W) : null,
        u = o && null != C ? P()(C).format(W) : null;
    return (0, i.jsx)(en, {
        startDateLabel: c,
        endDateLabel: u,
        afterDate: s,
        beforeDate: C,
        selectedOption: r,
        isCustomDateRange: o,
        menuName: "joined-date",
        accessibilityLabel: D.intl.string(D.t.XMVinX),
        onClose: l,
        onSelectDateOption: function (e, l) {
            let i = null != l ? P()().subtract(l.input, l.unit).valueOf() : null;
            (0, f.Ld)(t, { ...n, selectedJoinDateOption: { optionId: e, afterDate: i, beforeDate: null } });
        },
        onToggleCustomDateRange: function () {
            (0, f.Ld)(t, {
                ...n,
                selectedJoinDateOption: { optionId: el.CUSTOM, afterDate: o ? s : null, beforeDate: o ? C : null },
            });
        },
        onSelectStartDate: function (e) {
            (0, f.Ld)(t, {
                ...n,
                selectedJoinDateOption: { optionId: el.CUSTOM, afterDate: e.valueOf(), beforeDate: C },
            });
        },
        onSelectEndDate: function (e) {
            (0, f.Ld)(t, {
                ...n,
                selectedJoinDateOption: { optionId: el.CUSTOM, afterDate: s, beforeDate: e.valueOf() },
            });
        },
    });
}
var eh = l(316173),
    ex = l(91871),
    eg = l.n(ex),
    eH = l(17928),
    ep = l(602853),
    ej = l(583650),
    e_ = l(676608),
    ef = l(34457),
    eb = l(317525);
function ev(e) {
    let { guildId: t, onClose: l } = e,
        n = (0, j.hs)(t),
        [s, C] = a.useState(""),
        r = (0, d.bG)([_.A], () => _.A.getSearchStateByGuildId(t), [t], N()),
        o = (0, d.bG)([h.A], () => h.A.roleStyle),
        c = (0, ep.r)(Z.A.unsafe_rawColors.PRIMARY_300).hex(),
        u = (0, e_.jV)(t, null),
        m = (0, eH.yK)([eb.A], () => eb.A.getSortedRoles(t).filter((e) => !(0, ef.Oy)(e)), [t]),
        x = a.useMemo(() => ("" === s ? m : m.filter((e) => eg()(s.toLowerCase(), e.name.toLowerCase()))), [m, s]),
        g = a.useCallback(
            (e) => {
                let l = new Set(r.selectedRoleIds);
                l.has(e) ? l.delete(e) : l.add(e), (0, f.Ld)(t, { selectedRoleIds: l }), n(l);
            },
            [t, r.selectedRoleIds, n],
        );
    return (0, i.jsx)(z.W, {
        "data-menu-migrated": !0,
        navId: "member-safety-roles",
        onClose: l,
        "aria-label": D.intl.string(D.t.ZveC7e),
        onSelect: X.tEg,
        children: (0, i.jsxs)(q.rX, {
            children: [
                (0, i.jsx)(q.aK, {
                    id: "members-table-role-search",
                    control: (e, t) =>
                        (0, i.jsx)(ej.V, {
                            ...e,
                            query: s,
                            onChange: C,
                            ref: t,
                            placeholder: D.intl.string(D.t.ZveC7e),
                        }),
                }),
                (0, i.jsx)(q.bX, {}),
                x.map((e) => {
                    let t = e.colorString ?? c,
                        l =
                            u && e.colorStrings?.primaryColor != null && e.colorStrings?.secondaryColor != null
                                ? e.colorStrings
                                : null;
                    return (0, i.jsx)(
                        q.sL,
                        {
                            id: `role-${e.id}`,
                            label: e.name,
                            leadingAccessory: {
                                type: "roleDot",
                                variant: "dot" === o ? "dot" : "circle",
                                color: t,
                                colors: l,
                            },
                            checked: r.selectedRoleIds.has(e.id),
                            action: () => g(e.id),
                        },
                        e.id,
                    );
                }),
            ],
        }),
    });
}
var eA = l(301050),
    eV = l(62255);
let eL = a.forwardRef(function (e, t) {
    let { label: l, onFilter: n, isFiltered: a, isSorted: s, className: r, ...o } = e,
        d = a ? "text-strong" : "text-default";
    return (
        s && (d = "text-brand"),
        (0, i.jsx)("th", {
            className: C()(eA.P1, r),
            children: (0, i.jsxs)(S.D, {
                ...o,
                innerRef: t,
                onClick: n,
                className: C()(eA.WV, { [eA.o1]: null != n }),
                children: [
                    (0, i.jsx)(v.E, { variant: "eyebrow", color: d, children: l }),
                    null != n &&
                        (0, i.jsx)("div", {
                            className: eA.IO,
                            children: (0, i.jsx)(y.R, {
                                size: "custom",
                                className: eA.Sj,
                                color: a ? Z.A.colors.CONTROL_BRAND_FOREGROUND.css : Z.A.colors.TEXT_MUTED.css,
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
        n = a.useRef(null),
        s = a.useRef(null),
        r = a.useRef(null),
        o = a.useRef(null),
        c = a.useRef(null),
        u = (0, d.bG)([_.A], () => _.A.getSearchStateByGuildId(t), [t], N()),
        m = (0, d.bG)([k.A, T.A], () => k.A.can(X.xBc.MANAGE_GUILD, T.A.getGuild(t)), [t]),
        { selectedUserIds: h, addUsers: x, clearSelection: g } = (0, F.A)(t),
        H =
            u.requireUnusualDmActivity ||
            u.requireCommunicationDisabled ||
            u.requireUnusualAccountActivity ||
            u.requireUsernameQuarantined,
        p = u.selectedRoleIds.size > 0,
        j = null != u.selectedJoinDateOption.afterDate,
        f = u.selectedSort === O.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
        b = null != u.selectedAccountAgeOption.afterDate,
        v = u.selectedSort === O.mF.ORDER_BY_USER_ID_ASC || u.selectedSort === O.mF.ORDER_BY_USER_ID_DESC,
        A = null != u.selectedSourceInviteCode && "" !== u.selectedSourceInviteCode,
        V = null != u.selectedJoinSourceType,
        L = A || V,
        R = (0, B.vA)(t),
        M = a.useMemo(() => l.filter((e) => (0, B.Ph)(t, R, e)), [R, l, t]),
        E = M.length > 0,
        y = 0 === M.filter((e) => !h.has(e)).length,
        Z = a.useCallback(() => {
            E && (y ? g() : x(M));
        }, [E, y, g, x, M]);
    return (0, i.jsx)("thead", {
        children: (0, i.jsxs)("tr", {
            className: eA.Yk,
            children: [
                R &&
                    (0, i.jsx)("th", {
                        className: C()(eA.P1, eV.y2),
                        children: (0, i.jsx)(I.m, {
                            shouldShow: !E,
                            text: D.intl.string(D.t.tJEY0G),
                            children: (0, i.jsx)(S.D, {
                                onClick: Z,
                                className: eA.WV,
                                children: (0, i.jsx)(w.P, { checked: y, disabled: !E }),
                            }),
                        }),
                    }),
                (0, i.jsx)(eL, { label: D.intl.string(D.t.Es7n9c) }),
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
                                      return (0, i.jsx)(eL, {
                                          ref: n,
                                          label: D.intl.string(D.t.xcKP1P),
                                          onFilter: t,
                                          isFiltered: j,
                                          isSorted: f,
                                          className: eV.qp,
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
                                      return (0, i.jsx)(eL, {
                                          ref: s,
                                          label: D.intl.string(D.t.sPph4O),
                                          onFilter: t,
                                          isFiltered: b,
                                          isSorted: v,
                                          className: eV.qp,
                                          ...l,
                                      });
                                  },
                              }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(eL, { label: D.intl.string(D.t.xcKP1P), className: eV.qp }),
                              (0, i.jsx)(eL, { label: D.intl.string(D.t.sPph4O), className: eV.qp }),
                          ],
                      }),
                m
                    ? (0, i.jsx)(U.Y, {
                          targetElementRef: r,
                          animation: U.Y.Animation.FADE,
                          position: "bottom",
                          spacing: 4,
                          align: "left",
                          renderPopout: () => (0, i.jsx)(eh.default, { guildId: t, onClose: X.tEg }),
                          children: (e) => {
                              let { onClick: t, ...l } = e;
                              return (0, i.jsx)(eL, {
                                  ref: r,
                                  label: D.intl.string(D.t["yn0w1+"]),
                                  onFilter: t,
                                  isFiltered: L,
                                  className: eV.qp,
                                  ...l,
                              });
                          },
                      })
                    : null,
                (0, i.jsx)(U.Y, {
                    targetElementRef: o,
                    animation: U.Y.Animation.FADE,
                    position: "bottom",
                    spacing: 4,
                    align: "left",
                    renderPopout: (e) => {
                        let { closePopout: l } = e;
                        return (0, i.jsx)(ev, { guildId: t, onClose: l });
                    },
                    children: (e) => {
                        let { onClick: t, ...l } = e;
                        return (0, i.jsx)(eL, {
                            ref: o,
                            label: D.intl.string(D.t["2SZsWX"]),
                            onFilter: t,
                            isFiltered: p,
                            className: eV.QB,
                            ...l,
                        });
                    },
                }),
                (0, i.jsx)(I.m, {
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
                            (0, i.jsx)(eL, {
                                ref: c,
                                label: D.intl.string(D.t["7V3759"]),
                                "aria-label": D.intl.string(D.t["2cRO3R"]),
                                onFilter: (t) => {
                                    e.onClick?.(t);
                                },
                                isFiltered: H,
                                className: eV.qp,
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
                (0, i.jsx)(eL, { label: D.intl.string(D.t["5Q9xGr"]), className: eV.qp }),
            ],
        }),
    });
}
var eR = l(735438),
    eM = l(307301),
    eE = l(463930),
    eN = l(950305),
    eI = l(530005),
    eS = l(966327),
    ey = l(396583),
    eZ = l(576470),
    ew = l(229527),
    eU = l(316031),
    eT = l(901472),
    ek = l(985925),
    eO = l(534400),
    eF = l(694318),
    eB = l(967144),
    eG = l(761640),
    eP = l(287809),
    eY = l(881548),
    ez = l(562153),
    eq = l(935208),
    eK = l(427262),
    e$ = l(157347),
    eQ = l(419354),
    eX = l(615300),
    eJ = l(717421),
    eW = l(475743);
let e1 = { duration: 100, easing: eX.A.Easing.inOut(eX.A.Easing.back()), clamp: !0 },
    e3 = { duration: 2e3, easing: eX.A.Easing.quad, clamp: !0 };
function e8(e) {
    let { value: t, children: l, equalityFn: n = N(), style: s, ...C } = e,
        r = (0, eW.A)(t),
        [{ spring: o }, d] = (0, eJ.z)(() => ({ spring: 0 }), "animate-always"),
        c = (0, ep.r)(Z.A.colors.BACKGROUND_BASE_LOW).hex(),
        u = (0, ep.r)(Z.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
        m = a.useCallback(() => {
            d({ spring: 1, config: e1 }), d({ spring: 0, config: e3, delay: 300 });
        }, [d]);
    a.useEffect(() => {
        null == t || null == r || n(t, r) || m();
    }, [m, t, r, n]);
    let h = o?.to({ range: [0, 1], output: [`${c}00`, `${u}27`] }),
        x = null != s ? { ...s, backgroundColor: h } : { backgroundColor: h };
    return (0, i.jsx)(eQ.animated.tr, { ...C, style: x, children: l });
}
var e2 = l(589935),
    e4 = l(950072),
    e5 = l(746080),
    e9 = l(486974);
let e7 = a.memo(function (e) {
        let { member: t } = e,
            l = a.useMemo(() => (0, eU.n)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
            n = a.useMemo(
                () => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)),
                [t.communicationDisabledUntil],
            );
        return (0, i.jsxs)("div", {
            className: eV.Ak,
            children: [
                t.hasUnusualDmActivity &&
                    (0, i.jsx)(I.m, {
                        text: D.intl.string(D.t.QrfVTp),
                        children: (0, i.jsx)(es.E, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: Z.A.colors.TEXT_MUTED.css,
                        }),
                    }),
                l &&
                    (0, i.jsx)(I.m, {
                        "aria-label": D.intl.string(D.t["xfJP+u"]),
                        __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
                            className: eV.CN,
                            children: [
                                (0, i.jsx)("div", { children: D.intl.string(D.t["xfJP+u"]) }),
                                (0, i.jsx)(eZ.A, { deadline: n, showUnits: !0, stopAtOneSec: !0 }),
                            ],
                        }),
                        children: (0, i.jsx)(eC.g, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: Z.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                        }),
                    }),
                (0, eF.cx)(t.userId) &&
                    (0, i.jsx)(I.m, {
                        text: D.intl.string(D.t.PK9FQ2),
                        children: (0, i.jsx)(ed, {
                            width: 20,
                            height: 20,
                            color: Z.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                        }),
                    }),
                (0, ew.TR)(t) &&
                    (0, i.jsx)(I.m, {
                        text: D.intl.string(D.t.qOVbaX),
                        children: (0, i.jsx)(er._, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: Z.A.colors.TEXT_MUTED.css,
                        }),
                    }),
            ],
        });
    }),
    e6 = a.memo(function (e) {
        let { member: t, highestRole: l } = e,
            n = (0, d.bG)([T.A], () => T.A.getGuild(t.guildId), [t.guildId]),
            s = t.roles.length - 1,
            r = a.useMemo(() => new Intl.NumberFormat(D.intl.currentLocale).format(s), [s]),
            o = (0, V.Cy)(t),
            c = (0, V.Cy)(t, !0),
            u = (0, d.bG)([k.A], () => k.A.can(X.xBc.MANAGE_ROLES, n), [n]);
        return null == n
            ? null
            : (0, i.jsxs)("div", {
                  className: eV.yk,
                  children: [
                      null != l && (0, i.jsx)(e4.A, { className: C()(eV.Zf, eV.Lc), role: l, guildId: t.guildId }),
                      s > 0 &&
                          (0, i.jsx)(S.D, {
                              className: eV.yt,
                              onClick: (e) => c(e),
                              children: (0, i.jsx)(I.m, {
                                  text: D.intl.string(D.t.DY6n4q),
                                  children: (0, i.jsxs)(v.E, {
                                      variant: "text-xs/medium",
                                      color: "text-strong",
                                      children: ["+", r],
                                  }),
                              }),
                          }),
                      u &&
                          (0, i.jsx)(I.m, {
                              text: D.intl.string(D.t.h3pSLR),
                              children: (0, i.jsx)(S.D, {
                                  onClick: o,
                                  className: C()(eV.yt, eV.$g),
                                  children: (0, i.jsx)(eM.j, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: eV.fd,
                                      width: 16,
                                      height: 16,
                                  }),
                              }),
                          }),
                  ],
              });
    }),
    e0 = a.memo(function (e) {
        let { member: t, user: l } = e,
            n = (0, eB.gn)(t?.guildId, t?.userId, t?.colorStrings ?? null);
        return null == l || null == t
            ? null
            : (0, i.jsxs)("div", {
                  className: eV.FD,
                  children: [
                      (0, i.jsx)("div", { className: eV.Wn, children: (0, i.jsx)(eS.A, { user: l }) }),
                      (0, i.jsx)("div", {
                          className: eV.eg,
                          children: (0, i.jsx)(v.E, {
                              variant: "text-sm/medium",
                              children: (0, i.jsxs)("div", {
                                  className: eV.VW,
                                  children: [
                                      (0, i.jsx)(eE.g, {
                                          name: ez.Ay.getName(t.guildId, null, l),
                                          colorString: t.colorString ?? null,
                                          colorStrings: n,
                                          className: eV.bc,
                                      }),
                                      (0, i.jsx)(eO.Ay, {
                                          primaryGuild: l?.primaryGuild,
                                          userId: l?.id,
                                          contextGuildId: t.guildId,
                                          containerClassName: eV.Dz,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: eV.Br,
                          children: (0, i.jsx)(v.E, {
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
        [s, C] = a.useState(null);
    a.useEffect(() => {
        C(te(t.joinedAtTimestamp));
    }, [t.joinedAtTimestamp]),
        (0, ey.A)(() => {
            C(te(t.joinedAtTimestamp));
        }, 1e4);
    let r = n ? "text-brand" : "text-default";
    return s?.short == null
        ? null
        : l
          ? (0, i.jsx)("div", {
                className: eV.__invalid_joinedAtContainer,
                children: (0, i.jsx)(v.E, { variant: "text-sm/medium", color: r, children: s.long }),
            })
          : (0, i.jsx)("div", {
                className: eV.__invalid_joinedAtContainer,
                children: (0, i.jsx)(I.m, {
                    align: "left",
                    __unsupportedReactNodeAsText: s.long,
                    children: (0, i.jsx)(v.E, { variant: "text-sm/medium", color: r, children: s.short }),
                }),
            });
}
let tl = a.memo(function (e) {
        let { member: t, showLongDate: l, isSortedBy: n } = e,
            { accountCreationDateShort: s, accountCreationDateLong: C } = a.useMemo(() => {
                let e = eq.default.extractTimestamp(t.userId);
                return {
                    accountCreationDateShort: (0, e$.hL)(e, e$.wN.ACCOUNT_AGE),
                    accountCreationDateLong: new Date(e).toLocaleDateString(D.intl.currentLocale, e$.OA),
                };
            }, [t.userId]),
            r = n ? "text-brand" : "text-default";
        return l
            ? (0, i.jsx)(v.E, { variant: "text-sm/medium", color: r, children: C })
            : (0, i.jsx)(I.m, {
                  align: "left",
                  __unsupportedReactNodeAsText: C,
                  children: (0, i.jsx)(v.E, { variant: "text-sm/medium", color: r, children: s }),
              });
    }),
    tn = a.memo(function (e) {
        let {
                member: t,
                user: l,
                highestRole: n,
                isHoldingAdvancedInfoKey: s,
                onOpenModerationMenu: r,
                onOpenMemberView: o,
                compact: c,
                hasModViewPanelAccess: u,
            } = e,
            m = (0, d.bG)([k.A, T.A], () => k.A.can(X.xBc.MANAGE_GUILD, T.A.getGuild(t.guildId)), [t.guildId]),
            { selectedUserIds: h, addUsers: x, removeUser: g } = (0, F.A)(t.guildId),
            H = (0, B.vA)(t.guildId),
            p = (0, B.O6)(t.guildId, H, t.userId),
            j = (0, d.bG)(
                [_.A],
                () => _.A.getSearchStateByGuildId(t.guildId).selectedSort ?? O.mF.ORDER_BY_UNSPECIFIED,
                [t.guildId],
                N(),
            ),
            f = a.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        null != t && p && (h.has(t.userId) ? g(t.userId) : x([t.userId]));
                },
                [x, p, t, g, h],
            ),
            b = j === O.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
            v = j === O.mF.ORDER_BY_USER_ID_ASC || j === O.mF.ORDER_BY_USER_ID_DESC;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                H &&
                    (0, i.jsx)("td", {
                        children: (0, i.jsx)(I.m, {
                            shouldShow: !p,
                            ariaHidden: p,
                            text: D.intl.string(D.t["Se4c7+"]),
                            children: (0, i.jsx)(S.D, {
                                onClick: f,
                                children: (0, i.jsx)(w.P, { checked: h.has(t.userId), disabled: !p }),
                            }),
                        }),
                    }),
                (0, i.jsx)("td", {
                    className: C()(eV.QB, { [eV.oE]: c }),
                    children: (0, i.jsx)(e0, { member: t, user: l }),
                }),
                (0, i.jsx)("td", {
                    className: C()(eV.qp, { [eV.oE]: c }),
                    children: (0, i.jsx)(tt, { showLongDate: s, member: t, isSortedBy: b }),
                }),
                (0, i.jsx)("td", {
                    className: C()(eV.qp, { [eV.oE]: c }),
                    children: (0, i.jsx)(tl, { showLongDate: s, member: t, isSortedBy: v }),
                }),
                m &&
                    (0, i.jsx)("td", {
                        className: C()(eV.qp, { [eV.oE]: c }),
                        children: (0, i.jsx)(e2.Ay, { userId: t.userId, guildId: t.guildId }),
                    }),
                (0, i.jsx)("td", {
                    className: C()(eV.QB, { [eV.oE]: c }),
                    children: (0, i.jsx)(e6, { member: t, highestRole: n }),
                }),
                (0, i.jsx)("td", { className: C()(eV.qp, { [eV.oE]: c }), children: (0, i.jsx)(e7, { member: t }) }),
                (0, i.jsx)("td", {
                    className: C()(eV.OL, { [eV.oE]: c }),
                    children: (0, i.jsxs)("div", {
                        className: eV.$E,
                        children: [
                            (0, i.jsx)(I.m, {
                                asContainer: !0,
                                text: u ? D.intl.string(D.t.nHfkf4) : D.intl.string(D.t.uTre2y),
                                children: (0, i.jsx)(S.D, {
                                    onClick: o,
                                    className: eV.x6,
                                    children: u
                                        ? (0, i.jsx)(eY.A, { width: ti, height: ti })
                                        : (0, i.jsx)(eN.n, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: ti,
                                              height: ti,
                                          }),
                                }),
                            }),
                            (0, i.jsx)(I.m, {
                                asContainer: !0,
                                text: D.intl.string(D.t.x8Nn4M),
                                children: (0, i.jsx)(S.D, {
                                    onClick: r,
                                    className: eV.x6,
                                    children: (0, i.jsx)(eI.F, {
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
    ta = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"],
    ts = a.memo(function (e) {
        let {
                userId: t,
                guildId: l,
                style: n,
                rowSelected: s,
                isLoading: r = !1,
                isHoldingAdvancedInfoKey: o = !1,
                compact: c = !1,
            } = e,
            { analyticsLocations: u } = (0, x.Ay)(),
            m = (0, d.bG)([eG.Ay], () => eG.Ay.getGuildSidebarState(l), [l]),
            h = m?.details.userId === t,
            g = (0, d.bG)([_.A], () => _.A.getEnhancedMember(l, t), [l, t]),
            H = (0, V.YH)(g),
            p = (0, d.bG)([eP.default], () => eP.default.getUser(t), [t]),
            j = (0, ek.q)(l),
            f = (0, V.UY)(g ?? void 0),
            b = a.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), f(e);
                },
                [f],
            ),
            v = a.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), null != g && (0, V.Ko)(g, u);
                },
                [g, u],
            ),
            A = a.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        null != g &&
                            (j
                                ? (0, eT.z)(g.guildId, g.userId, e5.VV.MEMBER_SAFETY, { modViewPanel: e9.g.INFO })
                                : (0, V.Ko)(g, u));
                },
                [g, u, j],
            ),
            L = a.useCallback((e, t) => N()((0, eR.omit)(e, ta), (0, eR.omit)(t, ta)), []);
        return null == g
            ? null
            : (0, i.jsx)(e8, {
                  role: "row",
                  value: g,
                  style: n,
                  className: C()(eV.yF, eV.iA, s && eV.wH, h && eV.qb, r && eV.Lq),
                  equalityFn: L,
                  onClick: v,
                  onContextMenu: b,
                  children: (0, i.jsx)(tn, {
                      member: g,
                      user: p,
                      highestRole: H,
                      isHoldingAdvancedInfoKey: o,
                      onOpenModerationMenu: b,
                      onOpenMemberView: A,
                      compact: c,
                      hasModViewPanelAccess: j,
                  }),
              });
    });
var tC = l(551816),
    tr = l(128799);
function to(e) {
    let { guild: t, onSubmit: n } = e,
        s = (0, d.bG)([_.A], () => _.A.getMembersCountByGuildId(t.id, tC.Tu.NEW_GUILD_MEMBER), [t.id]),
        C = (0, d.bG)([_.A], () => {
            let e = _.A.getNewMemberTimestamp(t.id);
            return P()(e).format("h:mm A");
        }, [t.id]),
        r = (0, d.bG)([_.A], () => _.A.hasDefaultSearchStateByGuildId(t.id), [t.id]),
        o = a.useCallback(() => {
            (0, f.UD)(t.id), n?.();
        }, [t.id, n]),
        u = a.useCallback(() => {
            r
                ? o()
                : (0, c.openModalLazy)(async () => {
                      let { default: e } = await l.e("56562").then(l.bind(l, 470857));
                      return (t) => (0, i.jsx)(e, { ...t, onConfirm: o });
                  });
        }, [o, r]),
        m = new Intl.NumberFormat(D.intl.currentLocale).format(s),
        h = (0, B.Y0)(t.id),
        x = (0, B.vA)(t.id),
        g = a.useMemo(() => 1 + +!!h + +!!x, [h, x]);
    return 0 === s
        ? null
        : (0, i.jsxs)("tr", {
              className: tr.iS,
              onClick: u,
              children: [
                  (0, i.jsx)("td", {
                      colSpan: 3,
                      children: (0, i.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "always-white",
                          children: D.intl.format(D.t["/i5uJ1"], { count: m, date: C }),
                      }),
                  }),
                  (0, i.jsx)("td", { colSpan: g }),
                  (0, i.jsx)("td", {
                      colSpan: 2,
                      children: (0, i.jsx)("div", {
                          className: eV.$E,
                          children: (0, i.jsx)(S.D, {
                              onClick: u,
                              className: tr.Fu,
                              children: (0, i.jsxs)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "always-white",
                                  className: tr.Lb,
                                  children: [
                                      (0, i.jsx)("div", { children: D.intl.string(D.t.rkyOzK) }),
                                      (0, i.jsx)(eN.n, {
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
var td = l(650583),
    tc = l(5979);
let tu = { transform: "translate3d(15%, 0, 0)", opacity: 0.3 },
    tm = { transform: "translate3d(5%, 0, 0)", opacity: 0.5 },
    th = { transform: "translate3d(0, 0, 0)", opacity: 1 },
    tx = { mass: 1.1, friction: 24, tension: 260 },
    tg = (e) => e.shiftKey || e.key === td.dh.SHIFT,
    tH = (e) => e.metaKey || e.ctrlKey || ["Meta", "Control"].includes(e.key),
    tp = a.memo(
        function (e) {
            let {
                    members: t,
                    guild: l,
                    className: n,
                    searchState: s,
                    compact: r,
                    onSelectRow: o,
                    onResetForNewMembers: x,
                } = e,
                g = (0, d.bG)([h.A], () => h.A.useReducedMotion),
                { usePubSub: j } = (0, b.r)({ location: "MembersTable" }),
                v = (0, d.bG)([p.A], () => p.A.hasPendingBulkBan(l.id), [l.id]),
                A = j && v,
                L = (0, c.useHasAnyModalOpen)(),
                R = (0, H.j)(),
                [E, N] = a.useState(!1),
                [I, S] = a.useState(!1),
                y = !L && E && I;
            a.useEffect(() => {
                R || (N(!1), S(!1));
            }, [R]),
                a.useLayoutEffect(() => {
                    let e = (e) => {
                            tg(e) && N(!0), tH(e) && S(!0);
                        },
                        t = (e) => {
                            tg(e) && N(!1), tH(e) && S(!1);
                        };
                    return (
                        window.addEventListener("keydown", e),
                        window.addEventListener("keyup", t),
                        () => {
                            window.removeEventListener("keydown", e), window.removeEventListener("keyup", t);
                        }
                    );
                }, []),
                a.useEffect(() => {
                    (0, f.jo)(l.id, t);
                }, [l.id, t]);
            let Z = t.length > 30,
                w = (0, u.p)(t, {
                    key: (e) => e,
                    trail: Z ? 5 : 15,
                    from(e) {
                        let t = _.A.getEnhancedMember(l.id, e),
                            n = _.A.getLastRefreshTimestamp(l.id),
                            i = null == t || 0 === n,
                            a = null != t && t.refreshTimestamp === n;
                        return i || !a ? th : Z ? tm : tu;
                    },
                    enter: th,
                    config: tx,
                }),
                U = !g && s === V.IY.LOADING;
            return (0, i.jsxs)("table", {
                className: C()(tc.tp, n),
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
                        className: C()({ [tc.u6]: A }),
                        children:
                            s === V.IY.SUCCESS_FULL || s === V.IY.LOADING
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(to, { guild: l, onSubmit: x }),
                                          w((e, t) =>
                                              (0, i.jsx)(
                                                  ts,
                                                  {
                                                      userId: t,
                                                      guildId: l.id,
                                                      style: e,
                                                      onSelect: o,
                                                      isHoldingAdvancedInfoKey: y,
                                                      compact: r,
                                                      isLoading: U,
                                                  },
                                                  t,
                                              ),
                                          ),
                                      ],
                                  })
                                : (0, i.jsx)("td", { colSpan: 7, children: (0, i.jsx)(M, { searchState: s }) }),
                    }),
                ],
            });
        },
        function (e, t) {
            let l = o()(e.members, t.members),
                n = e.guild.id === t.guild.id,
                i = e.searchState === t.searchState,
                a = e.compact === t.compact;
            return l && n && i && a;
        },
    ),
    tj = function (e) {
        let { guild: t, className: l, searchState: n, compact: s, onSelectRow: C, onResetForNewMembers: r } = e,
            o = (0, d.cf)([_.A], () => _.A.getPaginationStateByGuildId(t.id), [t.id]),
            [c] = (0, d.bG)([_.A], () => _.A.getPagedMembersByGuildId(t.id), [t.id], g.D);
        a.useEffect(() => {
            (0, f.uO)(t.id);
        }, [t.id]);
        let u = a.useDeferredValue(c[o.currentPage] ?? []),
            { analyticsLocations: m } = (0, x.Ay)(),
            h = m?.[0] ?? null;
        return (
            a.useEffect(() => {
                (0, j.KW)(t.id, h);
            }, [t.id, h]),
            (0, i.jsx)(tp, {
                members: u,
                guild: t,
                className: l,
                searchState: n,
                compact: s,
                onSelectRow: C,
                onResetForNewMembers: r,
            })
        );
    };
