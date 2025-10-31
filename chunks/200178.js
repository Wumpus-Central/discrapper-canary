n.d(t, { Z: () => p }), n(388685);
var a = n(951288),
    i = n(647438),
    l = n(120356),
    r = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(389458),
    u = n(451429),
    m = n(603473);
function p() {
    let [e, t] = i.useState(""),
        n = (0, s.e7)(
            [d.Z],
            () =>
                d.Z.getAllWordsSorted().map((e, t) => {
                    let [n, a] = e;
                    return {
                        word: n,
                        count: a,
                        value: a,
                        idx: t,
                    };
                }),
            [],
            s.pF,
        ),
        l = i.useMemo(
            () =>
                0 === e.length
                    ? n
                    : n.filter((t) => {
                          let { word: n } = t;
                          return n.toLowerCase().startsWith(e.toLowerCase());
                      }),
            [n, e],
        ),
        p = i.useCallback(() => {
            c.Z.dispatch({ type: "DEV_TOOLS_WORD_FREQUENCY_RESET" });
        }, []);
    return (0, a.jsxs)("div", {
        className: r()(u.panel, m.panel),
        children: [
            n.length > 0 &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(o.Text, {
                            variant: "text-md/semibold",
                            className: m.sectionTitle,
                            children: ["Word Frequencies (", l.length, " unique words)"],
                        }),
                        (0, a.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            children:
                                "This is a list of the most common short words found in messages sent and received by this client. They're ignored by the mention suggestions experiment to avoid distracting suggestions. These statistics are stored locally only.",
                        }),
                        (0, a.jsxs)("div", {
                            className: m.headerSection,
                            children: [
                                (0, a.jsx)(o.E1j, {
                                    size: "sm",
                                    query: e,
                                    onChange: t,
                                    onClear: () => t(""),
                                    placeholder: "Filter by words starting with...",
                                }),
                                (0, a.jsx)(o.Button, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Clear Statistics",
                                    onClick: p,
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: m.resultsSection,
                            children: (0, a.jsx)(o.zJl, {
                                className: m.resultsContainer,
                                children: (0, a.jsxs)("div", {
                                    className: m.resultsTable,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: r()(u.tableHeader, m.tableHeader),
                                            children: [
                                                (0, a.jsx)("div", {
                                                    className: m.indexColumn,
                                                    children: "Index",
                                                }),
                                                (0, a.jsx)("div", {
                                                    className: m.wordColumn,
                                                    children: "Word",
                                                }),
                                                (0, a.jsx)("div", {
                                                    className: m.valueColumn,
                                                    children: "Count",
                                                }),
                                            ],
                                        }),
                                        l.map((e) => {
                                            let { word: t, value: n, idx: i } = e;
                                            return (0, a.jsxs)(
                                                "div",
                                                {
                                                    className: r()(u.tableRow, m.tableRow),
                                                    children: [
                                                        (0, a.jsx)("div", {
                                                            className: m.indexColumn,
                                                            children: (0, a.jsx)(o.Text, {
                                                                variant: "text-sm/normal",
                                                                children: i + 1,
                                                            }),
                                                        }),
                                                        (0, a.jsx)("div", {
                                                            className: m.wordColumn,
                                                            children: (0, a.jsx)(o.Text, {
                                                                variant: "text-sm/normal",
                                                                children: t,
                                                            }),
                                                        }),
                                                        (0, a.jsx)("div", {
                                                            className: m.valueColumn,
                                                            children: (0, a.jsx)(o.Text, {
                                                                variant: "text-sm/normal",
                                                                children: n,
                                                            }),
                                                        }),
                                                    ],
                                                },
                                                "".concat(t, "-").concat(i),
                                            );
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    ],
                }),
            0 === n.length &&
                (0, a.jsx)("div", {
                    className: m.emptyState,
                    children: (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: "Load messages in a channel to see word frequency analysis.",
                    }),
                }),
            n.length > 0 &&
                0 === l.length &&
                e.length > 0 &&
                (0, a.jsx)("div", {
                    className: m.emptyState,
                    children: (0, a.jsxs)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: ['No words found starting with "', e, '".'],
                    }),
                }),
        ],
    });
}
