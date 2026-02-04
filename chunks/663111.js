n.d(t, {
    M: () => T,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(960488),
    o = n(311907),
    c = n(435371),
    u = n(397927),
    d = n(587895),
    p = n(545167),
    h = n(515610),
    g = n(91242),
    m = n(263063),
    f = n(394953),
    A = n(793322),
    _ = n(734057),
    b = n(71393),
    E = n(309010),
    O = n(967198),
    y = n(486020),
    I = n(652215),
    v = n(165610),
    S = n(985018),
    C = n(842130),
    N = n(878251);

function T(e) {
    var t, n;
    let l,
        { withFastTravel: T, focusSectionProps: j } = e,
        x = (0, s.zy)(),
        P = (0, o.bG)([O.A], () => O.A.getGuildId()),
        w = (0, o.bG)([E.A], () => E.A.getChannelId()),
        L = (0, o.bG)([_.A], () => _.A.getChannel(w), [w]),
        R = null != P ? P : null == L ? void 0 : L.guild_id,
        D = (0, o.bG)([b.A], () => b.A.getGuild(R), [R]),
        M = (0, h.A)(),
        k = (0, f.lI)(),
        { guildTitleIconSize: U, guildIconSize: G } = (0, p.pz)({
            location: "GuildTitle",
        }),
        { application: V, isFrameInFocusedMode: B } = (0, o.cf)([d.A, g.A], () => {
            let e = g.A.getConnectedFrame();
            return {
                application: d.A.getApplication(null == e ? void 0 : e.applicationId),
                isFrameInFocusedMode: g.A.getFrameLayoutMode() === v.y.FOCUSED,
            };
        }),
        H =
            null != V
                ? y.Ay.getApplicationIconURL({
                      id: V.id,
                      icon: V.icon,
                      bot: V.bot,
                  })
                : void 0,
        F = null;
    null != V && B
        ? ((l = V.name),
          (F = (0, r.jsx)("img", {
              className: N.Z2,
              alt: S.intl.string(S.t.X4IxWL),
              src: H,
              "aria-hidden": !0,
              draggable: !1,
          })))
        : k
          ? ((l = S.intl.string(S.t.HcoRu0)),
            (F = (0, r.jsx)(u.XFE, {
                size: U,
            })))
          : null != D
            ? ((F = M
                  ? (0, r.jsx)(u.Gg5, {
                        size: U,
                    })
                  : (0, r.jsx)(m.A, {
                        guild: D,
                        size: G,
                        active: !0,
                        className: N.$f,
                    })),
              (l = D.name))
            : null != L && (L.isDM() || L.isGroupDM())
              ? ((l = S.intl.string(S.t.YUU0RF)),
                (F = (0, r.jsx)(u.pVd, {
                    size: U,
                })))
              : x.pathname.startsWith(I.BVt.ICYMI)
                ? ((l = S.intl.string(S.t["jnXV/V"])),
                  (F = (0, r.jsx)(u.gXB, {
                      size: U,
                  })))
                : x.pathname.startsWith(I.BVt.GLOBAL_DISCOVERY)
                  ? ((l = S.intl.string(S.t["4nEZLk"])),
                    (F = (0, r.jsx)(u.QGJ, {
                        size: U,
                    })))
                  : x.pathname.startsWith(I.BVt.NITRO_HOME)
                    ? ((l = S.intl.string(S.t.Ipxkog)),
                      (F = (0, r.jsx)(u.tvc, {
                          size: U,
                      })))
                    : x.pathname.startsWith(I.BVt.COLLECTIBLES_SHOP)
                      ? ((l = S.intl.string(S.t.pWG4ze)),
                        (F = (0, r.jsx)(u.U1X, {
                            size: U,
                        })))
                      : x.pathname.startsWith(I.BVt.FRIENDS)
                        ? ((l = S.intl.string(S.t.TdEu5X)),
                          (F = (0, r.jsx)(u.$yI, {
                              size: U,
                          })))
                        : x.pathname.startsWith(I.BVt.FAMILY_CENTER)
                          ? ((l = S.intl.string(C.default.RZqaJn)),
                            (F = (0, r.jsx)(u.nFg, {
                                size: U,
                            })))
                          : x.pathname.startsWith(I.BVt.QUEST_HOME_V2) &&
                            ((l = S.intl.string(S.t.JALI2K)),
                            (F = (0, r.jsx)(u.r2v, {
                                size: U,
                            })));
    let Y = i.useCallback((e) => {
            (0, A.L$)("fast-travel");
        }, []),
        K = (null == l || "" === l) && T ? S.intl.string(S.t.ZvKwYa) : l;
    return null == K || "" === K
        ? null
        : (0, r.jsx)(c.m_, {
              shouldShow: T,
              ariaHidden: !0,
              text: S.intl.string(S.t["7P/+qz"]),
              keyboardShortcut: ["mod", "k"],
              children: (0, r.jsxs)(
                  u.DUT,
                  ((t = (function (e) {
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
                                  var r;
                                  (r = n[t]),
                                      t in e
                                          ? Object.defineProperty(e, t, {
                                                value: r,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0,
                                            })
                                          : (e[t] = r);
                              });
                      }
                      return e;
                  })(
                      {
                          className: a()(N.DD, {
                              [N.Nt]: T,
                          }),
                          "aria-label": S.intl.string(S.t["7P/+qz"]),
                      },
                      j,
                  )),
                  (n = n =
                      {
                          onClick: T ? Y : void 0,
                          children: [
                              F,
                              (0, r.jsx)(u.Text, {
                                  variant: "text-sm/medium",
                                  lineClamp: 1,
                                  children: K,
                              }),
                              T &&
                                  (0, r.jsx)(u._BQ, {
                                      className: N.c8,
                                      size: "xs",
                                  }),
                          ],
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
                  t),
              ),
          });
}
