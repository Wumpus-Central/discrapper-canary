var r = n(691262),
    i = (function () {
        try {
            return !!Object.defineProperty({}, "a", {});
        } catch (e) {
            return !1;
        }
    })();
i || Object.prototype.__defineGetter__;
var a = i
        ? Object.defineProperty
        : function (e, t, n) {
              "get" in n && e.__defineGetter__
                  ? e.__defineGetter__(t, n.get)
                  : (!r.hop.call(e, t) || "value" in n) && (e[t] = n.value);
          },
    s =
        Object.create ||
        function (e, t) {
            var n, i;

            function s() {}
            for (i in ((s.prototype = e), (n = new s()), t)) r.hop.call(t, i) && a(n, i, t[i]);
            return n;
        };
(t.defineProperty = a), (t.objCreate = s);
