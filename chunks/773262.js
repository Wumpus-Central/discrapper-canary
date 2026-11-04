var n = e(477900),
    a = e(582128),
    l = e(855986),
    r = e(189213),
    c = e(534514),
    i = e(646514),
    o = e(834730),
    d = e(753181),
    h = e(798286),
    u = e(814278),
    m = e(998759),
    p = e(75811),
    x = e(930840);
e(603266);
var g = e(792996),
    k = e(686418);
e.d(
    t,
    {},
    {
        default: function (s) {
            let { transitionState: t, streamKey: e, channelId: j, onClose: b } = s,
                v = (0, l.bG)([d.A], () => d.A.getSecureFramesState(e)?.epochAuthenticator),
                A = (0, m.z)({ fingerprintBase64: v, chunkSize: 5, desiredLength: 30 }),
                C = a.useCallback(() => {
                    (0, h.y5)({ channelId: j });
                }, [j]),
                N = { transitionState: t, title: g.intl.string(g.t.QogHld), subtitle: g.intl.string(g.t.qODBkW) },
                T = (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsxs)("div", {
                            className: k.Ot,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: k.wx,
                                    children: [
                                        (0, n.jsx)(c.D, {
                                            variant: "body-sm/semibold",
                                            color: "text-strong",
                                            children: g.intl.string(g.t.cgBTyO),
                                        }),
                                        null != A &&
                                            (0, n.jsx)(x.c, {
                                                className: k.nJ,
                                                chunks: A,
                                                color: i.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                                onCopy: C,
                                            }),
                                    ],
                                }),
                                (0, n.jsx)(p.j, { className: k.aY, chunks: A, columns: 3 }),
                            ],
                        }),
                        (0, n.jsx)(o.E, {
                            className: k.qr,
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: g.intl.format(g.t["H3+ktv"], { helpArticle: (0, u.aW)() }),
                        }),
                    ],
                });
            return (0, n.jsx)(r.a, { ...N, onClose: b, actions: [], children: T });
        },
    },
);
