n.d(t, { Z: () => _ }), n(388685), n(290780), n(781311);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(668339),
    s = n(481060),
    o = n(484614),
    c = n(624138),
    u = n(22095),
    d = n(616022),
    p = n(968843),
    f = n(253010),
    g = n(6809),
    h = n(231338),
    m = n(388032),
    b = n(9976);
let _ = function (e) {
    var t, n, _;
    let { questId: E, setQuestId: O, quest: v, refreshQuest: y } = e,
        [I, C] = i.useState(!1),
        [S, T] = i.useState(!1),
        N = i.useRef(null),
        j = (0, p.MP)(),
        P = (0, l.e7)([d.Z], () => (null != E ? d.Z.getFetchQuestPreviewError(E) : null), [E]),
        x = (0, l.e7)([d.Z], () => null != E && d.Z.isFetchingQuestPreview(E), [E]),
        A = i.useMemo(() => {
            let e = j.map((e) => {
                var t, n, r;
                return {
                    label: ""
                        .concat(
                            null != (r = null == (n = e.config) || null == (t = n.messages) ? void 0 : t.questName)
                                ? r
                                : e.id,
                            " (",
                        )
                        .concat(e.id, ")"),
                    value: e.id,
                };
            });
            return (
                null == E ||
                    e.some((e) => e.value === E) ||
                    e.unshift({
                        label: E,
                        value: E,
                    }),
                e
            );
        }, [j, E]),
        Z = i.useCallback(async () => {
            if (null != E) {
                C(!0);
                try {
                    await (0, u.Wf)(E, 1);
                } finally {
                    C(!1);
                }
            }
        }, [E, C]),
        w = i.useCallback(async () => {
            if (null != E) {
                C(!0);
                try {
                    await (0, u.eT)(E);
                } finally {
                    C(!1);
                }
            }
        }, [E, C]),
        L = i.useCallback(async () => {
            if (null != E) {
                C(!0);
                try {
                    let e = Math.random();
                    await (0, u.Wf)(E, e);
                } finally {
                    C(!1);
                }
            }
        }, [E, C]),
        R = i.useCallback(
            (e) => {
                (0, c.Ew)(e) || null == O || O(e);
            },
            [O],
        );
    return (0, r.jsxs)("div", {
        className: b.controlBar,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: b.questSelectorContainer,
                    children: (0, r.jsxs)("div", {
                        className: b.questSelectorWrapper,
                        children: [
                            (0, r.jsx)(g.Z, {}),
                            (0, r.jsxs)("div", {
                                className: b.questInput,
                                children: [
                                    (0, r.jsx)(
                                        a.d,
                                        {
                                            "aria-label": "Quest ID",
                                            options: A,
                                            value: E,
                                            onChange: R,
                                            placeholder: m.intl.string(m.t.Zw8jxn),
                                            clearable: !0,
                                            filter: (e, t) => {
                                                if ((0, c.Ew)(null == t ? void 0 : t.trim())) return e;
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
                                            .concat(E, "-")
                                            .concat(
                                                null !=
                                                    (_ =
                                                        null == v || null == (n = v.config) || null == (t = n.messages)
                                                            ? void 0
                                                            : t.questName)
                                                    ? _
                                                    : "",
                                            ),
                                    ),
                                    (0, r.jsx)(s.hU, {
                                        onClick: y,
                                        "aria-label": m.intl.string(m.t.wzzjk9),
                                        icon: s.DuK,
                                        loading: x,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            null != E &&
                null != v &&
                (0, r.jsx)("div", {
                    className: b.controlsSection,
                    children: (0, r.jsxs)(s.ButtonGroup, {
                        className: b.controlButtons,
                        children: [
                            (0, r.jsx)(s.Button, {
                                onClick: Z,
                                disabled: I,
                                loading: I,
                                variant: "secondary",
                                text: m.intl.string(m.t.jQEfRT),
                            }),
                            (0, r.jsx)(s.Button, {
                                onClick: w,
                                disabled: I,
                                loading: I,
                                variant: "secondary",
                                text: m.intl.string(m.t.taqkwK),
                            }),
                            (0, r.jsx)(s.Button, {
                                onClick: L,
                                disabled: I,
                                loading: I,
                                variant: "secondary",
                                text: m.intl.string(m.t.cKSLr4),
                            }),
                            (0, r.jsx)(s.yRy, {
                                targetElementRef: N,
                                shouldShow: S,
                                onRequestClose: () => T(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, r.jsx)("div", {
                                        className: b.sharePopover,
                                        children: (0, r.jsx)("div", {
                                            className: b.copyInput,
                                            children: (0, r.jsx)(o.Z, {
                                                value: h.$w.QUEST_PREVIEW_TOOL_2(E),
                                                text: m.intl.string(m.t.WqhZss),
                                            }),
                                        }),
                                    }),
                                children: () =>
                                    (0, r.jsx)(s.hU, {
                                        buttonRef: N,
                                        onClick: () => T(!S),
                                        "aria-label": m.intl.string(m.t.rNGQfD),
                                        icon: s.TIy,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != P ? (0, r.jsx)(f.W, { error: P }) : null,
            x ? (0, r.jsx)(s.$jN, {}) : null,
        ],
    });
};
