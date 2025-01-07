n(653041), n(47120);
var a = n(200651),
    i = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(913527),
    o = n.n(s),
    c = n(666912),
    d = n(232713),
    u = n(831209),
    m = n(149765),
    h = n(442837),
    g = n(481060),
    x = n(787014),
    f = n(412899),
    p = n(493773),
    C = n(447003),
    v = n(605436),
    b = n(621516),
    j = n(430824),
    _ = n(186523),
    I = n(585483),
    T = n(70956),
    N = n(709054),
    S = n(961675),
    w = n(883429),
    y = n(993259),
    E = n(109434),
    R = n(456269),
    P = n(228392),
    M = n(432771),
    k = n(538366),
    Z = n(470623),
    A = n(710352),
    L = n(981631),
    F = n(388032),
    O = n(969818);
function B(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let z = {
        width: 28,
        height: 28
    },
    H = {
        width: 20,
        height: 20,
        borderRadius: 10
    },
    D = (e) => {
        (0, P.e5)({ onboardingCTA: e });
    };
class U {
    addStep(e) {
        ++this.currentIndex,
            this.steps.push({
                index: this.currentIndex,
                ...e
            }),
            e.isDone && this.completedSteps++;
    }
    getSteps() {
        return this.steps;
    }
    isAllDone() {
        return this.steps.every((e) => e.isDone);
    }
    constructor() {
        B(this, 'currentIndex', 0), B(this, 'steps', []), B(this, 'completedSteps', 0);
    }
}
let V = (e) => {
        let t = null != e.topic && e.topic.length > 0;
        return {
            name: F.intl.string(F.t.UgJu1d),
            description: F.intl.string(F.t['3C6/Gx']),
            clickHandler: () => {
                D(A.ZI.GUIDELINES), x.ZP.open(e.id, void 0, L.ZfP.TOPIC);
            },
            isDone: t
        };
    },
    G = (e) => {
        let t = null != e.availableTags && e.availableTags.length > 0;
        return {
            name: F.intl.string(F.t.xiBFCg),
            description: F.intl.string(F.t.wCv4Oz),
            clickHandler: () => {
                D(A.ZI.TAGS),
                    x.ZP.open(e.id),
                    (0, g.openModalLazy)(async () => {
                        let { default: t } = await n.e('21971').then(n.bind(n, 915774));
                        return (n) =>
                            (0, a.jsx)(t, {
                                ...n,
                                channelId: e.id,
                                guildId: e.guild_id
                            });
                    });
            },
            isDone: t
        };
    },
    W = (e) => {
        let t = null != e.defaultReactionEmoji;
        return {
            name: F.intl.string(F.t.QlyC9v),
            description: F.intl.string(F.t['+50LJi']),
            clickHandler: () => {
                D(A.ZI.DEFAULT_REACTION),
                    (0, g.openModalLazy)(async () => {
                        let { default: t } = await n.e('80404').then(n.bind(n, 158586));
                        return (n) =>
                            (0, a.jsx)(t, {
                                ...n,
                                channel: e
                            });
                    });
            },
            isDone: t
        };
    },
    q = (e, t, i) => ({
        name: F.intl.string(F.t['6A0O6+']),
        description: t
            ? F.intl.string(F.t['8hI5vr'])
            : F.intl.format(F.t.ysxcAw, {
                  onClick: (e) => {
                      null != i &&
                          (e.preventDefault(),
                          e.stopPropagation(),
                          (0, P.qz)(),
                          (0, g.openModalLazy)(async () => {
                              let { default: e } = await n.e('18417').then(n.bind(n, 740696));
                              return (t) =>
                                  (0, a.jsx)(e, {
                                      ...t,
                                      guildId: i
                                  });
                          }));
                  }
              }),
        clickHandler: () => {
            D(A.ZI.CREATE_POST), I.S.dispatch(L.CkL.FOCUS_COMPOSER_TITLE);
        },
        isDone: e
    }),
    X = (e, t) => i.useCallback(() => (t(!1), w.Z.hideAdminOnboarding(e, !0)), [e, t]),
    K = (e) => {
        let t = N.default.extractTimestamp(e);
        return o()().isBefore(o()(t).add(o().duration(15, 'days')));
    },
    J = (e, t, n) => {
        i.useEffect(() => {
            !e && n(!t);
        }, [e, n, t]);
    },
    Y = (e, t, n, a) => {
        let r = i.useRef(0);
        i.useEffect(
            () => (
                n || !e || t
                    ? clearTimeout(r.current)
                    : (r.current = setTimeout(() => {
                          a();
                      }, 60 * T.Z.Millis.SECOND)),
                () => clearTimeout(r.current)
            ),
            [e, t, a, n]
        );
    },
    Q = (e, t, n) => {
        (0, p.Z)(() => {
            e && t && n();
        });
    },
    $ = (e) => {
        let { isAllDone: t, isVisible: n, canManageChannel: a, guildId: r, channel: l } = e,
            s = (0, h.e7)([j.Z], () => (null != r ? j.Z.getRoles(r) : void 0)),
            o = i.useCallback(() => {
                I.S.dispatch(L.CkL.REMEASURE_TARGET);
            }, []);
        i.useEffect(() => {
            o();
        }, [o, t, n, a, s, l.id, l.permissionOverwrites]);
    },
    ee = () => {
        let [e, t] = i.useState(!0);
        return {
            transitions: (0, g.useTransition)(e, {
                keys: (e) => (e ? 'shown' : 'hidden'),
                config: ea,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
                unique: !0
            }),
            setVisible: t
        };
    },
    et = (e) =>
        (0, g.useTransition)(e, {
            from: { maxHeight: 0 },
            enter: { maxHeight: 500 },
            leave: { maxHeight: 0 },
            config: { duration: 200 }
        }),
    en = (e) => {
        let { guild: t, roles: n } = e;
        return (0, a.jsx)('div', {
            className: O.rolesList,
            'aria-label': F.intl.formatToPlainString(F.t.PCs0oq, { numRoles: n.length }),
            children: n.map((e) =>
                (0, a.jsx)(
                    f.UB,
                    {
                        role: e,
                        canRemove: !1,
                        onRemove: L.VqG,
                        guildId: t.id,
                        className: O.rolePill
                    },
                    e.id
                )
            )
        });
    },
    ea = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    },
    ei = (e) => {
        let { guild: t, channel: r, hasAnyThread: l, handleHide: s } = e,
            [o, c] = i.useState(!1),
            d = (0, M.c)(r.id),
            u = (0, h.e7)([S.Z], () => S.Z.hasHidden(r.id)),
            x = (function (e, t, r, l) {
                let s = null == e ? void 0 : e.id,
                    o = (0, h.e7)([j.Z], () => (null != s ? j.Z.getRoles(s) : void 0));
                return i.useMemo(() => {
                    let i = new U(),
                        s = (null == t ? void 0 : t.isMediaChannel()) === !0;
                    return (
                        null != e &&
                            null != t &&
                            !s &&
                            null != o &&
                            i.addStep(
                                (function (e, t, i, r) {
                                    let l = (0, C.Z)(i) ? m.$e(L.Plq.VIEW_CHANNEL, L.Plq.SEND_MESSAGES) : L.Plq.SEND_MESSAGES,
                                        s = null != e ? (0, y.E$)(e, t, i, l).filter((t) => i.permissionOverwrites.hasOwnProperty(t.id) || (0, v.pM)(e.id, t.id)) : [],
                                        o = s.length > 0,
                                        c = s.some((t) => (0, v.pM)(e.id, t.id));
                                    return {
                                        name: F.intl.string(F.t['/Ax2go']),
                                        description: F.intl.string(F.t.oMIexc),
                                        isDone: o && c,
                                        shouldWarn: o && !c,
                                        children: o
                                            ? (0, a.jsx)(en, {
                                                  guild: e,
                                                  roles: s
                                              })
                                            : null,
                                        clickHandler: () => {
                                            D(A.ZI.PERMISSIONS),
                                                (0, g.openModalLazy)(
                                                    async () => {
                                                        let { default: t } = await n.e('78704').then(n.bind(n, 560602));
                                                        return (
                                                            r(!0),
                                                            (n) =>
                                                                (0, a.jsx)(t, {
                                                                    ...n,
                                                                    channel: i,
                                                                    guild: e,
                                                                    permission: l,
                                                                    currentSelectedRoles: s
                                                                })
                                                        );
                                                    },
                                                    {
                                                        modalKey: 'SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY',
                                                        onCloseRequest: L.VqG,
                                                        onCloseCallback: () => r(!1)
                                                    }
                                                );
                                        }
                                    };
                                })(e, o, t, l)
                            ),
                        !s && i.addStep(V(t)),
                        i.addStep(G(t)),
                        i.addStep(W(t)),
                        i.addStep(q(r, s, null == e ? void 0 : e.id)),
                        i
                    );
                }, [t, e, o, r, l]);
            })(t, r, l, c),
            f = x.isAllDone();
        return (
            Y(f, d || u || !K(r.id), o, s),
            {
                onboardingSteps: x,
                isHidden: u,
                isDismissed: d,
                isAllDone: f
            }
        );
    },
    er = () =>
        i.useCallback((e) => {
            var t;
            null === (t = e.clickHandler) || void 0 === t || t.call(e);
        }, []),
    el = (e) => {
        let { handleHide: t } = e;
        return (0, a.jsx)(g.Clickable, {
            onClick: t,
            className: O.closeButton,
            'aria-label': F.intl.string(F.t.WAI6xs),
            children: (0, a.jsx)(g.XSmallIcon, {
                size: 'md',
                color: 'currentColor',
                className: O.closeIcon
            })
        });
    },
    es = (e) => {
        let { expanded: t, onClick: n } = e;
        return (0, a.jsx)(g.Clickable, {
            onClick: n,
            className: O.closeButton,
            'aria-label': t ? F.intl.string(F.t.iTcumZ) : F.intl.string(F.t.dcl9MT),
            children: t
                ? (0, a.jsx)(g.MinimizeIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: O.closeIcon
                  })
                : (0, a.jsx)(g.MaximizeIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: O.closeIcon
                  })
        });
    };
t.Z = (e) => {
    let { hasAnyThread: t, channel: n } = e,
        { onboardingExpanded: i } = (0, Z.xH)((e) => {
            let { onboardingExpanded: t } = e;
            return { onboardingExpanded: t };
        }, d.X),
        { tagFilter: r } = (0, E.H)(n.id),
        s = (0, h.e7)([j.Z], () => j.Z.getGuild(n.getGuildId())),
        o = (0, R.r_)(n),
        { transitions: m, setVisible: x } = ee(),
        f = et(i),
        C = er(),
        v = X(n.id, x),
        {
            onboardingSteps: I,
            isDismissed: T,
            isHidden: N,
            isAllDone: S
        } = ei({
            guild: s,
            channel: n,
            hasAnyThread: t,
            handleHide: v
        }),
        w = !N && !T,
        y = (0, Z.AF)(),
        P = n.isMediaChannel(),
        M = (e) => y.getState().setOnboardingExpanded(e);
    return (Q(S, w, v),
    $({
        isAllDone: S,
        isVisible: w,
        canManageChannel: o,
        guildId: null == s ? void 0 : s.id,
        channel: n
    }),
    J(T, N, x),
    (0, p.Z)(() => {
        (!t || !w) && M(!0);
    }),
    null == s)
        ? null
        : w && o
          ? P
              ? t
                  ? null
                  : (0, a.jsx)(b.Z, { channel: n })
              : (0, a.jsx)(a.Fragment, {
                    children: m((e, t) =>
                        t
                            ? (0, a.jsx)(c.animated.div, {
                                  style: e,
                                  className: O.container,
                                  children: (0, a.jsxs)('div', {
                                      className: O.wrapper,
                                      children: [
                                          (0, a.jsx)('div', {
                                              className: O.headerRow,
                                              children: (0, a.jsxs)(g.HeadingLevel, {
                                                  component: (0, a.jsx)(g.Heading, {
                                                      variant: 'heading-md/semibold',
                                                      children: F.intl.string(F.t.LhlgY2)
                                                  }),
                                                  children: [
                                                      (0, a.jsx)(g.Heading, {
                                                          variant: 'heading-md/medium',
                                                          className: O.header,
                                                          children: F.intl.format(F.t['9L+8b2'], {
                                                              numCompleted: I.completedSteps.toString(),
                                                              numSteps: I.steps.length.toString()
                                                          })
                                                      }),
                                                      (0, a.jsxs)(g.Text, {
                                                          variant: 'text-xs/normal',
                                                          className: O.visibilityInfo,
                                                          children: [
                                                              (0, a.jsx)(g.CircleInformationIcon, {
                                                                  size: 'xxs',
                                                                  color: 'currentColor',
                                                                  className: O.icon
                                                              }),
                                                              F.intl.string(F.t.znhX2d)
                                                          ]
                                                      }),
                                                      (0, a.jsx)(es, {
                                                          expanded: i,
                                                          onClick: () => M(!i)
                                                      }),
                                                      (0, a.jsx)(el, { handleHide: v })
                                                  ]
                                              })
                                          }),
                                          f((e, t) =>
                                              t
                                                  ? (0, a.jsx)(c.animated.div, {
                                                        style: e,
                                                        className: O.listContainer,
                                                        children: (0, a.jsx)('ol', {
                                                            className: O.checklist,
                                                            children: I.getSteps().map((e) =>
                                                                (0, a.jsxs)(
                                                                    g.Clickable,
                                                                    {
                                                                        tag: 'li',
                                                                        'aria-label': e.name,
                                                                        onClick: () => C(e),
                                                                        className: l()(O.stepContainer, { [O.completed]: e.isDone }),
                                                                        children: [
                                                                            e.shouldWarn
                                                                                ? (0, a.jsx)(g.CircleWarningIcon, {
                                                                                      size: 'custom',
                                                                                      width: 20,
                                                                                      height: 20,
                                                                                      color: u.Z.STATUS_DANGER,
                                                                                      className: O.stepStatus
                                                                                  })
                                                                                : e.isDone
                                                                                  ? (0, a.jsx)(g.IconBadge, {
                                                                                        color: u.Z.STATUS_POSITIVE_BACKGROUND,
                                                                                        icon: g.CheckmarkLargeIcon,
                                                                                        style: H,
                                                                                        className: O.stepStatus
                                                                                    })
                                                                                  : (0, a.jsx)(g.IconBadge, {
                                                                                        disableColor: !0,
                                                                                        icon: (0, g.makeIconCompat)(_.Z),
                                                                                        style: z,
                                                                                        className: l()(O.stepStatus, O.completed)
                                                                                    }),
                                                                            (0, a.jsxs)('div', {
                                                                                className: O.step,
                                                                                children: [
                                                                                    (0, a.jsx)(g.Text, {
                                                                                        variant: 'text-md/medium',
                                                                                        color: e.isDone ? 'header-secondary' : 'header-primary',
                                                                                        className: O.stepName,
                                                                                        children: e.name
                                                                                    }),
                                                                                    (0, a.jsx)(g.Text, {
                                                                                        variant: 'text-sm/normal',
                                                                                        color: 'header-secondary',
                                                                                        className: O.stepDescription,
                                                                                        children: e.description
                                                                                    }),
                                                                                    e.children
                                                                                ]
                                                                            }),
                                                                            (0, a.jsx)(g.ChevronSmallRightIcon, {
                                                                                size: 'custom',
                                                                                color: 'currentColor',
                                                                                width: 12,
                                                                                className: O.stepStatus
                                                                            })
                                                                        ]
                                                                    },
                                                                    'onboard-step-'.concat(e.index)
                                                                )
                                                            )
                                                        })
                                                    })
                                                  : null
                                          )
                                      ]
                                  })
                              })
                            : null
                    )
                })
          : t
            ? null
            : (0, a.jsx)(k.Z, {
                  channelName: n.name,
                  guildId: n.guild_id,
                  tagFilter: r,
                  channel: n
              });
};
