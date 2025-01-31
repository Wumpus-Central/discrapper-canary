l.d(t, { Z: () => R }), l(47120);
var n = l(200651),
    a = l(192379),
    i = l(120356),
    o = l.n(i),
    s = l(954955),
    r = l.n(s),
    c = l(498607),
    C = l.n(c),
    d = l(399606),
    u = l(481060),
    m = l(430824),
    h = l(246946),
    x = l(785195),
    g = l(553826),
    H = l(893966),
    b = l(527379),
    p = l(327999),
    _ = l(734557),
    j = l(981631),
    f = l(388032),
    v = l(894924),
    N = l(450793);
let Z = [p.gq.DISCOVERY, p.gq.VANITY_URL, p.gq.BOT, p.gq.HUB, p.gq.MANUAL_MEMBER_VERIFICATION];
function L(e) {
    let { type: t, text: l, size: a, vanityUrl: i, isFocused: s } = e,
        r = null != a ? a : 16,
        c = (function (e, t) {
            switch (e) {
                case p.gq.BOT:
                    return (0, n.jsx)(u.wGt, {
                        size: 'custom',
                        color: 'currentColor',
                        className: v.icon,
                        height: t,
                        width: t
                    });
                case p.gq.INTEGRATION:
                    return (0, n.jsx)(u.tYf, {
                        size: 'custom',
                        color: 'currentColor',
                        className: v.icon,
                        height: t,
                        width: t
                    });
                case p.gq.DISCOVERY:
                    return (0, n.jsx)(u.Jmo, {
                        size: 'custom',
                        color: 'currentColor',
                        className: v.icon,
                        height: t,
                        width: t
                    });
                case p.gq.HUB:
                    return (0, n.jsx)(u.aVH, {
                        size: 'custom',
                        color: 'currentColor',
                        className: v.icon,
                        height: t,
                        width: t
                    });
                case p.gq.INVITE:
                case p.gq.VANITY_URL:
                    return (0, n.jsx)(u.xPt, {
                        size: 'custom',
                        color: 'currentColor',
                        className: v.icon,
                        height: t,
                        width: t
                    });
                case p.gq.MANUAL_MEMBER_VERIFICATION:
                    return (0, n.jsx)(x.Z, {
                        className: v.icon,
                        height: t,
                        width: t
                    });
                default:
                    return null;
            }
        })(t, r),
        C = (0, p.bE)(t, i);
    return (0, n.jsxs)('div', {
        className: o()(v.labelWithIconContainer),
        'aria-label': C,
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
        i = (0, d.e7)([H.Z], () => H.Z.getSearchStateByGuildId(t), [t], C()),
        { inviteCodes: s } = (0, _.s)(t),
        c = (0, d.e7)([m.Z], () => m.Z.getGuild(t)),
        x = null == c ? void 0 : c.vanityURLCode,
        [R, M] = a.useState(!1),
        { selectedSourceInviteCode: I, selectedJoinSourceType: V } = i,
        D = null != V && V !== p.gq.UNSPECIFIED,
        S = (0, d.e7)([h.Z], () => h.Z.hideInstantInvites, []);
    S && (s = []);
    let T = a.useCallback(
            (e) => {
                let l = e.trim();
                (0, b.Dr)(t, {
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
                    ? (0, b.Dr)(t, {
                          selectedSourceInviteCode: void 0,
                          selectedJoinSourceType: void 0
                      })
                    : (0, b.Dr)(t, {
                          selectedSourceInviteCode: null,
                          selectedJoinSourceType: e
                      }),
                    M(!1);
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
        'aria-label': f.intl.string(f.t['u/7RdX']),
        onSelect: j.dG4,
        children: R
            ? (0, n.jsxs)(u.kSQ, {
                  children: [
                      (0, n.jsx)(u.sNh, {
                          id: 'back',
                          action: () => M(!1),
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
                                          children: f.intl.string(f.t['Kz/cho'])
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
                                          text: (0, p.bE)(e, x, S)
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
                                      query: null != I ? I : '',
                                      onChange: k,
                                      ref: t,
                                      placeholder: f.intl.string(f.t.YwJnGx)
                                  })
                          },
                          'invite-code-filter-search'
                      ),
                      (0, n.jsx)(u.Clw, {}),
                      (0, n.jsx)(
                          u.k5B,
                          {
                              id: 'join-source-type-option-all',
                              label: f.intl.string(f.t.an9Ry8),
                              checked: null == I && null == V,
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
                                          type: p.gq.INVITE,
                                          vanityUrl: x,
                                          text: e
                                      }),
                                  checked: I === e,
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
                              action: () => M(!0),
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
                                                      children: f.intl.string(f.t['Kz/cho'])
                                                  }),
                                                  D
                                                      ? (0, n.jsx)('div', {
                                                            className: v.selectedOption,
                                                            children: (0, n.jsx)(L, {
                                                                ...e,
                                                                size: 12,
                                                                text: (0, p.bE)(V, x, S),
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
