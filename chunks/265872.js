"use strict";
n.d(t, { Q: () => p, Y: () => f });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(964486),
    o = n(453903),
    l = n(44808),
    u = n(836474),
    c = (function (e) {
        return (e.NONE = "1"), (e.TRANSLATE = "2"), (e.SCALE = "3"), (e.FADE = "4"), e;
    })(c || {});
let d = Object.freeze({ 2: l.m.Types.TRANSLATE, 3: l.m.Types.SCALE, 4: l.m.Types.FADE });
function _(e) {
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
}
class f extends i.Component {
    static Animation = c;
    ref = i.createRef();
    render() {
        let {
            children: e,
            shouldShow: t,
            onRequestOpen: n,
            onRequestClose: i,
            align: a,
            fixed: s,
            useRawTargetDimensions: l,
            onShiftClick: u,
            positionKey: c,
            popoutKey: d,
            preload: f,
            disablePointerEvents: p,
            ignoreModalClicks: h,
            scrollBehavior: m,
            useMouseEnter: g,
            renderPopout: E,
            layerContext: A,
            position: I = "right",
            autoInvert: T = !0,
            nudgeAlignIntoViewport: y = !0,
            spacing: S = 8,
            clickTrap: v = !1,
        } = this.props;
        return (0, r.jsx)(o.$, {
            ref: this.ref,
            targetElementRef: this.props.targetElementRef,
            preload: f,
            position: I,
            align: null != a ? a : _(I),
            autoInvert: T,
            fixed: s,
            nudgeAlignIntoViewport: y,
            useRawTargetDimensions: l,
            renderPopout: this.renderPopout,
            spacing: S,
            shouldShow: null != E && t,
            onRequestOpen: n,
            onRequestClose: i,
            onShiftClick: u,
            positionKey: c,
            popoutKey: d,
            disablePointerEvents: p,
            ignoreModalClicks: h,
            scrollBehavior: m,
            useMouseEnter: g,
            layerContext: A,
            clickTrap: v,
            children: e,
        });
    }
    renderPopout = (e) => {
        let { renderPopout: t, animation: n = "2", animationPosition: i } = this.props;
        switch ((null != i && null != e.position && (e.position = i), n)) {
            case "2":
            case "3":
            case "4":
                return (0, r.jsx)(l.m, { position: e.position, type: d[n], children: t(e) });
            case "1":
                return t(e);
        }
        throw Error(`Unsupported animation config: ${JSON.stringify(n)}`);
    };
}
function p(e) {
    let { renderPopout: t, ...n } = e,
        o = i.useRef(null),
        [l, c] = i.useState(0);
    function d() {
        return p(), (0, r.jsx)(r.Fragment, {});
    }
    i.useLayoutEffect(() => {
        l > 0 && o.current?.ref?.current?.layerRef?.current?.updatePosition();
    }, [l]),
        (0, s.Ay)(() => {
            let e = setTimeout(t, 20 + 20 * Math.random());
            return () => clearTimeout(e);
        });
    let _ = i.useRef(!1);
    async function p() {
        if (!_.current) {
            _.current = !0;
            let e = setTimeout(() => {
                    g(() => h), c((e) => e + 1);
                }, 300),
                n = await t();
            g(() => n), c((e) => e + 1), clearTimeout(e);
        }
    }
    function h() {
        let e = o.current?.ref?.current?.domElementRef?.current,
            t = Math.max(100, null == e ? 100 : e.offsetWidth - 20);
        return (0, r.jsx)("div", { className: u.w, style: { width: t }, children: (0, r.jsx)(a.y$y, {}) });
    }
    let [m, g] = i.useState(() => d),
        E = i.useRef(d);
    return (
        i.useEffect(() => {
            E.current = d;
        }),
        i.useEffect(() => {
            _.current
                ? t().then((e) => {
                      g(() => e), c((e) => e + 1);
                  })
                : g(() => E.current);
        }, [t]),
        (0, r.jsx)(f, { ref: o, ...n, renderPopout: m })
    );
}
p.Animation = c;
