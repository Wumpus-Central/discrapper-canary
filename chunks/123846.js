l.d(t, { Z: () => R }), l(47120);
var n = l(200651),
    a = l(192379),
    i = l(120356),
    o = l.n(i),
    s = l(954955),
    r = l.n(s),
    c = l(498607),
    d = l.n(c),
    C = l(399606),
    u = l(481060),
    m = l(430824),
    h = l(246946),
    x = l(785195),
    g = l(553826),
    p = l(893966),
    _ = l(527379),
    b = l(327999),
    f = l(734557),
    j = l(981631),
    H = l(388032),
    v = l(310510),
    N = l(335765);
let Z = [b.gq.DISCOVERY, b.gq.VANITY_URL, b.gq.BOT, b.gq.HUB, b.gq.MANUAL_MEMBER_VERIFICATION];
function L(e) {
    let { type: t, text: l, size: a, vanityUrl: i, isFocused: s } = e,
        r = null != a ? a : 16,
        c = (function (e, t) {
            switch (e) {
                case b.gq.BOT:
                    return (0, n.jsx)(u.wGt, {
                        size: 'custom',
                        color: 'currentColor',
                        className: v.icon,
                        height: t,
                        width: t
                    });
                case b.gq.INTEGRATION:
                    return (0, n.jsx)(u.tYf, {
                        size: 'custom',
                        color: 'currentColor',
                        className: v.icon,
                        height: t,
                        width: t
                    });
                case b.gq.DISCOVERY:
                    return (0, n.jsx)(u.Jmo, {
                        size: 'custom',
                        color: 'currentColor',
                        className: v.icon,
                        height: t,
                        width: t
                    });
                case b.gq.HUB:
                    return (0, n.jsx)(u.aVH, {
                        size: 'custom',
                        color: 'currentColor',
                        className: v.icon,
                        height: t,
                        width: t
                    });
                case b.gq.INVITE:
                case b.gq.VANITY_URL:
                    return (0, n.jsx)(u.xPt, {
                        size: 'custom',
                        color: 'currentColor',
                        className: v.icon,
                        height: t,
                        width: t
                    });
                case b.gq.MANUAL_MEMBER_VERIFICATION:
                    return (0, n.jsx)(x.Z, {
                        className: v.icon,
                        height: t,
                        width: t
                    });
                default:
                    return null;
            }
        })(t, r),
        d = (0, b.bE)(t, i);
    return (0, n.jsxs)('div', {
        className: o()(v.labelWithIconContainer),
        'aria-label': d,
        children: [
            null != c ? c : null,
            (0, n.jsx)(u.Text, {
                variant: 12 === r ? 'text-xs/medium' : 'text-sm/medium',
                className: o()(v.labelText, { [v.focused]: s }),
                children: l
            })
        ]
    });
}
function R(e) {
    let { guildId: t, onClose: l } = e,
        i = (0, C.e7)([p.Z], () => p.Z.getSearchStateByGuildId(t), [t], d()),
        { inviteCodes: s } = (0, f.s)(t),
        c = (0, C.e7)([m.Z], () => m.Z.getGuild(t)),
        x = null == c ? void 0 : c.vanityURLCode,
        [R, I] = a.useState(!1),
        { selectedSourceInviteCode: M, selectedJoinSourceType: V } = i,
        D = null != V && V !== b.gq.UNSPECIFIED,
        S = (0, C.e7)([h.Z], () => h.Z.hideInstantInvites, []);
    S && (s = []);
    let T = a.useCallback(
            (e) => {
                let l = e.trim();
                (0, _.Dr)(t, {
                    ...i,
                    selectedSourceInviteCode: '' !== l ? l : void 0,
                    selectedJoinSourceType: void 0
                });
            },
            [t, i]
        ),
        E = a.useCallback(
            (e) => {
                e === V
                    ? (0, _.Dr)(t, {
                          selectedSourceInviteCode: void 0,
                          selectedJoinSourceType: void 0
                      })
                    : (0, _.Dr)(t, {
                          selectedSourceInviteCode: null,
                          selectedJoinSourceType: e
                      }),
                    I(!1);
            },
            [t, V]
        ),
        w = a.useMemo(() => r()(T, 300), [T]),
        k = a.useCallback(
            (e) => {
                w(e);
            },
            [w]
        );
    return (0, n.jsx)(u.v2r, {
        navId: 'members-table-join-method-menu',
        onClose: () => {
            l();
        },
        'aria-label': H.intl.string(H.t['u/7RdX']),
        onSelect: j.dG4,
        children: R
            ? (0, n.jsxs)(u.kSQ, {
                  children: [
                      (0, n.jsx)(u.sNh, {
                          id: 'back',
                          action: () => I(!1),
                          render: (e) =>
                              (0, n.jsxs)('span', {
                                  ...e,
                                  className: v.customLabelContainer,
                                  children: [
                                      (0, n.jsx)(u.V7D, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 16,
                                          height: 16,
                                          className: v.__invalid_caret
                                      }),
                                      (0, n.jsx)(u.Text, {
                                          variant: 'eyebrow',
                                          color: 'header-primary',
                                          children: H.intl.string(H.t['Kz/cho'])
                                      })
                                  ]
                              })
                      }),
                      Z.map((e) =>
                          (0, n.jsx)(
                              u.k5B,
                              {
                                  id: 'join-source-type-option-'.concat(e),
                                  label: (t) =>
                                      (0, n.jsx)(L, {
                                          ...t,
                                          type: e,
                                          vanityUrl: x,
                                          text: (0, b.bE)(e, x, S)
                                      }),
                                  checked: V === e,
                                  disabled: !1,
                                  action: () => E(e),
                                  group: 'join-source-type-options'
                              },
                              'join-source-type-option-'.concat(e)
                          )
                      )
                  ]
              })
            : (0, n.jsxs)(u.kSQ, {
                  children: [
                      (0, n.jsx)(
                          u.II_,
                          {
                              id: 'members-table-invite-code-search',
                              control: (e, t) =>
                                  (0, n.jsx)(u.ne, {
                                      ...e,
                                      query: null != M ? M : '',
                                      onChange: k,
                                      ref: t,
                                      placeholder: H.intl.string(H.t.YwJnGx)
                                  })
                          },
                          'invite-code-filter-search'
                      ),
                      (0, n.jsx)(u.Clw, {}),
                      (0, n.jsx)(
                          u.k5B,
                          {
                              id: 'join-source-type-option-all',
                              label: H.intl.string(H.t.an9Ry8),
                              checked: null == M && null == V,
                              disabled: !1,
                              action: () => E(null),
                              group: 'join-source-type-options'
                          },
                          'join-source-type-option-all'
                      ),
                      s.map((e) =>
                          (0, n.jsx)(
                              u.k5B,
                              {
                                  id: 'join-source-type-option-'.concat(e),
                                  label: (t) =>
                                      (0, n.jsx)(L, {
                                          ...t,
                                          type: b.gq.INVITE,
                                          vanityUrl: x,
                                          text: e
                                      }),
                                  checked: M === e,
                                  disabled: !1,
                                  action: () => T(e),
                                  group: 'join-source-type-options'
                              },
                              'join-source-type-option-'.concat(e)
                          )
                      ),
                      (0, n.jsx)(u.Clw, {}),
                      (0, n.jsx)(
                          u.sNh,
                          {
                              id: 'other-join-methods',
                              action: () => I(!0),
                              render: (e) =>
                                  (0, n.jsxs)('div', {
                                      className: o()(v.containerWithRightCaret, v.customLabelContainer),
                                      children: [
                                          (0, n.jsxs)('div', {
                                              className: o()(N.label),
                                              children: [
                                                  (0, n.jsx)(u.Text, {
                                                      variant: 'text-sm/medium',
                                                      className: o()(v.__invalid_selectedRadio, v.labelText, { [v.focused]: e.isFocused }),
                                                      children: H.intl.string(H.t['Kz/cho'])
                                                  }),
                                                  D
                                                      ? (0, n.jsx)('div', {
                                                            className: v.selectedOption,
                                                            children: (0, n.jsx)(L, {
                                                                ...e,
                                                                size: 12,
                                                                text: (0, b.bE)(V, x, S),
                                                                type: V,
                                                                vanityUrl: x
                                                            })
                                                        })
                                                      : null
                                              ]
                                          }),
                                          D
                                              ? (0, n.jsx)(g.Z, {
                                                    background: v.__invalid_radio,
                                                    foreground: v.radioSelection,
                                                    width: 16,
                                                    height: 16
                                                })
                                              : (0, n.jsx)(u.Fbu, {
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
