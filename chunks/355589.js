n.d(t, { Z: () => ee }), n(539854), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(913527),
    o = n.n(s),
    c = n(205120),
    d = n(55160),
    u = n(149765),
    m = n(442837),
    h = n(692547),
    g = n(481060),
    f = n(787014),
    x = n(412899),
    p = n(493773),
    b = n(447003),
    j = n(621516),
    v = n(982168),
    _ = n(386923),
    C = n(474366),
    y = n(345162),
    T = n(485386),
    w = n(430824),
    S = n(186523),
    N = n(585483),
    O = n(70956),
    P = n(709054),
    I = n(961675),
    E = n(883429),
    R = n(993259),
    M = n(109434),
    Z = n(456269),
    k = n(228392),
    A = n(432771),
    L = n(538366),
    F = n(470623),
    D = n(710352),
    H = n(981631),
    z = n(388032),
    B = n(951718);
function U(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                U(e, t, n[t]);
            });
    }
    return e;
}
function V(e, t) {
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
let W = {
        width: 28,
        height: 28,
    },
    q = {
        width: 20,
        height: 20,
        borderRadius: 10,
    },
    K = (e) => {
        (0, k.e5)({ onboardingCTA: e });
    };
class X {
    addStep(e) {
        ++this.currentIndex, this.steps.push(G({ index: this.currentIndex }, e)), e.isDone && this.completedSteps++;
    }
    getSteps() {
        return this.steps;
    }
    isAllDone() {
        return this.steps.every((e) => e.isDone);
    }
    constructor() {
        U(this, "currentIndex", 0), U(this, "steps", []), U(this, "completedSteps", 0);
    }
}
let Y = (e) => {
        let { guild: t, roles: n } = e;
        return (0, r.jsx)("div", {
            className: B.rolesList,
            "aria-label": z.intl.formatToPlainString(z.t.PCs0oo, { numRoles: n.length }),
            children: n.map((e) =>
                (0, r.jsx)(
                    x.UB,
                    {
                        role: e,
                        canRemove: !1,
                        onRemove: H.VqG,
                        guildId: t.id,
                        className: B.rolePill,
                    },
                    e.id,
                ),
            ),
        });
    },
    J = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0,
    },
    Q = (e) => {
        let { handleHide: t } = e;
        return (0, r.jsx)(g.P3F, {
            onClick: t,
            className: B.closeButton,
            "aria-label": z.intl.string(z.t.WAI6xu),
            children: (0, r.jsx)(g.Dio, {
                size: "md",
                color: "currentColor",
                className: B.closeIcon,
            }),
        });
    },
    $ = (e) => {
        let { expanded: t, onClick: n } = e;
        return (0, r.jsx)(g.P3F, {
            onClick: n,
            className: B.closeButton,
            "aria-label": t ? z.intl.string(z.t.iTcuma) : z.intl.string(z.t.dcl9MQ),
            children: t
                ? (0, r.jsx)(g.dOc, {
                      size: "xs",
                      color: "currentColor",
                      className: B.closeIcon,
                  })
                : (0, r.jsx)(g.bJT, {
                      size: "xs",
                      color: "currentColor",
                      className: B.closeIcon,
                  }),
        });
    },
    ee = (e) => {
        let t,
            { hasAnyThread: l, hasActiveThreads: s, channel: x } = e,
            { onboardingExpanded: U } = (0, F.xH)((e) => {
                let { onboardingExpanded: t } = e;
                return { onboardingExpanded: t };
            }, d.X),
            { tagFilter: ee } = (0, M.H)(x.id),
            et = (0, m.e7)([w.Z], () => w.Z.getGuild(x.getGuildId())),
            en = (0, Z.r_)(x),
            { transitions: er, setVisible: ei } = (() => {
                let [e, t] = i.useState(!0);
                return {
                    transitions: (0, g.Yzy)(e, {
                        keys: (e) => (e ? "shown" : "hidden"),
                        config: J,
                        from: { opacity: 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        unique: !0,
                    }),
                    setVisible: t,
                };
            })(),
            el = (0, g.Yzy)(U, {
                from: { maxHeight: 0 },
                enter: { maxHeight: 500 },
                leave: { maxHeight: 0 },
                config: { duration: 200 },
            }),
            ea = i.useCallback((e) => {
                var t;
                null == (t = e.clickHandler) || t.call(e);
            }, []),
            es = ((t = x.id), i.useCallback(() => (ei(!1), E.Z.hideAdminOnboarding(t, !0)), [t, ei])),
            {
                onboardingSteps: eo,
                isDismissed: ec,
                isHidden: ed,
                isAllDone: eu,
            } = ((e) => {
                let { guild: t, channel: l, hasAnyThread: a, handleHide: s } = e,
                    [c, d] = i.useState(!1),
                    h = (0, A.c)(l.id),
                    x = (0, m.e7)([I.Z], () => I.Z.hasHidden(l.id)),
                    p = (function (e, t, l, a) {
                        let s = null == e ? void 0 : e.id,
                            o = (0, m.e7)([T.Z], () => (null != s ? T.Z.getSortedRoles(s) : void 0));
                        return i.useMemo(() => {
                            let i,
                                s = new X(),
                                c = (null == t ? void 0 : t.isMediaChannel()) === !0;
                            return (
                                null == e ||
                                    null == t ||
                                    c ||
                                    null == o ||
                                    s.addStep(
                                        (function (e, t, i, l) {
                                            let a = (0, b.Z)(i)
                                                    ? u.$e(H.Plq.VIEW_CHANNEL, H.Plq.SEND_MESSAGES)
                                                    : H.Plq.SEND_MESSAGES,
                                                s =
                                                    null != e
                                                        ? (0, R.E)(t, i, a).filter(
                                                              (e) =>
                                                                  i.permissionOverwrites.hasOwnProperty(e.id) ||
                                                                  (0, y.fI)(e),
                                                          )
                                                        : [],
                                                o = s.length > 0,
                                                c = s.some((e) => (0, y.fI)(e));
                                            return {
                                                name: z.intl.string(z.t["/Ax2gs"]),
                                                description: z.intl.string(z.t.gAIOfg),
                                                isDone: o && c,
                                                shouldWarn: o && !c,
                                                children: o
                                                    ? (0, r.jsx)(Y, {
                                                          guild: e,
                                                          roles: s,
                                                      })
                                                    : null,
                                                clickHandler: () => {
                                                    K(D.ZI.PERMISSIONS),
                                                        (0, g.ZDy)(
                                                            async () => {
                                                                let { default: t } = await n
                                                                    .e("78704")
                                                                    .then(n.bind(n, 560602));
                                                                return (
                                                                    l(!0),
                                                                    (n) =>
                                                                        (0, r.jsx)(
                                                                            t,
                                                                            V(G({}, n), {
                                                                                channel: i,
                                                                                guild: e,
                                                                                permission: a,
                                                                                currentSelectedRoles: s,
                                                                            }),
                                                                        )
                                                                );
                                                            },
                                                            {
                                                                modalKey: "SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY",
                                                                onCloseRequest: H.VqG,
                                                                onCloseCallback: () => l(!1),
                                                            },
                                                        );
                                                },
                                            };
                                        })(e, o, t, a),
                                    ),
                                c ||
                                    s.addStep(
                                        ((e) => {
                                            let t = null != e.topic && e.topic.length > 0;
                                            return {
                                                name: z.intl.string(z.t.UgJu1e),
                                                description: z.intl.string(z.t["3C6/G1"]),
                                                clickHandler: () => {
                                                    K(D.ZI.GUIDELINES), f.ZP.open(e.id, void 0, H.ZfP.TOPIC);
                                                },
                                                isDone: t,
                                            };
                                        })(t),
                                    ),
                                s.addStep(
                                    ((e) => {
                                        let t = null != e.availableTags && e.availableTags.length > 0;
                                        return {
                                            name: z.intl.string(z.t.xiBFCi),
                                            description: z.intl.string(z.t.wCv4Oz),
                                            clickHandler: () => {
                                                K(D.ZI.TAGS),
                                                    f.ZP.open(e.id),
                                                    (0, g.ZDy)(async () => {
                                                        let { default: t } = await n.e("21971").then(n.bind(n, 201049));
                                                        return (n) =>
                                                            (0, r.jsx)(
                                                                t,
                                                                V(G({}, n), {
                                                                    channelId: e.id,
                                                                    guildId: e.guild_id,
                                                                }),
                                                            );
                                                    });
                                            },
                                            isDone: t,
                                        };
                                    })(t),
                                ),
                                s.addStep(
                                    ((e) => {
                                        let t = null != e.defaultReactionEmoji;
                                        return {
                                            name: z.intl.string(z.t.QlyC9s),
                                            description: z.intl.string(z.t["+50LJg"]),
                                            clickHandler: () => {
                                                K(D.ZI.DEFAULT_REACTION),
                                                    (0, g.ZDy)(async () => {
                                                        let { default: t } = await n.e("80404").then(n.bind(n, 158586));
                                                        return (n) => (0, r.jsx)(t, V(G({}, n), { channel: e }));
                                                    });
                                            },
                                            isDone: t,
                                        };
                                    })(t),
                                ),
                                s.addStep(
                                    ((i = null == e ? void 0 : e.id),
                                    {
                                        name: z.intl.string(z.t["6A0O64"]),
                                        description: c
                                            ? z.intl.string(z.t["8hI5vr"])
                                            : z.intl.format(z.t.ysxcAw, {
                                                  onClick: (e) => {
                                                      null != i &&
                                                          (e.preventDefault(),
                                                          e.stopPropagation(),
                                                          (0, k.qz)(),
                                                          (0, g.ZDy)(async () => {
                                                              let { default: e } = await n
                                                                  .e("18417")
                                                                  .then(n.bind(n, 740696));
                                                              return (t) => (0, r.jsx)(e, V(G({}, t), { guildId: i }));
                                                          }));
                                                  },
                                              }),
                                        clickHandler: () => {
                                            K(D.ZI.CREATE_POST), N.S.dispatch(H.CkL.FOCUS_COMPOSER_TITLE);
                                        },
                                        isDone: l,
                                    }),
                                ),
                                s
                            );
                        }, [t, e, o, l, a]);
                    })(t, l, a, d),
                    j = p.isAllDone(),
                    v =
                        h ||
                        x ||
                        !((e) => {
                            let t = P.default.extractTimestamp(e);
                            return o()().isBefore(o()(t).add(o().duration(15, "days")));
                        })(l.id),
                    _ = i.useRef(0);
                return (
                    i.useEffect(
                        () => (
                            c || !j || v
                                ? clearTimeout(_.current)
                                : (_.current = setTimeout(() => {
                                      s();
                                  }, 60 * O.Z.Millis.SECOND)),
                            () => clearTimeout(_.current)
                        ),
                        [j, v, s, c],
                    ),
                    {
                        onboardingSteps: p,
                        isHidden: x,
                        isDismissed: h,
                        isAllDone: j,
                    }
                );
            })({
                guild: et,
                channel: x,
                hasAnyThread: l,
                handleHide: es,
            }),
            em = !ed && !ec,
            eh = (0, F.AF)(),
            eg = x.isMediaChannel(),
            ef = (e) => eh.getState().setOnboardingExpanded(e);
        return ((0, p.ZP)(() => {
            eu && em && es();
        }),
        ((e) => {
            let { isAllDone: t, isVisible: n, canManageChannel: r, guildId: l, channel: a } = e,
                s = (0, m.e7)([T.Z], () => (null != l ? T.Z.partitionVersion(l) : void 0)),
                o = i.useCallback(() => {
                    N.S.dispatch(H.CkL.REMEASURE_TARGET);
                }, []);
            i.useEffect(() => {
                o();
            }, [o, t, n, r, s, a.id, a.permissionOverwrites]);
        })({
            isAllDone: eu,
            isVisible: em,
            canManageChannel: en,
            guildId: null == et ? void 0 : et.id,
            channel: x,
        }),
        i.useEffect(() => {
            ec || ei(!ed);
        }, [ec, ei, ed]),
        (0, p.ZP)(() => {
            (l && em) || ef(!0);
        }),
        null == et)
            ? null
            : (0, v.iZ)(x)
              ? s || 0 !== ee.size
                  ? ee.size > 0
                      ? null
                      : (0, r.jsx)(_.Z, { guild: et })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(_.Z, { guild: et }), (0, r.jsx)(C.q, {})],
                    })
              : em && en
                ? eg
                    ? l
                        ? null
                        : (0, r.jsx)(j.Z, { channel: x })
                    : (0, r.jsx)(r.Fragment, {
                          children: er((e, t) =>
                              t
                                  ? (0, r.jsx)(c.animated.div, {
                                        style: e,
                                        className: B.container,
                                        children: (0, r.jsxs)("div", {
                                            className: B.wrapper,
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className: B.headerRow,
                                                    children: (0, r.jsxs)(g.y5t, {
                                                        component: (0, r.jsx)(g.Heading, {
                                                            variant: "heading-md/semibold",
                                                            children: z.intl.string(z.t.LhlgY9),
                                                        }),
                                                        children: [
                                                            (0, r.jsx)(g.Heading, {
                                                                variant: "heading-md/medium",
                                                                className: B.header,
                                                                children: z.intl.format(z.t["9L+8bz"], {
                                                                    numCompleted: eo.completedSteps.toString(),
                                                                    numSteps: eo.steps.length.toString(),
                                                                }),
                                                            }),
                                                            (0, r.jsxs)(g.Text, {
                                                                variant: "text-xs/normal",
                                                                className: B.visibilityInfo,
                                                                children: [
                                                                    (0, r.jsx)(g.d3s, {
                                                                        size: "xxs",
                                                                        color: "currentColor",
                                                                        className: B.icon,
                                                                    }),
                                                                    z.intl.string(z.t.znhX2R),
                                                                ],
                                                            }),
                                                            (0, r.jsx)($, {
                                                                expanded: U,
                                                                onClick: () => ef(!U),
                                                            }),
                                                            (0, r.jsx)(Q, { handleHide: es }),
                                                        ],
                                                    }),
                                                }),
                                                el((e, t) =>
                                                    t
                                                        ? (0, r.jsx)(c.animated.div, {
                                                              style: e,
                                                              className: B.listContainer,
                                                              children: (0, r.jsx)("ol", {
                                                                  className: B.checklist,
                                                                  children: eo.getSteps().map((e) =>
                                                                      (0, r.jsxs)(
                                                                          g.P3F,
                                                                          {
                                                                              tag: "li",
                                                                              "aria-label": e.name,
                                                                              onClick: () => ea(e),
                                                                              className: a()(B.stepContainer, {
                                                                                  [B.completed]: e.isDone,
                                                                              }),
                                                                              children: [
                                                                                  e.shouldWarn
                                                                                      ? (0, r.jsx)(g.Mgn, {
                                                                                            size: "custom",
                                                                                            width: 20,
                                                                                            height: 20,
                                                                                            color: h.Z.colors
                                                                                                .STATUS_DANGER.css,
                                                                                            className: B.stepStatus,
                                                                                        })
                                                                                      : e.isDone
                                                                                        ? (0, r.jsx)(g.G2e, {
                                                                                              color: h.Z.colors
                                                                                                  .STATUS_POSITIVE_BACKGROUND
                                                                                                  .css,
                                                                                              icon: g.dz2,
                                                                                              style: q,
                                                                                              className: B.stepStatus,
                                                                                          })
                                                                                        : (0, r.jsx)(g.G2e, {
                                                                                              disableColor: !0,
                                                                                              icon: (0, g.GSL)(S.Z),
                                                                                              style: W,
                                                                                              className: a()(
                                                                                                  B.stepStatus,
                                                                                                  B.completed,
                                                                                              ),
                                                                                          }),
                                                                                  (0, r.jsxs)("div", {
                                                                                      className: B.step,
                                                                                      children: [
                                                                                          (0, r.jsx)(g.Text, {
                                                                                              variant: "text-md/medium",
                                                                                              color: e.isDone
                                                                                                  ? "text-default"
                                                                                                  : "header-primary",
                                                                                              className: B.stepName,
                                                                                              children: e.name,
                                                                                          }),
                                                                                          (0, r.jsx)(g.Text, {
                                                                                              variant: "text-sm/normal",
                                                                                              color: "text-default",
                                                                                              className:
                                                                                                  B.stepDescription,
                                                                                              children: e.description,
                                                                                          }),
                                                                                          e.children,
                                                                                      ],
                                                                                  }),
                                                                                  (0, r.jsx)(g.Fbu, {
                                                                                      size: "custom",
                                                                                      color: "currentColor",
                                                                                      width: 12,
                                                                                      className: B.stepStatus,
                                                                                  }),
                                                                              ],
                                                                          },
                                                                          "onboard-step-".concat(e.index),
                                                                      ),
                                                                  ),
                                                              }),
                                                          })
                                                        : null,
                                                ),
                                            ],
                                        }),
                                    })
                                  : null,
                          ),
                      })
                : l
                  ? null
                  : (0, r.jsx)(L.Z, {
                        channelName: x.name,
                        guildId: x.guild_id,
                        tagFilter: ee,
                        channel: x,
                    });
    };
