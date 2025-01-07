n.d(t, {
    Z: function () {
        return ee;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(722770),
    a = n(873546),
    s = n(852229),
    o = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(727637),
    h = n(100527),
    m = n(906732),
    p = n(440051),
    g = n(734934),
    f = n(158238),
    _ = n(300284),
    E = n(680295),
    I = n(785717),
    C = n(816988),
    N = n(687158),
    v = n(899007),
    S = n(648052),
    T = n(867176),
    A = n(537006),
    b = n(483424),
    Z = n(681837),
    x = n(502762),
    L = n(530),
    P = n(309494),
    O = n(495804),
    y = n(171368),
    R = n(420654),
    j = n(695346),
    D = n(158776),
    M = n(246946),
    w = n(572004),
    k = n(70956),
    U = n(5192),
    G = n(74538),
    B = n(51144),
    V = n(246133),
    H = n(474376),
    F = n(435478),
    z = n(383832),
    W = n(981631),
    Y = n(228168),
    K = n(388032),
    q = n(602654),
    X = n(591156);
let Q = [
    {
        duration: 30 * k.Z.Millis.MINUTE,
        label: () => K.intl.string(K.t.RxJGbG)
    },
    {
        duration: k.Z.Millis.HOUR,
        label: () => K.intl.string(K.t.UMWBZm)
    },
    {
        duration: 3 * k.Z.Millis.HOUR,
        label: () => K.intl.string(K.t.QmYWtr)
    },
    {
        duration: 8 * k.Z.Millis.HOUR,
        label: () => K.intl.string(K.t.EpAXPD)
    },
    {
        duration: k.Z.Millis.DAY,
        label: () => K.intl.string(K.t['755t4u'])
    },
    {
        duration: void 0,
        label: () => K.intl.string(K.t['46dqJS'])
    }
];
function J(e, t, n) {
    let r = (0, i.jsx)(i.Fragment, {
        children: Q.map((n) => {
            let { duration: r, label: l } = n;
            return (0, i.jsx)(
                c.MenuItem,
                {
                    id: ''.concat(e, '-').concat(r),
                    label: l(),
                    action: () => (0, V.Z)(e, t, void 0, r),
                    dontCloseOnAction: !0
                },
                r
            );
        })
    });
    return (0, i.jsx)(c.MenuItem, {
        id: e,
        className: q.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        label: (t) => {
            let { isFocused: r } = t;
            return (0, i.jsxs)('div', {
                className: q.statusItem,
                children: [
                    (0, i.jsx)(c.Status, {
                        status: e,
                        className: q.icon,
                        size: 10,
                        color: r ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: q.status,
                        children: (0, B.u5)(e)
                    }),
                    null != n &&
                        (0, i.jsx)('div', {
                            className: q.description,
                            children: n
                        })
                ]
            });
        },
        action: () => (0, V.Z)(e, t),
        dontCloseOnAction: !0,
        children: e !== W.Skl.ONLINE ? r : void 0
    });
}
function $(e, t, n) {
    return (0, i.jsx)(c.MenuItem, {
        id: e,
        keepItemStyles: !0,
        render: (t) => {
            let { isFocused: r } = t;
            return (0, i.jsxs)('div', {
                className: q.statusItem,
                children: [
                    (0, i.jsx)(c.Status, {
                        status: e,
                        className: q.icon,
                        size: 10,
                        color: r ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: q.status,
                        children: (0, B.u5)(e)
                    }),
                    null != n &&
                        (0, i.jsx)('div', {
                            className: q.description,
                            children: n
                        })
                ]
            });
        },
        action: () => (0, V.Z)(e, t),
        dontCloseOnAction: !0
    });
}
function ee(e) {
    var t;
    let { currentUser: n, onClose: k, setPopoutRef: V } = e,
        ee = __OVERLAY__,
        et = (0, N.ZP)(n.id),
        { analyticsLocations: en } = (0, m.ZP)(h.Z.ACCOUNT_PROFILE_POPOUT),
        ei = (0, I.ZB)({
            layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
            userId: n.id
        }),
        { ref: er } = (0, d.Z)(),
        el = (0, u.Z)(er);
    r.useEffect(() => {
        null == V || V(er.current);
    }, [er, V]);
    let ea = (0, o.e7)([D.Z], () => D.Z.getStatus(n.id)),
        es = (0, o.e7)([M.Z], () => M.Z.hidePersonalInformation),
        eo = (0, g.p)(),
        ec = j.Sb.useSetting(),
        ed = (function (e) {
            let t = p.Y.useExperiment({ location: 'AccountProfilePopout' }).expiringStatus,
                n = j.Cr.useSetting(),
                r = (0, g.p)(),
                a = f.e.useExperiment({ location: 'AccountProfilePopout' }).allowQuietMode || r,
                s = j.fv.useSetting(),
                o = e === W.Skl.DND,
                d = (t) => {
                    let i =
                        null != n && '0' !== n
                            ? K.intl.formatToPlainString(K.t.BWD8fn, {
                                  endTime: new Date(Number(n)).toLocaleString(K.intl.currentLocale, {
                                      month: 'numeric',
                                      day: 'numeric',
                                      hour: 'numeric',
                                      minute: '2-digit'
                                  })
                              })
                            : void 0;
                    if (e === t && null != i) return i;
                    switch (t) {
                        case W.Skl.DND:
                            return a ? K.intl.string(K.t.day5Aw) : K.intl.string(K.t.U9Vv19);
                        case W.Skl.INVISIBLE:
                            return K.intl.string(K.t.MqanVF);
                        default:
                            return;
                    }
                },
                u = (0, i.jsx)(i.Fragment, {
                    children: Q.map((t) => {
                        let { duration: n, label: r } = t;
                        return (0, i.jsx)(
                            c.MenuItem,
                            {
                                id: ''.concat(e, '-').concat(n),
                                label: r(),
                                action: () => {
                                    (0, g.oW)(!0, n);
                                },
                                dontCloseOnAction: !0
                            },
                            n
                        );
                    })
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    $(W.Skl.ONLINE, e),
                    (0, i.jsx)(c.MenuSeparator, {}, 'menu-separator-statuses'),
                    t ? J(W.Skl.IDLE, e, d(W.Skl.IDLE)) : $(W.Skl.IDLE, e, d(W.Skl.IDLE)),
                    t ? J(W.Skl.DND, e, d(W.Skl.DND)) : $(W.Skl.DND, e, d(W.Skl.DND)),
                    t ? J(W.Skl.INVISIBLE, e, d(W.Skl.INVISIBLE)) : $(W.Skl.INVISIBLE, e, d(W.Skl.INVISIBLE)),
                    a || r
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(c.MenuSeparator, {}, 'menu-separator-statuses'),
                                  (0, i.jsx)(
                                      c.MenuItem,
                                      {
                                          id: 'quiet-mode',
                                          'aria-label': 'focus mode',
                                          className: q.expiringStatusMenuItem,
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: () =>
                                              (0, i.jsxs)('div', {
                                                  className: q.statusItem,
                                                  children: [
                                                      (0, i.jsx)(c.BellSlashIcon, {
                                                          size: 'xxs',
                                                          className: q.icon
                                                      }),
                                                      (0, i.jsxs)('div', {
                                                          className: q.focusModeTitle,
                                                          children: [
                                                              K.intl.string(K.t.gJRnwM),
                                                              (0, i.jsx)(c.TextBadge, {
                                                                  text: r ? K.intl.string(K.t.ApAu9f) : o ? K.intl.string(K.t.gH3Fra) : K.intl.string(K.t['64pl8/']),
                                                                  color: r ? l.Z.BRAND_500 : o ? l.Z.RED_400 : l.Z.PRIMARY_500
                                                              })
                                                          ]
                                                      }),
                                                      (0, i.jsx)('div', {
                                                          className: q.description,
                                                          children:
                                                              r && null != s && '0' !== s
                                                                  ? K.intl.formatToPlainString(K.t.BWD8fn, {
                                                                        endTime: new Date(Number(s)).toLocaleString(K.intl.currentLocale, {
                                                                            month: 'numeric',
                                                                            day: 'numeric',
                                                                            hour: 'numeric',
                                                                            minute: '2-digit'
                                                                        })
                                                                    })
                                                                  : K.intl.string(K.t['Br1q+/'])
                                                      })
                                                  ]
                                              }),
                                          action: () => {
                                              (0, g.oW)(!r);
                                          },
                                          dontCloseOnAction: !0,
                                          children: u
                                      },
                                      'quiet-mode'
                                  )
                              ]
                          })
                        : null
                ]
            });
        })(ea),
        eu = (0, H.g)(k),
        eh = (0, _.Z)({ analyticsLocations: en }),
        { dimissibleUpsellsEnabled: em } = (0, C.u)({ location: 'AccountProfilePopout' }),
        ep = (0, G.I5)(n),
        eg = (e) => {
            null == k || k(),
                (0, y.openUserProfileModal)({
                    sourceAnalyticsLocations: en,
                    ...ei,
                    ...e
                });
        };
    return (0, i.jsx)(m.Gt, {
        value: en,
        children: (0, i.jsx)(I.Mt, {
            value: ei,
            children: (0, i.jsx)(c.Dialog, {
                ref: er,
                'aria-label': n.username,
                children: (0, i.jsxs)(x.Z, {
                    className: q.themeContainer,
                    user: n,
                    displayProfile: et,
                    profileType: Y.y0.BITE_SIZE,
                    children: [
                        (0, i.jsxs)('header', {
                            className: X.header,
                            children: [
                                (0, i.jsx)(T.Z, {
                                    user: n,
                                    displayProfile: et,
                                    profileType: Y.y0.BITE_SIZE
                                }),
                                (0, i.jsx)(v.Z, {
                                    user: n,
                                    displayProfile: et,
                                    profileType: Y.y0.BITE_SIZE,
                                    onOpenProfile: ee ? void 0 : eg
                                }),
                                (0, i.jsx)(O.Z, {
                                    location: 'AccountProfilePopout',
                                    user: n,
                                    profileType: Y.y0.BITE_SIZE,
                                    onCloseProfile: k
                                })
                            ]
                        }),
                        (null == et ? void 0 : et.profileEffectId) != null &&
                            (0, i.jsx)(E.Z, {
                                profileEffectId: null == et ? void 0 : et.profileEffectId,
                                isHovering: el
                            }),
                        (0, i.jsxs)(c.Scroller, {
                            className: q.body,
                            children: [
                                (0, i.jsx)(L.Z, {
                                    user: n,
                                    className: q.username,
                                    profileType: Y.y0.BITE_SIZE,
                                    nickname: U.ZP.getName(null, null, n),
                                    onOpenProfile: ee ? void 0 : eg,
                                    pronouns: null == et ? void 0 : et.pronouns,
                                    tags: (0, i.jsx)(S.Z, {
                                        displayProfile: et,
                                        profileType: Y.y0.BITE_SIZE,
                                        onClose: k
                                    }),
                                    nicknameIcons: (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(Z.Z, { userId: n.id }),
                                            (0, i.jsx)(P.Z, {
                                                user: n,
                                                isHovering: el
                                            })
                                        ]
                                    })
                                }),
                                (0, i.jsx)(R.Z, {
                                    user: n,
                                    bio: null == et ? void 0 : et.bio,
                                    hidePersonalInformation: es,
                                    onClose: k
                                }),
                                em &&
                                    (0, i.jsx)(A.Z, {
                                        isPremiumUser: ep,
                                        onInteraction: k
                                    }),
                                (0, i.jsx)(b.Z, {
                                    user: n,
                                    currentUser: n,
                                    onClose: k
                                }),
                                (0, i.jsxs)('div', {
                                    className: q.menus,
                                    children: [
                                        (0, i.jsx)(x.Z.Overlay, {
                                            className: q.menuOverlay,
                                            children: (0, i.jsxs)(F.PB, {
                                                id: 'profile-'.concat(n.id),
                                                children: [
                                                    (0, i.jsx)(F.Mv, {
                                                        id: 'edit-profile',
                                                        action: 'EDIT_PROFILE',
                                                        label: K.intl.string(K.t.s5vZlZ),
                                                        icon: c.PencilIcon,
                                                        onClick: () => {
                                                            eh(), k();
                                                        }
                                                    }),
                                                    (0, i.jsx)('div', { className: q.menuDivider }),
                                                    (0, i.jsx)(F.Mv, {
                                                        id: 'set-status',
                                                        action: 'PRESS_SET_STATUS',
                                                        label: null !== (t = (0, B.u5)(ea)) && void 0 !== t ? t : '',
                                                        icon: () =>
                                                            (0, i.jsx)(c.Status, {
                                                                status: ea,
                                                                size: 12
                                                            }),
                                                        hint: (eo || ea === W.Skl.DND) && (0, i.jsx)(c.BellSlashIcon, { size: 'xxs' }),
                                                        renderSubmenu: a.tq
                                                            ? void 0
                                                            : (e) => {
                                                                  let { closePopout: t } = e;
                                                                  return (0, i.jsx)(F.eq, {
                                                                      navId: 'set-status-submenu',
                                                                      className: q.statusPickerModalMenu,
                                                                      'aria-label': K.intl.string(K.t.E13trK),
                                                                      onClose: t,
                                                                      children: ed
                                                                  });
                                                              },
                                                        onClick: a.tq
                                                            ? () => {
                                                                  k(),
                                                                      (0, c.openModalLazy)(
                                                                          () =>
                                                                              new Promise((e) =>
                                                                                  e((e) => {
                                                                                      let { onClose: t, ...n } = e;
                                                                                      return (0, i.jsx)(c.ModalRoot, {
                                                                                          ...n,
                                                                                          size: c.ModalSize.SMALL,
                                                                                          'aria-label': K.intl.string(K.t['3Uj+2t']),
                                                                                          className: q.statusPickerModal,
                                                                                          children: (0, i.jsx)(c.Menu, {
                                                                                              navId: 'set-status-submenu-mobile-web',
                                                                                              variant: 'fixed',
                                                                                              'aria-label': K.intl.string(K.t.E13trK),
                                                                                              className: q.statusPickerModalMenu,
                                                                                              hideScroller: !0,
                                                                                              onClose: t,
                                                                                              onSelect: void 0,
                                                                                              children: ed
                                                                                          })
                                                                                      });
                                                                                  })
                                                                              )
                                                                      );
                                                              }
                                                            : void 0
                                                    })
                                                ]
                                            })
                                        }),
                                        (0, i.jsx)(x.Z.Overlay, {
                                            className: q.menuOverlay,
                                            children: (0, i.jsxs)(F.PB, {
                                                id: 'account-'.concat(n.id),
                                                children: [
                                                    (0, i.jsx)(F.Mv, {
                                                        id: 'switch-accounts',
                                                        action: 'PRESS_SWITCH_ACCOUNTS',
                                                        icon: c.UserCircleIcon,
                                                        label: K.intl.string(K.t.oMNyYG),
                                                        onClick: () => {
                                                            k(), (0, z.Z)();
                                                        },
                                                        renderSubmenu: (e) => {
                                                            let { closePopout: t } = e;
                                                            return (0, i.jsx)(F.eq, {
                                                                navId: 'switch-accounts-submenu',
                                                                'aria-label': K.intl.string(K.t.wFhVqK),
                                                                onClose: t,
                                                                children: eu
                                                            });
                                                        }
                                                    }),
                                                    !__OVERLAY__ &&
                                                        w.wS &&
                                                        ec &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)('div', { className: q.menuDivider }),
                                                                (0, i.jsx)(F.Mv, {
                                                                    id: 'copy-user-id',
                                                                    action: 'COPY_USER_ID',
                                                                    icon: c.IdIcon,
                                                                    label: K.intl.string(K.t['/AXYnJ']),
                                                                    onClick: () => {
                                                                        (0, s.J)(n.id), k();
                                                                    }
                                                                })
                                                            ]
                                                        })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
