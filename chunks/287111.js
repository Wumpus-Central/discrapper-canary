(a.d(t, {
    G: () => y,
    GU: () => h,
    RQ: () => S,
    XR: () => w,
    fD: () => C,
    iW: () => N,
    lc: () => E,
    rh: () => b,
    xJ: () => A,
}),
    a(323874),
    a(14289),
    a(35956));
var s = a(73153),
    n = a(839214),
    l = a(889921),
    r = a(666476),
    i = a(989145),
    o = a(248675),
    c = a(105292);
let u = [],
    d = 1,
    m = (0, n.D)(() => ({ draftsByProject: {} }));
function f(e, t, a) {
    return e.draftsByProject[t]?.[a] ?? u;
}
function h(e, t) {
    return f(m.getState(), e, t);
}
function x(e, t, a) {
    let { draftsByProject: s } = m.getState();
    m.setState({ draftsByProject: { ...s, [e]: { ...s[e], [t]: a } } });
}
function g(e, t, a, s) {
    let n = h(e, t);
    return (
        !!n.some((e) => e.localId === a) &&
        (x(
            e,
            t,
            n.map((e) => (e.localId === a ? { ...e, ...s } : e)),
        ),
        !0)
    );
}
function p(e, t) {
    (0, i.Vm)(e, t).catch((e) => {
        console.error("[conjure] attachment cleanup failed", e);
    });
}
function v(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && p(e, t.ref.id));
}
function j(e, t) {
    let { deleteFromWorker: a } = t,
        { draftsByProject: s } = m.getState(),
        n = s[e];
    if (null == n) return;
    for (let t of Object.values(n))
        for (let s of t ?? u) a ? v(e, s) : null != s.previewUrl && URL.revokeObjectURL(s.previewUrl);
    let { [e]: l, ...r } = s;
    m.setState({ draftsByProject: r });
}
function N(e) {
    return c.intl.formatToPlainString(o.default.JZ59Bo, { size: (0, r.sM)((0, r.Ju)(e)) });
}
function b(e, t, a, s) {
    return (0, r.Oq)(t.size, s) ? (0, i.c9)(e, t, a, s) : Promise.resolve({ errorText: N(s) });
}
function y(e, t) {
    return m.useState((a) => f(a, e, t));
}
function C(e, t, a) {
    if (0 === a.length) return;
    let s = a.map((e) => {
        let { draft: t, upload: a } = e;
        return { draft: { ...t, localId: d++ }, upload: a };
    });
    for (let { draft: a, upload: n } of (x(e, t, [
        ...h(e, t),
        ...s.map((e) => {
            let { draft: t } = e;
            return t;
        }),
    ]),
    s))
        n?.().then(
            (s) => {
                if ("errorText" in s) return void g(e, t, a.localId, { status: "error", errorText: s.errorText });
                let { converted: n, ...l } = s;
                g(e, t, a.localId, { ...n, status: "ready", ref: l })
                    ? setTimeout(
                          () => g(e, t, a.localId, { status: "error", errorText: c.intl.string(o.default.E7dS5n) }),
                          r.o2 - 3e5,
                      )
                    : p(e, l.id);
            },
            (s) => {
                (console.error("[conjure] attachment upload failed", s),
                    g(e, t, a.localId, { status: "error", errorText: c.intl.string(o.default["kUw/b1"]) }));
            },
        );
}
function w(e, t, a) {
    let s = h(e, t),
        n = s.find((e) => e.localId === a);
    null != n &&
        (v(e, n),
        x(
            e,
            t,
            s.filter((e) => e.localId !== a),
        ));
}
function A(e, t) {
    let a = h(e, t);
    if (0 !== a.length) {
        for (let t of a) v(e, t);
        x(e, t, u);
    }
}
function E(e, t) {
    let a = h(e, t);
    if (0 === a.length) return [];
    for (let e of a) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (x(e, t, u), a.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function S(e, t) {
    let { clarificationAnswers: a, attachments: s = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = h(e, "chat"),
        r = n.length > 0 && n.every((e) => "ready" === e.status) ? E(e, "chat") : [];
    (0, l.sendUserMessage)(e, t, [...s, ...r], { clarificationAnswers: a });
}
(s.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(m.getState().draftsByProject)) j(e, { deleteFromWorker: !0 });
}),
    s.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        j(t, { deleteFromWorker: !1 });
    }));
