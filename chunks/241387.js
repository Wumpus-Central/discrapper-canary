n.d(t, {
    A: () => f,
}),
    n(896048);
var r = n(64700),
    i = n(965609),
    a = n(484702),
    s = n(403431);

function o(e, t, n) {
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

function l(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}

function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = Object.freeze({
    coordsMap: {},
    visibleSections: {},
    totalHeight: 0,
    gridData: {
        boundaries: [],
        coordinates: {},
    },
});

function f(e) {
    let {
            sections: t,
            columns: n,
            getItemKey: o,
            getItemHeight: c,
            getSectionHeight: f,
            chunkSize: p = 250,
            getScrollerState: _,
            maxBufferWidth: h,
            itemGutter: m,
            removeEdgeItemGutters: g,
            sectionGutter: E,
            padding: b,
            paddingVertical: y,
            paddingHorizontal: O,
            dir: A,
        } = e,
        v = (0, a.A)(),
        S = (0, r.useRef)(d),
        [I] = (0, r.useState)(() => new i.Ay()),
        T = _(),
        C = Math.min(null != h ? h : 1 / 0, T.offsetWidth),
        N = null != h ? Math.max(0, T.offsetWidth - h) : 0,
        {
            dirty: R,
            chunkStart: w,
            chunkEnd: P,
            forceUpdateOnChunkChange: D,
        } = (0, s.A)({
            chunkSize: p,
            getScrollerState: _,
            forceUpdate: v,
        });
    return (
        (S.current = (0, r.useMemo)(
            () =>
                R > 0
                    ? S.current
                    : (I.mergeProps({
                          sections: t,
                          columns: n,
                          getItemKey: o,
                          getItemHeight: c,
                          getSectionHeight: f,
                          bufferWidth: C,
                          itemGutter: m,
                          removeEdgeItemGutters: g,
                          sectionGutter: E,
                          padding: b,
                          paddingVertical: y,
                          paddingHorizontal: O,
                          marginLeft: N / 2,
                          dir: A,
                      }),
                      I.computeVisibleSections(Math.max(0, w * p), P * p),
                      I.getState()),
            [R, I, t, n, o, c, f, w, P, p, m, g, E, b, y, O, C, N, A],
        )),
        u(l({}, S.current), {
            masonryComputer: I,
            forceUpdateOnChunkChange: D,
            forceUpdate: v,
        })
    );
}
