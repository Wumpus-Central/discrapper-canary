"use strict";
var n = r(691262),
    i = (function () {
        try {
            return !!Object.defineProperty({}, "a", {});
        } catch (e) {
            return !1;
        }
    })();
i || Object.prototype.__defineGetter__;
var o = i
        ? Object.defineProperty
        : function (e, t, r) {
              "get" in r && e.__defineGetter__
                  ? e.__defineGetter__(t, r.get)
                  : (!n.hop.call(e, t) || "value" in r) && (e[t] = r.value);
          },
    a =
        Object.create ||
        function (e, t) {
            var r, i;
            function a() {}
            for (i in ((a.prototype = e), (r = new a()), t)) n.hop.call(t, i) && o(r, i, t[i]);
            return r;
        };
(t.defineProperty = o), (t.objCreate = a);
