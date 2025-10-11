a.d(t, { default: () => y }), a(388685), a(539854);
var n = a(951288),
    i = a(647438),
    l = a(658722),
    s = a.n(l),
    r = a(392711),
    o = a(442837),
    c = a(755721),
    d = a(481060),
    m = a(224706),
    u = a(812206),
    g = a(835473),
    h = a(206295),
    x = a(669764),
    p = a(925329),
    f = a(77498),
    j = a(49012),
    v = a(709054),
    N = a(810568),
    I = a(701488),
    _ = a(388032),
    b = a(406479);
function C(e) {
    let { showOutdatedInfoOption: t, onChoice: a } = e,
        i = [
            {
                name: _.intl.string(_.t["o/xUFh"]),
                value: 1,
            },
            ...(t
                ? [
                      {
                          name: _.intl.string(_.t["ry3/tL"]),
                          value: 2,
                      },
                  ]
                : []),
            {
                name: _.intl.string(_.t.JyZlTk),
                value: 3,
            },
        ];
    return (0, n.jsxs)(d.hzk, {
        className: b.content,
        children: [
            (0, n.jsx)(d.Heading, {
                variant: "heading-xl/bold",
                className: b.header,
                children: _.intl.string(_.t["8itBsL"]),
            }),
            (0, n.jsx)(d.Text, {
                className: b.tip,
                variant: "text-md/normal",
                children: _.intl.string(_.t.X7ab09),
            }),
            (0, n.jsx)(c.Gu, {
                className: b.radioGroup,
                options: i,
                onChange: (e) => {
                    let { value: t } = e;
                    return a(t);
                },
            }),
        ],
    });
}
function k(e) {
    let { applicationId: t, onSubmitted: a, viewId: i } = e,
        l = (0, g.q)(t);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(d.hzk, {
                className: b.content,
                children: [
                    (0, n.jsx)(d.Heading, {
                        variant: "heading-xl/bold",
                        className: b.header,
                        children: _.intl.string(_.t.lWk2u7),
                    }),
                    (0, n.jsx)(d.Text, {
                        className: b.tip,
                        variant: "text-md/normal",
                        children: _.intl.string(_.t.ZQfxS0),
                    }),
                ],
            }),
            (0, n.jsx)(d.mzw, {
                className: b.footer,
                children: (0, n.jsx)(d.Button, {
                    variant: "primary",
                    text: _.intl.string(_.t.RSATCA),
                    fullWidth: !0,
                    onClick: () => {
                        (0, j.q)({
                            href:
                                (null == l ? void 0 : l.name) != null
                                    ? ""
                                          .concat("https://www.igdb.com/search?utf8=\u2713&q=")
                                          .concat(encodeURIComponent(l.name))
                                    : "https://www.igdb.com",
                            trusted: !0,
                        }),
                            (0, N.MH)({
                                applicationId: t,
                                submitted: !0,
                                viewId: i,
                            }),
                            a();
                    },
                }),
            }),
        ],
    });
}
let w = (e) => {
    let { id: t, name: a, applicationRecord: i } = e;
    return (0, n.jsxs)("div", {
        className: b.gameSuggestion,
        children: [
            null != t
                ? (0, n.jsx)(p.Z, {
                      game: i,
                      className: b.smolGameIcon,
                  })
                : (0, n.jsx)(d.vdY, {
                      className: b.customGameNameIcon,
                      size: "sm",
                  }),
            a,
        ],
    });
};
function S(e) {
    var t, a, l;
    let { applicationId: p, onSubmitted: j, viewId: C } = e,
        [k, S] = i.useState(""),
        G = (0, o.e7)([u.Z], () => u.Z.getApplication(p)),
        [L, y] = i.useState(""),
        z = (0, o.e7)([x.Z], () => x.Z.getGame(p)),
        Z = null != (a = null != (t = null == z ? void 0 : z.name) ? t : null == G ? void 0 : G.name) ? a : "",
        B = null == G ? void 0 : G.getIconURL(I.Si.LARGE),
        { primaryColor: R, secondaryColor: T } = (0, h.Z)(B);
    i.useEffect(() => {
        m.Z.getDetectableGames();
    }, []);
    let H = (0, o.Wu)([f.Z], () => {
            let e = ((null == k ? void 0 : k.length) > 0 ? k : Z).toLowerCase(),
                t = null != L ? f.Z.getDetectableGame(L) : void 0;
            return (0, r.chain)(f.Z.games)
                .filter((t) => s()(e, t.name.toLowerCase()))
                .filter((e) => e.id !== p)
                .take(4)
                .concat(null != t ? [t] : [])
                .compact()
                .uniqBy("id")
                .value();
        }, [p, L, Z, k]),
        F = (0, g.Z)(H.map((e) => e.id)),
        A = (0, r.chain)(F).compact().keyBy("id").value(),
        W = k.length > 0 && !H.map((e) => e.name.toLowerCase()).includes(k.toLowerCase()),
        O = L === p || (null === L && 0 === k.length),
        q = H.map((e) => {
            let { name: t, id: a } = e;
            return {
                name: (0, n.jsx)(w, {
                    name: t,
                    id: a,
                    applicationRecord: A[a],
                }),
                value: a,
            };
        });
    return (
        W &&
            q.push({
                name: (0, n.jsx)(w, { name: k }),
                value: v.default.cast(""),
            }),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(d.hzk, {
                    className: b.content,
                    children: [
                        (0, n.jsx)(d.Heading, {
                            variant: "heading-xl/bold",
                            className: b.header,
                            children: _.intl.string(_.t.tJzB6O),
                        }),
                        (0, n.jsx)(d.Text, {
                            className: b.tip,
                            variant: "text-md/normal",
                            children: _.intl.string(_.t["44R0Iy"]),
                        }),
                        (0, n.jsxs)("div", {
                            className: b.gameInfoBox,
                            style: { background: "linear-gradient(45deg, ".concat(R, ", ").concat(T, ")") },
                            children: [
                                null != B &&
                                    (0, n.jsx)("img", {
                                        className: b.gameIcon,
                                        src: B,
                                        alt: "",
                                    }),
                                (0, n.jsx)(d.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: b.gameTitle,
                                    children:
                                        null != (l = null == z ? void 0 : z.name) ? l : null == G ? void 0 : G.name,
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: b.applicationSearch,
                            children: [
                                (0, n.jsx)(d.E1j, {
                                    query: k,
                                    onChange: (e) => {
                                        if (0 === e.length) null === L && y(p);
                                        else {
                                            var t;
                                            let a = H.find((t) => t.name.toLowerCase() === e.toLowerCase());
                                            y(null != (t = null == a ? void 0 : a.id) ? t : "");
                                        }
                                        S(e);
                                    },
                                    onClear: () => {
                                        null === L && y(p), S("");
                                    },
                                    placeholder: _.intl.string(_.t.UedRLy),
                                }),
                                (0, n.jsx)(c.Gu, {
                                    size: c.l7.NONE,
                                    radioPosition: "right",
                                    withTransparentBackground: !0,
                                    radioItemClassName: b.gameSuggestionRadioItem,
                                    value: L,
                                    options: q,
                                    onChange: (e) => {
                                        let { value: t } = e;
                                        return y(t);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)(d.mzw, {
                    className: b.footer,
                    children: (0, n.jsx)(d.Button, {
                        variant: "primary",
                        text: _.intl.string(_.t.geKm7u),
                        fullWidth: !0,
                        onClick: () => {
                            let e = null != L && L.length > 0;
                            (0, N.MH)({
                                applicationId: p,
                                suggestedGameApplicationId: e ? L : void 0,
                                suggestedGameName: e ? void 0 : k,
                                submitted: !0,
                                viewId: C,
                            }),
                                j();
                        },
                        disabled: O,
                    }),
                }),
            ],
        })
    );
}
function G(e) {
    let { applicationId: t, onSubmitted: a, viewId: l } = e,
        [s, r] = i.useState("");
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(d.hzk, {
                className: b.content,
                children: [
                    (0, n.jsx)(d.Heading, {
                        variant: "heading-xl/bold",
                        className: b.header,
                        children: _.intl.string(_.t["/nALeX"]),
                    }),
                    (0, n.jsx)(d.Text, {
                        className: b.tip,
                        variant: "text-md/normal",
                        children: _.intl.string(_.t.WOuJ8v),
                    }),
                    (0, n.jsx)("div", {
                        className: b.otherFeedbackInput,
                        children: (0, n.jsx)(d.Kx8, {
                            value: s,
                            onChange: (e) => r(e),
                            placeholder: _.intl.string(_.t.AHCr5e),
                            maxLength: 300,
                        }),
                    }),
                ],
            }),
            (0, n.jsx)(d.mzw, {
                className: b.footer,
                children: (0, n.jsx)(d.Button, {
                    variant: "primary",
                    text: _.intl.string(_.t.geKm7u),
                    fullWidth: !0,
                    onClick: () => {
                        (0, N.MH)({
                            applicationId: t,
                            submitted: !0,
                            feedback: s,
                            viewId: l,
                        }),
                            a();
                    },
                    disabled: 0 === s.length,
                }),
            }),
        ],
    });
}
function L(e) {
    let { onClose: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(d.hzk, {
                className: b.content,
                children: [
                    (0, n.jsx)(d.Heading, {
                        variant: "heading-xl/bold",
                        className: b.header,
                        children: _.intl.string(_.t["pelg/f"]),
                    }),
                    (0, n.jsx)(d.Text, {
                        className: b.tip,
                        variant: "text-md/normal",
                        children: _.intl.string(_.t["55S/OD"]),
                    }),
                ],
            }),
            (0, n.jsx)(d.mzw, {
                className: b.footer,
                children: (0, n.jsx)(d.Button, {
                    variant: "primary",
                    text: _.intl.string(_.t.i4jeWV),
                    fullWidth: !0,
                    onClick: t,
                }),
            }),
        ],
    });
}
function y(e) {
    let { applicationId: t, viewId: a, transitionState: l, onClose: s, showOutdatedInfoOption: r } = e,
        [o, c] = i.useState(0);
    return (0, n.jsx)(d.Y0X, {
        size: d.CgR.SMALL,
        transitionState: l,
        parentComponent: "GameProfileFeedbackModal",
        children: (() => {
            switch (o) {
                case 0:
                    return (0, n.jsx)(C, {
                        showOutdatedInfoOption: r,
                        onChoice: (e) => c(e),
                    });
                case 1:
                    return (0, n.jsx)(S, {
                        applicationId: t,
                        viewId: a,
                        onSubmitted: () => c(4),
                    });
                case 2:
                    return (0, n.jsx)(k, {
                        applicationId: t,
                        viewId: a,
                        onSubmitted: () => s(),
                    });
                case 3:
                    return (0, n.jsx)(G, {
                        applicationId: t,
                        viewId: a,
                        onSubmitted: () => c(4),
                    });
                case 4:
                    return (0, n.jsx)(L, { onClose: s });
            }
        })(),
    });
}
