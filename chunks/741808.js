n.d(t, { X: () => s }), n(47120);
var a = n(200651),
    r = n(192379),
    l = n(392711);
let i = (e, t) => (void 0 !== t && t > e ? t : e),
    o = {
        position: 'absolute',
        pointerEvents: 'all'
    };
function s(e) {
    let { children: t, className: n, key: s, ...c } = e,
        { baseStyles: d, offsets: u } = (function (e) {
            let { key: t, backgroundElementRef: n, getOffsetsRelativeToElement: a, fallbackAbsoluteOffsets: s, onGetBoundingRect: c = () => {}, debounceTime: d = 60, minimumOffsets: u } = e,
                [h, m] = r.useState(null),
                x = r.useCallback(() => {
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
                _ = r.useCallback(() => {
                    let e = n.current;
                    if (null === e) return s;
                    let t = { ...a(x()) },
                        r = e.getBoundingClientRect();
                    return void 0 !== t.top && (t.top = i(r.top + t.top, null == u ? void 0 : u.top)), void 0 !== t.left && (t.left = i(r.left + t.left, null == u ? void 0 : u.left)), void 0 !== t.right && (t.right = i(window.innerWidth - r.right + t.right, null == u ? void 0 : u.right)), void 0 !== t.bottom && (t.bottom = i(window.innerHeight - r.bottom + t.bottom, null == u ? void 0 : u.bottom)), (0, l.isEqual)(t, h) || m(t), c(r), t;
                }, [a, s, h, x, u, n, c]);
            r.useEffect(() => {
                _();
            }, [t, _]);
            let p = r.useMemo(
                () =>
                    (0, l.debounce)(() => {
                        _();
                    }, d),
                [_, d]
            );
            return (
                r.useEffect(
                    () => (
                        window.addEventListener('resize', p),
                        () => {
                            window.removeEventListener('resize', p);
                        }
                    ),
                    [p]
                ),
                {
                    offsets: h,
                    baseStyles: o,
                    getElementDimensions: x,
                    updateElementOffsets: _
                }
            );
        })({ ...c }),
        h = {
            ...d,
            ...u
        };
    return null === u
        ? null
        : (0, a.jsx)(
              'div',
              {
                  style: { ...h },
                  className: n,
                  children: t
              },
              s
          );
}
s.displayName = 'ElementOffsetModalContentWrapper';
