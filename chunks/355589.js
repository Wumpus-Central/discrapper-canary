n.d(t, { Z: () => ee }), n(539854), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    s = n(913527),
    o = n.n(s),
    c = n(803948),
    d = n(524825),
    u = n(831209),
    m = n(149765),
    h = n(442837),
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
    w = n(485386),
    T = n(430824),
    O = n(186523),
    S = n(585483),
    P = n(70956),
    N = n(709054),
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
    z = n(981631),
    H = n(388032),
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
function V(e) {
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
function G(e, t) {
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
let q = {
        width: 28,
        height: 28,
    },
    W = {
        width: 20,
        height: 20,
        borderRadius: 10,
    },
    X = (e) => {
        (0, k.e5)({ onboardingCTA: e });
    };
class K {
    addStep(e) {
        ++this.currentIndex, this.steps.push(V({ index: this.currentIndex }, e)), e.isDone && this.completedSteps++;
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
let J = (e) => {
        let { guild: t, roles: n } = e;
        return (0, r.jsx)("div", {
            className: B.rolesList,
            "aria-label": H.intl.formatToPlainString(H.t.PCs0oq, { numRoles: n.length }),
            children: n.map((e) =>
                (0, r.jsx)(
                    x.UB,
                    {
                        role: e,
                        canRemove: !1,
                        onRemove: z.VqG,
                        guildId: t.id,
                        className: B.rolePill,
                    },
                    e.id,
                ),
            ),
        });
    },
    Y = {
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
            "aria-label": H.intl.string(H.t.WAI6xs),
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
            "aria-label": t ? H.intl.string(H.t.iTcumZ) : H.intl.string(H.t.dcl9MT),
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
            { hasAnyThread: a, hasActiveThreads: s, channel: x } = e,
            { onboardingExpanded: U } = (0, F.xH)((e) => {
                let { onboardingExpanded: t } = e;
                return { onboardingExpanded: t };
            }, d.X),
            { tagFilter: ee } = (0, M.H)(x.id),
            et = (0, h.e7)([T.Z], () => T.Z.getGuild(x.getGuildId())),
            en = (0, Z.r_)(x),
            { transitions: er, setVisible: ei } = (() => {
                let [e, t] = i.useState(!0);
                return {
                    transitions: (0, g.Yzy)(e, {
                        keys: (e) => (e ? "shown" : "hidden"),
                        config: Y,
                        from: { opacity: 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        unique: !0,
                    }),
                    setVisible: t,
                };
            })(),
            ea = (0, g.Yzy)(U, {
                from: { maxHeight: 0 },
                enter: { maxHeight: 500 },
                leave: { maxHeight: 0 },
                config: { duration: 200 },
            }),
            el = i.useCallback((e) => {
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
                let { guild: t, channel: a, hasAnyThread: l, handleHide: s } = e,
                    [c, d] = i.useState(!1),
                    u = (0, A.c)(a.id),
                    x = (0, h.e7)([I.Z], () => I.Z.hasHidden(a.id)),
                    p = (function (e, t, a, l) {
                        let s = null == e ? void 0 : e.id,
                            o = (0, h.e7)([w.Z], () => (null != s ? w.Z.getSortedRoles(s) : void 0));
                        return i.useMemo(() => {
                            let i,
                                s = new K(),
                                c = (null == t ? void 0 : t.isMediaChannel()) === !0;
                            return (
                                null == e ||
                                    null == t ||
                                    c ||
                                    null == o ||
                                    s.addStep(
                                        (function (e, t, i, a) {
                                            let l = (0, b.Z)(i)
                                                    ? m.$e(z.Plq.VIEW_CHANNEL, z.Plq.SEND_MESSAGES)
                                                    : z.Plq.SEND_MESSAGES,
                                                s =
                                                    null != e
                                                        ? (0, R.E)(t, i, l).filter(
                                                              (e) =>
                                                                  i.permissionOverwrites.hasOwnProperty(e.id) ||
                                                                  (0, y.fI)(e),
                                                          )
                                                        : [],
                                                o = s.length > 0,
                                                c = s.some((e) => (0, y.fI)(e));
                                            return {
                                                name: H.intl.string(H.t["/Ax2go"]),
                                                description: H.intl.string(H.t.gAIOfn),
                                                isDone: o && c,
                                                shouldWarn: o && !c,
                                                children: o
                                                    ? (0, r.jsx)(J, {
                                                          guild: e,
                                                          roles: s,
                                                      })
                                                    : null,
                                                clickHandler: () => {
                                                    X(D.ZI.PERMISSIONS),
                                                        (0, g.ZDy)(
                                                            async () => {
                                                                let { default: t } = await n
                                                                    .e("78704")
                                                                    .then(n.bind(n, 560602));
                                                                return (
                                                                    a(!0),
                                                                    (n) =>
                                                                        (0, r.jsx)(
                                                                            t,
                                                                            G(V({}, n), {
                                                                                channel: i,
                                                                                guild: e,
                                                                                permission: l,
                                                                                currentSelectedRoles: s,
                                                                            }),
                                                                        )
                                                                );
                                                            },
                                                            {
                                                                modalKey: "SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY",
                                                                onCloseRequest: z.VqG,
                                                                onCloseCallback: () => a(!1),
                                                            },
                                                        );
                                                },
                                            };
                                        })(e, o, t, l),
                                    ),
                                c ||
                                    s.addStep(
                                        ((e) => {
                                            let t = null != e.topic && e.topic.length > 0;
                                            return {
                                                name: H.intl.string(H.t.UgJu1d),
                                                description: H.intl.string(H.t["3C6/Gx"]),
                                                clickHandler: () => {
                                                    X(D.ZI.GUIDELINES), f.ZP.open(e.id, void 0, z.ZfP.TOPIC);
                                                },
                                                isDone: t,
                                            };
                                        })(t),
                                    ),
                                s.addStep(
                                    ((e) => {
                                        let t = null != e.availableTags && e.availableTags.length > 0;
                                        return {
                                            name: H.intl.string(H.t.xiBFCg),
                                            description: H.intl.string(H.t.wCv4Oz),
                                            clickHandler: () => {
                                                X(D.ZI.TAGS),
                                                    f.ZP.open(e.id),
                                                    (0, g.ZDy)(async () => {
                                                        let { default: t } = await n.e("21971").then(n.bind(n, 201049));
                                                        return (n) =>
                                                            (0, r.jsx)(
                                                                t,
                                                                G(V({}, n), {
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
                                            name: H.intl.string(H.t.QlyC9v),
                                            description: H.intl.string(H.t["+50LJi"]),
                                            clickHandler: () => {
                                                X(D.ZI.DEFAULT_REACTION),
                                                    (0, g.ZDy)(async () => {
                                                        let { default: t } = await n.e("80404").then(n.bind(n, 158586));
                                                        return (n) => (0, r.jsx)(t, G(V({}, n), { channel: e }));
                                                    });
                                            },
                                            isDone: t,
                                        };
                                    })(t),
                                ),
                                s.addStep(
                                    ((i = null == e ? void 0 : e.id),
                                    {
                                        name: H.intl.string(H.t["6A0O6+"]),
                                        description: c
                                            ? H.intl.string(H.t["8hI5vr"])
                                            : H.intl.format(H.t.ysxcAw, {
                                                  onClick: (e) => {
                                                      null != i &&
                                                          (e.preventDefault(),
                                                          e.stopPropagation(),
                                                          (0, k.qz)(),
                                                          (0, g.ZDy)(async () => {
                                                              let { default: e } = await n
                                                                  .e("18417")
                                                                  .then(n.bind(n, 740696));
                                                              return (t) => (0, r.jsx)(e, G(V({}, t), { guildId: i }));
                                                          }));
                                                  },
                                              }),
                                        clickHandler: () => {
                                            X(D.ZI.CREATE_POST), S.S.dispatch(z.CkL.FOCUS_COMPOSER_TITLE);
                                        },
                                        isDone: a,
                                    }),
                                ),
                                s
                            );
                        }, [t, e, o, a, l]);
                    })(t, a, l, d),
                    j = p.isAllDone(),
                    v =
                        u ||
                        x ||
                        !((e) => {
                            let t = N.default.extractTimestamp(e);
                            return o()().isBefore(o()(t).add(o().duration(15, "days")));
                        })(a.id),
                    _ = i.useRef(0);
                return (
                    i.useEffect(
                        () => (
                            c || !j || v
                                ? clearTimeout(_.current)
                                : (_.current = setTimeout(() => {
                                      s();
                                  }, 60 * P.Z.Millis.SECOND)),
                            () => clearTimeout(_.current)
                        ),
                        [j, v, s, c],
                    ),
                    {
                        onboardingSteps: p,
                        isHidden: x,
                        isDismissed: u,
                        isAllDone: j,
                    }
                );
            })({
                guild: et,
                channel: x,
                hasAnyThread: a,
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
            let { isAllDone: t, isVisible: n, canManageChannel: r, guildId: a, channel: l } = e,
                s = (0, h.e7)([w.Z], () => (null != a ? w.Z.partitionVersion(a) : void 0)),
                o = i.useCallback(() => {
                    S.S.dispatch(z.CkL.REMEASURE_TARGET);
                }, []);
            i.useEffect(() => {
                o();
            }, [o, t, n, r, s, l.id, l.permissionOverwrites]);
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
            (a && em) || ef(!0);
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
                    ? a
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
                                                        component: (0, r.jsx)(g.X6q, {
                                                            variant: "heading-md/semibold",
                                                            children: H.intl.string(H.t.LhlgY2),
                                                        }),
                                                        children: [
                                                            (0, r.jsx)(g.X6q, {
                                                                variant: "heading-md/medium",
                                                                className: B.header,
                                                                children: H.intl.format(H.t["9L+8b2"], {
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
                                                                    H.intl.string(H.t.znhX2d),
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
                                                ea((e, t) =>
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
                                                                              onClick: () => el(e),
                                                                              className: l()(B.stepContainer, {
                                                                                  [B.completed]: e.isDone,
                                                                              }),
                                                                              children: [
                                                                                  e.shouldWarn
                                                                                      ? (0, r.jsx)(g.Mgn, {
                                                                                            size: "custom",
                                                                                            width: 20,
                                                                                            height: 20,
                                                                                            color: u.Z.STATUS_DANGER,
                                                                                            className: B.stepStatus,
                                                                                        })
                                                                                      : e.isDone
                                                                                        ? (0, r.jsx)(g.G2e, {
                                                                                              color: u.Z
                                                                                                  .STATUS_POSITIVE_BACKGROUND,
                                                                                              icon: g.dz2,
                                                                                              style: W,
                                                                                              className: B.stepStatus,
                                                                                          })
                                                                                        : (0, r.jsx)(g.G2e, {
                                                                                              disableColor: !0,
                                                                                              icon: (0, g.GSL)(O.Z),
                                                                                              style: q,
                                                                                              className: l()(
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
                                                                                                  ? "header-secondary"
                                                                                                  : "header-primary",
                                                                                              className: B.stepName,
                                                                                              children: e.name,
                                                                                          }),
                                                                                          (0, r.jsx)(g.Text, {
                                                                                              variant: "text-sm/normal",
                                                                                              color: "header-secondary",
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
                : a
                  ? null
                  : (0, r.jsx)(L.Z, {
                        channelName: x.name,
                        guildId: x.guild_id,
                        tagFilter: ee,
                        channel: x,
                    });
    };
