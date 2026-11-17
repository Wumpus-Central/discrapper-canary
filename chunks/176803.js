l.d(t, { A: () => B });
var n = l(477900),
    i = l(582128),
    s = l(503698),
    a = l.n(s),
    C = l(646514),
    r = l(628274),
    d = l(36525),
    o = l(862482),
    c = l(192308),
    u = l(866665),
    m = l(821609),
    h = l(950305),
    g = l(602853),
    f = l(834730),
    x = l(123292),
    H = l(215026),
    p = l(871682),
    j = l(778858),
    v = l(149468),
    b = l(46653),
    A = l(129230),
    M = l(504049);
l(543079);
var V = l(587426),
    L = l(134413),
    D = l(855986),
    R = l(314116),
    E = l(265872),
    I = l(165862),
    _ = l(477782),
    S = l(408278),
    N = l(365199),
    y = l(316031),
    Z = l(696451),
    T = l(926403),
    w = l(782513),
    U = l(652215),
    k = l(792996);
function O(e) {
    let { guildId: t, userIds: s, canKick: a, canTimeout: C } = e,
        r = i.useRef(null),
        d = s.size > 200,
        o = (0, D.bG)([Z.Ay], () => [...s].some((e) => (0, y.Z)(Z.Ay.getMember(t, e))), [t, s]);
    function m() {
        let e = [...s];
        (0, c.mM)(async () => {
            let { default: i } = await Promise.all([
                l.e(142753),
                l.e(691671),
                l.e(470314),
                l.e(318585),
                l.e(195996),
            ]).then(l.bind(l, 703191));
            return (l) => (0, n.jsx)(i, { ...l, guildId: t, userIds: e });
        });
    }
    function h() {
        let e = [...s];
        (0, R.A)({
            title: k.intl.formatToPlainString(k.t.ATW4Iz, { count: e.length }),
            confirmText: k.intl.string(k.t.qXtNtS),
            onConfirm: () => (0, w.cd)((0, T.f)(t, e, null), (0, w._P)()),
        });
    }
    function g() {
        let e = [...s];
        (0, c.mM)(async () => {
            let { default: i } = await l.e(830375).then(l.bind(l, 480218));
            return (l) => (0, n.jsx)(i, { ...l, guildId: t, userIds: e });
        });
    }
    return (0, n.jsx)(E.Y, {
        targetElementRef: r,
        animation: E.Y.Animation.FADE,
        position: "top",
        spacing: 8,
        align: "center",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(I.W, {
                "data-menu-migrated": !0,
                navId: "member-safety-bulk-moderation",
                onClose: t,
                "aria-label": k.intl.string(k.t.PdRCRg),
                onSelect: U.tEg,
                children: (0, n.jsxs)(_.rX, {
                    children: [
                        C
                            ? (0, n.jsx)(_.Dr, {
                                  id: "member-safety-bulk-timeout",
                                  label: k.intl.string(k.t.MlPTIi),
                                  color: "danger",
                                  action: m,
                              })
                            : null,
                        C && o
                            ? (0, n.jsx)(_.Dr, {
                                  id: "member-safety-bulk-remove-timeout",
                                  label: k.intl.string(k.t.qXtNtS),
                                  color: "danger",
                                  action: h,
                              })
                            : null,
                        a
                            ? (0, n.jsx)(_.Dr, {
                                  id: "member-safety-bulk-kick",
                                  label: k.intl.string(k.t["3glT6Z"]),
                                  color: "danger",
                                  action: g,
                              })
                            : null,
                    ],
                }),
            });
        },
        children: (e) => {
            let { onClick: t, ...l } = e;
            return (0, n.jsx)(u.m, {
                text: d ? k.intl.formatToPlainString(k.t.FbJEFq, { max: 200 }) : k.intl.string(k.t.PdRCRg),
                asContainer: !0,
                children: (0, n.jsx)(S.K, {
                    ...l,
                    buttonRef: r,
                    icon: N.MoreHorizontalIcon,
                    size: "sm",
                    variant: "secondary",
                    "aria-label": k.intl.string(k.t.PdRCRg),
                    disabled: d,
                    onClick: t,
                }),
            });
        },
    });
}
var F = l(723264);
function P(e) {
    let { guildId: t, userIds: i } = e,
        s = i.size > 100;
    return (0, n.jsx)(u.m, {
        text: k.intl.formatToPlainString(k.t.FbJEFq, { max: 100 }),
        shouldShow: s,
        asContainer: !0,
        children: (0, n.jsx)(m.$, {
            size: "sm",
            variant: "secondary",
            disabled: s,
            text: k.intl.string(k.t.M5fcYt),
            onClick: function () {
                (0, c.mM)(async () => {
                    let { default: e } = await Promise.all([
                        l.e(498324),
                        l.e(809577),
                        l.e(190739),
                        l.e(144472),
                        l.e(778966),
                        l.e(977025),
                    ]).then(l.bind(l, 925144));
                    return (l) => (0, n.jsx)(e, { ...l, guildId: t, userIds: i });
                });
            },
        }),
    });
}
function B(e) {
    let { guildId: t } = e,
        {
            canAccessBulkActions: s,
            canAccessBulkBan: u,
            canAccessBulkRole: m,
            canAccessBulkKick: D,
            canAccessBulkTimeout: R,
            canSelectAnyMember: E,
        } = (0, L.lN)(t),
        { selectedUserIds: I, clearSelection: _ } = (0, V.A)(t),
        S = I.size > 0,
        N = i.useMemo(() => new Set(u ? [...I].filter((e) => (0, L.Ph)(t, e)) : []), [I, u, t]);
    function y(e, t, l, n) {
        j.A.startBulkBan(e, t, l, n);
    }
    function Z() {
        (A.default.track(U.HAw.BULK_MODERATION_ACTION_STARTED, {
            ...(0, v.H$)(t),
            action_type: M.Nj.BAN,
            target_user_ids: [...N],
            mod_user_id: b.default.getId(),
            location: "MemberSafetyPageActionNotice",
        }),
            (0, c.mM)(async () => {
                let { default: e } = await Promise.all([l.e(420282), l.e(691671), l.e(802504)]).then(l.bind(l, 333179));
                return (l) => (0, n.jsx)(e, { ...l, guildId: t, canBulkBan: u, userIds: N, onBanMultiple: y });
            }));
    }
    let T = i.useCallback(() => {
            _();
        }, [_]),
        w = (0, n.jsxs)("span", {
            className: F.zC,
            children: [
                (0, n.jsx)(h.UserIcon, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: (0, g.r)(C.A.unsafe_rawColors.PRIMARY_500).hex(),
                }),
                (0, n.jsx)(f.E, {
                    variant: "heading-sm/semibold",
                    color: "text-default",
                    children: k.intl.format(k.t.TstoSZ, { count: I.size }),
                }),
                (0, n.jsx)(x.Q, { text: k.intl.string(k.t.yW6ZdE), onClick: T }),
            ],
        }),
        B = (0, n.jsxs)("span", {
            className: F.UD,
            children: [
                (0, n.jsx)(H.HammerIcon, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                (0, n.jsx)(f.E, {
                    variant: "body-sm/semibold",
                    color: "currentColor",
                    children: k.intl.string(k.t["2a50fF"]),
                }),
            ],
        }),
        G = E
            ? (0, n.jsxs)("span", {
                  className: F.lr,
                  children: [
                      w,
                      (0, n.jsxs)("span", {
                          className: F.UD,
                          children: [
                              m ? (0, n.jsx)(P, { guildId: t, userIds: I }) : null,
                              u
                                  ? (0, n.jsx)(o.$n, {
                                        size: o.$n.Sizes.SMALL,
                                        color: o.XD.RED,
                                        disabled: 0 === N.size,
                                        onClick: Z,
                                        children: B,
                                    })
                                  : null,
                              D || R ? (0, n.jsx)(O, { guildId: t, userIds: I, canKick: D, canTimeout: R }) : null,
                          ],
                      }),
                  ],
              })
            : w;
    return s
        ? (0, n.jsx)(r.F, {
              component: "div",
              className: a()(F.n2, { [F.hw]: E }),
              children:
                  S &&
                  (0, n.jsx)(p.F, {
                      className: E ? F.Ic : void 0,
                      children: (0, n.jsx)(d.A, {
                          onSave: u && !E ? Z : void 0,
                          disabled: 0 === N.size,
                          onSaveText: B,
                          onSaveButtonColor: o.XD.RED,
                          message: G,
                      }),
                  }),
          })
        : null;
}
