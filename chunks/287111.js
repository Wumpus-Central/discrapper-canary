(r(323874), r(14289), r(35956));
var n = r(73153),
    l = r(839214),
    a = r(540665),
    i = r(666476),
    s = r(989145),
    o = r(191850),
    c = r(792996);
let u = [],
    d = 1,
    f = (0, l.D)(() => ({ draftsByProject: {} }));
function m(e, t, r) {
    return e.draftsByProject[t]?.[r] ?? u;
}
function p(e, t) {
    return m(f.getState(), e, t);
}
function h(e, t, r) {
    let { draftsByProject: n } = f.getState();
    f.setState({ draftsByProject: { ...n, [e]: { ...n[e], [t]: r } } });
}
function g(e, t, r, n) {
    let l = p(e, t);
    return (
        !!l.some((e) => e.localId === r) &&
        (h(
            e,
            t,
            l.map((e) => (e.localId === r ? { ...e, ...n } : e)),
        ),
        !0)
    );
}
function x(e, t) {
    (0, s.Vm)(e, t).catch((e) => {
        console.error("[conjure] attachment cleanup failed", e);
    });
}
function j(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && x(e, t.ref.id));
}
function b(e, t) {
    let { deleteFromWorker: r } = t,
        { draftsByProject: n } = f.getState(),
        l = n[e];
    if (null == l) return;
    for (let t of Object.values(l))
        for (let n of t ?? u) r ? j(e, n) : null != n.previewUrl && URL.revokeObjectURL(n.previewUrl);
    let { [e]: a, ...i } = n;
    f.setState({ draftsByProject: i });
}
function v(e) {
    return c.intl.formatToPlainString(o.default.JZ59Bo, { size: (0, i.sM)((0, i.Ju)(e)) });
}
function C(e, t) {
    let r = p(e, t);
    if (0 === r.length) return [];
    for (let e of r) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (h(e, t, u), r.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
(n.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(f.getState().draftsByProject)) b(e, { deleteFromWorker: !0 });
}),
    n.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        b(t, { deleteFromWorker: !1 });
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
                let { clarificationAnswers: r, attachments: n = [] } =
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    l = p(e, "chat"),
                    i = l.length > 0 && l.every((e) => "ready" === e.status) ? C(e, "chat") : [];
                (0, a.dv)(e, t, [...n, ...i], { clarificationAnswers: r });
            },
            XR: function (e, t, r) {
                let n = p(e, t),
                    l = n.find((e) => e.localId === r);
                null != l &&
                    (j(e, l),
                    h(
                        e,
                        t,
                        n.filter((e) => e.localId !== r),
                    ));
            },
            fD: function (e, t, r) {
                if (0 === r.length) return;
                let n = r.map((e) => {
                    let { draft: t, upload: r } = e;
                    return { draft: { ...t, localId: d++ }, upload: r };
                });
                for (let { draft: r, upload: l } of (h(e, t, [
                    ...p(e, t),
                    ...n.map((e) => {
                        let { draft: t } = e;
                        return t;
                    }),
                ]),
                n))
                    l?.().then(
                        (n) => {
                            if ("errorText" in n)
                                return void g(e, t, r.localId, { status: "error", errorText: n.errorText });
                            let { converted: l, ...a } = n;
                            g(e, t, r.localId, { ...l, status: "ready", ref: a })
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
                        (n) => {
                            (console.error("[conjure] attachment upload failed", n),
                                g(e, t, r.localId, { status: "error", errorText: c.intl.string(o.default["kUw/b1"]) }));
                        },
                    );
            },
            iW: v,
            lc: C,
            rh: function (e, t, r, n) {
                return (0, i.Oq)(t.size, n) ? (0, s.c9)(e, t, r, n) : Promise.resolve({ errorText: v(n) });
            },
            xJ: function (e, t) {
                let r = p(e, t);
                if (0 !== r.length) {
                    for (let t of r) j(e, t);
                    h(e, t, u);
                }
            },
        },
    ));
