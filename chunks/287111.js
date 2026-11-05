(n(323874), n(14289), n(35956));
var r = n(73153),
    l = n(839214),
    a = n(540665),
    i = n(666476),
    s = n(989145),
    o = n(191850),
    c = n(792996);
let u = [],
    d = 1,
    f = (0, l.D)(() => ({ draftsByProject: {} }));
function m(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? u;
}
function p(e, t) {
    return m(f.getState(), e, t);
}
function h(e, t, n) {
    let { draftsByProject: r } = f.getState();
    f.setState({ draftsByProject: { ...r, [e]: { ...r[e], [t]: n } } });
}
function g(e, t, n, r) {
    let l = p(e, t);
    return (
        !!l.some((e) => e.localId === n) &&
        (h(
            e,
            t,
            l.map((e) => (e.localId === n ? { ...e, ...r } : e)),
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
function v(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: r } = f.getState(),
        l = r[e];
    if (null == l) return;
    for (let t of Object.values(l))
        for (let r of t ?? u) n ? j(e, r) : null != r.previewUrl && URL.revokeObjectURL(r.previewUrl);
    let { [e]: a, ...i } = r;
    f.setState({ draftsByProject: i });
}
function b(e) {
    return c.intl.formatToPlainString(o.default.JZ59Bo, { size: (0, i.sM)((0, i.Ju)(e)) });
}
function y(e, t) {
    let n = p(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (h(e, t, u), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
(r.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(f.getState().draftsByProject)) v(e, { deleteFromWorker: !0 });
}),
    r.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        v(t, { deleteFromWorker: !1 });
    }),
    n.d(
        t,
        {},
        {
            G: function (e, t) {
                return f.useState((n) => m(n, e, t));
            },
            GU: p,
            RQ: function (e, t) {
                let { clarificationAnswers: n, attachments: r = [] } =
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    l = p(e, "chat"),
                    i = l.length > 0 && l.every((e) => "ready" === e.status) ? y(e, "chat") : [];
                (0, a.dv)(e, t, [...r, ...i], { clarificationAnswers: n });
            },
            XR: function (e, t, n) {
                let r = p(e, t),
                    l = r.find((e) => e.localId === n);
                null != l &&
                    (j(e, l),
                    h(
                        e,
                        t,
                        r.filter((e) => e.localId !== n),
                    ));
            },
            fD: function (e, t, n) {
                if (0 === n.length) return;
                let r = n.map((e) => {
                    let { draft: t, upload: n } = e;
                    return { draft: { ...t, localId: d++ }, upload: n };
                });
                for (let { draft: n, upload: l } of (h(e, t, [
                    ...p(e, t),
                    ...r.map((e) => {
                        let { draft: t } = e;
                        return t;
                    }),
                ]),
                r))
                    l?.().then(
                        (r) => {
                            if ("errorText" in r)
                                return void g(e, t, n.localId, { status: "error", errorText: r.errorText });
                            let { converted: l, ...a } = r;
                            g(e, t, n.localId, { ...l, status: "ready", ref: a })
                                ? setTimeout(
                                      () =>
                                          g(e, t, n.localId, {
                                              status: "error",
                                              errorText: c.intl.string(o.default.E7dS5n),
                                          }),
                                      i.o2 - 3e5,
                                  )
                                : x(e, a.id);
                        },
                        (r) => {
                            (console.error("[conjure] attachment upload failed", r),
                                g(e, t, n.localId, { status: "error", errorText: c.intl.string(o.default["kUw/b1"]) }));
                        },
                    );
            },
            iW: b,
            lc: y,
            rh: function (e, t, n, r) {
                return (0, i.Oq)(t.size, r) ? (0, s.c9)(e, t, n, r) : Promise.resolve({ errorText: b(r) });
            },
            xJ: function (e, t) {
                let n = p(e, t);
                if (0 !== n.length) {
                    for (let t of n) j(e, t);
                    h(e, t, u);
                }
            },
        },
    ));
