l.d(t, { default: () => N });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(111956),
    C = l.n(r),
    o = l(33851),
    d = l.n(o),
    c = l(417597),
    u = l(397927),
    m = l(71393),
    x = l(351906),
    h = l(509402),
    g = l(282054),
    H = l(266047),
    j = l(221950),
    _ = l(11541),
    f = l(836968),
    p = l(652215),
    b = l(985018),
    v = l(921815),
    A = l(32271);
let V = [
    _.UP.DISCOVERY,
    _.UP.VANITY_URL,
    _.UP.BOT,
    _.UP.HUB,
    _.UP.MANUAL_MEMBER_VERIFICATION,
    _.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
];
function L(e) {
    let { type: t, text: l, size: i, vanityUrl: s, isFocused: r } = e,
        C = i ?? 16,
        o = (function (e, t) {
            switch (e) {
                case _.UP.BOT:
                    return (0, n.jsx)(u.CnV, {
                        size: "custom",
                        color: "currentColor",
                        className: v.Kk,
                        height: t,
                        width: t,
                    });
                case _.UP.INTEGRATION:
                    return (0, n.jsx)(u.XC7, {
                        size: "custom",
                        color: "currentColor",
                        className: v.Kk,
                        height: t,
                        width: t,
                    });
                case _.UP.DISCOVERY:
                    return (0, n.jsx)(u.QGJ, {
                        size: "custom",
                        color: "currentColor",
                        className: v.Kk,
                        height: t,
                        width: t,
                    });
                case _.UP.HUB:
                    return (0, n.jsx)(u.Pfh, {
                        size: "custom",
                        color: "currentColor",
                        className: v.Kk,
                        height: t,
                        width: t,
                    });
                case _.UP.INVITE:
                case _.UP.VANITY_URL:
                    return (0, n.jsx)(u.qYV, {
                        size: "custom",
                        color: "currentColor",
                        className: v.Kk,
                        height: t,
                        width: t,
                    });
                case _.UP.MANUAL_MEMBER_VERIFICATION:
                    return (0, n.jsx)(h.A, { className: v.Kk, height: t, width: t });
                case _.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL:
                    return (0, n.jsx)(u._xR, {
                        size: "custom",
                        color: "currentColor",
                        className: v.Kk,
                        height: t,
                        width: t,
                    });
                default:
                    return null;
            }
        })(t, C),
        d = (0, _.CI)(t, s);
    return (0, n.jsxs)("div", {
        className: v.$E,
        "aria-label": d,
        children: [
            null != o ? o : null,
            (0, n.jsx)(u.Text, {
                variant: 12 === C ? "text-xs/medium" : "text-sm/medium",
                className: a()(v.QK, { [v.in]: r }),
                children: l,
            }),
        ],
    });
}
function N(e) {
    let { guildId: t, onClose: l } = e,
        s = (0, c.bG)([H.A], () => H.A.getSearchStateByGuildId(t), [t], d()),
        { inviteCodes: r } = (0, f.N)(t),
        o = (0, c.bG)([m.A], () => m.A.getGuild(t)),
        h = o?.vanityURLCode ?? null,
        [N, R] = i.useState(!1),
        { selectedSourceInviteCode: D, selectedJoinSourceType: M } = s,
        S = null != M && M !== _.UP.UNSPECIFIED,
        I = (0, c.bG)([x.A], () => x.A.hideInstantInvites, []);
    I && (r = []);
    let E = i.useMemo(
        () =>
            C()((e) => {
                let l = e.trim();
                (0, j.Ld)(t, { selectedSourceInviteCode: "" !== l ? l : void 0, selectedJoinSourceType: void 0 });
            }, 300),
        [t],
    );
    i.useEffect(
        () => () => {
            E.cancel();
        },
        [E],
    );
    let y = i.useCallback(
            (e) => {
                let l = e.trim();
                (0, j.Ld)(t, { selectedSourceInviteCode: "" !== l ? l : void 0, selectedJoinSourceType: void 0 });
            },
            [t],
        ),
        T = i.useCallback(
            (e) => {
                e === M
                    ? (0, j.Ld)(t, { selectedSourceInviteCode: void 0, selectedJoinSourceType: void 0 })
                    : (0, j.Ld)(t, { selectedSourceInviteCode: null, selectedJoinSourceType: e }),
                    R(!1);
            },
            [t, M],
        ),
        Z = i.useCallback(
            (e) => {
                (0, j.Ld)(t, { selectedSourceInviteCode: e, selectedJoinSourceType: void 0 }), E(e);
            },
            [t, E],
        );
    return (0, n.jsx)(u.W1t, {
        "data-menu-needs-migration": !0,
        navId: "members-table-join-method-menu",
        onClose: () => {
            l();
        },
        "aria-label": b.intl.string(b.t["u/7Rdc"]),
        onSelect: p.tEg,
        children: N
            ? (0, n.jsxs)(u.rXV, {
                  children: [
                      (0, n.jsx)(u.Drp, {
                          id: "back",
                          action: () => R(!1),
                          render: (e) =>
                              (0, n.jsxs)("span", {
                                  ...e,
                                  className: v.RX,
                                  children: [
                                      (0, n.jsx)(u.n2b, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 16,
                                          height: 16,
                                          className: v.__invalid_caret,
                                      }),
                                      (0, n.jsx)(u.Text, {
                                          variant: "eyebrow",
                                          color: "text-strong",
                                          children: b.intl.string(b.t["Kz/cho"]),
                                      }),
                                  ],
                              }),
                      }),
                      V.map((e) =>
                          (0, n.jsx)(
                              u.iDA,
                              {
                                  id: `join-source-type-option-${e}`,
                                  void_label: (t) =>
                                      (0, n.jsx)(L, { ...t, type: e, vanityUrl: h, text: (0, _.CI)(e, h, I) }),
                                  checked: M === e,
                                  disabled: !1,
                                  action: () => T(e),
                                  group: "join-source-type-options",
                              },
                              `join-source-type-option-${e}`,
                          ),
                      ),
                  ],
              })
            : (0, n.jsxs)(u.rXV, {
                  children: [
                      (0, n.jsx)(
                          u.aK1,
                          {
                              id: "members-table-invite-code-search",
                              control: (e, t) =>
                                  (0, n.jsx)(u.VPO, {
                                      ...e,
                                      query: D ?? "",
                                      onChange: Z,
                                      ref: t,
                                      placeholder: b.intl.string(b.t.YwJnGz),
                                  }),
                          },
                          "invite-code-filter-search",
                      ),
                      (0, n.jsx)(u.bXX, {}),
                      (0, n.jsx)(
                          u.iDA,
                          {
                              id: "join-source-type-option-all",
                              label: b.intl.string(b.t.an9Ry3),
                              checked: null == D && null == M,
                              disabled: !1,
                              action: () => T(null),
                              group: "join-source-type-options",
                          },
                          "join-source-type-option-all",
                      ),
                      r.map((e) =>
                          (0, n.jsx)(
                              u.iDA,
                              {
                                  id: `join-source-type-option-${e}`,
                                  void_label: (t) => (0, n.jsx)(L, { ...t, type: _.UP.INVITE, vanityUrl: h, text: e }),
                                  checked: D === e,
                                  disabled: !1,
                                  action: () => y(e),
                                  group: "join-source-type-options",
                              },
                              `join-source-type-option-${e}`,
                          ),
                      ),
                      (0, n.jsx)(u.bXX, {}),
                      (0, n.jsx)(
                          u.Drp,
                          {
                              id: "other-join-methods",
                              action: () => R(!0),
                              render: (e) =>
                                  (0, n.jsxs)("div", {
                                      className: a()(v.RI, v.RX),
                                      children: [
                                          (0, n.jsxs)("div", {
                                              className: A.label,
                                              children: [
                                                  (0, n.jsx)(u.Text, {
                                                      variant: "text-sm/medium",
                                                      className: a()(v.__invalid_selectedRadio, v.QK, {
                                                          [v.in]: e.isFocused,
                                                      }),
                                                      children: b.intl.string(b.t["Kz/cho"]),
                                                  }),
                                                  S
                                                      ? (0, n.jsx)("div", {
                                                            className: v.TF,
                                                            children: (0, n.jsx)(L, {
                                                                ...e,
                                                                size: 12,
                                                                text: (0, _.CI)(M, h, I),
                                                                type: M,
                                                                vanityUrl: h,
                                                            }),
                                                        })
                                                      : null,
                                              ],
                                          }),
                                          S
                                              ? (0, n.jsx)(g.A, {
                                                    background: v.__invalid_radio,
                                                    foreground: v.QE,
                                                    width: 16,
                                                    height: 16,
                                                })
                                              : (0, n.jsx)(u._BQ, {
                                                    size: "custom",
                                                    color: "currentColor",
                                                    width: 16,
                                                    height: 16,
                                                    className: v.__invalid_caret,
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
