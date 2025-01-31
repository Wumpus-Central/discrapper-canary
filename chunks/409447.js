n.d(t, { u: () => o });
var i = n(192379),
    r = n(676062),
    a = n(749537);
let s = (e) => {
        let t = 'translate('.concat(e.x.toFixed(1), 'px, ').concat(e.y.toFixed(1), 'px)');
        return {
            pointerEvents: 'none',
            position: 'fixed',
            top: 0,
            left: 0,
            transform: t,
            WebkitTransform: t
        };
    },
    o = () => {
        let e = (0, i.useRef)(null),
            t = (0, r.f)((t) => ({
                currentOffset: (0, a.s)(t, e),
                isDragging: t.isDragging(),
                itemType: t.getItemType(),
                item: t.getItem(),
                monitor: t
            }));
        return t.isDragging && null !== t.currentOffset
            ? {
                  display: !0,
                  itemType: t.itemType,
                  item: t.item,
                  style: s(t.currentOffset),
                  monitor: t.monitor,
                  ref: e
              }
            : { display: !1 };
    };
