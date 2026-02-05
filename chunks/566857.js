l.d(e, { default: () => L }), l(321073);
var i = l(627968),
    n = l(64700),
    r = l(158954),
    s = l(311907),
    o = l(843282),
    a = l(397927),
    c = l(736653),
    d = l(573648),
    p = l(627363),
    u = l(587895),
    h = l(240248),
    A = l(555337),
    I = l(441715),
    g = l(549479),
    _ = l(923121),
    x = l(539916),
    f = l(985018),
    S = l(819401);
function L(t) {
    let { transitionState: e, onClose: l, connection: L, index: T } = t,
        C = (0, c.Ay)(),
        N = null != L && null != T,
        O = A.A.getGuildId(),
        m = (0, s.bG)([g.A], () => g.A.getAllowedApplicationIds(O) ?? [], [O]);
    n.useEffect(() => {
        null != O && (0, I.$)(O);
    }, [O]),
        n.useEffect(() => {
            for (let t of m)
                null != u.A.getApplication(t) || u.A.isFetchingApplication(t) || (0, p.TA)(t).catch(() => {});
        }, [m]);
    let E = (0, s.yK)([u.A], () => {
            let t = [];
            for (let e of m) {
                let l = u.A.getApplication(e);
                null != l && t.push(l);
            }
            return t;
        }, [m]),
        [v, G] = n.useState(() => (null != L ? (0, x.Sq)(L) : void 0)),
        [y, D] = n.useState(L?.description ?? ""),
        [j, b] = n.useState([]),
        P = n.useMemo(() => {
            let t = [];
            for (let e of d.A.filter((t) => t.enabled && !x.tb.has(t.type))) {
                let l = "light" === C ? e.icon?.lightPNG : e.icon?.darkPNG;
                t.push({ label: e.name, value: `provider:${e.type}`, icon: l });
            }
            for (let e of E) t.push({ label: e.name, value: `app:${e.id}`, icon: e.getIconURL(128) });
            for (let e of m)
                null == u.A.getApplication(e) &&
                    u.A.isFetchingApplication(e) &&
                    t.push({ label: "Loading...", value: `app:${e}`, icon: void 0 });
            return t.sort((t, e) => t.label.localeCompare(e.label)), t;
        }, [E, m, C]),
        R = n.useCallback(() => {
            if (null == v || "" === v) return void b(["Please select a connection"]);
            let t = (0, x.vK)(v);
            if (null == t) return void b(["Invalid connection selected"]);
            let e = y.trim(),
                i = {
                    connection_type: t.type,
                    description: (0, h.uJ)(e) ? void 0 : e,
                    ...(null != t.applicationId && { application_id: t.applicationId }),
                    ...(null != t.providerId && { provider_id: t.providerId }),
                },
                n = (0, x.Ii)(i);
            n.length > 0 ? b(n) : (N ? (0, _.yM)(T, i) : (0, _.sF)(i), l());
        }, [v, y, N, T, l]),
        F = n.useCallback(
            (t) =>
                (0, i.jsxs)("div", {
                    style: { display: "flex", alignItems: "center", gap: "8px" },
                    children: [
                        t.icon
                            ? "string" == typeof t.icon
                                ? (0, i.jsx)("img", { src: t.icon, alt: "", width: 20, height: 20 })
                                : null
                            : (0, i.jsx)(a._xR, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                        (0, i.jsx)("span", { children: t.label }),
                    ],
                }),
            [],
        ),
        U = n.useCallback((t) => {
            if (0 === t.length) return null;
            let e = t[0];
            return (0, i.jsxs)("div", {
                style: { display: "flex", alignItems: "center", gap: "8px" },
                children: [
                    e.icon && "string" == typeof e.icon
                        ? (0, i.jsx)("img", { src: e.icon, alt: "", width: 20, height: 20 })
                        : (0, i.jsx)(a._xR, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                    (0, i.jsx)("span", { children: e.label }),
                ],
            });
        }, []);
    return (0, i.jsx)(r.Modal, {
        transitionState: e,
        title: N ? f.intl.string(f.t.yqegs1) : f.intl.string(f.t.B6qOe2),
        onClose: l,
        actions: [
            { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: l },
            { variant: "primary", text: N ? f.intl.string(f.t["R3BPH+"]) : f.intl.string(f.t.qMOnJu), onClick: R },
        ],
        children: (0, i.jsxs)("div", {
            className: S.Qs,
            children: [
                !N &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: f.intl.string(f.t.mGhCgX),
                            }),
                            (0, i.jsx)(a.eIh, {
                                title: f.intl.string(f.t.joNLrt),
                                children: (0, i.jsx)(o.Te, {
                                    value: v ?? "",
                                    onChange: (t) => {
                                        G(t), b([]);
                                    },
                                    options: P,
                                    placeholder: f.intl.string(f.t.Wq1LfI),
                                    renderOptionLabel: F,
                                    renderOptionValue: U,
                                    "data-migration-pending": !0,
                                }),
                            }),
                            j.length > 0 &&
                                (0, i.jsx)("div", {
                                    className: S.sO,
                                    children: j.map((t, e) =>
                                        (0, i.jsxs)(
                                            "div",
                                            {
                                                className: S.Ff,
                                                children: [
                                                    (0, i.jsx)(r.EpV, { size: "sm", color: "currentColor" }),
                                                    (0, i.jsx)(a.Text, {
                                                        variant: "text-sm/normal",
                                                        color: "text-feedback-critical",
                                                        children: t,
                                                    }),
                                                ],
                                            },
                                            e,
                                        ),
                                    ),
                                }),
                        ],
                    }),
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsxs)("div", {
                            style: { display: "flex", flexDirection: "column", gap: "4px", marginBottom: "8px" },
                            children: [
                                (0, i.jsx)(a.Text, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    children: f.intl.string(f.t.WoyrU8),
                                }),
                                (0, i.jsx)(a.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: f.intl.string(f.t.zdWNET),
                                }),
                            ],
                        }),
                        (0, i.jsx)(a.fs1, {
                            value: y,
                            onChange: D,
                            placeholder: f.intl.string(f.t["28bQNf"]),
                            maxLength: x.sd,
                        }),
                    ],
                }),
            ],
        }),
    });
}
