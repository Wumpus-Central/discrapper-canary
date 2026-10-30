(s.d(t, {
    G: () => y,
    GU: () => h,
    RQ: () => R,
    XR: () => C,
    fD: () => w,
    iW: () => N,
    lc: () => E,
    rh: () => b,
    xJ: () => A,
}),
    s(323874),
    s(14289),
    s(35956));
var n = s(73153),
    l = s(839214),
    r = s(322227),
    a = s(666476),
    i = s(989145),
    c = s(809526),
    o = s(105292);
let u = [],
    d = 1,
    m = (0, l.D)(() => ({ draftsByProject: {} }));
function f(e, t, s) {
    return e.draftsByProject[t]?.[s] ?? u;
}
function h(e, t) {
    return f(m.getState(), e, t);
}
function x(e, t, s) {
    let { draftsByProject: n } = m.getState();
    m.setState({ draftsByProject: { ...n, [e]: { ...n[e], [t]: s } } });
}
function g(e, t, s, n) {
    let l = h(e, t);
    return (
        !!l.some((e) => e.localId === s) &&
        (x(
            e,
            t,
            l.map((e) => (e.localId === s ? { ...e, ...n } : e)),
        ),
        !0)
    );
}
function p(e, t) {
    (0, i.Vm)(e, t).catch((e) => {
        console.error("[conjure] attachment cleanup failed", e);
    });
}
function j(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && p(e, t.ref.id));
}
function v(e, t) {
    let { deleteFromWorker: s } = t,
        { draftsByProject: n } = m.getState(),
        l = n[e];
    if (null == l) return;
    for (let t of Object.values(l))
        for (let n of t ?? u) s ? j(e, n) : null != n.previewUrl && URL.revokeObjectURL(n.previewUrl);
    let { [e]: r, ...a } = n;
    m.setState({ draftsByProject: a });
}
function N(e) {
    return o.intl.formatToPlainString(c.default.JZ59Bo, { size: (0, a.sM)((0, a.Ju)(e)) });
}
function b(e, t, s, n) {
    return (0, a.Oq)(t.size, n) ? (0, i.c9)(e, t, s, n) : Promise.resolve({ errorText: N(n) });
}
function y(e, t) {
    return m.useState((s) => f(s, e, t));
}
function w(e, t, s) {
    if (0 === s.length) return;
    let n = s.map((e) => {
        let { draft: t, upload: s } = e;
        return { draft: { ...t, localId: d++ }, upload: s };
    });
    for (let { draft: s, upload: l } of (x(e, t, [
        ...h(e, t),
        ...n.map((e) => {
            let { draft: t } = e;
            return t;
        }),
    ]),
    n))
        l?.().then(
            (n) => {
                if ("errorText" in n) return void g(e, t, s.localId, { status: "error", errorText: n.errorText });
                let { converted: l, ...r } = n;
                g(e, t, s.localId, { ...l, status: "ready", ref: r })
                    ? setTimeout(
                          () => g(e, t, s.localId, { status: "error", errorText: o.intl.string(c.default.E7dS5n) }),
                          a.o2 - 3e5,
                      )
                    : p(e, r.id);
            },
            (n) => {
                (console.error("[conjure] attachment upload failed", n),
                    g(e, t, s.localId, { status: "error", errorText: o.intl.string(c.default["kUw/b1"]) }));
            },
        );
}
function C(e, t, s) {
    let n = h(e, t),
        l = n.find((e) => e.localId === s);
    null != l &&
        (j(e, l),
        x(
            e,
            t,
            n.filter((e) => e.localId !== s),
        ));
}
function A(e, t) {
    let s = h(e, t);
    if (0 !== s.length) {
        for (let t of s) j(e, t);
        x(e, t, u);
    }
}
function E(e, t) {
    let s = h(e, t);
    if (0 === s.length) return [];
    for (let e of s) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (x(e, t, u), s.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function R(e, t) {
    let { clarificationAnswers: s, attachments: n = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        l = h(e, "chat"),
        a = l.length > 0 && l.every((e) => "ready" === e.status) ? E(e, "chat") : [];
    (0, r.sendUserMessage)(e, t, [...n, ...a], { clarificationAnswers: s });
}
(n.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(m.getState().draftsByProject)) v(e, { deleteFromWorker: !0 });
}),
    n.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        v(t, { deleteFromWorker: !1 });
    }));
