n.d(t, { X: () => o }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(392711);
let s = (e, t) => (void 0 !== t && t > e ? t : e);
function o(e) {
    let { children: t, className: n, ...o } = e,
        { baseStyles: a, offsets: c } = (function (e) {
            let { backgroundElementRef: t, getOffsetsRelativeToElement: n, fallbackAbsoluteOffsets: i, debounceTime: o = 60, minimumOffsets: a } = e,
                [c, d] = l.useState(null),
                u = l.useCallback(() => {
                    let e = t.current;
                    return null === e
                        ? {
                              height: 0,
                              width: 0
                          }
                        : {
                              height: e.offsetHeight,
                              width: e.offsetWidth
                          };
                }, [t]),
                _ = l.useCallback(() => {
                    let e = t.current,
                        l = { ...i };
                    if (null === e) return l;
                    let o = n(u()),
                        _ = e.getBoundingClientRect();
                    return void 0 !== o.top && (l.top = s(_.top + o.top, null == a ? void 0 : a.top)), void 0 !== o.left && (l.left = s(_.left + o.left, null == a ? void 0 : a.left)), void 0 !== o.right && (l.right = s(window.innerWidth - _.right + o.right, null == a ? void 0 : a.right)), void 0 !== o.bottom && (l.bottom = s(window.innerHeight - _.bottom + o.bottom, null == a ? void 0 : a.bottom)), (0, r.isEqual)(l, c) || d(l), l;
                }, [n, i, c, u, a, t]),
                E = l.useMemo(
                    () =>
                        (0, r.debounce)(() => {
                            let e = _();
                            !(0, r.isEqual)(e, c) && d(e);
                        }, o),
                    [c, _, o]
                );
            return (
                l.useEffect(() => {
                    null === c && null !== t.current && _();
                }, [c, _, t]),
                l.useEffect(
                    () => (
                        window.addEventListener('resize', E),
                        () => {
                            window.removeEventListener('resize', E);
                        }
                    ),
                    [E]
                ),
                {
                    offsets: c,
                    baseStyles: {
                        position: 'absolute',
                        pointerEvents: 'all'
                    },
                    getElementDimensions: u,
                    getAbsoluteOffsets: _
                }
            );
        })(o),
        d = {
            ...a,
            ...c
        };
    return null === c
        ? null
        : (0, i.jsx)('div', {
              style: { ...d },
              className: n,
              children: t
          });
}
o.displayName = 'ElementOffsetModalContentWrapper';
