n.d(t, { A: () => I });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(773690),
    o = n(311907),
    d = n(397927),
    c = n(765671),
    u = n(775602),
    m = n(409626),
    h = n(106799),
    x = n(714510),
    p = n(890687),
    g = n(710969),
    _ = n(92246),
    f = n(895253),
    v = n(453384),
    b = n(646764),
    j = n(398025),
    A = n(516226),
    C = n(720875),
    y = n(713457),
    S = n(419367),
    T = n(985018),
    E = n(582251);
let N = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));
function I(e) {
    let {
            quest: t,
            questContent: n,
            isHovering: s,
            contentPosition: I,
            rowIndex: k,
            isVisibleInViewport: R,
            onReceiveErrorHints: w,
            sourceQuestContent: D,
        } = e,
        P = i.useRef(null),
        M = (0, p.Oq)(),
        L = (0, p.SD)(t),
        U = (0, _.mq)(t.config),
        B = (0, _.mH)(t.config),
        G = t.userStatus?.enrolledAt != null,
        { ref: F, scrollHeight: V } = (0, c.wR)(),
        W = 104 !== V,
        { onAssetLoadComplete: H } = i.useContext(A.M),
        { expansionSpring: K } = (0, d.zhh)({ expansionSpring: +!!s, config: { ...S.N, clamp: !0 } }),
        z = t.userStatus?.completedAt != null,
        $ = t.userStatus?.claimedAt != null,
        q = (0, _.ks)(t.config),
        Q = (0, _._Z)(t.config),
        { completedRatio: Y, completedRatioDisplay: J } = (0, p.O9)(t),
        X = (0, x.gj)(t, D, m.Ob.QuestHome, P),
        Z = i.useMemo(
            () =>
                $ && q
                    ? T.intl.format(T.t["8Op4c4"], {
                          balanceHook: () =>
                              (0, a.jsxs)(
                                  O,
                                  {
                                      questId: t.id,
                                      children: [
                                          (0, a.jsx)(h.A, { shouldUseThemeColor: !0, className: E.Kq, customSize: 14 }),
                                          Q,
                                      ],
                                  },
                                  t.id,
                              ),
                      })
                    : $
                      ? (0, a.jsx)(O, { questId: t.id, children: U })
                      : q
                        ? T.intl.format(T.t.ro1sze, {
                              balanceHook: () =>
                                  (0, a.jsxs)(
                                      O,
                                      {
                                          questId: t.id,
                                          children: [
                                              (0, a.jsx)(h.A, {
                                                  shouldUseThemeColor: !0,
                                                  className: E.Kq,
                                                  customSize: 14,
                                              }),
                                              Q,
                                          ],
                                      },
                                      t.id,
                                  ),
                          })
                        : T.intl.format(T.t["0IUT4Y"], {
                              rewardWithArticleHook: () => (0, a.jsx)(O, { questId: t.id, children: B }, t.id),
                          }),
            [U, $, B, t.id, Q, q],
        ),
        ee = i.useMemo(() => {
            if (null != X)
                return (0, a.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: E.h_,
                    children: X,
                });
        }, [X]),
        et = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    return (0, a.jsxs)("div", {
        className: E.kL,
        ref: P,
        children: [
            (0, a.jsx)(f.A, { visible: M && L, glow: !0 }),
            (0, a.jsxs)(r.animated.div, {
                style: { maxHeight: K.to([0, 1], [104, (V ?? 0) + 12]) },
                className: E.z,
                children: [
                    (0, a.jsx)(C.A, {
                        showPlaceholder: !R,
                        width: 80,
                        height: 80,
                        children: (0, a.jsxs)("div", {
                            className: E.c6,
                            children: [
                                !$ && z && (0, a.jsx)("div", { className: E.Nz }),
                                G
                                    ? (0, a.jsxs)("div", {
                                          className: E.Tr,
                                          children: [
                                              z &&
                                                  (0, a.jsx)(d.akl, {
                                                      importData: N,
                                                      className: E.t_,
                                                      loop: !1,
                                                      autoplay: !1,
                                                      shouldAnimate: !et,
                                                  }),
                                              (0, a.jsx)(v.A, {
                                                  size: 76,
                                                  percentComplete: Y,
                                                  percentCompleteText: s && !(0, g.Ic)(t) ? J : void 0,
                                                  children: (0, a.jsx)(b.A, {
                                                      quest: t,
                                                      questContent: n,
                                                      autoplay: s,
                                                      onLoadComplete: H,
                                                      lazyLoad: !0,
                                                      fullWidth: !0,
                                                      sourceQuestContent: D,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)(b.A, {
                                          quest: t,
                                          autoplay: s,
                                          questContent: n,
                                          className: E.eB,
                                          onLoadComplete: H,
                                          lazyLoad: !0,
                                          sourceQuestContent: D,
                                      }),
                            ],
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        ref: F,
                        className: l()(E.FS, { [E.wq]: !W }),
                        children: [
                            (0, a.jsx)(d.Heading, {
                                variant: "eyebrow",
                                color: "text-brand",
                                className: E.G$,
                                children: T.intl.format(T.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            (0, a.jsx)(d.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: E.wx,
                                children: Z,
                            }),
                            ee,
                        ],
                    }),
                    W &&
                        (0, a.jsx)(r.animated.div, {
                            style: { opacity: (0, j.a)(K.to([0, 1], [1, 0])) },
                            className: E.hS,
                        }),
                ],
            }),
            (0, a.jsx)(y.A, {
                quest: t,
                questContent: n,
                contentPosition: I,
                rowIndex: k,
                onReceiveErrorHints: w,
                sourceQuestContent: D,
            }),
        ],
    });
}
let O = i.memo(function (e) {
    let { questId: t, children: n } = e;
    return (0, a.jsx)(
        d.Text,
        { variant: "text-md/semibold", color: "text-strong", tag: "span", className: E.wx, children: n },
        `${t}_reward`,
    );
});
