"use strict";
n.d(t, { Be: () => s, Y1: () => a });
let r = "u" > typeof global ? global : self,
    i = r.MutationObserver || r.WebKitMutationObserver;
function s(e) {
    return function () {
        let t = setTimeout(r, 0),
            n = setInterval(r, 50);
        function r() {
            clearTimeout(t), clearInterval(n), e();
        }
    };
}
let a =
    "function" == typeof i
        ? function (e) {
              let t = 1,
                  n = new i(e),
                  r = document.createTextNode("");
              return (
                  n.observe(r, { characterData: !0 }),
                  function () {
                      r.data = t = -t;
                  }
              );
          }
        : s;
