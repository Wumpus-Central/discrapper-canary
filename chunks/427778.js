"use strict";
n.d(t, { A: () => i });
var r = n(200427);
function i(e, t) {
    e.classList
        ? e.classList.add(t)
        : (0, r.A)(e, t) ||
          ("string" == typeof e.className
              ? (e.className = e.className + " " + t)
              : e.setAttribute("class", ((e.className && e.className.baseVal) || "") + " " + t));
}
