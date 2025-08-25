n.d(t, { Z: () => Z }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(210887),
    u = n(617136),
    d = n(509212),
    p = n(272008),
    f = n(113434),
    h = n(569984),
    g = n(497505),
    m = n(373370),
    b = n(475595),
    _ = n(566078),
    O = n(602667),
    E = n(611855),
    y = n(110560),
    v = n(670638),
    I = n(667105),
    C = n(860151),
    S = n(46140),
    N = n(981631),
    T = n(388032),
    P = n(408228);
function j(e) {
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
}
function x(e) {
    var t;
    let { quest: n } = e,
        i = (0, f.B6)(n.config.expiresAt),
        l = (0, f.B6)(_.r.build(n.config).rewardsExpireAt),
        a = (0, o.e7)([c.Z], () => c.Z.getState().theme),
        u = (0, s.wjy)(a) ? N.BRd.DARK : N.BRd.LIGHT,
        d = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null;
    return (0, r.jsxs)("div", {
        className: P.heading,
        children: [
            (0, r.jsx)("img", {
                className: P.headingGameTile,
                alt: "",
                src: (0, b.fh)(n, b.eC.GAME_TILE, u).url,
            }),
            (0, r.jsxs)("div", {
                className: P.headingCopy,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: d
                            ? T.intl.string(T.t.XBboAA)
                            : T.intl.formatToPlainString(T.t.EQa7oq, { questName: n.config.messages.questName }),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: d
                            ? T.intl.formatToPlainString(T.t.APddvL, { expirationDate: l })
                            : T.intl.formatToPlainString(T.t["pX+fmp"], { expirationDate: i }),
                    }),
                ],
            }),
        ],
    });
}
function A(e) {
    var t, n, l, c;
    let { nodeRef: b, quest: _ } = e,
        O = (0, u.O5)(),
        N = (0, o.e7)([h.Z], () => h.Z.isEnrolling(_.id), [_]),
        A = (0, o.e7)([h.Z], () => null != h.Z.questEnrollmentBlockedUntil, []),
        [Z, w] = i.useState(!1),
        L = i.useCallback(() => w(!0), []),
        R = i.useCallback(() => w(!1), []),
        D = i.useCallback((e) => {
            e.stopPropagation();
        }, []),
        k = i.useCallback(() => {
            (0, p.AH)(_.id, {
                questContent: g.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.ACCEPT_QUEST,
                sourceQuestContent: g.jn.ACTIVITY_PANEL,
            });
        }, [_]),
        M = i.useCallback(() => {
            null != _ &&
                (O({
                    questId: _.id,
                    questContent: g.jn.ACTIVITY_PANEL,
                    questContentCTA: u.jZ.TRACK_PROGRESS,
                    sourceQuestContent: g.jn.ACTIVITY_PANEL,
                }),
                (0, y.navigateToQuestHome)({
                    fromContent: g.jn.ACTIVITY_PANEL,
                    questId: _.id,
                }));
        }, [_, O]),
        U = i.useCallback(() => {
            O({
                questId: _.id,
                questContent: g.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.LEARN_MORE,
                sourceQuestContent: g.jn.ACTIVITY_PANEL,
            }),
                (0, y.navigateToQuestHome)({
                    fromContent: g.jn.ACTIVITY_PANEL,
                    questId: _.id,
                });
        }, [_.id, O]),
        G = (0, I.hf)({
            quest: _,
            questContent: g.jn.ACTIVITY_PANEL,
            sourceQuestContent: g.jn.ACTIVITY_PANEL,
        }),
        B = (0, f.tP)(_),
        V = (null == (t = _.userStatus) ? void 0 : t.enrolledAt) != null,
        H = (null == (n = _.userStatus) ? void 0 : n.completedAt) != null,
        F = (null == (l = _.userStatus) ? void 0 : l.claimedAt) != null,
        z = (null == _ ? void 0 : _.userStatus) != null && (0, d.zE)(_.userStatus, g.jn.ACTIVITY_PANEL),
        W = (0, f.Rf)(_),
        Y = (0, m.DD)({
            quest: _,
            taskDetails: W,
            location: S.dr.ACTIVITY_PANEL,
            questContent: g.jn.ACTIVITY_PANEL,
            sourceQuestContent: g.jn.ACTIVITY_PANEL,
        });
    return z || B || F || A
        ? null
        : (0, r.jsxs)("div", {
              ref: (e) => {
                  b.current = e;
              },
              className: a()(P.wrapper, { [P.wrapperQuestAccepted]: V }),
              onClick: D,
              onKeyPress: D,
              onFocus: L,
              onMouseEnter: L,
              onBlur: R,
              onMouseLeave: R,
              children: [
                  (0, r.jsxs)("div", {
                      className: P.utils,
                      children: [
                          V ? (0, r.jsx)(x, { quest: _ }) : (0, r.jsx)(E.Z, {}),
                          (0, r.jsx)(v.r, {
                              quest: _,
                              questContent: g.jn.ACTIVITY_PANEL,
                              shouldShowDisclosure: (null == (c = _.userStatus) ? void 0 : c.enrolledAt) == null,
                              showShareLink: !0,
                              sourceQuestContent: g.jn.ACTIVITY_PANEL,
                              children: (e) => {
                                  var t, n;
                                  return (0, r.jsx)(
                                      s.P3F,
                                      ((t = j({}, e)),
                                      (n = n =
                                          {
                                              "aria-label": T.intl.string(T.t.DEoVWV),
                                              children: (0, r.jsx)(s.xhG, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: P.submenuIcon,
                                              }),
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
                                  );
                              },
                          }),
                      ],
                  }),
                  !V &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(x, { quest: _ }),
                              (0, r.jsx)("div", {
                                  className: P.instructions,
                                  children: (0, r.jsx)(s.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: Y,
                                  }),
                              }),
                          ],
                      }),
                  V &&
                      !H &&
                      (0, r.jsx)(C.Z, {
                          autoplay: Z,
                          className: P.rewardTileWithInstructions,
                          quest: _,
                          questContent: g.jn.ACTIVITY_PANEL,
                          location: S.dr.ACTIVITY_PANEL,
                          taskDetails: W,
                          sourceQuestContent: g.jn.ACTIVITY_PANEL,
                      }),
                  (0, r.jsxs)("div", {
                      className: P.ctas,
                      children: [
                          !V &&
                              (0, r.jsxs)(s.hE2, {
                                  size: "sm",
                                  fullWidth: !0,
                                  children: [
                                      (0, r.jsx)(s.zxk, {
                                          variant: "secondary",
                                          text: T.intl.string(T.t.LLLLPD),
                                          onClick: U,
                                      }),
                                      (0, r.jsx)(s.zxk, {
                                          variant: "primary",
                                          text: T.intl.string(T.t.l7E81t),
                                          onClick: k,
                                          loading: N,
                                      }),
                                  ],
                              }),
                          V &&
                              !H &&
                              (0, r.jsx)(s.zxk, {
                                  variant: "primary",
                                  size: "sm",
                                  fullWidth: !0,
                                  text: T.intl.string(T.t.VN1Ajo),
                                  onClick: M,
                              }),
                          H &&
                              (0, r.jsx)(s.zxk, {
                                  variant: "primary",
                                  size: "sm",
                                  fullWidth: !0,
                                  text: T.intl.string(T.t.cfY4PD),
                                  onClick: G,
                              }),
                      ],
                  }),
              ],
          });
}
let Z = function (e) {
    return (0, r.jsx)(O.A, {
        questOrQuests: e.quest,
        questContent: g.jn.ACTIVITY_PANEL,
        sourceQuestContent: g.jn.ACTIVITY_PANEL,
        children: (t) => (0, r.jsx)(A, j({ nodeRef: t }, e)),
    });
};
