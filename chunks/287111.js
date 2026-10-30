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
    r = n(839214),
    l = n(322227),
    a = n(666476),
    i = n(989145),
    c = n(809526),
    o = n(105292);
let u = [],
    d = 1,
    m = (0, r.D)(() => ({ draftsByProject: {} }));
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
    let r = h(e, t);
    return (
        !!r.some((e) => e.localId === n) &&
        (x(
            e,
            t,
            r.map((e) => (e.localId === n ? { ...e, ...s } : e)),
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
    let { deleteFromWorker: n } = t,
        { draftsByProject: s } = m.getState(),
        r = s[e];
    if (null == r) return;
    for (let t of Object.values(r))
        for (let s of t ?? u) n ? j(e, s) : null != s.previewUrl && URL.revokeObjectURL(s.previewUrl);
    let { [e]: l, ...a } = s;
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
    for (let { draft: n, upload: r } of (x(e, t, [
        ...h(e, t),
        ...s.map((e) => {
            let { draft: t } = e;
            return t;
        }),
    ]),
    s))
        r?.().then(
            (s) => {
                if ("errorText" in s) return void g(e, t, n.localId, { status: "error", errorText: s.errorText });
                let { converted: r, ...l } = s;
                g(e, t, n.localId, { ...r, status: "ready", ref: l })
                    ? setTimeout(
                          () => g(e, t, n.localId, { status: "error", errorText: o.intl.string(c.default.E7dS5n) }),
                          a.o2 - 3e5,
                      )
                    : p(e, l.id);
            },
            (s) => {
                (console.error("[conjure] attachment upload failed", s),
                    g(e, t, n.localId, { status: "error", errorText: o.intl.string(c.default["kUw/b1"]) }));
            },
        );
}
function A(e, t, n) {
    let s = h(e, t),
        r = s.find((e) => e.localId === n);
    null != r &&
        (j(e, r),
        x(
            e,
            t,
            s.filter((e) => e.localId !== n),
        ));
}
function C(e, t) {
    let n = h(e, t);
    if (0 !== n.length) {
        for (let t of n) j(e, t);
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
        r = h(e, "chat"),
        a = r.length > 0 && r.every((e) => "ready" === e.status) ? E(e, "chat") : [];
    (0, l.sendUserMessage)(e, t, [...s, ...a], { clarificationAnswers: n });
}
(s.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(m.getState().draftsByProject)) v(e, { deleteFromWorker: !0 });
}),
    s.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        v(t, { deleteFromWorker: !1 });
    }));
