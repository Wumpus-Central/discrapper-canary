n.d(t, { X: () => f }), n(47120);
var i = n(200651),
    a = n(192379),
    o = n(120356),
    r = n.n(o),
    l = n(392711),
    c = n(442837),
    s = n(110924),
    _ = n(819640),
    d = n(120370);
let u = (e, t) => (void 0 !== t && t > e ? t : e);
function f(e) {
    let { children: t, className: n, key: o, ...f } = e,
        { offsets: p } = (function (e) {
            let { key: t, backgroundElementRef: n, getOffsetsRelativeToElement: i, fallbackAbsoluteOffsets: o, onGetBoundingRect: r = () => {}, debounceTime: d = 60, minimumOffsets: f } = e,
                { hasLayers: p } = (0, c.cj)([_.Z], () => ({ hasLayers: _.Z.hasLayers() })),
                [h, g] = a.useState(null),
                b = a.useCallback(() => {
                    let e = n.current;
                    return null === e
                        ? {
                              height: 0,
                              width: 0
                          }
                        : {
                              height: e.offsetHeight,
                              width: e.offsetWidth
                          };
                }, [n]),
                m = a.useCallback(() => {
                    let e = n.current;
                    if (null === e) return o;
                    let t = { ...i(b()) },
                        a = e.getBoundingClientRect();
                    return void 0 !== t.top && (t.top = u(a.top + t.top, null == f ? void 0 : f.top)), void 0 !== t.left && (t.left = u(a.left + t.left, null == f ? void 0 : f.left)), void 0 !== t.right && (t.right = u(window.innerWidth - a.right + t.right, null == f ? void 0 : f.right)), void 0 !== t.bottom && (t.bottom = u(window.innerHeight - a.bottom + t.bottom, null == f ? void 0 : f.bottom)), (0, l.isEqual)(t, h) || g(t), r(a), t;
                }, [i, o, h, b, f, n, r]);
            a.useEffect(() => {
                m();
            }, [t, m]);
            let C = (0, s.Z)(p),
                E = a.useRef(null),
                I = a.useRef(0);
            a.useEffect(() => {
                C &&
                    !p &&
                    (null === E.current || I.current >= 3) &&
                    (E.current = setInterval(() => {
                        if (I.current >= 5) {
                            clearInterval(E.current), (E.current = null), (I.current = 0);
                            return;
                        }
                        m(), I.current++;
                    }, 200));
            }, [m, p, C]);
            let T = a.useMemo(
                () =>
                    (0, l.debounce)(() => {
                        m();
                    }, d),
                [m, d]
            );
            return (
                a.useEffect(
                    () => (
                        window.addEventListener('resize', T),
                        () => {
                            window.removeEventListener('resize', T);
                        }
                    ),
                    [T]
                ),
                {
                    offsets: h,
                    getElementDimensions: b,
                    updateElementOffsets: m
                }
            );
        })({ ...f }),
        h = { ...p };
    return null === p
        ? null
        : (0, i.jsx)(
              'div',
              {
                  style: h,
                  className: r()(d.wrapper, n),
                  children: t
              },
              o
          );
}
f.displayName = 'ElementOffsetModalContentWrapper';
