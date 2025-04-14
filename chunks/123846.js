n.d(t, { Z: () => D }), n(388685), n(781311);
var r = n(200651),
    l = n(192379),
    o = n(120356),
    i = n.n(o),
    a = n(954955),
    s = n.n(a),
    c = n(498607),
    u = n.n(c),
    C = n(399606),
    d = n(481060),
    m = n(430824),
    b = n(246946),
    p = n(785195),
    f = n(553826),
    h = n(893966),
    j = n(527379),
    g = n(327999),
    x = n(734557),
    O = n(981631),
    y = n(388032),
    v = n(23),
    N = n(906944);
function _(e) {
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
function H(e, t) {
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
let w = [g.gq.DISCOVERY, g.gq.VANITY_URL, g.gq.BOT, g.gq.HUB, g.gq.MANUAL_MEMBER_VERIFICATION];
function S(e) {
    let { type: t, text: n, size: l, vanityUrl: o, isFocused: a } = e,
        s = null != l ? l : 16,
        c = (function (e, t) {
            switch (e) {
                case g.gq.BOT:
                    return (0, r.jsx)(d.wGt, {
                        size: 'custom',
                        color: 'currentColor',
                        className: v.icon,
                        height: t,
                        width: t
                    });
                case g.gq.INTEGRATION:
                    return (0, r.jsx)(d.tYf, {
                        size: 'custom',
                        color: 'currentColor',
                        className: v.icon,
                        height: t,
                        width: t
                    });
                case g.gq.DISCOVERY:
                    return (0, r.jsx)(d.Jmo, {
                        size: 'custom',
                        color: 'currentColor',
                        className: v.icon,
                        height: t,
                        width: t
                    });
                case g.gq.HUB:
                    return (0, r.jsx)(d.aVH, {
                        size: 'custom',
                        color: 'currentColor',
                        className: v.icon,
                        height: t,
                        width: t
                    });
                case g.gq.INVITE:
                case g.gq.VANITY_URL:
                    return (0, r.jsx)(d.xPt, {
                        size: 'custom',
                        color: 'currentColor',
                        className: v.icon,
                        height: t,
                        width: t
                    });
                case g.gq.MANUAL_MEMBER_VERIFICATION:
                    return (0, r.jsx)(p.Z, {
                        className: v.icon,
                        height: t,
                        width: t
                    });
                default:
                    return null;
            }
        })(t, s),
        u = (0, g.bE)(t, o);
    return (0, r.jsxs)('div', {
        className: v.labelWithIconContainer,
        'aria-label': u,
        children: [
            null != c ? c : null,
            (0, r.jsx)(d.Text, {
                variant: 12 === s ? 'text-xs/medium' : 'text-sm/medium',
                className: i()(v.labelText, { [v.focused]: a }),
                children: n
            })
        ]
    });
}
function D(e) {
    let { guildId: t, onClose: n } = e,
        o = (0, C.e7)([h.Z], () => h.Z.getSearchStateByGuildId(t), [t], u()),
        { inviteCodes: a } = (0, x.s)(t),
        c = (0, C.e7)([m.Z], () => m.Z.getGuild(t)),
        p = null == c ? void 0 : c.vanityURLCode,
        [D, Z] = l.useState(!1),
        { selectedSourceInviteCode: L, selectedJoinSourceType: R } = o,
        P = null != R && R !== g.gq.UNSPECIFIED,
        I = (0, C.e7)([b.Z], () => b.Z.hideInstantInvites, []);
    I && (a = []);
    let M = l.useCallback(
            (e) => {
                let n = e.trim();
                (0, j.Dr)(
                    t,
                    H(_({}, o), {
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
        k = l.useCallback(
            (e) => {
                E(e);
            },
            [E]
        );
    return (0, r.jsx)(d.v2r, {
        navId: 'members-table-join-method-menu',
        onClose: () => {
            n();
        },
        'aria-label': y.NW.string(y.t['u/7RdX']),
        onSelect: O.dG4,
        children: D
            ? (0, r.jsxs)(d.kSQ, {
                  children: [
                      (0, r.jsx)(d.sNh, {
                          id: 'back',
                          action: () => Z(!1),
                          render: (e) =>
                              (0, r.jsxs)(
                                  'span',
                                  H(_({}, e), {
                                      className: v.customLabelContainer,
                                      children: [
                                          (0, r.jsx)(d.V7D, {
                                              size: 'custom',
                                              color: 'currentColor',
                                              width: 16,
                                              height: 16,
                                              className: v.__invalid_caret
                                          }),
                                          (0, r.jsx)(d.Text, {
                                              variant: 'eyebrow',
                                              color: 'header-primary',
                                              children: y.NW.string(y.t['Kz/cho'])
                                          })
                                      ]
                                  })
                              )
                      }),
                      w.map((e) =>
                          (0, r.jsx)(
                              d.k5B,
                              {
                                  id: 'join-source-type-option-'.concat(e),
                                  label: (t) =>
                                      (0, r.jsx)(
                                          S,
                                          H(_({}, t), {
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
            : (0, r.jsxs)(d.kSQ, {
                  children: [
                      (0, r.jsx)(
                          d.II_,
                          {
                              id: 'members-table-invite-code-search',
                              control: (e, t) =>
                                  (0, r.jsx)(
                                      d.ne,
                                      H(_({}, e), {
                                          query: null != L ? L : '',
                                          onChange: k,
                                          ref: t,
                                          placeholder: y.NW.string(y.t.YwJnGx)
                                      })
                                  )
                          },
                          'invite-code-filter-search'
                      ),
                      (0, r.jsx)(d.Clw, {}),
                      (0, r.jsx)(
                          d.k5B,
                          {
                              id: 'join-source-type-option-all',
                              label: y.NW.string(y.t.an9Ry8),
                              checked: null == L && null == R,
                              disabled: !1,
                              action: () => V(null),
                              group: 'join-source-type-options'
                          },
                          'join-source-type-option-all'
                      ),
                      a.map((e) =>
                          (0, r.jsx)(
                              d.k5B,
                              {
                                  id: 'join-source-type-option-'.concat(e),
                                  label: (t) =>
                                      (0, r.jsx)(
                                          S,
                                          H(_({}, t), {
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
                      (0, r.jsx)(d.Clw, {}),
                      (0, r.jsx)(
                          d.sNh,
                          {
                              id: 'other-join-methods',
                              action: () => Z(!0),
                              render: (e) =>
                                  (0, r.jsxs)('div', {
                                      className: i()(v.containerWithRightCaret, v.customLabelContainer),
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: N.label,
                                              children: [
                                                  (0, r.jsx)(d.Text, {
                                                      variant: 'text-sm/medium',
                                                      className: i()(v.__invalid_selectedRadio, v.labelText, { [v.focused]: e.isFocused }),
                                                      children: y.NW.string(y.t['Kz/cho'])
                                                  }),
                                                  P
                                                      ? (0, r.jsx)('div', {
                                                            className: v.selectedOption,
                                                            children: (0, r.jsx)(
                                                                S,
                                                                H(_({}, e), {
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
                                                    background: v.__invalid_radio,
                                                    foreground: v.radioSelection,
                                                    width: 16,
                                                    height: 16
                                                })
                                              : (0, r.jsx)(d.Fbu, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    width: 16,
                                                    height: 16,
                                                    className: v.__invalid_caret
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
