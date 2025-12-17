n.d(t, { Z: () => I });
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(442837),
    s = n(481060),
    l = n(324060),
    c = n(5888),
    u = n(26118),
    d = n(275189),
    f = n(489658),
    p = n(909397),
    _ = n(198358),
    m = n(391876),
    h = n(947189),
    g = n(612776),
    E = n(638398),
    b = n(388032),
    y = n(554445),
    O = n(784054),
    v = n(946515),
    S = n(908574);
function I() {
    let {
            messages: {
                numMessagesSent: e,
                numMessagesSentPercentile: t,
                topMonth: { month: n },
            } = {
                numMessagesSent: 0,
                numMessagesSentPercentile: 0,
                topMonth: { month: 0 },
            },
        } = (0, o.e7)([c.Z], () => c.Z.getCheckpointData()),
        I = i.useContext(l.Q),
        T = (0, s.dQu)(I.primaryColor).hex(),
        { monthName: C } = (0, u.CE)(n, b.intl.currentLocale),
        A = null != t;
    return (0, r.jsxs)(_.Z, {
        className: O.container,
        children: [
            (0, r.jsx)(d.Z, {
                className: O.video,
                slide: g.yD.MESSAGES,
                videoEntrySrc: v.Z,
                videoLoopSrc: S.Z,
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: y.title,
                        children: [
                            (0, r.jsx)(a.kBi, {
                                size: "refresh_sm",
                                color: T,
                                colorClass: y.iconColor,
                                className: y.titleIcon,
                            }),
                            (0, r.jsx)(m.Z, {
                                variant: "eyebrow",
                                className: y.eyebrow,
                                children: b.intl.format(E.default.nPTMHj, { numMessages: e }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(h.Z, { end: e }),
                    (0, r.jsx)(m.Z, {
                        variant: "heading-xxl/medium",
                        className: O.subtitle,
                        children: A
                            ? b.intl.format(E.default.ixvOza, {
                                  percent: 100 - t,
                                  percentHook: (e, t) => (0, r.jsx)(f.Z, { children: e }, t),
                              })
                            : b.intl.format(E.default["Zd+Ej+"], {
                                  month: C,
                                  monthHook: (e, t) => (0, r.jsx)(f.Z, { children: e }, t),
                              }),
                    }),
                    (0, r.jsx)(p.o, { slide: g.yD.MESSAGES }),
                ],
            }),
        ],
    });
}
