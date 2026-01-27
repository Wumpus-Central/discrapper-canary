n.d(t, {
    A: () => N,
});
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(158954),
    o = n(311907),
    c = n(397927),
    u = n(975807),
    d = n(975571),
    m = n(854987),
    f = n(719718),
    p = n(368327),
    h = n(818947),
    b = n(155286),
    g = n(573138),
    x = n(877272),
    y = n(359588),
    v = n(532294),
    j = n(652215),
    C = n(622865),
    _ = n(985018),
    A = n(308021),
    O = n(829252),
    E = n(416397),
    S = n(582165);

function N() {
    let e = (0, l.useContext)(m.P),
        t = (0, c.rdh)(e.primaryColor).hex(),
        {
            quests: { numOrbs: n, numCompleted: a } = {
                numOrbs: 0,
                numCompleted: 0,
            },
        } = (0, o.bG)([f.A], () => f.A.getCheckpointData()),
        N = 0 === a,
        I = () => {
            (0, u.A)(d.A.getArticleURL(j.MVz.QUESTS_LEARN_MORE));
        };
    return (0, r.jsxs)(g.A, {
        className: O.kL,
        children: [
            (0, r.jsx)(p.A, {
                className: O.Ki,
                slide: v.P7.QUESTS,
                videoEntrySrc: E.A,
                videoLoopSrc: S.A,
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: i()(A.DD, {
                            [O.p$]: N,
                        }),
                        children: [
                            (0, r.jsx)(s.r2v, {
                                size: "refresh_sm",
                                color: t,
                                colorClass: A.d7,
                                className: A.gr,
                            }),
                            (0, r.jsx)(x.A, {
                                variant: "eyebrow",
                                className: A.UP,
                                children: N ? _.intl.string(C.default.QkdNzt) : _.intl.string(C.default.qsFkSO),
                            }),
                        ],
                    }),
                    !N &&
                        (0, r.jsx)(y.A, {
                            end: a,
                        }),
                    (n > 0 || 0 === a) &&
                        (0, r.jsx)(x.A, {
                            variant: "heading-xxl/medium",
                            className: O.VA,
                            children:
                                0 === a
                                    ? _.intl.format(C.default.UYTBoT, {
                                          learnMoreHook: (e, t) =>
                                              (0, r.jsx)(
                                                  s.DUT,
                                                  {
                                                      onClick: I,
                                                      className: O.C2,
                                                      children: (0, r.jsx)(x.A, {
                                                          variant: "heading-xxl/medium",
                                                          className: O.nf,
                                                          children: e,
                                                      }),
                                                  },
                                                  t,
                                              ),
                                      })
                                    : _.intl.format(C.default["gd+Olh"], {
                                          numOrbs: n,
                                          orbsHook: (e, t) =>
                                              (0, r.jsxs)(
                                                  h.A,
                                                  {
                                                      children: [
                                                          (0, r.jsx)(s.Cp8, {
                                                              className: O.Uu,
                                                              color: c.LU0.colors.BLACK,
                                                          }),
                                                          e,
                                                      ],
                                                  },
                                                  t,
                                              ),
                                      }),
                        }),
                    (0, r.jsx)(b.e, {
                        slide: v.P7.QUESTS,
                    }),
                ],
            }),
        ],
    });
}
