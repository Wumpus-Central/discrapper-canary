l.d(t, { default: () => U });
var n = l(627968),
    i = l(64700),
    a = l(503698),
    s = l.n(a),
    C = l(111956),
    r = l.n(C),
    o = l(33851),
    d = l.n(o),
    c = l(417597),
    u = l(430392),
    m = l(39619),
    h = l(836480),
    x = l(101277),
    g = l(173936),
    H = l(687966),
    _ = l(834730),
    p = l(861672),
    f = l(477782),
    j = l(921853),
    b = l(583650),
    A = l(320448),
    v = l(71393),
    V = l(351906),
    L = l(509402),
    D = l(282054),
    R = l(266047),
    M = l(221950),
    E = l(11541),
    N = l(836968),
    I = l(652215),
    S = l(985018),
    y = l(921815),
    Z = l(32271);
let w = [
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
                        className: y.Kk,
                        height: t,
                        width: t,
                    });
                case E.UP.INTEGRATION:
                    return (0, n.jsx)(m.X, {
                        size: "custom",
                        color: "currentColor",
                        className: y.Kk,
                        height: t,
                        width: t,
                    });
                case E.UP.DISCOVERY:
                    return (0, n.jsx)(h.Q, {
                        size: "custom",
                        color: "currentColor",
                        className: y.Kk,
                        height: t,
                        width: t,
                    });
                case E.UP.HUB:
                    return (0, n.jsx)(x.P, {
                        size: "custom",
                        color: "currentColor",
                        className: y.Kk,
                        height: t,
                        width: t,
                    });
                case E.UP.INVITE:
                case E.UP.VANITY_URL:
                    return (0, n.jsx)(g.q, {
                        size: "custom",
                        color: "currentColor",
                        className: y.Kk,
                        height: t,
                        width: t,
                    });
                case E.UP.MANUAL_MEMBER_VERIFICATION:
                    return (0, n.jsx)(L.A, { className: y.Kk, height: t, width: t });
                case E.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL:
                    return (0, n.jsx)(H._, {
                        size: "custom",
                        color: "currentColor",
                        className: y.Kk,
                        height: t,
                        width: t,
                    });
                default:
                    return null;
            }
        })(t, r),
        d = (0, E.CI)(t, a);
    return (0, n.jsxs)("div", {
        className: y.$E,
        "aria-label": d,
        children: [
            null != o ? o : null,
            (0, n.jsx)(_.E, {
                variant: 12 === r ? "text-xs/medium" : "text-sm/medium",
                className: s()(y.QK, { [y.in]: C }),
                children: l,
            }),
        ],
    });
}
function U(e) {
    let { guildId: t, onClose: l } = e,
        a = (0, c.bG)([R.A], () => R.A.getSearchStateByGuildId(t), [t], d()),
        { inviteCodes: C } = (0, N.N)(t),
        o = (0, c.bG)([v.A], () => v.A.getGuild(t)),
        u = o?.vanityURLCode ?? null,
        [m, h] = i.useState(!1),
        { selectedSourceInviteCode: x, selectedJoinSourceType: g } = a,
        H = null != g && g !== E.UP.UNSPECIFIED,
        L = (0, c.bG)([V.A], () => V.A.hideInstantInvites, []);
    L && (C = []);
    let U = i.useMemo(
        () =>
            r()((e) => {
                let l = e.trim();
                (0, M.Ld)(t, { selectedSourceInviteCode: "" !== l ? l : void 0, selectedJoinSourceType: void 0 });
            }, 300),
        [t],
    );
    i.useEffect(
        () => () => {
            U.cancel();
        },
        [U],
    );
    let k = i.useCallback(
            (e) => {
                let l = e.trim();
                (0, M.Ld)(t, { selectedSourceInviteCode: "" !== l ? l : void 0, selectedJoinSourceType: void 0 });
            },
            [t],
        ),
        O = i.useCallback(
            (e) => {
                e === g
                    ? (0, M.Ld)(t, { selectedSourceInviteCode: void 0, selectedJoinSourceType: void 0 })
                    : (0, M.Ld)(t, { selectedSourceInviteCode: null, selectedJoinSourceType: e }),
                    h(!1);
            },
            [t, g],
        ),
        F = i.useCallback(
            (e) => {
                (0, M.Ld)(t, { selectedSourceInviteCode: e, selectedJoinSourceType: void 0 }), U(e);
            },
            [t, U],
        );
    return (0, n.jsx)(p.W, {
        "data-menu-needs-migration": !0,
        navId: "members-table-join-method-menu",
        onClose: () => {
            l();
        },
        "aria-label": S.intl.string(S.t["u/7Rdc"]),
        onSelect: I.tEg,
        children: m
            ? (0, n.jsxs)(f.rX, {
                  children: [
                      (0, n.jsx)(f.Dr, {
                          id: "back",
                          action: () => h(!1),
                          render: (e) =>
                              (0, n.jsxs)("span", {
                                  ...e,
                                  className: y.RX,
                                  children: [
                                      (0, n.jsx)(j.n, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 16,
                                          height: 16,
                                          className: y.__invalid_caret,
                                      }),
                                      (0, n.jsx)(_.E, {
                                          variant: "eyebrow",
                                          color: "text-strong",
                                          children: S.intl.string(S.t["Kz/cho"]),
                                      }),
                                  ],
                              }),
                      }),
                      w.map((e) =>
                          (0, n.jsx)(
                              f.iD,
                              {
                                  id: `join-source-type-option-${e}`,
                                  void_label: (t) =>
                                      (0, n.jsx)(T, { ...t, type: e, vanityUrl: u, text: (0, E.CI)(e, u, L) }),
                                  checked: g === e,
                                  disabled: !1,
                                  action: () => O(e),
                                  group: "join-source-type-options",
                              },
                              `join-source-type-option-${e}`,
                          ),
                      ),
                  ],
              })
            : (0, n.jsxs)(f.rX, {
                  children: [
                      (0, n.jsx)(
                          f.aK,
                          {
                              id: "members-table-invite-code-search",
                              control: (e, t) =>
                                  (0, n.jsx)(b.V, {
                                      ...e,
                                      query: x ?? "",
                                      onChange: F,
                                      ref: t,
                                      placeholder: S.intl.string(S.t.YwJnGz),
                                  }),
                          },
                          "invite-code-filter-search",
                      ),
                      (0, n.jsx)(f.bX, {}),
                      (0, n.jsx)(
                          f.iD,
                          {
                              id: "join-source-type-option-all",
                              label: S.intl.string(S.t.an9Ry3),
                              checked: null == x && null == g,
                              disabled: !1,
                              action: () => O(null),
                              group: "join-source-type-options",
                          },
                          "join-source-type-option-all",
                      ),
                      C.map((e) =>
                          (0, n.jsx)(
                              f.iD,
                              {
                                  id: `join-source-type-option-${e}`,
                                  void_label: (t) => (0, n.jsx)(T, { ...t, type: E.UP.INVITE, vanityUrl: u, text: e }),
                                  checked: x === e,
                                  disabled: !1,
                                  action: () => k(e),
                                  group: "join-source-type-options",
                              },
                              `join-source-type-option-${e}`,
                          ),
                      ),
                      (0, n.jsx)(f.bX, {}),
                      (0, n.jsx)(
                          f.Dr,
                          {
                              id: "other-join-methods",
                              action: () => h(!0),
                              render: (e) =>
                                  (0, n.jsxs)("div", {
                                      className: s()(y.RI, y.RX),
                                      children: [
                                          (0, n.jsxs)("div", {
                                              className: Z.label,
                                              children: [
                                                  (0, n.jsx)(_.E, {
                                                      variant: "text-sm/medium",
                                                      className: s()(y.__invalid_selectedRadio, y.QK, {
                                                          [y.in]: e.isFocused,
                                                      }),
                                                      children: S.intl.string(S.t["Kz/cho"]),
                                                  }),
                                                  H
                                                      ? (0, n.jsx)("div", {
                                                            className: y.TF,
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
                                                    background: y.__invalid_radio,
                                                    foreground: y.QE,
                                                    width: 16,
                                                    height: 16,
                                                })
                                              : (0, n.jsx)(A._, {
                                                    size: "custom",
                                                    color: "currentColor",
                                                    width: 16,
                                                    height: 16,
                                                    className: y.__invalid_caret,
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
