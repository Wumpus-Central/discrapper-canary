n.d(t, { Z: () => eo }), n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(913527),
    o = n.n(s),
    c = n(642128),
    d = n(232713),
    u = n(831209),
    m = n(149765),
    h = n(442837),
    g = n(481060),
    x = n(787014),
    f = n(412899),
    p = n(493773),
    v = n(447003),
    C = n(605436),
    _ = n(621516),
    b = n(430824),
    j = n(186523),
    N = n(585483),
    T = n(70956),
    I = n(709054),
    S = n(961675),
    w = n(883429),
    y = n(993259),
    E = n(109434),
    R = n(456269),
    P = n(228392),
    k = n(432771),
    Z = n(538366),
    M = n(470623),
    A = n(710352),
    L = n(981631),
    F = n(388032),
    O = n(254978);
function z(e, t, n) {
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
let D = {
        width: 28,
        height: 28
    },
    B = {
        width: 20,
        height: 20,
        borderRadius: 10
    },
    H = (e) => {
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
        z(this, 'currentIndex', 0), z(this, 'steps', []), z(this, 'completedSteps', 0);
    }
}
let V = (e) => {
        let t = null != e.topic && e.topic.length > 0;
        return {
            name: F.intl.string(F.t.UgJu1d),
            description: F.intl.string(F.t['3C6/Gx']),
            clickHandler: () => {
                H(A.ZI.GUIDELINES), x.ZP.open(e.id, void 0, L.ZfP.TOPIC);
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
                H(A.ZI.TAGS),
                    x.ZP.open(e.id),
                    (0, g.ZDy)(async () => {
                        let { default: t } = await n.e('21971').then(n.bind(n, 201049));
                        return (n) =>
                            (0, i.jsx)(t, {
                                ...n,
                                channelId: e.id,
                                guildId: e.guild_id
                            });
                    });
            },
            isDone: t
        };
    },
    q = (e) => {
        let t = null != e.defaultReactionEmoji;
        return {
            name: F.intl.string(F.t.QlyC9v),
            description: F.intl.string(F.t['+50LJi']),
            clickHandler: () => {
                H(A.ZI.DEFAULT_REACTION),
                    (0, g.ZDy)(async () => {
                        let { default: t } = await n.e('80404').then(n.bind(n, 158586));
                        return (n) =>
                            (0, i.jsx)(t, {
                                ...n,
                                channel: e
                            });
                    });
            },
            isDone: t
        };
    },
    X = (e, t, r) => ({
        name: F.intl.string(F.t['6A0O6+']),
        description: t
            ? F.intl.string(F.t['8hI5vr'])
            : F.intl.format(F.t.ysxcAw, {
                  onClick: (e) => {
                      null != r &&
                          (e.preventDefault(),
                          e.stopPropagation(),
                          (0, P.qz)(),
                          (0, g.ZDy)(async () => {
                              let { default: e } = await n.e('18417').then(n.bind(n, 740696));
                              return (t) =>
                                  (0, i.jsx)(e, {
                                      ...t,
                                      guildId: r
                                  });
                          }));
                  }
              }),
        clickHandler: () => {
            H(A.ZI.CREATE_POST), N.S.dispatch(L.CkL.FOCUS_COMPOSER_TITLE);
        },
        isDone: e
    }),
    W = (e, t) => r.useCallback(() => (t(!1), w.Z.hideAdminOnboarding(e, !0)), [e, t]),
    K = (e) => {
        let t = I.default.extractTimestamp(e);
        return o()().isBefore(o()(t).add(o().duration(15, 'days')));
    },
    J = (e, t, n) => {
        r.useEffect(() => {
            e || n(!t);
        }, [e, n, t]);
    },
    Y = (e, t, n, i) => {
        let l = r.useRef(0);
        r.useEffect(
            () => (
                n || !e || t
                    ? clearTimeout(l.current)
                    : (l.current = setTimeout(() => {
                          i();
                      }, 60 * T.Z.Millis.SECOND)),
                () => clearTimeout(l.current)
            ),
            [e, t, i, n]
        );
    },
    Q = (e, t, n) => {
        (0, p.ZP)(() => {
            e && t && n();
        });
    },
    $ = (e) => {
        let { isAllDone: t, isVisible: n, canManageChannel: i, guildId: l, channel: a } = e,
            s = (0, h.e7)([b.Z], () => (null != l ? b.Z.getRoles(l) : void 0)),
            o = r.useCallback(() => {
                N.S.dispatch(L.CkL.REMEASURE_TARGET);
            }, []);
        r.useEffect(() => {
            o();
        }, [o, t, n, i, s, a.id, a.permissionOverwrites]);
    },
    ee = () => {
        let [e, t] = r.useState(!0);
        return {
            transitions: (0, g.Yzy)(e, {
                keys: (e) => (e ? 'shown' : 'hidden'),
                config: ei,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
                unique: !0
            }),
            setVisible: t
        };
    },
    et = (e) =>
        (0, g.Yzy)(e, {
            from: { maxHeight: 0 },
            enter: { maxHeight: 500 },
            leave: { maxHeight: 0 },
            config: { duration: 200 }
        }),
    en = (e) => {
        let { guild: t, roles: n } = e;
        return (0, i.jsx)('div', {
            className: O.rolesList,
            'aria-label': F.intl.formatToPlainString(F.t.PCs0oq, { numRoles: n.length }),
            children: n.map((e) =>
                (0, i.jsx)(
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
    ei = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    },
    er = (e) => {
        let { guild: t, channel: l, hasAnyThread: a, handleHide: s } = e,
            [o, c] = r.useState(!1),
            d = (0, k.c)(l.id),
            u = (0, h.e7)([S.Z], () => S.Z.hasHidden(l.id)),
            x = (function (e, t, l, a) {
                let s = null == e ? void 0 : e.id,
                    o = (0, h.e7)([b.Z], () => (null != s ? b.Z.getRoles(s) : void 0));
                return r.useMemo(() => {
                    let r = new U(),
                        s = (null == t ? void 0 : t.isMediaChannel()) === !0;
                    return (
                        null == e ||
                            null == t ||
                            s ||
                            null == o ||
                            r.addStep(
                                (function (e, t, r, l) {
                                    let a = (0, v.Z)(r) ? m.$e(L.Plq.VIEW_CHANNEL, L.Plq.SEND_MESSAGES) : L.Plq.SEND_MESSAGES,
                                        s = null != e ? (0, y.E$)(e, t, r, a).filter((t) => r.permissionOverwrites.hasOwnProperty(t.id) || (0, C.pM)(e.id, t.id)) : [],
                                        o = s.length > 0,
                                        c = s.some((t) => (0, C.pM)(e.id, t.id));
                                    return {
                                        name: F.intl.string(F.t['/Ax2go']),
                                        description: F.intl.string(F.t.oMIexc),
                                        isDone: o && c,
                                        shouldWarn: o && !c,
                                        children: o
                                            ? (0, i.jsx)(en, {
                                                  guild: e,
                                                  roles: s
                                              })
                                            : null,
                                        clickHandler: () => {
                                            H(A.ZI.PERMISSIONS),
                                                (0, g.ZDy)(
                                                    async () => {
                                                        let { default: t } = await n.e('78704').then(n.bind(n, 560602));
                                                        return (
                                                            l(!0),
                                                            (n) =>
                                                                (0, i.jsx)(t, {
                                                                    ...n,
                                                                    channel: r,
                                                                    guild: e,
                                                                    permission: a,
                                                                    currentSelectedRoles: s
                                                                })
                                                        );
                                                    },
                                                    {
                                                        modalKey: 'SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY',
                                                        onCloseRequest: L.VqG,
                                                        onCloseCallback: () => l(!1)
                                                    }
                                                );
                                        }
                                    };
                                })(e, o, t, a)
                            ),
                        s || r.addStep(V(t)),
                        r.addStep(G(t)),
                        r.addStep(q(t)),
                        r.addStep(X(l, s, null == e ? void 0 : e.id)),
                        r
                    );
                }, [t, e, o, l, a]);
            })(t, l, a, c),
            f = x.isAllDone();
        return (
            Y(f, d || u || !K(l.id), o, s),
            {
                onboardingSteps: x,
                isHidden: u,
                isDismissed: d,
                isAllDone: f
            }
        );
    },
    el = () =>
        r.useCallback((e) => {
            var t;
            null === (t = e.clickHandler) || void 0 === t || t.call(e);
        }, []),
    ea = (e) => {
        let { handleHide: t } = e;
        return (0, i.jsx)(g.P3F, {
            onClick: t,
            className: O.closeButton,
            'aria-label': F.intl.string(F.t.WAI6xs),
            children: (0, i.jsx)(g.Dio, {
                size: 'md',
                color: 'currentColor',
                className: O.closeIcon
            })
        });
    },
    es = (e) => {
        let { expanded: t, onClick: n } = e;
        return (0, i.jsx)(g.P3F, {
            onClick: n,
            className: O.closeButton,
            'aria-label': t ? F.intl.string(F.t.iTcumZ) : F.intl.string(F.t.dcl9MT),
            children: t
                ? (0, i.jsx)(g.dOc, {
                      size: 'xs',
                      color: 'currentColor',
                      className: O.closeIcon
                  })
                : (0, i.jsx)(g.bJT, {
                      size: 'xs',
                      color: 'currentColor',
                      className: O.closeIcon
                  })
        });
    },
    eo = (e) => {
        let { hasAnyThread: t, channel: n } = e,
            { onboardingExpanded: r } = (0, M.xH)((e) => {
                let { onboardingExpanded: t } = e;
                return { onboardingExpanded: t };
            }, d.X),
            { tagFilter: l } = (0, E.H)(n.id),
            s = (0, h.e7)([b.Z], () => b.Z.getGuild(n.getGuildId())),
            o = (0, R.r_)(n),
            { transitions: m, setVisible: x } = ee(),
            f = et(r),
            v = el(),
            C = W(n.id, x),
            {
                onboardingSteps: N,
                isDismissed: T,
                isHidden: I,
                isAllDone: S
            } = er({
                guild: s,
                channel: n,
                hasAnyThread: t,
                handleHide: C
            }),
            w = !I && !T,
            y = (0, M.AF)(),
            P = n.isMediaChannel(),
            k = (e) => y.getState().setOnboardingExpanded(e);
        return (Q(S, w, C),
        $({
            isAllDone: S,
            isVisible: w,
            canManageChannel: o,
            guildId: null == s ? void 0 : s.id,
            channel: n
        }),
        J(T, I, x),
        (0, p.ZP)(() => {
            (t && w) || k(!0);
        }),
        null == s)
            ? null
            : w && o
              ? P
                  ? t
                      ? null
                      : (0, i.jsx)(_.Z, { channel: n })
                  : (0, i.jsx)(i.Fragment, {
                        children: m((e, t) =>
                            t
                                ? (0, i.jsx)(c.animated.div, {
                                      style: e,
                                      className: O.container,
                                      children: (0, i.jsxs)('div', {
                                          className: O.wrapper,
                                          children: [
                                              (0, i.jsx)('div', {
                                                  className: O.headerRow,
                                                  children: (0, i.jsxs)(g.y5t, {
                                                      component: (0, i.jsx)(g.X6q, {
                                                          variant: 'heading-md/semibold',
                                                          children: F.intl.string(F.t.LhlgY2)
                                                      }),
                                                      children: [
                                                          (0, i.jsx)(g.X6q, {
                                                              variant: 'heading-md/medium',
                                                              className: O.header,
                                                              children: F.intl.format(F.t['9L+8b2'], {
                                                                  numCompleted: N.completedSteps.toString(),
                                                                  numSteps: N.steps.length.toString()
                                                              })
                                                          }),
                                                          (0, i.jsxs)(g.Text, {
                                                              variant: 'text-xs/normal',
                                                              className: O.visibilityInfo,
                                                              children: [
                                                                  (0, i.jsx)(g.d3s, {
                                                                      size: 'xxs',
                                                                      color: 'currentColor',
                                                                      className: O.icon
                                                                  }),
                                                                  F.intl.string(F.t.znhX2d)
                                                              ]
                                                          }),
                                                          (0, i.jsx)(es, {
                                                              expanded: r,
                                                              onClick: () => k(!r)
                                                          }),
                                                          (0, i.jsx)(ea, { handleHide: C })
                                                      ]
                                                  })
                                              }),
                                              f((e, t) =>
                                                  t
                                                      ? (0, i.jsx)(c.animated.div, {
                                                            style: e,
                                                            className: O.listContainer,
                                                            children: (0, i.jsx)('ol', {
                                                                className: O.checklist,
                                                                children: N.getSteps().map((e) =>
                                                                    (0, i.jsxs)(
                                                                        g.P3F,
                                                                        {
                                                                            tag: 'li',
                                                                            'aria-label': e.name,
                                                                            onClick: () => v(e),
                                                                            className: a()(O.stepContainer, { [O.completed]: e.isDone }),
                                                                            children: [
                                                                                e.shouldWarn
                                                                                    ? (0, i.jsx)(g.P4T, {
                                                                                          size: 'custom',
                                                                                          width: 20,
                                                                                          height: 20,
                                                                                          color: u.Z.STATUS_DANGER,
                                                                                          className: O.stepStatus
                                                                                      })
                                                                                    : e.isDone
                                                                                      ? (0, i.jsx)(g.G2e, {
                                                                                            color: u.Z.STATUS_POSITIVE_BACKGROUND,
                                                                                            icon: g.dz2,
                                                                                            style: B,
                                                                                            className: O.stepStatus
                                                                                        })
                                                                                      : (0, i.jsx)(g.G2e, {
                                                                                            disableColor: !0,
                                                                                            icon: (0, g.GSL)(j.Z),
                                                                                            style: D,
                                                                                            className: a()(O.stepStatus, O.completed)
                                                                                        }),
                                                                                (0, i.jsxs)('div', {
                                                                                    className: O.step,
                                                                                    children: [
                                                                                        (0, i.jsx)(g.Text, {
                                                                                            variant: 'text-md/medium',
                                                                                            color: e.isDone ? 'header-secondary' : 'header-primary',
                                                                                            className: O.stepName,
                                                                                            children: e.name
                                                                                        }),
                                                                                        (0, i.jsx)(g.Text, {
                                                                                            variant: 'text-sm/normal',
                                                                                            color: 'header-secondary',
                                                                                            className: O.stepDescription,
                                                                                            children: e.description
                                                                                        }),
                                                                                        e.children
                                                                                    ]
                                                                                }),
                                                                                (0, i.jsx)(g.Fbu, {
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
                : (0, i.jsx)(Z.Z, {
                      channelName: n.name,
                      guildId: n.guild_id,
                      tagFilter: l,
                      channel: n
                  });
    };
