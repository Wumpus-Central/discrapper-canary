"use strict";
n.d(t, { Q: () => E, Y: () => f });
var r,
    i = n(627968),
    s = n(64700),
    a = n(289873),
    o = n(964486),
    l = n(453903),
    u = n(44808),
    d = n(677771),
    c = (((r = c || {}).NONE = "1"), (r.TRANSLATE = "2"), (r.SCALE = "3"), (r.FADE = "4"), r);
let _ = Object.freeze({ 2: u.m.Types.TRANSLATE, 3: u.m.Types.SCALE, 4: u.m.Types.FADE });
class f extends s.Component {
    static Animation = c;
    ref = s.createRef();
    render() {
        let {
            children: e,
            shouldShow: t,
            onRequestOpen: n,
            onRequestClose: r,
            align: s,
            fixed: a,
            useRawTargetDimensions: o,
            onShiftClick: u,
            positionKey: d,
            popoutKey: c,
            preload: _,
            loadingComponent: f,
            disablePointerEvents: E,
            ignoreModalClicks: h,
            scrollBehavior: p,
            useMouseEnter: m,
            renderPopout: g,
            layerContext: A,
            position: I = "right",
            autoInvert: T = !0,
            nudgeAlignIntoViewport: S = !0,
            spacing: y = 8,
            clickTrap: N = !1,
        } = this.props;
        return (0, i.jsx)(l.$, {
            ref: this.ref,
            targetElementRef: this.props.targetElementRef,
            preload: _,
            loadingComponent: f,
            position: I,
            align:
                null != s
                    ? s
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
                      })(I),
            autoInvert: T,
            fixed: a,
            nudgeAlignIntoViewport: S,
            useRawTargetDimensions: o,
            renderPopout: this.renderPopout,
            spacing: y,
            shouldShow: null != g && t,
            onRequestOpen: n,
            onRequestClose: r,
            onShiftClick: u,
            positionKey: d,
            popoutKey: c,
            disablePointerEvents: E,
            ignoreModalClicks: h,
            scrollBehavior: p,
            useMouseEnter: m,
            layerContext: A,
            clickTrap: N,
            children: e,
        });
    }
    renderPopout = (e) => {
        let { renderPopout: t, animation: n = "2", animationPosition: r } = this.props;
        switch ((null != r && null != e.position && (e.position = r), n)) {
            case "2":
            case "3":
            case "4":
                return (0, i.jsx)(u.m, { position: e.position, type: _[n], children: t(e) });
            case "1":
                return t(e);
        }
        throw Error(`Unsupported animation config: ${JSON.stringify(n)}`);
    };
}
function E(e) {
    let { renderPopout: t, ...n } = e,
        r = s.useRef(null),
        [l, u] = s.useState(0);
    function c() {
        return E(), (0, i.jsx)(i.Fragment, {});
    }
    s.useLayoutEffect(() => {
        l > 0 && r.current?.ref?.current?.layerRef?.current?.updatePosition();
    }, [l]),
        (0, o.Ay)(() => {
            let e = setTimeout(t, 20 + 20 * Math.random());
            return () => clearTimeout(e);
        });
    let _ = s.useRef(!1);
    async function E() {
        if (!_.current) {
            _.current = !0;
            let e = setTimeout(() => {
                    m(() => h), u((e) => e + 1);
                }, 300),
                n = await t();
            m(() => n), u((e) => e + 1), clearTimeout(e);
        }
    }
    function h() {
        let e = r.current?.ref?.current?.domElementRef?.current,
            t = Math.max(100, null == e ? 100 : e.offsetWidth - 20);
        return (0, i.jsx)("div", { className: d.w, style: { width: t }, children: (0, i.jsx)(a.y, {}) });
    }
    let [p, m] = s.useState(() => c),
        g = s.useRef(c);
    return (
        s.useEffect(() => {
            g.current = c;
        }),
        s.useEffect(() => {
            _.current
                ? t().then((e) => {
                      m(() => e), u((e) => e + 1);
                  })
                : m(() => g.current);
        }, [t]),
        (0, i.jsx)(f, { ref: r, ...n, renderPopout: p })
    );
}
E.Animation = c;
