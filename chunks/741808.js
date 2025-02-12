n.d(t, { X: () => c }), n(47120);
var i = n(200651),
    a = n(192379),
    o = n(392711);
let r = (e, t) => (void 0 !== t && t > e ? t : e),
    l = {
        position: 'absolute',
        pointerEvents: 'all'
    };
function c(e) {
    let { children: t, className: n, key: c, ...s } = e,
        { baseStyles: _, offsets: d } = (function (e) {
            let { key: t, backgroundElementRef: n, getOffsetsRelativeToElement: i, fallbackAbsoluteOffsets: c, onGetBoundingRect: s = () => {}, debounceTime: _ = 60, minimumOffsets: d } = e,
                [u, f] = a.useState(null),
                p = a.useCallback(() => {
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
                g = a.useCallback(() => {
                    let e = n.current;
                    if (null === e) return c;
                    let t = { ...i(p()) },
                        a = e.getBoundingClientRect();
                    return void 0 !== t.top && (t.top = r(a.top + t.top, null == d ? void 0 : d.top)), void 0 !== t.left && (t.left = r(a.left + t.left, null == d ? void 0 : d.left)), void 0 !== t.right && (t.right = r(window.innerWidth - a.right + t.right, null == d ? void 0 : d.right)), void 0 !== t.bottom && (t.bottom = r(window.innerHeight - a.bottom + t.bottom, null == d ? void 0 : d.bottom)), (0, o.isEqual)(t, u) || f(t), s(a), t;
                }, [i, c, u, p, d, n, s]);
            a.useEffect(() => {
                g();
            }, [t, g]);
            let b = a.useMemo(
                () =>
                    (0, o.debounce)(() => {
                        g();
                    }, _),
                [g, _]
            );
            return (
                a.useEffect(
                    () => (
                        window.addEventListener('resize', b),
                        () => {
                            window.removeEventListener('resize', b);
                        }
                    ),
                    [b]
                ),
                {
                    offsets: u,
                    baseStyles: l,
                    getElementDimensions: p,
                    updateElementOffsets: g
                }
            );
        })({ ...s }),
        u = {
            ..._,
            ...d
        };
    return null === d
        ? null
        : (0, i.jsx)(
              'div',
              {
                  style: { ...u },
                  className: n,
                  children: t
              },
              c
          );
}
c.displayName = 'ElementOffsetModalContentWrapper';
