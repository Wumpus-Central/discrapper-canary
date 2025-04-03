n.d(t, { Z: () => w }), n(47120), n(230036), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(266796);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(913527),
    s = n.n(a),
    c = n(951284),
    d = n(442837),
    u = n(481060),
    p = n(139387),
    m = n(726542),
    b = n(600164),
    g = n(339085),
    f = n(434404),
    h = n(598077),
    x = n(430824),
    j = n(246946),
    N = n(259580),
    O = n(531087),
    v = n(768581),
    y = n(709054),
    _ = n(486199),
    C = n(981631),
    I = n(388032),
    S = n(796920),
    E = n(20493);
function P(e) {
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
function w(e) {
    let t,
        { guild: n, integration: l, editedIntegration: a, isExpanded: w, onToggleExpand: T, onDisable: Z, onEnable: W } = e,
        k = (0, d.e7)([x.Z], () => x.Z.getRoles(n.id)),
        [A, D] = i.useState(!1),
        R = (0, d.e7)([j.Z], () => j.Z.hidePersonalInformation),
        L = i.useCallback(() => {
            D(!0), W(l);
        }, [l, W]),
        M = i.useCallback(() => {
            l.syncing ||
                (0, u.h7j)((e) => {
                    var t, n;
                    let i = 0 === l.expire_behavior ? I.NW.string(I.t['6kpw4u']) : I.NW.string(I.t.fQUQIC);
                    return (0, r.jsx)(
                        u.ConfirmModal,
                        ((t = P({}, e)),
                        (n = n =
                            {
                                header: I.NW.string(I.t.emx3lJ),
                                confirmText: i,
                                cancelText: I.NW.string(I.t['ETE/oK']),
                                onConfirm: () => Z(l),
                                children: (0, r.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: l.type === c.b.YOUTUBE ? I.NW.string(I.t.anKQWV) : I.NW.string(I.t['BW/xtr'])
                                })
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        t)
                    );
                });
        }, [l, Z]),
        B = i.useCallback(() => {
            f.Z.syncIntegration(n.id, l.id);
        }, [n.id, l.id]),
        U = i.useCallback(() => {
            null != l.role_id && (f.Z.setSection(C.pNK.ROLES), f.Z.selectRole(l.role_id));
        }, [l.role_id]),
        {
            serviceName: z,
            channelURL: H,
            expireBehaviorLabel: G,
            syncLabel: F,
            subscribersText: V
        } = i.useMemo(() => {
            var e, t, n, r, i;
            let o =
                null !=
                (n =
                    null == (t = m.Z.get(l.type)) || null == (e = t.getPlatformUserUrl)
                        ? void 0
                        : e.call(t, {
                              id: l.account.id,
                              name: l.account.name
                          }))
                    ? n
                    : '';
            switch (l.type) {
                case c.b.YOUTUBE:
                    return {
                        serviceName: I.NW.string(I.t.aS6cKy),
                        expireBehaviorLabel: I.NW.string(I.t.A5MiqK),
                        syncLabel: I.NW.string(I.t['7vHKVV']),
                        subscribersText: I.NW.formatToPlainString(I.t['7lNtcX'], { subscribers: null != (r = l.subscriber_count) ? r : 0 }),
                        channelURL: o
                    };
                case c.b.TWITCH:
                default:
                    return {
                        serviceName: I.NW.string(I.t.q4pBGx),
                        expireBehaviorLabel: I.NW.string(I.t['S/WCrK']),
                        syncLabel: I.NW.string(I.t['0jbPKy']),
                        subscribersText: I.NW.formatToPlainString(I.t.RdUTrq, { subscribers: null != (i = l.subscriber_count) ? i : 0 }),
                        channelURL: o
                    };
            }
        }, [l.account, l.subscriber_count, l.type]),
        { roleLink: K, syncDescriptionText: q } = i.useMemo(() => {
            let e,
                t,
                n = null != l.role_id ? k[l.role_id] : null;
            e =
                null != n
                    ? (0, r.jsx)(u.eee, {
                          onClick: U,
                          children: n.name
                      })
                    : I.NW.string(I.t.PoWNfX);
            let i = m.Z.get(l.type);
            return {
                roleLink: e,
                syncDescriptionText:
                    l.revoked && null != i
                        ? I.NW.formatToPlainString(I.t.G16Wjo, {
                              user: l.user,
                              platformName: i.name
                          })
                        : I.NW.formatToPlainString(I.t.unl3AA, { datetime: s()(l.synced_at).calendar() })
            };
        }, [k, U, l.revoked, l.role_id, l.synced_at, l.type, l.user]),
        Y = i.useMemo(() => {
            let e = g.ZP.getGuildEmoji(n.id),
                t = Object.values(k)
                    .filter((e) => null != e.tags && e.tags.integration_id === l.id)
                    .map((e) => e.id);
            return l.enable_emoticons ? e.sort((e, t) => e.name.localeCompare(t.name)).filter((e) => null != l.role_id && (null == e ? void 0 : e.roles.some((e) => t.includes(e)))) : [];
        }, [n.id, k, l.enable_emoticons, l.id, l.role_id]);
    if (
        (i.useEffect(() => {
            (null == a ? void 0 : a.id) === l.id && (null == a ? void 0 : a.enabled) === !0 && D(!1);
        }, [a, l.id]),
        l.enabled && null != l.user)
    )
        t = [
            {
                icon: u.T39,
                text: R
                    ? I.NW.formatToPlainString(I.t.gcdJ8P, { timestamp: y.default.extractTimestamp(l.id) })
                    : I.NW.formatToPlainString(I.t.Nu9sam, {
                          user: null != l.user ? new h.Z(l.user).tag : null,
                          timestamp: y.default.extractTimestamp(l.id)
                      })
            }
        ];
    else {
        let e = new URL(H);
        t = [
            {
                text: I.NW.format(I.t.BegylZ, {
                    serviceName: z,
                    accountUrl: H,
                    accountUrlText: e.hostname + e.pathname
                })
            }
        ];
    }
    let X = (0, r.jsxs)(b.Z, {
            className: S.header,
            align: b.Z.Align.CENTER,
            children: [
                (0, r.jsx)(_.Z, {
                    name: ''.concat(l.name),
                    detailsClassName: S.description,
                    details: t
                }),
                l.enabled
                    ? (0, r.jsx)(b.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, r.jsx)(N.Z, {
                              className: S.expandIcon,
                              expanded: w && !A,
                              'aria-hidden': !0
                          })
                      })
                    : (0, r.jsx)(b.Z.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, r.jsx)(u.zxk, {
                              size: u.zxk.Sizes.SMALL,
                              color: u.zxk.Colors.PRIMARY,
                              onClick: L,
                              disabled: A,
                              children: A
                                  ? (0, r.jsx)(O.Z, {
                                        width: 24,
                                        height: 24
                                    })
                                  : (0, r.jsx)(r.Fragment, { children: I.NW.string(I.t['7sCN8v']) })
                          })
                      })
            ]
        }),
        $ = null;
    return (
        w &&
            !A &&
            null != a &&
            ($ = (0, r.jsxs)(b.Z, {
                className: S.body,
                direction: b.Z.Direction.VERTICAL,
                children: [
                    (0, r.jsx)(u.$i$, { className: S.topDivider }),
                    (function (e) {
                        let { integration: t, labelText: n, subscribersText: i, descriptionText: l, roleLink: o, onSync: a } = e;
                        return (0, r.jsxs)(b.Z, {
                            children: [
                                (0, r.jsxs)(b.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, r.jsx)(u.vwX, {
                                            className: E.marginBottom8,
                                            children: I.NW.string(I.t.eBtNBQ)
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            className: S.syncedRole,
                                            color: 'header-primary',
                                            variant: 'text-sm/normal',
                                            children: o
                                        })
                                    ]
                                }),
                                (0, r.jsxs)(b.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, r.jsx)(u.vwX, {
                                            className: E.marginBottom8,
                                            children: n
                                        }),
                                        (0, r.jsxs)(b.Z, {
                                            justify: b.Z.Justify.BETWEEN,
                                            children: [
                                                (0, r.jsxs)(b.Z, {
                                                    direction: b.Z.Direction.VERTICAL,
                                                    children: [
                                                        (0, r.jsx)(u.Text, {
                                                            color: 'header-primary',
                                                            variant: 'text-sm/normal',
                                                            children: i
                                                        }),
                                                        (0, r.jsx)(u.Text, {
                                                            color: 'header-secondary',
                                                            variant: 'text-xs/normal',
                                                            children: l
                                                        })
                                                    ]
                                                }),
                                                (0, r.jsx)(u.zxk, {
                                                    size: u.zxk.Sizes.SMALL,
                                                    look: u.zxk.Looks.FILLED,
                                                    color: u.zxk.Colors.PRIMARY,
                                                    disabled: t.syncing || t.revoked,
                                                    onClick: a,
                                                    children: t.syncing
                                                        ? (0, r.jsx)(O.Z, {
                                                              width: 24,
                                                              height: 24
                                                          })
                                                        : (0, r.jsx)(r.Fragment, { children: I.NW.string(I.t.BkuOOz) })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        });
                    })({
                        integration: a,
                        labelText: F,
                        subscribersText: V,
                        descriptionText: q,
                        roleLink: K,
                        onSync: B
                    }),
                    (0, r.jsx)(u.$i$, { className: S.midDivider }),
                    (function (e) {
                        let { integration: t, labelText: n, onBehaviorChange: i, onGracePeriodChange: l } = e;
                        return (0, r.jsxs)(b.Z, {
                            children: [
                                (0, r.jsxs)(b.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, r.jsx)(u.vwX, {
                                            className: E.marginBottom8,
                                            children: n
                                        }),
                                        (0, r.jsx)(u.q4e, {
                                            placeholder: n,
                                            value: ''.concat(t.expire_behavior),
                                            options: [
                                                {
                                                    value: '0',
                                                    label: I.NW.string(I.t['6kpw4u'])
                                                },
                                                {
                                                    value: '1',
                                                    label: I.NW.string(I.t.fQUQIC)
                                                }
                                            ],
                                            isDisabled: t.syncing,
                                            onChange: (e) => i(parseInt(e))
                                        })
                                    ]
                                }),
                                (0, r.jsxs)(b.Z.Child, {
                                    basis: '50%',
                                    children: [
                                        (0, r.jsx)(u.vwX, {
                                            className: E.marginBottom8,
                                            children: I.NW.string(I.t.uiXMo6)
                                        }),
                                        (0, r.jsx)(u.q4e, {
                                            placeholder: I.NW.string(I.t.uiXMo6),
                                            maxVisibleItems: 5,
                                            value: ''.concat(t.expire_grace_period),
                                            options: [1, 3, 7, 14, 30].map((e) => ({
                                                value: ''.concat(e),
                                                label: I.NW.formatToPlainString(I.t.eGjmy8, { days: e })
                                            })),
                                            onChange: (e) => l(parseInt(e)),
                                            isDisabled: t.syncing
                                        })
                                    ]
                                })
                            ]
                        });
                    })({
                        integration: a,
                        labelText: G,
                        onBehaviorChange: function (e) {
                            p.Z.updateIntegration({ expireBehavior: e });
                        },
                        onGracePeriodChange: function (e) {
                            p.Z.updateIntegration({ expireGracePeriod: e });
                        }
                    }),
                    l.type === c.b.TWITCH
                        ? (function (e) {
                              let { integration: t, emojis: n, onToggle: i } = e;
                              return (0, r.jsxs)(b.Z, {
                                  direction: b.Z.Direction.VERTICAL,
                                  children: [
                                      (0, r.jsx)(u.XZJ, {
                                          type: u.XZJ.Types.INVERTED,
                                          className: o()(E.marginTop20, E.marginBottom8),
                                          value: t.enable_emoticons,
                                          disabled: t.syncing,
                                          onChange: (e) => {
                                              let { currentTarget: t } = e;
                                              return i(t.checked);
                                          },
                                          children: (0, r.jsx)(u.R94, { children: I.NW.string(I.t['7r4OKi']) })
                                      }),
                                      (0, r.jsx)(b.Z, {
                                          wrap: b.Z.Wrap.WRAP,
                                          className: S.__invalid_twitchEmojis,
                                          children: n.map((e, t) =>
                                              (0, r.jsx)(
                                                  u.ua7,
                                                  {
                                                      text: e.name,
                                                      children: (t) =>
                                                          (0, r.jsx)(
                                                              'img',
                                                              P(
                                                                  {
                                                                      alt: I.NW.formatToPlainString(I.t.n6ZZn5, { name: e.name }),
                                                                      draggable: !1,
                                                                      className: o()(S.emoji, 'emoji', 'jumboable'),
                                                                      src: v.ZP.getEmojiURL({
                                                                          id: e.id,
                                                                          animated: e.animated,
                                                                          size: 28
                                                                      })
                                                                  },
                                                                  t
                                                              ),
                                                              e.name
                                                          )
                                                  },
                                                  t
                                              )
                                          )
                                      })
                                  ]
                              });
                          })({
                              integration: a,
                              emojis: Y,
                              onToggle: function (e) {
                                  p.Z.updateIntegration({ enableEmoticons: e });
                              }
                          })
                        : null,
                    (0, r.jsx)(u.$i$, { className: S.bottomDivider }),
                    (0, r.jsx)(b.Z, {
                        children: (0, r.jsx)(u.zxk, {
                            className: S.disableButton,
                            size: u.zxk.Sizes.SMALL,
                            color: u.zxk.Colors.RED,
                            look: u.zxk.Looks.LINK,
                            onClick: M,
                            children: I.NW.string(I.t.M6q6eX)
                        })
                    })
                ]
            })),
        (0, r.jsx)(u.Zbd, {
            editable: !0,
            className: S.card,
            children: (0, r.jsxs)(b.Z, {
                direction: b.Z.Direction.VERTICAL,
                children: [
                    l.enabled
                        ? (0, r.jsx)(u.P3F, {
                              className: S.expandableHeader,
                              'aria-expanded': w && !A,
                              onClick: T,
                              children: X
                          })
                        : X,
                    $
                ]
            })
        })
    );
}
