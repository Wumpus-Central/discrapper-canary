n.d(t, { A: () => m }), n(896048), n(667532), n(733351);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(416052),
    o = n(240248),
    c = n(829219),
    u = n(859703),
    d = n(890687),
    p = n(45498),
    f = n(767521),
    h = n(818348),
    A = n(985018),
    g = n(883088);
let m = function (e) {
    var t, n, m;
    let { questId: b, setQuestId: _, quest: E, refreshQuest: O } = e,
        [y, I] = i.useState(!1),
        [v, S] = i.useState(!1),
        C = i.useRef(null),
        N = (0, d.pT)(),
        T = (0, l.bG)([u.A], () => (null != b ? u.A.getFetchQuestPreviewError(b) : null), [b]),
        j = (0, l.bG)([u.A], () => null != b && u.A.isFetchingQuestPreview(b), [b]),
        x = i.useMemo(() => {
            let e = N.map((e) => {
                var t, n, r;
                return {
                    id: e.id,
                    label: ""
                        .concat(
                            null != (t = null == (r = e.config) || null == (n = r.messages) ? void 0 : n.questName)
                                ? t
                                : e.id,
                            " (",
                        )
                        .concat(e.id, ")"),
                    value: e.id,
                };
            });
            return (
                null == b ||
                    e.some((e) => e.value === b) ||
                    e.unshift({
                        id: b,
                        label: b,
                        value: b,
                    }),
                e
            );
        }, [N, b]),
        P = i.useCallback(async () => {
            if (null != b) {
                I(!0);
                try {
                    await (0, c.Yb)(b, 1);
                } finally {
                    I(!1);
                }
            }
        }, [b, I]),
        w = i.useCallback(async () => {
            if (null != b) {
                I(!0);
                try {
                    await (0, c.UZ)(b);
                } finally {
                    I(!1);
                }
            }
        }, [b, I]),
        L = i.useCallback(async () => {
            if (null != b) {
                I(!0);
                try {
                    let e = Math.random();
                    await (0, c.Yb)(b, e);
                } finally {
                    I(!1);
                }
            }
        }, [b, I]),
        R = i.useCallback(
            (e) => {
                (0, o.uJ)(e) || null == _ || _(e);
            },
            [_],
        );
    return (0, r.jsxs)("div", {
        className: g.Fr,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: g.Br,
                    children: (0, r.jsxs)("div", {
                        className: g.bo,
                        children: [
                            (0, r.jsx)(f.A, {}),
                            (0, r.jsxs)("div", {
                                className: g.b8,
                                children: [
                                    (0, r.jsx)(
                                        a.ZiE,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: x,
                                            value: b,
                                            onSelectionChange: R,
                                            placeholder: A.intl.string(A.t.Zw8jxn),
                                            clearable: !0,
                                            customMatchSorter: (e, t) => {
                                                if ((0, o.uJ)(null == t ? void 0 : t.trim())) return e;
                                                let n = e.filter(
                                                    (e) =>
                                                        e.label.toLowerCase().includes(t.toLowerCase()) ||
                                                        e.value.toLowerCase().includes(t.toLowerCase()),
                                                );
                                                return 0 === n.length && "" !== t.trim()
                                                    ? [
                                                          {
                                                              label: t.trim(),
                                                              value: t.trim(),
                                                          },
                                                      ]
                                                    : n;
                                            },
                                        },
                                        ""
                                            .concat(b, "-")
                                            .concat(
                                                null !=
                                                    (t =
                                                        null == E || null == (m = E.config) || null == (n = m.messages)
                                                            ? void 0
                                                            : n.questName)
                                                    ? t
                                                    : "",
                                            ),
                                    ),
                                    (0, r.jsx)(a.K0, {
                                        onClick: O,
                                        "aria-label": A.intl.string(A.t.wzzjk9),
                                        icon: a.fNY,
                                        loading: j,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            null != b &&
                null != E &&
                (0, r.jsx)("div", {
                    className: g.in,
                    children: (0, r.jsxs)(a.ButtonGroup, {
                        className: g.xv,
                        children: [
                            (0, r.jsx)(a.Button, {
                                onClick: P,
                                disabled: y,
                                loading: y,
                                variant: "secondary",
                                text: A.intl.string(A.t.jQEfRT),
                            }),
                            (0, r.jsx)(a.Button, {
                                onClick: w,
                                disabled: y,
                                loading: y,
                                variant: "secondary",
                                text: A.intl.string(A.t.taqkwK),
                            }),
                            (0, r.jsx)(a.Button, {
                                onClick: L,
                                disabled: y,
                                loading: y,
                                variant: "secondary",
                                text: A.intl.string(A.t.cKSLr4),
                            }),
                            (0, r.jsx)(a.YNO, {
                                targetElementRef: C,
                                shouldShow: v,
                                onRequestClose: () => S(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, r.jsx)("div", {
                                        className: g.PP,
                                        children: (0, r.jsx)("div", {
                                            className: g.sH,
                                            children: (0, r.jsx)(s.A, {
                                                value: h.Sb.QUEST_PREVIEW_TOOL_2(b),
                                                text: A.intl.string(A.t.WqhZss),
                                            }),
                                        }),
                                    }),
                                children: () =>
                                    (0, r.jsx)(a.K0, {
                                        buttonRef: C,
                                        onClick: () => S(!v),
                                        "aria-label": A.intl.string(A.t.rNGQfD),
                                        icon: a.TdU,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != T ? (0, r.jsx)(p.P, { error: T }) : null,
            j ? (0, r.jsx)(a.y$y, {}) : null,
        ],
    });
};
