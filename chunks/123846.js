n.d(t, {
    Z: function () {
        return M;
    }
}),
    n(47120);
var l = n(200651),
    o = n(192379),
    i = n(120356),
    a = n.n(i),
    r = n(954955),
    s = n.n(r),
    c = n(498607),
    C = n.n(c),
    d = n(399606),
    u = n(481060),
    m = n(430824),
    h = n(246946),
    x = n(785195),
    b = n(553826),
    f = n(893966),
    g = n(527379),
    p = n(327999),
    H = n(734557),
    j = n(981631),
    v = n(388032),
    N = n(894924),
    L = n(450793);
let I = [p.gq.DISCOVERY, p.gq.VANITY_URL, p.gq.BOT, p.gq.HUB, p.gq.MANUAL_MEMBER_VERIFICATION];
function _(e) {
    let { type: t, text: n, size: o, vanityUrl: i, isFocused: r } = e,
        s = null != o ? o : 16,
        c = (function (e, t) {
            switch (e) {
                case p.gq.BOT:
                    return (0, l.jsx)(u.RobotIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        className: N.icon,
                        height: t,
                        width: t
                    });
                case p.gq.INTEGRATION:
                    return (0, l.jsx)(u.WebhookIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        className: N.icon,
                        height: t,
                        width: t
                    });
                case p.gq.DISCOVERY:
                    return (0, l.jsx)(u.CompassIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        className: N.icon,
                        height: t,
                        width: t
                    });
                case p.gq.HUB:
                    return (0, l.jsx)(u.HubIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        className: N.icon,
                        height: t,
                        width: t
                    });
                case p.gq.INVITE:
                case p.gq.VANITY_URL:
                    return (0, l.jsx)(u.LinkIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        className: N.icon,
                        height: t,
                        width: t
                    });
                case p.gq.MANUAL_MEMBER_VERIFICATION:
                    return (0, l.jsx)(x.Z, {
                        className: N.icon,
                        height: t,
                        width: t
                    });
                default:
                    return null;
            }
        })(t, s),
        C = (0, p.bE)(t, i);
    return (0, l.jsxs)('div', {
        className: a()(N.labelWithIconContainer),
        'aria-label': C,
        children: [
            null != c ? c : null,
            (0, l.jsx)(u.Text, {
                variant: 12 === s ? 'text-xs/medium' : 'text-sm/medium',
                className: a()(N.labelText, { [N.focused]: r }),
                children: n
            })
        ]
    });
}
function M(e) {
    let { guildId: t, onClose: n } = e,
        i = (0, d.e7)([f.Z], () => f.Z.getSearchStateByGuildId(t), [t], C()),
        { inviteCodes: r } = (0, H.s)(t),
        c = (0, d.e7)([m.Z], () => m.Z.getGuild(t)),
        x = null == c ? void 0 : c.vanityURLCode,
        [M, Z] = o.useState(!1),
        { selectedSourceInviteCode: R, selectedJoinSourceType: D } = i,
        S = null != D && D !== p.gq.UNSPECIFIED,
        V = (0, d.e7)([h.Z], () => h.Z.hideInstantInvites, []);
    V && (r = []);
    let T = o.useCallback(
            (e) => {
                let n = e.trim();
                (0, g.Dr)(t, {
                    ...i,
                    selectedSourceInviteCode: '' !== n ? n : void 0,
                    selectedJoinSourceType: void 0
                });
            },
            [t, i]
        ),
        E = o.useCallback(
            (e) => {
                e === D
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
            [t, D]
        ),
        w = o.useMemo(() => s()(T, 300), [T]),
        A = o.useCallback(
            (e) => {
                w(e);
            },
            [w]
        );
    return (0, l.jsx)(u.Menu, {
        navId: 'members-table-join-method-menu',
        onClose: () => {
            n();
        },
        'aria-label': v.intl.string(v.t['u/7RdX']),
        onSelect: j.dG4,
        children: M
            ? (0, l.jsxs)(u.MenuGroup, {
                  children: [
                      (0, l.jsx)(u.MenuItem, {
                          id: 'back',
                          action: () => Z(!1),
                          render: (e) =>
                              (0, l.jsxs)('span', {
                                  ...e,
                                  className: N.customLabelContainer,
                                  children: [
                                      (0, l.jsx)(u.ChevronSmallLeftIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 16,
                                          height: 16,
                                          className: N.__invalid_caret
                                      }),
                                      (0, l.jsx)(u.Text, {
                                          variant: 'eyebrow',
                                          color: 'header-primary',
                                          children: v.intl.string(v.t['Kz/cho'])
                                      })
                                  ]
                              })
                      }),
                      I.map((e) =>
                          (0, l.jsx)(
                              u.MenuRadioItem,
                              {
                                  id: 'join-source-type-option-'.concat(e),
                                  label: (t) =>
                                      (0, l.jsx)(_, {
                                          ...t,
                                          type: e,
                                          vanityUrl: x,
                                          text: (0, p.bE)(e, x, V)
                                      }),
                                  checked: D === e,
                                  disabled: !1,
                                  action: () => E(e),
                                  group: 'join-source-type-options'
                              },
                              'join-source-type-option-'.concat(e)
                          )
                      )
                  ]
              })
            : (0, l.jsxs)(u.MenuGroup, {
                  children: [
                      (0, l.jsx)(
                          u.MenuControlItem,
                          {
                              id: 'members-table-invite-code-search',
                              control: (e, t) =>
                                  (0, l.jsx)(u.MenuSearchControl, {
                                      ...e,
                                      query: null != R ? R : '',
                                      onChange: A,
                                      ref: t,
                                      placeholder: v.intl.string(v.t.YwJnGx)
                                  })
                          },
                          'invite-code-filter-search'
                      ),
                      (0, l.jsx)(u.MenuSeparator, {}),
                      (0, l.jsx)(
                          u.MenuRadioItem,
                          {
                              id: 'join-source-type-option-all',
                              label: v.intl.string(v.t.an9Ry8),
                              checked: null == R && null == D,
                              disabled: !1,
                              action: () => E(null),
                              group: 'join-source-type-options'
                          },
                          'join-source-type-option-all'
                      ),
                      r.map((e) =>
                          (0, l.jsx)(
                              u.MenuRadioItem,
                              {
                                  id: 'join-source-type-option-'.concat(e),
                                  label: (t) =>
                                      (0, l.jsx)(_, {
                                          ...t,
                                          type: p.gq.INVITE,
                                          vanityUrl: x,
                                          text: e
                                      }),
                                  checked: R === e,
                                  disabled: !1,
                                  action: () => T(e),
                                  group: 'join-source-type-options'
                              },
                              'join-source-type-option-'.concat(e)
                          )
                      ),
                      (0, l.jsx)(u.MenuSeparator, {}),
                      (0, l.jsx)(
                          u.MenuItem,
                          {
                              id: 'other-join-methods',
                              action: () => Z(!0),
                              render: (e) =>
                                  (0, l.jsxs)('div', {
                                      className: a()(N.containerWithRightCaret, N.customLabelContainer),
                                      children: [
                                          (0, l.jsxs)('div', {
                                              className: a()(L.label),
                                              children: [
                                                  (0, l.jsx)(u.Text, {
                                                      variant: 'text-sm/medium',
                                                      className: a()(N.__invalid_selectedRadio, N.labelText, { [N.focused]: e.isFocused }),
                                                      children: v.intl.string(v.t['Kz/cho'])
                                                  }),
                                                  S
                                                      ? (0, l.jsx)('div', {
                                                            className: N.selectedOption,
                                                            children: (0, l.jsx)(_, {
                                                                ...e,
                                                                size: 12,
                                                                text: (0, p.bE)(D, x, V),
                                                                type: D,
                                                                vanityUrl: x
                                                            })
                                                        })
                                                      : null
                                              ]
                                          }),
                                          S
                                              ? (0, l.jsx)(b.Z, {
                                                    background: N.__invalid_radio,
                                                    foreground: N.radioSelection,
                                                    width: 16,
                                                    height: 16
                                                })
                                              : (0, l.jsx)(u.ChevronSmallRightIcon, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    width: 16,
                                                    height: 16,
                                                    className: N.__invalid_caret
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
