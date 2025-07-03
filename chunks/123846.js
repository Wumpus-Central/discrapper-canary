(n.d(t, { Z: () => D }), n(388685), n(781311));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
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
    j = n(527379),
    g = n(327999),
    x = n(734557),
    v = n(981631),
    O = n(388032),
    y = n(23),
    _ = n(906944);
function H(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
let N = [g.gq.DISCOVERY, g.gq.VANITY_URL, g.gq.BOT, g.gq.HUB, g.gq.MANUAL_MEMBER_VERIFICATION];
function S(e) {
    let { type: t, text: n, size: l, vanityUrl: o, isFocused: a } = e,
        s = null != l ? l : 16,
        c = (function (e, t) {
            switch (e) {
                case g.gq.BOT:
                    return (0, r.jsx)(C.wGt, {
                        size: 'custom',
                        color: 'currentColor',
                        className: y.icon,
                        height: t,
                        width: t
                    });
                case g.gq.INTEGRATION:
                    return (0, r.jsx)(C.tYf, {
                        size: 'custom',
                        color: 'currentColor',
                        className: y.icon,
                        height: t,
                        width: t
                    });
                case g.gq.DISCOVERY:
                    return (0, r.jsx)(C.Jmo, {
                        size: 'custom',
                        color: 'currentColor',
                        className: y.icon,
                        height: t,
                        width: t
                    });
                case g.gq.HUB:
                    return (0, r.jsx)(C.aVH, {
                        size: 'custom',
                        color: 'currentColor',
                        className: y.icon,
                        height: t,
                        width: t
                    });
                case g.gq.INVITE:
                case g.gq.VANITY_URL:
                    return (0, r.jsx)(C.xPt, {
                        size: 'custom',
                        color: 'currentColor',
                        className: y.icon,
                        height: t,
                        width: t
                    });
                case g.gq.MANUAL_MEMBER_VERIFICATION:
                    return (0, r.jsx)(p.Z, {
                        className: y.icon,
                        height: t,
                        width: t
                    });
                default:
                    return null;
            }
        })(t, s),
        u = (0, g.bE)(t, o);
    return (0, r.jsxs)('div', {
        className: y.labelWithIconContainer,
        'aria-label': u,
        children: [
            null != c ? c : null,
            (0, r.jsx)(C.Text, {
                variant: 12 === s ? 'text-xs/medium' : 'text-sm/medium',
                className: i()(y.labelText, { [y.focused]: a }),
                children: n
            })
        ]
    });
}
function D(e) {
    var t;
    let { guildId: n, onClose: o } = e,
        a = (0, d.e7)([h.Z], () => h.Z.getSearchStateByGuildId(n), [n], u()),
        { inviteCodes: c } = (0, x.s)(n),
        p = (0, d.e7)([m.Z], () => m.Z.getGuild(n)),
        D = null != (t = null == p ? void 0 : p.vanityURLCode) ? t : null,
        [Z, L] = l.useState(!1),
        { selectedSourceInviteCode: R, selectedJoinSourceType: I } = a,
        P = null != I && I !== g.gq.UNSPECIFIED,
        M = (0, d.e7)([b.Z], () => b.Z.hideInstantInvites, []);
    M && (c = []);
    let V = s()((e) => {
        let t = e.trim();
        (0, j.Dr)(n, {
            selectedSourceInviteCode: '' !== t ? t : void 0,
            selectedJoinSourceType: void 0
        });
    }, 300);
    l.useEffect(
        () => () => {
            V.cancel();
        },
        [V]
    );
    let E = l.useCallback(
            (e) => {
                let t = e.trim();
                (0, j.Dr)(n, {
                    selectedSourceInviteCode: '' !== t ? t : void 0,
                    selectedJoinSourceType: void 0
                });
            },
            [n]
        ),
        T = l.useCallback(
            (e) => {
                (e === I
                    ? (0, j.Dr)(n, {
                          selectedSourceInviteCode: void 0,
                          selectedJoinSourceType: void 0
                      })
                    : (0, j.Dr)(n, {
                          selectedSourceInviteCode: null,
                          selectedJoinSourceType: e
                      }),
                    L(!1));
            },
            [n, I]
        ),
        k = l.useCallback(
            (e) => {
                ((0, j.Dr)(n, {
                    selectedSourceInviteCode: e,
                    selectedJoinSourceType: void 0
                }),
                    V(e));
            },
            [n, V]
        );
    return (0, r.jsx)(C.v2r, {
        navId: 'members-table-join-method-menu',
        onClose: () => {
            o();
        },
        'aria-label': O.intl.string(O.t['u/7RdX']),
        onSelect: v.dG4,
        children: Z
            ? (0, r.jsxs)(C.kSQ, {
                  children: [
                      (0, r.jsx)(C.sNh, {
                          id: 'back',
                          action: () => L(!1),
                          render: (e) =>
                              (0, r.jsxs)(
                                  'span',
                                  w(H({}, e), {
                                      className: y.customLabelContainer,
                                      children: [
                                          (0, r.jsx)(C.V7D, {
                                              size: 'custom',
                                              color: 'currentColor',
                                              width: 16,
                                              height: 16,
                                              className: y.__invalid_caret
                                          }),
                                          (0, r.jsx)(C.Text, {
                                              variant: 'eyebrow',
                                              color: 'header-primary',
                                              children: O.intl.string(O.t['Kz/cho'])
                                          })
                                      ]
                                  })
                              )
                      }),
                      N.map((e) =>
                          (0, r.jsx)(
                              C.k5B,
                              {
                                  id: 'join-source-type-option-'.concat(e),
                                  label: (t) =>
                                      (0, r.jsx)(
                                          S,
                                          w(H({}, t), {
                                              type: e,
                                              vanityUrl: D,
                                              text: (0, g.bE)(e, D, M)
                                          })
                                      ),
                                  checked: I === e,
                                  disabled: !1,
                                  action: () => T(e),
                                  group: 'join-source-type-options'
                              },
                              'join-source-type-option-'.concat(e)
                          )
                      )
                  ]
              })
            : (0, r.jsxs)(C.kSQ, {
                  children: [
                      (0, r.jsx)(
                          C.II_,
                          {
                              id: 'members-table-invite-code-search',
                              control: (e, t) =>
                                  (0, r.jsx)(
                                      C.ne,
                                      w(H({}, e), {
                                          query: null != R ? R : '',
                                          onChange: k,
                                          ref: t,
                                          placeholder: O.intl.string(O.t.YwJnGx)
                                      })
                                  )
                          },
                          'invite-code-filter-search'
                      ),
                      (0, r.jsx)(C.Clw, {}),
                      (0, r.jsx)(
                          C.k5B,
                          {
                              id: 'join-source-type-option-all',
                              label: O.intl.string(O.t.an9Ry8),
                              checked: null == R && null == I,
                              disabled: !1,
                              action: () => T(null),
                              group: 'join-source-type-options'
                          },
                          'join-source-type-option-all'
                      ),
                      c.map((e) =>
                          (0, r.jsx)(
                              C.k5B,
                              {
                                  id: 'join-source-type-option-'.concat(e),
                                  label: (t) =>
                                      (0, r.jsx)(
                                          S,
                                          w(H({}, t), {
                                              type: g.gq.INVITE,
                                              vanityUrl: D,
                                              text: e
                                          })
                                      ),
                                  checked: R === e,
                                  disabled: !1,
                                  action: () => E(e),
                                  group: 'join-source-type-options'
                              },
                              'join-source-type-option-'.concat(e)
                          )
                      ),
                      (0, r.jsx)(C.Clw, {}),
                      (0, r.jsx)(
                          C.sNh,
                          {
                              id: 'other-join-methods',
                              action: () => L(!0),
                              render: (e) =>
                                  (0, r.jsxs)('div', {
                                      className: i()(y.containerWithRightCaret, y.customLabelContainer),
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: _.label,
                                              children: [
                                                  (0, r.jsx)(C.Text, {
                                                      variant: 'text-sm/medium',
                                                      className: i()(y.__invalid_selectedRadio, y.labelText, { [y.focused]: e.isFocused }),
                                                      children: O.intl.string(O.t['Kz/cho'])
                                                  }),
                                                  P
                                                      ? (0, r.jsx)('div', {
                                                            className: y.selectedOption,
                                                            children: (0, r.jsx)(
                                                                S,
                                                                w(H({}, e), {
                                                                    size: 12,
                                                                    text: (0, g.bE)(I, D, M),
                                                                    type: I,
                                                                    vanityUrl: D
                                                                })
                                                            )
                                                        })
                                                      : null
                                              ]
                                          }),
                                          P
                                              ? (0, r.jsx)(f.Z, {
                                                    background: y.__invalid_radio,
                                                    foreground: y.radioSelection,
                                                    width: 16,
                                                    height: 16
                                                })
                                              : (0, r.jsx)(C.Fbu, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    width: 16,
                                                    height: 16,
                                                    className: y.__invalid_caret
                                                })
                                      ]
                                  })
                          },
                          'other-join-methods'
                      )
                  ]
              })
    });
}
