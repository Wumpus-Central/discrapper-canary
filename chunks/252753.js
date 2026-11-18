n.d(l, { A: () => z });
var e = n(477900),
    a = n(582128),
    i = n(331322),
    r = n(404778),
    s = n(834730),
    o = n(821609),
    c = n(668639),
    u = n(416052);
function d(t, l) {
    let n,
        e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        a = `https://${window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") ? "conjure.town" : "conjure.city"}/${t}/${
            "" ===
            (n = l
                .normalize("NFKD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .slice(0, 48)
                .replace(/^-+|-+$/g, ""))
                ? "app"
                : n
        }`;
    return null == e ? a : `${a}/${e}`;
}
var h = n(314116),
    g = n(858899),
    f = n(534514),
    x = n(691885),
    b = n(95477),
    m = n(957565),
    j = n(233470),
    p = n(792996);
let v = [1800, 3600, 21600, 43200, 86400, 604800];
var k = n(620632),
    C = n(652215),
    y = n(191850);
function E(t) {
    let { project: l, isOwner: n, disabled: r = !1 } = t,
        [c, u] = a.useState(604800),
        [E, w] = a.useState(null),
        [_, B] = a.useState(!1),
        [S, P] = a.useState(!1),
        I = a.useMemo(
            () =>
                v.map((t) => ({
                    id: String(t),
                    label:
                        t < 3600
                            ? p.intl.formatToPlainString(p.t.iXLF9W, { minutes: t / 60 })
                            : t < 86400
                              ? p.intl.formatToPlainString(p.t.xCjYxK, { hours: t / 3600 })
                              : p.intl.formatToPlainString(p.t["k2UNz+"], { days: t / 86400 }),
                    value: t,
                })),
            [],
        ),
        L = a.useCallback(async () => {
            (B(!0), P(!1));
            try {
                let t = await (async function (t, l) {
                    let { body: n } = await k.Bo.post({
                        url: C.Rsh.CONJURE_PROJECT_REMIX_TICKET(t),
                        body: { share_max_age: l },
                        rejectWithError: !0,
                    });
                    return n.ticket;
                })(l.id, c);
                w(d(l.application_id, l.name, t));
            } catch {
                P(!0);
            }
            B(!1);
        }, [l.id, l.application_id, l.name, c]),
        z = a.useCallback(async () => {
            B(!0);
            try {
                (await (0, j.CW)(l.id, { reset_share_links: !0 }),
                    w(null),
                    P(!1),
                    (0, g.P0)({ text: p.intl.string(y.default.w9w1Zh), variant: "success" }));
            } catch {
                (0, g.P0)({ text: p.intl.string(y.default["5lL390"]), variant: "critical" });
            }
            B(!1);
        }, [l.id]),
        A = a.useCallback(() => {
            (0, h.A)({
                title: p.intl.string(y.default.LQawVH),
                subtitle: p.intl.string(y.default.xBBqXx),
                confirmText: p.intl.string(y.default.oq0hBy),
                variant: "critical",
                onConfirm: z,
            });
        }, [z]),
        N = a.useCallback(() => {
            null != E &&
                (0, m.C)(
                    E,
                    () => (0, g.P0)({ text: p.intl.string(p.t["L/PwZf"]), variant: "success" }),
                    () => (0, g.P0)({ text: p.intl.string(y.default["8m6QAX"]), variant: "critical" }),
                );
        }, [E]);
    return (0, e.jsxs)(i.B, {
        gap: 12,
        children: [
            (0, e.jsxs)(i.B, {
                gap: 4,
                children: [
                    (0, e.jsx)(f.D, { variant: "heading-md/semibold", children: p.intl.string(y.default["/lZVfj"]) }),
                    (0, e.jsx)(s.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: p.intl.string(y.default.wp7r6t),
                    }),
                ],
            }),
            (0, e.jsxs)(i.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, e.jsx)(x.l, {
                        selectionMode: "single",
                        label: p.intl.string(y.default.eMlOXz),
                        options: I,
                        value: c,
                        onSelectionChange: (t) => u(t),
                        disabled: r,
                        fullWidth: !0,
                    }),
                    (0, e.jsx)(o.$, {
                        variant: "primary",
                        text: p.intl.string(y.default.wELODD),
                        loading: _,
                        disabled: r,
                        onClick: L,
                    }),
                ],
            }),
            S
                ? (0, e.jsx)(s.E, {
                      variant: "body-sm/normal",
                      color: "text-feedback-critical",
                      children: p.intl.string(y.default.KIrnzC),
                  })
                : null,
            null != E
                ? (0, e.jsxs)(i.B, {
                      direction: "horizontal",
                      gap: 8,
                      align: "end",
                      children: [
                          (0, e.jsx)(b.k, {
                              label: p.intl.string(y.default.IPmhvk),
                              value: E,
                              readOnly: !0,
                              fullWidth: !0,
                          }),
                          (0, e.jsx)(o.$, { variant: "secondary", text: p.intl.string(p.t.OpuAlK), onClick: N }),
                      ],
                  })
                : null,
            n
                ? (0, e.jsx)(i.B, {
                      direction: "horizontal",
                      justify: "start",
                      children: (0, e.jsx)(o.$, {
                          variant: "critical-secondary",
                          size: "sm",
                          text: p.intl.string(y.default.oq0hBy),
                          disabled: _ || r,
                          onClick: A,
                      }),
                  })
                : null,
        ],
    });
}
var w = n(265872),
    _ = n(165862),
    B = n(477782),
    S = n(559106),
    P = n(847374),
    I = n(883282);
function L(t) {
    let { sharing: l } = t,
        { isOwner: n, options: r, mode: o, canChange: c, changing: u, changeMode: d } = l,
        [h, g] = a.useState(!1),
        f = a.useCallback(() => g(!1), []),
        x = a.useCallback(() => g((t) => !t), []),
        b = a.useRef(null),
        m = a.useId(),
        j = p.intl.string(y.default.jDBYrs),
        v = r.find((t) => t.value === o),
        k = !c || u;
    return (0, e.jsxs)("div", {
        className: I.n,
        children: [
            (0, e.jsxs)(i.B, {
                gap: 4,
                children: [
                    (0, e.jsx)(s.E, { id: m, variant: "body-md/medium", color: "text-strong", children: j }),
                    n
                        ? null
                        : (0, e.jsx)(s.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              children: p.intl.string(y.default.WLBlI4),
                          }),
                ],
            }),
            (0, e.jsx)(w.Y, {
                targetElementRef: b,
                shouldShow: h && !k,
                onRequestClose: f,
                position: "bottom",
                align: "right",
                animation: w.Y.Animation.NONE,
                renderPopout: (t) => {
                    let { closePopout: l } = t;
                    return (0, e.jsx)(_.W, {
                        navId: "conjure-sharing-mode",
                        "aria-label": j,
                        onClose: l,
                        onSelect: l,
                        children: r.map((t) =>
                            (0, e.jsx)(
                                B.iD,
                                {
                                    id: `conjure-sharing-mode-${t.value}`,
                                    group: "conjure-sharing-mode",
                                    label: t.label,
                                    checked: t.value === o,
                                    action: () => {
                                        (f(), t.value !== o && d(t.value));
                                    },
                                },
                                t.value,
                            ),
                        ),
                    });
                },
                children: (t, l) => {
                    let { onClick: n, ...a } = t,
                        { isShown: i } = l;
                    return (0, e.jsx)(S.vN, {
                        children: (0, e.jsxs)("button", {
                            ...a,
                            ref: b,
                            type: "button",
                            className: I.h,
                            "aria-labelledby": m,
                            "aria-haspopup": "menu",
                            "aria-expanded": i,
                            disabled: k,
                            onClick: x,
                            children: [
                                (0, e.jsx)(s.E, {
                                    tag: "span",
                                    variant: "body-md/medium",
                                    color: "none",
                                    children: v?.label,
                                }),
                                (0, e.jsx)(P.ChevronSmallDownIcon, { size: "sm", color: "currentColor" }),
                            ],
                        }),
                    });
                },
            }),
        ],
    });
}
function z(t) {
    let { project: l, sharing: n } = t,
        { isOwner: a, mode: c, changing: u, loadFailed: d } = n;
    return (0, e.jsxs)(i.B, {
        gap: 16,
        children: [
            "public" === c || "link" === c
                ? (0, e.jsxs)(e.Fragment, {
                      children: [
                          "public" === c
                              ? (0, e.jsx)(A, { project: l, disabled: u })
                              : (0, e.jsx)(E, { project: l, isOwner: a, disabled: u }),
                          (0, e.jsx)(r.c, {}),
                      ],
                  })
                : null,
            (0, e.jsx)(L, { sharing: n }),
            d && !u && "public" !== c
                ? (0, e.jsxs)(i.B, {
                      direction: "horizontal",
                      gap: 8,
                      align: "center",
                      children: [
                          (0, e.jsx)(s.E, {
                              variant: "body-sm/normal",
                              color: "text-feedback-critical",
                              children: p.intl.string(y.default["0e9nOP"]),
                          }),
                          (0, e.jsx)(o.$, {
                              variant: "secondary",
                              size: "sm",
                              text: p.intl.string(p.t["5911Lb"]),
                              onClick: n.reload,
                          }),
                      ],
                  })
                : null,
            n.saveFailed
                ? (0, e.jsx)(s.E, {
                      variant: "body-sm/normal",
                      color: "text-feedback-critical",
                      children: p.intl.string(y.default.wzqQPR),
                  })
                : null,
        ],
    });
}
function A(t) {
    let { project: l, disabled: n } = t,
        r = d(l.application_id, l.name),
        o = a.useId();
    return (0, e.jsxs)(i.B, {
        gap: 8,
        children: [
            (0, e.jsx)(s.E, {
                id: o,
                variant: "body-sm/medium",
                color: "text-default",
                children: p.intl.string(y.default.IPmhvk),
            }),
            (0, e.jsx)(c.hN, { titleId: o, children: (0, e.jsx)(u.A, { value: r, disabled: n }) }),
        ],
    });
}
