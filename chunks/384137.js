n.d(t, {
    A: () => A,
});
var r = n(627968),
    l = n(64700),
    a = n(158954),
    i = n(311907),
    s = n(397927),
    o = n(854987),
    c = n(719718),
    u = n(57882),
    d = n(368327),
    m = n(818947),
    f = n(155286),
    p = n(573138),
    h = n(877272),
    b = n(359588),
    g = n(532294),
    x = n(622865),
    y = n(985018),
    v = n(308021),
    j = n(881493),
    C = n(485508),
    _ = n(656122);

function A() {
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
        } = (0, i.bG)([c.A], () => c.A.getCheckpointData()),
        A = l.useContext(o.P),
        O = (0, s.rdh)(A.primaryColor).hex(),
        { monthName: E } = (0, u.od)(n, y.intl.currentLocale);
    return (0, r.jsxs)(p.A, {
        className: j.kL,
        children: [
            (0, r.jsx)(d.A, {
                className: j.Ki,
                slide: g.P7.MESSAGES,
                videoEntrySrc: C.A,
                videoLoopSrc: _.A,
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: v.DD,
                        children: [
                            (0, r.jsx)(a.oyn, {
                                size: "refresh_sm",
                                color: O,
                                colorClass: v.d7,
                                className: v.gr,
                            }),
                            (0, r.jsx)(h.A, {
                                variant: "eyebrow",
                                className: v.UP,
                                children: y.intl.format(x.default.nPTMHj, {
                                    numMessages: e,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.A, {
                        end: e,
                    }),
                    (0, r.jsx)(h.A, {
                        variant: "heading-xxl/medium",
                        className: j.VA,
                        children:
                            null != t
                                ? y.intl.format(x.default.ixvOza, {
                                      percent: 100 - t,
                                      percentHook: (e, t) =>
                                          (0, r.jsx)(
                                              m.A,
                                              {
                                                  children: e,
                                              },
                                              t,
                                          ),
                                  })
                                : y.intl.format(x.default["Zd+Ej+"], {
                                      month: E,
                                      monthHook: (e, t) =>
                                          (0, r.jsx)(
                                              m.A,
                                              {
                                                  children: e,
                                              },
                                              t,
                                          ),
                                  }),
                    }),
                    (0, r.jsx)(f.e, {
                        slide: g.P7.MESSAGES,
                    }),
                ],
            }),
        ],
    });
}
