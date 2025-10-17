n.d(t, { Z: () => b }), n(388685), n(290780), n(781311);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(484614),
    s = n(624138),
    c = n(272008),
    u = n(113434),
    d = n(569984),
    p = n(253010),
    f = n(6809),
    h = n(231338),
    g = n(388032),
    m = n(982538);
let b = function (e) {
    var t, n, b;
    let { questId: _, setQuestId: E, quest: O, refreshQuest: v } = e,
        [y, I] = i.useState(!1),
        [C, S] = i.useState(!1),
        N = i.useRef(null),
        T = (0, u.MP)(),
        P = (0, l.e7)([d.Z], () => (null != _ ? d.Z.getFetchQuestPreviewError(_) : null), [_]),
        j = (0, l.e7)([d.Z], () => null != _ && d.Z.isFetchingQuestPreview(_), [_]),
        x = i.useMemo(() => {
            let e = T.map((e) => {
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
                null == _ ||
                    e.some((e) => e.value === _) ||
                    e.unshift({
                        label: _,
                        value: _,
                    }),
                e
            );
        }, [T, _]),
        A = i.useCallback(async () => {
            if (null != _) {
                I(!0);
                try {
                    await (0, c.Wf)(_, 1);
                } finally {
                    I(!1);
                }
            }
        }, [_, I]),
        Z = i.useCallback(async () => {
            if (null != _) {
                I(!0);
                try {
                    await (0, c.eT)(_);
                } finally {
                    I(!1);
                }
            }
        }, [_, I]),
        w = i.useCallback(async () => {
            if (null != _) {
                I(!0);
                try {
                    let e = Math.random();
                    await (0, c.Wf)(_, e);
                } finally {
                    I(!1);
                }
            }
        }, [_, I]),
        L = i.useCallback(
            (e) => {
                (0, s.Ew)(e) || null == E || E(e);
            },
            [E],
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
                                            "aria-label": "Quest ID",
                                            options: x,
                                            value: _,
                                            onChange: L,
                                            placeholder: g.intl.string(g.t.Zw8jxs),
                                            clearable: !0,
                                            filter: (e, t) => {
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
                                            .concat(_, "-")
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
                                        "aria-label": g.intl.string(g.t.wzzjk5),
                                        icon: a.DuK,
                                        loading: j,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            null != _ &&
                null != O &&
                (0, r.jsx)("div", {
                    className: m.controlsSection,
                    children: (0, r.jsxs)(a.ButtonGroup, {
                        className: m.controlButtons,
                        children: [
                            (0, r.jsx)(a.Button, {
                                onClick: A,
                                disabled: y,
                                loading: y,
                                variant: "secondary",
                                text: g.intl.string(g.t.jQEfRU),
                            }),
                            (0, r.jsx)(a.Button, {
                                onClick: Z,
                                disabled: y,
                                loading: y,
                                variant: "secondary",
                                text: g.intl.string(g.t.taqkwM),
                            }),
                            (0, r.jsx)(a.Button, {
                                onClick: w,
                                disabled: y,
                                loading: y,
                                variant: "secondary",
                                text: g.intl.string(g.t.cKSLr6),
                            }),
                            (0, r.jsx)(a.yRy, {
                                targetElementRef: N,
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
                                                value: h.$w.QUEST_PREVIEW_TOOL_2(_),
                                                text: g.intl.string(g.t.WqhZsr),
                                            }),
                                        }),
                                    }),
                                children: () =>
                                    (0, r.jsx)(a.hU, {
                                        buttonRef: N,
                                        onClick: () => S(!C),
                                        "aria-label": g.intl.string(g.t.rNGQfH),
                                        icon: a.TIy,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != P ? (0, r.jsx)(p.W, { error: P }) : null,
            j ? (0, r.jsx)(a.$jN, {}) : null,
        ],
    });
};
