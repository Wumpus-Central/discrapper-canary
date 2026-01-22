n.d(t, {
    A: () => S,
});
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(397927),
    l = n(854987),
    c = n(719718),
    u = n(57882),
    d = n(368327),
    f = n(818947),
    p = n(155286),
    _ = n(573138),
    h = n(877272),
    m = n(359588),
    g = n(532294),
    E = n(622865),
    b = n(985018),
    y = n(308021),
    O = n(881493),
    A = n(485508),
    v = n(656122);

function S() {
    let {
            messages: {
                numMessagesSent: e,
                numMessagesSentPercentile: t,
                topMonth: { month: n },
            } = {
                numMessagesSent: 0,
                numMessagesSentPercentile: 0,
                topMonth: {
                    month: 0,
                },
            },
        } = (0, s.bG)([c.A], () => c.A.getCheckpointData()),
        S = i.useContext(l.P),
        I = (0, o.rdh)(S.primaryColor).hex(),
        { monthName: T } = (0, u.od)(n, b.intl.currentLocale),
        C = null != t;
    return (0, r.jsxs)(_.A, {
        className: O.kL,
        children: [
            (0, r.jsx)(d.A, {
                className: O.Ki,
                slide: g.P7.MESSAGES,
                videoEntrySrc: A.A,
                videoLoopSrc: v.A,
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: y.DD,
                        children: [
                            (0, r.jsx)(a.oyn, {
                                size: "refresh_sm",
                                color: I,
                                colorClass: y.d7,
                                className: y.gr,
                            }),
                            (0, r.jsx)(h.A, {
                                variant: "eyebrow",
                                className: y.UP,
                                children: b.intl.format(E.default.nPTMHj, {
                                    numMessages: e,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(m.A, {
                        end: e,
                    }),
                    (0, r.jsx)(h.A, {
                        variant: "heading-xxl/medium",
                        className: O.VA,
                        children: C
                            ? b.intl.format(E.default.ixvOza, {
                                  percent: 100 - t,
                                  percentHook: (e, t) =>
                                      (0, r.jsx)(
                                          f.A,
                                          {
                                              children: e,
                                          },
                                          t,
                                      ),
                              })
                            : b.intl.format(E.default["Zd+Ej+"], {
                                  month: T,
                                  monthHook: (e, t) =>
                                      (0, r.jsx)(
                                          f.A,
                                          {
                                              children: e,
                                          },
                                          t,
                                      ),
                              }),
                    }),
                    (0, r.jsx)(p.e, {
                        slide: g.P7.MESSAGES,
                    }),
                ],
            }),
        ],
    });
}
