(r(323874), r(14289), r(35956));
var l = r(73153),
    n = r(839214),
    a = r(540665),
    i = r(666476),
    s = r(989145),
    o = r(191850),
    c = r(792996);
let u = [],
    d = 1,
    f = (0, n.D)(() => ({ draftsByProject: {} }));
function m(e, t, r) {
    return e.draftsByProject[t]?.[r] ?? u;
}
function p(e, t) {
    return m(f.getState(), e, t);
}
function h(e, t, r) {
    let { draftsByProject: l } = f.getState();
    f.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: r } } });
}
function g(e, t, r, l) {
    let n = p(e, t);
    return (
        !!n.some((e) => e.localId === r) &&
        (h(
            e,
            t,
            n.map((e) => (e.localId === r ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function x(e, t) {
    (0, s.Vm)(e, t).catch((e) => {
        console.error("[conjure] attachment cleanup failed", e);
    });
}
function b(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && x(e, t.ref.id));
}
function j(e, t) {
    let { deleteFromWorker: r } = t,
        { draftsByProject: l } = f.getState(),
        n = l[e];
    if (null == n) return;
    for (let t of Object.values(n))
        for (let l of t ?? u) r ? b(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: a, ...i } = l;
    f.setState({ draftsByProject: i });
}
function v(e) {
    return c.intl.formatToPlainString(o.default.JZ59Bo, { size: (0, i.sM)((0, i.Ju)(e)) });
}
function y(e, t) {
    let r = p(e, t);
    if (0 === r.length) return [];
    for (let e of r) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (h(e, t, u), r.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
(l.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(f.getState().draftsByProject)) j(e, { deleteFromWorker: !0 });
}),
    l.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        j(t, { deleteFromWorker: !1 });
    }),
    r.d(
        t,
        {},
        {
            G: function (e, t) {
                return f.useState((r) => m(r, e, t));
            },
            GU: p,
            RQ: function (e, t) {
                let { clarificationAnswers: r, attachments: l = [] } =
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = p(e, "chat"),
                    i = n.length > 0 && n.every((e) => "ready" === e.status) ? y(e, "chat") : [];
                (0, a.dv)(e, t, [...l, ...i], { clarificationAnswers: r });
            },
            XR: function (e, t, r) {
                let l = p(e, t),
                    n = l.find((e) => e.localId === r);
                null != n &&
                    (b(e, n),
                    h(
                        e,
                        t,
                        l.filter((e) => e.localId !== r),
                    ));
            },
            fD: function (e, t, r) {
                if (0 === r.length) return;
                let l = r.map((e) => {
                    let { draft: t, upload: r } = e;
                    return { draft: { ...t, localId: d++ }, upload: r };
                });
                for (let { draft: r, upload: n } of (h(e, t, [
                    ...p(e, t),
                    ...l.map((e) => {
                        let { draft: t } = e;
                        return t;
                    }),
                ]),
                l))
                    n?.().then(
                        (l) => {
                            if ("errorText" in l)
                                return void g(e, t, r.localId, { status: "error", errorText: l.errorText });
                            let { converted: n, ...a } = l;
                            g(e, t, r.localId, { ...n, status: "ready", ref: a })
                                ? setTimeout(
                                      () =>
                                          g(e, t, r.localId, {
                                              status: "error",
                                              errorText: c.intl.string(o.default.E7dS5n),
                                          }),
                                      i.o2 - 3e5,
                                  )
                                : x(e, a.id);
                        },
                        (l) => {
                            (console.error("[conjure] attachment upload failed", l),
                                g(e, t, r.localId, { status: "error", errorText: c.intl.string(o.default["kUw/b1"]) }));
                        },
                    );
            },
            iW: v,
            lc: y,
            rh: function (e, t, r, l) {
                return (0, i.Oq)(t.size, l) ? (0, s.c9)(e, t, r, l) : Promise.resolve({ errorText: v(l) });
            },
            xJ: function (e, t) {
                let r = p(e, t);
                if (0 !== r.length) {
                    for (let t of r) b(e, t);
                    h(e, t, u);
                }
            },
        },
    ));
