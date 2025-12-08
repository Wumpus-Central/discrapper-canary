n.d(t, { Z: () => N });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(481060),
    u = n(782568),
    d = n(63063),
    f = n(324060),
    p = n(5888),
    _ = n(275189),
    m = n(489658),
    h = n(909397),
    g = n(198358),
    E = n(391876),
    b = n(947189),
    y = n(612776),
    O = n(981631),
    v = n(860076),
    S = n(388032),
    I = n(417788),
    T = n(763645),
    A = n(868981),
    C = n(918746);
function N() {
    let e = (0, i.useContext)(f.Q),
        t = (0, c.dQu)(e.primaryColor).hex(),
        {
            quests: { numOrbs: n, numCompleted: a } = {
                numOrbs: 0,
                numCompleted: 0,
            },
        } = (0, l.e7)([p.Z], () => p.Z.getCheckpointData()),
        N = 0 === a,
        P = n > 0 || 0 === a,
        R = () => {
            (0, u.Z)(d.Z.getArticleURL(O.BhN.QUESTS_LEARN_MORE));
        };
    return (0, r.jsxs)(g.Z, {
        className: T.container,
        children: [
            (0, r.jsx)(_.Z, {
                className: T.video,
                slide: y.yD.QUESTS,
                videoEntrySrc: A.Z,
                videoLoopSrc: C.Z,
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: o()(I.title, { [T.emptyState]: N }),
                        children: [
                            (0, r.jsx)(s.qDn, {
                                size: "refresh_sm",
                                color: t,
                                colorClass: I.iconColor,
                                className: I.titleIcon,
                            }),
                            (0, r.jsx)(E.Z, {
                                variant: "eyebrow",
                                className: I.eyebrow,
                                children: N ? S.intl.string(v.default.QkdNzt) : S.intl.string(v.default.qsFkSO),
                            }),
                        ],
                    }),
                    !N && (0, r.jsx)(b.Z, { end: a }),
                    P &&
                        (0, r.jsx)(E.Z, {
                            variant: "heading-xxl/medium",
                            className: T.subtitle,
                            children:
                                0 === a
                                    ? S.intl.format(v.default.UYTBoT, {
                                          learnMoreHook: (e, t) =>
                                              (0, r.jsx)(
                                                  s.P3F,
                                                  {
                                                      onClick: R,
                                                      className: T.learnMore,
                                                      children: (0, r.jsx)(E.Z, {
                                                          variant: "heading-xxl/medium",
                                                          className: T.link,
                                                          children: e,
                                                      }),
                                                  },
                                                  t,
                                              ),
                                      })
                                    : S.intl.format(v.default["gd+Olh"], {
                                          numOrbs: n,
                                          orbsHook: (e, t) =>
                                              (0, r.jsxs)(
                                                  m.Z,
                                                  {
                                                      children: [
                                                          (0, r.jsx)(s.aQr, {
                                                              className: T.orbsIcon,
                                                              color: c.TVs.colors.BLACK,
                                                          }),
                                                          e,
                                                      ],
                                                  },
                                                  t,
                                              ),
                                      }),
                        }),
                    (0, r.jsx)(h.o, { slide: y.yD.QUESTS }),
                ],
            }),
        ],
    });
}
