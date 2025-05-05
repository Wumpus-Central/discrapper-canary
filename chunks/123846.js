n.d(t, { Z: () => D }), n(388685), n(781311);
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
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
    let { guildId: t, onClose: n } = e,
        o = (0, d.e7)([h.Z], () => h.Z.getSearchStateByGuildId(t), [t], u()),
        { inviteCodes: a } = (0, x.s)(t),
        c = (0, d.e7)([m.Z], () => m.Z.getGuild(t)),
        p = null == c ? void 0 : c.vanityURLCode,
        [D, Z] = l.useState(!1),
        { selectedSourceInviteCode: L, selectedJoinSourceType: R } = o,
        P = null != R && R !== g.gq.UNSPECIFIED,
        I = (0, d.e7)([b.Z], () => b.Z.hideInstantInvites, []);
    I && (a = []);
    let M = l.useCallback(
            (e) => {
                let n = e.trim();
                (0, j.Dr)(
                    t,
                    w(H({}, o), {
                        selectedSourceInviteCode: '' !== n ? n : void 0,
                        selectedJoinSourceType: void 0
                    })
                );
            },
            [t, o]
        ),
        V = l.useCallback(
            (e) => {
                e === R
                    ? (0, j.Dr)(t, {
                          selectedSourceInviteCode: void 0,
                          selectedJoinSourceType: void 0
                      })
                    : (0, j.Dr)(t, {
                          selectedSourceInviteCode: null,
                          selectedJoinSourceType: e
                      }),
                    Z(!1);
            },
            [t, R]
        ),
        E = l.useMemo(() => s()(M, 300), [M]),
        T = l.useCallback(
            (e) => {
                E(e);
            },
            [E]
        );
    return (0, r.jsx)(C.v2r, {
        navId: 'members-table-join-method-menu',
        onClose: () => {
            n();
        },
        'aria-label': O.intl.string(O.t['u/7RdX']),
        onSelect: v.dG4,
        children: D
            ? (0, r.jsxs)(C.kSQ, {
                  children: [
                      (0, r.jsx)(C.sNh, {
                          id: 'back',
                          action: () => Z(!1),
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
                                              vanityUrl: p,
                                              text: (0, g.bE)(e, p, I)
                                          })
                                      ),
                                  checked: R === e,
                                  disabled: !1,
                                  action: () => V(e),
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
                                          query: null != L ? L : '',
                                          onChange: T,
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
                              checked: null == L && null == R,
                              disabled: !1,
                              action: () => V(null),
                              group: 'join-source-type-options'
                          },
                          'join-source-type-option-all'
                      ),
                      a.map((e) =>
                          (0, r.jsx)(
                              C.k5B,
                              {
                                  id: 'join-source-type-option-'.concat(e),
                                  label: (t) =>
                                      (0, r.jsx)(
                                          S,
                                          w(H({}, t), {
                                              type: g.gq.INVITE,
                                              vanityUrl: p,
                                              text: e
                                          })
                                      ),
                                  checked: L === e,
                                  disabled: !1,
                                  action: () => M(e),
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
                              action: () => Z(!0),
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
                                                                    text: (0, g.bE)(R, p, I),
                                                                    type: R,
                                                                    vanityUrl: p
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
