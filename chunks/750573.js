"use strict";
function n(t, r) {
    return (n = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, r) {
              return (t.__proto__ = r), t;
          })(t, r);
}
function o(t, r) {
    (t.prototype = Object.create(r.prototype)), (t.prototype.constructor = t), n(t, r);
}
e.d(r, { A: () => o });
