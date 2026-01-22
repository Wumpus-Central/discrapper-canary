n.d(t, {
    A: () => _,
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
    d = n.n(c),
    u = n(417597),
    C = n(397927),
    f = n(71393),
    b = n(351906),
    m = n(509402),
    p = n(282054),
    j = n(266047),
    g = n(221950),
    h = n(11541),
    x = n(836968),
    y = n(652215),
    O = n(985018),
    v = n(653952),
    H = n(658122);

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

function A(e, t) {
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
let D = [
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
                    return (0, r.jsx)(m.A, {
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
        d = (0, h.CI)(t, i);
    return (0, r.jsxs)("div", {
        className: v.$E,
        "aria-label": d,
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

function _(e) {
    var t;
    let { guildId: n, onClose: i } = e,
        a = (0, u.bG)([j.A], () => j.A.getSearchStateByGuildId(n), [n], d()),
        { inviteCodes: c } = (0, x.N)(n),
        m = (0, u.bG)([f.A], () => f.A.getGuild(n)),
        _ = null != (t = null == m ? void 0 : m.vanityURLCode) ? t : null,
        [N, P] = l.useState(!1),
        { selectedSourceInviteCode: V, selectedJoinSourceType: L } = a,
        E = null != L && L !== h.UP.UNSPECIFIED,
        M = (0, u.bG)([b.A], () => b.A.hideInstantInvites, []);
    M && (c = []);
    let R = l.useMemo(
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
            R.cancel();
        },
        [R],
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
                e === L
                    ? (0, g.Ld)(n, {
                          selectedSourceInviteCode: void 0,
                          selectedJoinSourceType: void 0,
                      })
                    : (0, g.Ld)(n, {
                          selectedSourceInviteCode: null,
                          selectedJoinSourceType: e,
                      }),
                    P(!1);
            },
            [n, L],
        ),
        Z = l.useCallback(
            (e) => {
                (0, g.Ld)(n, {
                    selectedSourceInviteCode: e,
                    selectedJoinSourceType: void 0,
                }),
                    R(e);
            },
            [n, R],
        );
    return (0, r.jsx)(C.W1t, {
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
                          action: () => P(!1),
                          render: (e) =>
                              (0, r.jsxs)(
                                  "span",
                                  A(w({}, e), {
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
                      D.map((e) =>
                          (0, r.jsx)(
                              C.iDA,
                              {
                                  id: "join-source-type-option-".concat(e),
                                  label: (t) =>
                                      (0, r.jsx)(
                                          S,
                                          A(w({}, t), {
                                              type: e,
                                              vanityUrl: _,
                                              text: (0, h.CI)(e, _, M),
                                          }),
                                      ),
                                  checked: L === e,
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
                                      A(w({}, e), {
                                          query: null != V ? V : "",
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
                              checked: null == V && null == L,
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
                                          A(w({}, t), {
                                              type: h.UP.INVITE,
                                              vanityUrl: _,
                                              text: e,
                                          }),
                                      ),
                                  checked: V === e,
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
                              action: () => P(!0),
                              render: (e) =>
                                  (0, r.jsxs)("div", {
                                      className: o()(v.RI, v.RX),
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: H.label,
                                              children: [
                                                  (0, r.jsx)(C.Text, {
                                                      variant: "text-sm/medium",
                                                      className: o()(v.__invalid_selectedRadio, v.QK, {
                                                          [v.in]: e.isFocused,
                                                      }),
                                                      children: O.intl.string(O.t["Kz/cho"]),
                                                  }),
                                                  E
                                                      ? (0, r.jsx)("div", {
                                                            className: v.TF,
                                                            children: (0, r.jsx)(
                                                                S,
                                                                A(w({}, e), {
                                                                    size: 12,
                                                                    text: (0, h.CI)(L, _, M),
                                                                    type: L,
                                                                    vanityUrl: _,
                                                                }),
                                                            ),
                                                        })
                                                      : null,
                                              ],
                                          }),
                                          E
                                              ? (0, r.jsx)(p.A, {
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
