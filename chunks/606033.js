n.d(t, { Z: () => b }), n(388685), n(290780), n(781311);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(484614),
    s = n(624138),
    c = n(22095),
    u = n(616022),
    d = n(968843),
    p = n(253010),
    f = n(6809),
    g = n(231338),
    h = n(388032),
    m = n(9976);
let b = function (e) {
    var t, n, b;
    let { questId: E, setQuestId: _, quest: O, refreshQuest: v } = e,
        [I, y] = i.useState(!1),
        [C, S] = i.useState(!1),
        T = i.useRef(null),
        N = (0, d.MP)(),
        j = (0, l.e7)([u.Z], () => (null != E ? u.Z.getFetchQuestPreviewError(E) : null), [E]),
        x = (0, l.e7)([u.Z], () => null != E && u.Z.isFetchingQuestPreview(E), [E]),
        P = i.useMemo(() => {
            let e = N.map((e) => {
                var t, n, r;
                return {
                    id: e.id,
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
                        id: E,
                        label: E,
                        value: E,
                    }),
                e
            );
        }, [N, E]),
        A = i.useCallback(async () => {
            if (null != E) {
                y(!0);
                try {
                    await (0, c.Wf)(E, 1);
                } finally {
                    y(!1);
                }
            }
        }, [E, y]),
        Z = i.useCallback(async () => {
            if (null != E) {
                y(!0);
                try {
                    await (0, c.eT)(E);
                } finally {
                    y(!1);
                }
            }
        }, [E, y]),
        w = i.useCallback(async () => {
            if (null != E) {
                y(!0);
                try {
                    let e = Math.random();
                    await (0, c.Wf)(E, e);
                } finally {
                    y(!1);
                }
            }
        }, [E, y]),
        L = i.useCallback(
            (e) => {
                (0, s.Ew)(e) || null == _ || _(e);
            },
            [_],
        );
    return (0, r.jsxs)("div", {
        className: m.controlBar,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: m.questSelectorContainer,
                    children: (0, r.jsxs)("div", {
                        className: m.questSelectorWrapper,
                        children: [
                            (0, r.jsx)(f.Z, {}),
                            (0, r.jsxs)("div", {
                                className: m.questInput,
                                children: [
                                    (0, r.jsx)(
                                        a.VcW,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: P,
                                            value: E,
                                            onSelectionChange: L,
                                            placeholder: h.intl.string(h.t.Zw8jxn),
                                            clearable: !0,
                                            customMatchSorter: (e, t) => {
                                                if ((0, s.Ew)(null == t ? void 0 : t.trim())) return e;
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
                                                    (b =
                                                        null == O || null == (n = O.config) || null == (t = n.messages)
                                                            ? void 0
                                                            : t.questName)
                                                    ? b
                                                    : "",
                                            ),
                                    ),
                                    (0, r.jsx)(a.hU, {
                                        onClick: v,
                                        "aria-label": h.intl.string(h.t.wzzjk9),
                                        icon: a.DuK,
                                        loading: x,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            null != E &&
                null != O &&
                (0, r.jsx)("div", {
                    className: m.controlsSection,
                    children: (0, r.jsxs)(a.ButtonGroup, {
                        className: m.controlButtons,
                        children: [
                            (0, r.jsx)(a.Button, {
                                onClick: A,
                                disabled: I,
                                loading: I,
                                variant: "secondary",
                                text: h.intl.string(h.t.jQEfRT),
                            }),
                            (0, r.jsx)(a.Button, {
                                onClick: Z,
                                disabled: I,
                                loading: I,
                                variant: "secondary",
                                text: h.intl.string(h.t.taqkwK),
                            }),
                            (0, r.jsx)(a.Button, {
                                onClick: w,
                                disabled: I,
                                loading: I,
                                variant: "secondary",
                                text: h.intl.string(h.t.cKSLr4),
                            }),
                            (0, r.jsx)(a.yRy, {
                                targetElementRef: T,
                                shouldShow: C,
                                onRequestClose: () => S(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, r.jsx)("div", {
                                        className: m.sharePopover,
                                        children: (0, r.jsx)("div", {
                                            className: m.copyInput,
                                            children: (0, r.jsx)(o.Z, {
                                                value: g.$w.QUEST_PREVIEW_TOOL_2(E),
                                                text: h.intl.string(h.t.WqhZss),
                                            }),
                                        }),
                                    }),
                                children: () =>
                                    (0, r.jsx)(a.hU, {
                                        buttonRef: T,
                                        onClick: () => S(!C),
                                        "aria-label": h.intl.string(h.t.rNGQfD),
                                        icon: a.TIy,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != j ? (0, r.jsx)(p.W, { error: j }) : null,
            x ? (0, r.jsx)(a.$jN, {}) : null,
        ],
    });
};
