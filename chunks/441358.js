n.d(t, {
    A: () => D,
}),
    n(896048),
    n(733351);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    o = n.n(i),
    a = n(111956),
    s = n.n(a),
    c = n(33851),
    u = n.n(c),
    d = n(417597),
    C = n(397927),
    m = n(71393),
    p = n(351906),
    b = n(509402),
    f = n(282054),
    j = n(266047),
    g = n(221950),
    h = n(11541),
    x = n(836968),
    y = n(652215),
    O = n(985018),
    v = n(653952),
    _ = n(658122);

function H(e) {
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

function w(e, t) {
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
let A = [
    h.UP.DISCOVERY,
    h.UP.VANITY_URL,
    h.UP.BOT,
    h.UP.HUB,
    h.UP.MANUAL_MEMBER_VERIFICATION,
    h.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
];

function S(e) {
    let { type: t, text: n, size: l, vanityUrl: i, isFocused: a } = e,
        s = null != l ? l : 16,
        c = (function (e, t) {
            switch (e) {
                case h.UP.BOT:
                    return (0, r.jsx)(C.CnV, {
                        size: "custom",
                        color: "currentColor",
                        className: v.Kk,
                        height: t,
                        width: t,
                    });
                case h.UP.INTEGRATION:
                    return (0, r.jsx)(C.XC7, {
                        size: "custom",
                        color: "currentColor",
                        className: v.Kk,
                        height: t,
                        width: t,
                    });
                case h.UP.DISCOVERY:
                    return (0, r.jsx)(C.QGJ, {
                        size: "custom",
                        color: "currentColor",
                        className: v.Kk,
                        height: t,
                        width: t,
                    });
                case h.UP.HUB:
                    return (0, r.jsx)(C.Pfh, {
                        size: "custom",
                        color: "currentColor",
                        className: v.Kk,
                        height: t,
                        width: t,
                    });
                case h.UP.INVITE:
                case h.UP.VANITY_URL:
                    return (0, r.jsx)(C.qYV, {
                        size: "custom",
                        color: "currentColor",
                        className: v.Kk,
                        height: t,
                        width: t,
                    });
                case h.UP.MANUAL_MEMBER_VERIFICATION:
                    return (0, r.jsx)(b.A, {
                        className: v.Kk,
                        height: t,
                        width: t,
                    });
                case h.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL:
                    return (0, r.jsx)(C._xR, {
                        size: "custom",
                        color: "currentColor",
                        className: v.Kk,
                        height: t,
                        width: t,
                    });
                default:
                    return null;
            }
        })(t, s),
        u = (0, h.CI)(t, i);
    return (0, r.jsxs)("div", {
        className: v.$E,
        "aria-label": u,
        children: [
            null != c ? c : null,
            (0, r.jsx)(C.Text, {
                variant: 12 === s ? "text-xs/medium" : "text-sm/medium",
                className: o()(v.QK, {
                    [v.in]: a,
                }),
                children: n,
            }),
        ],
    });
}

function D(e) {
    var t;
    let { guildId: n, onClose: i } = e,
        a = (0, d.bG)([j.A], () => j.A.getSearchStateByGuildId(n), [n], u()),
        { inviteCodes: c } = (0, x.N)(n),
        b = (0, d.bG)([m.A], () => m.A.getGuild(n)),
        D = null != (t = null == b ? void 0 : b.vanityURLCode) ? t : null,
        [N, L] = l.useState(!1),
        { selectedSourceInviteCode: P, selectedJoinSourceType: R } = a,
        V = null != R && R !== h.UP.UNSPECIFIED,
        E = (0, d.bG)([p.A], () => p.A.hideInstantInvites, []);
    E && (c = []);
    let M = l.useMemo(
        () =>
            s()((e) => {
                let t = e.trim();
                (0, g.Ld)(n, {
                    selectedSourceInviteCode: "" !== t ? t : void 0,
                    selectedJoinSourceType: void 0,
                });
            }, 300),
        [n],
    );
    l.useEffect(
        () => () => {
            M.cancel();
        },
        [M],
    );
    let I = l.useCallback(
            (e) => {
                let t = e.trim();
                (0, g.Ld)(n, {
                    selectedSourceInviteCode: "" !== t ? t : void 0,
                    selectedJoinSourceType: void 0,
                });
            },
            [n],
        ),
        T = l.useCallback(
            (e) => {
                e === R
                    ? (0, g.Ld)(n, {
                          selectedSourceInviteCode: void 0,
                          selectedJoinSourceType: void 0,
                      })
                    : (0, g.Ld)(n, {
                          selectedSourceInviteCode: null,
                          selectedJoinSourceType: e,
                      }),
                    L(!1);
            },
            [n, R],
        ),
        Z = l.useCallback(
            (e) => {
                (0, g.Ld)(n, {
                    selectedSourceInviteCode: e,
                    selectedJoinSourceType: void 0,
                }),
                    M(e);
            },
            [n, M],
        );
    return (0, r.jsx)(C.W1t, {
        "data-menu-migration-ready": !0,
        navId: "members-table-join-method-menu",
        onClose: () => {
            i();
        },
        "aria-label": O.intl.string(O.t["u/7Rdc"]),
        onSelect: y.tEg,
        children: N
            ? (0, r.jsxs)(C.rXV, {
                  children: [
                      (0, r.jsx)(C.Drp, {
                          id: "back",
                          action: () => L(!1),
                          render: (e) =>
                              (0, r.jsxs)(
                                  "span",
                                  w(H({}, e), {
                                      className: v.RX,
                                      children: [
                                          (0, r.jsx)(C.n2b, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: 16,
                                              height: 16,
                                              className: v.__invalid_caret,
                                          }),
                                          (0, r.jsx)(C.Text, {
                                              variant: "eyebrow",
                                              color: "text-strong",
                                              children: O.intl.string(O.t["Kz/cho"]),
                                          }),
                                      ],
                                  }),
                              ),
                      }),
                      A.map((e) =>
                          (0, r.jsx)(
                              C.iDA,
                              {
                                  id: "join-source-type-option-".concat(e),
                                  label: (t) =>
                                      (0, r.jsx)(
                                          S,
                                          w(H({}, t), {
                                              type: e,
                                              vanityUrl: D,
                                              text: (0, h.CI)(e, D, E),
                                          }),
                                      ),
                                  checked: R === e,
                                  disabled: !1,
                                  action: () => T(e),
                                  group: "join-source-type-options",
                              },
                              "join-source-type-option-".concat(e),
                          ),
                      ),
                  ],
              })
            : (0, r.jsxs)(C.rXV, {
                  children: [
                      (0, r.jsx)(
                          C.aK1,
                          {
                              id: "members-table-invite-code-search",
                              control: (e, t) =>
                                  (0, r.jsx)(
                                      C.VPO,
                                      w(H({}, e), {
                                          query: null != P ? P : "",
                                          onChange: Z,
                                          ref: t,
                                          placeholder: O.intl.string(O.t.YwJnGz),
                                      }),
                                  ),
                          },
                          "invite-code-filter-search",
                      ),
                      (0, r.jsx)(C.bXX, {}),
                      (0, r.jsx)(
                          C.iDA,
                          {
                              id: "join-source-type-option-all",
                              label: O.intl.string(O.t.an9Ry3),
                              checked: null == P && null == R,
                              disabled: !1,
                              action: () => T(null),
                              group: "join-source-type-options",
                          },
                          "join-source-type-option-all",
                      ),
                      c.map((e) =>
                          (0, r.jsx)(
                              C.iDA,
                              {
                                  id: "join-source-type-option-".concat(e),
                                  label: (t) =>
                                      (0, r.jsx)(
                                          S,
                                          w(H({}, t), {
                                              type: h.UP.INVITE,
                                              vanityUrl: D,
                                              text: e,
                                          }),
                                      ),
                                  checked: P === e,
                                  disabled: !1,
                                  action: () => I(e),
                                  group: "join-source-type-options",
                              },
                              "join-source-type-option-".concat(e),
                          ),
                      ),
                      (0, r.jsx)(C.bXX, {}),
                      (0, r.jsx)(
                          C.Drp,
                          {
                              id: "other-join-methods",
                              action: () => L(!0),
                              render: (e) =>
                                  (0, r.jsxs)("div", {
                                      className: o()(v.RI, v.RX),
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: _.label,
                                              children: [
                                                  (0, r.jsx)(C.Text, {
                                                      variant: "text-sm/medium",
                                                      className: o()(v.__invalid_selectedRadio, v.QK, {
                                                          [v.in]: e.isFocused,
                                                      }),
                                                      children: O.intl.string(O.t["Kz/cho"]),
                                                  }),
                                                  V
                                                      ? (0, r.jsx)("div", {
                                                            className: v.TF,
                                                            children: (0, r.jsx)(
                                                                S,
                                                                w(H({}, e), {
                                                                    size: 12,
                                                                    text: (0, h.CI)(R, D, E),
                                                                    type: R,
                                                                    vanityUrl: D,
                                                                }),
                                                            ),
                                                        })
                                                      : null,
                                              ],
                                          }),
                                          V
                                              ? (0, r.jsx)(f.A, {
                                                    background: v.__invalid_radio,
                                                    foreground: v.QE,
                                                    width: 16,
                                                    height: 16,
                                                })
                                              : (0, r.jsx)(C._BQ, {
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
