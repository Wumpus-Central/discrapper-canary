n.d(t, { Z: () => D }), n(388685), n(781311);
var r = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    i = n(954955),
    s = n.n(i),
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
    O = n(981631),
    y = n(388032),
    v = n(23),
    _ = n(906944);
function N(e) {
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
let w = [j.gq.DISCOVERY, j.gq.VANITY_URL, j.gq.BOT, j.gq.HUB, j.gq.MANUAL_MEMBER_VERIFICATION];
function S(e) {
    let { type: t, text: n, size: l, vanityUrl: o, isFocused: i } = e,
        s = null != l ? l : 16,
        c = (function (e, t) {
            switch (e) {
                case j.gq.BOT:
                    return (0, r.jsx)(C.wGt, {
                        size: 'custom',
                        color: 'currentColor',
                        className: v.icon,
                        height: t,
                        width: t
                    });
                case j.gq.INTEGRATION:
                    return (0, r.jsx)(C.tYf, {
                        size: 'custom',
                        color: 'currentColor',
                        className: v.icon,
                        height: t,
                        width: t
                    });
                case j.gq.DISCOVERY:
                    return (0, r.jsx)(C.Jmo, {
                        size: 'custom',
                        color: 'currentColor',
                        className: v.icon,
                        height: t,
                        width: t
                    });
                case j.gq.HUB:
                    return (0, r.jsx)(C.aVH, {
                        size: 'custom',
                        color: 'currentColor',
                        className: v.icon,
                        height: t,
                        width: t
                    });
                case j.gq.INVITE:
                case j.gq.VANITY_URL:
                    return (0, r.jsx)(C.xPt, {
                        size: 'custom',
                        color: 'currentColor',
                        className: v.icon,
                        height: t,
                        width: t
                    });
                case j.gq.MANUAL_MEMBER_VERIFICATION:
                    return (0, r.jsx)(p.Z, {
                        className: v.icon,
                        height: t,
                        width: t
                    });
                default:
                    return null;
            }
        })(t, s),
        u = (0, j.bE)(t, o);
    return (0, r.jsxs)('div', {
        className: v.labelWithIconContainer,
        'aria-label': u,
        children: [
            null != c ? c : null,
            (0, r.jsx)(C.Text, {
                variant: 12 === s ? 'text-xs/medium' : 'text-sm/medium',
                className: a()(v.labelText, { [v.focused]: i }),
                children: n
            })
        ]
    });
}
function D(e) {
    let { guildId: t, onClose: n } = e,
        o = (0, d.e7)([h.Z], () => h.Z.getSearchStateByGuildId(t), [t], u()),
        { inviteCodes: i } = (0, x.s)(t),
        c = (0, d.e7)([m.Z], () => m.Z.getGuild(t)),
        p = null == c ? void 0 : c.vanityURLCode,
        [D, Z] = l.useState(!1),
        { selectedSourceInviteCode: L, selectedJoinSourceType: R } = o,
        P = null != R && R !== j.gq.UNSPECIFIED,
        I = (0, d.e7)([b.Z], () => b.Z.hideInstantInvites, []);
    I && (i = []);
    let M = l.useCallback(
            (e) => {
                let n = e.trim();
                (0, g.Dr)(
                    t,
                    H(N({}, o), {
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
                    ? (0, g.Dr)(t, {
                          selectedSourceInviteCode: void 0,
                          selectedJoinSourceType: void 0
                      })
                    : (0, g.Dr)(t, {
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
    return (0, r.jsx)(C.v2r, {
        navId: 'members-table-join-method-menu',
        onClose: () => {
            n();
        },
        'aria-label': y.NW.string(y.t['u/7RdX']),
        onSelect: O.dG4,
        children: D
            ? (0, r.jsxs)(C.kSQ, {
                  children: [
                      (0, r.jsx)(C.sNh, {
                          id: 'back',
                          action: () => Z(!1),
                          render: (e) =>
                              (0, r.jsxs)(
                                  'span',
                                  H(N({}, e), {
                                      className: v.customLabelContainer,
                                      children: [
                                          (0, r.jsx)(C.V7D, {
                                              size: 'custom',
                                              color: 'currentColor',
                                              width: 16,
                                              height: 16,
                                              className: v.__invalid_caret
                                          }),
                                          (0, r.jsx)(C.Text, {
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
                              C.k5B,
                              {
                                  id: 'join-source-type-option-'.concat(e),
                                  label: (t) =>
                                      (0, r.jsx)(
                                          S,
                                          H(N({}, t), {
                                              type: e,
                                              vanityUrl: p,
                                              text: (0, j.bE)(e, p, I)
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
                                      H(N({}, e), {
                                          query: null != L ? L : '',
                                          onChange: k,
                                          ref: t,
                                          placeholder: y.NW.string(y.t.YwJnGx)
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
                              label: y.NW.string(y.t.an9Ry8),
                              checked: null == L && null == R,
                              disabled: !1,
                              action: () => V(null),
                              group: 'join-source-type-options'
                          },
                          'join-source-type-option-all'
                      ),
                      i.map((e) =>
                          (0, r.jsx)(
                              C.k5B,
                              {
                                  id: 'join-source-type-option-'.concat(e),
                                  label: (t) =>
                                      (0, r.jsx)(
                                          S,
                                          H(N({}, t), {
                                              type: j.gq.INVITE,
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
                                      className: a()(v.containerWithRightCaret, v.customLabelContainer),
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: _.label,
                                              children: [
                                                  (0, r.jsx)(C.Text, {
                                                      variant: 'text-sm/medium',
                                                      className: a()(v.__invalid_selectedRadio, v.labelText, { [v.focused]: e.isFocused }),
                                                      children: y.NW.string(y.t['Kz/cho'])
                                                  }),
                                                  P
                                                      ? (0, r.jsx)('div', {
                                                            className: v.selectedOption,
                                                            children: (0, r.jsx)(
                                                                S,
                                                                H(N({}, e), {
                                                                    size: 12,
                                                                    text: (0, j.bE)(R, p, I),
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
                                              : (0, r.jsx)(C.Fbu, {
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
