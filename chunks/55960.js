"use strict";
n.d(t, { g: () => a });
var r = n(64700),
    i = n(688807),
    s = n(73289);
let a = () => {
    var e;
    let t,
        n = (0, r.useRef)(null),
        a = (0, i.V)((e) => ({
            currentOffset: (0, s.D)(e, n),
            isDragging: e.isDragging(),
            itemType: e.getItemType(),
            item: e.getItem(),
            monitor: e,
        }));
    return a.isDragging && null !== a.currentOffset
        ? {
              display: !0,
              itemType: a.itemType,
              item: a.item,
              style:
                  ((e = a.currentOffset),
                  {
                      pointerEvents: "none",
                      position: "fixed",
                      top: 0,
                      left: 0,
                      transform: (t = "translate(".concat(e.x.toFixed(1), "px, ").concat(e.y.toFixed(1), "px)")),
                      WebkitTransform: t,
                  }),
              monitor: a.monitor,
              ref: n,
          }
        : { display: !1 };
};
