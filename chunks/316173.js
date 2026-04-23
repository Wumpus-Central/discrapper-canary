l.d(t, { default: () => k });
var n = l(627968),
    i = l(64700),
    a = l(503698),
    s = l.n(a),
    C = l(111956),
    r = l.n(C),
    o = l(33851),
    d = l.n(o),
    c = l(702841),
    u = l(430392),
    m = l(39619),
    h = l(836480),
    x = l(101277),
    g = l(173936),
    H = l(687966),
    p = l(834730),
    j = l(550079),
    _ = l(477782),
    f = l(921853),
    b = l(583650),
    v = l(320448),
    A = l(71393),
    V = l(351906),
    L = l(509402),
    D = l(282054),
    R = l(151781),
    M = l(221950),
    E = l(11541),
    N = l(636537),
    I = l(652215);
let S = new Map();
var y = l(985018),
    Z = l(921815),
    w = l(32271);
let U = [
    E.UP.DISCOVERY,
    E.UP.VANITY_URL,
    E.UP.BOT,
    E.UP.HUB,
    E.UP.MANUAL_MEMBER_VERIFICATION,
    E.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
];
function T(e) {
    let { type: t, text: l, size: i, vanityUrl: a, isFocused: C } = e,
        r = i ?? 16,
        o = (function (e, t) {
            switch (e) {
                case E.UP.BOT:
                    return (0, n.jsx)(u.C, {
                        size: "custom",
                        color: "currentColor",
                        className: Z.Kk,
                        height: t,
                        width: t,
                    });
                case E.UP.INTEGRATION:
                    return (0, n.jsx)(m.X, {
                        size: "custom",
                        color: "currentColor",
                        className: Z.Kk,
                        height: t,
                        width: t,
                    });
                case E.UP.DISCOVERY:
                    return (0, n.jsx)(h.Q, {
                        size: "custom",
                        color: "currentColor",
                        className: Z.Kk,
                        height: t,
                        width: t,
                    });
                case E.UP.HUB:
                    return (0, n.jsx)(x.P, {
                        size: "custom",
                        color: "currentColor",
                        className: Z.Kk,
                        height: t,
                        width: t,
                    });
                case E.UP.INVITE:
                case E.UP.VANITY_URL:
                    return (0, n.jsx)(g.q, {
                        size: "custom",
                        color: "currentColor",
                        className: Z.Kk,
                        height: t,
                        width: t,
                    });
                case E.UP.MANUAL_MEMBER_VERIFICATION:
                    return (0, n.jsx)(L.A, { className: Z.Kk, height: t, width: t });
                case E.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL:
                    return (0, n.jsx)(H._, {
                        size: "custom",
                        color: "currentColor",
                        className: Z.Kk,
                        height: t,
                        width: t,
                    });
                default:
                    return null;
            }
        })(t, r),
        d = (0, E.CI)(t, a);
    return (0, n.jsxs)("div", {
        className: Z.$E,
        "aria-label": d,
        children: [
            null != o ? o : null,
            (0, n.jsx)(p.E, {
                variant: 12 === r ? "text-xs/medium" : "text-sm/medium",
                className: s()(Z.QK, { [Z.in]: C }),
                children: l,
            }),
        ],
    });
}
function k(e) {
    let { guildId: t, onClose: l } = e,
        a = (0, c.bG)([R.A], () => R.A.getSearchStateByGuildId(t), [t], d()),
        { inviteCodes: C } = (function (e) {
            let [t, l] = i.useState(S.has(e) ? Array.from(S.get(e)) : []),
                [n, a] = i.useState(!1),
                s = i.useMemo(() => t.map((e) => e.code), [t]),
                C = i.useMemo(() => t.reduce((e, t) => ((e[t.code] = t), e), {}), [t]),
                r = i.useCallback(async () => {
                    a(!0);
                    let t = (await N.Bo.get({ url: I.Rsh.GUILD_INSTANT_INVITES(e), rejectWithError: !0 })).body.sort(
                        (e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime(),
                    );
                    l(t), S.set(e, new Set(t)), a(!1);
                }, [e]);
            return (
                i.useEffect(() => {
                    r();
                }, [e, r]),
                { invitesRaw: t, inviteCodes: s, invitesByCode: C, loading: n }
            );
        })(t),
        o = (0, c.bG)([A.A], () => A.A.getGuild(t)),
        u = o?.vanityURLCode ?? null,
        [m, h] = i.useState(!1),
        { selectedSourceInviteCode: x, selectedJoinSourceType: g } = a,
        H = null != g && g !== E.UP.UNSPECIFIED,
        L = (0, c.bG)([V.A], () => V.A.hideInstantInvites, []);
    L && (C = []);
    let k = i.useMemo(
        () =>
            r()((e) => {
                let l = e.trim();
                (0, M.Ld)(t, { selectedSourceInviteCode: "" !== l ? l : void 0, selectedJoinSourceType: void 0 });
            }, 300),
        [t],
    );
    i.useEffect(
        () => () => {
            k.cancel();
        },
        [k],
    );
    let O = i.useCallback(
            (e) => {
                let l = e.trim();
                (0, M.Ld)(t, { selectedSourceInviteCode: "" !== l ? l : void 0, selectedJoinSourceType: void 0 });
            },
            [t],
        ),
        F = i.useCallback(
            (e) => {
                e === g
                    ? (0, M.Ld)(t, { selectedSourceInviteCode: void 0, selectedJoinSourceType: void 0 })
                    : (0, M.Ld)(t, { selectedSourceInviteCode: null, selectedJoinSourceType: e }),
                    h(!1);
            },
            [t, g],
        ),
        B = i.useCallback(
            (e) => {
                (0, M.Ld)(t, { selectedSourceInviteCode: e, selectedJoinSourceType: void 0 }), k(e);
            },
            [t, k],
        );
    return (0, n.jsx)(j.W, {
        "data-menu-needs-migration": !0,
        navId: "members-table-join-method-menu",
        onClose: () => {
            l();
        },
        "aria-label": y.intl.string(y.t["u/7Rdc"]),
        onSelect: I.tEg,
        children: m
            ? (0, n.jsxs)(_.rX, {
                  children: [
                      (0, n.jsx)(_.Dr, {
                          id: "back",
                          action: () => h(!1),
                          render: (e) =>
                              (0, n.jsxs)("span", {
                                  ...e,
                                  className: Z.RX,
                                  children: [
                                      (0, n.jsx)(f.n, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 16,
                                          height: 16,
                                          className: Z.__invalid_caret,
                                      }),
                                      (0, n.jsx)(p.E, {
                                          variant: "eyebrow",
                                          color: "text-strong",
                                          children: y.intl.string(y.t["Kz/cho"]),
                                      }),
                                  ],
                              }),
                      }),
                      U.map((e) =>
                          (0, n.jsx)(
                              _.iD,
                              {
                                  id: `join-source-type-option-${e}`,
                                  void_label: (t) =>
                                      (0, n.jsx)(T, { ...t, type: e, vanityUrl: u, text: (0, E.CI)(e, u, L) }),
                                  checked: g === e,
                                  disabled: !1,
                                  action: () => F(e),
                                  group: "join-source-type-options",
                              },
                              `join-source-type-option-${e}`,
                          ),
                      ),
                  ],
              })
            : (0, n.jsxs)(_.rX, {
                  children: [
                      (0, n.jsx)(
                          _.aK,
                          {
                              id: "members-table-invite-code-search",
                              control: (e, t) =>
                                  (0, n.jsx)(b.V, {
                                      ...e,
                                      query: x ?? "",
                                      onChange: B,
                                      ref: t,
                                      placeholder: y.intl.string(y.t.YwJnGz),
                                  }),
                          },
                          "invite-code-filter-search",
                      ),
                      (0, n.jsx)(_.bX, {}),
                      (0, n.jsx)(
                          _.iD,
                          {
                              id: "join-source-type-option-all",
                              label: y.intl.string(y.t.an9Ry3),
                              checked: null == x && null == g,
                              disabled: !1,
                              action: () => F(null),
                              group: "join-source-type-options",
                          },
                          "join-source-type-option-all",
                      ),
                      C.map((e) =>
                          (0, n.jsx)(
                              _.iD,
                              {
                                  id: `join-source-type-option-${e}`,
                                  void_label: (t) => (0, n.jsx)(T, { ...t, type: E.UP.INVITE, vanityUrl: u, text: e }),
                                  checked: x === e,
                                  disabled: !1,
                                  action: () => O(e),
                                  group: "join-source-type-options",
                              },
                              `join-source-type-option-${e}`,
                          ),
                      ),
                      (0, n.jsx)(_.bX, {}),
                      (0, n.jsx)(
                          _.Dr,
                          {
                              id: "other-join-methods",
                              action: () => h(!0),
                              render: (e) =>
                                  (0, n.jsxs)("div", {
                                      className: s()(Z.RI, Z.RX),
                                      children: [
                                          (0, n.jsxs)("div", {
                                              className: w.label,
                                              children: [
                                                  (0, n.jsx)(p.E, {
                                                      variant: "text-sm/medium",
                                                      className: s()(Z.__invalid_selectedRadio, Z.QK, {
                                                          [Z.in]: e.isFocused,
                                                      }),
                                                      children: y.intl.string(y.t["Kz/cho"]),
                                                  }),
                                                  H
                                                      ? (0, n.jsx)("div", {
                                                            className: Z.TF,
                                                            children: (0, n.jsx)(T, {
                                                                ...e,
                                                                size: 12,
                                                                text: (0, E.CI)(g, u, L),
                                                                type: g,
                                                                vanityUrl: u,
                                                            }),
                                                        })
                                                      : null,
                                              ],
                                          }),
                                          H
                                              ? (0, n.jsx)(D.A, {
                                                    background: Z.__invalid_radio,
                                                    foreground: Z.QE,
                                                    width: 16,
                                                    height: 16,
                                                })
                                              : (0, n.jsx)(v._, {
                                                    size: "custom",
                                                    color: "currentColor",
                                                    width: 16,
                                                    height: 16,
                                                    className: Z.__invalid_caret,
                                                }),
                                      ],
                                  }),
                          },
                          "other-join-methods",
                      ),
                  ],
              }),
    });
}
