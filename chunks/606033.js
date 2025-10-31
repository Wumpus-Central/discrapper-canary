n.d(t, { Z: () => _ }), n(388685), n(290780), n(781311);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    s = n(484614),
    o = n(624138),
    c = n(22095),
    u = n(113434),
    d = n(569984),
    p = n(253010),
    f = n(6809),
    m = n(231338),
    h = n(388032),
    g = n(982538);
let _ = function (e) {
    var t, n, _;
    let { questId: b, setQuestId: E, quest: O, refreshQuest: I } = e,
        [y, v] = i.useState(!1),
        [C, S] = i.useState(!1),
        T = i.useRef(null),
        N = (0, u.MP)(),
        j = (0, l.e7)([d.Z], () => (null != b ? d.Z.getFetchQuestPreviewError(b) : null), [b]),
        P = (0, l.e7)([d.Z], () => null != b && d.Z.isFetchingQuestPreview(b), [b]),
        x = i.useMemo(() => {
            let e = N.map((e) => {
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
                null == b ||
                    e.some((e) => e.value === b) ||
                    e.unshift({
                        label: b,
                        value: b,
                    }),
                e
            );
        }, [N, b]),
        A = i.useCallback(async () => {
            if (null != b) {
                v(!0);
                try {
                    await (0, c.Wf)(b, 1);
                } finally {
                    v(!1);
                }
            }
        }, [b, v]),
        Z = i.useCallback(async () => {
            if (null != b) {
                v(!0);
                try {
                    await (0, c.eT)(b);
                } finally {
                    v(!1);
                }
            }
        }, [b, v]),
        w = i.useCallback(async () => {
            if (null != b) {
                v(!0);
                try {
                    let e = Math.random();
                    await (0, c.Wf)(b, e);
                } finally {
                    v(!1);
                }
            }
        }, [b, v]),
        L = i.useCallback(
            (e) => {
                (0, o.Ew)(e) || null == E || E(e);
            },
            [E],
        );
    return (0, r.jsxs)("div", {
        className: g.controlBar,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: g.questSelectorContainer,
                    children: (0, r.jsxs)("div", {
                        className: g.questSelectorWrapper,
                        children: [
                            (0, r.jsx)(f.Z, {}),
                            (0, r.jsxs)("div", {
                                className: g.questInput,
                                children: [
                                    (0, r.jsx)(
                                        a.VcW,
                                        {
                                            "aria-label": "Quest ID",
                                            options: x,
                                            value: b,
                                            onChange: L,
                                            placeholder: h.intl.string(h.t.Zw8jxn),
                                            clearable: !0,
                                            filter: (e, t) => {
                                                if ((0, o.Ew)(null == t ? void 0 : t.trim())) return e;
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
                                                    (_ =
                                                        null == O || null == (n = O.config) || null == (t = n.messages)
                                                            ? void 0
                                                            : t.questName)
                                                    ? _
                                                    : "",
                                            ),
                                    ),
                                    (0, r.jsx)(a.hU, {
                                        onClick: I,
                                        "aria-label": h.intl.string(h.t.wzzjk9),
                                        icon: a.DuK,
                                        loading: P,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            null != b &&
                null != O &&
                (0, r.jsx)("div", {
                    className: g.controlsSection,
                    children: (0, r.jsxs)(a.ButtonGroup, {
                        className: g.controlButtons,
                        children: [
                            (0, r.jsx)(a.Button, {
                                onClick: A,
                                disabled: y,
                                loading: y,
                                variant: "secondary",
                                text: h.intl.string(h.t.jQEfRT),
                            }),
                            (0, r.jsx)(a.Button, {
                                onClick: Z,
                                disabled: y,
                                loading: y,
                                variant: "secondary",
                                text: h.intl.string(h.t.taqkwK),
                            }),
                            (0, r.jsx)(a.Button, {
                                onClick: w,
                                disabled: y,
                                loading: y,
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
                                        className: g.sharePopover,
                                        children: (0, r.jsx)("div", {
                                            className: g.copyInput,
                                            children: (0, r.jsx)(s.Z, {
                                                value: m.$w.QUEST_PREVIEW_TOOL_2(b),
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
            P ? (0, r.jsx)(a.$jN, {}) : null,
        ],
    });
};
