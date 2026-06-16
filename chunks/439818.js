"use strict";
n.d(t, { A: () => r });
let i = /[^a-zA-Z0-9-_.]/g,
    r = function (e) {
        return e.trim().replaceAll(" ", "_").replaceAll(i, "");
    };
