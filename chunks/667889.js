"use strict";
n.d(t, { A: () => b });
var r = n(627968),
    i = n(64700),
    a = n(621466),
    s = n(192308),
    o = n(397927),
    l = n(315246),
    u = n(750506),
    c = n(267102),
    d = n(712687),
    _ = n(203982),
    f = n(211401),
    p = n(500049),
    h = n(7691),
    m = n(699803),
    g = n(60809),
    E = n(652215),
    A = n(732139),
    I = n(985018),
    T = n(775269);
let y = { height: g.$V };
function S(e) {
    let { positionTargetRef: t, align: n, ...i } = e;
    return (0, r.jsx)("span", {
        style: g.sK,
        children: (0, r.jsx)(u.nE, {
            className: T.T,
            targetRef: t,
            position: "top",
            align: n ?? "right",
            spacing: 24,
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            clickTrap: !0,
            children: (e) => {
                let { isPositioned: t } = e;
                return (0, r.jsx)("section", {
                    className: T.V,
                    role: "dialog",
                    style: y,
                    "aria-label": I.intl.string(I.t["3CNGLK"]),
                    children: t && (0, r.jsx)(C, { ...i }),
                });
            },
        }),
    });
}
function v() {
    f.k(p.Se.DISMISSED);
}
function C(e) {
    let { channel: t, closeOnModalOuterClick: n = !1, parentModalKey: u } = e,
        f = i.useRef(null),
        { renderWindow: I, windowDispatch: T } = i.useContext(c.Ay),
        y = null != u,
        S = (0, s.useIsModalAtTop)(u ?? ""),
        C = i.useCallback(
            (e) => {
                if ((!y && (0, s.hasAnyModalOpen)()) || (y && !(S && n)) || d.A.isOpen() || e.defaultPrevented) return;
                let { target: t } = e;
                if ((0, a.vq)(t) && null != t.closest("." + g.Wx)) return;
                for (; (0, a.vq)(t); ) {
                    if (t === f.current) return;
                    if (t.classList.contains(g.KG) || t.classList.contains(g.Gu)) return void e.preventDefault();
                    if (t.classList.contains(g.qp)) return;
                    let n = [A.Do, l.n];
                    if (t.classList.contains(g.TY) || n.includes(t.id)) return;
                    t = t.parentNode;
                }
                v();
                let r = (0, a.BF)(e)?.activeElement;
                (null == r || "BODY" === r.tagName) && _._.dispatchToLastSubscribed(E.jej.TEXTAREA_FOCUS);
            },
            [n, S, y],
        );
    i.useLayoutEffect(
        () => (
            I.addEventListener("mousedown", C),
            I.addEventListener("contextmenu", C),
            T.subscribe(E.jej.POPOUT_CLOSE, v),
            () => {
                I.removeEventListener("mousedown", C),
                    I.removeEventListener("contextmenu", C),
                    T.unsubscribe(E.jej.POPOUT_CLOSE, v);
            }
        ),
        [C, I, T],
    ),
        (0, o.tjt)(f),
        i.useEffect(() => {
            ((!y && (0, s.hasAnyModalOpen)()) || (y && !S)) && v();
        }, [S, y]);
    let b = (0, m.A)();
    return (0, r.jsx)(h.A, { ref: f, context: { channel: t, type: "channel" }, entrypoint: p.s4.TEXT, initHistory: b });
}
let b = i.memo(S);
