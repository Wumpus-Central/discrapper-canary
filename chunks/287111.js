(n.d(t, {
    G: () => b,
    GU: () => h,
    RQ: () => S,
    XR: () => A,
    fD: () => w,
    iW: () => N,
    lc: () => E,
    rh: () => y,
    xJ: () => C,
}),
    n(323874),
    n(14289),
    n(35956));
var s = n(73153),
    l = n(839214),
    r = n(322227),
    a = n(666476),
    i = n(989145),
    c = n(809526),
    o = n(105292);
let u = [],
    d = 1,
    m = (0, l.D)(() => ({ draftsByProject: {} }));
function f(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? u;
}
function h(e, t) {
    return f(m.getState(), e, t);
}
function x(e, t, n) {
    let { draftsByProject: s } = m.getState();
    m.setState({ draftsByProject: { ...s, [e]: { ...s[e], [t]: n } } });
}
function g(e, t, n, s) {
    let l = h(e, t);
    return (
        !!l.some((e) => e.localId === n) &&
        (x(
            e,
            t,
            l.map((e) => (e.localId === n ? { ...e, ...s } : e)),
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
    let { deleteFromWorker: n } = t,
        { draftsByProject: s } = m.getState(),
        l = s[e];
    if (null == l) return;
    for (let t of Object.values(l))
        for (let s of t ?? u) n ? v(e, s) : null != s.previewUrl && URL.revokeObjectURL(s.previewUrl);
    let { [e]: r, ...a } = s;
    m.setState({ draftsByProject: a });
}
function N(e) {
    return o.intl.formatToPlainString(c.default.JZ59Bo, { size: (0, a.sM)((0, a.Ju)(e)) });
}
function y(e, t, n, s) {
    return (0, a.Oq)(t.size, s) ? (0, i.c9)(e, t, n, s) : Promise.resolve({ errorText: N(s) });
}
function b(e, t) {
    return m.useState((n) => f(n, e, t));
}
function w(e, t, n) {
    if (0 === n.length) return;
    let s = n.map((e) => {
        let { draft: t, upload: n } = e;
        return { draft: { ...t, localId: d++ }, upload: n };
    });
    for (let { draft: n, upload: l } of (x(e, t, [
        ...h(e, t),
        ...s.map((e) => {
            let { draft: t } = e;
            return t;
        }),
    ]),
    s))
        l?.().then(
            (s) => {
                if ("errorText" in s) return void g(e, t, n.localId, { status: "error", errorText: s.errorText });
                let { converted: l, ...r } = s;
                g(e, t, n.localId, { ...l, status: "ready", ref: r })
                    ? setTimeout(
                          () => g(e, t, n.localId, { status: "error", errorText: o.intl.string(c.default.E7dS5n) }),
                          a.o2 - 3e5,
                      )
                    : p(e, r.id);
            },
            (s) => {
                (console.error("[conjure] attachment upload failed", s),
                    g(e, t, n.localId, { status: "error", errorText: o.intl.string(c.default["kUw/b1"]) }));
            },
        );
}
function A(e, t, n) {
    let s = h(e, t),
        l = s.find((e) => e.localId === n);
    null != l &&
        (v(e, l),
        x(
            e,
            t,
            s.filter((e) => e.localId !== n),
        ));
}
function C(e, t) {
    let n = h(e, t);
    if (0 !== n.length) {
        for (let t of n) v(e, t);
        x(e, t, u);
    }
}
function E(e, t) {
    let n = h(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (x(e, t, u), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function S(e, t) {
    let { clarificationAnswers: n, attachments: s = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        l = h(e, "chat"),
        a = l.length > 0 && l.every((e) => "ready" === e.status) ? E(e, "chat") : [];
    (0, r.sendUserMessage)(e, t, [...s, ...a], { clarificationAnswers: n });
}
(s.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(m.getState().draftsByProject)) j(e, { deleteFromWorker: !0 });
}),
    s.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        j(t, { deleteFromWorker: !1 });
    }));
