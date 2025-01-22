r.d(n, {
    u: function () {
        return l;
    }
});
var i = r(192379),
    a = r(676062),
    o = r(749537);
let s = (e) => {
        let n = 'translate('.concat(e.x.toFixed(1), 'px, ').concat(e.y.toFixed(1), 'px)');
        return {
            pointerEvents: 'none',
            position: 'fixed',
            top: 0,
            left: 0,
            transform: n,
            WebkitTransform: n
        };
    },
    l = () => {
        let e = (0, i.useRef)(null),
            n = (0, a.f)((n) => ({
                currentOffset: (0, o.s)(n, e),
                isDragging: n.isDragging(),
                itemType: n.getItemType(),
                item: n.getItem(),
                monitor: n
            }));
        return n.isDragging && null !== n.currentOffset
            ? {
                  display: !0,
                  itemType: n.itemType,
                  item: n.item,
                  style: s(n.currentOffset),
                  monitor: n.monitor,
                  ref: e
              }
            : { display: !1 };
    };
