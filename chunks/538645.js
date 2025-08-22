n.d(t, { Z: () => b }), n(388685), n(953529), n(35282), n(853839), n(570086), n(479048);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(772848),
    l = n(442837),
    c = n(481060),
    u = n(53281),
    d = n(281598),
    f = n(25251),
    _ = n(373071),
    p = n(782691),
    h = n(558270);
let m = "Make sure you're only uploading text files!",
    g = (e) => {
        var t, n, i;
        let { effect: a, onClick: s } = e,
            { deleteConfig: l } = (0, _.n6)();
        return (0, r.jsxs)(c.P3F, {
            className: h.previewCard,
            onClick: () => {
                s(a);
            },
            children: [
                (0, r.jsx)("div", {
                    className: h.previewCardImage,
                    style: {
                        backgroundImage: "url(".concat(
                            null == (i = a.config) || null == (n = i.effects) || null == (t = n[0]) ? void 0 : t.base64,
                            ")",
                        ),
                    },
                }),
                (0, r.jsxs)("div", {
                    className: o()(h.previewCardFooter, h.row),
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: "text-md/bold",
                            children: a.name,
                        }),
                        (0, r.jsx)(c.zxk, {
                            variant: "critical-secondary",
                            text: "Delete",
                            onClick: (e) => {
                                e.preventDefault(), e.stopPropagation(), l(a.id);
                            },
                        }),
                    ],
                }),
            ],
        });
    },
    E = () => ({
        id: (0, s.Z)(),
        name: "New Profile Effect",
        config: { effects: [] },
    });
function b() {
    let { profileEffects: e, upsertConfig: t } = (0, _.n6)(),
        [n, a] = i.useState(),
        b = i.useRef(null),
        y = (0, l.Wu)([f.Z], () => f.Z.getAllProfileEffects()),
        [O, v] = i.useState(""),
        I = i.useMemo(
            () =>
                "" === O
                    ? y
                    : y.filter((e) => {
                          let t = O.toLowerCase();
                          return (
                              e.config.title.toLowerCase().includes(t) || e.config.description.toLowerCase().includes(t)
                          );
                      }),
            [O, y],
        ),
        T = () => {
            t(E());
        },
        S = i.useCallback(
            (e, n) => {
                if (null == n || !e.type.startsWith("text/")) return (0, d.Eo)(m);
                let [r, i] = n.split(",");
                if (!r.includes("text/plain")) return (0, d.Eo)(m);
                let a = JSON.parse(atob(i));
                (a.id = (0, s.Z)()), t(a), (0, d.XA)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        A = i.useCallback(
            (e) => {
                var t;
                if ((null == (t = e.currentTarget) ? void 0 : t.files) == null)
                    return void (0, d.Eo)("Error uploading file. Try again!");
                (0, d.Kr)(e.currentTarget.files, S, d.Eo);
            },
            [S],
        );
    return (0, r.jsxs)("div", {
        className: h.root,
        children: [
            null == n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: h.col,
                            children: [
                                (0, r.jsx)("div", {
                                    className: h.section,
                                    children: (0, r.jsx)(c.X6q, {
                                        variant: "heading-xl/bold",
                                        children: "Custom Profile Effects",
                                    }),
                                }),
                                (0, r.jsx)("div", {
                                    className: h.grid,
                                    children: Object.values(e).map((e) =>
                                        (0, r.jsx)(
                                            g,
                                            {
                                                effect: e,
                                                onClick: (e) => {
                                                    a(e);
                                                },
                                            },
                                            e.id,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: o()(h.row, h.end, h.section),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: h.uploadButton,
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: "Import Shared Config",
                                        }),
                                        (0, r.jsx)(u.Z, {
                                            ref: b,
                                            onChange: A,
                                            multiple: !1,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(c.zxk, {
                                    variant: "primary",
                                    text: "Create New Effect",
                                    onClick: T,
                                }),
                            ],
                        }),
                        (0, r.jsx)("hr", {}),
                        (0, r.jsxs)("div", {
                            className: h.section,
                            children: [
                                (0, r.jsx)(c.X6q, {
                                    variant: "heading-xl/bold",
                                    children: "All Effects",
                                }),
                                (0, r.jsx)("input", {
                                    value: O,
                                    onChange: (e) => {
                                        v(e.target.value);
                                    },
                                }),
                                (0, r.jsx)("div", {
                                    className: h.pfxGrid,
                                    children: I.map((e) =>
                                        (0, r.jsx)(
                                            c.P3F,
                                            {
                                                className: h.pfxListItem,
                                                style: {
                                                    backgroundImage: "url(".concat(e.config.thumbnailPreviewSrc, ")"),
                                                },
                                                onClick: () => {
                                                    a({
                                                        id: e.id,
                                                        name: e.config.title,
                                                        readonly: !0,
                                                        config: { effects: e.config.effects },
                                                    });
                                                },
                                                children: (0, r.jsx)("div", {
                                                    className: h.pfxListItemFooter,
                                                    children: (0, r.jsx)(c.Text, {
                                                        variant: "text-md/normal",
                                                        color: "always-white",
                                                        children: e.config.title,
                                                    }),
                                                }),
                                            },
                                            e.id,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                    ],
                }),
            null != n && (0, r.jsx)(p.Z, { effect: n }),
        ],
    });
}
