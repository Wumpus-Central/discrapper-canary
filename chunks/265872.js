var i,
    r = n(477900),
    a = n(582128),
    s = n(289873),
    l = n(964486),
    o = n(453903),
    d = n(44808),
    c = n(38568),
    u = (((i = u || {}).NONE = "1"), (i.TRANSLATE = "2"), (i.SCALE = "3"), (i.FADE = "4"), i);
let _ = Object.freeze({ 2: d.m.Types.TRANSLATE, 3: d.m.Types.SCALE, 4: d.m.Types.FADE });
class E extends a.Component {
    static Animation = u;
    ref = a.createRef();
    render() {
        let {
            children: e,
            shouldShow: t,
            onRequestOpen: n,
            onRequestClose: i,
            align: a,
            fixed: s,
            useRawTargetDimensions: l,
            onShiftClick: d,
            positionKey: c,
            popoutKey: u,
            preload: _,
            loadingComponent: E,
            disablePointerEvents: A,
            ignoreModalClicks: f,
            scrollBehavior: h,
            useMouseEnter: I,
            renderPopout: p,
            layerContext: m,
            position: g = "right",
            autoInvert: T = !0,
            nudgeAlignIntoViewport: S = !0,
            avoidancePadding: N,
            spacing: C = 8,
            clickTrap: O = !1,
        } = this.props;
        return (0, r.jsx)(o.$n, {
            ref: this.ref,
            targetElementRef: this.props.targetElementRef,
            preload: _,
            loadingComponent: E,
            position: g,
            align:
                null != a
                    ? a
                    : (function (e) {
                          switch (e) {
                              case "top":
                              case "bottom":
                                  return "left";
                              case "left":
                              case "right":
                                  return "top";
                              case "center":
                              case "window_center":
                                  return "center";
                          }
                          throw Error(`Unexpected position: ${e}`);
                      })(g),
            autoInvert: T,
            fixed: s,
            nudgeAlignIntoViewport: S,
            avoidancePadding: N,
            useRawTargetDimensions: l,
            renderPopout: this.renderPopout,
            spacing: C,
            shouldShow: null != p && t,
            onRequestOpen: n,
            onRequestClose: i,
            onShiftClick: d,
            positionKey: c,
            popoutKey: u,
            disablePointerEvents: A,
            ignoreModalClicks: f,
            scrollBehavior: h,
            useMouseEnter: I,
            layerContext: m,
            clickTrap: O,
            children: e,
        });
    }
    renderPopout = (e) => {
        let { renderPopout: t, animation: n = "2", animationPosition: i } = this.props;
        switch ((null != i && null != e.position && (e.position = i), n)) {
            case "2":
            case "3":
            case "4":
                return (0, r.jsx)(d.m, { position: e.position, type: _[n], children: t(e) });
            case "1":
                return t(e);
        }
        throw Error(`Unsupported animation config: ${JSON.stringify(n)}`);
    };
}
function A(e) {
    let { renderPopout: t, ...n } = e,
        i = a.useRef(null),
        [o, d] = a.useState(0);
    function u() {
        return (
            (async function () {
                if (!_.current) {
                    _.current = !0;
                    let e = setTimeout(() => {
                            (h(() => A), d((e) => e + 1));
                        }, 300),
                        n = await t();
                    (h(() => n), d((e) => e + 1), clearTimeout(e));
                }
            })(),
            (0, r.jsx)(r.Fragment, {})
        );
    }
    (a.useLayoutEffect(() => {
        o > 0 && i.current?.ref?.current?.layerRef?.current?.updatePosition();
    }, [o]),
        (0, l.Ay)(() => {
            let e = setTimeout(t, 20 + 20 * Math.random());
            return () => clearTimeout(e);
        }));
    let _ = a.useRef(!1);
    function A() {
        let e = i.current?.ref?.current?.domElementRef?.current,
            t = Math.max(100, null == e ? 100 : e.offsetWidth - 20);
        return (0, r.jsx)("div", { className: c.w, style: { width: t }, children: (0, r.jsx)(s.y, {}) });
    }
    let [f, h] = a.useState(() => u),
        I = a.useRef(u);
    return (
        a.useEffect(() => {
            I.current = u;
        }),
        a.useEffect(() => {
            _.current
                ? t().then((e) => {
                      (h(() => e), d((e) => e + 1));
                  })
                : h(() => I.current);
        }, [t]),
        (0, r.jsx)(E, { ref: i, ...n, renderPopout: f })
    );
}
((A.Animation = u), n.d(t, {}, { Q: A, Y: E }));
