l.d(e, { default: () => O }), l(321073);
var i = l(627968),
    n = l(64700),
    r = l(189213),
    o = l(695366),
    s = l(311907),
    a = l(843282),
    c = l(687966),
    d = l(834730),
    p = l(321471),
    u = l(260598),
    h = l(736653),
    A = l(573648),
    g = l(627363),
    I = l(587895),
    _ = l(240248),
    f = l(555337),
    S = l(441715),
    x = l(549479),
    L = l(923121),
    C = l(539916),
    N = l(985018),
    E = l(886106);
function O(t) {
    let { transitionState: e, onClose: l, connection: O, index: T } = t,
        m = (0, h.Ay)(),
        v = null != O && null != T,
        G = f.A.getGuildId(),
        y = (0, s.bG)([x.A], () => x.A.getAllowedApplicationIds(G) ?? [], [G]);
    n.useEffect(() => {
        null != G && (0, S.$)(G);
    }, [G]),
        n.useEffect(() => {
            for (let t of y)
                null != I.A.getApplication(t) || I.A.isFetchingApplication(t) || (0, g.TA)(t).catch(() => {});
        }, [y]);
    let D = (0, s.yK)([I.A], () => {
            let t = [];
            for (let e of y) {
                let l = I.A.getApplication(e);
                null != l && t.push(l);
            }
            return t;
        }, [y]),
        [j, b] = n.useState(() => (null != O ? (0, C.Sq)(O) : void 0)),
        [P, F] = n.useState(O?.description ?? ""),
        [R, U] = n.useState([]),
        w = n.useMemo(() => {
            let t = [];
            for (let e of A.A.filter((t) => t.enabled && !C.tb.has(t.type))) {
                let l = "light" === m ? e.icon?.lightPNG : e.icon?.darkPNG;
                t.push({ label: e.name, value: `provider:${e.type}`, icon: l });
            }
            for (let e of D) t.push({ label: e.name, value: `app:${e.id}`, icon: e.getIconURL(128) });
            for (let e of y)
                null == I.A.getApplication(e) &&
                    I.A.isFetchingApplication(e) &&
                    t.push({ label: "Loading...", value: `app:${e}`, icon: void 0 });
            return t.sort((t, e) => t.label.localeCompare(e.label)), t;
        }, [D, y, m]),
        k = n.useCallback(() => {
            if (null == j || "" === j) return void U(["Please select a connection"]);
            let t = (0, C.vK)(j);
            if (null == t) return void U(["Invalid connection selected"]);
            let e = P.trim(),
                i = {
                    connection_type: t.type,
                    description: (0, _.uJ)(e) ? void 0 : e,
                    ...(null != t.applicationId && { application_id: t.applicationId }),
                    ...(null != t.providerId && { provider_id: t.providerId }),
                },
                n = (0, C.Ii)(i);
            n.length > 0 ? U(n) : (v ? (0, L.yM)(T, i) : (0, L.sF)(i), l());
        }, [j, P, v, T, l]),
        B = n.useCallback(
            (t) =>
                (0, i.jsxs)("div", {
                    style: { display: "flex", alignItems: "center", gap: "8px" },
                    children: [
                        t.icon
                            ? "string" == typeof t.icon
                                ? (0, i.jsx)("img", { src: t.icon, alt: "", width: 20, height: 20 })
                                : null
                            : (0, i.jsx)(c._, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                        (0, i.jsx)("span", { children: t.label }),
                    ],
                }),
            [],
        ),
        W = n.useCallback((t) => {
            if (0 === t.length) return null;
            let e = t[0];
            return (0, i.jsxs)("div", {
                style: { display: "flex", alignItems: "center", gap: "8px" },
                children: [
                    e.icon && "string" == typeof e.icon
                        ? (0, i.jsx)("img", { src: e.icon, alt: "", width: 20, height: 20 })
                        : (0, i.jsx)(c._, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                    (0, i.jsx)("span", { children: e.label }),
                ],
            });
        }, []);
    return (0, i.jsx)(r.Modal, {
        transitionState: e,
        title: v ? N.intl.string(N.t.yqegs1) : N.intl.string(N.t.B6qOe2),
        onClose: l,
        actions: [
            { variant: "secondary", text: N.intl.string(N.t["ETE/oC"]), onClick: l },
            { variant: "primary", text: v ? N.intl.string(N.t["R3BPH+"]) : N.intl.string(N.t.qMOnJu), onClick: k },
        ],
        children: (0, i.jsxs)("div", {
            className: E.Qs,
            children: [
                !v &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(d.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: N.intl.string(N.t.mGhCgX),
                            }),
                            (0, i.jsx)(p.e, {
                                title: N.intl.string(N.t.joNLrt),
                                children: (0, i.jsx)(a.Te, {
                                    value: j ?? "",
                                    onChange: (t) => {
                                        b(t), U([]);
                                    },
                                    options: w,
                                    placeholder: N.intl.string(N.t.Wq1LfI),
                                    renderOptionLabel: B,
                                    renderOptionValue: W,
                                    "data-migration-pending": !0,
                                }),
                            }),
                            R.length > 0 &&
                                (0, i.jsx)("div", {
                                    className: E.sO,
                                    children: R.map((t, e) =>
                                        (0, i.jsxs)(
                                            "div",
                                            {
                                                className: E.Ff,
                                                children: [
                                                    (0, i.jsx)(o.E, { size: "sm", color: "currentColor" }),
                                                    (0, i.jsx)(d.E, {
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
                                (0, i.jsx)(d.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    children: N.intl.string(N.t.WoyrU8),
                                }),
                                (0, i.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: N.intl.string(N.t.zdWNET),
                                }),
                            ],
                        }),
                        (0, i.jsx)(u.f, {
                            value: P,
                            onChange: F,
                            placeholder: N.intl.string(N.t["28bQNf"]),
                            maxLength: C.sd,
                        }),
                    ],
                }),
            ],
        }),
    });
}
