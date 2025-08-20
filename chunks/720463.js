n.d(t, {
    E: () => P,
    WrappedBalanceWidgetEarnedOrbsCoachmarkModal: () => D,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(70097),
    d = n(751648),
    f = n(790542),
    _ = n(317257),
    p = n(970815),
    h = n(543936),
    m = n(622562),
    g = n(937860),
    E = n(335346),
    b = n(981631),
    y = n(388032),
    O = n(665923),
    v = n(161093),
    I = n(447489),
    T = n(484885);
function S(e, t, n) {
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
function A(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let R = () => {
        let e = (0, s.e7)([c.Z], () => c.Z.useReducedMotion);
        return (0, r.jsx)("div", {
            className: v.centerContent,
            children: e
                ? (0, r.jsx)("img", {
                      src: I.Z,
                      className: v.orbAsset,
                      alt: "Orb",
                  })
                : (0, r.jsxs)(u.Z, {
                      autoPlay: !0,
                      loop: !0,
                      className: v.orbAsset,
                      children: [
                          (0, r.jsx)("source", {
                              src: T.Z,
                              type: "video/webm",
                          }),
                          (0, r.jsx)("img", {
                              src: I.Z,
                              className: v.orbAsset,
                              alt: "Orb",
                          }),
                      ],
                  }),
        });
    },
    P = (e) => {
        let { descriptionText: t = y.intl.string(y.t["6If1Cw"]), onClose: n = () => {} } = e;
        return (0, r.jsxs)("div", {
            className: o()(v.container, O.baseCardOutline),
            children: [
                (0, r.jsx)(g.s, { onClick: n }),
                (0, r.jsx)(E.V, {
                    rightOffset: 20,
                    invertTail: !0,
                    tailSpineClassName: v.coachmarkTailSpine,
                    tailTargetInnerClassName: v.coachmarkTailTargetInner,
                }),
                (0, r.jsx)(R, {}),
                (0, r.jsx)("div", {
                    className: v.contentContainer,
                    children: (0, r.jsxs)("div", {
                        className: v.textContainer,
                        children: [
                            (0, r.jsx)(l.X6q, {
                                variant: "heading-md/bold",
                                color: "header-primary",
                                className: v.coachmarkTitle,
                                children: y.intl.string(y.t["D/nzVl"]),
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: "text-sm/medium",
                                className: v.coachmarkDescription,
                                children: t,
                            }),
                        ],
                    }),
                }),
            ],
        });
    };
function w(e) {
    var { backgroundElementRef: t, onClickPill: n, onClose: a, onCloseCallback: o } = e;
    C(e, ["backgroundElementRef", "onClickPill", "onClose", "onCloseCallback"]);
    let { balance: s } = (0, f.A)(),
        l = i.useCallback(async () => {
            await (0, d.j2)(), await a(), o();
        }, [a, o]),
        c = i.useCallback(async () => {
            await l(), n();
        }, [n, l]);
    return (0, r.jsxs)(m.E9, {
        className: v.coachmarkModalContainer,
        backgroundElementRef: t,
        onGetBoundingRect: b.dG4,
        getOffsetsRelativeToElement: () => ({
            top: 0,
            right: 0,
        }),
        minimumOffsets: { right: 12 },
        fallbackAbsoluteOffsets: {
            top: 84,
            right: 32,
        },
        children: [
            (0, r.jsx)(p.A4, {
                isInModalOverlay: !0,
                onClick: c,
                balance: s,
                balanceWidgetMode: _.b.DEFAULT,
            }),
            (0, r.jsx)(P, { onClose: l }),
        ],
    });
}
function D(e) {
    return (0, r.jsx)(h.x, {
        errorSource: "ORBS_EARNED_ORBS_COACHMARK_MODAL",
        children: (0, r.jsx)(w, A({}, e)),
    });
}
