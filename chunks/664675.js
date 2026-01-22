n.d(t, { A: () => P }), n(172879), n(896048), n(638769);
var i = n(627968),
    r = n(64700),
    l = n(284009),
    a = n.n(l),
    s = n(311907),
    o = n(342494),
    c = n(990078),
    d = n(397927),
    u = n(686956),
    b = n(58149),
    f = n(392054),
    p = n(168186),
    m = n(320426),
    g = n(381616),
    h = n(961350),
    x = n(317525),
    j = n(71393),
    O = n(287809),
    y = n(954571),
    A = n(562153),
    v = n(661191),
    N = n(53656),
    E = n(803378),
    T = n(200662),
    w = n(739174),
    C = n(738431),
    S = n(652215),
    _ = n(985018),
    I = n(809719);
function P(e) {
    let {
            commandId: t,
            editPermissions: n,
            guildId: l,
            noneSelectedText: o,
            overwrites: c,
            hasAccessToMutatePermissions: b,
        } = e,
        m = (0, s.bG)([j.A], () => j.A.getGuild(l));
    a()(null != m, "");
    let h = (0, s.bG)([x.A], () => x.A.getSortedRoles(l)),
        [y, w] = r.useState(new Set()),
        C = r.useMemo(() => {
            let e = (0, p.Ap)(l),
                t = h.toReversed().reduce((e, t, n) => ((e[t.id] = n), e), {});
            return Object.values(c)
                .filter((e) => e.canRead)
                .sort((n, i) => {
                    let r = n.type - i.type;
                    if (0 !== r) return r;
                    switch (n.type) {
                        case f.RA.USER:
                            return (function (e, t, n) {
                                let i = Number(e.canWrite) - Number(t.canWrite);
                                if (0 !== i) return i;
                                let r = O.default.getUser(e.id),
                                    l = O.default.getUser(t.id);
                                if (null != r && null != l) {
                                    let e = A.Ay.getName(n, void 0, r),
                                        t = A.Ay.getName(n, void 0, l);
                                    return null == e ? void 0 : e.localeCompare(t);
                                }
                                return v.default.compare(e.id, t.id);
                            })(n, i, l);
                        case f.RA.ROLE:
                            if (n.id === l) return -1;
                            if (i.id === l) return 1;
                            return t[n.id] > t[i.id] ? -1 : 1;
                        case f.RA.CHANNEL:
                            if (n.id === e) return -1;
                            if (i.id === e) return 1;
                            let a = Number(n.canWrite) - Number(i.canWrite);
                            return 0 !== a ? a : v.default.compare(n.id, i.id);
                    }
                });
        }, [l, c, h]),
        S = r.useCallback(
            (e, t) => {
                n({}, [(0, T.Eu)(e, t)]);
            },
            [n],
        ),
        _ = r.useCallback(
            (e, t, i) => {
                let r = (0, T.Eu)(e, t);
                null != c[r] &&
                    n(
                        {
                            [r]: {
                                id: e,
                                permission: i,
                                type: t,
                            },
                        },
                        [],
                    );
            },
            [n, c],
        );
    r.useEffect(() => {
        let e = Object.values(c)
            .filter((e) => e.type === f.RA.USER && !e.canRead && !y.has(e.id))
            .map((e) => e.id);
        0 !== e.length && (u.A.requestMembersById(l, e, !1), w((t) => new Set([...t, ...e])));
    }, [l, c, y, w]);
    let P = (0, s.bG)([E.A], () => E.A.getApplicationId()),
        R = (0, s.bG)([N.default], () =>
            null == P
                ? void 0
                : N.default.integrations.find((e) => {
                      var t;
                      return (null == (t = e.application) ? void 0 : t.id) === P;
                  }),
        ),
        L = (0, s.bG)([g.A], () => void 0 !== R && g.A.canShowToggleTooltip(R.id));
    return C.length > 0
        ? C.map((e) =>
              (0, i.jsx)(
                  k,
                  {
                      guild: m,
                      commandId: t,
                      onChange: (t) => _(e.id, e.type, t),
                      onRemove: () => S(e.id, e.type),
                      overwrite: e,
                      integration: R,
                      canShowMigrationTooltip: L,
                      hasAccessToMutatePermissions: b,
                  },
                  e.id,
              ),
          )
        : (0, i.jsx)("div", {
              className: I.dh,
              children: (0, i.jsx)(d.Text, {
                  color: "text-muted",
                  variant: "text-sm/normal",
                  children: o,
              }),
          });
}
function k(e) {
    var t, n, l;
    let a,
        {
            guild: s,
            commandId: d,
            onChange: u,
            onRemove: g,
            overwrite: x,
            integration: j,
            canShowMigrationTooltip: O,
            hasAccessToMutatePermissions: A,
        } = e,
        v = x.id === s.id || x.id === (0, p.Ap)(s.id),
        N = null == j || null == (n = j.application) || null == (t = n.bot) ? void 0 : t.username,
        E = !x.canWrite || !A,
        T = h.default.getId();
    A
        ? x.canWrite ||
          (x.type === f.RA.USER
              ? (a = x.id === T ? _.intl.string(_.t["1VF/0x"]) : _.intl.string(_.t.P1GnEd))
              : x.type === f.RA.ROLE && (a = _.intl.string(_.t.mcAijf)))
        : (a = null != d ? _.intl.string(_.t.tybdas) : _.intl.string(_.t["z2hjk/"]));
    let P = O && null != j && x.id === s.id && void 0 !== N && !x.permission;
    r.useEffect(() => {
        if (P) {
            var e, t, n;
            y.default.track(
                S.HAw.COMMANDS_MIGRATION_TOOLTIP_VIEWED,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, (0, b.H$)(s.id))),
                (n = n =
                    {
                        application_id: null == j || null == (e = j.application) ? void 0 : e.id,
                        location: "toggle",
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            );
        }
    }, [s.id, null == j || null == (l = j.application) ? void 0 : l.id, P]);
    let k = r.useRef(null),
        L = (0, i.jsx)(c.m, {
            text: a,
            shouldShow: E,
            position: "left",
            children: (0, i.jsx)("div", {
                ref: k,
                children: (0, i.jsx)(C.A, {
                    isDisabled: E,
                    currentValue: x.permission,
                    onChange: P
                        ? (e) => {
                              m.A.dismissToggleTooltip(s.id, j), u(e);
                          }
                        : u,
                }),
            }),
        }),
        M = (0, i.jsx)(o.AM, {
            targetElementRef: k,
            title: _.intl.string(_.t.ufFDiC),
            body: _.intl.format(_.t.pW4Crz, {
                botName: N,
                link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/",
            }),
            position: "bottom",
            caretConfig: { align: "center" },
            onRequestClose: () => {
                m.A.dismissToggleTooltip(s.id, j);
            },
        });
    return (0, i.jsxs)(
        "div",
        {
            className: I.Wk,
            children: [
                (0, i.jsx)("div", {
                    className: I.MB,
                    children: (0, i.jsx)(w.A, {
                        guild: s,
                        id: x.id,
                        type: x.type,
                        isLocked: E,
                        lockTooltipText: a,
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: I.ev,
                    children: [
                        (0, i.jsx)(R, {
                            commandId: d,
                            isSentinel: v,
                            isDisabled: !A,
                            onRemove: g,
                        }),
                        L,
                        P && M,
                    ],
                }),
            ],
        },
        x.id,
    );
}
function R(e) {
    let { commandId: t, isSentinel: n, isDisabled: r, onRemove: l } = e;
    return r
        ? null
        : null == t && n
          ? null
          : (0, i.jsx)("div", {
                className: I.ys,
                children: (0, i.jsx)(d.DUT, {
                    className: I.od,
                    "aria-label": _.intl.string(_.t.mT0CQM),
                    onClick: l,
                    children: (0, i.jsx)(d.ucK, {
                        size: "md",
                        color: "currentColor",
                        className: I.Yz,
                    }),
                }),
            });
}
