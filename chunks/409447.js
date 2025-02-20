n.d(t, { u: () => s });
var r = n(192379),
    i = n(676062),
    o = n(749537);
let a = (e) => {
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
    s = () => {
        let e = (0, r.useRef)(null),
            t = (0, i.f)((t) => ({
                currentOffset: (0, o.s)(t, e),
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
                  style: a(t.currentOffset),
                  monitor: t.monitor,
                  ref: e
              }
            : { display: !1 };
    };
