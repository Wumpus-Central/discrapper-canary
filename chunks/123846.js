n.d(t, { Z: () => D }), n(388685), n(781311);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    o = n.n(i),
    a = n(954955),
    s = n.n(a),
    c = n(498607),
    u = n.n(c),
    d = n(399606),
    C = n(481060),
    m = n(430824),
    b = n(246946),
    p = n(785195),
    f = n(553826),
    h = n(893966),
    g = n(527379),
    j = n(327999),
    x = n(734557),
    v = n(981631),
    y = n(388032),
    O = n(791051),
    H = n(334405);
function _(e) {
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
let S = [
    j.gq.DISCOVERY,
    j.gq.VANITY_URL,
    j.gq.BOT,
    j.gq.HUB,
    j.gq.MANUAL_MEMBER_VERIFICATION,
    j.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
];
function Z(e) {
    let { type: t, text: n, size: l, vanityUrl: i, isFocused: a } = e,
        s = null != l ? l : 16,
        c = (function (e, t) {
            switch (e) {
                case j.gq.BOT:
                    return (0, r.jsx)(C.wGt, {
                        size: "custom",
                        color: "currentColor",
                        className: O.icon,
                        height: t,
                        width: t,
                    });
                case j.gq.INTEGRATION:
                    return (0, r.jsx)(C.tYf, {
                        size: "custom",
                        color: "currentColor",
                        className: O.icon,
                        height: t,
                        width: t,
                    });
                case j.gq.DISCOVERY:
                    return (0, r.jsx)(C.Jmo, {
                        size: "custom",
                        color: "currentColor",
                        className: O.icon,
                        height: t,
                        width: t,
                    });
                case j.gq.HUB:
                    return (0, r.jsx)(C.aVH, {
                        size: "custom",
                        color: "currentColor",
                        className: O.icon,
                        height: t,
                        width: t,
                    });
                case j.gq.INVITE:
                case j.gq.VANITY_URL:
                    return (0, r.jsx)(C.xPt, {
                        size: "custom",
                        color: "currentColor",
                        className: O.icon,
                        height: t,
                        width: t,
                    });
                case j.gq.MANUAL_MEMBER_VERIFICATION:
                    return (0, r.jsx)(p.Z, {
                        className: O.icon,
                        height: t,
                        width: t,
                    });
                case j.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL:
                    return (0, r.jsx)(C.iWm, {
                        size: "custom",
                        color: "currentColor",
                        className: O.icon,
                        height: t,
                        width: t,
                    });
                default:
                    return null;
            }
        })(t, s),
        u = (0, j.bE)(t, i);
    return (0, r.jsxs)("div", {
        className: O.labelWithIconContainer,
        "aria-label": u,
        children: [
            null != c ? c : null,
            (0, r.jsx)(C.Text, {
                variant: 12 === s ? "text-xs/medium" : "text-sm/medium",
                className: o()(O.labelText, { [O.focused]: a }),
                children: n,
            }),
        ],
    });
}
function D(e) {
    var t;
    let { guildId: n, onClose: i } = e,
        a = (0, d.e7)([h.Z], () => h.Z.getSearchStateByGuildId(n), [n], u()),
        { inviteCodes: c } = (0, x.s)(n),
        p = (0, d.e7)([m.Z], () => m.Z.getGuild(n)),
        D = null != (t = null == p ? void 0 : p.vanityURLCode) ? t : null,
        [N, R] = l.useState(!1),
        { selectedSourceInviteCode: L, selectedJoinSourceType: P } = a,
        I = null != P && P !== j.gq.UNSPECIFIED,
        V = (0, d.e7)([b.Z], () => b.Z.hideInstantInvites, []);
    V && (c = []);
    let M = l.useMemo(
        () =>
            s()((e) => {
                let t = e.trim();
                (0, g.Dr)(n, {
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
    let E = l.useCallback(
            (e) => {
                let t = e.trim();
                (0, g.Dr)(n, {
                    selectedSourceInviteCode: "" !== t ? t : void 0,
                    selectedJoinSourceType: void 0,
                });
            },
            [n],
        ),
        T = l.useCallback(
            (e) => {
                e === P
                    ? (0, g.Dr)(n, {
                          selectedSourceInviteCode: void 0,
                          selectedJoinSourceType: void 0,
                      })
                    : (0, g.Dr)(n, {
                          selectedSourceInviteCode: null,
                          selectedJoinSourceType: e,
                      }),
                    R(!1);
            },
            [n, P],
        ),
        k = l.useCallback(
            (e) => {
                (0, g.Dr)(n, {
                    selectedSourceInviteCode: e,
                    selectedJoinSourceType: void 0,
                }),
                    M(e);
            },
            [n, M],
        );
    return (0, r.jsx)(C.v2r, {
        navId: "members-table-join-method-menu",
        onClose: () => {
            i();
        },
        "aria-label": y.intl.string(y.t["u/7Rdc"]),
        onSelect: v.dG4,
        children: N
            ? (0, r.jsxs)(C.kSQ, {
                  children: [
                      (0, r.jsx)(C.sNh, {
                          id: "back",
                          action: () => R(!1),
                          render: (e) =>
                              (0, r.jsxs)(
                                  "span",
                                  w(_({}, e), {
                                      className: O.customLabelContainer,
                                      children: [
                                          (0, r.jsx)(C.V7D, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: 16,
                                              height: 16,
                                              className: O.__invalid_caret,
                                          }),
                                          (0, r.jsx)(C.Text, {
                                              variant: "eyebrow",
                                              color: "header-primary",
                                              children: y.intl.string(y.t["Kz/cho"]),
                                          }),
                                      ],
                                  }),
                              ),
                      }),
                      S.map((e) =>
                          (0, r.jsx)(
                              C.k5B,
                              {
                                  id: "join-source-type-option-".concat(e),
                                  label: (t) =>
                                      (0, r.jsx)(
                                          Z,
                                          w(_({}, t), {
                                              type: e,
                                              vanityUrl: D,
                                              text: (0, j.bE)(e, D, V),
                                          }),
                                      ),
                                  checked: P === e,
                                  disabled: !1,
                                  action: () => T(e),
                                  group: "join-source-type-options",
                              },
                              "join-source-type-option-".concat(e),
                          ),
                      ),
                  ],
              })
            : (0, r.jsxs)(C.kSQ, {
                  children: [
                      (0, r.jsx)(
                          C.II_,
                          {
                              id: "members-table-invite-code-search",
                              control: (e, t) =>
                                  (0, r.jsx)(
                                      C.ne,
                                      w(_({}, e), {
                                          query: null != L ? L : "",
                                          onChange: k,
                                          ref: t,
                                          placeholder: y.intl.string(y.t.YwJnGz),
                                      }),
                                  ),
                          },
                          "invite-code-filter-search",
                      ),
                      (0, r.jsx)(C.Clw, {}),
                      (0, r.jsx)(
                          C.k5B,
                          {
                              id: "join-source-type-option-all",
                              label: y.intl.string(y.t.an9Ry3),
                              checked: null == L && null == P,
                              disabled: !1,
                              action: () => T(null),
                              group: "join-source-type-options",
                          },
                          "join-source-type-option-all",
                      ),
                      c.map((e) =>
                          (0, r.jsx)(
                              C.k5B,
                              {
                                  id: "join-source-type-option-".concat(e),
                                  label: (t) =>
                                      (0, r.jsx)(
                                          Z,
                                          w(_({}, t), {
                                              type: j.gq.INVITE,
                                              vanityUrl: D,
                                              text: e,
                                          }),
                                      ),
                                  checked: L === e,
                                  disabled: !1,
                                  action: () => E(e),
                                  group: "join-source-type-options",
                              },
                              "join-source-type-option-".concat(e),
                          ),
                      ),
                      (0, r.jsx)(C.Clw, {}),
                      (0, r.jsx)(
                          C.sNh,
                          {
                              id: "other-join-methods",
                              action: () => R(!0),
                              render: (e) =>
                                  (0, r.jsxs)("div", {
                                      className: o()(O.containerWithRightCaret, O.customLabelContainer),
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: H.label,
                                              children: [
                                                  (0, r.jsx)(C.Text, {
                                                      variant: "text-sm/medium",
                                                      className: o()(O.__invalid_selectedRadio, O.labelText, {
                                                          [O.focused]: e.isFocused,
                                                      }),
                                                      children: y.intl.string(y.t["Kz/cho"]),
                                                  }),
                                                  I
                                                      ? (0, r.jsx)("div", {
                                                            className: O.selectedOption,
                                                            children: (0, r.jsx)(
                                                                Z,
                                                                w(_({}, e), {
                                                                    size: 12,
                                                                    text: (0, j.bE)(P, D, V),
                                                                    type: P,
                                                                    vanityUrl: D,
                                                                }),
                                                            ),
                                                        })
                                                      : null,
                                              ],
                                          }),
                                          I
                                              ? (0, r.jsx)(f.Z, {
                                                    background: O.__invalid_radio,
                                                    foreground: O.radioSelection,
                                                    width: 16,
                                                    height: 16,
                                                })
                                              : (0, r.jsx)(C.Fbu, {
                                                    size: "custom",
                                                    color: "currentColor",
                                                    width: 16,
                                                    height: 16,
                                                    className: O.__invalid_caret,
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
