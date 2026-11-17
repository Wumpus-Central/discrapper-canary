t.d(l, { A: () => R });
var n = t(477900),
    i = t(582128),
    a = t(331322),
    r = t(404778),
    s = t(834730),
    u = t(821609),
    o = t(691885),
    d = t(668639),
    c = t(416052),
    g = t(682163),
    h = t(653036);
function f(e, l) {
    let t,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = `https://${window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") ? "conjure.town" : "conjure.city"}/${e}/${
            "" ===
            (t = l
                .normalize("NFKD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .slice(0, 48)
                .replace(/^-+|-+$/g, ""))
                ? "app"
                : t
        }`;
    return null == n ? i : `${i}/${n}`;
}
var x = t(314116),
    b = t(858899),
    m = t(534514),
    j = t(95477),
    p = t(957565),
    v = t(233470),
    y = t(792996);
let C = [1800, 3600, 21600, 43200, 86400, 604800];
var k = t(620632),
    w = t(652215),
    E = t(191850);
function S(e) {
    let { project: l, isOwner: t, disabled: r = !1 } = e,
        [d, c] = i.useState(604800),
        [g, h] = i.useState(null),
        [S, A] = i.useState(!1),
        [_, B] = i.useState(!1),
        P = i.useMemo(
            () =>
                C.map((e) => ({
                    id: String(e),
                    label:
                        e < 3600
                            ? y.intl.formatToPlainString(y.t.iXLF9W, { minutes: e / 60 })
                            : e < 86400
                              ? y.intl.formatToPlainString(y.t.xCjYxK, { hours: e / 3600 })
                              : y.intl.formatToPlainString(y.t["k2UNz+"], { days: e / 86400 }),
                    value: e,
                })),
            [],
        ),
        z = i.useCallback(async () => {
            (A(!0), B(!1));
            try {
                let e = await (async function (e, l) {
                    let { body: t } = await k.Bo.post({
                        url: w.Rsh.CONJURE_PROJECT_REMIX_TICKET(e),
                        body: { share_max_age: l },
                        rejectWithError: !0,
                    });
                    return t.ticket;
                })(l.id, d);
                h(f(l.application_id, l.name, e));
            } catch {
                B(!0);
            }
            A(!1);
        }, [l.id, l.application_id, l.name, d]),
        I = i.useCallback(async () => {
            A(!0);
            try {
                (await (0, v.CW)(l.id, { reset_share_links: !0 }),
                    h(null),
                    B(!1),
                    (0, b.P0)({ text: y.intl.string(E.default.w9w1Zh), variant: "success" }));
            } catch {
                (0, b.P0)({ text: y.intl.string(E.default["5lL390"]), variant: "critical" });
            }
            A(!1);
        }, [l.id]),
        L = i.useCallback(() => {
            (0, x.A)({
                title: y.intl.string(E.default.LQawVH),
                subtitle: y.intl.string(E.default.xBBqXx),
                confirmText: y.intl.string(E.default.oq0hBy),
                variant: "critical",
                onConfirm: I,
            });
        }, [I]),
        R = i.useCallback(() => {
            null != g &&
                (0, p.C)(
                    g,
                    () => (0, b.P0)({ text: y.intl.string(y.t["L/PwZf"]), variant: "success" }),
                    () => (0, b.P0)({ text: y.intl.string(E.default["8m6QAX"]), variant: "critical" }),
                );
        }, [g]);
    return (0, n.jsxs)(a.B, {
        gap: 12,
        children: [
            (0, n.jsxs)(a.B, {
                gap: 4,
                children: [
                    (0, n.jsx)(m.D, { variant: "heading-md/semibold", children: y.intl.string(E.default["/lZVfj"]) }),
                    (0, n.jsx)(s.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: y.intl.string(E.default.wp7r6t),
                    }),
                ],
            }),
            (0, n.jsxs)(a.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, n.jsx)(o.l, {
                        selectionMode: "single",
                        label: y.intl.string(E.default.eMlOXz),
                        options: P,
                        value: d,
                        onSelectionChange: (e) => c(e),
                        disabled: r,
                        fullWidth: !0,
                    }),
                    (0, n.jsx)(u.$, {
                        variant: "primary",
                        text: y.intl.string(E.default.wELODD),
                        loading: S,
                        disabled: r,
                        onClick: z,
                    }),
                ],
            }),
            _
                ? (0, n.jsx)(s.E, {
                      variant: "body-sm/normal",
                      color: "text-feedback-critical",
                      children: y.intl.string(E.default.KIrnzC),
                  })
                : null,
            null != g
                ? (0, n.jsxs)(a.B, {
                      direction: "horizontal",
                      gap: 8,
                      align: "end",
                      children: [
                          (0, n.jsx)(j.k, {
                              label: y.intl.string(E.default.IPmhvk),
                              value: g,
                              readOnly: !0,
                              fullWidth: !0,
                          }),
                          (0, n.jsx)(u.$, { variant: "secondary", text: y.intl.string(y.t.OpuAlK), onClick: R }),
                      ],
                  })
                : null,
            t
                ? (0, n.jsx)(a.B, {
                      direction: "horizontal",
                      justify: "start",
                      children: (0, n.jsx)(u.$, {
                          variant: "critical-secondary",
                          size: "sm",
                          text: y.intl.string(E.default.oq0hBy),
                          disabled: S || r,
                          onClick: L,
                      }),
                  })
                : null,
        ],
    });
}
var A = t(265872),
    _ = t(165862),
    B = t(477782),
    P = t(559106),
    z = t(847374),
    I = t(883282);
function L(e) {
    let { sharing: l } = e,
        { isOwner: t, options: r, mode: u, canChange: o, changing: d, changeMode: c } = l,
        [g, h] = i.useState(!1),
        f = i.useCallback(() => h(!1), []),
        x = i.useCallback(() => h((e) => !e), []),
        b = i.useRef(null),
        m = i.useId(),
        j = y.intl.string(E.default.jDBYrs),
        p = r.find((e) => e.value === u),
        v = !o || d;
    return (0, n.jsxs)("div", {
        className: I.n,
        children: [
            (0, n.jsxs)(a.B, {
                gap: 4,
                children: [
                    (0, n.jsx)(s.E, { id: m, variant: "body-md/medium", color: "text-strong", children: j }),
                    t
                        ? null
                        : (0, n.jsx)(s.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              children: y.intl.string(E.default.WLBlI4),
                          }),
                ],
            }),
            (0, n.jsx)(A.Y, {
                targetElementRef: b,
                shouldShow: g && !v,
                onRequestClose: f,
                position: "bottom",
                align: "right",
                animation: A.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, n.jsx)(_.W, {
                        navId: "conjure-sharing-mode",
                        "aria-label": j,
                        onClose: l,
                        onSelect: l,
                        children: r.map((e) =>
                            (0, n.jsx)(
                                B.iD,
                                {
                                    id: `conjure-sharing-mode-${e.value}`,
                                    group: "conjure-sharing-mode",
                                    label: e.label,
                                    checked: e.value === u,
                                    action: () => {
                                        (f(), e.value !== u && c(e.value));
                                    },
                                },
                                e.value,
                            ),
                        ),
                    });
                },
                children: (e, l) => {
                    let { onClick: t, ...i } = e,
                        { isShown: a } = l;
                    return (0, n.jsx)(P.vN, {
                        children: (0, n.jsxs)("button", {
                            ...i,
                            ref: b,
                            type: "button",
                            className: I.h,
                            "aria-labelledby": m,
                            "aria-haspopup": "menu",
                            "aria-expanded": a,
                            disabled: v,
                            onClick: x,
                            children: [
                                (0, n.jsx)(s.E, {
                                    tag: "span",
                                    variant: "body-md/medium",
                                    color: "none",
                                    children: p?.label,
                                }),
                                (0, n.jsx)(z.ChevronSmallDownIcon, { size: "sm", color: "currentColor" }),
                            ],
                        }),
                    });
                },
            }),
        ],
    });
}
function R(e) {
    let { project: l, sharing: t, servers: i, serversLabel: o } = e,
        { isOwner: d, mode: c, changing: g, loadFailed: h } = t,
        f = i.candidates.length > 0 || i.current.length > 0;
    return (0, n.jsxs)(a.B, {
        gap: 16,
        children: [
            f
                ? (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(N, { servers: i, label: o }), (0, n.jsx)(r.c, {})] })
                : null,
            "public" === c || "link" === c
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          "public" === c
                              ? (0, n.jsx)(O, { project: l, disabled: g })
                              : (0, n.jsx)(S, { project: l, isOwner: d, disabled: g }),
                          (0, n.jsx)(r.c, {}),
                      ],
                  })
                : null,
            (0, n.jsx)(L, { sharing: t }),
            h && !g && "public" !== c
                ? (0, n.jsxs)(a.B, {
                      direction: "horizontal",
                      gap: 8,
                      align: "center",
                      children: [
                          (0, n.jsx)(s.E, {
                              variant: "body-sm/normal",
                              color: "text-feedback-critical",
                              children: y.intl.string(E.default["0e9nOP"]),
                          }),
                          (0, n.jsx)(u.$, {
                              variant: "secondary",
                              size: "sm",
                              text: y.intl.string(y.t["5911Lb"]),
                              onClick: t.reload,
                          }),
                      ],
                  })
                : null,
            t.saveFailed
                ? (0, n.jsx)(s.E, {
                      variant: "body-sm/normal",
                      color: "text-feedback-critical",
                      children: y.intl.string(E.default.wzqQPR),
                  })
                : null,
        ],
    });
}
function N(e) {
    let { servers: l, label: t } = e,
        { current: r, candidates: u, picked: d } = l,
        c = i.useMemo(
            () =>
                u.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: e.name,
                    leading: (0, n.jsx)(g.Ay, { guild: e, size: g.Ay.Sizes.MINI, active: !0 }),
                })),
            [u],
        );
    return (0, n.jsxs)(a.B, {
        gap: 8,
        children: [
            u.length > 0
                ? (0, n.jsx)(o.l, {
                      selectionMode: "single",
                      label: t,
                      placeholder: y.intl.string(E.default.I7yXEy),
                      options: c,
                      value: d?.id ?? null,
                      disabled: l.sharing,
                      onSelectionChange: l.pick,
                      clearable: !0,
                      fullWidth: !0,
                  })
                : (0, n.jsx)(s.E, { variant: "body-sm/medium", color: "text-default", children: t }),
            r.map((e) => (0, n.jsx)($, { guild: e }, e.id)),
            l.changeRows.length > 0 ? (0, n.jsx)(h.A, { rows: l.changeRows }) : null,
        ],
    });
}
function $(e) {
    let { guild: l } = e;
    return (0, n.jsxs)(a.B, {
        direction: "horizontal",
        gap: 8,
        align: "center",
        children: [
            (0, n.jsx)(g.Ay, { guild: l, size: g.Ay.Sizes.SMALL, active: !0, "aria-hidden": !0 }),
            (0, n.jsx)(s.E, { variant: "body-md/medium", color: "text-strong", lineClamp: 1, children: l.name }),
        ],
    });
}
function O(e) {
    let { project: l, disabled: t } = e,
        r = f(l.application_id, l.name),
        u = i.useId();
    return (0, n.jsxs)(a.B, {
        gap: 8,
        children: [
            (0, n.jsx)(s.E, {
                id: u,
                variant: "body-sm/medium",
                color: "text-default",
                children: y.intl.string(E.default.IPmhvk),
            }),
            (0, n.jsx)(d.hN, { titleId: u, children: (0, n.jsx)(c.A, { value: r, disabled: t }) }),
        ],
    });
}
