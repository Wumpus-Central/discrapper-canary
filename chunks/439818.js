"use strict";
n.d(t, { A: () => i });
let r = /[^a-zA-Z0-9-_.]/g,
    i = function (e) {
        return e.trim().replaceAll(" ", "_").replaceAll(r, "");
    };
