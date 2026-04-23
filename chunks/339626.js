var t = "object" == typeof document && document.all;
r.exports =
    void 0 === t && void 0 !== t
        ? function (r) {
              return "function" == typeof r || r === t;
          }
        : function (r) {
              return "function" == typeof r;
          };
