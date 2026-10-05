n.d(t, { $: () => w, o: () => m });
var i = n(343030),
    r = n(91242),
    l = n(558960),
    a = n(245179),
    o = n(260498),
    s = n(111534),
    u = n(751341),
    d = n(573083),
    c = n(251363),
    f = n(853555),
    h = n(165610),
    p = n(187645);
let g = new Map(),
    _ = !1;
function w() {
    _ ||
        ((_ = !0),
        a.Ay.addChangeListener(E),
        o.Ay.addChangeListener(E),
        r.A.addChangeListener(E),
        s.A.addChangeListener(E),
        (0, d.W3)(E),
        E());
}
function m(e) {
    return g.has(e);
}
function E() {
    let e = new Map();
    for (let t of new Set([...a.Ay.getActivityOrderedProjectIds(), ...(0, d.T7)()])) {
        if (!a.Ay.isThinking(t) && !(0, d.wK)(t)) continue;
        let n = (function (e) {
            let t = o.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, h.VA)(t, h.sd);
            return (0, h.x1)(r.A.getFrame(n)) ? n : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [i, r] of [...g]) {
        var t, n;
        e.get(i) !== r.frameId &&
            ((t = i),
            (n = r),
            g.delete(t),
            n.unregisterLookup(),
            l.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        g.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = p.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    A(n),
                    document.body.appendChild(n));
                let r = { frameId: t, element: n, unregisterLookup: () => {} };
                (g.set(e, r),
                    (r.unregisterLookup = (0, f.Ng)(e, () => (0, c.o)(n, t))),
                    l.A.registerFrameTarget(t, n, i.A.Backstage, void 0));
            })(t, n);
    for (let e of g.values()) A(e.element);
}
function A(e) {
    let t = s.A.isBuilderPreviewMobile();
    e.classList.toggle(p.L, !t);
    let n = t ? (0, u.bR)(s.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
