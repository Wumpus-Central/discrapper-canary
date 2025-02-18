n.d(t, { X: () => m }), n(47120);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(392711),
    s = n(442837),
    c = n(110924),
    d = n(819640),
    u = n(120370);
let h = (e, t) => (void 0 !== t && t > e ? t : e);
function m(e) {
    let { children: t, style: n, className: l, key: m, ...x } = e,
        { offsets: _ } = (function (e) {
            let { key: t, backgroundElementRef: n, getOffsetsRelativeToElement: a, fallbackAbsoluteOffsets: l, onGetBoundingRect: i = () => {}, debounceTime: u = 60, minimumOffsets: m } = e,
                { hasLayers: x } = (0, s.cj)([d.Z], () => ({ hasLayers: d.Z.hasLayers() })),
                [_, p] = r.useState(null),
                f = r.useCallback(() => {
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
                b = r.useCallback(() => {
                    let e = n.current;
                    if (null === e) return l;
                    let t = { ...a(f()) },
                        r = e.getBoundingClientRect();
                    return void 0 !== t.top && (t.top = h(r.top + t.top, null == m ? void 0 : m.top)), void 0 !== t.left && (t.left = h(r.left + t.left, null == m ? void 0 : m.left)), void 0 !== t.right && (t.right = h(window.innerWidth - r.right + t.right, null == m ? void 0 : m.right)), void 0 !== t.bottom && (t.bottom = h(window.innerHeight - r.bottom + t.bottom, null == m ? void 0 : m.bottom)), (0, o.isEqual)(t, _) || p(t), i(r), t;
                }, [a, l, _, f, m, n, i]);
            r.useEffect(() => {
                b();
            }, [t, b]);
            let g = (0, c.Z)(x),
                v = r.useRef(null),
                j = r.useRef(0);
            r.useEffect(() => {
                g &&
                    !x &&
                    (null === v.current || j.current >= 3) &&
                    (v.current = setInterval(() => {
                        if (j.current >= 5) {
                            clearInterval(v.current), (v.current = null), (j.current = 0);
                            return;
                        }
                        b(), j.current++;
                    }, 200));
            }, [b, x, g]);
            let C = r.useMemo(
                () =>
                    (0, o.debounce)(() => {
                        b();
                    }, u),
                [b, u]
            );
            return (
                r.useEffect(
                    () => (
                        window.addEventListener('resize', C),
                        () => {
                            window.removeEventListener('resize', C);
                        }
                    ),
                    [C]
                ),
                {
                    offsets: _,
                    getElementDimensions: f,
                    updateElementOffsets: b
                }
            );
        })({ ...x }),
        p = {
            ..._,
            ...n
        };
    return null === _
        ? null
        : (0, a.jsx)(
              'div',
              {
                  style: p,
                  className: i()(u.wrapper, l),
                  children: t
              },
              m
          );
}
m.displayName = 'ElementOffsetModalContentWrapper';
