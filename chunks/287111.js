(n.d(t, {
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
    n(323874),
    n(14289),
    n(35956));
var s = n(73153),
    a = n(839214),
    l = n(889921),
    r = n(666476),
    i = n(989145),
    o = n(248675),
    c = n(105292);
let u = [],
    d = 1,
    m = (0, a.D)(() => ({ draftsByProject: {} }));
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
function p(e, t, n, s) {
    let a = h(e, t);
    return (
        !!a.some((e) => e.localId === n) &&
        (x(
            e,
            t,
            a.map((e) => (e.localId === n ? { ...e, ...s } : e)),
        ),
        !0)
    );
}
function g(e, t) {
    (0, i.Vm)(e, t).catch((e) => {
        console.error("[conjure] attachment cleanup failed", e);
    });
}
function v(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && g(e, t.ref.id));
}
function j(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: s } = m.getState(),
        a = s[e];
    if (null == a) return;
    for (let t of Object.values(a))
        for (let s of t ?? u) n ? v(e, s) : null != s.previewUrl && URL.revokeObjectURL(s.previewUrl);
    let { [e]: l, ...r } = s;
    m.setState({ draftsByProject: r });
}
function N(e) {
    return c.intl.formatToPlainString(o.default.JZ59Bo, { size: (0, r.sM)((0, r.Ju)(e)) });
}
function b(e, t, n, s) {
    return (0, r.Oq)(t.size, s) ? (0, i.c9)(e, t, n, s) : Promise.resolve({ errorText: N(s) });
}
function y(e, t) {
    return m.useState((n) => f(n, e, t));
}
function w(e, t, n) {
    if (0 === n.length) return;
    let s = n.map((e) => {
        let { draft: t, upload: n } = e;
        return { draft: { ...t, localId: d++ }, upload: n };
    });
    for (let { draft: n, upload: a } of (x(e, t, [
        ...h(e, t),
        ...s.map((e) => {
            let { draft: t } = e;
            return t;
        }),
    ]),
    s))
        a?.().then(
            (s) => {
                if ("errorText" in s) return void p(e, t, n.localId, { status: "error", errorText: s.errorText });
                let { converted: a, ...l } = s;
                p(e, t, n.localId, { ...a, status: "ready", ref: l })
                    ? setTimeout(
                          () => p(e, t, n.localId, { status: "error", errorText: c.intl.string(o.default.E7dS5n) }),
                          r.o2 - 3e5,
                      )
                    : g(e, l.id);
            },
            (s) => {
                (console.error("[conjure] attachment upload failed", s),
                    p(e, t, n.localId, { status: "error", errorText: c.intl.string(o.default["kUw/b1"]) }));
            },
        );
}
function C(e, t, n) {
    let s = h(e, t),
        a = s.find((e) => e.localId === n);
    null != a &&
        (v(e, a),
        x(
            e,
            t,
            s.filter((e) => e.localId !== n),
        ));
}
function A(e, t) {
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
function R(e, t) {
    let { clarificationAnswers: n, attachments: s = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = h(e, "chat"),
        r = a.length > 0 && a.every((e) => "ready" === e.status) ? E(e, "chat") : [];
    (0, l.sendUserMessage)(e, t, [...s, ...r], { clarificationAnswers: n });
}
(s.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(m.getState().draftsByProject)) j(e, { deleteFromWorker: !0 });
}),
    s.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        j(t, { deleteFromWorker: !1 });
    }));
