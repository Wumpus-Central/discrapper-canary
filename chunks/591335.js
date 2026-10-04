n.d(t, { $: () => _, o: () => m });
var i = n(343030),
    r = n(91242),
    l = n(558960),
    a = n(245179),
    o = n(260498),
    s = n(111534),
    u = n(573083),
    d = n(251363),
    c = n(853555),
    f = n(165610),
    h = n(187645);
let p = new Map(),
    g = !1;
function _() {
    g ||
        ((g = !0),
        a.Ay.addChangeListener(w),
        o.Ay.addChangeListener(w),
        r.A.addChangeListener(w),
        s.A.addChangeListener(w),
        (0, u.W3)(w),
        w());
}
function m(e) {
    return p.has(e);
}
function w() {
    let e = new Map();
    for (let t of new Set([...a.Ay.getActivityOrderedProjectIds(), ...(0, u.T7)()])) {
        if (!a.Ay.isThinking(t) && !(0, u.wK)(t)) continue;
        let n = (function (e) {
            let t = o.Ay.getProject(e)?.preview_application_id;
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
                    E(n, s.A.isBuilderPreviewMobile()),
                    document.body.appendChild(n));
                let r = { frameId: t, element: n, unregisterLookup: () => {} };
                (p.set(e, r),
                    (r.unregisterLookup = (0, c.Ng)(e, () => (0, d.o)(n, t))),
                    l.A.registerFrameTarget(t, n, i.A.Backstage, void 0));
            })(t, n);
    let g = s.A.isBuilderPreviewMobile();
    for (let e of p.values()) E(e.element, g);
}
function E(e, t) {
    (e.classList.toggle(h.lZ, t), e.classList.toggle(h.L_, !t));
}
