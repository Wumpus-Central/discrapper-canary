n.d(t, { h: () => m, s: () => _ });
var i = n(343030),
    r = n(91242),
    l = n(558960),
    a = n(200240),
    o = n(544952),
    s = n(485163),
    u = n(26278),
    d = n(506902),
    c = n(568986),
    f = n(165610),
    h = n(533578);
let p = new Map(),
    g = !1;
function _() {
    g ||
        ((g = !0),
        s.Ay.addChangeListener(w),
        u.Ay.addChangeListener(w),
        r.A.addChangeListener(w),
        o.A.addChangeListener(w),
        (0, a.FQ)(w),
        w());
}
function m(e) {
    return p.has(e);
}
function w() {
    let e = new Map();
    for (let t of new Set([...s.Ay.getActivityOrderedProjectIds(), ...(0, a.k)()])) {
        if (!s.Ay.isThinking(t) && !(0, a.RW)(t)) continue;
        let n = (function (e) {
            let t = u.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, f.VA)(t, f.sd);
            return (0, f.x1)(r.A.getFrame(n)) ? n : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [i, r] of [...p]) {
        var t, n;
        e.get(i) !== r.frameId &&
            ((t = i),
            (n = r),
            p.delete(t),
            n.unregisterLookup(),
            l.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        p.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = h.tF),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    E(n, o.A.isBuilderPreviewMobile()),
                    document.body.appendChild(n));
                let r = { frameId: t, element: n, unregisterLookup: () => {} };
                (p.set(e, r),
                    (r.unregisterLookup = (0, c.mn)(e, () => (0, d.F)(n, t))),
                    l.A.registerFrameTarget(t, n, i.A.Backstage, void 0));
            })(t, n);
    let g = o.A.isBuilderPreviewMobile();
    for (let e of p.values()) E(e.element, g);
}
function E(e, t) {
    (e.classList.toggle(h.lZ, t), e.classList.toggle(h.L_, !t));
}
