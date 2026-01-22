n.d(t, { A: () => N });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    c = n(397927),
    u = n(975807),
    d = n(975571),
    f = n(854987),
    p = n(719718),
    _ = n(368327),
    h = n(818947),
    m = n(155286),
    g = n(573138),
    E = n(877272),
    b = n(359588),
    y = n(532294),
    O = n(652215),
    A = n(622865),
    v = n(985018),
    S = n(308021),
    I = n(829252),
    T = n(416397),
    C = n(582165);
function N() {
    let e = (0, i.useContext)(f.P),
        t = (0, c.rdh)(e.primaryColor).hex(),
        {
            quests: { numOrbs: n, numCompleted: a } = {
                numOrbs: 0,
                numCompleted: 0,
            },
        } = (0, l.bG)([p.A], () => p.A.getCheckpointData()),
        N = 0 === a,
        R = n > 0 || 0 === a,
        w = () => {
            (0, u.A)(d.A.getArticleURL(O.MVz.QUESTS_LEARN_MORE));
        };
    return (0, r.jsxs)(g.A, {
        className: I.kL,
        children: [
            (0, r.jsx)(_.A, {
                className: I.Ki,
                slide: y.P7.QUESTS,
                videoEntrySrc: T.A,
                videoLoopSrc: C.A,
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: s()(S.DD, { [I.p$]: N }),
                        children: [
                            (0, r.jsx)(o.r2v, {
                                size: "refresh_sm",
                                color: t,
                                colorClass: S.d7,
                                className: S.gr,
                            }),
                            (0, r.jsx)(E.A, {
                                variant: "eyebrow",
                                className: S.UP,
                                children: N ? v.intl.string(A.default.QkdNzt) : v.intl.string(A.default.qsFkSO),
                            }),
                        ],
                    }),
                    !N && (0, r.jsx)(b.A, { end: a }),
                    R &&
                        (0, r.jsx)(E.A, {
                            variant: "heading-xxl/medium",
                            className: I.VA,
                            children:
                                0 === a
                                    ? v.intl.format(A.default.UYTBoT, {
                                          learnMoreHook: (e, t) =>
                                              (0, r.jsx)(
                                                  o.DUT,
                                                  {
                                                      onClick: w,
                                                      className: I.C2,
                                                      children: (0, r.jsx)(E.A, {
                                                          variant: "heading-xxl/medium",
                                                          className: I.nf,
                                                          children: e,
                                                      }),
                                                  },
                                                  t,
                                              ),
                                      })
                                    : v.intl.format(A.default["gd+Olh"], {
                                          numOrbs: n,
                                          orbsHook: (e, t) =>
                                              (0, r.jsxs)(
                                                  h.A,
                                                  {
                                                      children: [
                                                          (0, r.jsx)(o.Cp8, {
                                                              className: I.Uu,
                                                              color: c.LU0.colors.BLACK,
                                                          }),
                                                          e,
                                                      ],
                                                  },
                                                  t,
                                              ),
                                      }),
                        }),
                    (0, r.jsx)(m.e, { slide: y.P7.QUESTS }),
                ],
            }),
        ],
    });
}
