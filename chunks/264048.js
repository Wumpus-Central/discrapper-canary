"use strict";
var n = r(691262),
    o = (function () {
        try {
            return !!Object.defineProperty({}, "a", {});
        } catch (e) {
            return !1;
        }
    })();
o || Object.prototype.__defineGetter__;
var i = o
        ? Object.defineProperty
        : function (e, t, r) {
              "get" in r && e.__defineGetter__
                  ? e.__defineGetter__(t, r.get)
                  : (!n.hop.call(e, t) || "value" in r) && (e[t] = r.value);
          },
    a =
        Object.create ||
        function (e, t) {
            var r, o;
            function a() {}
            for (o in ((a.prototype = e), (r = new a()), t)) n.hop.call(t, o) && i(r, o, t[o]);
            return r;
        };
(t.defineProperty = i), (t.objCreate = a);
