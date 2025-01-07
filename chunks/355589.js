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
    p = n(447003),
    C = n(605436),
    v = n(621516),
    b = n(430824),
    j = n(186523),
    _ = n(585483),
    I = n(70956),
    T = n(709054),
    N = n(961675),
    S = n(883429),
    w = n(993259),
    y = n(109434),
    E = n(456269),
    R = n(228392),
    P = n(432771),
    M = n(538366),
    k = n(470623),
    Z = n(710352),
    A = n(981631),
    L = n(388032),
    F = n(969818);
function O(e, t, n) {
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
let B = {
        width: 28,
        height: 28
    },
    z = {
        width: 20,
        height: 20,
        borderRadius: 10
    },
    H = (e) => {
        (0, R.e5)({ onboardingCTA: e });
    };
class D {
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
        O(this, 'currentIndex', 0), O(this, 'steps', []), O(this, 'completedSteps', 0);
    }
}
let U = (e) => {
        let t = null != e.topic && e.topic.length > 0;
        return {
            name: L.intl.string(L.t.UgJu1d),
            description: L.intl.string(L.t['3C6/Gx']),
            clickHandler: () => {
                H(Z.ZI.GUIDELINES), x.ZP.open(e.id, void 0, A.ZfP.TOPIC);
            },
            isDone: t
        };
    },
    V = (e) => {
        let t = null != e.availableTags && e.availableTags.length > 0;
        return {
            name: L.intl.string(L.t.xiBFCg),
            description: L.intl.string(L.t.wCv4Oz),
            clickHandler: () => {
                H(Z.ZI.TAGS),
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
    G = (e) => {
        let t = null != e.defaultReactionEmoji;
        return {
            name: L.intl.string(L.t.QlyC9v),
            description: L.intl.string(L.t['+50LJi']),
            clickHandler: () => {
                H(Z.ZI.DEFAULT_REACTION),
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
    W = (e, t, i) => ({
        name: L.intl.string(L.t['6A0O6+']),
        description: t
            ? L.intl.string(L.t['8hI5vr'])
            : L.intl.format(L.t.ysxcAw, {
                  onClick: (e) => {
                      null != i &&
                          (e.preventDefault(),
                          e.stopPropagation(),
                          (0, R.qz)(),
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
            H(Z.ZI.CREATE_POST), _.S.dispatch(A.CkL.FOCUS_COMPOSER_TITLE);
        },
        isDone: e
    }),
    q = (e, t) => i.useCallback(() => (t(!1), S.Z.hideAdminOnboarding(e, !0)), [e, t]),
    X = (e) => {
        let t = T.default.extractTimestamp(e);
        return o()().isBefore(o()(t).add(o().duration(15, 'days')));
    },
    K = (e, t, n) => {
        i.useEffect(() => {
            !e && n(!t);
        }, [e, n, t]);
    },
    J = (e, t, n, a) => {
        let r = i.useRef(0);
        i.useEffect(
            () => (
                n || !e || t
                    ? clearTimeout(r.current)
                    : (r.current = setTimeout(() => {
                          a();
                      }, 60 * I.Z.Millis.SECOND)),
                () => clearTimeout(r.current)
            ),
            [e, t, a, n]
        );
    },
    Y = (e, t, n) => {
        i.useEffect(() => {
            e && t && n();
        }, []);
    },
    Q = (e) => {
        let { isAllDone: t, isVisible: n, canManageChannel: a, guildId: r, channel: l } = e,
            s = (0, h.e7)([b.Z], () => (null != r ? b.Z.getRoles(r) : void 0)),
            o = i.useCallback(() => {
                _.S.dispatch(A.CkL.REMEASURE_TARGET);
            }, []);
        i.useEffect(() => {
            o();
        }, [o, t, n, a, s, l.id, l.permissionOverwrites]);
    },
    $ = () => {
        let [e, t] = i.useState(!0);
        return {
            transitions: (0, g.useTransition)(e, {
                keys: (e) => (e ? 'shown' : 'hidden'),
                config: en,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
                unique: !0
            }),
            setVisible: t
        };
    },
    ee = (e) =>
        (0, g.useTransition)(e, {
            from: { maxHeight: 0 },
            enter: { maxHeight: 500 },
            leave: { maxHeight: 0 },
            config: { duration: 200 }
        }),
    et = (e) => {
        let { guild: t, roles: n } = e;
        return (0, a.jsx)('div', {
            className: F.rolesList,
            'aria-label': L.intl.formatToPlainString(L.t.PCs0oq, { numRoles: n.length }),
            children: n.map((e) =>
                (0, a.jsx)(
                    f.UB,
                    {
                        role: e,
                        canRemove: !1,
                        onRemove: A.VqG,
                        guildId: t.id,
                        className: F.rolePill
                    },
                    e.id
                )
            )
        });
    },
    en = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    },
    ea = (e) => {
        let { guild: t, channel: r, hasAnyThread: l, handleHide: s } = e,
            [o, c] = i.useState(!1),
            d = (0, P.c)(r.id),
            u = (0, h.e7)([N.Z], () => N.Z.hasHidden(r.id)),
            x = (function (e, t, r, l) {
                let s = null == e ? void 0 : e.id,
                    o = (0, h.e7)([b.Z], () => (null != s ? b.Z.getRoles(s) : void 0));
                return i.useMemo(() => {
                    let i = new D(),
                        s = (null == t ? void 0 : t.isMediaChannel()) === !0;
                    return (
                        null != e &&
                            null != t &&
                            !s &&
                            null != o &&
                            i.addStep(
                                (function (e, t, i, r) {
                                    let l = (0, p.Z)(i) ? m.$e(A.Plq.VIEW_CHANNEL, A.Plq.SEND_MESSAGES) : A.Plq.SEND_MESSAGES,
                                        s = null != e ? (0, w.E$)(e, t, i, l).filter((t) => i.permissionOverwrites.hasOwnProperty(t.id) || (0, C.pM)(e.id, t.id)) : [],
                                        o = s.length > 0,
                                        c = s.some((t) => (0, C.pM)(e.id, t.id));
                                    return {
                                        name: L.intl.string(L.t['/Ax2go']),
                                        description: L.intl.string(L.t.oMIexc),
                                        isDone: o && c,
                                        shouldWarn: o && !c,
                                        children: o
                                            ? (0, a.jsx)(et, {
                                                  guild: e,
                                                  roles: s
                                              })
                                            : null,
                                        clickHandler: () => {
                                            H(Z.ZI.PERMISSIONS),
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
                                                        onCloseRequest: A.VqG,
                                                        onCloseCallback: () => r(!1)
                                                    }
                                                );
                                        }
                                    };
                                })(e, o, t, l)
                            ),
                        !s && i.addStep(U(t)),
                        i.addStep(V(t)),
                        i.addStep(G(t)),
                        i.addStep(W(r, s, null == e ? void 0 : e.id)),
                        i
                    );
                }, [t, e, o, r, l]);
            })(t, r, l, c),
            f = x.isAllDone();
        return (
            J(f, d || u || !X(r.id), o, s),
            {
                onboardingSteps: x,
                isHidden: u,
                isDismissed: d,
                isAllDone: f
            }
        );
    },
    ei = () =>
        i.useCallback((e) => {
            var t;
            null === (t = e.clickHandler) || void 0 === t || t.call(e);
        }, []),
    er = (e) => {
        let { handleHide: t } = e;
        return (0, a.jsx)(g.Clickable, {
            onClick: t,
            className: F.closeButton,
            'aria-label': L.intl.string(L.t.WAI6xs),
            children: (0, a.jsx)(g.XSmallIcon, {
                size: 'md',
                color: 'currentColor',
                className: F.closeIcon
            })
        });
    },
    el = (e) => {
        let { expanded: t, onClick: n } = e;
        return (0, a.jsx)(g.Clickable, {
            onClick: n,
            className: F.closeButton,
            'aria-label': t ? L.intl.string(L.t.iTcumZ) : L.intl.string(L.t.dcl9MT),
            children: t
                ? (0, a.jsx)(g.MinimizeIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: F.closeIcon
                  })
                : (0, a.jsx)(g.MaximizeIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: F.closeIcon
                  })
        });
    };
t.Z = (e) => {
    let { hasAnyThread: t, channel: n } = e,
        { onboardingExpanded: r } = (0, k.xH)((e) => {
            let { onboardingExpanded: t } = e;
            return { onboardingExpanded: t };
        }, d.X),
        { tagFilter: s } = (0, y.H)(n.id),
        o = (0, h.e7)([b.Z], () => b.Z.getGuild(n.getGuildId())),
        m = (0, E.r_)(n),
        { transitions: x, setVisible: f } = $(),
        p = ee(r),
        C = ei(),
        _ = q(n.id, f),
        {
            onboardingSteps: I,
            isDismissed: T,
            isHidden: N,
            isAllDone: S
        } = ea({
            guild: o,
            channel: n,
            hasAnyThread: t,
            handleHide: _
        }),
        w = !N && !T,
        R = (0, k.AF)(),
        P = n.isMediaChannel(),
        Z = (e) => R.getState().setOnboardingExpanded(e);
    return (Y(S, w, _),
    Q({
        isAllDone: S,
        isVisible: w,
        canManageChannel: m,
        guildId: null == o ? void 0 : o.id,
        channel: n
    }),
    K(T, N, f),
    i.useEffect(() => {
        (!t || !w) && Z(!0);
    }, []),
    null == o)
        ? null
        : w && m
          ? P
              ? t
                  ? null
                  : (0, a.jsx)(v.Z, { channel: n })
              : (0, a.jsx)(a.Fragment, {
                    children: x((e, t) =>
                        t
                            ? (0, a.jsx)(c.animated.div, {
                                  style: e,
                                  className: F.container,
                                  children: (0, a.jsxs)('div', {
                                      className: F.wrapper,
                                      children: [
                                          (0, a.jsx)('div', {
                                              className: F.headerRow,
                                              children: (0, a.jsxs)(g.HeadingLevel, {
                                                  component: (0, a.jsx)(g.Heading, {
                                                      variant: 'heading-md/semibold',
                                                      children: L.intl.string(L.t.LhlgY2)
                                                  }),
                                                  children: [
                                                      (0, a.jsx)(g.Heading, {
                                                          variant: 'heading-md/medium',
                                                          className: F.header,
                                                          children: L.intl.format(L.t['9L+8b2'], {
                                                              numCompleted: I.completedSteps.toString(),
                                                              numSteps: I.steps.length.toString()
                                                          })
                                                      }),
                                                      (0, a.jsxs)(g.Text, {
                                                          variant: 'text-xs/normal',
                                                          className: F.visibilityInfo,
                                                          children: [
                                                              (0, a.jsx)(g.CircleInformationIcon, {
                                                                  size: 'xxs',
                                                                  color: 'currentColor',
                                                                  className: F.icon
                                                              }),
                                                              L.intl.string(L.t.znhX2d)
                                                          ]
                                                      }),
                                                      (0, a.jsx)(el, {
                                                          expanded: r,
                                                          onClick: () => Z(!r)
                                                      }),
                                                      (0, a.jsx)(er, { handleHide: _ })
                                                  ]
                                              })
                                          }),
                                          p((e, t) =>
                                              t
                                                  ? (0, a.jsx)(c.animated.div, {
                                                        style: e,
                                                        className: F.listContainer,
                                                        children: (0, a.jsx)('ol', {
                                                            className: F.checklist,
                                                            children: I.getSteps().map((e) =>
                                                                (0, a.jsxs)(
                                                                    g.Clickable,
                                                                    {
                                                                        tag: 'li',
                                                                        'aria-label': e.name,
                                                                        onClick: () => C(e),
                                                                        className: l()(F.stepContainer, { [F.completed]: e.isDone }),
                                                                        children: [
                                                                            e.shouldWarn
                                                                                ? (0, a.jsx)(g.CircleWarningIcon, {
                                                                                      size: 'custom',
                                                                                      width: 20,
                                                                                      height: 20,
                                                                                      color: u.Z.STATUS_DANGER,
                                                                                      className: F.stepStatus
                                                                                  })
                                                                                : e.isDone
                                                                                  ? (0, a.jsx)(g.IconBadge, {
                                                                                        color: u.Z.STATUS_POSITIVE_BACKGROUND,
                                                                                        icon: g.CheckmarkLargeIcon,
                                                                                        style: z,
                                                                                        className: F.stepStatus
                                                                                    })
                                                                                  : (0, a.jsx)(g.IconBadge, {
                                                                                        disableColor: !0,
                                                                                        icon: (0, g.makeIconCompat)(j.Z),
                                                                                        style: B,
                                                                                        className: l()(F.stepStatus, F.completed)
                                                                                    }),
                                                                            (0, a.jsxs)('div', {
                                                                                className: F.step,
                                                                                children: [
                                                                                    (0, a.jsx)(g.Text, {
                                                                                        variant: 'text-md/medium',
                                                                                        color: e.isDone ? 'header-secondary' : 'header-primary',
                                                                                        className: F.stepName,
                                                                                        children: e.name
                                                                                    }),
                                                                                    (0, a.jsx)(g.Text, {
                                                                                        variant: 'text-sm/normal',
                                                                                        color: 'header-secondary',
                                                                                        className: F.stepDescription,
                                                                                        children: e.description
                                                                                    }),
                                                                                    e.children
                                                                                ]
                                                                            }),
                                                                            (0, a.jsx)(g.ChevronSmallRightIcon, {
                                                                                size: 'custom',
                                                                                color: 'currentColor',
                                                                                width: 12,
                                                                                className: F.stepStatus
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
            : (0, a.jsx)(M.Z, {
                  channelName: n.name,
                  guildId: n.guild_id,
                  tagFilter: s,
                  channel: n
              });
};
