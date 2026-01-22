n.d(t, {
    A: () => w,
});
var r = n(627968),
    i = n(64700),
    a = n(621466),
    s = n(192308),
    o = n(397927),
    l = n(315246),
    c = n(750506),
    u = n(267102),
    d = n(712687),
    f = n(203982),
    p = n(211401),
    _ = n(500049),
    h = n(7691),
    m = n(699803),
    g = n(60809),
    E = n(652215),
    b = n(732139),
    y = n(985018),
    O = n(775269);

function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}

function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = I(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let T = {
    height: g.$V,
};

function C(e) {
    let { positionTargetRef: t, align: n } = e,
        i = S(e, ["positionTargetRef", "align"]);
    return (0, r.jsx)("span", {
        style: g.sK,
        children: (0, r.jsx)(c.nE, {
            className: O.T,
            targetRef: t,
            position: "top",
            align: null != n ? n : "right",
            spacing: 24,
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            clickTrap: !0,
            children: (e) => {
                let { isPositioned: t } = e;
                return (0, r.jsx)("section", {
                    className: O.V,
                    role: "dialog",
                    style: T,
                    "aria-label": y.intl.string(y.t["3CNGLK"]),
                    children: t && (0, r.jsx)(R, v({}, i)),
                });
            },
        }),
    });
}

function N() {
    p.k(_.Se.DISMISSED);
}

function R(e) {
    let { channel: t, closeOnModalOuterClick: n = !1, parentModalKey: c } = e,
        p = i.useRef(null),
        { renderWindow: y, windowDispatch: O } = i.useContext(u.Ay),
        A = null != c,
        v = (0, s.useIsModalAtTop)(null != c ? c : ""),
        S = i.useCallback(
            (e) => {
                var t;
                if ((!A && (0, s.hasAnyModalOpen)()) || (A && !(v && n)) || d.A.isOpen() || e.defaultPrevented) return;
                let { target: r } = e;
                if ((0, a.vq)(r) && null != r.closest("." + g.Wx)) return;
                for (; (0, a.vq)(r); ) {
                    if (r === p.current) return;
                    if (r.classList.contains(g.KG) || r.classList.contains(g.Gu)) return void e.preventDefault();
                    if (r.classList.contains(g.qp)) return;
                    let t = [b.Do, l.n];
                    if (r.classList.contains(g.TY) || t.includes(r.id)) return;
                    r = r.parentNode;
                }
                N();
                let i = null == (t = (0, a.BF)(e)) ? void 0 : t.activeElement;
                (null == i || "BODY" === i.tagName) && f._.dispatchToLastSubscribed(E.jej.TEXTAREA_FOCUS);
            },
            [n, v, A],
        );
    i.useLayoutEffect(
        () => (
            y.addEventListener("mousedown", S),
            y.addEventListener("contextmenu", S),
            O.subscribe(E.jej.POPOUT_CLOSE, N),
            () => {
                y.removeEventListener("mousedown", S),
                    y.removeEventListener("contextmenu", S),
                    O.unsubscribe(E.jej.POPOUT_CLOSE, N);
            }
        ),
        [S, y, O],
    ),
        (0, o.tjt)(p),
        i.useEffect(() => {
            ((!A && (0, s.hasAnyModalOpen)()) || (A && !v)) && N();
        }, [v, A]);
    let I = (0, m.A)();
    return (0, r.jsx)(h.A, {
        ref: p,
        context: {
            channel: t,
            type: "channel",
        },
        entrypoint: _.s4.TEXT,
        initHistory: I,
    });
}
let w = i.memo(C);
