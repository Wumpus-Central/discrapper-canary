l.d(t, { default: () => V });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(111956),
    o = l.n(r),
    C = l(33851),
    d = l.n(C),
    c = l(417597),
    u = l(397927),
    m = l(71393),
    x = l(351906),
    h = l(509402),
    g = l(282054),
    _ = l(266047),
    H = l(221950),
    p = l(11541),
    f = l(836968),
    j = l(652215),
    v = l(985018),
    b = l(653952),
    A = l(658122);
let L = [
    p.UP.DISCOVERY,
    p.UP.VANITY_URL,
    p.UP.BOT,
    p.UP.HUB,
    p.UP.MANUAL_MEMBER_VERIFICATION,
    p.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
];
function N(e) {
    let { type: t, text: l, size: i, vanityUrl: s, isFocused: r } = e,
        o = i ?? 16,
        C = (function (e, t) {
            switch (e) {
                case p.UP.BOT:
                    return (0, n.jsx)(u.CnV, {
                        size: "custom",
                        color: "currentColor",
                        className: b.Kk,
                        height: t,
                        width: t,
                    });
                case p.UP.INTEGRATION:
                    return (0, n.jsx)(u.XC7, {
                        size: "custom",
                        color: "currentColor",
                        className: b.Kk,
                        height: t,
                        width: t,
                    });
                case p.UP.DISCOVERY:
                    return (0, n.jsx)(u.QGJ, {
                        size: "custom",
                        color: "currentColor",
                        className: b.Kk,
                        height: t,
                        width: t,
                    });
                case p.UP.HUB:
                    return (0, n.jsx)(u.Pfh, {
                        size: "custom",
                        color: "currentColor",
                        className: b.Kk,
                        height: t,
                        width: t,
                    });
                case p.UP.INVITE:
                case p.UP.VANITY_URL:
                    return (0, n.jsx)(u.qYV, {
                        size: "custom",
                        color: "currentColor",
                        className: b.Kk,
                        height: t,
                        width: t,
                    });
                case p.UP.MANUAL_MEMBER_VERIFICATION:
                    return (0, n.jsx)(h.A, { className: b.Kk, height: t, width: t });
                case p.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL:
                    return (0, n.jsx)(u._xR, {
                        size: "custom",
                        color: "currentColor",
                        className: b.Kk,
                        height: t,
                        width: t,
                    });
                default:
                    return null;
            }
        })(t, o),
        d = (0, p.CI)(t, s);
    return (0, n.jsxs)("div", {
        className: b.$E,
        "aria-label": d,
        children: [
            null != C ? C : null,
            (0, n.jsx)(u.Text, {
                variant: 12 === o ? "text-xs/medium" : "text-sm/medium",
                className: a()(b.QK, { [b.in]: r }),
                children: l,
            }),
        ],
    });
}
function V(e) {
    let { guildId: t, onClose: l } = e,
        s = (0, c.bG)([_.A], () => _.A.getSearchStateByGuildId(t), [t], d()),
        { inviteCodes: r } = (0, f.N)(t),
        C = (0, c.bG)([m.A], () => m.A.getGuild(t)),
        h = C?.vanityURLCode ?? null,
        [V, R] = i.useState(!1),
        { selectedSourceInviteCode: M, selectedJoinSourceType: D } = s,
        S = null != D && D !== p.UP.UNSPECIFIED,
        I = (0, c.bG)([x.A], () => x.A.hideInstantInvites, []);
    I && (r = []);
    let E = i.useMemo(
        () =>
            o()((e) => {
                let l = e.trim();
                (0, H.Ld)(t, { selectedSourceInviteCode: "" !== l ? l : void 0, selectedJoinSourceType: void 0 });
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
                (0, H.Ld)(t, { selectedSourceInviteCode: "" !== l ? l : void 0, selectedJoinSourceType: void 0 });
            },
            [t],
        ),
        T = i.useCallback(
            (e) => {
                e === D
                    ? (0, H.Ld)(t, { selectedSourceInviteCode: void 0, selectedJoinSourceType: void 0 })
                    : (0, H.Ld)(t, { selectedSourceInviteCode: null, selectedJoinSourceType: e }),
                    R(!1);
            },
            [t, D],
        ),
        w = i.useCallback(
            (e) => {
                (0, H.Ld)(t, { selectedSourceInviteCode: e, selectedJoinSourceType: void 0 }), E(e);
            },
            [t, E],
        );
    return (0, n.jsx)(u.W1t, {
        "data-menu-needs-migration": !0,
        navId: "members-table-join-method-menu",
        onClose: () => {
            l();
        },
        "aria-label": v.intl.string(v.t["u/7Rdc"]),
        onSelect: j.tEg,
        children: V
            ? (0, n.jsxs)(u.rXV, {
                  children: [
                      (0, n.jsx)(u.Drp, {
                          id: "back",
                          action: () => R(!1),
                          render: (e) =>
                              (0, n.jsxs)("span", {
                                  ...e,
                                  className: b.RX,
                                  children: [
                                      (0, n.jsx)(u.n2b, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 16,
                                          height: 16,
                                          className: b.__invalid_caret,
                                      }),
                                      (0, n.jsx)(u.Text, {
                                          variant: "eyebrow",
                                          color: "text-strong",
                                          children: v.intl.string(v.t["Kz/cho"]),
                                      }),
                                  ],
                              }),
                      }),
                      L.map((e) =>
                          (0, n.jsx)(
                              u.iDA,
                              {
                                  id: `join-source-type-option-${e}`,
                                  void_label: (t) =>
                                      (0, n.jsx)(N, { ...t, type: e, vanityUrl: h, text: (0, p.CI)(e, h, I) }),
                                  checked: D === e,
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
                                      query: M ?? "",
                                      onChange: w,
                                      ref: t,
                                      placeholder: v.intl.string(v.t.YwJnGz),
                                  }),
                          },
                          "invite-code-filter-search",
                      ),
                      (0, n.jsx)(u.bXX, {}),
                      (0, n.jsx)(
                          u.iDA,
                          {
                              id: "join-source-type-option-all",
                              label: v.intl.string(v.t.an9Ry3),
                              checked: null == M && null == D,
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
                                  void_label: (t) => (0, n.jsx)(N, { ...t, type: p.UP.INVITE, vanityUrl: h, text: e }),
                                  checked: M === e,
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
                                      className: a()(b.RI, b.RX),
                                      children: [
                                          (0, n.jsxs)("div", {
                                              className: A.label,
                                              children: [
                                                  (0, n.jsx)(u.Text, {
                                                      variant: "text-sm/medium",
                                                      className: a()(b.__invalid_selectedRadio, b.QK, {
                                                          [b.in]: e.isFocused,
                                                      }),
                                                      children: v.intl.string(v.t["Kz/cho"]),
                                                  }),
                                                  S
                                                      ? (0, n.jsx)("div", {
                                                            className: b.TF,
                                                            children: (0, n.jsx)(N, {
                                                                ...e,
                                                                size: 12,
                                                                text: (0, p.CI)(D, h, I),
                                                                type: D,
                                                                vanityUrl: h,
                                                            }),
                                                        })
                                                      : null,
                                              ],
                                          }),
                                          S
                                              ? (0, n.jsx)(g.A, {
                                                    background: b.__invalid_radio,
                                                    foreground: b.QE,
                                                    width: 16,
                                                    height: 16,
                                                })
                                              : (0, n.jsx)(u._BQ, {
                                                    size: "custom",
                                                    color: "currentColor",
                                                    width: 16,
                                                    height: 16,
                                                    className: b.__invalid_caret,
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
